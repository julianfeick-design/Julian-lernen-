/*
 * 📑 Folien-Ansicht: zeigt zu jeder Lernfrage die passende Folie aus Julians eigenen PDFs.
 * Die PDFs werden NUR auf dem Gerät gespeichert (IndexedDB „julian-folien“) – die App ist öffentlich,
 * die Folien der Profs gehören nicht ins Internet. pdf.js (vendor/pdfjs) wird erst bei Bedarf geladen.
 * Zuordnung Lernfrage → Seiten: js/folien.js (window.FOLIEN).
 */
(function () {
  const F = () => window.FOLIEN || { sets: {}, map: {} };
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const say = (opt, msg) => (opt && opt.toast ? opt.toast(msg) : alert(msg.replace(/<[^>]+>/g, "")));

  // ---------- Speicher auf dem Gerät (IndexedDB) ----------
  let dbP = null;
  function db() {
    if (dbP) return dbP;
    dbP = new Promise((res, rej) => {
      if (!window.indexedDB) return rej(new Error("Dieser Browser kann keine Dateien speichern."));
      const r = indexedDB.open("julian-folien", 1);
      r.onupgradeneeded = () => { r.result.createObjectStore("pdf", { keyPath: "id" }); r.result.createObjectStore("meta", { keyPath: "id" }); };
      r.onsuccess = () => res(r.result);
      r.onerror = () => { dbP = null; rej(r.error || new Error("Speicher nicht verfügbar")); };
    });
    return dbP;
  }
  async function req(store, mode, op) {
    const d = await db();
    return new Promise((res, rej) => {
      const t = d.transaction(store, mode), q = op(t.objectStore(store));
      t.oncomplete = () => res(q ? q.result : undefined);
      t.onerror = t.onabort = () => rej(t.error || new Error("Speichern fehlgeschlagen"));
    });
  }
  const getPdf = (id) => req("pdf", "readonly", s => s.get(id));
  const metaAll = () => req("meta", "readonly", s => s.getAll()).catch(() => []);
  async function savePdf(id, blob, meta) {
    await req("pdf", "readwrite", s => s.put({ id, blob }));
    await req("meta", "readwrite", s => s.put({ id, ...meta }));
  }
  async function removePdf(id) {
    await req("pdf", "readwrite", s => s.delete(id));
    await req("meta", "readwrite", s => s.delete(id));
    docs.delete(id);
  }

  // ---------- pdf.js nur bei Bedarf laden ----------
  let libP = null;
  function lib() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (libP) return libP;
    libP = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "vendor/pdfjs/pdf.min.js";
      s.onload = () => {
        const L = window.pdfjsLib;
        if (!L) { libP = null; return rej(new Error("pdf.js fehlt")); }
        L.GlobalWorkerOptions.workerSrc = "vendor/pdfjs/pdf.worker.min.js";
        res(L);
      };
      s.onerror = () => { libP = null; rej(new Error("Der Folien-Viewer konnte nicht geladen werden – bist du online?")); };
      document.head.appendChild(s);
    });
    return libP;
  }
  const OPTS = { cMapUrl: "vendor/pdfjs/cmaps/", cMapPacked: true, standardFontDataUrl: "vendor/pdfjs/standard_fonts/", isEvalSupported: false };
  const docs = new Map();
  function doc(id) {
    if (docs.has(id)) return docs.get(id);
    const p = (async () => {
      const rec = await getPdf(id);
      if (!rec || !rec.blob) return null;
      const L = await lib();
      const data = new Uint8Array(await rec.blob.arrayBuffer());
      return L.getDocument({ data, ...OPTS }).promise;
    })();
    docs.set(id, p);
    p.then(d => { if (!d) docs.delete(id); }, () => docs.delete(id));
    return p;
  }
  async function renderPage(view, id, page) {
    const d = await doc(id);
    if (!d) return false;
    if (page > d.numPages) throw new Error(`Seite ${page} gibt es in deiner PDF nicht (sie hat ${d.numPages} Seiten).`);
    const pg = await d.getPage(page);
    const v1 = pg.getViewport({ scale: 1 });
    const cssW = Math.max(260, view.clientWidth || 640);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const scale = Math.min(cssW * dpr / v1.width, 2200 / v1.width);
    const vp = pg.getViewport({ scale });
    const c = document.createElement("canvas");
    c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
    c.setAttribute("role", "img");
    await pg.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
    view.replaceChildren(c);
    return true;
  }

  // ---------- Import ----------
  function guess(name, n) {
    const nm = (name || "").toLowerCase();
    const sets = Object.entries(F().sets);
    const byPages = sets.filter(([, s]) => s.pages === n).map(([id]) => id);
    if (byPages.length === 1) return byPages[0];
    const rules = [[/lkw/, "lkw"], [/bwl/, "bwl"], [/schroeder|schröder/, "schroeder1"], [/pl.?folien|_pl_/, "schroeder2"], [/spedition/, "nehm-sped"], [/bahn/, "bahn"], [/kep/, "kep"], [/kombi/, "kv"], [/marketing/, "mkt"], [/mathe/, "mathe"], [/nehm|logistik/, "nehm-log"]];
    const hits = rules.filter(([re]) => re.test(nm)).map(r => r[1]);
    return hits.find(id => byPages.includes(id)) || (byPages.length ? null : hits[0]) || null;
  }
  async function importFile(file, wantId) {
    const L = await lib();
    const buf = await file.arrayBuffer();
    const pd = await L.getDocument({ data: new Uint8Array(buf.slice(0)), ...OPTS }).promise;
    const n = pd.numPages;
    pd.destroy();
    const id = wantId || guess(file.name, n);
    if (!id || !F().sets[id]) throw new Error(`„${file.name}“ (${n} Seiten) passt zu keinem Foliensatz – wähle sie direkt bei der Frage aus.`);
    const s = F().sets[id];
    await savePdf(id, new Blob([buf], { type: "application/pdf" }), { file: file.name, pages: n, size: file.size, d: Date.now() });
    docs.delete(id);
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* egal */ }
    return { id, ok: n === s.pages, msg: n === s.pages ? `✅ ${s.name} gespeichert` : `✅ ${s.name} gespeichert – Achtung: ${n} statt ${s.pages} Seiten, die Folien könnten verrutscht sein.` };
  }
  function pickFiles(multiple, cb) {
    const inp = document.createElement("input");
    inp.type = "file"; inp.accept = "application/pdf,.pdf"; inp.multiple = !!multiple; inp.className = "hidden";
    inp.addEventListener("change", () => { const fs = [...(inp.files || [])]; inp.remove(); if (fs.length) cb(fs); });
    document.body.appendChild(inp);
    inp.click();
  }

  // ---------- Kasten bei einer Frage ----------
  const label = (id, p) => { const s = F().sets[id], n = s && s.fol && s.fol[p - 1]; return n ? `Folie ${n}` : `Seite ${p}`; };
  function refs(key) {
    const v = F().map[key];
    if (!v) return null;
    const [id, ps] = v.split(":");
    return { id, pages: ps.split(",").map(Number) };
  }
  function box(key) {
    const r = refs(key);
    if (!r || !F().sets[r.id]) return "";
    const s = F().sets[r.id];
    return `<div class="fol" data-key="${esc(key)}" data-id="${esc(r.id)}">
      <div class="fol-head"><b>📑 So steht es auf der Folie</b><span class="small muted">${esc(s.name)}</span></div>
      <div class="fol-tabs">${r.pages.map((p, i) => `<button type="button" class="chip ${i ? "" : "active"}" data-p="${p}">${label(r.id, p)}</button>`).join("")}</div>
      <div class="fol-view"><div class="fol-msg small muted">Folie wird geladen …</div></div>
      <p class="small muted fol-note">Vergleiche deine Antwort und die Musterantwort mit der Folie. Passt etwas nicht zusammen, gilt die Folie – sag mir dann gern Bescheid.</p>
    </div>`;
  }
  function missingHtml(id) {
    const s = F().sets[id];
    return `<div class="fol-miss"><p><b>Die PDF ist auf diesem Gerät noch nicht gespeichert.</b> Wähle einmal „${esc(s.file)}“ (${s.pages} Seiten) aus. Sie bleibt nur auf deinem ${/iPad/.test(navigator.userAgent) ? "iPad" : "Gerät"} – nicht im Internet.</p>
      <button type="button" class="btn small" data-imp="${esc(id)}">📂 PDF auswählen</button>
      <p class="small muted" style="margin:8px 0 0">Oder alle auf einmal unter ⚙️ Mehr → 📑 Folien.</p></div>`;
  }
  function mount(root, opt = {}) {
    if (!root) return;
    root.querySelectorAll(".fol").forEach(el => {
      if (el.dataset.ready) return;
      el.dataset.ready = "1";
      const id = el.dataset.id, view = el.querySelector(".fol-view");
      let page = +((el.querySelector(".fol-tabs .chip.active") || {}).dataset || {}).p || refs(el.dataset.key).pages[0];
      const show = async () => {
        view.innerHTML = `<div class="fol-msg small muted">Folie wird geladen …</div>`;
        try {
          if (!(await renderPage(view, id, page))) {
            view.innerHTML = missingHtml(id);
            view.querySelector("[data-imp]").addEventListener("click", () => pickFiles(false, async ([file]) => {
              view.innerHTML = `<div class="fol-msg small muted">PDF wird gespeichert …</div>`;
              try { const r = await importFile(file, id); say(opt, r.msg); show(); }
              catch (e) { say(opt, "⚠️ " + (e.message || e)); show(); }
            }));
          }
        } catch (e) {
          view.innerHTML = `<div class="fol-msg small">⚠️ ${esc(e.message || e)}</div>`;
        }
      };
      el.querySelectorAll(".fol-tabs [data-p]").forEach(b => b.addEventListener("click", () => {
        page = +b.dataset.p;
        el.querySelectorAll(".fol-tabs .chip").forEach(x => x.classList.toggle("active", x === b));
        show();
      }));
      show();
    });
  }

  // ---------- Verwaltung unter ⚙️ Mehr ----------
  const FACH = { logistik: "📦 Logistik", vbl1: "🚚 VBL 1", bwl: "💼 BWL", mathe: "🧮 Mathe" };
  const mb = (b) => (b / 1048576).toFixed(b > 10485760 ? 0 : 1).replace(".", ",") + " MB";
  function settingsCard() {
    return `<div class="card" id="folCard">
      <h2>📑 Folien auf diesem Gerät</h2>
      <p class="small muted">Beim Vergleichen (Erklären und Lernfragen) zeigt dir die App die passende Folie – mit deinen Notizen. Dafür wählst du deine PDFs <b>einmal pro Gerät</b> aus. Sie werden <b>nur hier gespeichert</b>, nicht im Internet, weil die App öffentlich ist.</p>
      <button type="button" class="btn secondary small" id="folAdd">📂 PDFs auswählen (mehrere auf einmal)</button>
      <div id="folList" style="margin-top:12px"><p class="small muted">Wird geladen …</p></div>
    </div>`;
  }
  async function fillSettings(card, opt = {}) {
    if (!card) return;
    const list = card.querySelector("#folList");
    const draw = async () => {
      const have = Object.fromEntries((await metaAll()).map(m => [m.id, m]));
      const byF = {};
      Object.entries(F().sets).forEach(([id, s]) => { (byF[s.fid] = byF[s.fid] || []).push([id, s]); });
      const total = Object.values(have).reduce((t, m) => t + (m.size || 0), 0);
      list.innerHTML = Object.entries(byF).map(([fid, arr]) => `<div class="fol-grp"><b class="small">${FACH[fid] || esc(fid)}</b>${arr.map(([id, s]) => {
        const m = have[id];
        return `<div class="fol-row"><span class="fol-st">${m ? "✅" : "⬜"}</span><span class="fol-nm"><b>${esc(s.name)}</b><small>${m ? `${esc(m.file)} · ${m.pages} Seiten · ${mb(m.size || 0)}` : `fehlt – Datei „${esc(s.file)}“ (${s.pages} Seiten)`}</small></span>${m ? `<button type="button" class="btn-ghost small" data-del="${esc(id)}">Entfernen</button>` : `<button type="button" class="btn-ghost small" data-one="${esc(id)}">Auswählen</button>`}</div>`;
      }).join("")}</div>`).join("") + `<p class="small muted" style="margin:10px 0 0">${Object.keys(have).length} von ${Object.keys(F().sets).length} PDFs gespeichert${total ? ` · ${mb(total)}` : ""}.</p>`;
      list.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", async () => { await removePdf(b.dataset.del); say(opt, "🗑️ PDF entfernt"); draw(); }));
      list.querySelectorAll("[data-one]").forEach(b => b.addEventListener("click", () => pickFiles(false, async ([f]) => {
        try { const r = await importFile(f, b.dataset.one); say(opt, r.msg); } catch (e) { say(opt, "⚠️ " + (e.message || e)); }
        draw();
      })));
    };
    card.querySelector("#folAdd").addEventListener("click", () => pickFiles(true, async (files) => {
      list.innerHTML = `<p class="small muted">${files.length} ${files.length === 1 ? "Datei wird" : "Dateien werden"} gespeichert …</p>`;
      const done = [], bad = [];
      for (const f of files) {
        try { const r = await importFile(f); done.push(F().sets[r.id].name); } catch (e) { bad.push(f.name); }
      }
      say(opt, done.length ? `✅ ${done.length} ${done.length === 1 ? "PDF" : "PDFs"} gespeichert${bad.length ? ` · ${bad.length} nicht erkannt` : ""}` : "⚠️ Keine PDF erkannt – wähle sie bei der passenden Zeile einzeln aus.");
      draw();
    }));
    draw();
  }

  window.Folien = { box, mount, settingsCard, fillSettings, importFile, refs };
})();
