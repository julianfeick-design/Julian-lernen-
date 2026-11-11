/*
 * 📊 Zusatz-Schaubilder für die Lernzettel aus den Lektionen
 * Je Lektion (Schlüssel wie in window.LESSONS):
 *   sum   – „Das Wichtigste in 30 Sekunden“
 *   after – { "Überschrift eines Lektionsabschnitts": [Blöcke] } → wird im Lernzettel direkt dahinter eingefügt
 *   top   – Blöcke für den ersten Abschnitt, end – zusätzliche Abschnitte am Schluss
 * Block mit Schaubild: { fig: SVG, t: "Titel", read: "So liest du das" }
 */
(function () {
  const SB = window.SB;
  if (!SB) return;
  const { W, svg, t, tl, tr, r, ln, p, ci, f, poly } = SB.u;
  const X = {};

  // ---------- gemeinsame Bausteine
  // Balken, der ein Ganzes in zwei Teile teilt (z. B. Kosten = selbst erbracht + vergeben)
  const kostenSplit = ({ head, share, a, c, label }) => {
    const x0 = 10, w = 400, m = x0 + share * w;
    let b = p(`M${x0},32 L${x0},24 L${x0 + w},24 L${x0 + w},32`, "dg-lp") + t(W / 2, 15, head, "dg-at");
    b += r(x0, 38, m - x0 - 2, 42, "dg-q3", 8) + t((x0 + m) / 2, 57, a[0], "dg-tm") + t((x0 + m) / 2, 72, a[1], "dg-xs");
    b += r(m + 2, 38, x0 + w - m - 2, 42, "dg-a", 8) + t((m + x0 + w) / 2, 57, c[0], "dg-tm") + t((m + x0 + w) / 2, 72, c[1], "dg-xs");
    b += p(`M${f(m + 2)},86 L${f(m + 2)},94 L${x0 + w},94 L${x0 + w},86`, "dg-lp") + tl((m + x0 + w) / 2, 110, c[2], "dg-at", "middle", 14);
    b += tl((x0 + m) / 2, 104, a[2], "dg-s", "middle", 14);
    return svg(128, label, b);
  };
  // Zeitstrahl mit abwechselnd oberen und unteren Beschriftungen: items [[Jahr, Zeile1, Zeile2]]
  const timeline = (items, { hl = -1, label = "Zeitleiste", x0 = 56, x1 = 368 } = {}) => {
    const y = 74, step = (x1 - x0) / (items.length - 1);
    let b = ln(x0 - 40, y, x1 + 44, y, "dg-lp", "ahp");
    items.forEach(([j, a, c], i) => {
      const x = x0 + i * step, up = i % 2 === 0;
      b += ci(x, y, 6, i === hl ? "dg-a" : "dg-b") + t(x, up ? y - 14 : y + 24, j, "dg-at") + tl(x, up ? y - 46 : y + 40, [a, c].filter(Boolean), "dg-s", "middle", 13);
    });
    return svg(136, label, b);
  };

  // ======================================================================= VBL 1
  // ---------- A1 Grundlagen: Spediteur, Frachtführer, Verträge
  const reisebuero = () => {
    const bw = 124, gap = 24, x = (i) => i * (bw + gap), rows = [
      { h: "Urlaubsreise", y: 22, items: [["Reisender", "will verreisen"], ["Reisebüro", "bucht & organisiert"], ["Airline", "fliegt wirklich"]] },
      { h: "Gütertransport", y: 118, items: [["Verlader", "will versenden"], ["Spediteur", "besorgt den Transport"], ["Frachtführer", "fährt wirklich"]] }];
    let b = "";
    rows.forEach((row) => {
      b += t(0, row.y - 8, row.h, "dg-at", "start");
      row.items.forEach(([a, c], i) => {
        b += r(x(i), row.y, bw, 44, i === 1 ? "dg-a" : "dg-b", 12) + t(x(i) + bw / 2, row.y + 19, a, "dg-t") + t(x(i) + bw / 2, row.y + 35, c, "dg-xs");
        if (i < 2) b += ln(x(i) + bw + 3, row.y + 22, x(i + 1) - 4, row.y + 22, "dg-lp", "ahp");
      });
    });
    [0, 1, 2].forEach(i => { b += t(x(i) + bw / 2, 92, "≙", "dg-at"); });
    b += t(W / 2, 188, "Der Spediteur organisiert – fahren tut der Frachtführer.", "dg-s");
    return svg(196, "Vergleich: Der Spediteur ist wie ein Reisebüro für Waren, der Frachtführer wie die Airline", b);
  };
  X["vbl1/a-grundlagen"] = {
    sum: [
      "**Spediteur** organisiert („besorgt“) – **Frachtführer** fährt.",
      "Verträge: Verlader –**§ 453**→ Spediteur –**§ 407**→ Frachtführer · die **Ware fährt direkt** zum Empfänger.",
      "Pflichten nach **§ 454**: Planen → Ausführen → Überwachen.",
      "**Selbsteintritt** (§ 458), **Fixkosten** (§ 459), **Sammelladung** (§ 460) → Pflichten eines Frachtführers.",
      "**TUL** = Transport, Umschlag, Lagerung · **ADSp** = die „AGB“ der Spediteure.",
    ],
    after: {
      "Die vier Beteiligten": [{ fig: reisebuero(), t: "Der Spediteur ist ein Reisebüro für Waren",
        read: "Lies die beiden Reihen **untereinander**: Wie ein **Reisebüro** deine Reise bucht, aber nicht selbst fliegt, so **besorgt der Spediteur** den Transport – er wählt aus, beauftragt und kontrolliert. **Fahren** tut der **Frachtführer**, so wie die Airline fliegt. Diese Trennung ist der Schlüssel für die drei Verträge." }],
      "Was heißt „besorgen“ – und was ist Selbsteintritt?": [{
        fig: SB.tree({ root: "Sonderfälle der Spedition", label: "Drei Sonderfälle, in denen der Spediteur die Pflichten eines Frachtführers hat",
          kids: [{ t: ["Selbst-", "eintritt"], s: ["§ 458 HGB", "fährt selbst"] }, { t: ["Fixkosten-", "spedition"], s: ["§ 459 HGB", "Festpreis inkl.", "Beförderung"] }, { t: ["Sammel-", "ladung"], s: ["§ 460 HGB", "bündelt mehrere", "Sendungen"] }],
          sub: "→ in allen drei Fällen: Pflichten wie ein Frachtführer" }),
        t: "Wann der Spediteur wie ein Frachtführer haftet",
        read: "Normalerweise **besorgt** der Spediteur nur. In **drei Sonderfällen** rückt er so nah an die Beförderung heran, dass er hinsichtlich der Beförderung die **Pflichten eines Frachtführers** hat: wenn er **selbst fährt** (§ 458), einen **Festpreis inklusive Beförderung** vereinbart (§ 459) oder mehrere Sendungen zu einer **Sammelladung** bündelt (§ 460)." }],
      "TUL – die klassischen Leistungen der Spedition": [{ fig: SB.S.grundfunktionen(), t: "TUL im Bild",
        read: "Jedes Feld ist eine Grundleistung: **Transport** bringt die Ware von Ort A nach Ort B (überbrückt den **Raum**), **Lagern** hebt sie von heute bis später auf (überbrückt die **Zeit**), **Umschlag** bündelt und ordnet sie zwischen zwei Fahrzeugen oder ins Lager." }],
    },
  };

  // ---------- A2 Verkehrsträger & Transportketten
  const buendelung = () => {
    const P = SB.plot({ x0: 50, y0: 172, w: 340, h: 148, xr: [0, 20], yr: [0, 600] }), { X: x, Y: y } = P, be = 1000 / 220;
    const area = []; for (let i = 0; i <= 40; i++) { const n = be + (20 - be) * i / 40; area.push([x(n), y(1000 / n + 80)]); }
    let b = p(`M${f(x(be))},${f(y(300))} L${f(x(20))},${f(y(300))} ${poly(area.reverse()).replace("M", "L")} Z`, "dg-area");
    b += P.axes("", "€ je Sendung") + P.xt([[1, "1"], [10, "10"], [15, "15"], [20, "20 Sendungen"]]) + P.xt([[be, "4,5"]], "dg-at") + P.yt([[300, "300"], [600, "600"]]);
    b += ln(x(0), y(300), x(20), y(300), "dg-lb") + p(P.curve((n) => 1000 / n + 80, 1000 / 520, 20), "dg-lp");
    b += ln(x(be), y(0), x(be), y(300) + 4, "dg-l dg-d") + ci(x(be), y(300), 4.5, "dg-a");
    b += t(x(20), y(300) - 8, "direkt: 300 € je Sendung", "dg-bt", "end") + t(x(10), 160, "gebündelt: 1.000 € / n + 80 €", "dg-at", "start") + t(x(12.5), 119, "Ersparnis", "dg-xs");
    b += t(W / 2, 208, "Schnittpunkt bei n ≈ 4,5 → ab 5 Sendungen ist Bündeln billiger", "dg-s");
    return svg(214, "Bündelung: Kosten je Sendung sinken mit der Zahl der Sendungen, ab fünf Sendungen günstiger als direkt", b);
  };
  X["vbl1/a-verkehrstraeger"] = {
    sum: [
      "Verkehrs**träger** = System (Straße, Schiene, Wasser, Luft) · Verkehrs**mittel** = Fahrzeug darauf.",
      "Schwer & nicht eilig → **Schiff/Bahn** · eilig & wertvoll → **Flugzeug** · flexibel Haus-zu-Haus → **Lkw**.",
      "Auswahl in 5 Schritten: Eignung → Gesamtkosten → Leistung → Umwelt → Entscheidung (mit Rückfalloption).",
      "Transportkette: Vorlauf → Umschlag → Hauptlauf → Umschlag → **Nachlauf (≈ 50 % der Kosten)**.",
      "Bündelung: 1.000 €/n + 80 € je Sendung → ab **5 Sendungen** billiger als direkt (300 €).",
    ],
    after: {
      "Die vier wichtigsten Verkehrsträger im Vergleich": [{
        fig: SB.profile({ label: "Stärken und Schwächen von Straße, Schiene, Wasser und Luft", cols: ["Straße", "Schiene", "Wasser", "Luft"], rows: [
          ["Kapazität", [[1, "gering"], [3, "hoch"], [3, "hoch"], [2, "mittel"]]],
          ["Flexibilität", [[3, "hoch"], [2, "mittel"], [1, "gering"], [1.5, "gering–mittel"]]],
          ["Tempo", [[2.5, "mittel–schnell"], [1.5, "langsam–mittel"], [1, "langsam"], [3.5, "schnell"]]],
          ["CO₂-Ausstoß", [[3, "hoch"], [1, "niedrig"], [2, "mittel"], [4, "sehr hoch"]]]] }),
        t: "Jeder Verkehrsträger hat sein Profil",
        read: "Je **länger der Balken**, desto stärker die Eigenschaft. Die **Straße** punktet mit **Flexibilität** (Haus zu Haus), **Schiene und Wasser** mit **Kapazität** und wenig CO₂, die **Luft** mit **Tempo** – bei sehr hohem CO₂-Ausstoß. Keiner kann alles → der Spediteur muss **abwägen**." }],
      "Faustregel": [{
        fig: SB.bars({ label: "Transportzeit von Asien nach Europa je Verkehrsträger", max: 40, lw: 90, room: 156, items: [
          { l: "Seeschiff", v: 38, txt: "5–6 Wochen · günstig" }, { l: "Bahn", v: 21, txt: "≈ 3 Wochen" }, { l: "Flugzeug", v: 5, txt: "≈ 5 Tage · teuer, viel CO₂", a: true }] }),
        t: "Asien → Europa: Zeit gegen Kosten",
        read: "Die Balken zeigen die **Laufzeit**. Das **Schiff** ist am langsamsten, aber am **günstigsten** – ideal für viel, schwer, nicht eilig. Das **Flugzeug** ist in rund 5 Tagen da, aber **teuer** und CO₂-intensiv → nur für eilige, wertvolle, leichte Güter. Die **Bahn** liegt dazwischen." }],
      "Warum zählt die Tür-zu-Tür-Zeit?": [{
        fig: SB.gantt({ label: "Frankfurt nach Mailand: Flugzeug und Lkw von Tür zu Tür", tmax: 10, lw: 64, rows: [
          { l: "Flugzeug", segs: [[0, 4.5, "Vorlauf, Cut-off, Umschlag", "dg-q3"], [4.5, 6, "Flug", "dg-a"], [6, 9.5, "Umschlag, Zustellung", "dg-q3"]] },
          { l: "Lkw", segs: [[0, 9, "fährt direkt von Tür zu Tür", "dg-b"]] }],
          ticks: [[0, "0 h"], [2, "2 h"], [4, "4 h"], [6, "6 h"], [8, "8 h"], [10, "10 h"]], note: "Beispielwerte" }),
        t: "Frankfurt → Mailand: Tür zu Tür",
        read: "Der **Flug** selbst (farbig) ist nur ein kleiner Teil. Davor und danach kommen **Vorlauf, Cut-off-Zeit, Umschlag und Zustellung** (grau). Tür zu Tür ist der **Lkw** deshalb oft genauso schnell – und viel günstiger. → Immer die **Tür-zu-Tür-Zeit** vergleichen, nie nur die Flug- oder Fahrzeit." }],
      "Die Transportkette": [{
        fig: SB.gantt({ label: "Der Nachlauf ist kurz, verursacht aber etwa die Hälfte der Kosten", tmax: 100, lw: 64, rows: [
          { l: "Strecke", segs: [[0, 15, "Vorlauf", "dg-b"], [15, 85, "Hauptlauf – lange Strecke, gebündelt", "dg-a"], [85, 100, "Nachlauf", "dg-b"]] },
          { l: "Kosten", segs: [[0, 50, "Rest der Kette ≈ 50 %", "dg-b"], [50, 100, "Nachlauf ≈ 50 %", "dg-sev3"]] }], note: "Streckenanteile = Beispiel" }),
        t: "Kurze Strecke, hohe Kosten: der Nachlauf",
        read: "Oben die **Strecke**: Der Nachlauf ist nur ein kurzes Stück am Ende. Unten die **Kosten**: Genau dieses Stück macht **rund die Hälfte** aus. Grund: Der Verteiler-Lkw fährt **viele einzelne Empfänger** an – kleine Mengen, viele Stopps. Im Hauptlauf ist dagegen alles **gebündelt**." }],
      "Was bringt die Bündelung?": [{ fig: buendelung(), t: "Ab wann lohnt sich Bündeln?",
        read: "Die **rote Linie** ist der Direktversand: immer 300 € je Sendung. Die **farbige Kurve** ist die Bündelung: Die 1.000 € Hauptlauf werden auf **n Sendungen verteilt**, dazu kommen 80 € je Sendung. Mit jeder weiteren Sendung sinkt die Kurve. Am **Schnittpunkt (n ≈ 4,5)** sind beide gleich teuer – ab **5 Sendungen** spart die Bündelung (Fläche)." }],
    },
  };

  // ---------- A3 Markt: 1PL–4PL
  const stufen = () => {
    const x0 = 56, sw = 91, base = 150, names = [["1PL", ["fährt nur"]], ["2PL", ["koordiniert"]], ["3PL", ["übernimmt", "Prozesse"]], ["4PL", ["steuert die", "Supply Chain"]]];
    let b = p(`M18,${base} L18,26`, "dg-lp", "ahp") + tr(9, 90, "Leistung & Integration", "dg-at");
    names.forEach(([n, d], i) => {
      const x = x0 + i * sw, top = 110 - i * 26;
      b += r(x + 1, top, sw - 2, base - top, ["dg-q3", "dg-q2", "dg-q1", "dg-a"][i], 6) + t(x + sw / 2, top + 18, n, "dg-t") + tl(x + sw / 2, top + 33, d, "dg-xs", "middle", 12);
      const cx = x + sw / 2, dots = [8, 6, 2, 2][i], rr = [3.5, 3.5, 7, 7][i], sp = [9, 9, 20, 20][i];
      for (let k = 0; k < dots; k++) b += ci(cx + (k - (dots - 1) / 2) * sp, 172, rr, "dg-b");
      b += t(cx, 202, ["kurz", "< 1 Jahr", "3–10 Jahre", "> 3 Jahre"][i], "dg-s");
    });
    b += t(48, 176, "Kunden", "dg-xs", "end") + t(48, 202, "Vertrag", "dg-xs", "end") + ln(x0, 186, W, 186, "dg-l dg-d");
    return svg(210, "Logistikdienstleister von 1PL bis 4PL: mehr Leistung und Integration, weniger und größere Kunden, längere Verträge", b);
  };
  const vas = () => {
    let b = t(100, 14, "produktorientiert", "dg-at") + t(320, 14, "prozessorientiert", "dg-at") + ln(210, 24, 210, 152, "dg-l dg-d");
    const tags = [[8, 30, "Kontrolle"], [108, 30, "Montage"], [8, 124, "Umpacken"], [108, 124, "Recycling"]];
    b += tags.map(([x, y]) => ln(x + 42, y + 13, 100, 96, "dg-l dg-d")).join("");
    b += r(56, 78, 88, 36, "dg-a", 10) + t(100, 101, "Produkt", "dg-t");
    b += tags.map(([x, y, s]) => r(x, y, 84, 26, "dg-b", 8) + t(x + 42, y + 17, s, "dg-xs")).join("");
    ["Auftrag annehmen", "Kommissionieren", "Etikettieren", "Retouren managen"].forEach((s, i) => {
      const y = 28 + i * 32;
      b += r(236, y, 168, 24, i === 1 ? "dg-q2" : "dg-b", 8) + t(320, y + 16, s, "dg-xs") + (i < 3 ? ln(320, y + 24, 320, y + 31, "dg-lp", "ahp") : "");
    });
    b += t(100, 170, "verändert die Ware", "dg-s") + t(320, 170, "verbessert den Ablauf", "dg-s");
    return svg(178, "Value Added Services: produktorientiert an der Ware, prozessorientiert am Ablauf", b);
  };
  const marktsplit = () => kostenSplit({ head: "≈ 330 Mrd. € Logistikkosten in DE (= Marktvolumen)", share: 199 / 330,
    a: ["≈ 60 % selbst erbracht", "≈ 199 Mrd. € · kein Umsatz", ["Industrie & Handel", "machen es selbst"]],
    c: ["≈ 40 % vergeben", "≈ 131 Mrd. €", ["= Umsatz der", "Logistikbranche"]],
    label: "330 Milliarden Euro Logistikkosten: 60 Prozent selbst erbracht, 40 Prozent vergeben als Umsatz der Branche" });
  X["vbl1/a-markt"] = {
    sum: [
      "**1PL** fährt · **2PL** koordiniert · **3PL** übernimmt ganze Prozesse · **4PL** steuert die gesamte Supply Chain.",
      "Je höher die Stufe: **mehr Leistung, Integration, längere Verträge** – aber **weniger Kunden**.",
      "Value Added Services: **produktorientiert** (an der Ware) oder **prozessorientiert** (am Ablauf).",
      "**≈ 330 Mrd. € = Logistik*kosten*** (Marktvolumen) – nur ≈ 131 Mrd. € sind **Umsatz** der Branche.",
    ],
    after: {
      "Die Treppe: Je höher, desto mehr Leistung": [{ fig: stufen(), t: "Was sich mit jeder Stufe ändert",
        read: "Von **1PL bis 4PL** steigt die Treppe: Jede Stufe übernimmt **mehr Leistung** und ist **enger mit dem Kunden verzahnt** (Prozesse, IT). Darunter siehst du die Kehrseite: links viele kleine, wechselnde Kunden, ab 3PL **wenige Großkunden** (große Punkte) – und die **Verträge werden länger**. Prüfungs-Tipp: zu jeder Stufe ein Beispiel nennen." }],
      "Value Added Services – zwei Arten": [{ fig: vas(), t: "Zwei Arten von Mehrwertdiensten",
        read: "**Links** passieren die Dienste **an der Ware selbst**: prüfen, montieren, umpacken, recyceln. **Rechts** verbessern sie **den Ablauf** rund um die Ware: Aufträge, Kommissionierung, Etiketten, Retouren. Beides geht über TUL hinaus – das ist der **Wandel der Spedition**." }],
      "Prüfungsfalle": [{ fig: marktsplit(), t: "Kosten ≠ Umsatz",
        read: "Der ganze Balken sind die **Logistikkosten** in Deutschland (≈ 330 Mrd. €). Den größeren Teil erledigen Industrie und Handel **selbst** – das wird nie verkauft und ist deshalb **kein Umsatz**. Nur der vergebene Teil (≈ 131 Mrd. €) ist **Umsatz der Logistikbranche**." }],
      "Trends, die die Spedition verändern": [{
        fig: SB.hub({ center: "Trends", label: "Fünf Trends, die die Spedition verändern", items: [
          { t: "Digitalisierung", s: "Echtzeit-Tracking" }, { t: "Nachhaltigkeit", s: "CO₂ senken" }, { t: "E-Commerce", s: "letzte Meile" }, { t: "Fachkräftemangel", s: "KI entlastet" }, { t: "Unsicherheit", s: "Risikomanagement" }] }),
        t: "Fünf Kräfte gleichzeitig",
        read: "Alle fünf Trends wirken **gleichzeitig** auf die Spedition: **Digitalisierung** (Tracking, Automatisierung), **Nachhaltigkeit** (CO₂ runter), **E-Commerce** (schneller, viele kleine Sendungen), **Fachkräftemangel** (Fahrer fehlen) und **globale Unsicherheit** (flexible Lieferketten)." }],
    },
  };

  // ---------- B1 Straße
  const wechselbruecke = () => SB.gantt({ label: "Lkw mit und ohne Wechselbrücke im Tagesablauf", tmax: 10, lw: 92, rows: [
    { l: ["ohne", "Wechselbrücke"], segs: [[0, 2, "laden", "dg-q3"], [2, 6, "fährt", "dg-a"], [6, 8, "entladen", "dg-q3"], [8, 10, "laden", "dg-q3"]] },
    { l: ["mit", "Wechselbrücke"], segs: [[0, 0.4, "", "dg-b"], [0.4, 4.6, "fährt mit Brücke A", "dg-a"], [4.6, 5.2, "", "dg-b"], [5.2, 9.4, "fährt mit Brücke B", "dg-a"], [9.4, 10, "", "dg-b"]] },
    { l: ["abgestellte", "Brücke"], segs: [[0, 4.5, "Brücke B wird beladen", "dg-b"], [5.3, 9.5, "Brücke A wird entladen", "dg-b"]] }],
    ticks: [[0, "0 h"], [5, "5 h"], [10, "10 h"]], note: "grau = Lkw steht · schmale Felder = Brücke tauschen" });
  const fuhrpark = () => {
    const P = SB.plot({ x0: 50, y0: 168, w: 300, h: 140, xr: [0, 100], yr: [0, 110] }), { X: x, Y: y } = P;
    let b = P.axes("", "Kosten");
    b += p(poly([[x(0), y(0)], [x(100), y(100)]]), "dg-lb") + p(poly([[x(0), y(40)], [x(100), y(90)]]), "dg-lp");
    b += ln(x(80), y(0), x(80), y(80) + 4, "dg-l dg-d") + ci(x(80), y(80), 4.5, "dg-a") + P.xt([[80, "Break-even"]], "dg-at");
    b += p(`M${x(0) + 3},${f(y(1))} L${x(0) + 7},${f(y(1))} L${x(0) + 7},${f(y(39))} L${x(0) + 3},${f(y(39))}`, "dg-l") + t(x(0) + 12, f(y(30) + 4), "Fixkosten", "dg-xs", "start");
    b += t(x(100) + 4, y(100) + 4, "TU", "dg-bt", "start") + t(x(100) + 4, y(90) + 8, "Fuhrpark", "dg-at", "start");
    b += t(x(36), P.y0 + 32, "wenig / schwankend → TU günstiger", "dg-xs") + t(x(90), P.y0 + 32, "viel & stabil → Fuhrpark", "dg-xs");
    return svg(P.y0 + 40, "Eigener Fuhrpark mit Fixkosten gegen Transportunternehmer mit nur variablen Kosten", b);
  };
  const maut = () => {
    let b = "";
    ["Achszahl & Gewicht", "Schadstoffklasse", "CO₂-Klasse"].forEach((s, i) => { const y = 8 + i * 42; b += r(0, y, 128, 32, "dg-b", 9) + t(64, y + 20, s, "dg-xs") + p(`M130,${y + 16} C150,${y + 16} 148,70 167,70`, "dg-l", "ah"); });
    b += r(170, 48, 112, 44, "dg-a", 12) + t(226, 67, "Mautsatz", "dg-t") + t(226, 83, "0,114–0,516 €/km", "dg-xs");
    b += ln(284, 70, 315, 70, "dg-lp", "ahp") + t(300, 62, "× km", "dg-xs") + r(318, 48, 102, 44, "dg-a", 12) + t(369, 67, "Maut", "dg-t") + t(369, 83, "in €", "dg-xs");
    b += t(W / 2, 150, "Beispiel: 420 km × 0,348 €/km = 146,16 €", "dg-at") + t(W / 2, 168, "Lkw über 3,5 t · Autobahnen & Bundesstraßen · erfasst per OBU (Toll Collect)", "dg-xs");
    return svg(176, "Die Lkw-Maut ergibt sich aus Mautsatz je Kilometer mal mautpflichtige Kilometer", b);
  };
  X["vbl1/b-strasse"] = {
    sum: [
      "Rund **80 %** aller Güter in Deutschland fahren mit dem **Lkw**.",
      "**GÜKG-Erlaubnis**: Zuverlässigkeit + finanzielle Leistungsfähigkeit + fachliche Eignung.",
      "Sattelzug 40 t · 16,50 m · 33/34 Paletten · Gliederzug 18,75 m · 38 Paletten mit **Wechselbrücken**.",
      "TU = nur variable Kosten, flexibel · eigener Fuhrpark = Fixkosten, aber volle Kontrolle.",
      "**Maut** = Mautsatz (€/km) × mautpflichtige km · Lkw > 3,5 t · per OBU (Toll Collect).",
    ],
    after: {
      "GÜKG – wer darf gewerblich Güter fahren?": [{
        fig: SB.temple({ roof: "GÜKG-Erlaubnis", roofSub: "für den gewerblichen Güterkraftverkehr", label: "Die GÜKG-Erlaubnis ruht auf drei Voraussetzungen",
          pillars: [{ t: ["Zuverlässig-", "keit"], s: ["keine schweren", "Verstöße"] }, { t: ["Finanzielle", "Leistungs-", "fähigkeit"], s: ["Eigenkapital", "nachweisen"] }, { t: ["Fachliche", "Eignung"], s: ["IHK-Prüfung"] }],
          base: "Fehlt eine Säule → keine Erlaubnis" }),
        t: "Drei Säulen für die Erlaubnis",
        read: "Wer **gewerblich** Güter mit dem Lkw befördert, braucht die **Erlaubnis nach GÜKG** (das Dach). Sie ruht auf **drei Säulen**: Der Unternehmer muss **zuverlässig**, **finanziell leistungsfähig** (Eigenkapital) und **fachlich geeignet** (IHK-Prüfung) sein. Bricht eine Säule weg, gibt es keine Erlaubnis." }],
      "Fahrzeugtypen im Überblick": [{
        fig: SB.bars({ label: "Länge und Palettenplätze von Sattelzug, Gliederzug und Lang-Lkw", max: 25.25, lw: 92, room: 168, items: [
          { l: "Sattelzug", v: 16.5, txt: "16,50 m · 33/34 Pal." }, { l: "Gliederzug", v: 18.75, txt: "18,75 m · 38 Pal.", a: true }, { l: "Lang-Lkw", v: 25.25, txt: "bis 25,25 m · +50 %" }] }),
        t: "Gleiches Gewicht, mehr Länge",
        read: "Alle drei dürfen **40 t** wiegen – der Unterschied ist die **Länge** und damit der **Laderaum**. Der **Gliederzug** fasst mit 38 Palettenplätzen mehr als der Sattelzug (33/34), weil er zwei **Wechselbrücken** trägt. Der **Lang-Lkw** bringt bis zu 50 % mehr Kapazität – vor allem auf Langstrecken und im KV." }],
      "Warum Wechselbrücken?": [{ fig: wechselbruecke(), t: "Der Lkw muss nicht mehr warten",
        read: "**Ohne Wechselbrücke** (oben) steht der teure Lkw samt Fahrer beim Be- und Entladen herum (grau). **Mit Wechselbrücke** (Mitte) wird nur die Ladefläche **abgestellt und getauscht** – das dauert Minuten. Die abgestellte Brücke wird **parallel** be- oder entladen (unten) → der Lkw ist fast nur noch unterwegs: **bessere Auslastung**." }],
      "Eigener Fuhrpark oder Transportunternehmer (TU)?": [{ fig: fuhrpark(), t: "Fixkosten gegen variable Kosten (Prinzip)",
        read: "Der **Transportunternehmer** (rot) kostet nur, wenn er fährt: **rein variable Kosten**, startet bei 0. Der **eigene Fuhrpark** (Farbe) hat **Fixkosten** (Fahrzeuge, Fahrer), dafür ist jede Fahrt günstiger. Bei **wenig oder schwankender Menge** ist der TU billiger, erst bei **viel und stabiler Menge** (rechts vom Break-even) lohnt der eigene Fuhrpark." }],
      "Lkw-Maut in Deutschland": [{ fig: maut(), t: "So entsteht die Maut",
        read: "Der **Mautsatz pro km** hängt vom Fahrzeug ab: **Achszahl und Gewicht**, **Schadstoffklasse** und **CO₂-Klasse**. Die Maut ist dann einfach **Mautsatz × gefahrene km** auf Autobahnen und Bundesstraßen. Erfasst wird automatisch über die **On-Board-Unit** (Toll Collect)." }],
    },
  };

  // ---------- B2 Sammelgut
  const sammelUhr = () => {
    const cx = 112, cy = 106, R = 86, r0 = 54;
    const A = (h) => (-90 + h * 15) * Math.PI / 180, pt = (h, rr) => [cx + rr * Math.cos(A(h)), cy + rr * Math.sin(A(h))];
    const seg = (h1, h2, cls) => {
      const d = ((h2 - h1) + 24) % 24, lg = d > 12 ? 1 : 0, [a1, b1] = pt(h1, R), [a2, b2] = pt(h2, R), [c2, d2] = pt(h2, r0), [c1, d1] = pt(h1, r0);
      return `<path d="M${f(a1)},${f(b1)} A${R},${R} 0 ${lg} 1 ${f(a2)},${f(b2)} L${f(c2)},${f(d2)} A${r0},${r0} 0 ${lg} 0 ${f(c1)},${f(d1)} Z" class="${cls}"/>`;
    };
    const ph = [[13, 18, "dg-v1", "Vorlauf", "Nachmittag · abholen"], [18, 22, "dg-v2", "Umschlag", "Abend · Sammelladungen bilden"], [22, 4, "dg-a", "Hauptlauf", "Nacht · Line haul"], [4, 7, "dg-v2", "Umschlag", "früh · für Touren sortieren"], [7, 12, "dg-v3", "Nachlauf", "Vormittag · zustellen"]];
    let b = ci(cx, cy, R, "dg-panel") + ci(cx, cy, r0, "dg-b");
    ph.forEach(([h1, h2, cls], i) => {
      b += seg(h1, h2, cls);
      const mid = h2 > h1 ? (h1 + h2) / 2 : ((h1 + h2 + 24) / 2) % 24, [mx, my] = pt(mid, (R + r0) / 2);
      b += t(mx, my + 5, String(i + 1), "dg-tm");
    });
    [[0, "0 h"], [6, "6"], [12, "12"], [18, "18"]].forEach(([h, s]) => { const [x, y] = pt(h, R + 12); b += t(x, y + 4, s, "dg-xs"); });
    b += t(cx, cy - 2, "24 h", "dg-t") + t(cx, cy + 14, "heute → morgen", "dg-xs");
    ph.forEach(([, , cls, n, s], i) => { const y = 34 + i * 36; b += r(236, y - 11, 14, 14, cls, 4) + t(258, y, `${i + 1} ${n}`, "dg-tm", "start") + t(258, y + 13, s, "dg-xs", "start"); });
    return svg(214, "Ein Sammelgut-Tag als Uhr: Vorlauf am Nachmittag, Umschlag am Abend, Hauptlauf in der Nacht, Umschlag am frühen Morgen, Nachlauf am Vormittag", b);
  };
  const risikoverkehr = () => {
    const days = [["Mo", 85], ["Di", 55], ["Mi", 95], ["Do", 40], ["Fr", 70]], bw = 56, gap = 18, x0 = (W - 5 * bw - 4 * gap) / 2, top = 30, hg = 116;
    let b = t(W / 2, 14, "Jede Nacht Mannheim → Hamburg – der Lkw fährt immer", "dg-at");
    days.forEach(([d, v], i) => {
      const x = x0 + i * (bw + gap), yv = top + hg * (1 - v / 100);
      b += r(x, top, bw, hg, "dg-b dg-dd", 6) + r(x, yv, bw, hg * v / 100, v < 60 ? "dg-sev3" : "dg-a", 6) + t(x + bw / 2, yv + 17, `${v} %`, "dg-tm") + t(x + bw / 2, top + hg + 17, d, "dg-t");
    });
    b += t(W / 2, top + hg + 40, "Kosten je Fahrt: immer gleich · Auslastung: schwankt", "dg-s");
    return svg(top + hg + 48, "Systemgebundener Risikoverkehr: Der Hauptlauf fährt jede Nacht, die Auslastung schwankt", b);
  };
  const netzwerke = () => {
    const ang = (i) => -Math.PI / 2 + i * 2 * Math.PI / 5, R = 62, cy = 104;
    const node = (cx, i) => [cx + R * Math.cos(ang(i)), cy + R * Math.sin(ang(i))];
    let b = t(105, 14, "Firmennetzwerk", "dg-at") + t(315, 14, "Kooperationsnetzwerk", "dg-at");
    for (let i = 0; i < 5; i++) { const [x, y] = node(105, i); b += ln(105, cy, x, y, "dg-l"); }
    b += r(70, cy - 13, 70, 26, "dg-a", 8) + t(105, cy + 5, "Zentrale", "dg-xs");
    for (let i = 0; i < 5; i++) { const [x, y] = node(105, i); b += ci(x, y, 15, "dg-q1") + t(x, y + 4, "NL", "dg-xs"); }
    const cls = ["dg-v1", "dg-v2", "dg-v3", "dg-q4", "dg-q2"];
    for (let i = 0; i < 5; i++) { const [x, y] = node(315, i); b += ci(x, y, 23, "dg-zone") + ln(315, cy, x, y, "dg-l"); }
    b += ci(315, cy, 20, "dg-a") + t(315, cy + 4, "Hub", "dg-xs");
    for (let i = 0; i < 5; i++) { const [x, y] = node(315, i); b += ci(x, y, 14, cls[i]) + t(x, y + 4, "ABCDE"[i], "dg-tm"); }
    b += tl(105, 196, ["eine Firma, eigene", "Niederlassungen (NL)"], "dg-s", "middle", 14) + tl(315, 196, ["selbständige Partner A–E,", "eigene Gebiete, ein Hub"], "dg-s", "middle", 14);
    return svg(218, "Firmennetzwerk mit eigenen Niederlassungen und Kooperationsnetzwerk selbständiger Partner mit gemeinsamem Hub", b);
  };
  X["vbl1/b-sammelgut"] = {
    sum: [
      "**Sammelgut** = viele kleine Sendungen (z. B. 500 kg) werden gebündelt: **heute abgeholt, morgen zugestellt**.",
      "Ablauf: Vorlauf (Nachmittag) → Umschlag (Abend) → **Hauptlauf (Nacht)** → Umschlag (früh) → Nachlauf (Vormittag).",
      "**Systemgebundene Risikoverkehre**: Hauptläufe fahren fest geplant – egal wie voll.",
      "**Firmennetz** (eigene Niederlassungen) vs. **Kooperationsnetz** (selbständige Partner, z. B. CargoLine).",
      "**Hub and Spoke**: auch kleine Partner & schwache Relationen – aber teurer und mehr Umschlag.",
    ],
    after: {
      "Ein Sammelgut-Tag: heute abgeholt, morgen zugestellt": [{ fig: sammelUhr(), t: "Der Sammelgut-Tag als Uhr",
        read: "Lies die Uhr **im Uhrzeigersinn** ab Nachmittag: **1** Abholen beim Versender, **2** abends sortieren und Sammelladungen bilden, **3** nachts der **Hauptlauf**, **4** frühmorgens sortieren beim Empfangsspediteur, **5** vormittags zustellen. So schafft das Netz die **24-Stunden-Zustellung** (Uhrzeiten = typische Beispiele)." }],
      "Systemgebundene Risikoverkehre": [{ fig: risikoverkehr(), t: "Feste Fahrt, schwankende Ladung",
        read: "Jeder Balken ist **ein fest geplanter Hauptlauf**. Der gestrichelte Rahmen ist die volle Ladefläche, die Farbe die **tatsächliche Ladung** (Beispielwerte). Der Lkw fährt **jeden Tag** – auch halb leer (rot). Die Kosten sind fix, die Auslastung schwankt: Das ist das **Risiko** im systemgebundenen Verkehr." }],
      "Zwei Arten von Netzwerken": [{ fig: netzwerke(), t: "Eine Firma oder viele Partner?",
        read: "**Links** gehört alles **einer Firma**: eigene Niederlassungen, zentrale Steuerung, ein Markenauftritt – typisch für Konzerne. **Rechts** schließen sich **rechtlich selbständige** Speditionen zusammen: Jede hat ihr **festes Gebiet** (gestrichelt), alle nutzen ein **einheitliches Produkt** und einen **gemeinsamen Hub** – so bieten auch Mittelständler ein 24-h-Netz an." }],
    },
  };

  // ---------- B3 Europa
  const haftungHC = () => {
    let b = "";
    const group = (y0, title, rows, sc) => {
      b += t(4, y0, title, "dg-at", "start");
      rows.forEach(([l, v, s], i) => { const y = y0 + 8 + i * 28; b += t(48, y + 15, l, "dg-t", "end") + (v ? r(56, y + 2, v * sc, 20, i ? "dg-bar" : "dg-bar2", 5) : "") + t(62 + v * sc, y + 17, s, "dg-s", "start"); });
    };
    group(14, "Güterschaden / Verlust", [["HGB", 8.33, "8,33 SZR/kg · Korridor 2–40 vereinbar"], ["CMR", 8.33, "8,33 SZR/kg · zwingend"]], 12);
    group(100, "Lieferfrist überschritten", [["HGB", 3, "max. 3-fache Fracht"], ["CMR", 1, "max. 1-fache Fracht"]], 60);
    group(186, "Vermögensschäden", [["HGB", 3, "max. 3-facher Verlustbetrag"], ["CMR", 0, "keine Regelung"]], 60);
    return svg(252, "Haftung national nach HGB und international nach CMR im Vergleich", b);
  };
  const haftungRechnung = () => {
    const items = [["2.000 kg", "Gewicht"], ["8,33 SZR", "je kg"], ["16.660 SZR", "max. Haftung"], ["1,20 €", "Kurs je SZR"], ["19.992 €", "Haftung"]], ops = ["×", "=", "×", "="], bw = 70, gap = 17.5;
    let b = "";
    items.forEach(([a, c], i) => {
      const x = i * (bw + gap);
      b += r(x, 8, bw, 46, i === 4 ? "dg-a" : i === 2 ? "dg-q2" : "dg-b", 10) + t(x + bw / 2, 29, a, "dg-tm") + t(x + bw / 2, 44, c, "dg-xs");
      if (i < 4) b += t(x + bw + gap / 2, 37, ops[i], "dg-t");
    });
    const row = [["Warenwert", "20.000 €", "dg-b"], ["Haftung", "19.992 €", "dg-a"], ["ungedeckt", "8 €", "dg-sev3"]], w2 = [124, 124, 124], g2 = 24;
    row.forEach(([a, c, cls], i) => {
      const x = i * (124 + g2);
      b += r(x, 76, w2[i], 42, cls, 10) + t(x + 62, 94, a, "dg-xs") + t(x + 62, 110, c, "dg-tm");
      if (i < 2) b += t(x + 124 + g2 / 2, 102, i ? "=" : "−", "dg-t");
    });
    return svg(124, "Haftung berechnen: 2.000 kg mal 8,33 SZR mal 1,20 Euro ergibt 19.992 Euro, 8 Euro bleiben ungedeckt", b);
  };
  const kabotage = () => {
    const x0 = 20, x = (d) => x0 + d / 13 * 380;
    let b = t(x(0), 16, "Ankunft nach internationaler Lieferung (z. B. Warschau → Köln)", "dg-xs", "start") + ln(x(0) + 4, 22, x(0) + 4, 48, "dg-lp", "ahp");
    [[0.3, 2.3], [2.5, 4.5], [4.7, 6.7]].forEach(([a, c], i) => { b += r(x(a), 52, x(c) - x(a), 32, "dg-a", 8) + t((x(a) + x(c)) / 2, 72, `Fahrt ${i + 1}`, "dg-xs"); });
    b += r(x(7) + 2, 52, x(11) - x(7) - 4, 32, "dg-q4", 8) + t((x(7) + x(11)) / 2, 72, "4 Tage Abkühlphase", "dg-xs");
    b += r(x(11) + 2, 52, x(13) - x(11) - 2, 32, "dg-b", 8) + t((x(11) + x(13)) / 2, 72, "wieder ok", "dg-xs");
    b += p(`M${x(0)},90 L${x(0)},96 L${x(7)},96 L${x(7)},90`, "dg-lp") + t((x(0) + x(7)) / 2, 111, "max. 3 Kabotagefahrten in 7 Tagen", "dg-at");
    b += ln(x(0), 128, x(13) + 4, 128, "dg-l", "ah");
    [[0, "Tag 0"], [7, "Tag 7"], [11, "Tag 11"]].forEach(([d, s]) => { b += ln(x(d), 125, x(d), 131) + t(x(d), 144, s, "dg-xs", d ? "middle" : "start"); });
    b += t(W / 2, 164, "Außerdem: Lkw muss spätestens alle 8 Wochen zurück in den Heimatstaat", "dg-xs");
    return svg(172, "Kabotage: nach einer internationalen Lieferung höchstens drei Inlandsfahrten in sieben Tagen, dann vier Tage Abkühlphase", b);
  };
  const leerfahrten = () => {
    let b = r(0, 20, 90, 120, "dg-q2", 12) + tl(45, 74, ["Region", "A"], "dg-t", "middle", 16) + r(330, 20, 90, 120, "dg-q2", 12) + tl(375, 74, ["Region", "B"], "dg-t", "middle", 16);
    const right = (y, h, cls) => `<path d="M96,${y} L300,${y} L300,${y - 6} L322,${y + h / 2} L300,${y + h + 6} L300,${y + h} L96,${y + h} Z" class="${cls}"/>`;
    const left = (y, h, cls) => `<path d="M324,${y} L120,${y} L120,${y - 6} L98,${y + h / 2} L120,${y + h + 6} L120,${y + h} L324,${y + h} Z" class="${cls}"/>`;
    b += right(34, 26, "dg-a") + t(204, 51, "voll: 100 Lkw", "dg-tm");
    b += t(214, 80, "voll zurück: 40 Lkw", "dg-xs") + left(86, 8, "dg-a");
    b += left(112, 18, "dg-b dg-dd") + t(214, 125, "leer zurück: 60 Lkw", "dg-bt");
    b += t(W / 2, 162, "Unpaarige Warenströme → Leerfahrten auf dem Rückweg (Beispielzahlen)", "dg-s");
    return svg(170, "Unpaarige Warenströme: Hin viel Ladung, zurück wenig, deshalb Leerfahrten", b);
  };
  X["vbl1/b-europa"] = {
    sum: [
      "**EWR** = EU + EFTA − Schweiz.",
      "Grenzüberschreitend: **EU-Lizenz** (oder CEMT) + **CMR-Frachtbrief** (Pflicht).",
      "Güterschaden HGB & CMR: max. **8,33 SZR/kg** · Lieferfrist: HGB **3-fache**, CMR **1-fache** Fracht.",
      "Rechnen: kg × 8,33 SZR × Kurs – z. B. 2.000 × 8,33 × 1,20 € = **19.992 €**.",
      "**Kabotage**: max. 3 Fahrten in 7 Tagen, dann 4 Tage Abkühlphase · Rückkehr spätestens nach 8 Wochen.",
    ],
    after: {
      "Haftung: HGB (national) vs. CMR (international)": [{ fig: haftungHC(), t: "HGB und CMR im Vergleich",
        read: "Beim **Güterschaden** sind beide gleich: höchstens **8,33 SZR je kg**. Nur das **HGB** erlaubt, per Vereinbarung einen **Korridor von 2–40 SZR** festzulegen – die CMR ist **zwingend**. Bei **Lieferfristüberschreitung** haftet man national bis zur **3-fachen**, international nur bis zur **1-fachen Fracht**; Vermögensschäden regelt nur das HGB." }],
      "Haftung berechnen (prüfungsrelevant!)": [{ fig: haftungRechnung(), t: "Haftung in drei Schritten",
        read: "Oben die Rechnung von links nach rechts: **Gewicht × 8,33 SZR je kg** = Haftung in SZR, dann **× Kurs** = Haftung in Euro. Unten der Vergleich mit dem **Warenwert**: Liegt die Haftung darunter, bleibt die Differenz **ungedeckt** (hier 8 €)." }],
      "Kabotage-Regeln (Mobilitätspaket, seit Feb. 2022)": [{ fig: kabotage(), t: "Kabotage auf dem Zeitstrahl",
        read: "Nach einer **internationalen Lieferung** darf der ausländische Lkw **innerhalb von 7 Tagen höchstens 3 Inlandsfahrten** machen (Kabotage). Danach kommt eine **Abkühlphase von 4 Tagen**, bevor wieder Kabotage erlaubt ist. Außerdem muss das Fahrzeug **spätestens alle 8 Wochen** zurück in den Heimatstaat." }],
      "Warum gibt es so viele Leerfahrten?": [{ fig: leerfahrten(), t: "Unpaarige Ströme",
        read: "Von A nach B gibt es **viel mehr Ladung** als zurück. Die Lkw, die nach B gefahren sind, finden nicht genug **Rückladung** – ein Teil fährt **leer** zurück (gestrichelt). Kabotage soll helfen, solche Leerfahrten mit Inlandsaufträgen zu füllen." }],
    },
  };

  // ======================================================================= Logistik
  // ---------- Was ist Logistik?
  const wippe = () => {
    let b = ln(40, 62, 380, 62, "dg-lp") + p("M210,63 L192,98 L228,98 Z", "dg-a") + r(182, 98, 56, 8, "dg-b", 3);
    const pan = (x, title, sub, items, cls) => ln(x + 84, 62, x + 84, 78, "dg-l") + r(x, 78, 168, 98, cls, 12) + t(x + 84, 98, title, "dg-t") + t(x + 84, 113, sub, "dg-xs") + tl(x + 84, 134, items, "dg-s", "middle", 15);
    b += pan(0, "Logistikservice", "möglichst hoch", ["Lieferzeit · Lieferqualität", "Lieferflexibilität", "Lieferbereitschaft"], "dg-q1");
    b += pan(252, "Logistikkosten", "möglichst niedrig", ["Bestände · Handling", "Transport", "Systeme"], "dg-q4");
    b += t(W / 2, 198, "Mehr Service kostet mehr – gesucht ist das beste Verhältnis", "dg-s");
    return svg(206, "Zielkonflikt: Logistikservice und Logistikkosten müssen ausbalanciert werden", b);
  };
  const resilienz = () => {
    const cw = 152, ch = 50, x0 = 104, y0 = 32;
    let b = t(x0 + cw / 2, 20, "schlank: 1 Handy", "dg-at") + t(x0 + cw + 8 + cw / 2, 20, "Puffer: 10 Handys", "dg-at");
    const rows = [[["Normalbetrieb"], [["spart Lagerkosten", "dg-sev0"], ["höhere Lagerkosten", "dg-sev1"]]], [["Störung", "(Streik, Kanal)"], [["Regal leer → Kunde weg", "dg-sev3"], ["kann weiter verkaufen", "dg-sev0"]]]];
    rows.forEach(([l, cells], j) => {
      const y = y0 + j * (ch + 8);
      b += t(x0 - 10, y + ch / 2 + 4 - (l.length - 1) * 6, l[0], "dg-tm", "end") + (l[1] ? t(x0 - 10, y + ch / 2 + 17, l[1], "dg-xs", "end") : "");
      cells.forEach(([txt, cls], i) => { const x = x0 + i * (cw + 8); b += r(x, y, cw, ch, cls, 10) + t(x + cw / 2, y + ch / 2 + 4, txt, "dg-tm"); });
    });
    b += t(W / 2, y0 + 2 * (ch + 8) + 14, "Effizienz spart im Alltag – Resilienz rettet in der Krise", "dg-s");
    return svg(y0 + 2 * (ch + 8) + 22, "Effizienz gegen Resilienz: Ein schlanker Bestand spart im Normalbetrieb, ein Puffer schützt bei Störungen", b);
  };
  X["logistik/l-begriff"] = {
    sum: [
      "Logistik sorgt für die **7 R**: richtiges Produkt, Menge, Zeit, Ort, Kosten, Informationen, Qualität.",
      "Kernaufgaben: **Transport = Raum** · **Lagerung = Zeit** · **Umschlag/Kommissionierung = Menge & Anordnung**.",
      "**Logistik** = eigenes Unternehmen + direkte Partner · **SCM** = ganze Kette, unternehmensübergreifend.",
      "Beide koordinieren **drei Flüsse**: Güter, Informationen, Geld.",
      "Zielkonflikte: **Service vs. Kosten** und **Effizienz vs. Resilienz**.",
    ],
    after: {
      "Die 7 R der Logistik – am Ladekabel erklärt": [{
        fig: SB.hub({ center: ["Die", "7 R"], label: "Die sieben R der Logistik am Beispiel Ladekabel", items: [
          { t: "Produkt", s: "USB-C-Kabel" }, { t: "Menge", s: "1 Stück" }, { t: "Zeit", s: "morgen" }, { t: "Ort", s: "deine Adresse" }, { t: "Kosten", s: "Versand günstig" }, { t: "Informationen", s: "Tracking" }, { t: "Qualität", s: "unbeschädigt" }] }),
        t: "Die 7 R auf einen Blick",
        read: "Jeder Kasten ist ein **„richtig“**: das richtige **Produkt** in der richtigen **Menge** zur richtigen **Zeit** am richtigen **Ort** – zu den richtigen **Kosten**, mit den richtigen **Informationen** und in der richtigen **Qualität**. Die kleinen Wörter zeigen das Ladekabel-Beispiel. Merktrick: erst **was & wie viel**, dann **wann & wo**, dann **Kosten, Infos, Qualität**." }],
      "Die drei Kernaufgaben – und was sie „überbrücken“": [{ fig: SB.S.grundfunktionen(), t: "Raum, Zeit, Menge",
        read: "Jedes Feld zeigt eine Kernaufgabe: **Transport** bringt die Ware von Ort A nach Ort B (**Raum**), **Lagern** hebt sie von heute bis später auf (**Zeit**), **Umschlag/Kommissionierung** ändert **Menge und Anordnung** – z. B. eine Palette mit 500 Kabeln wird in Einzelpakete aufgeteilt." }],
      "Der Zielkonflikt: Service vs. Kosten": [{ fig: wippe(), t: "Service und Kosten im Gleichgewicht",
        read: "Links liegt alles, was der Kunde als **Service** spürt, rechts alles, was **Kosten** verursacht. Beides hängt am selben Balken: Wer den Service erhöht (schneller, flexibler, immer lieferbereit), braucht mehr Bestände, Transporte und Systeme → die Kosten steigen. Gute Logistik sucht das **beste Verhältnis**, nicht das Maximum auf einer Seite." }],
      "Effizienz vs. Verfügbarkeit (Resilienz)": [{ fig: resilienz(), t: "Schlank oder robust?",
        read: "Lies die Tabelle **zeilenweise**: Im **Normalbetrieb** gewinnt der schlanke Händler (spart Lagerkosten). Bei einer **Störung** dreht sich das Bild: Sein Regal ist leer und die Kunden gehen zur Konkurrenz, während der Händler mit Puffer weiter verkauft. → **Zu viel Effizienz macht verwundbar.**" }],
      "Entwicklungsstufen der Logistik": [{
        fig: timeline([["1960er", "TUL-Logistik", "Einzelfunktionen"], ["1970/80er", "Koordination", "7 R, Kunde"], ["1990er", "Fließsysteme", "SCM, Pull"], ["2000er", "globale Netze", "AutoID, Daten"], ["heute", "VUCA & BANI", "digital, grün"]], { hl: 4, label: "Entwicklungsstufen der Logistik von 1960 bis heute" }),
        t: "Von TUL bis VUCA",
        read: "Lies den Zeitstrahl von links nach rechts: Erst waren **Transport, Umschlag, Lagerung einzelne Funktionen**. Dann wurden sie **koordiniert** (7 R), später als **Fluss durch das ganze Netzwerk** gedacht (SCM, Pull). Mit **globalen Netzen** kamen AutoID und Daten. Heute arbeitet Logistik in einer **VUCA-/BANI-Welt**." }],
    },
  };

  // ---------- Logistikmarkt
  X["logistik/l-markt"] = {
    sum: [
      "Logistik: **≈ 331 Mrd. €** (2024) · **drittgrößter** Wirtschaftsbereich · ≈ 3,35 Mio. Beschäftigte.",
      "Es heißt **Logistikkosten**, nicht Umsatz: ≈ 50 % erbringen Industrie & Handel **selbst**.",
      "Standort DE: **Kaufkraft · zentrale Lage · globale Lieferketten · Effizienz** (Top 5 im LPI).",
      "**Klausurfrage KEP**: ≈ **27,4 Mrd. €** (davon 26,0 Mrd. € outsourced).",
      "Größtes Segment: **Kontraktlogistik ≈ 80 Mrd. €**.",
    ],
    after: {
      "Woraus die 331 Mrd. € bestehen": [{
        fig: kostenSplit({ head: "≈ 331 Mrd. € Logistikvolumen Deutschland (2024)", share: 0.5,
          a: ["≈ 50 % Eigenleistung", "insourced · kein Umsatz", ["Industrie & Handel", "machen es selbst"]],
          c: ["≈ 50 % vergeben", "outsourced", ["= Umsatz der", "Dienstleister"]],
          label: "331 Milliarden Euro Logistikvolumen: etwa die Hälfte Eigenleistung, die Hälfte Umsatz der Dienstleister" }),
        t: "Warum „Kosten“ und nicht „Umsatz“",
        read: "Der ganze Balken ist das **Logistikvolumen** (≈ 331 Mrd. €). Die **linke Hälfte** erledigen Industrie und Handel **selbst** (eigenes Lager, eigener Materialfluss) – das wird nicht verkauft, also **kein Umsatz**. Nur die **rechte Hälfte** kaufen sie bei Dienstleistern ein: Das ist deren **Umsatz**." }],
      "Warum Deutschland ein Logistikland ist – 4 Gründe": [{
        fig: SB.temple({ roof: "Logistikstandort Deutschland", roofSub: "drittgrößter Wirtschaftsbereich", label: "Vier Gründe für den Logistikstandort Deutschland",
          pillars: [{ t: "Kaufkraft", s: ["85 Mio.", "Einwohner"] }, { t: ["Zentrale", "Lage"], s: ["Transitland,", "Seehäfen"] }, { t: ["Globale", "Lieferketten"], s: ["Exportnation"] }, { t: "Effizienz", s: ["Top 5 im", "Logistics Perf.", "Index"] }],
          base: "4 Säulen – merke: Kaufkraft · Lage · Lieferketten · Effizienz" }),
        t: "Vier Säulen",
        read: "Das Dach (**Logistikstandort Deutschland**) steht auf **vier Säulen**: viele kaufkräftige Menschen (**Kaufkraft**), die **zentrale Lage** in Europa mit Seehäfen, die starke Einbindung in **globale Lieferketten** als Exportnation und die hohe **Effizienz und Zuverlässigkeit** (Top 5 im Logistics Performance Index der Weltbank)." }],
      "Marktsegmente Deutschland (Folie 21, Fraunhofer IIS)": [{
        fig: SB.bars({ label: "Marktsegmente der Logistik in Deutschland nach Volumen in Milliarden Euro", max: 80, lw: 150, room: 96, rh: 27, lc: "dg-tm", items: [
          { l: "Kontraktlogistik", v: 80, txt: "≈ 80 Mrd. €" }, { l: "KMU-Inhouse-Logistik", v: 44, txt: "≈ 44" }, { l: "Ladungsverkehr (FTL)", v: 36, txt: "≈ 36" }, { l: "Luft- & Seefracht", v: 33, txt: "≈ 33" },
          { l: "KEP-Dienste", v: 27.4, txt: "≈ 27,4 Mrd. € ← Klausur!", a: true }, { l: "Spezialequipment", v: 20.1, txt: "≈ 20,1" }, { l: "Massengut (Bulk)", v: 16.5, txt: "≈ 16,5" },
          { l: "Terminal, Lager, VAS", v: 15, txt: "≈ 15" }, { l: "Stückgut-Netze (LTL)", v: 12, txt: "≈ 12" }, { l: "Spezielle Stückgüter", v: 10, txt: "≈ 10" }] }),
        t: "Die Segmente der Größe nach",
        read: "Jeder Balken ist ein **Marktsegment** (Mrd. €). Ganz oben die **Kontraktlogistik** als größtes Segment. Farbig markiert: **KEP-Dienste mit ≈ 27,4 Mrd. €** – laut deiner Notiz eine **Klausurfrage** („Umsatz KEP-Bereich“), davon 26,0 Mrd. € outsourced." }],
    },
  };

  // ---------- Logistiksysteme & Logistikkonzeption
  const systeme = () => {
    let b = t(0, 12, "Beschaffungsmarkt", "dg-xs", "start") + t(W, 12, "Absatzmarkt", "dg-xs", "end") + t(W / 2, 16, "Hersteller", "dg-at");
    b += r(46, 24, 328, 88, "dg-zone", 14);
    b += r(0, 34, 30, 70, "dg-b", 8) + tr(19, 69, "Lieferant", "dg-xs") + ln(32, 67, 51, 67, "dg-lp", "ahp");
    [["Beschaffung", 54], ["Produktion", 162], ["Distribution", 270]].forEach(([n, x], i) => {
      b += r(x, 40, 98, 54, i === 1 ? "dg-a" : "dg-b", 12) + t(x + 49, 64, n, "dg-tm") + t(x + 49, 80, "logistik", "dg-xs");
      if (i < 2) b += ln(x + 99, 67, x + 106, 67, "dg-lp", "ahp");
    });
    b += ln(369, 67, 388, 67, "dg-lp", "ahp") + r(390, 34, 30, 70, "dg-b", 8) + tr(409, 69, "Kunde", "dg-xs");
    b += p("M405,106 L405,136 L230,136 L230,117", "dg-l dg-d", "ah") + t(W / 2, 156, "Entsorgungslogistik (Reverse Logistics)", "dg-at") + t(W / 2, 172, "Rückflüsse: Retouren, Verpackungen, Abfälle, Recycling", "dg-xs");
    return svg(180, "Die vier funktionalen Logistiksysteme eines Herstellers mit dem Rückfluss der Entsorgungslogistik", b);
  };
  const ebenen = () => {
    const ax = 210, top = 8, base = 182, hw = (y) => (y - top) / (base - top) * 150;
    const lv = [[8, 80, "dg-a", "strategisch", "Welche Struktur?", "langfristig", 60], [84, 132, "dg-q1", "taktisch", "Wie nutzen wir die Strukturen?", "mittelfristig", 105], [136, 182, "dg-q2", "operativ", "Was tun wir mit den heutigen Aufträgen?", "kurzfristig", 158]];
    let b = "";
    lv.forEach(([y1, y2, cls, h, sub, hor, ty], i) => {
      const pts = i === 0 ? [[ax, y1], [ax + hw(y2), y2], [ax - hw(y2), y2]] : [[ax - hw(y1), y1], [ax + hw(y1), y1], [ax + hw(y2), y2], [ax - hw(y2), y2]];
      b += p(poly(pts) + " Z", cls) + t(ax, ty, h, "dg-tm") + t(ax, ty + 13, sub, "dg-xs") + t(ax + hw(ty) + 12, ty + 4, hor, "dg-s", "start");
    });
    return svg(188, "Drei Planungsebenen: strategisch, taktisch, operativ", b);
  };
  X["logistik/l-konzeption"] = {
    sum: [
      "Vier Logistiksysteme entlang des Güterflusses: **Beschaffung → Produktion → Distribution → Entsorgung**.",
      "Logistikprozesse verändern das Gut in **Zeit, Raum, Menge, Sorte**, TUL-Eigenschaften und Determiniertheit.",
      "Knoten kosten Geld, bringen aber **Bündelung, Kundennähe, Sortimentsbildung**.",
      "Planungsebenen: **strategisch** (Struktur) · **taktisch** (Nutzung) · **operativ** (heutige Aufträge).",
      "Logistikkonzeption: **System-, Fluss- und Querschnittsdenken** – Gesamtkosten statt Einzelkosten.",
    ],
    after: {
      "Die vier funktionalen Logistiksysteme (Sicht eines Herstellers)": [{ fig: systeme(), t: "Vier Systeme entlang des Güterflusses",
        read: "Folge dem Güterfluss von **links nach rechts**: Die **Beschaffungslogistik** holt das Material vom Lieferanten, die **Produktionslogistik** bewegt es innerhalb der Fertigung, die **Distributionslogistik** bringt die fertige Ware zum Kunden. Die **Entsorgungslogistik** läuft **rückwärts** (gestrichelt): Retouren, Verpackungen, Abfälle." }],
      "Was Logistikprozesse mit dem Gut machen (Gütertransformation)": [{
        fig: SB.hub({ center: "Gut", label: "Sechs Eigenschaften, die Logistikprozesse am Gut verändern", items: [
          { t: "Zeit", s: "Lagern" }, { t: "Raum", s: "Transportieren" }, { t: "Menge", s: "Umschlag: bündeln" }, { t: "Sorte", s: "Umschlag: sortieren" }, { t: "TUL-Eigenschaft", s: "Verpacken, Signieren" }, { t: "Determiniertheit", s: "Auftrag zuordnen" }] }),
        t: "Was ein Prozess am Gut verändert",
        read: "In der Mitte das **Gut**, ringsum die Eigenschaft, die ein Prozess verändert (fett) – und welcher Prozess das tut (klein). Beispiel: **Lagern** ändert die **Zeit**, **Transportieren** den **Raum**, **Verpacken** die **TUL-Eigenschaften** (stapelbar, scannbar), und eine **Auftragsbearbeitung** ordnet die Ware einem konkreten Kunden zu." }],
      "Drei Planungsebenen": [{ fig: ebenen(), t: "Die Planungspyramide",
        read: "Oben wenige, **langfristige** Grundsatzentscheidungen (**strategisch**: Welche Struktur bauen wir? z. B. Lagerstandort). In der Mitte die **taktische** Ebene: Wie nutzen wir die Strukturen? (z. B. Transportmittel, Serviceniveau). Unten viele **kurzfristige**, **operative** Entscheidungen: Was tun wir mit den heutigen Aufträgen? (z. B. Tourenplanung)." }],
      "Die Logistikkonzeption: drei Denkweisen": [{
        fig: SB.hub({ center: ["Logistik-", "konzeption"], cr: 46, bh: 48, label: "Die drei Denkweisen der Logistikkonzeption", items: [
          { t: "Systemdenken", s: "Gesamtkosten zählen" }, { t: "Flussdenken", s: "ohne Wartezeiten" }, { t: ["Querschnitts-", "funktionsdenken"], s: "bereichsübergreifend" }] }),
        t: "Drei Brillen auf die Logistik",
        read: "Die Logistikkonzeption besteht aus **drei Denkweisen**: **Systemdenken** – das Ganze optimieren, nicht die Teile (Gesamtkosten). **Flussdenken** – Güter und Infos sollen ohne Warten durchlaufen. **Querschnittsfunktionsdenken** – Logistik durchzieht Einkauf, Produktion und Vertrieb; Schnittstellen werden gemeinsam gestaltet." }],
      "Gesamtkostendenken: das Ersatzteil-Beispiel": [{
        fig: SB.gantt({ label: "Ersatzteil-Beispiel: Luftfracht ist teurer, spart aber Lagerbestände", tmax: 100, lw: 92, room: 60, rows: [
          { l: ["See + Lager", "in jedem Land"], segs: [[0, 25, "Transport", "dg-b"], [25, 80, "Lager in jedem Land", "dg-q4"]], end: "= 80" },
          { l: ["Luftfracht,", "kaum Lager"], segs: [[0, 45, "Luftfracht (teuer)", "dg-b"], [45, 60, "Lager", "dg-q4"]], end: "= 60 günstiger" }], note: "Beispielzahlen (Kosten)" }),
        t: "Nur die Summe zählt",
        read: "Vergleiche die **Gesamtlänge** der Balken. Oben ist der **Transport billig** (See), aber in jedem Land liegen **teure Bestände**. Unten ist die **Luftfracht teuer**, dafür braucht man kaum Lager, weil jedes Teil in 1–2 Tagen da ist. Einzeln betrachtet verliert die Luftfracht – in der **Summe** gewinnt sie. Das ist **Gesamtkostendenken**." }],
      "Typische Trade-offs (Zielkonflikte)": [{
        fig: SB.conflicts({ label: "Typische Trade-offs in der Logistik", rows: [[["Verpackungs-", "kosten ↓"], ["Transport-", "schäden ↑"]], [["Auftragsab-", "wicklung ↓"], ["Transport-", "kosten ↑"]], [["Lager-", "bestand ↓"], ["Produktions-", "kosten ↑"]], [["Lager-", "bestand ↓"], ["Einkaufs-", "kosten ↑"]]] }),
        t: "Senkst du links, steigt rechts",
        read: "Lies jede Zeile von **links nach rechts**: Senkst du die Kosten links, **steigen** oft die Kosten rechts. Beispiel: Weniger **Lagerbestand** heißt kleinere Lose – die **Produktion** muss öfter umrüsten, und der **Einkauf** bestellt öfter kleine Mengen. Deshalb immer die **Gesamtkosten** betrachten." }],
      "Logistikservice messbar machen": [{
        fig: SB.hub({ center: ["Logistik-", "service"], rx: 140, bw: 132, label: "Vier Bestandteile des Logistikservice mit ihren Kennzahlen", items: [
          { t: "Lieferzeit", s: "Stunden / Tage" }, { t: "Zuverlässigkeit", s: "Lieferbereitschaftsgrad" }, { t: "Lieferqualität", s: "Retourenquote" }, { t: "Flexibilität", s: "schwer messbar" }] }),
        t: "Service in Kennzahlen",
        read: "Der **Logistikservice** setzt sich aus vier Teilen zusammen (fett), darunter steht jeweils, **wie man ihn misst**: Lieferzeit in Stunden/Tagen, Zuverlässigkeit über den **Lieferbereitschaftsgrad** (%), Qualität über die **Retourenquote** (%). Nur die **Flexibilität** ist schwer messbar." }],
    },
  };

  // ---------- Gestaltungsprinzipien
  const kopplung = () => {
    const names = ["Kunde", "Händler", "Großhandel", "Hersteller"], bw = 72, gap = 44, x = (i) => i * (bw + gap);
    let b = t(0, 14, "lose Kopplung – jeder sieht nur die Bestellung davor", "dg-at", "start");
    names.forEach((n, i) => { b += r(x(i), 24, bw, 34, "dg-b", 10) + t(x(i) + bw / 2, 46, n, "dg-tm"); });
    ["+10 %", "+20 %", "+40 %"].forEach((s, i) => { b += ln(x(i) + bw + 2, 47, x(i + 1) - 3, 47, "dg-lb", "ahb") + t(x(i) + bw + gap / 2, 38, s, "dg-bt"); });
    b += t(0, 92, "enge Kopplung – alle sehen die echte Nachfrage", "dg-at", "start") + ln(x(0) + bw / 2, 104, x(3) + bw / 2, 104, "dg-lp");
    names.forEach((n, i) => { b += ln(x(i) + bw / 2, 104, x(i) + bw / 2, i ? 115 : 118, "dg-lp", i ? "ahp" : null) + r(x(i), 118, bw, 34, i ? "dg-b" : "dg-a", 10) + t(x(i) + bw / 2, 140, n, "dg-tm"); });
    ["+10 %", "+10 %", "+10 %"].forEach((s, i) => { b += ln(x(i) + bw + 2, 141, x(i + 1) - 3, 141, "dg-lp", "ahp") + t(x(i) + bw + gap / 2, 132, s, "dg-at"); });
    b += t(W / 2, 174, "Beispiel: Der Kunde kauft 10 % mehr – Pfeile = Bestellungen", "dg-xs");
    return svg(182, "Lose Kopplung schaukelt Bestellungen auf, enge Kopplung gibt allen Stufen die echte Nachfrage", b);
  };
  const ausgleich = () => {
    const pw = 128, gap = 18, U = SB.u;
    const nord = [[0, .5], [.17, .84], [.33, .3], [.5, .8], [.67, .22], [.83, .72], [1, .45]];
    const sued = [[0, .5], [.17, .28], [.33, .62], [.5, .33], [.67, .7], [.83, .38], [1, .55]];
    const sum = nord.map(([x0, y0], i) => [x0, (y0 + sued[i][1]) / 2]);
    let b = U.panel(0, 0, pw, 96, nord, { title: "Lager Nord", sub: "schwankt" }) + U.panel(pw + gap, 0, pw, 96, sued, { title: "Lager Süd", sub: "schwankt anders" }) + U.panel(2 * (pw + gap), 0, pw, 96, sum, { title: "Zentrallager", sub: "gleicht sich aus" });
    b += t(0, 152, "Nötiger Sicherheitsbestand", "dg-at", "start");
    [["2 Regionallager", 160, "80 + 80 = 160 Stück", "dg-bar2", "dg-s"], ["1 Zentrallager", 113, "√(80² + 80²) ≈ 113 (−30 %)", "dg-bar", "dg-at"]].forEach(([l, v, s, cls, tc], i) => {
      const y = 160 + i * 30;
      b += t(112, y + 15, l, "dg-tm", "end") + r(120, y + 2, v, 20, cls, 5) + t(126 + v, y + 17, s, tc, "start");
    });
    return svg(218, "Statistischer Ausgleich: Schwankungen zweier Lager gleichen sich im Zentrallager teilweise aus, der Sicherheitsbestand sinkt", b);
  };
  const fixkosten = () => {
    const P = SB.plot({ x0: 50, y0: 170, w: 330, h: 140, xr: [0, 34], yr: [0, 300] }), { X: x, Y: y } = P;
    let b = P.axes("", "€ je Palette") + P.xt([[1, "1"], [16.5, "halb voll"], [33, "voll (33 Pal.)"]]) + P.yt([[100, "100"], [200, "200"], [300, "300"]]);
    b += p(P.curve((n) => 900 / n, 3, 34), "dg-lp");
    b += ci(x(16.5), y(900 / 16.5), 4.5, "dg-q4") + t(x(16.5) + 8, y(900 / 16.5) - 8, "≈ 55 € je Palette", "dg-at", "start");
    b += ci(x(33), y(900 / 33), 4.5, "dg-a") + t(x(33) + 4, y(900 / 33) - 14, "≈ 27 €", "dg-at", "start");
    b += t(W / 2, P.y0 + 34, "Eine Lkw-Tour kostet ≈ 900 € – egal wie voll (Beispiel)", "dg-s");
    return svg(P.y0 + 42, "Fixkostendegression: Je voller der Lkw, desto günstiger jede einzelne Palette", b);
  };
  const standard = () => {
    let b = t(100, 14, "materiell", "dg-at") + t(320, 14, "immateriell", "dg-at") + ln(210, 24, 210, 158, "dg-l dg-d");
    [[61, 20], [103, 20], [40, 48], [82, 48], [124, 48]].forEach(([x, y]) => { b += r(x, y, 38, 26, "dg-q4", 4); });
    b += r(34, 76, 132, 6, "dg-b", 2) + r(38, 82, 14, 9, "dg-b", 2) + r(93, 82, 14, 9, "dg-b", 2) + r(148, 82, 14, 9, "dg-b", 2) + r(34, 91, 132, 5, "dg-b", 2);
    b += t(100, 116, "Palette · Verpackung · Gleichteile", "dg-xs") + tl(100, 136, ["→ schneller umschlagen,", "automatisierbar"], "dg-s", "middle", 15);
    b += r(246, 26, 148, 70, "dg-b", 8);
    for (let i = 0; i < 24; i++) b += r(258 + i * 5.2, 34, i % 3 ? 2 : 3.2, 36, "dg-bar", 0);
    b += t(320, 88, "NVE", "dg-tm") + r(282, 101, 76, 22, "dg-q1", 11) + t(320, 116, "EDIFACT", "dg-xs");
    b += tl(320, 136, ["→ Daten einheitlich lesbar", "& leicht austauschbar"], "dg-s", "middle", 15);
    return svg(160, "Standardisierung materiell mit Palette, Verpackung und Gleichteilen, immateriell mit NVE und EDIFACT", b);
  };
  X["logistik/l-prinzipien"] = {
    sum: [
      "Fünf Prinzipien (Ihde/Janz): **enge Kopplung · statistischer Ausgleich · Postponement · Bündelung · Standardisierung**.",
      "**Bullwhip**: kleine Schwankung beim Kunden → riesige beim Hersteller · Gegenmittel: echte Nachfragedaten teilen.",
      "**Ausgleich**: √(80² + 80²) ≈ 113 < 160 → Zentrallager braucht ≈ 30 % weniger Sicherheitsbestand.",
      "**Postponement**: Varianten erst **nach** dem Kundenauftrag (OPP) bilden → weniger Bestand.",
      "**Bündelung** senkt die Kosten je Sendung (Fixkostendegression) · **Standardisierung** materiell & immateriell.",
    ],
    after: {
      "Die fünf Gestaltungsprinzipien (Ihde/Janz)": [{
        fig: SB.hub({ center: ["Gestaltungs-", "prinzipien"], cr: 50, label: "Die fünf Gestaltungsprinzipien nach Ihde und Janz", items: [
          { t: "Enge Kopplung", s: "Infos früh teilen" }, { t: "Ausgleich", s: "zusammenfassen" }, { t: "Postponement", s: "Varianten zuletzt" }, { t: "Bündelung", s: "volle Fahrzeuge" }, { t: "Standardisierung", s: "Palette, Daten" }] }),
        t: "Fünf Werkzeuge gegen Unsicherheit und Komplexität",
        read: "In der Mitte das Ziel, ringsum die **fünf Prinzipien** – jeweils mit dem Kern in einem Satz (klein). Merkhilfe von oben im Uhrzeigersinn: **Kopplung – Ausgleich – Postponement – Bündelung – Standardisierung**. Jedes Prinzip bekommt unten im Lernzettel ein eigenes Schaubild." }],
      "Warum schaukelt sich das auf?": [{ fig: kopplung(), t: "Lose und enge Kopplung",
        read: "**Oben (lose Kopplung):** Jede Stufe sieht nur die Bestellung der Stufe davor und legt **sicherheitshalber etwas drauf** – aus +10 % beim Kunden werden +40 % beim Hersteller (rote Pfeile, Beispiel). **Unten (enge Kopplung):** Die **echten Nachfragedaten** gehen über eine gemeinsame Leitung an alle Stufen – jeder plant mit +10 %, der **Bullwhip-Effekt wird gebremst**." }],
      "Statistischer Ausgleich – ganz anschaulich": [{ fig: ausgleich(), t: "Schwankungen gleichen sich aus",
        read: "**Oben:** Die Nachfrage in Nord und Süd schwankt jeweils stark, aber **nicht gleichzeitig**. Fasst man beide im **Zentrallager** zusammen, heben sich die Ausschläge teilweise auf – die Linie wird ruhiger. **Unten:** Deshalb braucht ein Zentrallager statt 160 nur **≈ 113 Stück** Sicherheitsbestand (**≈ 30 % weniger**)." }],
      "Notebook mit Postponement (Pull – reaktiv)": [{
        fig: SB.gantt({ label: "Postponement verschiebt die Variantenbildung hinter den Kundenauftrag", tmax: 100, lw: 92, head: [[0, 60, "spekulativ (Push)", "dg-s"], [60, 100, "reaktiv (Pull)", "dg-at"]], marks: [[60]], rows: [
          { l: ["ohne", "Postponement"], segs: [[0, 30, "Varianten bauen", "dg-v2"], [30, 60, "Varianten lagern", "dg-q3"], [60, 100, "ausliefern", "dg-b"]] },
          { l: ["mit", "Postponement"], segs: [[0, 30, "Basisgerät bauen", "dg-b"], [30, 60, "Basis lagern", "dg-q3"], [60, 82, "Varianten", "dg-v2"], [82, 100, "liefern", "dg-b"]] }],
          note: "gestrichelt = OPP (Kunde bestellt) · orange = Variantenbildung" }),
        t: "Wo die Varianten entstehen",
        read: "Die gestrichelte Linie ist der **OPP** – ab hier ist der **Kundenauftrag** bekannt. Links davon wird **auf Verdacht** produziert (spekulativ, Push), rechts **auf Auftrag** (reaktiv, Pull). **Ohne Postponement** entstehen alle Varianten vorher und liegen auf Lager (orange links). **Mit Postponement** wird nur ein **Basisgerät** gelagert; die Varianten entstehen **nach** der Bestellung → weniger Bestand, keine veralteten Varianten." }],
      "Bündelung: Warum Auslastung alles ist": [{ fig: fixkosten(), t: "Je voller, desto billiger",
        read: "Die Kurve zeigt die **Kosten je Palette**. Weil die Tour fast immer gleich viel kostet (**hoher Fixkostenanteil**), verteilt sich der Betrag auf mehr Paletten, je voller der Lkw ist. **Halb voll** kostet jede Palette ungefähr **doppelt so viel** wie **voll** – das ist die **Fixkostendegression** und der Grund für jede Bündelung." }],
      "Standardisierung auf zwei Ebenen": [{ fig: standard(), t: "Einheitlich – materiell und immateriell",
        read: "**Links** die **materielle** Standardisierung: einheitliche **Ladehilfsmittel** (Europalette), **Verpackungen** und **Teile** → schnelleres Handling und die Voraussetzung für Automatisierung. **Rechts** die **immaterielle**: Informationen sind einheitlich lesbar (**NVE** = Nummer der Versandeinheit auf dem Etikett) und leicht austauschbar (**EDIFACT**); auch Abläufe werden vereinheitlicht." }],
      "PESTEL – das Umfeld der Logistik": [{
        fig: SB.hub({ center: "PESTEL", label: "PESTEL-Analyse für die Logistik", items: [
          { t: "Political", s: "Infrastruktur" }, { t: "Economical", s: "E-Commerce, Brexit" }, { t: "Social", s: "Fahrermangel" }, { t: "Technological", s: "autonomes Fahren" }, { t: "Ecological", s: "CO₂, Klimaziele" }, { t: "Legal", s: "Maut, Mindestlohn" }] }),
        t: "Sechs Umfeld-Faktoren",
        read: "**PESTEL** sortiert das Umfeld in sechs Bereiche – die Anfangsbuchstaben ergeben das Wort: **P**olitical, **E**conomical, **S**ocial, **T**echnological, **E**cological, **L**egal. Zu jedem steht ein Logistik-Beispiel. In der Klausur: zu jedem Buchstaben **ein konkretes Beispiel** nennen können." }],
    },
  };

  // ---------- Lernfragen: Transportkette aus dem Film
  const route = () => {
    const y = 62, nodes = [[14, "Fabrik (VN)", -1, "dg-b"], [86, "Terminal (VN)", 1, "dg-q2"], [266, "Terminal LA", -1, "dg-q2"], [336, "Logistikzentrum", 1, "dg-q2"], [406, "Kunde (USA)", -1, "dg-a"]];
    let b = ln(14, y, 86, y, "dg-l") + ln(86, y, 266, y, "dg-lp") + ln(266, y, 336, y, "dg-l") + ln(336, y, 406, y, "dg-l");
    b += t(50, y - 7, "Lkw/Schiff", "dg-xs") + t(176, y - 7, "Seeschiff · ≈ 30 Tage", "dg-at") + t(301, y - 7, "Lkw", "dg-xs") + t(371, y - 7, "Sprinter", "dg-xs");
    nodes.forEach(([x, s, dir, cls], i) => { b += ci(x, y, 7, cls) + t(i === 0 ? 4 : i === 4 ? 416 : x, dir < 0 ? y - 26 : y + 24, s, "dg-tm", i === 0 ? "start" : i === 4 ? "end" : "middle"); });
    const br = (a, c, s) => p(`M${a},100 L${a},106 L${c},106 L${c},100`, "dg-lp") + t((a + c) / 2, 121, s, "dg-at");
    b += br(14, 84, "Vorlauf") + br(88, 264, "Hauptlauf") + br(268, 406, "Nachlauf");
    b += t(14, 140, "Quelle", "dg-xs", "start") + t(86, 140, "Umschlag", "dg-xs") + t(266, 140, "Umschlag", "dg-xs") + t(406, 140, "Senke", "dg-xs", "end");
    return svg(148, "Transportkette aus dem Film: Fabrik in Vietnam, Seeschiff nach Los Angeles, Logistikzentrum, Zustellung", b);
  };
  X["logistik/l-lernfragen"] = {
    sum: [
      "Kette: Fabrik (VN) → Terminal → **Seeschiff ≈ 30 Tage** → Terminal LA → Logistikzentrum → Zustellung.",
      "Fachbegriffe: **Quelle · Vorlauf · Umschlag · Hauptlauf · Nachlauf · Senke**.",
      "Ladeeinheit wird kleiner: **Container → Palette → Paket → Tüte** → letzte Meile teuer.",
      "Probleme: Krisen, Kanal-Blockaden, Fahrermangel → **Just-in-Time ist nicht krisensicher**.",
      "Leitfrage: Produktion weltweit verteilt → Güter-, Info- und Geldflüsse koordinieren → **SCM**.",
    ],
    after: {
      "Die Transportkette aus dem Film": [{ fig: route(), t: "Die Kette mit Fachbegriffen",
        read: "Oben der Weg der Ware mit den **Verkehrsmitteln** auf jeder Strecke, unten die **Fachbegriffe**: Von der **Quelle** (Fabrik) im **Vorlauf** zum Terminal, **Umschlag**, im **Hauptlauf** per Seeschiff (≈ 30 Tage) nach Los Angeles, wieder **Umschlag**, dann im **Nachlauf** über das Logistikzentrum zur **Senke** (Kunde). Genau so solltest du die Kette in der Klausur beschreiben." }],
      "Wer macht mit?": [{
        fig: SB.chain([{ t: "Hersteller", s: "Samsung (VN)" }, { t: "Reederei", s: "Evergreen, MSC" }, { t: "Terminal", s: "Umschlag im Hafen" }, { t: "Spedition", s: "z. B. CDL" }, { t: "Amazon", s: "Fulfillment, Flex" }, { t: "Paketdienst", s: "UPS, FedEx", a: true }], { per: 3, label: "Die Akteure entlang der Transportkette aus dem Film" }),
        t: "Die Akteure in Reihenfolge",
        read: "Lies die Kästen wie einen Weg – erst die obere Reihe, dann die untere: Der **Hersteller** produziert, die **Reederei** fährt über den Pazifik, der **Terminaldienstleister** schlägt um, die **Spedition** organisiert den Weitertransport, **Amazon** lagert und kommissioniert, der **Paketdienst** stellt zu." }],
    },
  };

  // ======================================================================= BWL
  // ---------- Block 1: Was ist BWL?
  const brille = () => {
    let b = t(60, 14, "Erfahrungsobjekt", "dg-at") + t(200, 14, "Blickwinkel", "dg-at") + t(338, 14, "Erkenntnisobjekt", "dg-at");
    b += r(0, 46, 120, 90, "dg-q2", 12) + t(60, 76, "Betrieb", "dg-t") + t(60, 94, "z. B. Spedition:", "dg-xs") + tl(60, 108, ["Lkw, Lager,", "Mitarbeiter"], "dg-xs", "middle", 12);
    [[48, "BWL", "dg-a", "Wirtschaften", "Touren kostengünstig planen"], [91, "Psychologie", "dg-b", "Verhalten", "Motivation der Fahrer"], [134, "Ingenieure", "dg-b", "Technik", "Motoren, Sortieranlage"]].forEach(([y, lens, cls, a, c]) => {
      b += ln(121, 91, 159, y, "dg-l") + r(160, y - 15, 80, 30, cls, 15) + t(200, y + 5, lens, "dg-tm") + ln(241, y, 254, y, "dg-l", "ah") + r(256, y - 18, 164, 36, cls, 10) + t(338, y - 3, a, "dg-tm") + t(338, y + 11, c, "dg-xs");
    });
    b += t(W / 2, 174, "Ein Betrieb – jede Wissenschaft schaut mit ihrer eigenen Brille", "dg-xs");
    return svg(182, "Erfahrungsobjekt Betrieb und Erkenntnisobjekt: Die BWL betrachtet den Betrieb unter dem Blickwinkel des Wirtschaftens", b);
  };
  const zielscheibe = () => {
    const tg = (cx, dots, h, sub) => ci(cx, 64, 46, "dg-panel") + ci(cx, 64, 30, "dg-q2") + ci(cx, 64, 13, "dg-a") + dots.map(([dx, dy]) => ci(cx + dx, 64 + dy, 4, "dg-barneg")).join("") + t(cx, 130, h, "dg-tm") + t(cx, 145, sub, "dg-xs");
    let b = tg(64, [[-30, -18], [24, -28], [-12, 34], [34, 16], [-38, 10]], "weder noch", "Treffer streuen");
    b += tg(210, [[24, -26], [30, -20], [20, -18], [28, -30], [33, -24]], "reliabel, nicht valide", "immer gleich – aber daneben");
    b += tg(356, [[-3, 2], [4, -4], [2, 5], [-5, -3], [5, 3]], "reliabel und valide", "immer in der Mitte");
    b += t(W / 2, 170, "Mitte = wahrer Wert · Objektivität: Jeder Auswerter liest dasselbe ab", "dg-xs");
    return svg(178, "Reliabilität und Validität als Zielscheibe: streuend, zuverlässig daneben, zuverlässig in der Mitte", b);
  };
  const offenesSystem = () => {
    let b = r(2, 2, W - 4, 176, "dg-zone", 16) + t(14, 20, "Umwelt / Markt", "dg-at", "start");
    [["Kunden", 150], ["Gesetze", 210], ["Wettbewerb", 270]].forEach(([s, x]) => { b += t(x, 38, s, "dg-xs") + ln(x, 43, x, 57, "dg-l", "ah"); });
    b += t(306, 44, "fremdbestimmt", "dg-at", "start");
    b += r(130, 60, 160, 84, "dg-b", 14) + t(210, 78, "Unternehmen", "dg-t");
    const nodes = [[160, 104], [200, 96], [244, 106], [184, 128], [232, 130], [262, 122]], edges = [[0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 5], [4, 5], [1, 3]];
    b += edges.map(([a, c]) => ln(nodes[a][0], nodes[a][1], nodes[c][0], nodes[c][1], "dg-l")).join("") + nodes.map(([x, y]) => ci(x, y, 5, "dg-a")).join("");
    b += ln(24, 104, 126, 104, "dg-lp", "ahp") + t(24, 94, "Güter, Geld, Infos", "dg-xs", "start") + t(75, 122, "offen", "dg-at");
    b += ln(294, 104, 396, 104, "dg-lp", "ahp") + t(396, 94, "Leistungen", "dg-xs", "end") + t(345, 122, "offen", "dg-at") + t(300, 142, "komplex", "dg-at", "start");
    b += t(210, 164, "dynamisch: verändert sich ständig", "dg-at");
    return svg(182, "Das Unternehmen als offenes, fremdbestimmtes, komplexes und dynamisches System in seiner Umwelt", b);
  };
  X["bwl/bwl-b1"] = {
    sum: [
      "Einordnung: Wissenschaften → Realwiss. → Geisteswiss. → Wirtschaftswiss. → **BWL**.",
      "**Erfahrungsobjekt** = der Betrieb (was man sieht) · **Erkenntnisobjekt** = das Wirtschaften (Blickwinkel).",
      "**Induktion**: Beobachtung → Theorie · **Deduktion**: Theorie → Einzelfall.",
      "Gütekriterien: **Objektivität · Reliabilität · Validität**.",
      "Unternehmen = **offen, dynamisch, fremdbestimmt, komplex** – das Gegenteil einer Armbanduhr.",
    ],
    after: {
      "Erfahrungsobjekt vs. Erkenntnisobjekt": [{ fig: brille(), t: "Ein Objekt, viele Brillen",
        read: "Links das **Erfahrungsobjekt**: der Betrieb, den man sehen und erleben kann. Jede Wissenschaft schaut mit ihrer **eigenen Brille** darauf (Mitte) und interessiert sich für etwas anderes (rechts). Die Brille der **BWL** ist das **Wirtschaften** – das ist ihr **Erkenntnisobjekt**: z. B. wie die Spedition ihre Touren möglichst wirtschaftlich plant." }],
      "Die drei Gütekriterien der Forschung": [{ fig: zielscheibe(), t: "Reliabilität und Validität als Zielscheibe",
        read: "Stell dir jede Messung als **Schuss auf eine Zielscheibe** vor; die Mitte ist der wahre Wert. **Links** streuen die Treffer: weder zuverlässig noch gültig. **Mitte**: immer an derselben Stelle, aber daneben → **reliabel, aber nicht valide** (misst zuverlässig das Falsche). **Rechts**: immer in der Mitte → **reliabel und valide**. **Objektivität** heißt: Jeder Auswerter liest dieselben Treffer ab." }],
      "Die Ansätze der BWL – wer steht wofür?": [{
        fig: SB.chain([{ t: "Produktivität", s: "Gutenberg" }, { t: "Entscheidung", s: "Heinen" }, { t: "System", s: "Ulrich" }, { t: "Verhalten", s: "echter Mensch" }, { t: "Umwelt", s: "Stakeholder & Öko" }, { t: "Institutionen", s: "Transaktionskosten" }], { per: 3, accent: [0, 1, 2], label: "Ansätze der BWL mit ihren Vertretern" }),
        t: "Der Blick wird immer breiter",
        read: "Jeder Kasten ist ein **Ansatz** (fett) mit seinem Vertreter oder Kerngedanken (klein). Merkhilfe für die Reihenfolge: Der Blick wird **immer breiter** – vom **Faktoreinsatz** (Gutenberg) über **Entscheidungen** (Heinen) zum ganzen **System** (Ulrich), dann zum **echten Menschen**, zur **Umwelt** und zu den **Institutionen**. Die drei mit Namen (farbig) solltest du sicher zuordnen können." }],
      "Systemeigenschaften: Armbanduhr vs. Unternehmen": [{ fig: offenesSystem(), t: "Das Unternehmen als System",
        read: "Das **Unternehmen** steht mitten in seiner **Umwelt** (gestrichelt). Es nimmt Güter, Geld und Infos auf und gibt Leistungen ab → **offen**. Kunden, Gesetze und Wettbewerb wirken von außen ein → **fremdbestimmt**. Innen sind viele Elemente vernetzt → **komplex**. Und alles ändert sich laufend → **dynamisch**." }],
    },
  };

  // ---------- Block 2: Leistungserstellung
  const faktoren = () => {
    let b = t(59, 30, "Elementarfaktoren", "dg-at");
    [["Arbeit", "Fahrer, Sortierer"], ["Betriebsmittel", "Lkw, Software"], ["Werkstoffe", "Diesel, Karton"]].forEach(([a, c], i) => {
      const y = 40 + i * 44;
      b += r(0, y, 118, 36, "dg-b", 9) + t(59, y + 16, a, "dg-tm") + t(59, y + 29, c, "dg-xs") + p(`M120,${y + 18} C142,${y + 18} 146,104 166,104`, "dg-l", "ah");
    });
    b += r(120, 2, 180, 40, "dg-q4", 10) + t(210, 19, "Dispositiver Faktor", "dg-tm") + t(210, 33, "plant, organisiert, kontrolliert", "dg-xs") + ln(210, 44, 210, 76, "dg-lp", "ahp");
    b += r(168, 78, 100, 52, "dg-a", 12) + t(218, 101, "Kombination", "dg-tm") + t(218, 116, "der Faktoren", "dg-xs");
    b += ln(270, 104, 296, 104, "dg-lp", "ahp") + r(298, 82, 122, 44, "dg-q1", 12) + t(359, 101, "Leistung", "dg-t") + t(359, 116, "Paket zugestellt", "dg-xs");
    return svg(170, "Produktionsfaktoren nach Gutenberg: Der dispositive Faktor kombiniert die Elementarfaktoren zur Leistung", b);
  };
  const trichter = () => {
    const lv = [[8, 54, 10, 230, 30, 210, "dg-q3", "Bedürfnis", "Mangel – unkonkret", ["„Ich habe Hunger.“"]], [58, 104, 34, 206, 54, 186, "dg-q1", "Bedarf", "konkret in Art & Menge", ["„Ich will eine", "Pizza essen.“"]], [108, 154, 58, 182, 78, 162, "dg-a", "Nachfrage", "am Markt gekauft", ["„Ich kaufe eine Pizza", "Salami bei Pizza Hut.“"]]];
    let b = "";
    lv.forEach(([y1, y2, a1, a2, b1, b2, cls, h, sub, q]) => {
      b += p(`M${a1},${y1} L${a2},${y1} L${b2},${y2} L${b1},${y2} Z`, cls) + t(120, (y1 + y2) / 2 - 1, h, "dg-tm") + t(120, (y1 + y2) / 2 + 13, sub, "dg-xs");
      b += tl(248, (y1 + y2) / 2 + 4 - (q.length - 1) * 6.5, q, "dg-s", "start", 13);
    });
    return svg(160, "Vom Bedürfnis über den Bedarf zur Nachfrage am Pizza-Beispiel", b);
  };
  const prinzip = () => {
    let b = t(174, 14, "Input (Aufwand)", "dg-at") + t(342, 14, "Output (Ertrag)", "dg-at");
    [["Maximal-", ["gegeben", "5.000 € Dieselbudget", "dg-q3"], ["maximieren ↑", "möglichst viel Leistung", "dg-a"]],
      ["Minimal-", ["minimieren ↓", "wenig Eigenkapital", "dg-a"], ["gegeben", "200.000 € Gewinn", "dg-q3"]],
      ["Extremum-", ["variabel", "wenig Diesel …", "dg-q1"], ["variabel", "… weit fahren", "dg-q1"]]].forEach(([l, i, o], j) => {
      const y = 24 + j * 52;
      b += t(96, y + 18, l, "dg-tm", "end") + t(96, y + 31, "prinzip", "dg-tm", "end");
      b += r(104, y, 140, 42, i[2], 10) + t(174, y + 18, i[0], "dg-tm") + t(174, y + 33, i[1], "dg-xs") + ln(246, y + 21, 268, y + 21, "dg-lp", "ahp");
      b += r(272, y, 140, 42, o[2], 10) + t(342, y + 18, o[0], "dg-tm") + t(342, y + 33, o[1], "dg-xs");
    });
    b += t(W / 2, 188, "Extremum: das beste Verhältnis von Output zu Input suchen", "dg-s");
    return svg(196, "Das ökonomische Prinzip: Maximal-, Minimal- und Extremumprinzip mit Beispielen", b);
  };
  const leistungsprozess = () => {
    const xs = [0, 145, 290], bw = 130, top = [["Beschaffung", "Faktoren besorgen"], ["Produktion", "Faktoren kombinieren"], ["Absatz", "verkaufen"]], bot = [["Finanzierung", "Mittelherkunft"], ["Investition", "Mittelverwendung"], ["Rückfluss", "Geld über den Absatz"]];
    let b = t(0, 12, "güterwirtschaftlich: Güter fließen →", "dg-at", "start");
    top.forEach(([a, c], i) => { b += r(xs[i], 20, bw, 42, i === 1 ? "dg-a" : "dg-b", 10) + t(xs[i] + bw / 2, 38, a, "dg-tm") + t(xs[i] + bw / 2, 53, c, "dg-xs") + (i < 2 ? ln(xs[i] + bw + 1, 41, xs[i + 1] - 3, 41, "dg-lp", "ahp") : ""); });
    bot.forEach(([a, c], i) => { b += r(xs[i], 106, bw, 42, i === 2 ? "dg-q1" : "dg-b", 10) + t(xs[i] + bw / 2, 124, a, "dg-tm") + t(xs[i] + bw / 2, 139, c, "dg-xs") + (i < 2 ? ln(xs[i] + bw + 1, 127, xs[i + 1] - 3, 127, "dg-lp", "ahp") : ""); });
    b += ln(355, 64, 355, 104, "dg-l dg-d", "ah") + t(362, 88, "Erlöse", "dg-xs", "start");
    b += ln(196, 104, 92, 64, "dg-l dg-d", "ah") + t(160, 80, "kauft Faktoren", "dg-xs", "start");
    b += p("M355,149 L355,158 L65,158 L65,150", "dg-lp dg-d", "ahp") + t(W / 2, 176, "finanzwirtschaftlich: Das Geld fließt im Kreis", "dg-at");
    return svg(182, "Der Leistungsprozess güterwirtschaftlich und finanzwirtschaftlich", b);
  };
  const kennzahlen = () => {
    let b = "";
    [["Produktivität", "Output (Menge)", "Input (Menge)", "mengenmäßig", "z. B. Touren je Stunde"], ["Wirtschaftlichkeit", "Ertrag (€)", "Aufwand (€)", "wertmäßig", "> 1 = wirtschaftlich"], ["Rentabilität", "Gewinn", "Kapital", "in % (× 100)", "Verzinsung des Kapitals"]].forEach(([h, n, d, k, ex], i) => {
      const x = i * 144, cx = x + 66;
      b += r(x, 0, 132, 150, i === 1 ? "dg-q1" : "dg-panel", 12) + t(cx, 24, h, "dg-tm") + t(cx, 56, n, "dg-tm") + ln(x + 18, 64, x + 114, 64, "dg-lp") + t(cx, 82, d, "dg-tm") + t(cx, 112, k, "dg-at") + t(cx, 130, ex, "dg-xs");
    });
    return svg(154, "Produktivität, Wirtschaftlichkeit und Rentabilität als Brüche", b);
  };
  const wskala = () => {
    const x = (v) => 20 + (v - 0.4) / 1.9 * 380;
    let b = t(x(1), 22, "= 1: Kosten gedeckt", "dg-at") + t((x(0.4) + x(1)) / 2, 37, "< 1: Verlust", "dg-tm") + t((x(1) + x(2.3)) / 2, 37, "> 1: wirtschaftlich", "dg-tm");
    b += r(x(0.4), 44, x(1) - x(0.4), 26, "dg-sev3", 6) + r(x(1), 44, x(2.3) - x(1), 26, "dg-sev0", 6) + ln(x(1), 28, x(1), 76, "dg-lp");
    b += ci(x(1.35), 57, 6, "dg-a") + ci(x(1.6), 57, 6, "dg-q4") + ci(x(2.2), 57, 6, "dg-q4");
    b += t(x(1.35), 90, "Ist ≈ 1,35", "dg-at") + t(x(1.6), 106, "Ziel 1,6", "dg-s") + t(x(2.2), 90, "Ziel 2,2", "dg-s");
    b += t(W / 2, 128, "Teil 4: Ziel 2,2 → Preis 162,80 € je Tour (+62,8 %)", "dg-xs") + t(W / 2, 143, "Teil 5: Ziel 1,6 → Lohn nur noch 18,50 €/Std. (−38 %)", "dg-xs");
    return svg(150, "Wirtschaftlichkeit auf einer Skala: Flittiflotti liegt bei 1,35, die Ziele 1,6 und 2,2 sind unrealistisch", b);
  };
  X["bwl/bwl-b2"] = {
    sum: [
      "Gutenberg: **Elementarfaktoren** (Arbeit, Betriebsmittel, Werkstoffe) + **dispositiver Faktor** (Leitung).",
      "**Bedürfnis** (Mangel) → **Bedarf** (konkret) → **Nachfrage** (am Markt gekauft).",
      "Ökonomisches Prinzip: **Maximal** (Input fest) · **Minimal** (Output fest) · **Extremum** (bestes Verhältnis).",
      "**Produktivität** = Menge ÷ Menge · **Wirtschaftlichkeit** = Ertrag ÷ Aufwand (> 1 gut) · **Rentabilität** = Gewinn ÷ Kapital × 100.",
      "Flittiflotti: 1.000 € ÷ 740 € ≈ **1,35** → wirtschaftlich · Rechenteile immer **bewerten**.",
    ],
    after: {
      "Produktionsfaktoren nach Gutenberg (1951)": [{ fig: faktoren(), t: "Wie die Faktoren zusammenwirken",
        read: "Links die drei **Elementarfaktoren** am Paket-Beispiel: **ausführende Arbeit** (Fahrer), **Betriebsmittel** (Lkw, Software) und **Werkstoffe** (Diesel, Karton). Von oben steuert der **dispositive Faktor** – die Leitung plant, organisiert und kontrolliert. Erst durch diese **Kombination** entsteht die **Leistung**: das zugestellte Paket." }],
      "Vom Bedürfnis zur Nachfrage (Pizza-Beispiel)": [{ fig: trichter(), t: "Vom Mangel zum Kauf",
        read: "Der Trichter wird von oben nach unten **enger und konkreter**: Das **Bedürfnis** ist ein unbestimmter Mangel („Hunger“). Wird es konkret in Art und Menge, ist es **Bedarf** („Pizza“). Erst wenn tatsächlich **am Markt gekauft** wird, ist es **Nachfrage** („Pizza Salami bei Pizza Hut“)." }],
      "Das ökonomische Prinzip – drei Varianten": [{ fig: prinzip(), t: "Was ist fest, was wird optimiert?",
        read: "Lies jede Zeile von links (**Input**) nach rechts (**Output**). Grau = **fest vorgegeben**, farbig = **wird optimiert**. **Maximalprinzip**: Input fest (5.000 € Diesel), Output maximieren. **Minimalprinzip**: Output fest (200.000 € Gewinn), Input minimieren. **Extremumprinzip**: beides frei → gesucht ist das **beste Verhältnis**." }],
      "… und finanzwirtschaftlich": [{ fig: leistungsprozess(), t: "Güterstrom und Geldkreislauf",
        read: "**Oben** fließen die **Güter**: beschaffen → produzieren → absetzen. **Unten** fließt das **Geld**: Es wird beschafft (**Finanzierung**), für Produktionsfaktoren ausgegeben (**Investition**, gestrichelter Pfeil nach oben) und kommt über die **Erlöse** aus dem Absatz zurück (**Rückfluss**) – dann beginnt der Kreislauf von vorn." }],
      "Drei Kennzahlen – drei Fragen": [{ fig: kennzahlen(), t: "Drei Brüche, drei Fragen",
        read: "Jede Kennzahl ist ein **Bruch**: **Produktivität** teilt Mengen durch Mengen (z. B. Touren je Stunde) – **mengenmäßig**. **Wirtschaftlichkeit** teilt Werte durch Werte (Erlöse durch Kosten) – **wertmäßig**, ab **1** wirtschaftlich. **Rentabilität** teilt den Gewinn durch das Kapital und wird in **%** angegeben." }],
      "Flittiflotti GmbH – die Lösung auf einen Blick": [{ fig: wskala(), t: "Wirtschaftlichkeit einordnen",
        read: "Die Skala hat ihre Grenze bei **1**: links Verlust, rechts wirtschaftlich. **Flittiflotti** liegt mit 1.000 € ÷ 740 € bei **≈ 1,35**. Die Ziele aus Teil 4 und 5 (**2,2** und **1,6**) gehen nur mit **viel höheren Preisen** oder **viel niedrigeren Löhnen** – beides ist unrealistisch. Genau diese **Bewertung** gehört in die Klausurantwort." }],
    },
  };

  // ---------- Marketing 1
  const marktwaage = () => {
    const bal = (cx, tilt, head, eng, mk) => {
      const yl = 60 + tilt, yr = 60 - tilt;
      let b = t(cx, 14, head, "dg-at") + ln(cx - 70, yl, cx + 70, yr, "dg-lp") + p(`M${cx},60 L${cx - 12},92 L${cx + 12},92 Z`, "dg-a");
      b += ln(cx - 60, yl, cx - 60, yl + 12, "dg-l") + r(cx - 96, yl + 12, 72, 30, tilt > 0 ? "dg-q4" : "dg-b", 8) + t(cx - 60, yl + 31, "Nachfrage", "dg-xs");
      b += ln(cx + 60, yr, cx + 60, yr + 12, "dg-l") + r(cx + 24, yr + 12, 72, 30, tilt < 0 ? "dg-q4" : "dg-b", 8) + t(cx + 60, yr + 31, "Angebot", "dg-xs");
      return b + t(cx, 132, eng, "dg-tm") + t(cx, 147, mk, "dg-xs");
    };
    const b = bal(105, 12, "früher: Verkäufermarkt", "Engpass: Produktion", "Marketing = Absatz organisieren") + bal(315, -12, "heute: Käufermarkt", "Engpass: Kunde", "Marketing = Führungsfunktion") + ln(210, 24, 210, 150, "dg-l dg-d");
    return svg(154, "Vom Verkäufermarkt mit Nachfrageüberhang zum Käufermarkt mit Angebotsüberhang", b);
  };
  const zwiebel = () => {
    const cx = 100, cy = 98, rings = [[94, "dg-q3"], [70, "dg-q2"], [46, "dg-q1"], [22, "dg-a"]];
    let b = rings.map(([rr, cls]) => ci(cx, cy, rr, cls)).join("") + t(cx, cy + 5, "1", "dg-tm") + t(cx, cy - 30, "2", "dg-tm") + t(cx, cy - 54, "3", "dg-tm") + t(cx, cy - 78, "4", "dg-tm");
    [["psychische Faktoren", "Motive, Involvement, Lernen", "dg-a"], ["persönliche Faktoren", "Alter, Lebensphase, Beruf", "dg-q1"], ["direktes Umfeld", "Familie, Freunde, Rollen", "dg-q2"], ["weiteres soziales Umfeld", "Kultur, Schicht, Subkulturen", "dg-q3"]].forEach(([h, ex, cls], i) => {
      const y = 34 + i * 42;
      b += ci(236, y - 4, 9, cls) + t(236, y, String(i + 1), "dg-xs") + t(252, y, h, "dg-tm", "start") + t(252, y + 14, ex, "dg-xs", "start");
    });
    return svg(196, "Einflussfaktoren auf das Kaufverhalten in vier Ebenen von psychisch bis weiteres soziales Umfeld", b);
  };
  const werbeeffekte = () => {
    let b = t(105, 14, "Vampireffekt", "dg-at") + t(315, 14, "Bumerangeffekt", "dg-at") + ln(210, 24, 210, 150, "dg-l dg-d");
    b += ci(70, 80, 40, "dg-q4") + tl(70, 77, ["starker", "Reiz"], "dg-tm", "middle", 14) + ci(170, 80, 20, "dg-b dg-dd") + t(170, 84, "Marke", "dg-xs");
    b += p("M150,72 C136,60 126,60 113,66", "dg-l", "ah") + t(150, 50, "Aufmerksamkeit", "dg-xs");
    b += tl(105, 138, ["Werbung wird erinnert –", "die Marke nicht"], "dg-xs", "middle", 13);
    b += r(230, 62, 76, 36, "dg-b", 10) + t(268, 84, "Werbung", "dg-tm") + r(352, 62, 66, 36, "dg-q4", 10) + t(385, 84, "Kunde", "dg-tm");
    b += p("M300,60 C318,30 346,30 362,58", "dg-lp", "ahp") + t(331, 30, "Botschaft", "dg-xs");
    b += p("M372,100 C352,132 300,132 278,102", "dg-lb", "ahb") + t(324, 146, "Ablehnung kommt zurück", "dg-bt");
    return svg(154, "Vampireffekt: Ein starker Reiz saugt die Aufmerksamkeit von der Marke ab. Bumerangeffekt: Die Werbung bewirkt Ablehnung", b);
  };
  X["bwl/mkt-1"] = {
    sum: [
      "Marketing = **Denkhaltung**: alles konsequent vom Kunden her denken (Bruhn).",
      "**4P**: Product · Price · Place · Promotion.",
      "**Verkäufermarkt** (Nachfrage > Angebot) → **Käufermarkt** (Angebot > Nachfrage) → Marketing wird Führungsfunktion.",
      "**S-O-R**: Reiz → Organismus (Mensch verarbeitet) → Reaktion – erklärt das **Warum**.",
      "Kaufverhalten: **Involvement** × **Markenunterschiede** → komplex, dissonanzreduzierend, Variety Seeking, habitualisiert.",
    ],
    after: {
      "Die 4P des Marketing-Mix": [{
        fig: SB.hub({ center: ["Marketing-", "Mix"], cr: 44, rx: 140, bw: 130, label: "Die 4P des Marketing-Mix", items: [
          { t: "Product", s: "Qualität, Marke" }, { t: "Price", s: "Preis, Rabatte" }, { t: "Place", s: "Kanäle, Logistik" }, { t: "Promotion", s: "Werbung, Social Media" }] }),
        t: "Die 4P",
        read: "Der **Marketing-Mix** hat vier Stellschrauben – alle beginnen mit **P**: **Product** (was biete ich an?), **Price** (zu welchem Preis?), **Place** (über welche Kanäle und wie kommt es zum Kunden? – hier steckt die **Logistik**), **Promotion** (wie mache ich es bekannt?)." }],
      "Verkäufermarkt (früher) → Käufermarkt (heute)": [{ fig: marktwaage(), t: "Wer ist der Engpass?",
        read: "Die schwerere Seite sinkt nach unten. **Früher** gab es mehr **Nachfrage** als Angebot (links schwerer): Engpass war die **Produktion**, Marketing musste nur den Absatz organisieren. **Heute** gibt es mehr **Angebot** als Nachfrage (rechts schwerer): Engpass ist der **Kunde** – Marketing wird zur **Führungsfunktion**." }],
      "Kaufverhalten: sechs Fragen": [{ fig: zwiebel(), t: "Die Einflussfaktoren als Zwiebel",
        read: "Lies die Zwiebel **von innen nach außen**: Im Kern wirken die **psychischen** Faktoren (Motive, Einstellungen, Involvement), darum die **persönlichen** (Alter, Lebensphase, Beruf), dann das **direkte Umfeld** (Familie, Freunde) und ganz außen das **weitere soziale Umfeld** (Kultur, Schicht). Die Fragen „wann, was, wie viel, wo, wie“ beantworten eigene Daten – das **Warum** nur Modelle wie S-O-R." }],
      "Wenn Werbung nach hinten losgeht": [{ fig: werbeeffekte(), t: "Vampir und Bumerang",
        read: "**Links (Vampireffekt):** Ein **starker Reiz** (Promi, Erotik, Angst) zieht die Aufmerksamkeit ab – die Werbung bleibt im Kopf, die **Marke nicht** (gestrichelt). **Rechts (Bumerangeffekt):** Die Botschaft fliegt zum Kunden und kommt als **Ablehnung zurück** – die Werbung bewirkt das Gegenteil, z. B. weil sie nicht zur Realität passt." }],
      "B2B: Warum Unternehmen anders kaufen": [{
        fig: SB.hub({ center: ["Buying", "Center"], cr: 42, bh: 48, label: "Das Buying Center im B2B: Nutzer, Einkäufer und Budgetverantwortliche entscheiden gemeinsam", items: [
          { t: "Nutzer", s: "arbeitet damit" }, { t: "Einkäufer", s: "verhandelt" }, { t: ["Budget-", "verantwortliche"], s: "gibt Geld frei" }] }),
        t: "Im B2B entscheidet eine Gruppe",
        read: "Im **B2B** kauft nicht eine einzelne Person, sondern ein **Buying Center**: Der **Nutzer** arbeitet später damit, der **Einkäufer** verhandelt, der **Budgetverantwortliche** gibt das Geld frei. Sie entscheiden **gemeinsam** (Kollektiventscheidung) – deshalb ist B2B-Kauf formaler und langsamer als ein Privatkauf." }],
    },
  };

  // ---------- Marketing 2
  const methoden = () => {
    let b = `<path d="M34,18 h72 a10,10 0 0 1 10,10 v34 a10,10 0 0 1 -10,10 h-40 l-14,14 v-14 h-18 a10,10 0 0 1 -10,-10 v-34 a10,10 0 0 1 10,-10 z" class="dg-q1"/>` + t(70, 50, "Warum?", "dg-t");
    b += `<ellipse cx="210" cy="50" rx="48" ry="25" class="dg-q1"/>` + ci(210, 50, 15, "dg-a") + ci(210, 50, 5, "dg-bar");
    b += r(300, 22, 30, 26, "dg-a", 6) + t(315, 40, "A", "dg-tm") + r(300, 56, 30, 26, "dg-b", 6) + t(315, 74, "B", "dg-tm") + r(340, 25, 70, 20, "dg-bar", 5) + r(340, 59, 40, 20, "dg-bar2", 5);
    [[70, "Befragung", "was Menschen sagen", "Gründe oft unbewusst"], [210, "Beobachtung", "was Menschen tun", "zeigt nicht das Warum"], [355, "Experiment", "Ursache → Wirkung", "aufwendig, künstlich"]].forEach(([x, h, a, c]) => {
      b += t(x, 112, h, "dg-t") + t(x, 128, a, "dg-s") + t(x, 146, c, "dg-bt");
    });
    return svg(154, "Drei Methoden der Primärforschung: Befragung, Beobachtung und Experiment mit ihren Schwächen", b);
  };
  const abtest = () => {
    let b = r(110, 4, 200, 32, "dg-q2", 10) + t(210, 25, "Besucher – zufällig aufgeteilt", "dg-tm");
    b += p("M170,38 C170,48 110,46 110,54", "dg-lp", "ahp") + p("M250,38 C250,48 310,46 310,54", "dg-lp", "ahp");
    b += r(30, 56, 160, 40, "dg-a", 10) + t(110, 73, "Variante A", "dg-tm") + t(110, 88, "„Lieferung morgen“", "dg-xs");
    b += r(230, 56, 160, 40, "dg-b", 10) + t(310, 73, "Variante B", "dg-tm") + t(310, 88, "„Lieferung in 2–3 Tagen“", "dg-xs");
    b += ln(40, 160, 380, 160, "dg-l") + r(85, 110, 50, 50, "dg-bar", 5) + r(285, 130, 50, 30, "dg-bar2", 5);
    b += t(110, 176, "mehr Käufe?", "dg-at") + t(310, 176, "weniger Käufe?", "dg-s");
    b += t(W / 2, 198, "einziger Unterschied = Lieferzeit → Ursache gefunden (Kausalität)", "dg-xs");
    return svg(206, "A/B-Test: Besucher werden zufällig auf zwei Varianten verteilt, der Unterschied in den Käufen zeigt die Wirkung", b);
  };
  const zielformel = () => {
    const items = [["Zielinhalt", "Was?", "Umsatz Eiscreme"], ["Ausmaß", "Wie viel?", "+ 15 %"], ["Zeitbezug", "Bis wann?", "bis Ende 2027"], ["Ziel", "operational", "prüfbar!"]], ops = ["+", "+", "="], bw = 92, gap = 17.33;
    let b = "";
    items.forEach(([a, q, ex], i) => {
      const x = i * (bw + gap);
      b += r(x, 4, bw, 66, i === 3 ? "dg-a" : "dg-b", 12) + t(x + bw / 2, 24, a, "dg-tm") + t(x + bw / 2, 41, q, "dg-at") + t(x + bw / 2, 58, ex, "dg-xs");
      if (i < 3) b += t(x + bw + gap / 2, 44, ops[i], "dg-t");
    });
    return svg(76, "Ein operationales Ziel besteht aus Zielinhalt, Ausmaß und Zeitbezug", b);
  };
  const segmente = () => {
    const cls = ["dg-v1", "dg-v2", "dg-v3"];
    const mix = [[62, 50, 0], [96, 40, 1], [122, 62, 2], [52, 84, 2], [86, 74, 0], [118, 96, 1], [64, 118, 1], [96, 108, 2], [128, 128, 0], [74, 146, 0], [108, 144, 2], [42, 112, 0], [140, 92, 2], [90, 128, 1], [58, 66, 1], [112, 120, 0]];
    let b = ci(90, 94, 70, "dg-panel") + mix.map(([x, y, k]) => ci(x, y, 7, cls[k])).join("") + t(90, 182, "heterogener Gesamtmarkt", "dg-s");
    b += ln(170, 94, 206, 94, "dg-lp", "ahp") + t(188, 84, "teilen", "dg-xs");
    [[262, 52, 0, "Segment A", 10], [370, 52, 1, "Segment B", 10], [316, 134, 2, "Segment C", 186]].forEach(([x, y, k, n, ly]) => {
      b += ci(x, y, 36, "dg-panel") + [[-12, -10], [10, -12], [0, 4], [-14, 12], [13, 10]].map(([dx, dy]) => ci(x + dx, y + dy, 7, cls[k])).join("") + t(x, ly, n, "dg-tm");
    });
    b += t(W - 2, 202, "in sich gleich – untereinander verschieden", "dg-xs", "end");
    return svg(208, "Marktsegmentierung: Ein gemischter Gesamtmarkt wird in in sich homogene Segmente geteilt", b);
  };
  X["bwl/mkt-2"] = {
    sum: [
      "Marktforschung: **Problem definieren** → Infos gewinnen → verarbeiten → kommunizieren.",
      "**Sekundär** = vorhandene Daten (günstig) · **Primär** = neue Daten (passgenau, teuer).",
      "Primär: **Befragung** (sagen) · **Beobachtung** (tun) · **Experiment** (Ursache → Wirkung, A/B-Test).",
      "**Marktanteil** = Absatz ÷ Marktvolumen × 100 · **relativer MA** = eigener ÷ stärkster Konkurrent (> 1 = Marktführer).",
      "Gutes Ziel = **Inhalt + Ausmaß + Zeit** · Segmente: **in sich homogen, untereinander heterogen**.",
    ],
    after: {
      "Drei Methoden der Primärforschung": [{ fig: methoden(), t: "Sagen, tun, testen",
        read: "Jede Methode zeigt etwas anderes: Die **Befragung** zeigt, was Menschen **sagen** (Gründe, Absichten), die **Beobachtung**, was sie **tun**, das **Experiment** die **Wirkung** einer gezielt veränderten Größe (A gegen B). Rot steht jeweils die **Schwäche** – genau die wird in der Klausur gern abgefragt." }],
      "Der A/B-Test – ein echtes Experiment": [{ fig: abtest(), t: "So funktioniert der A/B-Test",
        read: "Die Besucher werden **zufällig** in zwei Gruppen geteilt. Gruppe A sieht „Lieferung morgen“, Gruppe B „Lieferung in 2–3 Tagen“ – sonst ist alles gleich. Kauft A mehr, kann das **nur an der Lieferzeit** liegen → **Kausalität** statt bloßer Korrelation." }],
      "Den relevanten Markt abgrenzen": [{
        fig: SB.hub({ center: ["relevanter", "Markt"], cr: 44, label: "Den relevanten Markt sachlich, räumlich und zeitlich abgrenzen", items: [
          { t: "sachlich", s: "welche Produkte?" }, { t: "räumlich", s: "regional – global?" }, { t: "zeitlich", s: "z. B. saisonal?" }] }),
        t: "Drei Fragen zur Abgrenzung",
        read: "Den **relevanten Markt** grenzt man in drei Richtungen ab: **sachlich** (welche Produkte gehören dazu?), **räumlich** (regional, national, global?) und **zeitlich** (z. B. saisonal?). Häufigster Fehler: zu eng am **eigenen Produkt** statt am **Kundenbedürfnis** abgrenzen." }],
      "Marktanteil berechnen": [{
        fig: SB.gantt({ label: "Marktanteil: Der Markt wächst, der eigene Absatz bleibt gleich", tmax: 78, lw: 92, room: 52, rows: [
          { l: ["heute:", "Markt 60 Mio."], segs: [[0, 4.2, "", "dg-bar"], [4.2, 60, "Konkurrenz", "dg-q3"]], end: "7 %" },
          { l: ["Markt wächst:", "78 Mio."], segs: [[0, 4.2, "", "dg-bar"], [4.2, 78, "Konkurrenz", "dg-q3"]], end: "5,4 %" },
          { l: ["Ziel: 7 %", "halten"], segs: [[0, 5.46, "", "dg-bar"], [5.46, 78, "Konkurrenz", "dg-q3"]], end: "7 %" }], note: "farbig = eigener Absatz (4,2 bzw. ≈ 5,5 Mio. Sendungen)" }),
        t: "Der Markt wächst an dir vorbei",
        read: "Der farbige Teil ist **dein Absatz**, der graue der Rest des Marktes. **Oben:** 4,2 von 60 Mio. = **7 %**. **Mitte:** Der Markt wächst auf 78 Mio., du bleibst bei 4,2 Mio. → nur noch **≈ 5,4 %**, obwohl du nichts verloren hast. **Unten:** Um 7 % zu halten, musst du um 30 % auf **≈ 5,5 Mio.** wachsen." }],
      "BCG-Matrix (Portfolio-Analyse)": [{
        fig: SB.matrix({ x: "relativer Marktanteil", y: "Marktwachstum", label: "BCG-Matrix mit Question Marks, Stars, Poor Dogs und Cash Cows", hl: [1, 3],
          cells: [{ t: "Question Marks", s: ["Nachwuchs:", "investieren oder", "aufgeben?"] }, { t: "Stars", s: ["Wachstum fördern", "→ investieren"] }, { t: "Poor Dogs", s: ["kaum Zukunft", "→ eher aufgeben"] }, { t: "Cash Cows", s: ["Geld abschöpfen", "→ finanzieren", "die anderen"] }] }),
        t: "Die BCG-Matrix mit Achsen",
        read: "Waagerecht der **relative Marktanteil**, senkrecht das **Marktwachstum**. **Stars** (hoch/hoch) werden gefördert, **Cash Cows** (hoher Anteil, wenig Wachstum) bringen das Geld, mit dem man **Question Marks** zu Stars macht. **Poor Dogs** gibt man eher auf. Grenze: nur zwei Größen, sagt nicht, **warum** ein Produkt dort steht." }],
      "Ein gutes Ziel hat drei Bestandteile": [{ fig: zielformel(), t: "Die Ziel-Formel",
        read: "Ein Ziel ist erst **operational** (prüfbar), wenn alle drei Teile da sind: **Zielinhalt** (was?), **Ausmaß** (wie viel?) und **Zeitbezug** (bis wann?). Beispiel: „Umsatz mit Eiscreme **um 15 %** steigern **bis Ende 2027**“. Fehlt ein Teil, kann man später nicht prüfen, ob das Ziel erreicht wurde." }],
      "Marktsegmentierung": [{ fig: segmente(), t: "Aus einem bunten Markt werden Segmente",
        read: "Links der **Gesamtmarkt**: Die Kunden sind bunt gemischt (**heterogen**). Die Segmentierung teilt ihn so auf, dass jedes Segment **in sich möglichst gleich** (homogen) und die Segmente **untereinander möglichst verschieden** sind. Dann kann man jedes Segment gezielt bearbeiten." }],
      "Sechs Anforderungen an Segmentierungskriterien": [{
        fig: SB.hub({ center: "Kriterien", bw: 124, label: "Sechs Anforderungen an Segmentierungskriterien", items: [
          { t: "Verhaltensrelevanz", s: "die wichtigste!", a: true }, { t: "Messbarkeit", s: "lässt sich erheben" }, { t: "Zugänglichkeit", s: "erreichbar" }, { t: "Handlungsfähigkeit", s: "Maßnahmen ableitbar" }, { t: "Wirtschaftlichkeit", s: "Nutzen > Kosten" }, { t: "Stabilität", s: "bleibt eine Weile" }] }),
        t: "Gute Kriterien erfüllen sechs Anforderungen",
        read: "Ein Segmentierungskriterium taugt nur, wenn es alle sechs Anforderungen erfüllt. Die **wichtigste** (farbig) ist die **Verhaltensrelevanz**: Das Merkmal muss das **Kaufverhalten erklären**. Deshalb ist „alle zwischen 18 und 29“ keine gute Zielgruppe – gleiches Alter, völlig verschiedenes Kaufverhalten." }],
    },
  };

  // ======================================================================= Mathe
  const fmt = (v, d = 0) => v.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });

  // ---------- Degressive Abschreibung
  const restwertSaeulen = () => {
    const P = SB.plot({ x0: 58, y0: 170, w: 330, h: 138, xr: [-0.6, 5.6], yr: [0, 115000] }), { X: x, Y: y } = P;
    let b = P.axes("", "Restwert") + P.yt([[50000, "50.000"], [100000, "100.000"]]);
    for (let n = 0; n <= 5; n++) {
      const v = 100000 * Math.pow(0.8, n), cx = x(n), bw = 32;
      b += r(cx - bw / 2, y(v), bw, y(0) - y(v), "dg-bar", 4) + t(cx, P.y0 + 15, n ? (n === 5 ? "5 Jahre" : String(n)) : "Kauf", "dg-xs");
      if (n) { const prev = v / 0.8; b += r(cx - bw / 2, y(prev), bw, y(v) - y(prev), "dg-b dg-dd", 4) + t(cx, y(prev) - 6, `−${fmt(prev - v)}`, "dg-bt"); }
    }
    return svg(P.y0 + 22, "Degressive Abschreibung: Der Restwert sinkt jedes Jahr um 20 Prozent, der Abschreibungsbetrag wird kleiner", b);
  };
  const faktorKette = () => {
    const vals = ["100.000", "80.000", "64.000", "51.200", "40.960"], bw = 66, gap = 22.5;
    let b = "";
    vals.forEach((v, i) => {
      const x = i * (bw + gap);
      b += r(x, 26, bw, 34, i === 0 ? "dg-b" : i === 4 ? "dg-a" : "dg-q1", 9) + t(x + bw / 2, 48, v, "dg-tm") + t(x + bw / 2, 76, i ? `nach ${i} J.` : "Start", "dg-xs");
      if (i < 4) b += ln(x + bw + 2, 43, x + bw + gap - 3, 43, "dg-lp", "ahp") + t(x + bw + gap / 2, 18, "× 0,8", "dg-at");
    });
    b += t(W / 2, 104, "= 100.000 · 0,8 · 0,8 · 0,8 · 0,8 = 100.000 · 0,8⁴", "dg-at") + t(W / 2, 122, "jedes Jahr bleiben 80 % übrig – der Exponent zählt die Jahre", "dg-xs");
    return svg(130, "Jedes Jahr wird der Wert mit 0,8 malgenommen, nach vier Jahren also mit 0,8 hoch 4", b);
  };
  const lnRegel = () => {
    let b = t(118, 62, "ln( q", "dg-big", "end") + t(122, 46, "n", "dg-bigp", "start") + t(140, 62, ")", "dg-big", "start");
    b += t(176, 62, "=", "dg-big") + t(206, 62, "n", "dg-bigp", "start") + t(226, 62, "· ln q", "dg-big", "start");
    b += p("M130,32 C152,2 192,2 210,36", "dg-lp", "ahp") + t(W / 2, 92, "Der Logarithmus holt den Exponenten nach vorne", "dg-s");
    b += t(0, 118, "Beispiel: Wann ist der Lkw weniger als 20.000 € wert?", "dg-at", "start");
    [[0, 112, "0,2 = 0,8ⁿ", "durch 100.000 teilen", "dg-b"], [132, 156, "ln 0,2 = n · ln 0,8", "ln auf beide Seiten", "dg-q1"], [308, 112, "n ≈ 7,21", "÷ ln 0,8", "dg-a"]].forEach(([x, w, a, c, cls], i) => {
      b += r(x, 126, w, 42, cls, 10) + t(x + w / 2, 144, a, "dg-tm") + t(x + w / 2, 159, c, "dg-xs");
      if (i < 2) b += ln(x + w + 2, 147, x + w + 17, 147, "dg-lp", "ahp");
    });
    return svg(174, "Logarithmus-Regel: ln von q hoch n ist n mal ln q", b);
  };
  const unter20k = () => {
    const P = SB.plot({ x0: 58, y0: 170, w: 330, h: 140, xr: [0, 10], yr: [0, 100000] }), { X: x, Y: y } = P;
    let b = P.axes("", "Restwert") + P.yt([[20000, "20.000"], [100000, "100.000"]]) + P.xt([[0, "0"], [5, "5"], [7, "7"], [8, "8"], [10, "10 Jahre"]]);
    b += ln(x(0), y(20000), x(10), y(20000), "dg-lb dg-d") + p(P.curve((n) => 100000 * Math.pow(0.8, n), 0, 10), "dg-lp");
    b += ln(x(7.21), y(0), x(7.21), y(20000), "dg-l dg-d") + ci(x(7), y(20971.52), 3.5, "dg-b") + ci(x(8), y(16777.22), 3.5, "dg-b") + ci(x(7.21), y(20000), 4.5, "dg-a");
    b += t(x(7.21) + 6, y(20000) - 10, "n ≈ 7,21", "dg-at", "start") + t(x(0) + 6, y(20000) - 6, "Grenze 20.000 €", "dg-bt", "start") + t(x(3.2), 80, "100.000 · 0,8ⁿ", "dg-at", "start");
    return svg(P.y0 + 24, "Restwertkurve: Der Lkw fällt nach etwa 7,21 Jahren unter 20.000 Euro, also im 8. Jahr", b);
  };
  const zweiPhasen = () => {
    const P = SB.plot({ x0: 58, y0: 170, w: 330, h: 140, xr: [0, 8.5], yr: [0, 50000] }), { X: x, Y: y } = P;
    let b = r(x(0) + 1, y(50000), x(2) - x(0) - 1, 140, "dg-q1", 0) + r(x(2), y(50000), x(8.5) - x(2), 140, "dg-q2", 0);
    b += t((x(0) + x(2)) / 2, P.y0 - 22, "Phase 1", "dg-at") + t((x(0) + x(2)) / 2, P.y0 - 8, "25 %", "dg-xs") + t((x(2) + x(8.5)) / 2, y(50000) + 16, "Phase 2: 10 %", "dg-at");
    b += P.axes("", "Restwert") + P.yt([[15000, "15.000"], [28125, "28.125"], [50000, "50.000"]]) + P.xt([[0, "0"], [2, "2"], [7.97, "≈ 7,97 Jahre"]]);
    b += p(P.curve((n) => 50000 * Math.pow(0.75, n), 0, 2), "dg-lp") + p(P.curve((n) => 28125 * Math.pow(0.9, n - 2), 2, 8.4), "dg-lp");
    b += ln(x(0), y(15000), x(8.5), y(15000), "dg-lb dg-d") + ci(x(2), y(28125), 4.5, "dg-a") + ci(x(7.97), y(15000), 4.5, "dg-a");
    b += ln(x(2) + 2, 154, x(7.97) - 2, 154, "dg-l", "ah") + t((x(2) + x(7.97)) / 2, 150, "Phase 2 dauert n₂ ≈ 5,97 Jahre", "dg-xs");
    return svg(P.y0 + 24, "Zwei-Phasen-Abschreibung: erst zwei Jahre 25 Prozent, dann 10 Prozent bis 15.000 Euro", b);
  };
  X["mathe/m-abschreibung"] = {
    sum: [
      "Degressiv: jedes Jahr **derselbe Prozentsatz vom Restwert** → der Abschreibungsbetrag wird kleiner.",
      "Formel: $R_n = A \\cdot q^n$ mit $q = 1 - \\frac{p}{100}$ (Restwertfaktor, z. B. 0,8).",
      "Restwert in %: $q^n$ – der Anschaffungswert kürzt sich weg ($0{,}8^4 = 40{,}96\\,\\%$).",
      "$p$ gesucht → $n$-te Wurzel · $n$ gesucht → $\\ln$: $n = \\frac{\\ln(R_n / A)}{\\ln q}$.",
      "Mehrphasen: Faktoren **hintereinander multiplizieren**: $A \\cdot q_1^{n_1} \\cdot q_2^{n_2}$.",
    ],
    after: {
      "Ein Beispiel durchgerechnet: Lkw für 100.000 €, 20 % pro Jahr": [{ fig: restwertSaeulen(), t: "Der Restwert schrumpft – die Abschreibung auch",
        read: "Die **Säulen** sind der Restwert nach jedem Jahr, das **gestrichelte Stück** darüber ist die Abschreibung dieses Jahres. Weil immer **20 % vom aktuellen Restwert** abgeschrieben werden, wird das Stück **jedes Jahr kleiner** (20.000 → 16.000 → 12.800 …). Linear würde man dagegen jedes Jahr gleich viel abschreiben." }],
      "Warum „hoch n“?": [{ fig: faktorKette(), t: "Warum der Exponent die Jahre zählt",
        read: "Lies die Kette von links nach rechts: Jedes Jahr wird der Wert **mit 0,8 malgenommen** (20 % weg, 80 % bleiben). Nach vier Jahren hast du viermal mit 0,8 multipliziert – also $0{,}8^4$. Deshalb steht die **Anzahl der Jahre im Exponenten**." }],
      "Die eine Logarithmus-Regel, die du brauchst": [{ fig: lnRegel(), t: "So holst du n aus dem Exponenten",
        read: "**Oben** die Regel: Der $\\ln$ holt den Exponenten $n$ nach vorne – aus $\\ln(q^n)$ wird $n \\cdot \\ln q$. **Unten** der Rechenweg in drei Schritten: erst durch den Anschaffungswert teilen, dann $\\ln$ auf beiden Seiten, dann durch $\\ln 0{,}8$ teilen." }],
      "Beispiel: Wann ist der Lkw weniger als 20.000 € wert?": [{ fig: unter20k(), t: "Wann fällt der Lkw unter 20.000 €?",
        read: "Die **Kurve** ist der Restwert $100.000 \\cdot 0{,}8^n$, die **rote Linie** die Grenze von 20.000 €. Sie schneiden sich bei **n ≈ 7,21**. Die Punkte zeigen die ganzen Jahre: nach 7 Jahren noch knapp darüber (20.971,52 €), nach 8 Jahren darunter → **im 8. Jahr** fällt der Lkw unter 20.000 €." }],
      "Beispiel: zwei Phasen": [{ fig: zweiPhasen(), t: "Zwei Phasen, zwei Steigungen",
        read: "**Phase 1** (2 Jahre, 25 %) fällt steil, **Phase 2** (10 %) flacher. Am Wechsel steht der Restwert **28.125 €** – von dort startet Phase 2. Sie dauert, bis die Kurve die Linie bei **15.000 €** trifft: **n₂ ≈ 5,97 Jahre**, insgesamt also ≈ 7,97 Jahre." }],
    },
  };

  // ---------- Zinseszins
  const zinsVergleich = () => {
    const P = SB.plot({ x0: 58, y0: 170, w: 310, h: 140, xr: [0, 10], yr: [10000, 26000] }), { X: x, Y: y } = P;
    const top = [], bot = [];
    for (let i = 0; i <= 40; i++) { const n = i / 4; top.push([x(n), y(10000 * Math.pow(1.1, n))]); bot.push([x(n), y(10000 + 1000 * n)]); }
    let b = p(poly(top) + " " + poly(bot.reverse()).replace("M", "L") + " Z", "dg-area");
    b += P.axes("", "Kapital") + P.yt([[10000, "10.000"], [20000, "20.000"]]) + P.xt([[0, "0"], [5, "5"], [10, "10 Jahre"]]);
    b += p(P.curve((n) => 10000 + 1000 * n), "dg-l") + p(P.curve((n) => 10000 * Math.pow(1.1, n)), "dg-lp");
    b += t(x(10) + 5, y(25937.42) + 4, "25.937 €", "dg-at", "start") + t(x(10) + 5, y(20000) + 4, "20.000 €", "dg-s", "start");
    b += t(x(6) - 4, 96, "Zinseszins", "dg-at", "end") + t(x(7.2), 124, "einfach", "dg-s", "start");
    return svg(P.y0 + 24, "Einfache Verzinsung wächst gleichmäßig, Zinseszins immer schneller: nach 10 Jahren 20.000 gegen 25.937 Euro", b);
  };
  const qVergleich = () => {
    const P = SB.plot({ x0: 50, y0: 168, w: 310, h: 140, xr: [0, 5], yr: [0, 260] }), { X: x, Y: y } = P;
    let b = P.axes("", "Wert") + P.yt([[100, "100"], [200, "200"]]) + P.xt([[0, "0"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "n = 5 Jahre"]]);
    b += ln(x(0), y(100), x(5), y(100), "dg-l dg-d") + p(P.curve((n) => 100 * Math.pow(1.2, n)), "dg-lp") + p(P.curve((n) => 100 * Math.pow(0.8, n)), "dg-lb");
    b += t(x(5) + 4, y(248.8) + 4, "q = 1,2", "dg-at", "start") + t(x(5) + 4, y(32.8) + 4, "q = 0,8", "dg-bt", "start");
    b += t(x(2.6), y(100 * Math.pow(1.2, 2.6)) - 10, "Zins: wächst", "dg-at", "end") + t(x(0) + 10, 158, "Abschreibung: schrumpft", "dg-bt", "start");
    b += t(W / 2, P.y0 + 34, "dieselbe Formel: Startwert · qⁿ – nur ist q größer oder kleiner als 1", "dg-xs");
    return svg(P.y0 + 42, "Zinseszins und degressive Abschreibung sind dieselbe Formel: Startwert mal q hoch n", b);
  };
  const zeitstrahl = () => {
    const x = (n) => 40 + n * 68;
    let b = ln(18, 86, 404, 86, "dg-l", "ah");
    for (let n = 0; n <= 5; n++) b += ln(x(n), 81, x(n), 91) + t(x(n), 106, n ? `Jahr ${n}` : "heute", "dg-xs");
    b += r(x(0) - 40, 30, 80, 42, "dg-q1", 9) + t(x(0), 47, "K₀", "dg-xs") + t(x(0), 63, "8.626,09 €", "dg-tm");
    b += r(x(5) - 40, 30, 80, 42, "dg-a", 9) + t(x(5), 47, "Kₙ", "dg-xs") + t(x(5), 63, "10.000 €", "dg-tm");
    b += p("M84,44 C160,16 262,16 336,44", "dg-lp", "ahp") + t(W / 2, 12, "aufzinsen: × 1,03⁵", "dg-at");
    b += p("M380,114 C300,150 122,150 42,116", "dg-lp dg-d", "ahp") + t(W / 2, 160, "abzinsen: ÷ 1,03⁵ = 10.000 ÷ 1,159274", "dg-at");
    return svg(168, "Aufzinsen und Abzinsen auf dem Zeitstrahl: heute 8.626,09 Euro entsprechen 10.000 Euro in 5 Jahren bei 3 Prozent", b);
  };
  const regel72 = () => {
    const rows = [[2, 35.0, 36], [4, 17.67, 18], [6, 11.9, 12], [8, 9.01, 9]], x0 = 70, sc = 7;
    let b = t(x0, 12, "Verdopplungszeit in Jahren", "dg-at", "start");
    rows.forEach(([pp, ex, ru], i) => {
      const y = 22 + i * 38;
      b += t(x0 - 10, y + 22, `${pp} %`, "dg-tm", "end");
      b += r(x0, y + 4, ex * sc, 12, "dg-bar", 4) + t(x0 + ex * sc + 6, y + 14, `exakt ${fmt(ex, 2)}`, "dg-at", "start");
      b += r(x0, y + 19, ru * sc, 12, "dg-bar2", 4) + t(x0 + ru * sc + 6, y + 29, `72 ÷ ${pp} = ${ru}`, "dg-s", "start");
    });
    return svg(178, "72er-Regel: Die Faustformel 72 geteilt durch p liegt sehr nah an der exakten Verdopplungszeit", b);
  };
  const bankDreimal = () => {
    const P = SB.plot({ x0: 46, y0: 170, w: 320, h: 140, xr: [0, 45], yr: [0, 9] }), { X: x, Y: y } = P, ns = Math.log(3) / Math.log(1.05 / 1.02);
    let b = P.axes("", "Endbetrag (× K₀)") + P.yt([[1, "1"], [3, "3"], [6, "6"], [9, "9"]]) + P.xt([[0, "0"], [20, "20"], [ns, "≈ 37,9"], [45, "45 Jahre"]]);
    b += p(P.curve((n) => Math.pow(1.05, n)), "dg-lp") + p(P.curve((n) => Math.pow(1.02, n)), "dg-l");
    const a = Math.pow(1.02, ns), c = Math.pow(1.05, ns);
    b += ln(x(ns), y(0), x(ns), y(c), "dg-l dg-d") + ci(x(ns), y(a), 4, "dg-b") + ci(x(ns), y(c), 4.5, "dg-a");
    b += ln(x(ns) + 8, y(a) - 3, x(ns) + 8, y(c) + 4, "dg-l", "ah") + t(x(ns) + 12, (y(a) + y(c)) / 2 + 4, "× 3", "dg-at", "start");
    b += t(x(45) + 4, y(Math.pow(1.05, 45)) + 4, "5 %", "dg-at", "start") + t(x(45) + 4, y(Math.pow(1.02, 45)) + 4, "2 %", "dg-s", "start");
    return svg(P.y0 + 24, "Bankvergleich: Nach rund 37,9 Jahren ist der Endbetrag bei 5 Prozent dreimal so groß wie bei 2 Prozent", b);
  };
  X["mathe/m-zinseszins"] = {
    sum: [
      "Zinseszins: **Zinsen auf Zinsen** → das Kapital wächst exponentiell.",
      "$K_n = K_0 \\cdot q^n$ mit $q = 1 + \\frac{p}{100}$ – bei der Abschreibung ist $q = 1 - \\frac{p}{100}$.",
      "Abzinsen: $K_0 = \\frac{K_n}{q^n}$.",
      "$p$ gesucht → $n$-te Wurzel · $n$ gesucht → $\\ln$ (Verdopplung bei 5 %: ≈ 14,21 Jahre).",
      "Kontrolle mit der **72er-Regel**: Verdopplung nach ≈ $\\frac{72}{p}$ Jahren.",
      "**Klausur!** Bankvergleich „dreimal so groß“: $n = \\frac{\\ln 3}{\\ln q_2 - \\ln q_1}$ – $K_0$ kürzt sich weg.",
    ],
    after: {
      "Einfache Verzinsung vs. Zinseszins (10.000 € zu 10 %)": [{ fig: zinsVergleich(), t: "Gerade gegen Kurve",
        read: "Die **graue Gerade** ist die einfache Verzinsung: jedes Jahr dieselben 1.000 € Zinsen. Die **farbige Kurve** ist der Zinseszins: Die Zinsen werden mitverzinst, die Kurve wird **immer steiler**. Die **Fläche dazwischen** sind die Zinsen auf Zinsen – nach 10 Jahren schon **5.937 €**." }],
      "Die Zinseszinsformel": [{ fig: qVergleich(), t: "Eine Formel für Zins und Abschreibung",
        read: "Beide Kurven folgen **Startwert · qⁿ**. Ist $q > 1$ (Zins, hier 1,2), **wächst** der Wert immer schneller. Ist $q < 1$ (Abschreibung, hier 0,8), **schrumpft** er – erst schnell, dann langsamer. Wer die Abschreibung kann, kann also auch den Zinseszins: nur das Vorzeichen in $q = 1 \\pm \\frac{p}{100}$ ändert sich." }],
      "Beispiel: Abzinsen": [{ fig: zeitstrahl(), t: "Aufzinsen und Abzinsen",
        read: "Der Zeitstrahl verbindet **heute** und **in 5 Jahren**. **Aufzinsen** (oben) heißt: mit $q^5$ malnehmen – aus 8.626,09 € werden 10.000 €. **Abzinsen** (unten) ist der Rückweg: durch $q^5$ teilen. So findest du heraus, wie viel du **heute** anlegen musst." }],
      "Bankvergleich – der Trick mit dem ln": [{ fig: bankDreimal(), t: "Wann ist die bessere Bank dreimal so groß?",
        read: "Beide Kurven starten beim selben Startkapital (= 1). Die **bessere Bank** (5 %, farbig) wächst schneller als die **schlechtere** (2 %, grau), der Abstand wird immer größer. Nach **≈ 37,9 Jahren** ist sie genau **dreimal so groß** (Pfeil). Rechnung: $n = \\frac{\\ln 3}{\\ln 1{,}05 - \\ln 1{,}02}$ – das Startkapital spielt keine Rolle, es kürzt sich weg." }],
      "Profi-Tipp: die 72er-Regel zum Überprüfen": [{ fig: regel72(), t: "Wie gut ist die 72er-Regel?",
        read: "Je Zinssatz zwei Balken: **oben** die exakte Verdopplungszeit ($\\frac{\\ln 2}{\\ln q}$), **unten** die Faustregel $\\frac{72}{p}$. Sie liegen fast gleich auf – darum eignet sich die Regel perfekt, um ein Ergebnis in Sekunden auf **Plausibilität** zu prüfen. Rechnen musst du aber mit $\\ln$." }],
    },
  };

  // ---------- Unterjährig, effektiv, stetig
  const perioden = () => {
    const rows = [["jährlich", 1, "12 %"], ["halbjährlich", 2, "6 %"], ["vierteljährlich", 4, "3 %"], ["monatlich", 12, "1 %"]], x0 = 112, w = 304;
    let b = t(x0, 12, "1 Jahr bei 12 % nominal", "dg-at", "start");
    rows.forEach(([n, m, z], j) => {
      const y = 22 + j * 40, sw = w / m;
      b += t(x0 - 8, y + 16, n, "dg-tm", "end") + t(x0 - 8, y + 29, `m = ${m}`, "dg-xs", "end");
      for (let i = 0; i < m; i++) b += r(x0 + i * sw + 1, y + 4, sw - 2, 28, j === 3 ? "dg-a" : "dg-q1", 5) + t(x0 + i * sw + sw / 2, y + 22, z, "dg-xs");
    });
    b += t(W / 2, 188, "Zins pro Periode = p ÷ m · Anzahl der Perioden = m · n", "dg-s");
    return svg(196, "Unterjährige Verzinsung: Das Jahr wird in m Perioden geteilt, jede bekommt p durch m Prozent", b);
  };
  const formelwahl = () => {
    const rows = [["„jährlich“ oder nichts", "Kₙ = K₀ · qⁿ", "dg-b"], ["„halbjährlich … täglich“", "Kₙ = K₀ · (1 + p/100m)ᵐⁿ", "dg-q1"], ["„stetig“", "Kₙ = K₀ · e^(p·n/100)", "dg-q2"], ["„effektiv“ / vergleichen", "p* berechnen", "dg-a"]];
    let b = t(84, 12, "Stichwort in der Aufgabe", "dg-at") + t(310, 12, "Formel", "dg-at");
    rows.forEach(([k, fm, cls], i) => {
      const y = 20 + i * 42;
      b += r(0, y, 168, 34, "dg-b", 9) + t(84, y + 22, k, "dg-tm") + ln(171, y + 17, 196, y + 17, "dg-lp", "ahp") + r(200, y, 220, 34, cls, 9) + t(310, y + 22, fm, "dg-tm");
    });
    return svg(190, "Welche Zinsformel wann: Stichwort in der Aufgabe und passende Formel", b);
  };
  X["mathe/m-unterjaehrig"] = {
    sum: [
      "$m$ = Verzinsungen pro Jahr: Zins pro Periode $\\frac{p}{m}$, Anzahl der Perioden $m \\cdot n$.",
      "$K_n = K_0 \\cdot \\left(1 + \\frac{p}{100 m}\\right)^{m n}$ – für $m = 1$ die normale Zinseszinsformel.",
      "Öfter verzinsen bringt mehr: 8 % monatlich ≙ **8,30 % effektiv**.",
      "$p^* = \\left[\\left(1 + \\frac{p}{100 m}\\right)^m - 1\\right] \\cdot 100$ – immer $p^* \\ge p$.",
      "Stetig: $K_n = K_0 \\cdot e^{\\frac{p n}{100}}$ – der $\\ln$ hebt das $e$ auf.",
    ],
    after: {
      "Was bedeutet m? (Beispiel: 12 % nominal)": [{ fig: perioden(), t: "Das Jahr in Stücke teilen",
        read: "Jede Zeile ist **ein Jahr**, geteilt in $m$ gleich lange Perioden. Jede Periode bekommt den Zins $\\frac{p}{m}$: einmal 12 %, zweimal 6 %, viermal 3 %, zwölfmal 1 %. Weil ab der zweiten Periode schon Zinsen **mitverzinst** werden, bringt eine feinere Teilung am Jahresende etwas mehr." }],
      "Beispiel: 10.000 € zu 8 % für 1 Jahr": [{
        fig: SB.bars({ label: "Zinsen auf 10.000 Euro bei 8 Prozent in einem Jahr je nach Verzinsungsart", max: 832.87, lw: 104, room: 140, lc: "dg-tm", items: [
          { l: "jährlich", v: 800, txt: "800,00 €" }, { l: "vierteljährlich", v: 824.32, txt: "824,32 €" }, { l: "monatlich", v: 830, txt: "830,00 €" }, { l: "stetig", v: 832.87, txt: "832,87 € – Maximum", a: true }] }),
        t: "Je öfter, desto mehr – aber nur ein bisschen",
        read: "Die Balken zeigen die **Zinsen** in einem Jahr. Je häufiger verzinst wird, desto mehr – der Zuwachs wird aber **immer kleiner**: Von jährlich auf vierteljährlich gibt es 24,32 € mehr, von monatlich auf stetig nur noch 2,87 €. **Stetig** ist die obere Grenze." }],
      "Effektiven Jahreszins berechnen": [{
        fig: SB.chain([{ t: "8 % nominal", s: "monatlich (m = 12)" }, { t: "× 1,0830", s: "(1 + 8/1200)¹²" }, { t: "8,30 % effektiv", s: "einmal im Jahr", a: true }], { per: 3, label: "Vom Nominalzins zum effektiven Jahreszins" }),
        t: "Vom Nominalzins zum Effektivzins",
        read: "Links das Angebot, wie die Bank es nennt: **8 % nominal**, monatlich verzinst. In der Mitte der Wachstumsfaktor für ein Jahr: **1,0830**. Rechts der **effektive Jahreszins**: Ein Konto mit **8,30 %** und **einmal jährlicher** Verzinsung bringt genau dasselbe. Darum vergleicht man Angebote immer über den Effektivzins." }],
      "Stetige Verzinsung – unendlich oft verzinsen": [{
        fig: SB.bars({ label: "Der Wachstumsfaktor eins plus eins durch m hoch m nähert sich der Eulerschen Zahl e", max: 2.71828, lw: 70, room: 92, rh: 30, lc: "dg-tm", items: [
          { l: "m = 1", v: 2, txt: "2,000" }, { l: "m = 2", v: 2.25, txt: "2,250" }, { l: "m = 4", v: 2.4414, txt: "2,441" }, { l: "m = 12", v: 2.613, txt: "2,613" }, { l: "m = 360", v: 2.7145, txt: "2,715" }, { l: "m → ∞", v: 2.71828, txt: "e ≈ 2,718", a: true }] }),
        t: "Bei 100 % Zins: (1 + 1/m)ᵐ → e",
        read: "Stell dir **100 % Zins** für ein Jahr vor. Einmal verzinst wird aus 1 € genau **2 €**. Verzinst man öfter, wächst der Faktor – aber immer langsamer: 2,25 → 2,44 → 2,61 → 2,71 … Er nähert sich der **Eulerschen Zahl e ≈ 2,718**, überschreitet sie aber nie. Das ist die **stetige Verzinsung**." }],
      "Welche Formel wann?": [{ fig: formelwahl(), t: "Vom Stichwort zur Formel",
        read: "Lies in der Aufgabe zuerst das **Stichwort** (links) und nimm dann die passende **Formel** (rechts): nichts oder „jährlich“ → normale Zinseszinsformel, „monatlich“ & Co. → unterjährige Formel mit $m$, „stetig“ → $e$-Formel, „effektiv“ oder „Angebote vergleichen“ → $p^*$ berechnen." }],
    },
  };

  // ---------- Rentenrechnung
  const renteTreppe = () => SB.gantt({ label: "Rentenendwert als Summe: Jede Rate wächst unterschiedlich lange", tmax: 1700, lw: 72, room: 70, rh: 30, rows: [
    { l: "1. Rate", segs: [[0, 1000, "1.000 €", "dg-b"], [1000, 1610.51, "Zinsen", "dg-a"]], end: "1.610,51" },
    { l: "2. Rate", segs: [[0, 1000, "1.000 €", "dg-b"], [1000, 1464.10, "Zinsen", "dg-a"]], end: "1.464,10" },
    { l: "3. Rate", segs: [[0, 1000, "1.000 €", "dg-b"], [1000, 1331, "Zinsen", "dg-a"]], end: "1.331,00" },
    { l: "4. Rate", segs: [[0, 1000, "1.000 €", "dg-b"], [1000, 1210, "", "dg-a"]], end: "1.210,00" },
    { l: "5. Rate", segs: [[0, 1000, "1.000 €", "dg-b"], [1000, 1100, "", "dg-a"]], end: "1.100,00" }],
    note: "Summe = Rentenendwert 6.715,61 € (5 × 1.000 € vorschüssig, 10 %)" });
  X["mathe/m-renten"] = {
    sum: [
      "**Rente** = regelmäßig gleiche Einzahlungen $E$; ihr Endwert heißt **Rentenendwert (REW)**.",
      "**Vorschüssig** (Periodenanfang): $K_n = E \\cdot q \\cdot \\frac{q^n - 1}{q - 1}$",
      "**Nachschüssig** (Periodenende): $K_n = E \\cdot \\frac{q^n - 1}{q - 1}$ – vorschüssig ist genau **q-mal** so viel.",
      "Rate gesucht: $E = K_n$ ÷ Rentenfaktor · Laufzeit gesucht: erst $q^n$ alleine stellen, **dann** $\\ln$.",
      "Beispiel Vorlesung: 500 €, 2,5 %, 15 Jahre vorschüssig → **9.190,11 €**.",
    ],
    after: {
      "Ein Beispiel durchgerechnet: 3 × 500 € bei 2,5 %": [{ fig: renteTreppe(), t: "Der Rentenendwert als Treppe",
        read: "Jede Zeile ist **eine Einzahlung** von 1.000 € (grau) plus die **Zinsen**, die sie bis zum Ende bekommt (farbig). Die **erste Rate** liegt am längsten auf dem Konto und wächst am meisten, die letzte am wenigsten. **Addiert** man alle Zeilen, erhält man den **Rentenendwert** – genau das rechnet die Formel in einem Schritt (Beispiel mit 10 %, damit man die Zinsen gut sieht)." }],
      "Die zwei Formeln für den Rentenendwert": [{
        fig: SB.bars({ label: "Gleiche Raten: Vorschüssig ergibt genau q-mal so viel wie nachschüssig", max: 6715.61, lw: 96, room: 150, items: [
          { l: "nachschüssig", v: 6105.10, txt: "6.105,10 €" }, { l: "vorschüssig", v: 6715.61, txt: "6.715,61 € (× 1,1)", a: true }] }),
        t: "Vorschüssig ist q-mal so viel",
        read: "Beide Balken: 5 × 1.000 € bei 10 %. Der einzige Unterschied ist der **Zeitpunkt** der Einzahlung. Vorschüssig liegt jede Rate ein Jahr länger auf dem Konto – deshalb ist der Endwert genau um den Faktor $q = 1{,}1$ größer. In der Formel steht dafür das zusätzliche $q$ vorne." }],
      "Rezept: Laufzeit $n$ gesucht (nachschüssig)": [{
        fig: SB.chain([{ t: "1. durch E teilen", s: "20.000 ÷ 3.000 = 6,667" }, { t: "2. mal (q − 1)", s: "6,667 · 0,03 = 0,2" }, { t: "3. plus 1", s: "1,2 = 1,03ⁿ" }, { t: "4. ln anwenden", s: "n = ln 1,2 ÷ ln 1,03 ≈ 6,17", a: true }], { per: 2, label: "Laufzeit gesucht bei nachschüssiger Rente in vier Schritten" }),
        t: "Vier Schritte zur Laufzeit",
        read: "Lies die Kästen wie einen Weg (erst oben, dann unten). Schritte **1 bis 3** stellen $q^n$ **alleine** – erst dann darf der $\\ln$ kommen (Schritt 4). Wer den $\\ln$ schon auf den Bruch anwendet, rechnet falsch. Zahlen aus deiner Mitschrift: 3.000 € nachschüssig, 3 %, Ziel 20.000 € → **n ≈ 6,17 Jahre**." }],
    },
  };

  window.LZ_PLUS = X;
})();
