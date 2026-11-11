/*
 * 📊 Schaubilder für die Lernzettel
 * SVG im Stil der Lektions-Schaubilder (Klassen dg-*, passen sich Design und Hell/Dunkel an).
 * Jede Funktion liefert einen SVG-String mit {{defs}} (Pfeilspitzen #ah / #ahp), den app.js einsetzt.
 */
window.SB = (function () {
  const W = 420;
  const e = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const svg = (h, label, body, w = W) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${e(label)}">{{defs}}${body}</svg>`;
  const t = (x, y, s, c = "dg-t", a = "middle") => `<text x="${f(x)}" y="${f(y)}" text-anchor="${a}" class="${c}">${e(s)}</text>`;
  const tl = (x, y, lines, c = "dg-s", a = "middle", lh = 14) => [].concat(lines || []).map((s, i) => t(x, y + i * lh, s, c, a)).join("");
  const tr = (x, y, s, c = "dg-at", deg = -90) => `<text x="0" y="0" transform="translate(${f(x)} ${f(y)}) rotate(${deg})" text-anchor="middle" class="${c}">${e(s)}</text>`;
  const r = (x, y, w, h, c = "dg-b", rx = 10) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${rx}" class="${c}"/>`;
  const ln = (x1, y1, x2, y2, c = "dg-l", m) => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="${c}"${m ? ` marker-end="url(#${m})"` : ""}/>`;
  const p = (d, c = "dg-l", m) => `<path d="${d}" class="${c}"${m ? ` marker-end="url(#${m})"` : ""}/>`;
  const ci = (x, y, rr, c = "dg-b") => `<circle cx="${f(x)}" cy="${f(y)}" r="${rr}" class="${c}"/>`;
  const f = (n) => Math.round(n * 10) / 10;
  const poly = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${f(x)},${f(y)}`).join(" ");
  // Achsen mit Pfeilen
  const axes = (x0, y0, x1, y1, xl, yl) => p(`M${x0},${y0} L${x1},${y0}`, "dg-l", "ah") + p(`M${x0},${y0} L${x0},${y1}`, "dg-l", "ah") +
    (xl ? t(x1, y0 + 18, xl, "dg-s", "end") : "") + (yl ? t(x0 + 6, y1 + 4, yl, "dg-s", "start") : "");

  // ---------------------------------------------------------------- Bausteine
  // 2×2-Portfolio: cells = [oben links, oben rechts, unten links, unten rechts]
  function matrix({ x, y, cells, hl = [], label = "Portfolio-Matrix", lo = "niedrig", hi = "hoch" }) {
    const X0 = 52, Y0 = 8, CW = 178, CH = 118, G = 6;
    let b = "";
    cells.forEach((c, i) => {
      const cx = i % 2, cy = Math.floor(i / 2), xx = X0 + cx * (CW + G), yy = Y0 + cy * (CH + G);
      b += r(xx, yy, CW, CH, hl.includes(i) ? "dg-a" : `dg-q${i + 1}`, 14) + t(xx + CW / 2, yy + 28, c.t, "dg-t") + tl(xx + CW / 2, yy + 50, c.s, "dg-s", "middle", 15);
    });
    const yb = Y0 + 2 * CH + G;
    b += p(`M${X0 - 8},${yb + 8} L${X0 + 2 * CW + G},${yb + 8}`, "dg-l", "ah") + p(`M${X0 - 8},${yb + 8} L${X0 - 8},${Y0}`, "dg-l", "ah");
    b += t(X0 + CW / 2, yb + 26, lo, "dg-s") + t(X0 + CW + G + CW / 2, yb + 26, hi, "dg-s") + t(X0 + CW + G / 2, yb + 46, x, "dg-at");
    b += tr(15, Y0 + CH + G / 2, y) + tr(34, Y0 + CH / 2, hi, "dg-s") + tr(34, Y0 + CH + G + CH / 2, lo, "dg-s");
    return svg(yb + 54, label, b);
  }
  // Baum: Wurzel oben, Kinder in einer Reihe, darunter Stichpunkte
  function tree({ root, kids, label = "Baum", sub }) {
    const n = kids.length, gap = 8, bw = (W - (n - 1) * gap) / n, rw = Math.min(260, W - 40);
    let b = r((W - rw) / 2, 4, rw, 40, "dg-a", 12) + t(W / 2, 29, root, "dg-t");
    const yk = 84;
    b += ln(W / 2, 44, W / 2, 62);
    if (n > 1) b += ln(bw / 2, 62, W - bw / 2, 62);
    let maxL = 0;
    kids.forEach((k, i) => {
      const x = i * (bw + gap);
      b += ln(x + bw / 2, 62, x + bw / 2, yk, k.dashed ? "dg-l dg-d" : "dg-l", "ah");
      const lines = [].concat(k.t);
      b += r(x, yk, bw, 18 + lines.length * 15, k.dashed ? "dg-b dg-dd" : k.accent ? "dg-a" : "dg-b", 10) + tl(x + bw / 2, yk + 21, lines, "dg-t", "middle", 15);
      const sl = [].concat(k.s || []);
      b += tl(x + bw / 2, yk + 38 + lines.length * 15, sl, "dg-s", "middle", 14);
      maxL = Math.max(maxL, lines.length * 15 + sl.length * 14);
    });
    if (sub) b += t(W / 2, yk + 50 + maxL, sub, "dg-at");
    return svg(yk + 46 + maxL + (sub ? 16 : 0), label, b);
  }
  // Kette von Kästen mit Pfeilen, umbricht nach `per`
  function chain(items, { per, label = "Ablauf", h = 54, accent = [] } = {}) {
    per = per || Math.min(items.length, 4);
    const gap = 20, bw = (W - (per - 1) * gap) / per, rows = Math.ceil(items.length / per), rowH = h + 30;
    let b = "";
    items.forEach((it, i) => {
      const row = Math.floor(i / per), col = i % per, x = col * (bw + gap), y = 4 + row * rowH;
      const lines = [].concat(it.t);
      b += r(x, y, bw, h, accent.includes(i) || it.a ? "dg-a" : "dg-b", 12) + tl(x + bw / 2, y + (it.s ? 20 : h / 2 + 5) - (lines.length - 1) * 7, lines, "dg-t", "middle", 14);
      if (it.s) b += tl(x + bw / 2, y + 22 + lines.length * 14 - (lines.length - 1) * 7, [].concat(it.s), "dg-s", "middle", 13);
      if (i < items.length - 1) {
        if (col < per - 1) b += ln(x + bw + 2, y + h / 2, x + bw + gap - 3, y + h / 2, "dg-lp", "ahp");
        else { const ny = y + rowH, nx = bw / 2; b += p(`M${f(x + bw / 2)},${y + h} L${f(x + bw / 2)},${y + h + 14} L${f(nx)},${y + h + 14} L${f(nx)},${ny - 3}`, "dg-lp", "ahp"); }
      }
    });
    return svg(4 + rows * rowH - 26, label, b);
  }
  // Waagerechte Balken: items [{l, v, txt, a}]
  function bars({ items, max, label = "Balkendiagramm", lw = 132, unit = "", room = 70, rh = 40, lc = "dg-t" }) {
    const x0 = lw + 8, bwMax = W - x0 - room, bh = Math.min(22, rh - 8);
    let b = "";
    items.forEach((it, i) => {
      const y = 6 + i * rh, w = Math.max(3, it.v / max * bwMax), L = [].concat(it.l);
      b += tl(lw, y + bh / 2 + 7 - (L.length - 1) * 6.5, L, lc, "end", 13) + r(x0, y + 2, w, bh, it.a ? "dg-bar" : "dg-bar2", 6) + t(x0 + w + 6, y + bh / 2 + 7, it.txt ?? `${it.v}${unit}`, it.a ? "dg-at" : "dg-s", "start");
    });
    return svg(items.length * rh + 8, label, b);
  }
  // Zwei Zielgrößen im Konflikt: rows [[links, rechts], …]
  function conflicts({ rows, label = "Zielkonflikte" }) {
    let b = "";
    rows.forEach(([a, c], i) => {
      const y = 6 + i * 58;
      b += r(0, y, 160, 44, "dg-b", 12) + tl(80, y + 19 - ([].concat(a).length - 1) * 7, [].concat(a), "dg-t", "middle", 14);
      b += r(W - 160, y, 160, 44, "dg-b", 12) + tl(W - 80, y + 19 - ([].concat(c).length - 1) * 7, [].concat(c), "dg-t", "middle", 14);
      b += ln(176, y + 22, W - 176, y + 22, "dg-lb", "ahb") + ln(W - 176, y + 22, 176, y + 22, "dg-lb", "ahb") + t(W / 2, y + 16, "Konflikt", "dg-xs");
    });
    return svg(rows.length * 58 + 2, label, b);
  }
  // Mini-Diagramm-Panel: Linienzug aus normierten Punkten [tx, sy] (0–1)
  function panel(x, y, w, h, pts, { title, sub, lines = [], ticks = [] } = {}) {
    const X = (tx) => x + 8 + tx * (w - 16), Y = (sy) => y + h - 8 - sy * (h - 22);
    let b = r(x, y, w, h, "dg-panel", 12) + p(`M${x + 8},${y + h - 8} L${x + w - 6},${y + h - 8}`, "dg-l", "ah") + p(`M${x + 8},${y + h - 8} L${x + 8},${y + 10}`, "dg-l", "ah");
    lines.forEach(([sy, txt]) => { b += ln(X(0), Y(sy), X(1), Y(sy), "dg-l dg-d") + (txt ? t(X(1) - 2, Y(sy) - 4, txt, "dg-xs", "end") : ""); });
    ticks.forEach(tx => { b += ln(X(tx), y + h - 12, X(tx), y + h - 4, "dg-lp"); });
    b += p(poly(pts.map(([tx, sy]) => [X(tx), Y(sy)])), "dg-lp");
    if (title) b += t(x + w / 2, y + h + 18, title, "dg-t");
    if (sub) b += tl(x + w / 2, y + h + 33, [].concat(sub), "dg-s", "middle", 13);
    return b;
  }

  // Normalverteilungs-Dichte
  const phi = (x) => Math.exp(-x * x / 2);
  function bell({ z = 1.65, shadeLeft = true, label = "Normalverteilung", phiText, tailText, xLabels, band }) {
    const x0 = 30, x1 = 400, base = 168, top = 34, X = (u) => x0 + (u + 3.6) / 7.2 * (x1 - x0), Y = (u) => base - phi(u) * (base - top);
    const curve = []; for (let u = -3.6; u <= 3.601; u += 0.1) curve.push([X(u), Y(u)]);
    let b = "";
    if (band) { // ±1σ-Band
      const a = []; for (let u = -1; u <= 1.001; u += 0.05) a.push([X(u), Y(u)]);
      b += p(`M${f(X(-1))},${base} ${poly(a).replace("M", "L")} L${f(X(1))},${base} Z`, "dg-area");
    } else if (z != null) {
      const a = []; for (let u = -3.6; u <= z + 0.001; u += 0.05) a.push([X(u), Y(u)]);
      b += p(`M${f(X(-3.6))},${base} ${poly(a).replace("M", "L")} L${f(X(z))},${base} Z`, "dg-area");
    }
    b += p(poly(curve), "dg-lp") + ln(x0 - 4, base, x1 + 6, base, "dg-l", "ah") + ln(X(0), base, X(0), top - 4, "dg-l dg-d");
    const lab = xLabels || { "-3": "−3σ", "-2": "−2σ", "-1": "−1σ", "0": "µ", "1": "+1σ", "2": "+2σ", "3": "+3σ" };
    for (const [u, s] of Object.entries(lab)) b += ln(X(+u), base, X(+u), base + 5) + t(X(+u), base + 18, s, "dg-xs");
    if (!band && z != null) {
      b += ln(X(z), base, X(z), Y(z) - 26, "dg-lp dg-d") + t(X(z), Y(z) - 32, `z = ${String(z).replace(".", ",")}`, "dg-at");
      if (phiText) b += t(X(-0.6), base - 34, phiText, "dg-tw-on");
      if (tailText) b += ln(X(z + 0.72), base - 40, X(z + 0.3), base - 7, "dg-l") + t(X(z + 0.75), base - 46, tailText, "dg-s");
    }
    if (band) b += t(X(0), base - 30, band, "dg-tw-on");
    return svg(196, label, b);
  }

  // ---------------------------------------------------------------- Schröder: Beschaffungslogistik
  const S = {};
  S.grundfunktionen = () => {
    let b = "";
    const pw = 132, gap = 12;
    const px = (i) => i * (pw + gap);
    // Transport: Ort A → Ort B
    b += r(px(0), 0, pw, 118, "dg-panel", 14) + ci(px(0) + 26, 52, 9, "dg-a") + ci(px(0) + pw - 26, 52, 9, "dg-a") + ln(px(0) + 38, 52, px(0) + pw - 40, 52, "dg-lp", "ahp") + t(px(0) + 26, 80, "Ort A", "dg-s") + t(px(0) + pw - 26, 80, "Ort B", "dg-s") + t(px(0) + pw / 2, 24, "Transport", "dg-t");
    // Lagern: t1 → t2
    b += r(px(1), 0, pw, 118, "dg-panel", 14) + t(px(1) + pw / 2, 24, "Lagern", "dg-t") + ln(px(1) + 14, 70, px(1) + pw - 12, 70, "dg-l", "ah") + r(px(1) + 36, 44, 22, 20, "dg-a", 4) + r(px(1) + 76, 44, 22, 20, "dg-a", 4) + p(`M${px(1) + 58},54 L${px(1) + 74},54`, "dg-lp dg-d") + t(px(1) + 47, 86, "heute", "dg-s") + t(px(1) + 87, 86, "später", "dg-s");
    // Umschlag: viele kleine → ein großer
    b += r(px(2), 0, pw, 118, "dg-panel", 14) + t(px(2) + pw / 2, 24, "Umschlag", "dg-t");
    [[16, 40], [16, 56], [16, 72], [32, 48], [32, 64]].forEach(([dx, dy]) => { b += r(px(2) + dx, dy, 12, 12, "dg-b", 3); });
    b += ln(px(2) + 50, 62, px(2) + 76, 62, "dg-lp", "ahp") + r(px(2) + 82, 44, 36, 36, "dg-a", 6) + t(px(2) + pw / 2, 100, "bündeln & ordnen", "dg-s");
    b += tl(px(0) + pw / 2, 136, ["Raum überbrücken", "(Dislozierung)"], "dg-at", "middle", 14) + tl(px(1) + pw / 2, 136, ["Zeit ausgleichen", "(Zeitstrukturen)"], "dg-at", "middle", 14) + tl(px(2) + pw / 2, 136, ["Menge & Sorte ändern", "(Arbeitsteilung)"], "dg-at", "middle", 14);
    return svg(160, "Drei logistische Grundfunktionen: Transport überbrückt den Raum, Lagern gleicht die Zeit aus, Umschlag bündelt und ordnet", b);
  };
  S.objekte = () => tree({ root: "Beschaffungsobjekte", label: "Beschaffungsobjekte im Überblick",
    kids: [{ t: "Material", s: ["Roh-, Hilfs-,", "Betriebsstoffe", "Teile, Module", "Handelswaren", "Ersatzteile"], accent: true }, { t: ["Dienst-", "leistungen"], s: ["z. B. Fracht-", "einkauf"] }, { t: ["Betriebs-", "mittel"], s: ["Maschinen,", "Anlagen"] }, { t: "Personal", s: [] }, { t: ["Infos &", "Kapital"], s: ["Wissen,", "Finanzmittel"] }] });
  S.einkauf = () => {
    const items = [["1950", "Versorgung", "um jeden Preis"], ["1960", "preisbewusst", "einkaufen"], ["1970", "EDV", ""], ["1980", "Outsourcing", "beginnt"], ["1990", "Einkauf mit", "Marketingbezug"], ["2000", "Global", "Sourcing"], ["2020+", "Resilienz &", "Nachhaltigkeit"]];
    const x0 = 24, x1 = 396, y = 70, step = (x1 - x0) / (items.length - 1);
    let b = ln(x0 - 10, y, x1 + 14, y, "dg-lp", "ahp");
    items.forEach(([j, a, c], i) => {
      const x = x0 + i * step, up = i % 2 === 0;
      b += ci(x, y, 6, i === items.length - 1 ? "dg-a" : "dg-b") + t(x, up ? y - 16 : y + 26, j, "dg-at");
      b += tl(x, up ? y - 46 : y + 42, [a, c].filter(Boolean), "dg-s", "middle", 13);
    });
    return svg(128, "Entwicklung des Einkaufs von 1950 bis heute", b);
  };
  S.hebel = () => bars({ label: "Hebelwirkung: Gleicher Gewinnzuwachs über Vertrieb oder Einkauf",
    max: 300, lw: 150, room: 132, items: [{ l: ["Vertrieb:", "Umsatz erhöhen"], v: 300, txt: "+300.000 € (+30 %)" }, { l: ["Einkauf:", "Material günstiger"], v: 15, txt: "−15.000 € (−3 %)", a: true }] });
  S.tradeoffs = () => conflicts({ label: "Typische Zielkonflikte in der Beschaffungslogistik", rows: [[["Niedrige", "Beschaffungskosten"], ["Hohe", "Qualität"]], [["Geringe", "Bestände"], ["Versorgungs-", "sicherheit"]], [["Kurze", "Beschaffungszeit"], ["Nachhaltigkeit", "& Kosten"]]] });
  S.ziele = () => {
    const top = [["Versorgungs-", "sicherheit"], ["Niedrige", "Beschaffungs-", "kosten"], ["Niedrige", "Lagerhaltungs-", "kosten"], ["Hohe", "Qualität"]];
    const bot = [["Geringe", "Bestände"], ["Kurze", "Beschaffungs-", "zeiten"], ["Nachhaltig-", "keit"], ["Flexibilität"]];
    const bw = 99, gap = 8, bh = 56, yT = 22, yB = 118, bus = 98, cx = (i) => i * (bw + gap) + bw / 2;
    const lab = (x, y, l) => tl(x, y + bh / 2 + 4 - (l.length - 1) * 6.5, l, "dg-tm", "middle", 13);
    let b = t(W / 2, 14, "Fundamentalziele – um ihrer selbst willen", "dg-at");
    top.forEach((l, i) => { b += r(i * (bw + gap), yT, bw, bh, "dg-a", 10) + lab(cx(i), yT, l) + ln(cx(i), bus, cx(i), yT + bh + 3, "dg-l", "ah"); });
    bot.forEach((l, i) => { b += r(i * (bw + gap), yB, bw, bh, "dg-b", 10) + lab(cx(i), yB, l) + ln(cx(i), yB - 1, cx(i), bus, "dg-l"); });
    b += ln(cx(0), bus, cx(3), bus, "dg-l") + r(W / 2 - 36, bus - 10, 72, 20, "dg-b", 10) + t(W / 2, bus + 4, "dienen ↑", "dg-xs");
    b += t(W / 2, yB + bh + 18, "Instrumentalziele – Mittel zum Zweck", "dg-at");
    b += r(0, yB + bh + 28, W, 30, "dg-band", 10) + t(W / 2, yB + bh + 47, "Risikominimierung = Querschnittsanforderung über allem", "dg-tm");
    return svg(yB + bh + 62, "Fundamental- und Instrumentalziele der Beschaffungslogistik: Instrumentalziele dienen den Fundamentalzielen", b);
  };
  S.bedarfsarten = () => tree({ root: "Fahrrad – Primärbedarf (verkauft)", label: "Primär-, Sekundär- und Tertiärbedarf am Beispiel Fahrrad",
    kids: [{ t: "Rahmen", s: ["Sekundär-", "bedarf"] }, { t: "Räder", s: ["Sekundär-", "bedarf"] }, { t: "Lenker", s: ["Sekundär-", "bedarf"] }, { t: ["Öl, Strom,", "Bohrer"], s: ["Tertiärbedarf –", "nicht im Rad"], dashed: true }] });
  S.nettobedarf = () => {
    const vals = [["Brutto-", "bedarf", 1000, 0, "dg-bar2"], ["− Lager-", "bestand", 300, 700, "dg-barneg"], ["− unter-", "wegs", 150, 550, "dg-barneg"], ["+ reser-", "viert", 50, 550, "dg-barpos"], ["= Netto-", "bedarf", 600, 0, "dg-bar"]];
    const base = 190, sc = 0.15, bw = 56, gap = 26;
    let b = ln(4, base, W - 4, base, "dg-l");
    vals.forEach(([a, c, v, from, cls], i) => {
      const x = 14 + i * (bw + gap), y0 = base - (from + v) * sc;
      b += r(x, y0, bw, v * sc, cls, 4) + t(x + bw / 2, y0 - 6, v.toLocaleString("de-DE"), "dg-at") + tl(x + bw / 2, base + 16, [a, c], "dg-s", "middle", 13);
    });
    return svg(226, "Vom Bruttobedarf zum Nettobedarf (Beispielzahlen)", b);
  };
  S.verteilung = () => bell({ band: "≈ 68 % aller Wochen", label: "Nachfrage normalverteilt mit Mittelwert 500 und Standardabweichung 82", xLabels: { "-2": "336", "-1": "418", "0": "µ = 500", "1": "582", "2": "664" } });
  S.abc = () => {
    const x0 = 50, y0 = 184, w = 344, h = 150, X = (v) => x0 + v / 100 * w, Y = (v) => y0 - v / 100 * h;
    let b = r(X(0), Y(100), X(20) - X(0), h, "dg-q1", 0) + r(X(20), Y(100), X(50) - X(20), h, "dg-q2", 0) + r(X(50), Y(100), X(100) - X(50), h, "dg-q3", 0);
    b += t(X(10), Y(100) - 8, "A", "dg-at") + t(X(35), Y(100) - 8, "B", "dg-at") + t(X(75), Y(100) - 8, "C", "dg-at");
    b += p(`M${f(X(20))},${y0} L${f(X(20))},${f(Y(80))} L${x0},${f(Y(80))}`, "dg-l dg-d") + p(`M${f(X(50))},${y0} L${f(X(50))},${f(Y(95))} L${x0},${f(Y(95))}`, "dg-l dg-d");
    const pts = [[0, 0], [2.5, 20], [5, 35], [10, 56], [15, 70], [20, 80], [30, 87], [40, 92], [50, 95], [70, 98], [100, 100]].map(([a, c]) => [X(a), Y(c)]);
    b += axes(x0, y0, x0 + w + 12, Y(100) - 14, "", "") + p(poly(pts), "dg-lp") + ci(X(20), Y(80), 4, "dg-a") + ci(X(50), Y(95), 4, "dg-a");
    b += t(x0 - 6, Y(80) + 4, "80 %", "dg-xs", "end") + t(x0 - 6, Y(95) + 4, "95 %", "dg-xs", "end");
    b += t(X(20), y0 + 15, "20 %", "dg-xs") + t(X(50), y0 + 15, "50 %", "dg-xs") + t(X(100), y0 + 15, "100 %", "dg-xs");
    b += r(X(20) + 10, Y(80) + 8, 214, 22, "dg-b", 11) + t(X(20) + 117, Y(80) + 23, "A: 20 % der Artikel ≈ 80 % des Werts", "dg-xs");
    b += tl(X(35), y0 - 36, ["B: 30 % der", "Artikel ≈ 15 %"], "dg-xs", "middle", 13) + tl(X(75), y0 - 36, ["C: 50 % der Artikel", "≈ nur 5 % des Werts"], "dg-xs", "middle", 13);
    b += t(x0 + w, y0 + 32, "Anteil der Artikel (kumuliert) →", "dg-s", "end") + tr(14, Y(50), "Anteil am Wert (kumuliert)", "dg-s");
    return svg(222, "ABC-Analyse: Wenige A-Artikel machen den größten Teil des Verbrauchswerts aus", b);
  };
  S.xyz = () => {
    const pw = 128, gap = 18;
    const X = [[0, .55], [.15, .58], [.3, .52], [.45, .56], [.6, .53], [.75, .57], [.9, .54], [1, .55]];
    const Yp = [[0, .5], [.12, .8], [.25, .35], [.4, .75], [.55, .3], [.7, .8], [.85, .4], [1, .65]];
    const Z = [[0, .05], [.2, .05], [.25, .9], [.3, .05], [.6, .05], [.65, .6], [.7, .05], [1, .05]];
    return svg(178, "XYZ-Analyse: konstanter, schwankender und sporadischer Verbrauch",
      panel(0, 0, pw, 118, X, { title: "X", sub: ["VK ≤ 0,25", "konstant"] }) + panel(pw + gap, 0, pw, 118, Yp, { title: "Y", sub: ["VK ≤ 0,5", "schwankend"] }) + panel(2 * (pw + gap), 0, pw, 118, Z, { title: "Z", sub: ["VK > 0,5", "sporadisch"] }));
  };
  S.abcxyz = () => {
    const cols = [["A", "hoher Wert"], ["B", "mittlerer Wert"], ["C", "geringer Wert"]];
    const rows = [["X", "regelmäßig"], ["Y", "schwankend"], ["Z", "sporadisch"]];
    const cell = [[["JIT"], ["JIT"], ["Kanban"]], [["JIT · KL · VMI"], ["JIT · KL · VMI"], ["Kanban"]], [["KL · VMI"], ["KL · VMI"], ["Einzel-", "beschaffung"]]];
    const x0 = 92, y0 = 40, cw = 109, ch = 52;
    let b = "";
    cols.forEach(([c, s], i) => { const x = x0 + i * cw + cw / 2; b += t(x, y0 - 20, c, "dg-t") + t(x, y0 - 7, s, "dg-xs"); });
    rows.forEach(([rr, s], j) => {
      const cy = y0 + j * ch + ch / 2;
      b += t(x0 - 10, cy - 1, rr, "dg-t", "end") + t(x0 - 10, cy + 13, s, "dg-xs", "end");
      cols.forEach((_, i) => {
        const L = cell[j][i], cls = (i + j) <= 1 ? "dg-a" : (i + j) >= 3 ? "dg-q3" : "dg-q2";
        b += r(x0 + i * cw + 2, y0 + j * ch + 2, cw - 4, ch - 4, cls, 8) + tl(x0 + i * cw + cw / 2, cy + 5 - (L.length - 1) * 7, L, "dg-t", "middle", 14);
      });
    });
    b += t(W / 2, y0 + 3 * ch + 20, "KL = Konsignationslager · VMI = Vendor Managed Inventory", "dg-s");
    return svg(y0 + 3 * ch + 28, "ABC-XYZ-Matrix mit passenden Beschaffungsformen", b);
  };
  S.materialportfolio = () => matrix({ x: "Versorgungsrisiko", y: "Ergebnisbeitrag", label: "Materialportfolio nach Ergebnisbeitrag und Versorgungsrisiko", hl: [1],
    cells: [{ t: "Hebelprodukte", s: ["Rohstoffe, Verpackung", "→ Marktmacht nutzen,", "Spotmarkt + Verträge"] }, { t: "Strategische Produkte", s: ["Schlüsselteile, Halbleiter", "→ Marktforschung, lang-", "fristige Partnerschaft"] },
      { t: "Unkritische Güter", s: ["C-Teile, Büromaterial", "→ standardisieren,", "effizient abwickeln"] }, { t: "Engpassgüter", s: ["Spezialchemie, Ersatzteile", "→ Mengen sichern, Puffer,", "Ausweichpläne"] }] });
  S.strategien = () => matrix({ x: "Versorgungsrisiko", y: "Ergebnisbeitrag", label: "Beschaffungsstrategien im Portfolio", hl: [1],
    cells: [{ t: "Global Sourcing", s: ["„die ganze Welt ist", "der Supermarkt“", "→ Kostenvorteile"] }, { t: "Modular Sourcing", s: ["ganze Module vom", "Systemlieferanten", "→ weniger Komplexität"] },
      { t: "Single / Sole Sourcing", s: ["ein Lieferant", "→ Rabatte, wenig Aufwand", "(Sole = erzwungen)"] }, { t: "Dual / Multiple", s: ["2 bzw. > 2 Lieferanten", "→ kein Stillstand,", "Wettbewerb"] }] });
  S.distanz = () => matrix({ x: "Versorgungsrisiko", y: "Ergebnisbeitrag", label: "Beschaffung nach räumlicher Distanz", hl: [1],
    cells: [{ t: "Global / Nearshoring", s: ["Kostenvorteile weltweit", "nutzen"] }, { t: "Local / Nearshoring", s: ["JIT-Konzepte: kurze", "Reaktion, Pünktlichkeit"] },
      { t: "Local Sourcing", s: ["global lohnt nicht:", "kurze Wege, wenig Admin"] }, { t: "Local Sourcing", s: ["Risiko absichern:", "kurze Reaktionszeiten"] }] });
  S.modular = () => {
    let b = t(100, 14, "vorher: 7 Lieferanten", "dg-at") + t(320, 14, "nachher: 1 Modullieferant", "dg-at");
    for (let i = 0; i < 7; i++) { const y = 30 + i * 22; b += r(6, y, 54, 16, "dg-b", 5) + t(33, y + 12, `L${i + 1}`, "dg-s") + ln(62, y + 8, 146, 100, "dg-l"); }
    b += r(148, 82, 50, 36, "dg-a", 10) + t(173, 105, "OEM", "dg-t");
    for (let i = 0; i < 7; i++) { const y = 30 + i * 22; b += r(222, y, 40, 16, "dg-b", 5) + t(242, y + 12, `L${i + 1}`, "dg-s") + ln(264, y + 8, 300, 100, "dg-l"); }
    b += r(300, 74, 66, 52, "dg-q2", 10) + tl(333, 96, ["Modul-", "lieferant"], "dg-t", "middle", 14) + ln(368, 100, 382, 100, "dg-lp", "ahp") + r(384, 82, 34, 36, "dg-a", 10) + t(401, 105, "OEM", "dg-t");
    b += t(W / 2, 200, "Beispiel: Der Autobauer kauft den kompletten Außenspiegel", "dg-s");
    return svg(208, "Modular Sourcing: Statt vieler Einzellieferanten liefert ein Modullieferant das ganze Modul", b);
  };
  S.anlieferung = () => {
    const pw = 128, gap = 18;
    const einzel = [[0, 0], [.18, 0], [.18, .55], [.3, 0], [.55, 0], [.55, .75], [.68, 0], [1, 0]];
    const vorrat = [[0, .95], [.47, .12], [.47, .95], [.94, .12], [.94, .95], [1, .85]];
    const jit = []; for (let i = 0; i < 8; i++) jit.push([i / 8, .32], [(i + 1) / 8, .08]); jit.push([1, .32]);
    return svg(178, "Bestandsverlauf bei Einzel-, Vorrats- und Just-in-Time-Beschaffung",
      panel(0, 0, pw, 118, einzel, { title: "Einzel", sub: ["kommt nur bei", "Bedarf"] }) + panel(pw + gap, 0, pw, 118, vorrat, { title: "Vorrat", sub: ["große Mengen,", "hoher Ø-Bestand"] }) + panel(2 * (pw + gap), 0, pw, 118, jit, { title: "Just-in-Time", sub: ["kleine Mengen,", "sehr oft"] }));
  };
  S.konsignation = () => {
    let b = r(0, 40, 80, 52, "dg-b", 12) + t(40, 70, "Lieferant", "dg-t");
    b += r(128, 14, 148, 104, "dg-a", 14) + tl(202, 36, ["Konsignations-", "lager"], "dg-t", "middle", 15) + t(202, 69, "beim Kunden", "dg-s") + tl(202, 90, ["Eigentum: Lieferant", "Verfügung: Kunde"], "dg-s", "middle", 14);
    b += r(334, 40, 86, 52, "dg-b", 12) + tl(377, 62, ["Produktion", "Kunde"], "dg-t", "middle", 14);
    b += ln(82, 66, 125, 66, "dg-lp", "ahp") + t(103, 58, "Ware", "dg-xs") + ln(278, 66, 331, 66, "dg-lp", "ahp") + t(305, 58, "Entnahme", "dg-xs");
    b += p("M377,94 L377,146 L40,146 L40,96", "dg-l dg-d", "ah") + t(208, 166, "€-Rechnung erst bei Entnahme", "dg-at") + t(208, 182, "→ Kunde bindet kein Kapital", "dg-s");
    return svg(190, "Konsignationslager: Lager des Lieferanten beim Kunden, Bezahlung erst bei Entnahme", b);
  };
  S.jis = () => {
    const seq = ["A", "B", "A", "C", "B", "A"], cls = { A: "dg-v1", B: "dg-v2", C: "dg-v3" };
    const bw = 44, gap = 8, x0 = 108, X = (i) => x0 + i * (bw + gap);
    let b = t(4, 28, "Reihenfolge", "dg-t", "start") + t(4, 42, "am Band", "dg-s", "start");
    seq.forEach((s, i) => { b += r(X(i), 14, bw, 30, cls[s], 8) + t(X(i) + bw / 2, 34, `Auto ${s}`, "dg-xs"); });
    b += t(4, 86, "sequenziert", "dg-t", "start") + t(4, 100, "(JIS)", "dg-s", "start");
    seq.forEach((s, i) => { b += ln(X(i) + bw / 2, 47, X(i) + bw / 2, 69, "dg-l dg-d") + r(X(i) + 6, 72, bw - 12, 26, cls[s], 6) + t(X(i) + bw / 2, 90, s, "dg-t"); });
    b += t(4, 146, "artrein", "dg-t", "start") + t(4, 160, "(JIT)", "dg-s", "start");
    ["A", "A", "A", "B", "B", "C"].forEach((s, i) => { b += r(X(i) + 6, 132, bw - 12, 26, cls[s], 6) + t(X(i) + bw / 2, 150, s, "dg-t"); });
    b += t(X(5) + bw, 180, "→ muss am Band erst sortiert werden", "dg-xs", "end");
    return svg(188, "Just-in-Sequence: Teile kommen in der Einbaureihenfolge statt artrein sortiert", b);
  };
  S.abruf = () => {
    const rows = [["Rahmenvereinbarung", "12 Monate · ±30 %", 30], ["Rahmenauftrag", "3 Monate · ±10 %", 10], ["Lieferabruf", "1 Monat · ±2 %", 2], ["Feinabruf", "10 Tage · 0 %", 0]];
    const cx = 300;
    let b = ln(cx, 4, cx, 4 + rows.length * 46, "dg-l dg-d");
    rows.forEach(([a, c, d], i) => {
      const y = 8 + i * 46, w = Math.max(10, d * 3.6);
      b += t(4, y + 16, a, "dg-t", "start") + t(4, y + 32, c, "dg-s", "start") + r(cx - w, y + 6, 2 * w, 24, i === 3 ? "dg-a" : "dg-bar2", 8);
      if (i === 3) b += t(cx + 24, y + 23, "Frozen Zone", "dg-at", "start");
      else b += t(cx + w + 6, y + 23, `±${d} %`, "dg-at", "start");
    });
    b += t(cx, 4 + rows.length * 46 + 14, "erlaubte Abweichung wird immer kleiner", "dg-s");
    return svg(4 + rows.length * 46 + 22, "Abrufsystem: Je näher der Liefertermin, desto weniger Abweichung ist erlaubt", b);
  };
  S.nutzwert = () => bars({ label: "Nutzwertanalyse: Gesamtnutzwerte der drei Lieferanten", max: 5, lw: 96,
    items: [{ l: "Lieferant A", v: 3.7, txt: "3,7" }, { l: "Lieferant B", v: 4.4, txt: "4,4 – Sieger", a: true }, { l: "Lieferant C", v: 4.0, txt: "4,0" }] });
  S.roi = () => {
    let b = r(140, 4, 140, 40, "dg-a", 12) + t(210, 29, "ROI", "dg-t");
    b += ln(210, 44, 210, 58) + ln(95, 58, 325, 58) + ln(95, 58, 95, 70, "dg-l", "ah") + ln(325, 58, 325, 70, "dg-l", "ah") + t(210, 76, "×", "dg-t");
    b += r(20, 72, 150, 44, "dg-b", 12) + tl(95, 90, ["Umsatzrendite", "Gewinn / Umsatz"], "dg-t", "middle", 14);
    b += r(250, 72, 150, 44, "dg-b", 12) + tl(325, 90, ["Kapitalumschlag", "Umsatz / Kapital"], "dg-t", "middle", 14);
    b += ln(325, 116, 325, 138, "dg-l", "ah") + r(250, 140, 150, 40, "dg-b", 12) + t(325, 165, "investiertes Kapital", "dg-t");
    b += ln(325, 180, 325, 198, "dg-l", "ah") + r(250, 200, 150, 40, "dg-a", 12) + tl(325, 216, ["Umlaufvermögen", "→ Bestände!"], "dg-t", "middle", 14);
    b += tl(110, 168, ["Bestände ↑", "→ Kapital ↑", "→ Umschlag ↓", "→ ROI ↓"], "dg-at", "middle", 16) + tl(110, 236, ["+ Lagerkosten senken", "den Gewinn"], "dg-s", "middle", 13);
    return svg(248, "Wie Bestände den ROI senken: mehr gebundenes Kapital, geringerer Kapitalumschlag", b);
  };
  S.bestandsverlauf = () => {
    const x0 = 40, y0 = 186, top = 40, s = 110, sb = 150, P = 110, xe = 300;
    let b = r(x0 + 1, sb, xe - x0 - 1, y0 - sb - 1, "dg-q4", 0) + axes(x0, y0, 412, 14, "Zeit", "Bestand");
    b += ln(x0, sb, xe, sb, "dg-l dg-d") + ln(x0, s, xe, s, "dg-lp dg-d");
    const pts = [[x0, top], [x0 + P, sb], [x0 + P, top], [x0 + 2 * P, sb], [x0 + 2 * P, top], [xe, top + (xe - x0 - 2 * P) / P * (sb - top)]];
    b += p(poly(pts), "dg-lp");
    const tO = x0 + (s - top) / (sb - top) * P;
    b += ln(tO, s + 5, tO, 176, "dg-l dg-d") + ln(x0 + P, sb + 1, x0 + P, 176, "dg-l dg-d") + ln(tO + 2, 172, x0 + P - 2, 172, "dg-l", "ah") + t((tO + x0 + P) / 2, 166, "WBZ", "dg-xs");
    b += ci(tO, s, 4.5, "dg-a") + t(tO - 8, s + 16, "bestellen!", "dg-xs", "end");
    b += ln(x0 + P + 7, sb - 3, x0 + P + 7, top + 4, "dg-l", "ah") + tl(x0 + P + 13, 128, ["Bestell-", "menge q"], "dg-s", "start", 13);
    b += t(xe + 6, s + 4, "Meldebestand s", "dg-at", "start") + tl(xe + 6, sb + 14, ["Sicherheits-", "bestand"], "dg-s", "start", 13);
    return svg(210, "Idealisierter Bestandsverlauf mit Bestellmenge, Meldebestand, Sicherheitsbestand und Wiederbeschaffungszeit", b);
  };
  S.lhk = () => {
    const parts = [["Lagerkosten-", "satz", 3, "dg-bar2"], ["kalk.", "Zinssatz", 4, "dg-bar"], ["kalk.", "Wagnis", 1, "dg-barneg"]];
    let x = 10, b = t(10, 12, "Beispielwerte", "dg-xs", "start");
    const sc = 36;
    parts.forEach(([a, c, v, cls]) => { b += r(x, 20, v * sc, 40, cls, 4) + t(x + v * sc / 2, 45, `${v} %`, "dg-t") + tl(x + v * sc / 2, 78, [a, c], "dg-s", "middle", 13); x += v * sc + 4; });
    b += t(x + 6, 45, "= 8 %", "dg-at", "start") + tl(x + 6, 62, ["Lagerhaltungs-", "kostensatz"], "dg-s", "start", 13);
    return svg(104, "Lagerhaltungskostensatz als Summe aus Lagerkosten-, Zins- und Wagnissatz", b);
  };
  S.fehlmengen = () => {
    let b = r(0, 112, 84, 44, "dg-a", 12) + tl(42, 130, ["Stockout", "in t1"], "dg-t", "middle", 14);
    b += r(112, 46, 112, 40, "dg-b", 10) + tl(168, 62, ["Kunde wartet", "(Back Sales)"], "dg-t", "middle", 13);
    b += r(112, 184, 112, 40, "dg-b", 10) + tl(168, 200, ["wartet nicht", "(Lost Sales)"], "dg-t", "middle", 13);
    b += p("M84,126 L98,126 L98,66 L110,66", "dg-l", "ah") + p("M84,142 L98,142 L98,204 L110,204", "dg-l", "ah");
    const leaves = [[14, "normal nachliefern", "keine Kosten", "dg-sev0", 66], [56, "Eilbestellung", "Zusatzaufwand", "dg-sev1", 66], [140, "kauft Substitut", "DB-Differenz", "dg-sev1", 204], [182, "kauft später wie bisher", "DB in t1", "dg-sev2", 204], [224, "kauft dann weniger", "DB t1 + Folgeperioden", "dg-sev3", 204], [266, "kommt nie wieder", "DB ab t1 – Goodwill weg", "dg-sev4", 204]];
    leaves.forEach(([y, a, c, cls, from]) => { b += p(`M224,${from} L238,${from} L238,${y + 18} L250,${y + 18}`, "dg-l", "ah") + r(252, y, 168, 36, cls, 8) + t(336, y + 15, a, "dg-t") + t(336, y + 29, c, "dg-s"); });
    return svg(306, "Fehlmengenkosten je nach Kundenreaktion – von keinen Kosten bis zum Verlust des Kunden", b);
  };
  S.sicherheit = () => bell({ z: 1.65, phiText: "Φ = 95 %", tailText: "5 % Risiko", label: "Standardnormalverteilung: 95 Prozent der Fläche liegen links von z gleich 1,65" });
  S.service = () => {
    const x0 = 44, y0 = 178, w = 340, h = 154, X = (s) => x0 + (s - 50) / 50 * w, Y = (v) => y0 - v * h;
    const R = (s) => 0.25 + 0.55 / (1 + Math.exp(-(s - 78) / 5)), C = (s) => 0.06 + 0.012 / (1 - s / 100);
    const rev = [], cost = []; let best = 50;
    for (let s = 50; s <= 99.51; s += 0.25) {
      rev.push([X(s), Y(R(s))]);
      if (C(s) <= 1) cost.push([X(s), Y(C(s))]);
      if (R(s) - C(s) > R(best) - C(best)) best = s;
    }
    let b = axes(x0, y0, x0 + w + 18, y0 - h - 12, "", "€") + ln(X(100), y0, X(100), y0 - h - 2, "dg-l dg-d");
    b += p(poly(rev), "dg-lp") + p(poly(cost), "dg-lb");
    const xb = X(best), yR = Y(R(best)), yC = Y(C(best)), ym = (yR + yC) / 2;
    b += ln(xb, ym, xb, yR + 4, "dg-l", "ah") + ln(xb, ym, xb, yC - 4, "dg-l", "ah") + ln(xb, yC + 4, xb, y0, "dg-l dg-d");
    b += tl(xb - 8, ym - 2, ["größter", "Abstand"], "dg-xs", "end", 12);
    b += t(xb, y0 + 16, "Optimum", "dg-at") + t(X(50), y0 + 16, "50 %", "dg-xs") + t(X(100), y0 + 16, "100 %", "dg-xs") + t(x0 + w / 2, y0 + 34, "Lieferservicegrad", "dg-s");
    b += t(X(76) - 8, Y(R(76)) - 10, "Umsatz", "dg-at", "end") + t(X(98.7) - 8, y0 - h + 6, "Bestandskosten", "dg-bt", "end");
    return svg(y0 + 42, "Optimaler Lieferservicegrad: Umsatz steigt nur begrenzt, Bestandskosten steigen gegen 100 Prozent stark an", b);
  };
  S.politiken = () => {
    const pw = 200, ph = 92, gx = 20, gy = 52;
    const tq = [[0, .9], [.25, .35], [.25, .85], [.5, .2], [.5, .7], [.75, .45], [.75, .95], [1, .5]];
    const tS = [[0, .9], [.25, .35], [.25, .9], [.5, .2], [.5, .9], [.75, .45], [.75, .9], [1, .5]];
    const sq = [[0, .9], [.2, .3], [.2, .85], [.48, .3], [.48, .85], [.62, .3], [.62, .85], [1, .3]];
    const sS = [[0, .9], [.2, .3], [.2, .9], [.42, .22], [.42, .9], [.66, .3], [.66, .9], [1, .4]];
    return svg(2 * ph + gy + 40, "Die vier Bestellpolitiken tq, tS, sq und sS",
      panel(0, 0, pw, ph, tq, { title: "tq", sub: "fester Takt · feste Menge", ticks: [.25, .5, .75] }) +
      panel(pw + gx, 0, pw, ph, tS, { title: "tS", sub: "fester Takt · auffüllen auf S", ticks: [.25, .5, .75], lines: [[.9, "S"]] }) +
      panel(0, ph + gy, pw, ph, sq, { title: "sq", sub: "bei s bestellen · feste Menge", lines: [[.3, "s"]] }) +
      panel(pw + gx, ph + gy, pw, ph, sS, { title: "sS", sub: "bei s bestellen · auffüllen auf S", lines: [[.9, "S"], [.3, "s"]] }));
  };
  S.andler = () => {
    const x0 = 44, y0 = 192, w = 350, h = 168, qmin = 0.18, qmax = 3.2, X = (q) => x0 + (q - qmin) / (qmax - qmin) * w, Y = (c) => y0 - c / 3.6 * h;
    const best = [], hold = [], tot = [];
    for (let q = qmin; q <= qmax + 1e-9; q += 0.04) { best.push([X(q), Y(Math.min(1 / q, 3.6))]); hold.push([X(q), Y(q)]); tot.push([X(q), Y(Math.min(q + 1 / q, 3.6))]); }
    let b = axes(x0, y0, x0 + w + 14, y0 - h - 12, "Bestellmenge q →", "Kosten");
    b += p(poly(best), "dg-l") + p(poly(hold), "dg-l dg-d") + p(poly(tot), "dg-lp");
    b += ln(X(1), y0, X(1), Y(2) - 4, "dg-lp dg-d") + ci(X(1), Y(2), 4, "dg-a") + t(X(1), y0 + 16, "q*", "dg-at");
    const ang = -Math.atan((h / 3.6) / (w / (qmax - qmin))) * 180 / Math.PI;
    b += t(X(0.42), Y(3.2), "Gesamtkosten", "dg-at", "start") + t(X(2.6), Y(0.62), "Bestellkosten", "dg-s") + tr(X(2.5) + 5, Y(2.5) + 13, "Lagerhaltungskosten", "dg-s", f(ang));
    b += ci(X(1), Y(1), 3.5, "dg-b") + ln(X(1) + 4, Y(1) + 4, X(1) + 24, Y(1) + 25, "dg-l") + t(X(1) + 27, Y(1) + 36, "gleich hoch", "dg-xs", "start");
    return svg(214, "Andler: Bestellkosten sinken, Lagerhaltungskosten steigen mit der Bestellmenge – das Optimum q* liegt am Minimum der Gesamtkosten", b);
  };
  S.newsvendor = () => {
    const probs = [5, 10, 20, 30, 20, 10, 5], x0 = 74, y0 = 122, bw = 40, gap = 8, sc = 3, lx = 66;
    let b = ln(x0 - 4, y0, x0 + 7 * (bw + gap) - gap + 4, y0, "dg-l");
    b += t(lx, 84, "Wahrsch.", "dg-xs", "end") + t(lx, y0 + 16, "Nachfrage", "dg-xs", "end") + t(lx, y0 + 46, "kumuliert", "dg-xs", "end");
    let cum = 0;
    probs.forEach((v, i) => {
      const x = x0 + i * (bw + gap), hit = i === 4; cum += v;
      b += r(x, y0 - v * sc, bw, v * sc, hit ? "dg-bar" : "dg-bar2", 4) + t(x + bw / 2, y0 - v * sc - 5, `${v} %`, "dg-xs") + t(x + bw / 2, y0 + 16, i, "dg-t");
      b += r(x, y0 + 28, bw, 26, hit ? "dg-a" : cum >= 80 ? "dg-b" : "dg-q3", 6) + t(x + bw / 2, y0 + 46, `${cum} %`, hit ? "dg-t" : "dg-s");
    });
    b += t(x0 + 4 * (bw + gap) + bw / 2, y0 + 76, "erstmals ≥ 80 % → bestelle q* = 4", "dg-at");
    return svg(y0 + 84, "News-Vendor: Bestelle die kleinste Menge, deren kumulierte Wahrscheinlichkeit das kritische Verhältnis von 80 Prozent erreicht", b);
  };
  S.fifo = () => {
    const layers = [["3. Lieferung", "3 €", "dg-v3"], ["2. Lieferung", "2 €", "dg-v2"], ["1. Lieferung", "1 €", "dg-v1"]];
    let b = "";
    layers.forEach(([a, c, cls], i) => { const y = 20 + i * 40; b += r(140, y, 140, 36, cls, 8) + t(210, y + 16, a, "dg-t") + t(210, y + 30, c, "dg-s"); });
    b += p("M138,118 L60,118 L60,150", "dg-lp", "ahp") + tl(60, 166, ["FIFO: älteste raus", "Verbrauch zu 1 €"], "dg-at", "middle", 14);
    b += p("M282,38 L360,38 L360,150", "dg-lp", "ahp") + tl(360, 166, ["LIFO: neueste raus", "Verbrauch zu 3 €"], "dg-at", "middle", 14);
    b += t(210, 12, "bei steigenden Preisen", "dg-s");
    return svg(196, "FIFO und LIFO bei steigenden Preisen: FIFO verbraucht die alten, günstigen Mengen, LIFO die neuen, teuren", b);
  };
  S.lagerplatz = () => {
    const cols = 6, rows = 4, s = 26, gap = 4, x1 = 18, x2 = 232;
    const fest = ["A", "B", "C", "D", "E", "F"];
    const chaos = ["B", "E", "A", "F", "C", "A", "D", "C", "F", "B", "A", "E", "C", "F", "D", "A", "B", "E", "F", "D", "B", "C", "E", "A"];
    const cls = (ch) => ({ A: "dg-v1", B: "dg-v2", C: "dg-v3", D: "dg-v1", E: "dg-v2", F: "dg-v3" })[ch];
    let b = t(x1 + 90, 16, "Festplatz", "dg-at") + t(x2 + 90, 16, "chaotisch", "dg-at");
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const empty = (i + j * 2) % 3 === 0 && j > 0;
      const xa = x1 + i * (s + gap), y = 26 + j * (s + gap);
      b += r(xa, y, s, s, empty ? "dg-b dg-dd" : cls(fest[i]), 5) + (empty ? "" : t(xa + s / 2, y + 18, fest[i], "dg-xs"));
      const xb = x2 + i * (s + gap), ch = chaos[j * cols + i];
      b += r(xb, y, s, s, cls(ch), 5) + t(xb + s / 2, y + 18, ch, "dg-xs");
    }
    b += tl(x1 + 90, 156, ["Plätze bleiben reserviert", "→ Lücken, aber übersichtlich"], "dg-s", "middle", 14) + tl(x2 + 90, 156, ["jeder freie Platz genutzt", "→ braucht LVS + Scanner"], "dg-s", "middle", 14);
    return svg(184, "Festplatzvergabe mit reservierten Lücken im Vergleich zur chaotischen Lagerung", b);
  };
  S.autostore = () => {
    const x0 = 46, s = 30, cols = 7, rowsN = 4, px = 342;
    let b = t(x0 + cols * s / 2, 18, "Behälter dicht gestapelt – ohne Gänge", "dg-at");
    for (let i = 0; i < cols; i++) for (let j = 0; j < rowsN; j++) { const x = x0 + i * s, y = 60 + j * (s - 6); b += r(x + 2, y, s - 4, s - 8, j === 0 && i === 3 ? "dg-a" : "dg-b", 4); }
    b += ln(x0 - 6, 54, x0 + cols * s + 6, 54, "dg-lp") + r(x0 + 3 * s - 12, 30, s + 24, 22, "dg-a", 6) + t(x0 + 3 * s + s / 2, 45, "Roboter", "dg-xs");
    b += ln(x0 + 3 * s + s / 2, 52, x0 + 3 * s + s / 2, 64, "dg-lp");
    b += p(`M${x0 + cols * s + 8},62 L${px},62 L${px},130`, "dg-lp", "ahp") + r(px - 46, 132, 92, 34, "dg-q2", 10) + t(px, 154, "Pickplatz", "dg-t");
    b += t(x0 + cols * s / 2, 180, "Roboter holen die Behälter von oben", "dg-s") + t(px, 184, "„Ware zur Person“", "dg-at");
    return svg(192, "AutoStore: Behälter stehen ohne Gänge im Raster, Roboter holen sie von oben und bringen sie zum Kommissionierplatz", b);
  };

  // ---------------------------------------------------------------- Bahnverkehr
  const B = {};
  B.zeitleiste = () => {
    const items = [["1830", "Liverpool–", "Manchester"], ["1991", "RL 91/440:", "Netz ≠ Betrieb"], ["1994", "Bahnreform:", "DB AG"], ["2001–16", "4 Eisenbahn-", "pakete"], ["heute", "> 400", "NE-Bahnen"]];
    const x0 = 34, x1 = 386, y = 66, step = (x1 - x0) / (items.length - 1);
    let b = ln(x0 - 14, y, x1 + 22, y, "dg-lp", "ahp");
    items.forEach(([j, a, c], i) => { const x = x0 + i * step, up = i % 2 === 0; b += ci(x, y, 6, i === 2 ? "dg-a" : "dg-b") + t(x, up ? y - 14 : y + 24, j, "dg-at") + tl(x, up ? y - 44 : y + 40, [a, c], "dg-s", "middle", 13); });
    return svg(122, "Vom Staatsmonopol zum Wettbewerb: Meilensteine der Bahn", b);
  };
  B.vergleich = () => {
    let b = t(4, 14, "Ø-Geschwindigkeit", "dg-at", "start");
    [["Lkw", 50], ["Bahn", 25], ["Binnenschiff", 6]].forEach(([l, v], i) => { const y = 24 + i * 28; b += t(96, y + 15, l, "dg-t", "end") + r(104, y + 2, v * 4.6, 20, i === 1 ? "dg-bar" : "dg-bar2", 5) + t(110 + v * 4.6, y + 17, `${v} km/h`, "dg-s", "start"); });
    b += t(4, 122, "max. Sendungsgröße", "dg-at", "start");
    [["Lkw", 24, "24 t"], ["Bahn", 4000, "4.000 t"], ["Binnenschiff", 16000, "16.000 t"]].forEach(([l, v, s], i) => { const y = 132 + i * 28, w = Math.log10(v) / Math.log10(16000) * 230; b += t(96, y + 15, l, "dg-t", "end") + r(104, y + 2, w, 20, i === 1 ? "dg-bar" : "dg-bar2", 5) + t(110 + w, y + 17, s, "dg-s", "start"); });
    b += t(W - 2, 228, "(Sendungsgröße logarithmisch)", "dg-xs", "end");
    return svg(234, "Bahn im Vergleich zu Lkw und Binnenschiff: Geschwindigkeit und Sendungsgröße", b);
  };
  B.zuglaengen = () => bars({ label: "Maximale Güterzuglängen in Europa", max: 850, lw: 118, room: 150, unit: " m",
    items: [{ l: "FR · NO", v: 850 }, { l: "DK", v: 835 }, { l: ["BE · NL · CH", "ES · UK"], v: 750 }, { l: "Deutschland", v: 740, a: true, txt: "740 m (Wagenzug 700 m)" }, { l: "IT", v: 550 }] });
  B.gleisanschluss = () => {
    let b = ln(0, 40, W, 40, "dg-lp") + t(8, 30, "Hauptstrecke (öffentliches Netz, EIU)", "dg-s", "start");
    b += p("M120,40 C150,40 160,96 196,96 L404,96", "dg-l") + ci(120, 40, 5, "dg-a") + t(120, 62, "Anschlussweiche", "dg-xs");
    b += ln(214, 86, 214, 106, "dg-lp") + t(214, 122, "Übergabestelle", "dg-xs") + ln(260, 82, 260, 110, "dg-l dg-d") + t(256, 76, "Anschlussgrenze", "dg-xs", "end");
    b += r(320, 74, 92, 44, "dg-a", 10) + tl(366, 92, ["Lade-", "stelle"], "dg-t", "middle", 14);
    b += r(0, 136, 132, 50, "dg-b", 10) + tl(66, 154, ["Anschlussvertrag", "mit EIU"], "dg-t", "middle", 14) + ln(66, 134, 116, 46, "dg-l dg-d");
    b += r(144, 136, 132, 50, "dg-b", 10) + tl(210, 154, ["Betriebsgenehm.", "von EBA/Land"], "dg-t", "middle", 14) + ln(210, 134, 290, 100, "dg-l dg-d");
    b += r(288, 136, 132, 50, "dg-b", 10) + tl(354, 154, ["Bedienungsvertr.", "mit EVU"], "dg-t", "middle", 14) + ln(354, 134, 360, 120, "dg-l dg-d");
    return svg(192, "Prinzipskizze eines Gleisanschlusses mit den drei nötigen Verträgen", b);
  };
  B.produktion = () => {
    let b = t(4, 16, "Ganzzug", "dg-at", "start") + r(110, 4, 60, 22, "dg-b", 6) + t(140, 19, "Werk A", "dg-xs") + ln(172, 15, 344, 15, "dg-lp", "ahp") + r(346, 4, 66, 22, "dg-b", 6) + t(379, 19, "Werk B", "dg-xs") + t(258, 36, "ein Zug = eine Sendung, keine Zwischenhalte", "dg-xs");
    const y2 = 64;
    b += t(4, y2 + 30, "Einzelwagen", "dg-at", "start");
    [[110, y2 + 4], [110, y2 + 26], [110, y2 + 48]].forEach(([x, y]) => { b += r(x, y, 34, 16, "dg-b", 4) + t(x + 17, y + 12, "GLA", "dg-xs") + ln(x + 36, y + 8, 168, y2 + 30, "dg-l"); });
    b += r(170, y2 + 20, 48, 22, "dg-q2", 6) + t(194, y2 + 35, "Knoten", "dg-xs") + ln(220, y2 + 31, 236, y2 + 31, "dg-lp", "ahp") + r(238, y2 + 18, 46, 26, "dg-a", 6) + t(261, y2 + 35, "Rbf", "dg-xs") + ln(286, y2 + 31, 312, y2 + 31, "dg-lp", "ahp") + r(314, y2 + 18, 46, 26, "dg-a", 6) + t(337, y2 + 35, "Rbf", "dg-xs") + ln(362, y2 + 31, 376, y2 + 31, "dg-lp", "ahp") + r(378, y2 + 20, 38, 22, "dg-b", 6) + t(397, y2 + 35, "GLA", "dg-xs");
    b += t(258, y2 + 86, "Wagen werden gesammelt, rangiert und neu gebündelt", "dg-xs");
    const y3 = 176;
    b += t(4, y3 + 18, "KV", "dg-at", "start") + r(110, y3 + 4, 40, 22, "dg-b", 6) + t(130, y3 + 19, "Lkw", "dg-xs") + ln(152, y3 + 15, 168, y3 + 15, "dg-l", "ah") + r(170, y3 + 2, 56, 26, "dg-q2", 6) + t(198, y3 + 19, "Terminal", "dg-xs") + ln(228, y3 + 15, 300, y3 + 15, "dg-lp", "ahp") + t(264, y3 + 9, "Zug", "dg-xs") + r(302, y3 + 2, 56, 26, "dg-q2", 6) + t(330, y3 + 19, "Terminal", "dg-xs") + ln(360, y3 + 15, 374, y3 + 15, "dg-l", "ah") + r(376, y3 + 4, 40, 22, "dg-b", 6) + t(396, y3 + 19, "Lkw", "dg-xs");
    b += t(258, y3 + 46, "nur die Ladeeinheit wird umgeschlagen", "dg-xs");
    return svg(y3 + 54, "Drei Produktionssysteme der Bahn: Ganzzug, Einzelwagenverkehr und Kombinierter Verkehr", b);
  };
  B.rangierbahnhof = () => {
    let b = "";
    [0, 1, 2].forEach(i => { b += ln(6, 46 + i * 14, 92, 46 + i * 14, "dg-l"); });
    b += p("M92,60 L122,60 L140,46 L158,60 L180,60", "dg-lp") + t(140, 38, "Ablaufberg", "dg-xs");
    for (let i = 0; i < 6; i++) b += p(`M180,60 L214,${24 + i * 14} L300,${24 + i * 14}`, "dg-l");
    [0, 1, 2].forEach(i => { b += p(`M300,${32 + i * 28} L330,${46 + i * 14} L414,${46 + i * 14}`, "dg-l"); });
    b += t(48, 102, "Einfahrgruppe", "dg-t") + t(48, 117, "entkuppeln", "dg-s") + t(140, 102, "↓", "dg-t") + t(140, 117, "Wagen rollen ab", "dg-s");
    b += t(252, 120, "Richtungsgruppe", "dg-t") + t(252, 135, "nach Zielen sammeln", "dg-s") + t(366, 102, "Ausfahrgruppe", "dg-t") + tl(366, 117, ["kuppeln,", "Bremsprobe"], "dg-s", "middle", 14);
    return svg(142, "Rangierbahnhof: Einfahrgruppe, Ablaufberg, Richtungsgruppe, Ausfahrgruppe", b);
  };
  B.pwagen = () => {
    let b = r(0, 10, 120, 44, "dg-b", 12) + tl(60, 28, ["Kunde", "(Versender)"], "dg-t", "middle", 14);
    b += r(300, 10, 120, 44, "dg-b", 12) + tl(360, 28, ["EVU", "(Beförderer)"], "dg-t", "middle", 14);
    b += r(300, 130, 120, 44, "dg-a", 12) + tl(360, 148, ["Halter", "(z. B. VTG, GATX)"], "dg-t", "middle", 14);
    b += r(0, 130, 120, 44, "dg-b", 12) + tl(60, 148, ["Werkstatt", "(Instandhaltung)"], "dg-t", "middle", 14);
    b += ln(122, 32, 298, 32, "dg-lp") + t(210, 24, "Frachtvertrag", "dg-at");
    b += ln(360, 56, 360, 128, "dg-lp") + t(368, 96, "AVV", "dg-at", "start");
    b += ln(298, 152, 122, 152, "dg-l") + t(210, 144, "Servicevertrag (ECM)", "dg-s");
    return svg(180, "Vertragsbeziehungen beim Privatgüterwagen: Frachtvertrag, AVV und Servicevertrag", b);
  };
  B.haftung = () => {
    let b = t(4, 14, "Güterschaden je kg", "dg-at", "start");
    [["HGB / ALB", 8.33, "8,33 SZR"], ["CIM", 17, "17 SZR"]].forEach(([l, v, s], i) => { const y = 22 + i * 28; b += t(96, y + 15, l, "dg-t", "end") + r(104, y + 2, v * 13, 20, i ? "dg-bar" : "dg-bar2", 5) + t(110 + v * 13, y + 17, s, "dg-s", "start"); });
    b += t(4, 100, "Lieferfristüberschreitung", "dg-at", "start");
    [["HGB / ALB", 3, "max. 3-fache Fracht"], ["CIM", 4, "max. 4-fache Fracht"]].forEach(([l, v, s], i) => { const y = 108 + i * 28; b += t(96, y + 15, l, "dg-t", "end") + r(104, y + 2, v * 40, 20, i ? "dg-bar" : "dg-bar2", 5) + t(110 + v * 40, y + 17, s, "dg-s", "start"); });
    return svg(166, "Haftung im Schienengüterverkehr: national nach HGB und ALB, international nach CIM", b);
  };

  // ---------------------------------------------------------------- Kombinierter Verkehr
  const K = {};
  K.kette = () => {
    let b = ln(20, 60, 74, 60, "dg-l") + ln(130, 60, 290, 60, "dg-lp") + ln(346, 60, 400, 60, "dg-l");
    b += r(0, 30, 70, 26, "dg-b", 8) + t(35, 48, "Lkw 44 t", "dg-xs") + r(74, 44, 56, 32, "dg-q2", 8) + t(102, 64, "Terminal", "dg-xs");
    b += r(150, 28, 120, 26, "dg-a", 8) + t(210, 46, "Bahn / Binnenschiff", "dg-xs") + r(290, 44, 56, 32, "dg-q2", 8) + t(318, 64, "Terminal", "dg-xs") + r(350, 30, 70, 26, "dg-b", 8) + t(385, 48, "Lkw 44 t", "dg-xs");
    b += t(47, 94, "Vorlauf kurz", "dg-s") + t(210, 94, "Hauptlauf lang (≥ ca. 300 km)", "dg-at") + t(373, 94, "Nachlauf kurz", "dg-s");
    b += t(210, 118, "Umgeschlagen wird nur die Ladeeinheit – die Ware bleibt drin", "dg-s");
    return svg(126, "Kombinierter Verkehr: kurzer Vor- und Nachlauf per Lkw, langer Hauptlauf auf Bahn oder Binnenschiff", b);
  };
  K.breakeven = () => {
    const x0 = 44, y0 = 190, w = 340, h = 160, X = (km) => x0 + km / 800 * w, Y = (c) => y0 - c / 1000 * h;
    let b = axes(x0, y0, x0 + w + 16, y0 - h - 12, "Entfernung (km) →", "Kosten");
    b += p(poly([[X(0), Y(0)], [X(800), Y(960)]]), "dg-lb") + p(poly([[X(0), Y(240)], [X(800), Y(640)]]), "dg-lp");
    b += ln(X(300), y0, X(300), Y(360) - 4, "dg-l dg-d") + ci(X(300), Y(360), 4, "dg-a") + t(X(300), y0 + 16, "≈ 300 km", "dg-at");
    b += t(X(600), Y(720) - 10, "nur Lkw", "dg-bt") + t(X(780), Y(640) + 18, "KV", "dg-at", "end") + tl(X(30), 62, ["Fixkosten: Umschlag,", "Vor- und Nachlauf"], "dg-xs", "start", 12) + ln(X(40), 80, X(0) + 3, Y(240) - 4, "dg-l");
    b += t(X(560), Y(330), "ab hier ist KV günstiger", "dg-s");
    return svg(214, "Ab etwa 300 Kilometern ist der Kombinierte Verkehr günstiger als der reine Lkw-Transport", b);
  };
  K.begleitet = () => {
    let b = t(100, 14, "unbegleitet", "dg-at") + t(318, 14, "begleitet (Rollende Landstraße)", "dg-at");
    b += r(10, 70, 180, 10, "dg-b", 3) + ci(40, 84, 6) + ci(160, 84, 6) + r(40, 36, 120, 32, "dg-a", 4) + t(100, 57, "Sattelauflieger", "dg-xs");
    b += r(228, 70, 180, 10, "dg-b", 3) + ci(258, 84, 6) + ci(378, 84, 6) + r(250, 36, 104, 32, "dg-a", 4) + r(356, 44, 40, 24, "dg-q2", 4) + t(302, 57, "ganzer Lkw", "dg-xs") + t(376, 60, "Fahrer", "dg-xs");
    b += tl(100, 110, ["nur die Ladeeinheit fährt mit", "– der Normalfall"], "dg-s", "middle", 13) + tl(318, 110, ["Lkw + Fahrer fahren mit", "(Fahrer im Liegewagen)"], "dg-s", "middle", 13);
    return svg(138, "Unbegleiteter und begleiteter Kombinierter Verkehr", b);
  };

  // ---------------------------------------------------------------- KEP
  const P = {};
  P.segmente = () => {
    const x0 = 40, y0 = 196, w = 360, h = 170;
    let b = axes(x0, y0, x0 + w + 12, y0 - h - 10, "Standardisierung & Automatisierung →", "Tempo & Preis");
    b += ci(x0 + 60, y0 - 140, 30, "dg-a") + t(x0 + 60, y0 - 142, "Kurier", "dg-t") + t(x0 + 60, y0 - 128, "direkt", "dg-xs");
    b += ci(x0 + 170, y0 - 92, 34, "dg-q2") + t(x0 + 170, y0 - 94, "Express", "dg-t") + t(x0 + 170, y0 - 80, "garantiert", "dg-xs");
    b += ci(x0 + 290, y0 - 44, 38, "dg-q3") + t(x0 + 290, y0 - 46, "Paket", "dg-t") + t(x0 + 290, y0 - 32, "Netz, 24–48 h", "dg-xs");
    return svg(214, "KEP-Segmente: Kurier am schnellsten und individuellsten, Paket am stärksten standardisiert", b);
  };
  P.markt = () => {
    const c = 2 * Math.PI * 46;
    let b = `<circle cx="70" cy="70" r="46" class="dg-ring"/><circle cx="70" cy="70" r="46" class="dg-ringa" stroke-dasharray="${f(c * 0.1)} ${f(c)}" transform="rotate(-90 70 70)"/>` + t(70, 68, "10 %", "dg-at") + t(70, 84, "KEP", "dg-xs") + tl(70, 138, ["vom Logistik-", "markt"], "dg-s", "middle", 13);
    b += t(160, 34, "4,4 Mrd.", "dg-at", "start") + t(160, 50, "Sendungen pro Jahr", "dg-s", "start");
    b += t(160, 84, "≈ 30 Mrd. €", "dg-at", "start") + t(160, 100, "fast komplett outgesourced", "dg-s", "start");
    b += t(160, 134, "+50 % seit 2015", "dg-at", "start") + t(160, 150, "B2C ↑ · B2B ↓", "dg-s", "start");
    b += p("M330,140 L360,120 L382,126 L412,92", "dg-lp", "ahp");
    return svg(160, "KEP-Markt in Zahlen: 10 Prozent des Logistikmarkts, 4,4 Milliarden Sendungen, rund 30 Milliarden Euro", b);
  };
  P.netze = () => {
    const pts = (cx, cy, rr) => Array.from({ length: 6 }, (_, i) => [cx + rr * Math.cos(i * Math.PI / 3 - Math.PI / 2), cy + rr * Math.sin(i * Math.PI / 3 - Math.PI / 2)]);
    const A = pts(100, 92, 66), Bp = pts(320, 92, 66);
    let b = "";
    for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) b += ln(A[i][0], A[i][1], A[j][0], A[j][1], "dg-l");
    Bp.forEach(([x, y]) => { b += ln(320, 92, x, y, "dg-lp"); });
    A.forEach(([x, y]) => { b += ci(x, y, 9, "dg-b"); });
    Bp.forEach(([x, y]) => { b += ci(x, y, 9, "dg-b"); });
    b += ci(320, 92, 14, "dg-a") + t(320, 96, "Hub", "dg-xs");
    b += t(100, 180, "Direktverkehr: 15 Linien", "dg-t") + t(100, 196, "schnell, braucht viel Menge", "dg-s") + t(320, 180, "Hub-and-Spoke: 6 Linien", "dg-t") + t(320, 196, "voll ausgelastet, + Umschlag", "dg-s");
    return svg(204, "Direktverkehrsnetz mit 15 Verbindungen und Hub-and-Spoke-Netz mit 6 Verbindungen bei sechs Depots", b);
  };
  P.citylogistik = () => {
    let b = `<circle cx="210" cy="96" r="84" class="dg-zone"/>` + t(210, 24, "Innenstadt", "dg-s");
    b += r(2, 78, 74, 36, "dg-b", 8) + tl(39, 93, ["Paket-", "zentrum"], "dg-t", "middle", 13) + ln(78, 96, 186, 96, "dg-lp", "ahp") + t(132, 88, "Lkw", "dg-xs");
    [[150, 46], [270, 46], [282, 126], [140, 140], [250, 160]].forEach(([x, y]) => { b += ln(210, 96, x, y, "dg-l dg-d") + ci(x, y, 7, "dg-q2"); });
    b += r(188, 80, 44, 32, "dg-a", 8) + t(210, 94, "Mikro-", "dg-xs") + t(210, 106, "hub", "dg-xs");
    b += tl(310, 70, ["Lastenrad &", "E-Transporter", "für die letzte", "Meile"], "dg-s", "start", 14);
    return svg(188, "Citylogistik mit Mikrohub: Der Lkw bringt die Pakete in die Stadt, Lastenräder stellen zu", b);
  };

  // ---------------------------------------------------------------- weitere Bausteine
  // Profil: Zeilen = Merkmale, Spalten = Alternativen, Mini-Balken 0–max mit Wort darunter
  function profile({ cols, rows, max = 4, label = "Vergleich", lw = 86 }) {
    const cw = (W - lw) / cols.length, rh = 42, y0 = 26, bw = cw - 22;
    let b = "";
    cols.forEach((c, i) => { b += t(lw + i * cw + cw / 2, 16, c, "dg-t"); });
    rows.forEach(([l, cells], j) => {
      const y = y0 + j * rh;
      b += r(0, y + 2, W, rh - 4, "dg-panel", 10) + t(8, y + rh / 2 + 4, l, "dg-tm", "start");
      cells.forEach(([v, s], i) => {
        const x = lw + i * cw + 11;
        b += r(x, y + 9, bw, 8, "dg-bar2", 4) + r(x, y + 9, Math.max(6, bw * v / max), 8, "dg-bar", 4) + t(x + bw / 2, y + 31, s, "dg-xs");
      });
    });
    return svg(y0 + rows.length * rh + 2, label, b);
  }
  // Stern: Begriff in der Mitte, Kästen ringsum
  function hub({ center, items, label = "Überblick", rx = 150, ry = 78, cy = 112, bw = 114, bh = 42, cr = 40 }) {
    const cx = W / 2, n = items.length, C = [].concat(center);
    const pos = items.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
    let b = pos.map(([x, y]) => ln(cx, cy, x, y, "dg-l dg-d")).join("");
    b += ci(cx, cy, cr, "dg-a") + tl(cx, cy + 5 - (C.length - 1) * 7, C, "dg-t", "middle", 14);
    items.forEach((it, i) => {
      const [x, y] = pos[i], L = [].concat(it.t), Sx = [].concat(it.s || []);
      const ty = y + 4 - (L.length + Sx.length - 1) * 6.5;
      b += r(x - bw / 2, y - bh / 2, bw, bh, it.a ? "dg-a" : "dg-b", 10) + tl(x, ty, L, "dg-tm", "middle", 13) + tl(x, ty + L.length * 13, Sx, "dg-xs", "middle", 12);
    });
    return svg(Math.max(...pos.map(q => q[1])) + bh / 2 + 4, label, b);
  }
  // Tempel: Dach (Ergebnis) ruht auf Säulen (Voraussetzungen)
  function temple({ roof, roofSub, pillars, base, label = "Säulen" }) {
    const n = pillars.length, pw = Math.min(110, (W - 28 - (n - 1) * 10) / n), gap = n > 1 ? (W - 28 - n * pw) / (n - 1) : 0;
    let b = p(`M8,60 L${W / 2},2 L${W - 8},60 Z`, "dg-a") + t(W / 2, roofSub ? 40 : 46, roof, "dg-t") + (roofSub ? t(W / 2, 54, roofSub, "dg-xs") : "");
    pillars.forEach((pl, i) => {
      const x = 14 + i * (pw + gap), L = [].concat(pl.t), Sx = [].concat(pl.s || []);
      b += r(x, 66, pw, 96, "dg-b", 6) + r(x - 4, 66, pw + 8, 8, "dg-q2", 3) + tl(x + pw / 2, 94, L, "dg-tm", "middle", 13) + tl(x + pw / 2, 100 + L.length * 13, Sx, "dg-xs", "middle", 12);
    });
    if (base) b += r(4, 168, W - 8, 26, "dg-band", 8) + t(W / 2, 185, base, "dg-tm");
    return svg(base ? 198 : 166, label, b);
  }
  // Zeitbalken: rows [{l, segs: [[von, bis, Text, Klasse]]}], ticks [[Wert, Text]]
  function gantt({ rows, tmax, ticks = [], lw = 92, label = "Zeitablauf", rh = 36, note, marks = [], head = [], room = 4 }) {
    const top = head.length ? 20 : 0, x0 = lw + 8, w = W - x0 - room, X = (v) => x0 + v / tmax * w;
    let b = "";
    head.forEach(([a, c, txt, cls]) => { b += t((X(a) + X(c)) / 2, 13, txt, cls || "dg-at"); });
    rows.forEach((row, j) => {
      const y = top + 4 + j * rh, L = [].concat(row.l);
      b += tl(lw, y + rh / 2 + 4 - (L.length - 1) * 6, L, "dg-tm", "end", 12);
      row.segs.forEach(([a, c, txt, cls]) => { b += r(X(a) + 1, y + 4, Math.max(2, X(c) - X(a) - 2), rh - 8, cls || "dg-b", 7) + (txt ? t((X(a) + X(c)) / 2, y + rh / 2 + 4, txt, "dg-xs") : ""); });
      if (row.end) b += t(X(Math.max(...row.segs.map(q => q[1]))) + 6, y + rh / 2 + 4, row.end, "dg-at", "start");
    });
    marks.forEach(([v]) => { b += ln(X(v), top + 2, X(v), top + 6 + rows.length * rh, "dg-lp dg-d"); });
    let yb = top + 4 + rows.length * rh + 4;
    if (ticks.length) {
      b += ln(x0, yb, W - 2, yb, "dg-l", "ah");
      ticks.forEach(([v, s]) => { const x = X(v), a = x > W - 20 ? "end" : x < x0 + 12 ? "start" : "middle"; b += ln(x, yb - 3, x, yb + 3) + t(a === "end" ? W - 2 : a === "start" ? x0 : x, yb + 15, s, "dg-xs", a); });
      yb += 20;
    }
    if (note) { b += t(W - 2, yb + 10, note, "dg-xs", "end"); yb += 14; }
    return svg(yb + 4, label, b);
  }
  // Koordinatensystem für Kurven
  function plot({ x0 = 48, y0 = 176, w = 340, h = 150, xr = [0, 1], yr = [0, 1] } = {}) {
    const X = (v) => x0 + (v - xr[0]) / (xr[1] - xr[0]) * w, Y = (v) => y0 - (v - yr[0]) / (yr[1] - yr[0]) * h;
    const curve = (fn, a = xr[0], c = xr[1], n = 90) => { const pts = []; for (let i = 0; i <= n; i++) { const v = a + (c - a) * i / n; pts.push([X(v), Y(fn(v))]); } return poly(pts); };
    return {
      X, Y, curve, x0, y0, w, h,
      axes: (xl, yl) => axes(x0, y0, x0 + w + 14, y0 - h - 12, xl, yl),
      xt: (list, c = "dg-xs") => list.map(([v, s]) => ln(X(v), y0, X(v), y0 + 4) + t(X(v), y0 + 15, s, c)).join(""),
      yt: (list, c = "dg-xs") => list.map(([v, s]) => ln(x0 - 4, Y(v), x0, Y(v)) + t(x0 - 7, Y(v) + 4, s, c, "end")).join(""),
    };
  }

  return { matrix, tree, chain, bars, conflicts, bell, profile, hub, temple, gantt, plot, u: { W, e, svg, t, tl, tr, r, ln, p, ci, f, poly, axes, panel }, S, B, K, P };
})();
