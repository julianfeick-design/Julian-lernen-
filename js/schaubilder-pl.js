/*
 * 📊 Schaubilder Produktionslogistik (Prof. Schröder, Teil 2) – SB.PL
 * Gleicher Stil wie js/schaubilder.js (Klassen dg-*, hell/dunkel), nutzt die Grundformen aus SB.u.
 */
(function () {
  const SB = window.SB;
  if (!SB) return;
  const { W, svg, t, tl, tr, r, ln, p, ci, f, poly, axes, panel } = SB.u;
  const PL = {};
  // Kurve glatt durch Punkte (Catmull-Rom → Bézier)
  const smooth = (pts) => {
    let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])},${f(p2[1])}`;
    }
    return d;
  };
  // Pfeil zwischen zwei Mittelpunkten, an beiden Enden etwas gekürzt
  const arr = (x1, y1, x2, y2, d1 = 14, d2 = 13, c = "dg-lp", m = "ahp") => {
    const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
    return ln(x1 + ux * d1, y1 + uy * d1, x2 - ux * d2, y2 - uy * d2, c, m);
  };
  const dbl = (x1, y1, x2, y2, c = "dg-l") => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="${c}" marker-start="url(#ah)" marker-end="url(#ah)"/>`;

  // =================================================================
  // Kapitel 1 – Produktion als Kernfunktion
  // =================================================================
  PL.isoquanten = () => {
    let b = t(105, 14, "substitutional", "dg-at") + t(320, 14, "limitational", "dg-at");
    const X = (v) => 30 + v / 3 * 150, Y = (v) => 172 - v / 3 * 140;
    b += axes(30, 172, 196, 26, "r₁", "r₂");
    [[0.8, "m = 5"], [1.6, "m = 6"], [2.6, "m = 7"]].forEach(([c, s]) => {
      const pts = [];
      for (let v = c / 2.75; v <= 3.0001; v += 0.05) pts.push([X(v), Y(c / v)]);
      b += p(poly(pts), "dg-lp") + t(184, Y(c / 3) + 4, s, "dg-xs", "start");
    });
    const X2 = (v) => 236 + v / 2.4 * 150, Y2 = (v) => 172 - v / 2.4 * 140;
    b += axes(236, 172, 402, 26, "r₁", "r₂") + ln(X2(0), Y2(0), X2(2.3), Y2(2.3), "dg-l dg-d") + t(370, 30, "Prozessgerade", "dg-xs", "end");
    [[1, "m = 5"], [1.45, "m = 6"], [1.9, "m = 7"]].forEach(([v, s]) => {
      b += p(`M${f(X2(v))},${f(Y2(2.2))} L${f(X2(v))},${f(Y2(v))} L${f(X2(2.25))},${f(Y2(v))}`, "dg-lp") + ci(X2(v), Y2(v), 4, "dg-a") + t(X2(2.25) + 4, Y2(v) + 4, s, "dg-xs", "start");
    });
    b += t(105, 208, "Faktoren austauschbar", "dg-s") + t(320, 208, "festes Einsatzverhältnis", "dg-s");
    return svg(214, "Isoquanten: gekrümmt bei substitutionalen, rechtwinklig entlang der Prozessgerade bei limitationalen Produktionsfunktionen", b);
  };

  PL.effizienz = () => {
    const X = (v) => 40 + v * 38, Y = (v) => 196 - v * 27;
    let b = axes(40, 196, 290, 18, "r₁", "r₂");
    for (let v = 1; v <= 6; v++) b += ln(X(v), 196, X(v), 200) + t(X(v), 211, v, "dg-xs") + ln(36, Y(v), 40, Y(v)) + t(32, Y(v) + 4, v, "dg-xs", "end");
    b += p(smooth([[X(1), Y(5)], [X(2), Y(3)], [X(3), Y(2)], [X(5), Y(1)]]), "dg-lp");
    const pts = [["A", 1, 5, 1], ["B", 2, 3, 1], ["C", 2, 6, 0], ["D", 3, 2, 1], ["E", 3, 3, 0], ["F", 3, 5, 0], ["G", 4, 2, 0], ["H", 5, 1, 1], ["I", 6, 1, 0]];
    pts.forEach(([s, a, c, eff]) => { b += ci(X(a), Y(c), 5.5, eff ? "dg-a" : "dg-b") + t(X(a) + 8, Y(c) - 7, s, "dg-tm", "start"); });
    b += tl(300, 36, ["alle Punkte:", "Output m = 5"], "dg-tm", "start", 14);
    b += ci(306, 76, 5.5, "dg-a") + t(318, 80, "effizient", "dg-s", "start") + ci(306, 100, 5.5, "dg-b") + t(318, 104, "ineffizient", "dg-s", "start");
    b += tl(300, 132, ["ineffizient = mehr", "Einsatz für den", "gleichen Output", "(z. B. C statt B)"], "dg-xs", "start", 13);
    return svg(220, "Produktionsfunktion: Nur die effizienten Kombinationen A, B, D und H liegen auf der Isoquante für den Output 5", b);
  };

  PL.minimalkosten = () => {
    const X = (v) => 44 + v * 62, Y = (v) => 192 - v * 40;
    let b = axes(44, 192, 300, 20, "r₁", "r₂");
    const iso = [];
    for (let v = 0.56; v <= 3.9; v += 0.05) iso.push([X(v), Y(2 / v)]);
    b += p(poly(iso), "dg-l");
    [[2, "K⁰", "dg-l dg-d"], [2 * Math.SQRT2, "K¹", "dg-lp"], [3.6, "K²", "dg-l dg-d"]].forEach(([K, s, c]) => {
      b += ln(X(0), Y(K), X(K), Y(0), c) + t(X(K), 208, s, c === "dg-lp" ? "dg-at" : "dg-xs");
    });
    b += ci(X(Math.SQRT2), Y(Math.SQRT2), 5, "dg-a") + t(126, 118, "A", "dg-t", "end") + t(X(0.6) + 8, Y(3.33), "Isoquante m", "dg-xs", "start");
    b += tl(312, 34, ["Minimalkosten-", "kombination A"], "dg-at", "start", 14);
    b += tl(312, 68, ["Kostengerade K¹", "berührt die", "Isoquante nur", "in einem Punkt"], "dg-xs", "start", 13);
    b += tl(312, 130, ["K⁰: Output m", "nicht erreichbar"], "dg-xs", "start", 13) + tl(312, 166, ["K²: geht auch,", "ist aber teurer"], "dg-xs", "start", 13);
    return svg(216, "Minimalkostenkombination: Die niedrigste Kostengerade, die die Isoquante gerade noch berührt, bestimmt den Tangentialpunkt A", b);
  };

  PL.kosten = () => {
    let b = t(105, 14, "Gesamtkosten K", "dg-at") + t(322, 14, "Stückkosten k", "dg-at");
    b += axes(26, 176, 200, 26, "Menge m", "");
    b += ln(26, 132, 192, 132, "dg-l dg-d") + t(32, 148, "Kf = Bereitschaftskosten", "dg-xs", "start");
    b += ln(26, 132, 186, 44, "dg-lp") + t(36, 40, "K = Kf + kv · m", "dg-at", "start");
    b += dbl(150, 129, 150, 67) + tl(156, 92, ["Kv =", "Mengen-", "kosten"], "dg-xs", "start", 12);
    b += axes(240, 176, 414, 26, "Menge m", "");
    const X = (m) => 240 + 30 * m, Y = (k) => 176 - 36 * k, cur = [];
    for (let m = 0.33; m <= 5.0001; m += 0.05) cur.push([X(m), Y(1 / m + 0.4)]);
    b += ln(240, Y(0.4), 400, Y(0.4), "dg-l dg-d") + t(246, Y(0.4) - 6, "kv", "dg-xs", "start") + p(poly(cur), "dg-lp") + t(300, 60, "k = Kf / m + kv", "dg-at", "start");
    b += t(105, 212, "K steigt gleichmäßig mit m", "dg-s") + t(322, 212, "Fixkosten je Stück sinken", "dg-s");
    return svg(220, "Kostenverläufe: Gesamtkosten aus Fixkostensockel und variablen Kosten, Stückkosten sinken durch Fixkostendegression", b);
  };

  PL.nutzleer = () => {
    const x0 = 128;
    let b = t(258, 14, "Fixkosten Kf = 100 kEUR / Monat, Kapazität 8.000 Stück", "dg-xs");
    b += tl(120, 40, ["8.000 Stück", "(voll ausgelastet)"], "dg-xs", "end", 12) + r(x0, 26, 260, 30, "dg-q1", 6) + t(x0 + 130, 46, "Nutzkosten 100", "dg-tm");
    b += tl(120, 88, ["6.000 Stück", "(75 % Auslastung)"], "dg-xs", "end", 12) + r(x0, 74, 195, 30, "dg-q1", 6) + r(x0 + 195, 74, 65, 30, "dg-q4", 6) + t(x0 + 97.5, 94, "Nutzkosten 75", "dg-tm") + t(x0 + 227.5, 94, "Leer 25", "dg-tm");
    b += t(210, 130, "KN = Kf · Ist-Menge / Kapazität = 100 · 6.000 / 8.000 = 75", "dg-s");
    b += t(210, 148, "KL = Kf − KN = 100 − 75 = 25 kEUR (bezahlt, aber ungenutzt)", "dg-s");
    return svg(156, "Nutzkosten und Leerkosten: Bei 6.000 von 8.000 Stück sind 75 kEUR der Fixkosten genutzt und 25 kEUR Leerkosten", b);
  };

  PL.grenzkosten = () => {
    const P = SB.plot({ x0: 46, y0: 186, w: 330, h: 158, xr: [0, 200], yr: [0, 60] });
    let b = P.axes("Menge x", "€ je Brot") + P.xt([[50, "50"], [100, "100"], [150, "150"]]) + P.yt([[20, "20"], [40, "40"]]);
    b += p(P.curve(x => 1000 / x + 2 + 0.1 * x, 18, 200), "dg-lp") + p(P.curve(x => 2 + 0.2 * x, 0, 197), "dg-l");
    b += ln(P.X(100), P.Y(22) + 4, P.X(100), 186, "dg-l dg-d") + ci(P.X(100), P.Y(22), 4.5, "dg-a");
    b += t(P.X(26), P.Y(52), "Stückkosten k(x)", "dg-at", "start") + t(P.X(26), P.Y(52) + 14, "= 1.000/x + 2 + 0,1x", "dg-xs", "start");
    b += t(372, P.Y(41) - 8, "Grenzkosten K′(x)", "dg-s", "end") + t(372, 40, "K′(x) = 2 + 0,2x", "dg-xs", "end");
    b += tl(220, 152, ["Minimum der Stückkosten:", "x = 100, k = K′ = 22 €"], "dg-xs", "start", 13);
    return svg(210, "Bäckerei mit steigenden Grenzkosten: Die Stückkosten sind dort minimal, wo die Grenzkostenkurve sie schneidet – bei 100 Broten und 22 Euro", b);
  };

  PL.groesse = () => {
    let b = r(0, 6, 112, 170, "dg-a", 12) + tl(56, 70, ["Economies", "of Scale"], "dg-t", "middle", 16) + tl(56, 112, ["Stückkosten", "sinken mit", "der Menge"], "dg-xs", "middle", 13);
    [[6, 78, "Klassische Output-Skaleneffekte", ["technisch: größere, effizientere Anlagen", "Spezialisierung: Arbeitsteilung", "Lerneffekte: Erfahrung mit der Menge"]],
     [92, 38, "Economies of Density", ["mehr Output pro Fläche, Route oder Netz"]],
     [138, 38, "Economies of Size", ["größere Betriebs- / Unternehmensgröße"]]].forEach(([y, h, ti, ls]) => {
      b += r(132, y, 288, h, "dg-b", 10) + t(142, y + 16, ti, "dg-tm", "start") + tl(142, y + 30, ls, "dg-xs", "start", 13) + ln(113, y + h / 2, 129, y + h / 2, "dg-l", "ah");
    });
    b += r(0, 188, 112, 52, "dg-a", 12) + tl(56, 210, ["Economies", "of Scope"], "dg-t", "middle", 16);
    b += r(132, 188, 288, 52, "dg-b", 10) + t(142, 205, "Gemeinsame Nutzung von Ressourcen", "dg-tm", "start") + t(142, 219, "für verschiedene Produkte (Verbundeffekt)", "dg-xs", "start") + t(142, 233, "K(A, B) < K(A, 0) + K(0, B)", "dg-xs", "start") + ln(113, 214, 129, 214, "dg-l", "ah");
    return svg(246, "Größeneffekte der Produktion: Economies of Scale mit klassischen Skaleneffekten, Density und Size sowie Economies of Scope", b);
  };

  PL.wright = () => {
    const P = SB.plot({ x0: 50, y0: 182, w: 330, h: 150, xr: [0, 17], yr: [0, 110] });
    let b = P.axes("kumulierte Stückzahl x", "Arbeitsstunden je Stück") + P.xt([[1, "1"], [2, "2"], [4, "4"], [8, "8"]]) + P.yt([[50, "50"], [100, "100"]]);
    b += p(P.curve(x => 100 * Math.pow(x, -0.3219), 1, 16.6), "dg-lp");
    [[1, 100, "100"], [2, 80, "80"], [4, 64, "64"], [8, 51.2, "51,2"], [16, 40.96, "41"]].forEach(([x, v, s]) => { b += ci(P.X(x), P.Y(v), 4, "dg-a") + t(P.X(x) + 6, P.Y(v) - 7, s, "dg-tm", "start"); });
    b += tl(400, 36, ["Jede Verdopplung", "der Menge:", "Zeit × 0,8"], "dg-at", "end", 15) + t(400, 84, "b = ln 0,8 / ln 2 ≈ −0,322", "dg-xs", "end");
    return svg(206, "Wright’s Law: Bei jeder Verdopplung der kumulierten Menge sinken die Stunden je Stück auf 80 Prozent – 100, 80, 64, 51,2", b);
  };

  // =================================================================
  // Kapitel 2 – Grundlagen der Produktionslogistik
  // =================================================================
  PL.raumzeit = () => {
    const chev = (x, y, c) => p(`M${x},${y - 8} L${x + 16},${y - 8} L${x + 24},${y} L${x + 16},${y + 8} L${x},${y + 8} L${x + 8},${y} Z`, c);
    let b = t(105, 14, "räumlich integriert", "dg-at") + t(318, 14, "räumlich differenziert", "dg-at");
    b += axes(28, 160, 196, 28, "Zeit", "") + axes(238, 160, 408, 28, "Zeit", "") + tr(14, 94, "Raum", "dg-xs") + tr(224, 94, "Raum", "dg-xs");
    b += ln(28, 118, 56, 118, "dg-l dg-d") + ln(56, 118, 56, 160, "dg-l dg-d") + ln(128, 118, 128, 160, "dg-l dg-d");
    b += chev(56, 118, "dg-a") + chev(80, 118, "dg-q1") + chev(104, 118, "dg-a") + t(22, 122, "r0", "dg-xs", "end") + t(56, 174, "t0", "dg-xs") + t(128, 174, "tn", "dg-xs");
    b += ln(238, 130, 262, 130, "dg-l dg-d") + ln(262, 130, 262, 160, "dg-l dg-d") + ln(238, 56, 326, 56, "dg-l dg-d") + ln(374, 64, 374, 160, "dg-l dg-d");
    b += chev(262, 130, "dg-a") + p("M290,128 C306,124 312,80 322,64", "dg-lp dg-d", "ahp") + t(312, 106, "Transport", "dg-xs", "start");
    b += chev(326, 56, "dg-q1") + chev(350, 56, "dg-a") + t(232, 134, "r0", "dg-xs", "end") + t(232, 60, "rm", "dg-xs", "end") + t(262, 174, "t0", "dg-xs") + t(374, 174, "tn", "dg-xs");
    b += t(105, 196, "kurze Wege, schnell fertig", "dg-s") + t(318, 196, "Transporte → Verzögerung", "dg-s");
    return svg(204, "Raumzeitliche Verzögerung: Im räumlich differenzierten Verbund wechselt die Ware zwischen Standorten – das kostet Zeit", b);
  };

  PL.standorte = () => {
    const fab = (x, y, a, s = "W") => r(x - 13, y - 10, 26, 20, a ? "dg-a" : "dg-b", 4) + t(x, y + 4, s, "dg-xs");
    const mkt = (x, y) => ci(x, y, 9, "dg-q2") + t(x, y + 4, "M", "dg-xs");
    let b = "";
    const cell = (i, j, title, sub, draw) => {
      const px = i * 142, py = j * 116;
      b += r(px, py, 136, 110, "dg-panel", 10) + draw(px, py) + t(px + 68, py + 88, title, "dg-tm") + t(px + 68, py + 102, sub, "dg-xs");
    };
    cell(0, 0, "Weltmarktfabrik", "ein Werk für die Welt", (x, y) => fab(x + 34, y + 38, true) + [16, 38, 60].map(v => mkt(x + 106, y + v) + arr(x + 34, y + 38, x + 106, y + v, 15, 11)).join(""));
    cell(1, 0, "Standortteilung", "parallel, mehrere Werke", (x, y) => [16, 38, 60].map(v => fab(x + 40, y + v) + mkt(x + 100, y + v) + arr(x + 40, y + v, x + 100, y + v, 15, 11)).join(""));
    cell(2, 0, "Standortspaltung", "Wertschöpfung aufgeteilt", (x, y) => fab(x + 24, y + 18) + fab(x + 24, y + 58) + fab(x + 72, y + 38, true) + mkt(x + 116, y + 38) + arr(x + 24, y + 18, x + 72, y + 38, 15, 15) + arr(x + 24, y + 58, x + 72, y + 38, 15, 15) + arr(x + 72, y + 38, x + 116, y + 38, 15, 11));
    cell(0, 1, "Fokusfabrik", "Spezialist, Leitwerk", (x, y) => fab(x + 28, y + 38, true) + fab(x + 78, y + 18) + fab(x + 78, y + 58) + mkt(x + 118, y + 18) + mkt(x + 118, y + 58) + arr(x + 28, y + 38, x + 78, y + 18, 15, 15) + arr(x + 28, y + 38, x + 78, y + 58, 15, 15) + arr(x + 78, y + 18, x + 118, y + 18, 15, 11) + arr(x + 78, y + 58, x + 118, y + 58, 15, 11));
    cell(1, 1, "Lokale Fabrik", "nah am Absatzmarkt", (x, y) => r(x + 8, y + 6, 70, 34, "dg-zone", 10) + r(x + 58, y + 42, 70, 34, "dg-zone", 10) + fab(x + 26, y + 23) + mkt(x + 60, y + 23) + arr(x + 26, y + 23, x + 60, y + 23, 14, 10) + fab(x + 76, y + 59) + mkt(x + 110, y + 59) + arr(x + 76, y + 59, x + 110, y + 59, 14, 10));
    cell(2, 1, "Verlängerte Werkbank", "fertigt im Auftrag", (x, y) => r(x + 8, y + 26, 46, 24, "dg-a", 5) + t(x + 31, y + 42, "Marke", "dg-xs") + fab(x + 106, y + 38) + ln(x + 56, y + 32, x + 91, y + 32, "dg-lp", "ahp") + ln(x + 91, y + 46, x + 56, y + 46, "dg-lp", "ahp") + t(x + 74, y + 24, "Auftrag", "dg-xs") + t(x + 74, y + 62, "Ware", "dg-xs"));
    b += t(210, 240, "W = Werk · M = Absatzmarkt", "dg-xs");
    return svg(246, "Sechs Typen von Produktionsstandorten von der Weltmarktfabrik bis zur verlängerten Werkbank", b);
  };

  PL.tradeoffs = () => {
    let b = t(62, 14, "+ wird besser", "dg-at") + t(358, 14, "− wird schlechter", "dg-bt");
    b += r(150, 64, 120, 48, "dg-a", 12) + tl(210, 84, ["Große", "Losgrößen"], "dg-t", "middle", 15);
    ["Geringe Rüstkosten", "Hohe Auslastung", "Hohe Effizienz"].forEach((s, i) => { const y = 24 + i * 46; b += r(0, y, 124, 36, "dg-b", 10) + t(62, y + 23, s, "dg-tm") + ln(150, 88, 127, y + 18, "dg-lp", "ahp"); });
    ["Geringe Bestände", "Kurze Durchlaufzeit", "Hohe Flexibilität"].forEach((s, i) => { const y = 24 + i * 46; b += r(296, y, 124, 36, "dg-b", 10) + t(358, y + 23, s, "dg-tm") + ln(270, 88, 293, y + 18, "dg-lb", "ahb"); });
    b += t(210, 176, "Weitere Konflikte: hohe Auslastung ↔ kurze Durchlaufzeit", "dg-xs") + t(210, 190, "hohe Lieferbereitschaft ↔ geringe Bestände", "dg-xs");
    return svg(196, "Zielkonflikte: Große Lose senken Rüstkosten und steigern die Auslastung, erhöhen aber Bestände und Durchlaufzeit und kosten Flexibilität", b);
  };

  PL.planung = () => {
    let b = "";
    [[6, "Produktkonstruktion", "Volumen, Gewicht, Form"], [54, "Fertigungsverfahren", "Fertigungstechnik"], [102, "Produktionsprogramm", "Art, Menge, Ort, Zeit"]].forEach(([y, ti, s]) => {
      b += r(0, y, 130, 40, "dg-b", 10) + t(65, y + 17, ti, "dg-tm") + t(65, y + 32, s, "dg-xs") + ln(131, y + 20, 157, 76, "dg-l", "ah");
    });
    b += r(160, 46, 120, 60, "dg-a", 12) + t(220, 66, "Materialflüsse", "dg-t") + t(220, 82, "Struktur + Stärke", "dg-xs") + t(220, 97, "[ME je ZE]", "dg-xs");
    b += r(300, 4, 120, 36, "dg-b", 10) + t(360, 20, "Layoutplanung", "dg-tm") + t(360, 34, "Entfernungen (EE)", "dg-xs") + ln(360, 41, 360, 53, "dg-lp", "ahp");
    b += r(300, 56, 120, 60, "dg-a", 12) + tl(360, 76, ["Transport-", "leistung"], "dg-t", "middle", 15) + t(360, 108, "[(ME × EE) je ZE]", "dg-xs") + ln(281, 81, 297, 81, "dg-lp", "ahp");
    b += t(210, 160, "ME = Mengeneinheit · EE = Entfernungseinheit · ZE = Zeiteinheit", "dg-xs");
    return svg(168, "Planungsprozess des innerbetrieblichen Materialflusses: Produkt, Verfahren und Programm bestimmen die Materialflüsse, mit dem Layout ergibt sich die Transportleistung", b);
  };

  PL.kennzahlen = () => {
    let b = r(0, 10, 110, 50, "dg-b", 10) + t(55, 39, "Wareneingang", "dg-tm") + r(310, 10, 110, 50, "dg-b", 10) + t(365, 39, "Montage", "dg-tm");
    b += ln(114, 26, 306, 26, "dg-lp", "ahp") + t(210, 20, "beladen: 1 t", "dg-at") + t(210, 41, "200 m", "dg-tm") + ln(306, 48, 114, 48, "dg-l dg-d", "ah") + t(210, 64, "leer zurück", "dg-xs");
    [[84, "dg-q1", "Transportaufkommen", "Total Load", "= 1 t", "Wie viel wird transportiert?"],
     [126, "dg-q2", "Transportleistung", "Total Load-Distance", "= 1 t × 200 m = 200 tm", "Menge mal Entfernung"],
     [168, "dg-q3", "Fahrleistung", "Mileage", "= 200 m + 200 m = 400 m", "Weg des Fahrzeugs – auch leer"]].forEach(([y, c, a, e2, v, s]) => {
      b += r(0, y, 150, 36, c, 10) + t(75, y + 16, a, "dg-tm") + t(75, y + 29, e2, "dg-xs") + t(162, y + 16, v, "dg-at", "start") + t(162, y + 30, s, "dg-xs", "start");
    });
    return svg(210, "Die drei verkehrswissenschaftlichen Kennzahlen am Stapler: 1 Tonne Aufkommen, 200 Tonnenmeter Transportleistung, 400 Meter Fahrleistung", b);
  };

  PL.sankey = () => {
    let b = t(210, 12, "Materialflussmatrix (t pro Tag)", "dg-at");
    const cols = ["Fertigung", "Montage", "Versand"], rows = [["Lager", "60", "20", "–"], ["Fertigung", "–", "50", "–"], ["Montage", "–", "–", "70"]];
    b += r(0, 20, 96, 22, "dg-q2", 6) + t(48, 35, "von ↓ nach →", "dg-xs");
    cols.forEach((c, i) => { b += r(100 + i * 100, 20, 96, 22, "dg-q2", 6) + t(148 + i * 100, 35, c, "dg-tm"); });
    rows.forEach(([l, ...v], j) => {
      const y = 46 + j * 24;
      b += r(0, y, 96, 20, "dg-b", 6) + t(48, y + 14, l, "dg-tm");
      v.forEach((s, i) => { b += r(100 + i * 100, y, 96, 20, s === "–" ? "dg-panel" : "dg-q1", 6) + t(148 + i * 100, y + 14, s, s === "–" ? "dg-xs" : "dg-tm"); });
    });
    b += t(210, 132, "Sankey-Diagramm: dieselben Zahlen als Pfeile", "dg-at");
    const band = (x1, y1, x2, y2, w) => `<path d="M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}" class="dg-lp" style="stroke-width:${w}px;stroke-opacity:.28"/>`;
    b += band(20, 176.5, 140, 176.5, 33) + band(20, 198.5, 260, 199, 11) + band(150, 173.75, 260, 179.75, 27.5) + band(150, 190.25, 200, 226, 5.5) + band(270, 185.25, 380, 185.25, 38.5);
    b += r(10, 160, 10, 44, "dg-bar", 2) + r(140, 160, 10, 33, "dg-bar", 2) + r(260, 166, 10, 38.5, "dg-bar", 2) + r(380, 166, 10, 38.5, "dg-bar", 2);
    b += t(6, 153, "Lager", "dg-tm", "start") + t(145, 153, "Fertigung", "dg-tm") + t(265, 159, "Montage", "dg-tm") + t(385, 159, "Versand", "dg-tm");
    b += t(80, 180, "60", "dg-xs") + t(205, 203, "20", "dg-xs") + t(205, 180, "50", "dg-xs") + t(325, 189, "70", "dg-xs") + t(206, 238, "Ausschuss 10", "dg-xs", "start");
    b += t(210, 260, "Pfeilbreite = Menge: dicke Ströme sieht man sofort", "dg-s");
    return svg(268, "Instrumente der Materialflussanalyse: Materialflussmatrix mit Mengen von–nach und Sankey-Diagramm mit mengenproportionalen Pfeilen", b);
  };

  PL.uform = () => {
    const st = (x, y, n, a) => r(x, y, 26, 26, a ? "dg-a" : "dg-b", 5) + t(x + 13, y + 18, n, "dg-tm");
    let b = t(100, 14, "Linie", "dg-at") + t(320, 14, "U-Form", "dg-at");
    for (let i = 0; i < 6; i++) b += st(8 + i * 32, 40, i + 1, i === 0 || i === 5);
    b += ln(8, 80, 194, 80, "dg-lp", "ahp") + t(21, 34, "Ein", "dg-xs") + t(181, 34, "Aus", "dg-xs");
    b += ci(181, 108, 8, "dg-q2") + ln(170, 108, 22, 108, "dg-l dg-d", "ah") + t(100, 126, "langer Rückweg zu Station 1", "dg-xs");
    [[246, 30, 1], [290, 30, 2], [334, 30, 3], [334, 106, 4], [290, 106, 5], [246, 106, 6]].forEach(([x, y, n]) => { b += st(x, y, n, n === 1 || n === 6); });
    b += ln(273, 43, 288, 43, "dg-lp", "ahp") + ln(317, 43, 332, 43, "dg-lp", "ahp") + p("M361,43 L372,43 L372,119 L363,119", "dg-lp", "ahp") + ln(333, 119, 318, 119, "dg-lp", "ahp") + ln(289, 119, 274, 119, "dg-lp", "ahp");
    b += t(240, 47, "Ein", "dg-xs", "end") + t(240, 123, "Aus", "dg-xs", "end");
    b += ci(259, 81, 8, "dg-q2") + ln(259, 72, 259, 59, "dg-l", "ah") + ln(259, 90, 259, 103, "dg-l", "ah") + t(276, 85, "ein MA: 1 und 6", "dg-xs", "start");
    b += t(100, 150, "Start und Ende weit weg", "dg-s") + t(320, 150, "Ein- und Ausgang nebeneinander", "dg-s");
    return svg(158, "Linie gegenüber U-Form: In der U-Form liegen Ein- und Ausgang nebeneinander, ein Mitarbeiter kann Station 1 und 6 bedienen", b);
  };

  PL.ziele = () => SB.hub({
    center: ["Niedrige", "Kosten"], cr: 44, label: "Ziele der Produktionslogistik rund um das Oberziel niedrige Kosten",
    items: [{ t: "Flächennutzung", s: "hoch" }, { t: "Durchlaufzeit", s: "kurz" }, { t: "Termintreue", s: "hoch" }, { t: "Auslastung", s: "hoch" }, { t: "Bestände", s: "niedrig" }, { t: "Transportwege", s: "kurz" }, { t: "Flexibilität", s: "hoch" }]
  });

  // =================================================================
  // Kapitel 3 – Produktionssysteme und innerbetrieblicher Materialfluss
  // =================================================================
  PL.prinzipien = () => {
    const rc = (i) => 6 + i * 40 + 17;
    let b = r(0, 6, 88, 34, "dg-b", 10) + tl(44, 20, ["Funktions-", "prinzip"], "dg-tm", "middle", 13);
    b += r(0, 46, 88, 194, "dg-b", 10) + tl(44, 140, ["Objekt-", "prinzip"], "dg-tm", "middle", 13);
    b += r(98, 46, 98, 114, "dg-q1", 10) + tl(147, 92, ["einheitlicher", "Material-", "fluss"], "dg-tm", "middle", 13);
    b += r(98, 166, 98, 74, "dg-q1", 10) + tl(147, 200, ["Zentren-", "fertigung"], "dg-tm", "middle", 13);
    b += ln(88, 103, 97, 103, "dg-l") + ln(88, 203, 97, 203, "dg-l") + ln(89, rc(0), 302, rc(0), "dg-l", "ah");
    const mid = [null, ["ohne zeitliche", "Bindung"], ["zeitl. Bindung,", "nicht gekoppelt"], ["zeitl. Bindung,", "verkettet"], ["automatisiert"], ["nicht auto-", "matisiert"]];
    const leaf = [["Werkstatt-", "fertigung"], ["Reihen-", "fertigung"], ["Fließ-", "fertigung"], ["Transfer-", "straße"], ["Flexibles Ferti-", "gungssystem"], ["Fertigungs-", "insel"]];
    leaf.forEach((L, i) => {
      const y = 6 + i * 40;
      b += r(304, y, 116, 34, "dg-a", 10) + tl(362, y + 15, L, "dg-tm", "middle", 13);
      if (mid[i]) {
        const M = mid[i];
        b += r(206, y, 90, 34, "dg-q2", 8) + tl(251, y + (M.length > 1 ? 14 : 21), M, "dg-xs", "middle", 12) + ln(196, rc(i), 205, rc(i), "dg-l") + ln(297, rc(i), 302, rc(i), "dg-l", "ah");
      }
    });
    return svg(246, "Fertigungsprinzipien: Funktionsprinzip mit Werkstattfertigung, Objektprinzip mit Reihen-, Fließfertigung, Transferstraße sowie Zentrenfertigung mit flexiblem Fertigungssystem und Fertigungsinsel", b);
  };

  PL.ppmatrix = () => {
    let b = t(44, 16, "Make-to-Order", "dg-xs", "start") + t(416, 16, "Make-to-Stock", "dg-xs", "end") + t(230, 16, "Beziehung zum Absatzmarkt", "dg-at");
    b += r(40, 24, 380, 210, "dg-panel", 12) + ln(56, 30, 410, 228, "dg-l dg-d");
    [[46, 32, "Werkstattfertigung", "Einzelstücke"], [108, 72, "Fertigungsinsel", "kleine Serien"], [170, 112, "Reihenfertigung", "Serien"], [232, 152, "Fließfertigung", "große Serien, Sorten"], [294, 192, "Transferstraße", "Massenprodukte"]].forEach(([x, y, a, s], i) => {
      b += r(x, y, 120, 34, i === 0 || i === 4 ? "dg-a" : "dg-b", 9) + t(x + 60, y + 15, a, "dg-tm") + t(x + 60, y + 28, s, "dg-xs");
    });
    b += tl(404, 60, ["viele Varianten", "am Fließband", "→ zu starr"], "dg-xs", "end", 13) + tl(50, 178, ["Massenware in", "der Werkstatt", "→ zu teuer"], "dg-xs", "start", 13);
    b += ln(40, 244, 414, 244, "dg-l", "ah") + t(90, 258, "Einzelfertigung", "dg-xs") + t(230, 258, "Serien-/Sortenfertigung", "dg-xs") + t(372, 258, "Massenfertigung", "dg-xs") + t(230, 274, "Auftragsgröße →", "dg-at");
    b += ln(32, 30, 32, 230, "dg-l", "ah") + tr(12, 129, "Produktvielfalt: hoch → niedrig", "dg-xs") + tr(24, 129, "Materialfluss: unregelmäßig → stetig", "dg-xs");
    return svg(280, "Produkt-Prozess-Matrix: Fertigungsprinzipien liegen auf der Diagonale von der Werkstattfertigung für Einzelstücke bis zur Transferstraße für Massenprodukte", b);
  };

  PL.segmentierung = () => {
    const dia = (x, y) => p(`M${x},${y - 8} L${x + 8},${y} L${x},${y + 8} L${x - 8},${y} Z`, "dg-b");
    const cir = (x, y) => ci(x, y, 7.5, "dg-b"), sq = (x, y) => r(x - 7, y - 7, 14, 14, "dg-b", 2);
    const tri = (x, y) => p(`M${x},${y - 8} L${x + 8},${y + 6} L${x - 8},${y + 6} Z`, "dg-b");
    let b = t(98, 16, "Werkstattfertigung", "dg-at") + t(321, 16, "Fertigungssegmentierung", "dg-at");
    b += r(0, 24, 196, 136, "dg-panel", 10);
    [24, 50, 76].forEach(x => { b += dia(x, 44) + sq(x, 140); });
    [120, 146, 172].forEach(x => { b += cir(x, 44) + tri(x, 140); });
    b += p("M4,64 L150,64 C190,64 190,118 150,118 L12,118", "dg-lp", "ahp") + t(98, 95, "lange Wege, viel Warten", "dg-xs");
    b += r(222, 24, 198, 136, "dg-panel", 10);
    [[32, "Segment A"], [96, "Segment B"]].forEach(([y, s]) => {
      const cy = y + 28;
      b += r(230, y, 182, 56, "dg-zone", 8) + t(236, y + 12, s, "dg-xs", "start") + dia(258, cy) + cir(300, cy) + sq(342, cy) + tri(384, cy);
      b += ln(267, cy, 290, cy, "dg-lp", "ahp") + ln(309, cy, 332, cy, "dg-lp", "ahp") + ln(351, cy, 374, cy, "dg-lp", "ahp");
    });
    b += t(98, 178, "gleiche Maschinen zusammen", "dg-xs") + t(321, 178, "je Segment alle Maschinen im Fluss", "dg-xs") + t(210, 196, "Folge der Segmentierung:", "dg-tm");
    [[0, ["Losgröße ↓"]], [142, ["Durchlaufzeit ↓"]], [284, ["Kapazitäts-", "querschnitt ↓"]]].forEach(([x, L]) => { b += r(x, 204, 136, 38, "dg-a", 10) + tl(x + 68, L.length > 1 ? 220 : 227, L, "dg-tm", "middle", 13); });
    return svg(246, "Fertigungssegmentierung: Statt gleichartige Maschinen zusammenzufassen, bekommt jedes Segment alle Maschinen in Flussrichtung – Losgröße, Durchlaufzeit und Kapazitätsquerschnitt sinken", b);
  };

  PL.dreieck = () => {
    const S = 56, X = (row, c) => 24 + c * S + (row % 2 ? S / 2 : 0), Y = (row) => 34 + row * 48;
    const nodes = [];
    [4, 3, 4, 3].forEach((n, row) => { for (let c = 0; c < n; c++) nodes.push([row, c]); });
    let b = "";
    nodes.forEach((a, i) => nodes.forEach((c, j) => {
      if (j <= i) return;
      const d = Math.hypot(X(...a) - X(...c), Y(a[0]) - Y(c[0]));
      if (Math.abs(d - S) < 2) b += ln(X(...a), Y(a[0]), X(...c), Y(c[0]), "dg-l dg-d");
    }));
    const st = { "0,1": 2, "0,2": 9, "1,0": 1, "1,1": 3, "1,2": 8, "2,1": 4, "2,2": 5, "2,3": 6, "3,1": 7 };
    const cls = { 4: "dg-a", 5: "dg-a", 3: "dg-q1", 1: "dg-q4" };
    b += ln(X(2, 1), Y(2), X(2, 2), Y(2), "dg-lp");
    nodes.forEach(([row, c]) => {
      const n = st[`${row},${c}`];
      b += n ? ci(X(row, c), Y(row), 14, cls[n] || "dg-b") + t(X(row, c), Y(row) + 5, n, "dg-t") : ci(X(row, c), Y(row), 3, "dg-l");
    });
    b += t(226, 26, "1. größter Fluss", "dg-tm", "start") + t(226, 40, "4 ↔ 5 (210): nebeneinander", "dg-xs", "start");
    b += t(226, 60, "2. größte Summe zu 4 + 5", "dg-tm", "start") + t(226, 74, "3 Härterei: 180 + 100 = 280", "dg-xs", "start");
    b += t(226, 94, "3. größte Summe zu 3, 4, 5", "dg-tm", "start") + t(226, 108, "1 Lager: 140 + 0 + 170 = 310", "dg-xs", "start");
    b += t(226, 128, "4. so weiter, bis alle", "dg-tm", "start") + t(226, 142, "Stationen platziert sind", "dg-xs", "start");
    b += ci(234, 162, 6, "dg-a") + t(244, 166, "Schritt 1", "dg-xs", "start") + ci(296, 162, 6, "dg-q1") + t(306, 166, "Schritt 2", "dg-xs", "start") + ci(358, 162, 6, "dg-q4") + t(368, 166, "Schritt 3", "dg-xs", "start");
    b += t(210, 212, "1 Lager · 2 Mech. Fertigung · 3 Härterei · 4 Spanlose Fertigung", "dg-xs") + t(210, 226, "5 Zwischenlager · 6 Vormontage · 7 Endmontage · 8 Kontrolle · 9 Versand", "dg-xs");
    return svg(232, "Dreiecksverfahren nach Schmigalla: Stationen mit starken Materialflüssen werden im Dreiecksraster nebeneinander platziert", b);
  };

  PL.vorrang = () => {
    const N = { A: [32, 112, 40], B: [118, 64, 30], C: [118, 160, 50], D: [204, 30, 20], E: [204, 86, 45], F: [204, 142, 35], G: [204, 198, 25], H: [290, 58, 30], I: [290, 142, 40], J: [380, 112, 20] };
    const e = (a, c) => ln(N[a][0] + 24, N[a][1], N[c][0] - 25, N[c][1], "dg-l", "ah");
    let b = e("A", "B") + e("A", "C") + e("B", "D") + e("B", "E") + e("C", "F") + e("C", "G") + e("D", "H") + e("E", "H") + e("F", "I") + e("H", "J") + e("I", "J");
    b += p("M228,198 L380,198 L380,131", "dg-l", "ah");
    Object.entries(N).forEach(([k, [x, y, s]]) => { b += r(x - 24, y - 16, 48, 32, "dg-b", 8) + t(x, y - 1, k, "dg-t") + t(x, y + 12, `${s} s`, "dg-xs"); });
    b += t(210, 236, "Taktzeit T = 27.000 s / 450 Stück = 60 s", "dg-at") + t(210, 252, "Σt = 335 s → Nmin = 335 / 60 = 5,58 → mindestens 6 Stationen", "dg-xs");
    return svg(260, "Vorranggraph der zehn Arbeitsaufgaben A bis J mit Bearbeitungszeiten – ein Pfeil heißt: muss vorher erledigt sein", b);
  };

  PL.stationen = () => SB.gantt({
    rows: [["A", 40], ["C", 50], ["F", 35, "G", 25], ["I", 40], ["B", 30], ["E", 45], ["D", 20], ["H", 30], ["J", 20]].map((q, i) => {
      const segs = []; let x = 0;
      for (let k = 0; k < q.length; k += 2) { segs.push([x, x + q[k + 1], `${q[k]} ${q[k + 1]}`, "dg-q1"]); x += q[k + 1]; }
      if (x < 60) segs.push([x, 60, "", "dg-band"]);
      return { l: `Station ${i + 1}`, segs };
    }),
    tmax: 60, lw: 64, rh: 22, ticks: [[0, "0"], [20, "20"], [40, "40"], [60, "60 s"]], marks: [[60]],
    note: "E = 335 / (9 × 60) ≈ 0,62 → 205 s Leerzeit (38 %)",
    label: "Largest Candidate Rule: Ergebnis mit neun Stationen, gelb ist die Leerzeit bis zum Takt von 60 Sekunden"
  });

  PL.balancing = () => {
    let b = t(100, 16, "nicht abgestimmt", "dg-at") + t(320, 16, "abgestimmt", "dg-at");
    b += ln(16, 60, 192, 60, "dg-lp dg-d") + ln(236, 60, 412, 60, "dg-lp dg-d");
    [8, 11, 5, 6].forEach((v, i) => { const x = 24 + i * 42, h = v * 9; b += r(x, 150 - h, 30, h, v > 10 ? "dg-barneg" : "dg-bar2", 4) + t(x + 15, 145 - h, v, "dg-tm") + t(x + 15, 166, i + 1, "dg-xs"); });
    [0, 1, 2].forEach(i => { const x = 252 + i * 48; b += r(x, 60, 30, 90, "dg-bar", 4) + t(x + 15, 55, "10", "dg-tm") + t(x + 15, 166, i + 1, "dg-xs"); });
    b += ln(16, 150, 192, 150, "dg-l") + ln(236, 150, 412, 150, "dg-l");
    b += t(100, 184, "Station 2 (11 min) bremst alles", "dg-xs") + t(320, 184, "3 Stationen à 10 min", "dg-xs");
    b += t(210, 204, "gestrichelt = Taktzeit = 8 h · 60 min / 48 Stück = 10 min", "dg-xs");
    return svg(212, "Line Balancing: Belegungszeiten 8, 11, 5 und 6 Minuten werden auf drei Stationen mit genau 10 Minuten Takt verteilt", b);
  };

  PL.fakultaet = () => SB.bars({
    items: [{ l: "5 Kunden", v: Math.log10(120), txt: "120" }, { l: "10 Kunden", v: Math.log10(3628800), txt: "3,6 Mio." }, { l: "15 Kunden", v: Math.log10(1.307674368e12), txt: "1,3 Billionen" }, { l: "20 Kunden", v: Math.log10(2.432902e18), txt: "2,4 Trillionen", a: true }],
    max: 18.4, lw: 84, room: 100, label: "NP-schwer: Die Zahl möglicher Reihenfolgen k! explodiert – 120 bei 5 Kunden, 2,4 Trillionen bei 20 Kunden"
  });

  PL.foerder = () => SB.tree({
    root: "Fördermittel (innerbetrieblich)", label: "Fördersysteme: Stetigförderer mit stetigem Gutstrom und Unstetigförderer mit einzelnen Fahrten",
    kids: [{ t: "Stetigförderer", s: ["stetiger Gutstrom auf", "fester Strecke", "z. B. Band, Rollenbahn,", "Kreisförderer, Rohrpost"] }, { t: "Unstetigförderer", s: ["einzelne Fahrten", "(Arbeitsspiele), flexibel", "z. B. Stapler, FTS,", "Kran, Aufzug, RBG"], accent: true }],
    sub: "weiter unterteilt nach Förderebene, Beweglichkeit und Antrieb"
  });

  PL.kaskade = () => SB.chain([{ t: "Transportgut", s: "Was?" }, { t: "Aufkommen", s: "Wie viel?" }, { t: "Entfernung", s: "Wie weit?" }, { t: "Frequenz", s: "Wie oft?" }, { t: "Zeiten", s: "Wann, wie schnell?", a: true }], { per: 3, label: "Kaskade der Planung eines innerbetrieblichen Transportsystems" });

  // =================================================================
  // Kapitel 4 – Produktionsplanung und -steuerung
  // =================================================================
  PL.little = () => {
    let b = t(210, 16, "Bestand (WIP) = Durchsatz × Durchlaufzeit", "dg-at") + r(100, 32, 220, 64, "dg-q2", 12);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 12; j++) b += r(110 + j * 17, 41 + i * 16, 12, 12, "dg-q1", 2);
    b += ln(26, 64, 97, 64, "dg-lp", "ahp") + t(60, 55, "90 St./h", "dg-tm") + t(60, 80, "rein", "dg-xs");
    b += ln(323, 64, 394, 64, "dg-lp", "ahp") + t(358, 55, "90 St./h", "dg-tm") + t(358, 80, "raus", "dg-xs");
    b += t(210, 114, "225 Stück gleichzeitig in Arbeit", "dg-tm") + dbl(102, 126, 318, 126) + t(210, 144, "Durchlaufzeit = 225 / 90 = 2,5 h", "dg-at");
    b += r(0, 158, 204, 40, "dg-a", 10) + t(102, 174, "(a) Bestand begrenzen", "dg-tm") + t(102, 189, "WIP-Limits, Kanban", "dg-xs");
    b += r(216, 158, 204, 40, "dg-a", 10) + t(318, 174, "(b) Durchsatz steigern", "dg-tm") + t(318, 189, "Engpass entlasten", "dg-xs");
    return svg(204, "Little’s Law: 225 Stück Bestand bei 90 Stück pro Stunde Durchsatz ergeben 2,5 Stunden Durchlaufzeit", b);
  };

  PL.regelung = () => {
    const side = (cx, title, loop) => {
      let s = t(cx, 14, title, "dg-at") + r(cx - 70, 26, 140, 34, "dg-b", 10) + t(cx, 47, "Obere Planungsebene", "dg-tm");
      s += ln(cx, 61, cx, 103, "dg-lp", "ahp") + t(cx + 8, 86, "Vorgaben", "dg-xs", "start") + r(cx - 70, 106, 140, 34, "dg-b", 10) + t(cx, 127, "Untere Planungsebene", "dg-tm");
      s += ln(Math.min(cx + 88, 404), 162, Math.min(cx + 62, 380), 143, "dg-lb", "ahb") + t(Math.min(cx + 98, 418), 176, "Störgrößen", "dg-bt", "end");
      if (loop) s += p(`M${cx - 70},123 L${cx - 86},123 L${cx - 86},43 L${cx - 73},43`, "dg-lp dg-d", "ahp") + tr(cx - 96, 83, "Rückmeldung", "dg-xs");
      return s;
    };
    let b = side(98, "Steuerung", false) + side(332, "Regelung", true);
    b += t(98, 196, "Vorgaben ohne Rückmeldung", "dg-xs") + t(332, 196, "Abweichungen werden korrigiert", "dg-xs");
    return svg(204, "Steuerung gibt nur Vorgaben von oben nach unten, Regelung meldet das Ergebnis zurück und korrigiert Störgrößen", b);
  };

  PL.mrp = () => {
    let b = "";
    const L = [["Geschäftsplanung", "dg-q2"], ["Aggregierte Planung", "dg-q2"], ["Produktionsprogramm (MPS)", "dg-a"], ["Materialbedarf (MRP)", "dg-a"], ["Ablaufplanung", "dg-q2"]];
    L.forEach(([s, c], i) => { const y = 6 + i * 40; b += r(110, y, 190, 30, c, 8) + t(205, y + 20, s, "dg-tm") + (i < 4 ? ln(205, y + 31, 205, y + 43, "dg-lp", "ahp") : ""); });
    b += t(102, 105, "Primärbedarf", "dg-xs", "end") + t(102, 145, "Sekundärbedarf", "dg-xs", "end") + t(102, 185, "Feinterminierung", "dg-xs", "end");
    b += tl(316, 16, ["Jahre", "Unternehmen", "monetär (€)"], "dg-xs", "start", 12) + ln(330, 54, 330, 150, "dg-lp", "ahp") + tr(346, 102, "immer feiner", "dg-xs") + tl(316, 168, ["Stunden", "Maschine", "Arbeitsgang"], "dg-xs", "start", 12);
    b += t(205, 214, "zentral, von oben nach unten – mit Rückkopplungen", "dg-xs");
    return svg(222, "MRP II: zentrale Planung in fünf Stufen von der Geschäftsplanung bis zur Ablaufplanung, immer weniger aggregiert", b);
  };

  PL.kanban = () => {
    const S = [[0, ["Roh-", "bearbeitung"]], [114, ["Fein-", "bearbeitung"]], [228, ["Vor-", "montage"]], [342, ["End-", "montage"]]];
    let b = t(64, 18, "Kanban-Karte", "dg-xs");
    S.forEach(([x, L], i) => {
      b += r(x, 60, 72, 44, "dg-b", 10) + tl(x + 36, 78, L, "dg-tm", "middle", 13);
      if (i < 3) {
        const bx = x + 86;
        b += r(bx, 66, 14, 32, "dg-band", 3) + ln(x + 73, 82, bx - 2, 82, "dg-lp", "ahp") + ln(bx + 15, 82, bx + 27, 82, "dg-lp", "ahp");
        b += p(`M${bx + 7},64 L${bx + 7},34 L${x + 36},34 L${x + 36},57`, "dg-lp dg-d", "ahp") + r((bx + 7 + x + 36) / 2 - 7, 27, 14, 14, "dg-q4", 2);
      }
    });
    b += r(0, 124, 14, 14, "dg-band", 3) + t(20, 135, "Puffer (Supermarkt)", "dg-xs", "start") + ln(140, 131, 170, 131, "dg-lp", "ahp") + t(176, 135, "Material", "dg-xs", "start") + ln(240, 131, 270, 131, "dg-lp dg-d", "ahp") + t(276, 135, "Kanban = Bestellsignal", "dg-xs", "start");
    b += t(210, 160, "Die Folgestation holt (Pull) – der Vorgänger fertigt nur nach", "dg-xs");
    return svg(166, "Kanban-Regelkreise: Entnimmt eine Station aus dem Puffer, geht die Karte zurück und die vorherige Station produziert genau diese Menge nach", b);
  };

  PL.kanbanzahl = () => {
    const x0 = 70, u = 17;
    let b = t(210, 14, "B · (ZW + ZP + ZA) + σ · z = 5 · (0,5 + 1 + 1,5) + 1 · 2,33", "dg-xs");
    b += t(62, 47, "Menge", "dg-tm", "end") + r(x0, 28, 15 * u, 30, "dg-q1", 6) + t(x0 + 7.5 * u, 48, "15 Stück: Bedarf in 3 h", "dg-tm") + r(x0 + 15 * u, 28, 2.33 * u, 30, "dg-band", 6) + t(x0 + 16.17 * u, 48, "+2,33", "dg-xs");
    b += ln(x0 + 17.33 * u, 22, x0 + 17.33 * u, 116, "dg-lp dg-d") + t(x0 + 17.33 * u + 4, 48, "= 17,33", "dg-at", "start");
    b += t(62, 100, "Behälter", "dg-tm", "end");
    for (let k = 0; k < 6; k++) b += r(x0 + k * 3 * u + 1, 80, 3 * u - 2, 30, "dg-a", 6) + t(x0 + k * 3 * u + 1.5 * u, 100, "3", "dg-tm");
    b += t(214, 134, "17,33 / 3 = 5,78 → aufrunden: 6 Kanbans (6 × 3 = 18 Stück)", "dg-tm");
    return svg(142, "Anzahl Kanbans: 15 Stück Bedarf in der Wiederbeschaffungszeit plus 2,33 Stück Sicherheit ergeben 17,33 Stück, also 6 Behälter zu je 3 Stück", b);
  };

  PL.losgroesse = () => {
    const x0 = 44, y0 = 192, w = 350, h = 168, qmin = 0.18, qmax = 3.2, X = (q) => x0 + (q - qmin) / (qmax - qmin) * w, Y = (c) => y0 - c / 3.6 * h;
    const rue = [], hold = [], tot = [];
    for (let q = qmin; q <= qmax + 1e-9; q += 0.04) { rue.push([X(q), Y(Math.min(1 / q, 3.6))]); hold.push([X(q), Y(q)]); tot.push([X(q), Y(Math.min(q + 1 / q, 3.6))]); }
    let b = axes(x0, y0, x0 + w + 14, y0 - h - 12, "Losgröße q →", "Kosten pro Jahr");
    b += p(poly(rue), "dg-l") + p(poly(hold), "dg-l dg-d") + p(poly(tot), "dg-lp");
    b += ln(X(1), y0, X(1), Y(2) - 4, "dg-lp dg-d") + ci(X(1), Y(2), 4, "dg-a") + t(X(1), y0 + 16, "q*", "dg-at");
    const ang = -Math.atan((h / 3.6) / (w / (qmax - qmin))) * 180 / Math.PI;
    b += t(X(0.42), Y(3.2), "Gesamtkosten", "dg-at", "start") + t(X(2.6), Y(0.62), "Rüstkosten", "dg-s") + tr(X(2.5) + 5, Y(2.5) + 13, "Lagerhaltungskosten", "dg-s", f(ang));
    b += ci(X(1), Y(1), 3.5, "dg-b") + ln(X(1) + 4, Y(1) + 4, X(1) + 24, Y(1) + 25, "dg-l") + t(X(1) + 27, Y(1) + 36, "gleich hoch", "dg-xs", "start");
    return svg(214, "Optimale Losgröße nach Andler: Rüstkosten sinken, Lagerhaltungskosten steigen mit der Losgröße – q* liegt am Minimum der Gesamtkosten", b);
  };

  PL.zyklus = () => {
    const small = [];
    for (let k = 0; k < 8; k++) small.push([k * 6, k * 6 + 3, "", "dg-q1"], [k * 6 + 3, k * 6 + 5, "", "dg-q3"], [k * 6 + 5, k * 6 + 6, "", "dg-q4"]);
    return SB.gantt({
      rows: [{ l: ["1-fach-Zyklus", "(große Lose)"], segs: [[0, 24, "A: 24", "dg-q1"], [24, 40, "B: 16", "dg-q3"], [40, 48, "C: 8", "dg-q4"]] }, { l: ["8-fach-Zyklus", "(kleine Lose)"], segs: small }],
      tmax: 48, lw: 96, rh: 40, ticks: [[0, "0"], [24, "24"], [48, "48 Stück = 1 Tag"]], note: "A und C werden danach lackiert, B nicht",
      label: "Losgröße und Variabilität: Große Lose bündeln A, B und C, kleine Lose wechseln ständig und belasten die Lackierung gleichmäßig"
    });
  };

  PL.opp = () => {
    const names = [["Beschaf-", "fung"], ["Ferti-", "gung"], ["Vor-", "montage"], ["End-", "montage"], ["Distri-", "bution"]];
    let b = "";
    names.forEach((n, i) => { const x = i * 70; b += r(x, 44, 64, 40, "dg-b", 8) + tl(x + 32, 60, n, "dg-tm", "middle", 13); });
    b += r(350, 44, 70, 40, "dg-a", 8) + t(385, 69, "Kunde", "dg-tm");
    [[67, "MTO"], [137, "ATO"], [277, "MTS"]].forEach(([x, s]) => { b += t(x, 16, s, "dg-at") + ln(x, 22, x, 41, "dg-lp", "ahp"); });
    b += t(210, 102, "MTO = Make-to-Order · ATO = Assemble-to-Order · MTS = Make-to-Stock", "dg-xs");
    b += r(0, 114, 136, 20, "dg-q3", 5) + t(68, 128, "antizipativ (Prognose)", "dg-xs") + r(139, 114, 281, 20, "dg-q1", 5) + t(280, 128, "reaktiv (Kundenauftrag) – Beispiel ATO", "dg-xs");
    b += t(210, 156, "OPP weiter vorn (links): weniger Prognoserisiko und Bestand,", "dg-xs") + t(210, 170, "aber längere Lieferzeit – OPP weiter hinten: genau umgekehrt", "dg-xs");
    return svg(178, "Variantenbestimmungspunkt (Order Penetration Point): Make-to-Order, Assemble-to-Order oder Make-to-Stock – links davon wird nach Prognose, rechts nach Kundenauftrag gearbeitet", b);
  };

  PL.postponement = () => SB.matrix({
    x: "Form (Fertigung)", y: "Geographic (Lager)", lo: "Speculation", hi: "Postponement", hl: [1],
    cells: [{ t: "Geogr. Postponement", s: ["zentrales Lager,", "Ware auf Vorrat"] }, { t: "Full Postponement", s: ["zentral und erst", "auf Auftrag fertigen"] }, { t: "Full Speculation", s: ["dezentrale Lager,", "Ware auf Vorrat"] }, { t: "Form Postponement", s: ["dezentral, Endstufe", "erst auf Auftrag"] }],
    label: "Postponement-Speculation-Portfolio nach Form der Fertigung und Geografie der Lagerhaltung"
  });

  PL.prioritaet = () => {
    const ok = "dg-q1", late = "dg-q4";
    const row = (name, avg, vmax, v, jobs) => {
      let x = 0; const segs = jobs.map(([n, d, l]) => { const s = [x, x + d, String(n), l ? late : ok]; x += d; return s; });
      return { l: [name, `Ø ${avg} h · v = ${v}`, `Vmax = ${vmax} h`], segs };
    };
    return SB.gantt({
      rows: [row("FCFS", "13,2", 8, 3, [[1, 4], [2, 7], [3, 1, 1], [4, 6, 1], [5, 3, 1]]), row("SPT", "9,6", 9, 2, [[3, 1], [5, 3], [1, 4], [4, 6, 1], [2, 7, 1]]), row("EDD", "11,4", 7, 2, [[3, 1], [1, 4], [2, 7], [4, 6, 1], [5, 3, 1]]), row("Moore", "10,4", 9, 1, [[3, 1], [1, 4], [4, 6], [5, 3], [2, 7, 1]])],
      tmax: 21, lw: 104, rh: 46, ticks: [[0, "0"], [7, "7"], [14, "14"], [21, "21 h"]], note: "gelb = verspätet · Ø = mittlere Fertigstellungszeit · v = Anzahl verspätet",
      label: "Prioritätsregeln an einer Station: FCFS, SPT, EDD und Moore im Vergleich mit Fertigstellungszeit, maximaler Verspätung und Zahl verspäteter Aufträge"
    });
  };

  PL.oee = () => {
    const x0 = 92, sc = 300 / 480;
    let b = t(84, 27, "geplant", "dg-tm", "end") + r(x0, 10, 300, 24, "dg-bar2", 5) + t(x0 + 150, 27, "480 min", "dg-tm");
    b += t(84, 61, "Verfügbarkeit", "dg-tm", "end") + r(x0, 44, 336 * sc, 24, "dg-q1", 5) + r(x0 + 336 * sc, 44, 144 * sc, 24, "dg-barneg", 5) + t(x0 + 168 * sc, 61, "336 min = 70 %", "dg-tm") + t(x0 + 408 * sc, 61, "−144", "dg-xs");
    b += t(84, 95, "Leistung", "dg-tm", "end") + r(x0, 78, 268.8 * sc, 24, "dg-q1", 5) + r(x0 + 268.8 * sc, 78, 67.2 * sc, 24, "dg-barneg", 5) + t(x0 + 134.4 * sc, 95, "268,8 = 80 %", "dg-tm") + t(x0 + 302.4 * sc, 95, "−67,2", "dg-xs");
    b += t(84, 129, "Qualität", "dg-tm", "end") + r(x0, 112, 241.9 * sc, 24, "dg-a", 5) + r(x0 + 241.9 * sc, 112, 26.9 * sc, 24, "dg-barneg", 5) + t(x0 + 121 * sc, 129, "241,9 = 90 %", "dg-tm") + t(x0 + 268.8 * sc + 6, 129, "−26,9", "dg-xs", "start");
    b += t(210, 160, "OEE = 70 % × 80 % × 90 % = 50,4 %", "dg-at") + t(210, 174, "= wertschöpfende Zeit 241,9 min / 480 min", "dg-xs");
    const sx = (v) => 60 + v * 3;
    b += r(sx(0), 206, 120, 14, "dg-barneg", 4) + r(sx(40), 206, 120, 14, "dg-band", 4) + r(sx(80), 206, 60, 14, "dg-barpos", 4);
    b += ln(sx(50.4), 200, sx(50.4), 224, "dg-lp") + t(sx(50.4), 197, "50,4 %", "dg-at");
    b += t(120, 236, "< 40 % Handlungsbedarf", "dg-xs") + t(240, 236, "≈ 60 % typisch", "dg-xs") + t(330, 236, "> 80 % Top", "dg-xs");
    return svg(242, "OEE-Beispiel: Von 480 geplanten Minuten bleiben nach Stillständen, Leistungs- und Qualitätsverlusten 241,9 Minuten wertschöpfend, also 50,4 Prozent", b);
  };

  // =================================================================
  // Kapitel 5 – Lean Production
  // =================================================================
  PL.leistungsarten = () => {
    let b = "";
    [["Nutzleistung", [[0, 0.08], [1, 0.92]], ["Wert steigt", "Fertigung, PPS"]], ["Scheinleistung", [[0, 0.5], [1, 0.5]], ["nötig, ohne Wert", "Transport, Rüsten"]], ["Blindleistung", [[0, 0.5], [1, 0.5]], ["unnötig, ohne Wert", "Zwischenläger"]], ["Fehlleistung", [[0, 0.92], [1, 0.08]], ["vernichtet Wert", "Ausschuss"]]].forEach(([ti, pts, s], i) => {
      const x = i * 107.3;
      b += panel(x, 6, 98, 78, pts) + t(x + 49, 102, ti, "dg-tm") + tl(x + 49, 117, s, "dg-xs", "middle", 12);
    });
    b += t(210, 150, "in jedem Kästchen: senkrecht = Wert, waagerecht = Kosten", "dg-xs");
    return svg(156, "Leistungsarten: Nutzleistung schafft Wert, Schein- und Blindleistung kosten ohne Wertzuwachs, Fehlleistung vernichtet Wert", b);
  };

  PL.effektiv = () => SB.matrix({
    x: "Effizienz: die Dinge richtig tun", y: "Effektivität", lo: "niedrig", hi: "hoch", hl: [1],
    cells: [{ t: "Richtig, aber teuer", s: ["richtige Dinge,", "verschwenderisch"] }, { t: "Ziel: Lean", s: ["richtige Dinge,", "richtig gemacht"] }, { t: "Doppelt schlecht", s: ["falsche Dinge,", "schlecht gemacht"] }, { t: "Effizienter Unsinn", s: ["falsche Dinge,", "perfekt gemacht"] }],
    label: "Effektivität heißt die richtigen Dinge tun, Effizienz die Dinge richtig tun – Lean will beides für das Gesamtsystem"
  });

  PL.muda = () => SB.hub({
    center: ["Muda", "TIMWOOD"], cr: 44, label: "Sieben Arten der Verschwendung nach TIMWOOD",
    items: [{ t: "Transport", s: "unnötige Wege" }, { t: "Inventory", s: "zu viel Bestand" }, { t: "Motion", s: "unnötige Bewegung" }, { t: "Waiting", s: "Warten, Leerlauf" }, { t: "Overproduction", s: "mehr als Bedarf" }, { t: "Overprocessing", s: "Überdimensionierung" }, { t: "Defects", s: "Fehler, Nacharbeit" }]
  });

  PL.lean = () => SB.temple({
    roof: "Lean Production", roofSub: "Gesamtsystem optimieren, Muda vermeiden", base: "Vorbild: Toyota-Produktionssystem (TPS)",
    pillars: [{ t: "Kunden", s: ["Wert aus", "Kundensicht"] }, { t: "Prozesse", s: ["Wertstrom", "sichtbar"] }, { t: "Fluss", s: ["Pull, kein", "Warten"] }, { t: "Kaizen", s: ["kleine", "Schritte"] }, { t: "Kennzahlen", s: ["messen,", "steuern"] }],
    label: "Die fünf Prinzipien von Lean Production als Säulen"
  });

  PL.ishikawa = () => {
    let b = ln(16, 110, 333, 110, "dg-lp", "ahp") + r(336, 88, 84, 44, "dg-a", 10) + tl(378, 106, ["Problem", "(Wirkung)"], "dg-tm", "middle", 14);
    [[40, "Mensch", ["Schulung fehlt", "Qualifikation"]], [140, "Material", ["Lieferfehler", "falsche Sorte"]], [240, "Maschine", ["Wartung fehlt", "Verschleiß"]]].forEach(([x0, n, ex]) => {
      b += ln(x0, 34, x0 + 56, 108, "dg-l") + t(x0, 26, n, "dg-tm") + t(x0 + 26, 62, ex[0], "dg-xs", "start") + t(x0 + 36, 76, ex[1], "dg-xs", "start");
    });
    [[40, "Methode", ["Ablauf falsch", "Prozess unklar"]], [140, "Milieu", ["Wege zu lang", "Layout schlecht"]], [240, "Messung", ["Daten falsch", "Prüfmittel"]]].forEach(([x0, n, ex]) => {
      b += ln(x0, 186, x0 + 56, 112, "dg-l") + t(x0, 202, n, "dg-tm") + t(x0 + 26, 166, ex[0], "dg-xs", "start") + t(x0 + 36, 152, ex[1], "dg-xs", "start");
    });
    b += t(210, 224, "6 M: Mensch · Material · Maschine · Methode · Milieu · Messung", "dg-xs");
    return svg(230, "Ishikawa-Diagramm: Mögliche Ursachen aus sechs Kategorien führen wie Fischgräten zum Problem am Kopf", b);
  };

  PL.sixsigma = () => SB.bars({
    items: [{ l: "3 Sigma", v: Math.log10(66807), txt: "66.807" }, { l: "4 Sigma", v: Math.log10(6210), txt: "6.210" }, { l: "5 Sigma", v: Math.log10(233), txt: "233" }, { l: "6 Sigma", v: Math.log10(3.4), txt: "3,4 → 99,99966 % fehlerfrei", a: true }],
    max: 4.83, lw: 70, room: 190, label: "Six Sigma: Fehler pro einer Million Möglichkeiten sinken von 66.807 bei 3 Sigma auf 3,4 bei 6 Sigma"
  });

  PL.tpm = () => {
    let b = r(0, 4, 420, 26, "dg-band", 8) + t(210, 21, "Ziel: höhere Anlageneffektivität (OEE) – null Verluste", "dg-tm");
    [["Kaizen", "kleine Schritte"], ["Autonom", "Bediener warten"], ["Geplant", "Wartung planen"], ["Training", "MA qualifizieren"], ["Anlauf", "Hochlauf steuern"], ["Qualität", "null Fehler"], ["Verwaltung", "Muda im Büro"], ["Sicherheit", "null Unfälle"]].forEach(([ti, s], i) => {
      const x = (i % 4) * 107, y = 38 + Math.floor(i / 4) * 62;
      b += r(x, y, 99, 54, "dg-b", 10) + ci(x + 14, y + 15, 9, "dg-a") + t(x + 14, y + 19, i + 1, "dg-xs") + t(x + 28, y + 20, ti, "dg-tm", "start") + t(x + 49.5, y + 41, s, "dg-xs");
    });
    return svg(158, "Die acht Prinzipien von Total Productive Maintenance", b);
  };

  PL.fuenfS = () => SB.chain([{ t: "1 Seiri", s: "Sortieren" }, { t: "2 Seiton", s: "Aufräumen" }, { t: "3 Seiso", s: "Sauber halten" }, { t: "4 Seiketsu", s: "Standardisieren" }, { t: "5 Shitsuke", s: "Disziplin halten", a: true }], { per: 3, label: "Die 5S-Methode in fünf Schritten" });

  window.SB.PL = PL;
})();
