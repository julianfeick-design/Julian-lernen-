/*
 * Handschrift-Feld für den Apple Pencil (und auf Wunsch den Finger).
 * Werkzeuge: Stift, Radierer, 3 Farben, Rückgängig, Löschen, Finger an/aus, mehr Platz.
 * Der Stift schreibt, der Finger scrollt weiter normal (Handballen wird ignoriert).
 * Striche werden getrennt vom Lernstand gespeichert (localStorage „julian-lernen-ink“).
 *
 * API: Ink.html(id, {ph}) → HTML · Ink.mount(root) · Ink.has(id) · Ink.image(id) → JPEG-Data-URL
 *      Ink.clear(id) · Ink.onChange(id, fn)
 */
window.Ink = (function () {
  const KEY = "julian-lernen-ink", PKEY = KEY + "-prefs", W = 1000, MAX_CHARS = 1800000;
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { store = {}; }
  const prefs = { tool: "pen", color: "ink", finger: null, penSeen: false };
  try { Object.assign(prefs, JSON.parse(localStorage.getItem(PKEY) || "{}")); } catch { /* egal */ }
  const savePrefs = () => { try { localStorage.setItem(PKEY, JSON.stringify(prefs)); } catch { /* egal */ } };
  const bigScreen = () => window.matchMedia("(min-width: 700px)").matches;
  const fingerOn = () => prefs.finger !== null ? prefs.finger : (!prefs.penSeen && !bigScreen());

  // ---------- Speichern (älteste Blätter fliegen raus, wenn es zu viel wird) ----------
  let saveT;
  function persist() {
    clearTimeout(saveT);
    saveT = setTimeout(() => {
      const out = {};
      Object.entries(store).forEach(([id, r]) => { if (r.s && r.s.length) out[id] = r; });
      let json = JSON.stringify(out);
      const ids = Object.keys(out).sort((a, b) => (out[a].t || 0) - (out[b].t || 0));
      while (json.length > MAX_CHARS && ids.length > 1) { delete out[ids.shift()]; json = JSON.stringify(out); }
      for (let i = 0; i < 6; i++) {
        try { localStorage.setItem(KEY, json); return; }
        catch { if (ids.length <= 1) return; delete out[ids.shift()]; json = JSON.stringify(out); }
      }
    }, 250);
  }

  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const screenColors = () => {
    const ink = css("--text") || "#111", acc = css("--primary") || "#0f9f8f";
    return { ink, acc: acc.toLowerCase() === ink.toLowerCase() ? "#2563eb" : acc, red: "#e5484d" };
  };
  const PRINT = { ink: "#111111", acc: "#0f766e", red: "#d92d20" };
  const ic = (n) => window.icon ? `<span class="ic">${window.icon(n)}</span>` : "";

  // ---------- Zeichnen ----------
  const widthOf = (s, pt, k) => s.c === "er" ? s.w * k : s.w * k * (0.78 + 0.44 * (pt[2] == null ? 0.5 : pt[2] / 100));
  function styleFor(ctx, s, cm) {
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (s.c === "er") { ctx.globalCompositeOperation = "destination-out"; ctx.strokeStyle = ctx.fillStyle = "#000"; }
    else ctx.strokeStyle = ctx.fillStyle = cm[s.c] || cm.ink;
  }
  // Catmull-Rom-Spline: Die Linie läuft genau durch jeden Stiftpunkt und ist trotzdem rund.
  function seg(ctx, s, k, i) {
    const p = s.p, a = p[i - 1] || p[i], b = p[i], c = p[i + 1], d = p[i + 2] || c;
    ctx.lineWidth = widthOf(s, [0, 0, ((b[2] == null ? 50 : b[2]) + (c[2] == null ? 50 : c[2])) / 2], k);
    ctx.beginPath();
    ctx.moveTo(b[0] * k, b[1] * k);
    ctx.bezierCurveTo((b[0] + (c[0] - a[0]) / 6) * k, (b[1] + (c[1] - a[1]) / 6) * k,
      (c[0] - (d[0] - b[0]) / 6) * k, (c[1] - (d[1] - b[1]) / 6) * k, c[0] * k, c[1] * k);
    ctx.stroke();
  }
  // Zeichnet die Abschnitte from … to-1 (ohne Angabe: den ganzen Strich)
  function paint(ctx, s, k, cm, from = 0, to) {
    const p = s.p, end = to == null ? p.length - 1 : to;
    ctx.save(); styleFor(ctx, s, cm);
    if (from === 0) { ctx.beginPath(); ctx.arc(p[0][0] * k, p[0][1] * k, widthOf(s, p[0], k) / 2, 0, Math.PI * 2); ctx.fill(); }
    for (let i = from; i < end; i++) seg(ctx, s, k, i);
    ctx.restore();
  }

  // ---------- HTML ----------
  function html(id, opts = {}) {
    const ph = opts.ph || "Schreib hier mit dem Apple Pencil …";
    return `<div class="ink" data-ink="${String(id).replace(/"/g, "&quot;")}">
      <div class="ink-bar" role="toolbar" aria-label="Schreibwerkzeuge">
        <button type="button" class="ink-b" data-tool="pen" title="Stift" aria-label="Stift">${ic("pencil")}</button>
        <button type="button" class="ink-b" data-tool="eraser" title="Radierer" aria-label="Radierer">${ic("eraser")}</button>
        <span class="ink-sep"></span>
        <button type="button" class="ink-c" data-color="ink" title="Schwarz" aria-label="Farbe Schwarz"><i></i></button>
        <button type="button" class="ink-c" data-color="acc" title="Akzentfarbe" aria-label="Farbe Akzent"><i></i></button>
        <button type="button" class="ink-c" data-color="red" title="Rot" aria-label="Farbe Rot"><i></i></button>
        <span class="ink-sep"></span>
        <button type="button" class="ink-b" data-act="undo" title="Rückgängig" aria-label="Rückgängig">${ic("rotate-ccw")}</button>
        <button type="button" class="ink-b" data-act="clear" title="Blatt leeren" aria-label="Blatt leeren">${ic("trash-2")}</button>
        <span class="ink-grow"></span>
        <button type="button" class="ink-b ink-finger" data-act="finger" title="Mit dem Finger schreiben an/aus" aria-label="Mit dem Finger schreiben">${ic("hand")}</button>
        <button type="button" class="ink-b" data-act="more" title="Mehr Platz" aria-label="Mehr Platz">${ic("plus")}</button>
      </div>
      <div class="ink-paper"><canvas></canvas><span class="ink-ph">${ph}</span></div>
    </div>`;
  }

  function syncBars() {
    const cm = screenColors();
    document.querySelectorAll(".ink").forEach(el => {
      el.querySelectorAll("[data-color] i").forEach(i => { i.style.background = cm[i.parentNode.dataset.color]; });
      el.querySelectorAll("[data-tool]").forEach(b => b.classList.toggle("on", b.dataset.tool === prefs.tool));
      el.querySelectorAll("[data-color]").forEach(b => b.classList.toggle("on", prefs.tool === "pen" && b.dataset.color === prefs.color));
      const fb = el.querySelector(".ink-finger"); if (fb) fb.classList.toggle("on", fingerOn());
      const cv = el.querySelector("canvas"); if (cv) cv.style.touchAction = fingerOn() ? "none" : "pan-x pan-y";
      el.classList.toggle("eraser", prefs.tool === "eraser");
    });
  }

  // ---------- Einbauen ----------
  const live = new Map(), listeners = {};
  const fire = (id) => { if (listeners[id]) listeners[id](); };
  function mount(root = document) {
    root.querySelectorAll(".ink:not([data-ready])").forEach(setup);
    syncBars();
  }
  let drawingNow = false;
  document.addEventListener("selectstart", e => { if (drawingNow || (e.target && e.target.closest && e.target.closest(".ink"))) e.preventDefault(); });
  function setup(el) {
    el.dataset.ready = "1";
    const id = el.dataset.ink, cv = el.querySelector("canvas"), paper = el.querySelector(".ink-paper"), ph = el.querySelector(".ink-ph");
    const rec = store[id] || (store[id] = { s: [], r: 0, t: Date.now() });
    const ctx = cv.getContext("2d");
    const ov = document.createElement("canvas"); ov.className = "ink-ov"; paper.appendChild(ov);   // Ebene für den Strich, der gerade entsteht
    const octx = ov.getContext("2d");
    let k = 1, cur = null, cm = screenColors(), raf = 0;
    const redraw = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      cm = screenColors();
      rec.s.forEach(s => paint(ctx, s, k, cm));
      ph.classList.toggle("hidden", rec.s.length > 0);
    };
    const resize = () => {
      const w = paper.clientWidth; if (!w) return;
      if (!rec.r) rec.r = w < 600 ? 0.75 : 0.42;
      const h = Math.round(w * rec.r), dpr = Math.min(window.devicePixelRatio || 1, 3);
      paper.style.height = h + "px";
      [cv, ov].forEach(c => { c.style.width = w + "px"; c.style.height = h + "px"; c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); });
      k = w / W * dpr;
      redraw();
    };
    if (window.ResizeObserver) new ResizeObserver(resize).observe(paper); else window.addEventListener("resize", resize);
    resize();
    live.set(id, { rec, redraw });

    const pt = (e) => {
      const r = cv.getBoundingClientRect(), f = W / r.width;
      return [Math.round((e.clientX - r.left) * f * 10) / 10, Math.round((e.clientY - r.top) * f * 10) / 10, e.pointerType === "pen" ? Math.round((e.pressure || 0.5) * 100) : 50];
    };
    const drawLive = () => { raf = 0; if (!cur || cur.c === "er") return; octx.clearRect(0, 0, ov.width, ov.height); paint(octx, cur, k, cm); };
    cv.addEventListener("pointerdown", e => {
      if (e.pointerType === "pen" && !prefs.penSeen) { prefs.penSeen = true; if (prefs.finger === null) prefs.finger = false; savePrefs(); syncBars(); }
      if (e.pointerType === "touch" && !fingerOn()) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      try { cv.setPointerCapture(e.pointerId); } catch { /* egal */ }
      try { const sel = window.getSelection(); if (sel && sel.rangeCount) sel.removeAllRanges(); } catch { /* egal */ }
      drawingNow = true;
      const er = prefs.tool === "eraser" || (e.buttons & 32);
      cm = screenColors();
      const px = W / (cv.getBoundingClientRect().width || W);   // 1 Bildschirm-Pixel in Blatt-Einheiten
      const first = pt(e);
      cur = { c: er ? "er" : prefs.color, w: Math.round((er ? 24 : 2.8) * px * 100) / 100, p: [first], pid: e.pointerId, ps: first[2] };
      rec.s.push(cur); rec.t = Date.now();
      ph.classList.add("hidden");
      if (er) paint(ctx, cur, k, cm, 0, 0); else drawLive();
    });
    cv.addEventListener("pointermove", e => {
      if (!cur || e.pointerId !== cur.pid) return;
      e.preventDefault();
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
      for (const ev of (evs.length ? evs : [e])) {
        const q = pt(ev), last = cur.p[cur.p.length - 1];
        if (Math.abs(q[0] - last[0]) + Math.abs(q[1] - last[1]) < 0.8) continue;
        cur.ps = cur.ps * 0.7 + q[2] * 0.3;          // nur den Druck sanft glätten – die Form bleibt exakt
        q[2] = Math.round(cur.ps);
        cur.p.push(q);
        if (cur.c === "er") paint(ctx, cur, k, cm, cur.p.length - 2, cur.p.length - 1);
      }
      if (cur.c !== "er" && !raf) raf = requestAnimationFrame(drawLive);
    });
    const end = (e) => {
      if (!cur || (e && e.pointerId !== cur.pid)) return;
      if (e && e.type === "pointerup" && e.clientX != null) {
        const q = pt(e), last = cur.p[cur.p.length - 1];
        if (Math.abs(q[0] - last[0]) + Math.abs(q[1] - last[1]) >= 0.8) { q[2] = Math.round(cur.ps); cur.p.push(q); }
      }
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      octx.clearRect(0, 0, ov.width, ov.height);
      if (cur.c === "er") redraw(); else paint(ctx, cur, k, cm);
      delete cur.pid; delete cur.ps;
      cur = null; drawingNow = false; persist(); fire(id);
    };
    cv.addEventListener("pointerup", end);
    cv.addEventListener("pointercancel", end);
    cv.addEventListener("lostpointercapture", end);
    cv.addEventListener("contextmenu", e => e.preventDefault());
    // Stift darf die Seite nicht scrollen und keinen Text markieren, Finger scrollt (außer Finger-Modus)
    const stop = (e) => { if (fingerOn() || Array.from(e.touches).some(t => t.touchType === "stylus")) e.preventDefault(); };
    cv.addEventListener("touchstart", stop, { passive: false });
    cv.addEventListener("touchmove", stop, { passive: false });

    el.querySelector(".ink-bar").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.tool) { prefs.tool = b.dataset.tool; savePrefs(); syncBars(); return; }
      if (b.dataset.color) { prefs.color = b.dataset.color; prefs.tool = "pen"; savePrefs(); syncBars(); return; }
      const a = b.dataset.act;
      if (a === "undo") { rec.s.pop(); redraw(); persist(); fire(id); }
      else if (a === "clear") { if (rec.s.length && confirm("Alles auf diesem Blatt löschen?")) { rec.s = []; redraw(); persist(); fire(id); } }
      else if (a === "finger") { prefs.finger = !fingerOn(); savePrefs(); syncBars(); }
      else if (a === "more") { rec.r = Math.min(3, (rec.r || 0.42) + 0.25); resize(); persist(); paper.scrollIntoView({ behavior: "smooth", block: "end" }); }
    });
  }

  // ---------- Abfragen ----------
  function has(id) {
    const r = store[id]; if (!r || !r.s) return false;
    const s = r.s.filter(x => x.c !== "er");
    return s.length >= 2 && s.reduce((t, x) => t + x.p.length, 0) >= 25;
  }
  function clear(id) {
    const l = live.get(id);
    if (l) { l.rec.s = []; l.redraw(); }
    if (store[id]) store[id].s = [];
    persist();
  }
  // Als Bild (schwarze Schrift auf Weiß) – z. B. damit Claude die Handschrift lesen kann
  function image(id, maxW = 1200) {
    const r = store[id]; if (!r || !r.s || !r.s.length) return null;
    let maxY = 0; r.s.forEach(s => { if (s.c !== "er") s.p.forEach(p => { if (p[1] > maxY) maxY = p[1]; }); });
    const k = maxW / W, h = Math.max(220, Math.round(Math.min(maxY + 50, W * (r.r || 0.5)) * k));
    const layer = document.createElement("canvas"); layer.width = maxW; layer.height = h;
    const lx = layer.getContext("2d");
    r.s.forEach(s => paint(lx, s, k, PRINT));
    const c = document.createElement("canvas"); c.width = maxW; c.height = h;
    const x = c.getContext("2d"); x.fillStyle = "#ffffff"; x.fillRect(0, 0, maxW, h); x.drawImage(layer, 0, 0);
    return c.toDataURL("image/jpeg", 0.85);
  }
  const onChange = (id, fn) => { listeners[id] = fn; };
  return { html, mount, has, clear, image, onChange };
})();
