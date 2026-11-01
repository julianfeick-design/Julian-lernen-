/*
 * Lektionen Logistik – erst verstehen, dann üben.
 * Schema wie js/lessons/vbl1.js. check: o[0] ist immer die richtige Antwort (wird gemischt).
 */
(function () {
  window.LESSONS = window.LESSONS || {};
  const R = String.raw;
  const SH = "­"; // weiches Trennzeichen für sehr lange Wörter

  // ---------- Bausteine für Schaubilder ----------
  const box = (x, y, w, h, title, sub, accent) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" class="${accent ? "dg-a" : "dg-b"}"/>` +
    `<text x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 5)}" text-anchor="middle" class="dg-t">${title}</text>` +
    (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" class="dg-s">${sub}</text>` : "");
  const C = (x, y, r, acc) => `<circle cx="${x}" cy="${y}" r="${r}" class="${acc ? "dg-a" : "dg-b"}"/>`;
  const T = (x, y, t, cls) => `<text x="${x}" y="${y}" text-anchor="middle" class="${cls || "dg-s"}">${t}</text>`;
  const f1 = (n) => n.toFixed(1);

  // Logistik vs. SCM entlang der Kette
  const SVG_SCM = `<svg viewBox="0 0 420 232" role="img" aria-label="Logistik und Supply Chain Management entlang der Lieferkette mit Güter-, Informations- und Finanzfluss">{{defs}}
    <text x="210" y="14" text-anchor="middle" class="dg-at">Supply Chain Management: die ganze Kette</text>
    <path d="M6,30 V22 H414 V30" class="dg-lp"/>
    <text x="157" y="46" text-anchor="middle" class="dg-s">Logistik: eigenes Unternehmen + direkte Partner</text>
    <path d="M48,62 V54 H266 V62" class="dg-l"/>
    ${box(4, 68, 88, 46, "Lieferant", "+ Rohstoffe")}
    ${box(113, 68, 88, 46, "Hersteller", "fokal (wir)", true)}
    ${box(222, 68, 88, 46, "Handel")}
    ${box(331, 68, 88, 46, "Endkunde")}
    <text x="210" y="140" text-anchor="middle" class="dg-at">Güter- / Materialfluss</text>
    <line x1="40" y1="148" x2="380" y2="148" class="dg-lp" marker-end="url(#ahp)"/>
    <text x="210" y="176" text-anchor="middle" class="dg-s">Informationsfluss (in beide Richtungen)</text>
    <line x1="40" y1="184" x2="380" y2="184" class="dg-l dg-d" marker-start="url(#ah)" marker-end="url(#ah)"/>
    <text x="210" y="212" text-anchor="middle" class="dg-s">Finanzfluss (Geld fließt zurück)</text>
    <line x1="380" y1="220" x2="40" y2="220" class="dg-l" marker-end="url(#ah)"/>
  </svg>`;

  // Drei Informationsflüsse t0 / t1 / t2
  const SVG_INFO = `<svg viewBox="0 0 420 148" role="img" aria-label="Vorauseilender, begleitender und nachfolgender Informationsfluss auf der Zeitachse">{{defs}}
    <line x1="8" y1="30" x2="408" y2="30" class="dg-l" marker-end="url(#ah)"/>
    <text x="412" y="19" text-anchor="end" class="dg-s">Zeit</text>
    ${[[70, "t0"], [210, "t1"], [350, "t2"]].map(([x, t]) => `<line x1="${x}" y1="30" x2="${x}" y2="54" class="dg-l dg-d"/>${C(x, 30, 5, true)}${T(x, 18, t, "dg-at")}`).join("")}
    ${box(10, 54, 120, 46, "vorauseilend", "vor der Ware")}
    ${box(150, 54, 120, 46, "begleitend", "mit der Ware", true)}
    ${box(290, 54, 120, 46, "nachfolgend", "nach der Ware")}
    ${T(70, 122, "z. B. Lieferavis")}
    ${T(210, 122, "z. B. Lieferschein,")}${T(210, 138, "Frachtbrief")}
    ${T(350, 122, "z. B. Rechnung,")}${T(350, 138, "Abliefernachweis")}
  </svg>`;

  // Einstufig (3 × 3 Verbindungen) vs. mehrstufig über einen Knoten (3 + 3)
  const YS = [52, 100, 148];
  let stLines = "";
  YS.forEach(a => YS.forEach(b => { stLines += `<line x1="32" y1="${a}" x2="168" y2="${b}" class="dg-l"/>`; }));
  YS.forEach(a => { stLines += `<line x1="252" y1="${a}" x2="320" y2="100" class="dg-lp"/><line x1="320" y1="100" x2="388" y2="${a}" class="dg-lp"/>`; });
  const node = (x, y, t, acc, r) => `${C(x, y, r || 13, acc)}${T(x, y + 5, t, "dg-t")}`;
  const SVG_STUFEN = `<svg viewBox="0 0 420 198" role="img" aria-label="Einstufiges System mit neun Verbindungen und mehrstufiges System über einen Knoten mit sechs Verbindungen">
    ${T(100, 18, "Einstufig (direkt)", "dg-t")}
    ${T(320, 18, "Mehrstufig (über Knoten)", "dg-t")}
    ${stLines}
    ${YS.map(y => node(32, y, "L") + node(168, y, "E") + node(252, y, "L") + node(388, y, "E")).join("")}
    ${node(320, 100, "K", true, 19)}
    ${T(100, 188, "3 × 3 = 9 Verbindungen")}
    ${T(320, 188, "3 + 3 = 6 Verbindungen")}
  </svg>`;

  // Bestände wie Wasser über Felsen
  const rocks = (ox) => [
    [[6, 184], [24, 128], [46, 114], [70, 184]],
    [[62, 184], [86, 104], [112, 98], [134, 184]],
    [[124, 184], [150, 120], [172, 126], [196, 184]]
  ].map(p => `<polygon points="${p.map(([x, y]) => `${ox + x},${y}`).join(" ")}" class="dg-b" style="fill:color-mix(in srgb, var(--muted) 30%, var(--surface-solid))"/>`).join("");
  const waveTop = (ox, wy) => `M${ox},${wy} Q${ox + 25},${wy - 7} ${ox + 50},${wy} T${ox + 100},${wy} T${ox + 150},${wy} T${ox + 200},${wy}`;
  const water = (ox, wy) => `<path d="${waveTop(ox, wy)} V184 H${ox} Z" class="dg-a" fill-opacity="0.82" style="stroke:none"/><path d="${waveTop(ox, wy)}" class="dg-lp"/>`;
  const SVG_FELSEN = `<svg viewBox="0 0 420 192" role="img" aria-label="Ein hoher Bestand verdeckt Probleme wie Wasser die Felsen, ein gesenkter Bestand macht sie sichtbar">
    ${T(100, 16, "Hoher Bestand", "dg-t")}${T(100, 33, "Probleme sind verdeckt")}
    ${T(320, 16, "Bestand gesenkt", "dg-t")}${T(320, 33, "Probleme werden sichtbar")}
    ${rocks(0)}${water(0, 72)}${T(100, 90, "Bestand", "dg-at")}
    ${rocks(220)}${water(220, 142)}${T(320, 172, "Bestand", "dg-at")}
    ${T(258, 106, "Störungen")}${T(318, 90, "Ausschuss")}${T(381, 112, "Engpässe")}
  </svg>`;

  // Bullwhip-Effekt: Ausschläge werden von Stufe zu Stufe größer
  const wave = (x0, w, cy, amp) => {
    let d = "";
    for (let k = 0; k <= 40; k++) d += (k ? " L" : "M") + f1(x0 + w * k / 40) + "," + f1(cy - amp * Math.sin(k / 40 * 4 * Math.PI));
    return `<line x1="${x0}" y1="${cy}" x2="${x0 + w}" y2="${cy}" class="dg-l dg-d"/><path d="${d}" class="dg-lp"/>`;
  };
  const BW = [["Endkunde", 5], ["Händler", 12], ["Großhandel", 21], ["Hersteller", 33]];
  const SVG_BULLWHIP = `<svg viewBox="0 0 420 194" role="img" aria-label="Bullwhip-Effekt: Die Schwankung der Bestellungen wird vom Endkunden bis zum Hersteller immer größer">{{defs}}
    ${BW.map(([t, a], i) => box(2 + i * 108, 8, 92, 38, t, null, i === 3) + wave(8 + i * 108, 80, 104, a)).join("")}
    <text x="20" y="152" class="dg-at">Bestellungen</text>
    <line x1="20" y1="160" x2="400" y2="160" class="dg-l" marker-end="url(#ah)"/>
    ${T(210, 182, "Jede Stufe bestellt „sicherheitshalber“ etwas mehr")}
  </svg>`;

  // Vier Formen der Bündelung
  let bA = "";
  [44, 74, 104].forEach(y => { bA += `<line x1="38" y1="${y}" x2="80" y2="74" class="dg-l"/>`; });
  bA += [34, 64, 94].map(y => `<rect x="8" y="${y}" width="30" height="20" rx="5" class="dg-b"/>`).join("");
  bA += `<line x1="80" y1="74" x2="150" y2="74" class="dg-lp" marker-end="url(#ahp)"/>${T(115, 66, "Hauptlauf", "dg-at")}<rect x="154" y="56" width="44" height="36" rx="9" class="dg-a"/>${T(176, 79, "Ziel")}`;
  const stops = [[60, 40], [88, 32], [116, 44], [146, 36], [176, 54], [186, 86], [160, 106], [128, 112], [96, 104], [66, 96]];
  const bB = `<path d="M257,75 ${stops.map(([x, y]) => `L${215 + x},${y}`).join(" ")} L257,75" class="dg-lp"/>` +
    stops.map(([x, y]) => C(215 + x, y, 5)).join("") +
    `<rect x="223" y="62" width="34" height="26" rx="7" class="dg-a"/>${T(240, 80, "D", "dg-t")}`;
  const hubPts = [-90, -30, 30, 90, 150, 210].map(a => [102 + 50 * Math.cos(a * Math.PI / 180), 240 + 46 * Math.sin(a * Math.PI / 180)]);
  const bC = hubPts.map(([x, y]) => `<line x1="102" y1="240" x2="${f1(x)}" y2="${f1(y)}" class="dg-lp"/>`).join("") +
    hubPts.map(([x, y]) => C(f1(x), f1(y), 7)).join("") + C(102, 240, 17, true) + T(102, 245, "Hub", "dg-t");
  const ringP = (a) => [317 + 46 * Math.cos(a * Math.PI / 180), 240 + 46 * Math.sin(a * Math.PI / 180)];
  const angs = [-90, -18, 54, 126, 198];
  const bD = angs.map((a, i) => {
    const b = i < angs.length - 1 ? angs[i + 1] : angs[0] + 360;
    const [x1, y1] = ringP(a + 15), [x2, y2] = ringP(b - 15);
    return `<path d="M${f1(x1)},${f1(y1)} A46,46 0 0 1 ${f1(x2)},${f1(y2)}" class="dg-lp" marker-end="url(#ahp)"/>`;
  }).join("") + angs.map(a => { const [x, y] = ringP(a); return C(f1(x), f1(y), 7); }).join("");
  const SVG_BUENDEL = `<svg viewBox="0 0 420 318" role="img" aria-label="Vier Formen der Bündelung: Sendungsverdichtung, Tourenverdichtung, Knotenpunktsystem und Ringsystem">{{defs}}
    <line x1="210" y1="6" x2="210" y2="312" class="dg-l dg-d" style="opacity:.45"/>
    <line x1="6" y1="152" x2="414" y2="152" class="dg-l dg-d" style="opacity:.45"/>
    ${T(102, 16, "Sendungsverdichtung", "dg-t")}${bA}${T(102, 138, "viele Sendungen → ein Hauptlauf")}
    ${T(317, 16, "Tourenverdichtung", "dg-t")}${bB}${T(317, 138, "mehr Stopps auf engem Raum")}
    ${T(102, 176, "Knotenpunktsystem", "dg-t")}${bC}${T(102, 310, "alles läuft über einen Knoten")}
    ${T(317, 176, "Ringsystem", "dg-t")}${bD}${T(317, 310, "Ladung für alle Folgestationen")}
  </svg>`;

  // Die Ladeeinheit wird zum Kunden hin immer kleiner
  const SVG_LADE = `<svg viewBox="0 0 420 140" role="img" aria-label="Container, Palette, Paket und Tüte: Die Ladeeinheit wird zum Kunden hin immer kleiner">{{defs}}
    ${box(4, 24, 132, 80, "Container", "Seeschiff")}
    ${box(160, 44, 92, 60, "Palette", "Lager")}
    ${box(276, 60, 70, 44, "Paket", "Sprinter")}
    ${box(366, 66, 50, 38, "Tüte", "Kunde", true)}
    <line x1="138" y1="92" x2="155" y2="92" class="dg-lp" marker-end="url(#ahp)"/>
    <line x1="254" y1="92" x2="271" y2="92" class="dg-lp" marker-end="url(#ahp)"/>
    <line x1="348" y1="92" x2="362" y2="92" class="dg-lp" marker-end="url(#ahp)"/>
    ${T(210, 130, "Je näher am Kunden, desto kleiner die Einheit")}
  </svg>`;

  // ---------- Lektionen ----------
  Object.assign(window.LESSONS, {
    "logistik/l-begriff": {
      title: "Was ist Logistik? 7 R, Kernaufgaben & Logistik vs. SCM",
      min: 8,
      goals: [
        "Die 7 R der Logistik aufzählen und an einem Beispiel erklären",
        "Transport, Lagerung und Umschlag als Raum-, Zeit- und Mengenüberbrückung erklären",
        "Logistik und Supply Chain Management sauber abgrenzen",
        "Die Zielkonflikte Service vs. Kosten und Effizienz vs. Resilienz erklären",
        "Die Entwicklungsstufen von der TUL-Logistik bis zur VUCA-/BANI-Welt ordnen"
      ],
      s: [
        { t: "intro", x: "Du bestellst abends ein Ladekabel – am nächsten Tag liegt es vor deiner Tür. Damit das klappt, muss **alles zusammenpassen**: das richtige Kabel, in der richtigen Menge, zur richtigen Zeit, an der richtigen Adresse. Genau das ist Logistik. Diese Lektion legt die **Grundbegriffe für das ganze Fach**." },
        { t: "cards", h: "Die 7 R der Logistik – am Ladekabel erklärt", items: [
          ["i:package", "Richtiges Produkt", "USB-C – nicht Lightning"],
          ["i:boxes", "Richtige Menge", "1 Kabel – nicht 10"],
          ["i:clock", "Richtige Zeit", "morgen – nicht in 2 Wochen"],
          ["i:map-pin", "Richtiger Ort", "deine Adresse – nicht beim Nachbarn"],
          ["i:coins", "Richtige Kosten", "Versand nicht teurer als das Kabel"],
          ["i:smartphone", "Richtige Informationen", "Sendungsverfolgung, Lieferavis"],
          ["i:badge-check", "Richtige Qualität", "unbeschädigt und funktionsfähig"]
        ], cap: "Die Grundidee stammt von **Plowman (1964)**: Ein Empfangspunkt soll gemäß seinem Bedarf mit dem richtigen Produkt, im richtigen Zustand, zur richtigen Zeit, am richtigen Ort zu **minimalen Kosten** versorgt werden." },
        { t: "table", h: "Die drei Kernaufgaben – und was sie „überbrücken“", head: ["Aufgabe", "Überbrückt …", "Beispiel"], rows: [
          ["Transport", "den **Raum**", "Das Kabel fährt vom Lager in Leipzig nach Mannheim"],
          ["Lagerung", "die **Zeit**", "Weihnachtsware liegt ab September bereit"],
          ["Kommissionierung / Umschlag", "die **Menge & Anordnung**", "Eine Palette mit 500 Kabeln wird in Einzelpakete aufgeteilt"]
        ], cap: "Weitere typische Aufgaben (deine Notizen): TUL, Bestandsmanagement, Auftragsabwicklung, Verpackung/Kommissionierung, Logistiknetzwerk und Steuerung von 3PL-Dienstleistern." },
        { t: "merke", x: "**Transport = Raum · Lagerung = Zeit · Umschlag/Kommissionierung = Menge & Anordnung.**\nEin **logistisches Netzwerk** besteht aus **Knoten** (z. B. Lager) und **Kanten** (Transportwege)." },
        { t: "text", h: "Drei Definitionen – ein gemeinsamer Kern", x: "• **Christopher (2016):** Logistik ist die Planung, Steuerung, Realisierung und Kontrolle von **Material- und Informationsflüssen**.\n• **CSCMP:** Logistikmanagement ist der **Teil des SCM**, der den Vorwärts- und Rückfluss sowie die Lagerung von Gütern, Dienstleistungen und Informationen vom Ursprungs- bis zum Verbrauchspunkt plant, umsetzt und steuert – um **Kundenanforderungen** zu erfüllen.\n• **Plowman (1964):** siehe die 7 R.\n\nGemeinsam ist allen: Es geht um **Flüsse** (Material + Information), um **Planen und Steuern** und um den **Kunden**." },
        { t: "svg", h: "Schaubild: Logistik und SCM entlang der Kette", svg: SVG_SCM, cap: "Logistik schaut meist vom **eigenen (fokalen) Unternehmen** aus. SCM koordiniert die **ganze Kette** vom Rohstoff bis zum Endkunden – über alle drei Flüsse." },
        { t: "bal", h: "Logistik vs. Supply Chain Management", l: ["Logistik", ["steuert die **logistischen Flüsse**: Transport, Lager, Umschlag, Bestände, Auftragsabwicklung", "meist aus Sicht des **eigenen (fokalen) Unternehmens**", "operativ, taktisch und strategisch", "interne Bereiche + **direkte** Logistikpartner"]], r: ["Supply Chain Management", ["**integriert und koordiniert** die gesamte Kette", "**unternehmensübergreifend** über mehrere Stufen", "stärker strategisch, integrativ, systemisch", "Lieferanten, Dienstleister, Handel und Kunden"]] },
        { t: "merke", h: "Deine Notiz aus der Vorlesung", x: "**Logistik koordiniert im Unternehmen die logistische Kette – SCM die gesamte Kette.**\nBeide koordinieren drei Flüsse: **Güter, Informationen, Geld**." },
        { t: "bal", h: "Der Zielkonflikt: Service vs. Kosten", l: ["Logistikservice = marktgerechte Leistung", ["Lieferzeit", "Lieferqualität", "Lieferflexibilität", "Lieferbereitschaft"]], r: ["Logistikkosten = minimaler Aufwand", ["Bestände", "Handling", "Transport", "Systeme"]], cap: "**Mehr Service kostet mehr.** Ziel ist nicht der maximale, sondern der **marktgerechte** Service zu vertretbaren Kosten – die Waage muss ausbalanciert werden." },
        { t: "ex", h: "Effizienz vs. Verfügbarkeit (Resilienz)", x: "Ein Händler will sparen und hält statt 10 Handys nur noch **1 Handy** auf Lager. Solange alles läuft, spart das Lagerkosten. Fällt aber eine Lieferung aus (Streik, blockierter Kanal), ist das Regal leer – die Kunden gehen zur Konkurrenz.\n➜ **Zu viel Effizienz macht verwundbar.** Just-in-Time ist nicht krisensicher." },
        { t: "cards", h: "Was bringt erfolgreiche Logistik?", items: [
          ["i:timer", "Effizienz", "Zeit und Kosten sparen"],
          ["i:trending-down", "Kostenreduktion", "Bestände und Wege optimieren"],
          ["i:smile", "Kundenzufriedenheit", "pünktliche Lieferung, Kontrolle über die Lieferkette"]
        ], cap: "Erfolgsfaktoren seit den Ursprüngen der Logistik: Kommunikation, Infrastruktur, Organisation, Transport, Warenarten, Verkehrsträger." },
        { t: "flow", h: "Entwicklungsstufen der Logistik", steps: [
          ["1960er: TUL-Logistik", "Transport, Umschlag, Lagerung als **einzelne** Funktionen"],
          ["1970/80er: Koordination", "Funktionen integrieren, **7 R**, Kundenbedürfnisse"],
          ["1990er: Fließsysteme / SCM", "ganzes **Netzwerk**, **Pull**-Logik"],
          ["2000er: globale Netzwerke", "AutoID, Automatisierung, Daten"],
          ["Heute: VUCA & BANI", "Digitalisierung, Nachhaltigkeit, De-/Globalisierung, Demografie"]
        ], cap: "Roter Faden: von der **einzelnen Funktion** über die **Koordination** zur **ganzen Kette** und zum **globalen Netzwerk**." },
        { t: "table", h: "VUCA und BANI – die Welt, in der Logistik heute arbeitet", head: ["", "VUCA", "BANI"], rows: [
          ["1", "**V**olatility – volatil", "**B**rittle – brüchig"],
          ["2", "**U**ncertainty – unsicher", "**A**nxious – ängstlich"],
          ["3", "**C**omplexity – komplex", "**N**on-linear – nicht-linear"],
          ["4", "**A**mbiguity – mehrdeutig", "**I**ncomprehensible – unbegreiflich"]
        ], cap: "Folge: Supply Chains müssen heute **resilient** (widerstandsfähig) sein – nicht nur effizient." },
        { t: "check", q: "Ein Lager hält Weihnachtsartikel von September bis Dezember bereit. Was **überbrückt** es?", o: ["Die Zeit", "Den Raum", "Die Menge", "Den Preis"], why: "Lagerung = **Zeitüberbrückung**. Transport überbrückt den Raum, Kommissionierung/Umschlag verändert Menge und Anordnung." },
        { t: "check", q: "Was unterscheidet das **SCM** von der Logistik?", o: ["Es koordiniert mehrere Unternehmen", "Es betrifft nur Lkw-Transporte", "Es ist rein operativ und kurzfristig", "Es gilt nur in einer Abteilung"], why: "SCM ist **unternehmensübergreifend**: Es integriert Lieferanten, Dienstleister, Handel und Kunden über mehrere Stufen. Logistik schaut meist vom eigenen Unternehmen aus." },
        { t: "check", q: "Was gehört zum **Logistikservice** – und nicht zu den Logistikkosten?", o: ["Lieferflexibilität", "Bestände", "Handling", "Systeme"], why: "Service = Lieferzeit, Lieferqualität, Lieferflexibilität, Lieferbereitschaft. Bestände, Handling, Transport und Systeme sind **Kosten**." },
        { t: "check", q: "In welchem Jahrzehnt rückte die **Fließsystemlogistik / SCM** in den Fokus?", o: ["1990er", "1960er", "1970/80er", "2000er"], why: "1960er TUL → 1970/80er Koordination → **1990er Fließsysteme/SCM** → 2000er globale Netzwerke → heute VUCA/BANI." }
      ]
    },

    "logistik/l-markt": {
      title: "Logistikwirtschaft: Zahlen, Segmente & Standort Deutschland",
      min: 7,
      goals: [
        "Die Größe der Logistik in Deutschland nennen (331 Mrd. €, Rang 3, 3,35 Mio. Beschäftigte)",
        "Erklären, warum man von **Logistikkosten** und nicht von Umsatz spricht",
        "Die vier Gründe für den Logistikstandort Deutschland nennen",
        "Die Marktsegmente nach Folie 21 einordnen – inkl. Klausurfrage KEP"
      ],
      s: [
        { t: "intro", x: "Logistik ist kein Nischenthema: Mit rund **331 Mrd. €** ist sie der **drittgrößte Wirtschaftsbereich Deutschlands**. In dieser Lektion lernst du die wichtigsten Zahlen – und die typische **Prüfungsfalle** dazu." },
        { t: "cards", h: "Die Logistik in Zahlen", items: [
          ["i:euro", "≈ 331 Mrd. €", "Logistikvolumen Deutschland 2024 (Prognose) – **drittgrößter** Wirtschaftsbereich"],
          ["i:users", "≈ 3,35 Mio.", "Beschäftigte in der Logistik (2023)"],
          ["i:percent", "5–10 %", "Anteil der Logistikkosten an den Gesamtkosten eines Unternehmens"],
          ["i:split", "≈ 50 / 50", "Eigenleistung (insourced) vs. extern vergeben (outsourced)"]
        ] },
        { t: "bal", h: "Woraus die 331 Mrd. € bestehen", mid: "+", l: ["Eigenleistung ≈ 50 % (insourced)", ["Industrie & Handel machen es **selbst**", "eigener Lagerbetrieb, innerbetrieblicher Materialfluss", "wird **nicht verkauft** → Kosten, aber kein Umsatz"]], r: ["Extern vergeben ≈ 50 % (outsourced)", ["Logistikdienstleister übernehmen", "Spedition, Transport, Paketdienst, Kontraktlogistik", "wird verkauft → **Umsatz** der Dienstleister"]], cap: "Zusammen = **331 Mrd. € Logistikvolumen**. Achtung: In **VBL 1** stand **≈ 40 % outsourced / 60 % insourced**. Merk dir, aus welcher Vorlesung welche Zahl stammt." },
        { t: "merke", h: "Prüfungsfalle: Kosten, nicht Umsatz", x: "Die 331 Mrd. € heißen **Logistikkosten** (bzw. Logistikvolumen) – **nicht** Logistikumsatz. Grund: Etwa die Hälfte erbringen Industrie und Handel **selbst**. Das wird nicht verkauft und ist deshalb kein Umsatz." },
        { t: "cards", h: "Warum Deutschland ein Logistikland ist – 4 Gründe", items: [
          ["i:wallet", "1. Hohe Kaufkraft", "85 Mio. Einwohner – bevölkerungsreichstes EU-Land"],
          ["i:map-pin", "2. Zentrale Lage", "Transitland Nord–Süd und West–Ost, Seehäfen"],
          ["i:globe", "3. Globale Lieferketten", "Exportnation mit starker Handelsverflechtung"],
          ["i:shield-check", "4. Effizienz & Zuverlässigkeit", "Top 5 im **Logistics Performance Index** der Weltbank"]
        ], cap: "Wichtige Seehäfen: **Hamburg, Bremerhaven, Wilhelmshaven** – auch für Ost- und Südosteuropa, weil besser vernetzt als die Mittelmeerhäfen. Eselsbrücke **K-L-G-E**: Kaufkraft, Lage, Globale Ketten, Effizienz." },
        { t: "tree", h: "Vier Produktionstypen der Logistik", root: "Logistikdienstleistungen", kids: [
          ["Ladungsverkehre", ["ganze Lkw-Ladungen (FTL)", "direkt von A nach B"]],
          ["Stückgutverkehr", ["kleinere Sendungen", "über Umschlag-Netzwerke"]],
          ["Paketdienste", ["Kurier, Express, Paket (KEP)", "standardisierte Pakete"]],
          ["Kontraktlogistik", ["langfristige Verträge", "ganze Prozesse inkl. Lager"]]
        ], cap: "Auf Folie 21 werden die Marktsegmente außerdem in **drei Gruppen** eingeteilt: internationale Transport-/Logistiksysteme · Bulk- und Direktladungsverkehre · handlingsbedürftige Industrie- und Konsumgüterlogistik." },
        { t: "table", h: "Marktsegmente Deutschland (Folie 21, Fraunhofer IIS)", head: ["Segment", "Volumen"], rows: [
          ["Kontraktlogistik", "≈ 80 Mrd. € – **größtes Segment** (davon ≈ 22,5 Mrd. € outsourced)"],
          ["KMU-Inhouse-Logistik", "≈ 44 Mrd. €"],
          ["Allgemeiner Ladungsverkehr (FTL)", "≈ 36 Mrd. €"],
          ["Globale Luft- & Seefracht", "≈ 33 Mrd. €"],
          ["KEP-Dienste", "≈ 27,4 Mrd. € – ⭐ **Klausurfrage** (davon 26,0 Mrd. € outsourced)"],
          ["Ladungsverkehr mit Spezialequipment", "≈ 20,1 Mrd. €"],
          ["Massengut (Bulk)", "≈ 16,5 Mrd. €"],
          ["Terminal, Lager, Mehrwertdienste", "≈ 15 Mrd. €"],
          ["Stückgut-Netzwerke (LTL)", "≈ 12 Mrd. €"],
          ["Spezielle Stückgüter", "≈ 10 Mrd. €"]
        ], cap: "Nicht jede Zahl muss sitzen – aber **Kontraktlogistik (größtes Segment)** und **KEP (27,4 Mrd. €)** solltest du sicher wissen. Dein Notiz-Tipp: Folie 21 nochmal ansehen." },
        { t: "ex", h: "Klausurfrage aus deinen Notizen", x: "„Wie viel Umsatz machen Logistikdienstleister im **KEP-Bereich**?“\n➜ **ca. 27,4 Mrd. €** (Marktsegmente Deutschland 2021, Fraunhofer IIS), davon **26,0 Mrd. € outsourced**.\nKEP = **K**urier, **E**xpress, **P**aket." },
        { t: "check", q: "Wie groß ist das Logistikvolumen in Deutschland (2024) ungefähr?", o: ["≈ 331 Mrd. €", "≈ 131 Mrd. €", "≈ 27,4 Mrd. €", "≈ 80 Mrd. €"], why: "≈ **331 Mrd. €** – drittgrößter Wirtschaftsbereich. 131 Mrd. € ist der Branchenumsatz aus VBL 1, 27,4 Mrd. € der KEP-Markt, 80 Mrd. € die Kontraktlogistik." },
        { t: "check", q: "Warum spricht man bei den 331 Mrd. € von **Kosten** statt von Umsatz?", o: ["Weil etwa die Hälfte Eigenleistung ist", "Weil Dienstleister keinen Gewinn machen", "Weil nur Auslandstransporte zählen", "Weil die Mehrwertsteuer enthalten ist"], why: "Industrie und Handel erbringen rund die Hälfte **selbst** (eigene Lager, innerbetrieblicher Transport). Das wird nicht verkauft – also Kosten, aber kein Umsatz." },
        { t: "check", q: "Welches ist laut Folie 21 das **größte** Marktsegment?", o: ["Kontraktlogistik", "KEP-Dienste", "Stückgut-Netzwerke", "Massengut (Bulk)"], why: "**Kontraktlogistik** mit ≈ 80 Mrd. €. KEP liegt bei ≈ 27,4 Mrd. €." },
        { t: "check", q: "Was ist **kein** Grund für Deutschlands logistische Bedeutung?", o: ["Niedrige Löhne", "Hohe Kaufkraft", "Zentrale Lage in Europa", "Effizienz & Zuverlässigkeit"], why: "Die vier Gründe: Kaufkraft, zentrale Lage, globale Lieferketten, Effizienz & Zuverlässigkeit. Niedrige Löhne gehören **nicht** dazu." }
      ]
    },

    "logistik/l-konzeption": {
      title: "Logistiksysteme & Logistikkonzeption: in Systemen denken",
      min: 11,
      goals: [
        "Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik unterscheiden",
        "Logistikprozesse den Gütertransformationen zuordnen",
        "Die drei Informationsflüsse (t0, t1, t2) erklären",
        "Ein- und mehrstufige Systeme vergleichen und Knoten bewerten",
        "Strategische, taktische und operative Entscheidungen einordnen",
        "System-, Fluss- und Querschnittsdenken erklären – inkl. Trade-offs, Servicekennzahlen und Beständen"
      ],
      s: [
        { t: "intro", x: "Ein Autohersteller bekommt Reifen vom Zulieferer, baut Autos, liefert sie an Händler – und nimmt Altreifen zurück. An jeder Stelle steckt Logistik. Diese Lektion zeigt dir, wie man das als **ein zusammenhängendes System** denkt – und warum man nie nur einen Teil optimieren darf." },
        { t: "flow", h: "Die vier funktionalen Logistiksysteme (Sicht eines Herstellers)", steps: [
          ["Beschaffungs" + SH + "logistik", "vom Lieferanten bis zum Wareneingang / Rohmateriallager", "Beschaffungsmarkt"],
          ["Produktions" + SH + "logistik", "Materialfluss **innerhalb** der Produktion"],
          ["Distributions" + SH + "logistik", "vom Fertigwarenlager bis zum Kunden", "Absatzmarkt"],
          ["Entsorgungs" + SH + "logistik", "Rückflüsse: Retouren, Verpackungen, Abfälle, Recycling", "Reverse Logistics"]
        ], cap: "Am Auto: Reifen anliefern (**Beschaffung**) → Reifen ans Band bringen (**Produktion**) → fertiges Auto zum Händler (**Distribution**) → Altreifen zurücknehmen (**Entsorgung**)." },
        { t: "table", h: "Was Logistikprozesse mit dem Gut machen (Gütertransformation)", head: ["Prozess", "Ändert …", "Beispiel"], rows: [
          ["Lagern", "die **Zeit**", "Winterreifen von Juli bis Oktober lagern"],
          ["Transportieren", "den **Raum**", "Reifen von Hannover nach München fahren"],
          ["Umschlagen: zusammenfassen / auflösen", "die **Menge**", "50 Kartons zu einer Palette bündeln"],
          ["Umschlagen: sortieren", "die **Sorte**", "gemischte Sendungen nach Zielregion trennen"],
          ["Verpacken, Signieren", "die **TUL-Eigenschaften**", "Karton + Etikett → stapelbar und scannbar"],
          ["Aufträge übermitteln / bearbeiten", "die **logistische Determiniertheit**", "Die Ware wird einem konkreten Kunden zugeordnet"]
        ], cap: "**Determiniertheit** = wie genau schon feststeht, **wohin und für wen** die Ware bestimmt ist." },
        { t: "svg", h: "Drei Informationsflüsse – vor, mit und nach der Ware", svg: SVG_INFO, cap: "Güter, Informationen und Zahlungen laufen **nicht denselben Weg**: Güter fließen zum Kunden, Zahlungen **entgegen** dem Güterstrom, Informationen (Bestellung, Status, Avis) in **beide Richtungen**." },
        { t: "svg", h: "Einstufig vs. mehrstufig", svg: SVG_STUFEN, cap: "L = Lieferant · E = Empfänger · K = Knoten. **Mehrstufig** heißt: indirekter Fluss über Knoten – als **Auflösungspunkt** (break-bulk point) oder **Sammelpunkt** (consolidation point). **Kombiniert** = direkte und indirekte Flüsse gemischt." },
        { t: "bal", h: "Lohnt sich ein Knoten?", l: ["Nachteil", ["Knoten **kosten Geld**: Umschlag, Lagerung, Kapitalbindung"]], r: ["Vorteile", ["**Bündelung** (z. B. Sammelgut-Hauptlauf, Kombinierter Verkehr)", "schnelle Bedarfsbefriedigung – die Ware ist **nah am Kunden**", "**Sortimentsbildung** (Kommissionierung im Handel)"]] },
        { t: "table", h: "Drei Planungsebenen", head: ["Ebene", "Leitfrage", "Beispiele"], rows: [
          ["Strategisch (langfristig)", "Welche **Struktur** bauen wir?", "Systemlieferanten wählen, Layoutplanung, **Standort** eines Auslieferungslagers, Make-or-buy der Entsorgung"],
          ["Taktisch (mittelfristig)", "Wie **nutzen** wir die Strukturen?", "Prozesskette optimieren, Transportmittel wählen, **Serviceniveau** festlegen, Umschlagpunkte bestimmen"],
          ["Operativ (kurzfristig)", "Was tun wir mit den **heutigen** Aufträgen?", "Feinabruf, Transportaufträge auslösen, kurzfristige **Tourenplanung**, Demontagesteuerung"]
        ] },
        { t: "cards", h: "Die Logistikkonzeption: drei Denkweisen", items: [
          ["i:network", "Systemdenken", "das **Gesamtsystem** optimieren, nicht einzelne Teile → Gesamtkostendenken"],
          ["i:waypoints", "Flussdenken", "**durchgängiger** Güter- und Informationsfluss ohne Wartezeiten"],
          ["i:layers", "Querschnitts" + SH + "funktions" + SH + "denken", "Logistik durchdringt **alle Bereiche** – Schnittstellen gemeinsam gestalten"]
        ] },
        { t: "ex", h: "Gesamtkostendenken: das Ersatzteil-Beispiel", x: "Ein Maschinenbauer verschickt Ersatzteile per **Luftfracht**. Der Transport ist teuer – dafür braucht er in den Ländern **kaum Lagerbestand**, weil jedes Teil in 1–2 Tagen da ist. Insgesamt kann das **günstiger** sein als überall große Lager.\n➜ Wer nur auf die Transportkosten schaut, entscheidet falsch: **Kosten sinken in einem Teilsystem und steigen in einem anderen (Trade-off).**" },
        { t: "table", h: "Typische Trade-offs (Zielkonflikte)", head: ["Senkst du …", "… steigen oft"], rows: [
          ["Verpackungskosten", "Kosten durch Transportschäden"],
          ["Auftragsabwicklungskosten", "Transportkosten (schlechtere Routenplanung)"],
          ["Lagerbestandskosten", "Produktionskosten (kleinere Lose, öfter umrüsten)"],
          ["Lagerbestandskosten", "Einkaufskosten (häufigere, kleinere Bestellungen)"]
        ] },
        { t: "table", h: "Logistikservice messbar machen", head: ["Servicegröße", "Bedeutung", "Kennzahl · Hebel"], rows: [
          ["Lieferzeit", "von der Auftragserteilung bis zum Wareneingang beim Kunden", "Stunden/Tage · Auftragsbearbeitung, Transport, Lagerstandort"],
          ["Lieferzuverlässigkeit", "Wahrscheinlichkeit, die Lieferzeit einzuhalten", "**Lieferbereitschaftsgrad** (%) · Bestandsführung"],
          ["Lieferqualität", "Die Ware kommt so an, wie der Kunde sie wollte", "**Retourenquote** (%) · Verpackung, Transport, Kommissionierung"],
          ["Lieferflexibilität", "Liefermodalitäten an Kundenwünsche anpassen", "schwer messbar"]
        ] },
        { t: "text", h: "Flussdenken: Bestände unterbrechen den Fluss", x: "Beim Flussdenken betrachtet man den Güter- und Informationsfluss **durchgängig** über die ganze Kette. Wartezeiten, große Lose und schlechte Übergaben **verlängern die Durchlaufzeit**. Bestände gelten deshalb als **unerwünschte Unterbrechung** des Materialflusses. Ziel: ein möglichst **ununterbrochener** Güterfluss." },
        { t: "svg", h: "Bestände wirken wie Wasser über Felsen", svg: SVG_FELSEN, cap: "Hohe Bestände lassen alles glatt aussehen. Senkt man sie, tauchen die Probleme auf: **störanfällige Prozesse, unabgestimmte Kapazitäten, mangelnde Flexibilität, Ausschuss, mangelnde Liefertreue**." },
        { t: "bal", h: "Bestände: Freund oder Feind?", l: ["Bestände ermöglichen …", ["reibungslose Produktion", "prompte Lieferung", "Überbrückung von Störungen", "wirtschaftliche Fertigung, konstante Auslastung"]], r: ["Bestände verdecken …", ["störanfällige Prozesse", "unabgestimmte Kapazitäten", "mangelnde Flexibilität", "Ausschuss, mangelnde Liefertreue"]] },
        { t: "merke", h: "Bretzke: Bestände sind nicht „böse“", x: "Prof. Bretzke sieht Bestände als **Working Capital**: Push bei Produkten mit **niedriger Wertdichte**, **Sicherheitsbestände** gegen Versorgungsrisiken – und Transportbündelung ist sogar **Green Logistics**. Steigende Transportpreise erzwingen eine **neue Balance** zwischen Bestands- und Transportkosten." },
        { t: "text", h: "Querschnittsfunktionsdenken", x: "Logistik ist keine Insel: Einkauf, Produktion, Vertrieb und Logistik haben oft **konkurrierende Ziele** – der Einkauf will große, günstige Mengen, die Logistik niedrige Bestände. Trotzdem müssen **bereichsübergreifend optimale** Entscheidungen getroffen werden. Dafür müssen alle die **gegenseitigen Abhängigkeiten** akzeptieren." },
        { t: "check", q: "Die Standortwahl für ein neues Auslieferungslager ist eine … Entscheidung.", o: ["strategische", "taktische", "operative", "normative"], why: "Die Standortwahl legt die **Struktur** für viele Jahre fest → **strategisch**. Transportmittel wählen wäre taktisch, die Tourenplanung von morgen operativ." },
        { t: "check", q: "Ein **Lieferavis** kommt beim Kunden an, **bevor** die Ware da ist. Welcher Informationsfluss ist das?", o: ["vorauseilend (t0)", "begleitend (t1)", "nachfolgend (t2)", "rückläufig (t3)"], why: "Vor der Ware = **vorauseilend (t0)**. Der Lieferschein reist mit der Ware (t1), die Rechnung kommt danach (t2)." },
        { t: "check", q: "Mit welcher Kennzahl misst man die **Lieferzuverlässigkeit**?", o: ["Lieferbereitschaftsgrad", "Retourenquote", "Umschlagshäufigkeit", "Durchlaufzeit"], why: "Lieferzuverlässigkeit → **Lieferbereitschaftsgrad** (%). Die Retourenquote misst die Lieferqualität." },
        { t: "check", q: "3 Lieferanten beliefern 3 Kunden über **ein** Zentrallager. Wie viele Verbindungen braucht man?", o: ["6", "9", "3", "12"], why: "3 Lieferanten → Lager (3) + Lager → 3 Kunden (3) = **6**. Direkt wären es 3 × 3 = **9**." },
        { t: "check", q: "Ersatzteile per teurer Luftfracht statt großer Lager in jedem Land – welche Denkweise steckt dahinter?", o: ["Systemdenken", "Flussdenken", "Push-Prinzip", "Werkverkehr"], why: "**System- bzw. Gesamtkostendenken**: Der Transport wird teurer, aber der Bestand sinkt stark – entscheidend sind die **Gesamtkosten**." }
      ]
    },

    "logistik/l-prinzipien": {
      title: "Gestaltungsprinzipien: Bullwhip, Ausgleich, Postponement & Bündelung",
      min: 11,
      goals: [
        "Die fünf Gestaltungsprinzipien nach Ihde/Janz nennen",
        "Den Bullwhip-Effekt erklären – und wie enge Kopplung ihn bremst",
        "Statistische Ausgleichseffekte an einem Zahlenbeispiel erklären",
        "Postponement am Notebook-Beispiel erklären",
        "Vier Bündelungsformen und zwei Ebenen der Standardisierung unterscheiden",
        "Eine PESTEL-Analyse für die Logistik aufstellen"
      ],
      s: [
        { t: "intro", x: "Logistik kämpft immer gegen zwei Gegner: **Unsicherheit** (Wie viel wird morgen bestellt?) und **Komplexität** (Tausende Varianten, Partner, Wege). Die fünf Gestaltungsprinzipien sind die **Werkzeuge** dagegen. Ziel: Kosten minimieren und Leistung maximieren." },
        { t: "cards", h: "Die fünf Gestaltungsprinzipien (Ihde/Janz)", items: [
          ["i:link", "1. Enge Kopplung", "Infos früh an **alle** Stufen weitergeben"],
          ["i:scale", "2. Statistischer Ausgleich", "Schwankungen gleichen sich beim Zusammenfassen aus"],
          ["i:hourglass", "3. Postponement", "Varianten **so spät wie möglich** bilden"],
          ["i:boxes", "4. Bündelung", "Güter gemeinsam transportieren → volle Fahrzeuge"],
          ["i:blocks", "5. Standardisierung", "einheitliche Paletten, Daten und Abläufe"]
        ], cap: "Merksatz: „**K**ommt **A**lles **P**ünktlich **B**eim **S**pediteur an?“ → **K**opplung, **A**usgleich, **P**ostponement, **B**ündelung, **S**tandardisierung." },
        { t: "svg", h: "Der Bullwhip-Effekt (Peitscheneffekt)", svg: SVG_BULLWHIP, cap: "Die Endkunden kaufen fast gleichmäßig – beim Hersteller kommen **riesige Schwankungen** an. Wie bei einer Peitsche: kleine Handbewegung, großer Ausschlag am Ende." },
        { t: "text", h: "Warum schaukelt sich das auf?", x: "Die Endkunden kaufen diese Woche 10 % mehr. Der Händler sieht nur seine Verkäufe und bestellt **sicherheitshalber noch mehr**. Der Großhandel sieht diese große Bestellung und legt **noch einmal etwas drauf**. Beim Hersteller kommt eine Schwankung an, die es beim Kunden **nie gab**.\n\n**Ursachen:**\n• falsche **Prognosen**\n• **Informationsasymmetrien** – jede Stufe sieht nur die Bestellung der nächsten Stufe\n• **Bündelbestellungen** (einmal im Monat eine große Bestellung)\n• **Preisschwankungen** (Aktionen → Hamsterkäufe)" },
        { t: "bal", h: "Lose vs. enge Kopplung", l: ["Lose Kopplung", ["an Abteilungen / Funktionen ausgerichtet", "Informationen kommen **verzögert** an", "→ hohe Puffer, Fehlmengen, lange Durchlaufzeiten"]], r: ["Enge Kopplung", ["**echte Nachfragedaten** gehen früh an alle vorgelagerten Stufen", "die Beschaffung reagiert früh auf Marktveränderungen", "→ **bremst den Bullwhip-Effekt**"]] },
        { t: "merke", h: "Gegenmittel gegen den Bullwhip-Effekt", x: "**Enge Kopplung**: Alle Stufen sehen die **echte Endkundennachfrage** – nicht nur die verzerrte Bestellung der Nachbarstufe. So sinken die Informationsasymmetrien und das Aufschaukeln wird gebremst." },
        { t: "ex", h: "Statistischer Ausgleich – ganz anschaulich", x: "Region Nord verkauft diese Woche **80 Stück mehr** als geplant, Region Süd **80 Stück weniger**.\n• **Zwei Regionallager:** Nord hat zu wenig, Süd hat zu viel – beide brauchen Sicherheitsbestand.\n• **Ein Zentrallager:** +80 und −80 heben sich auf – die Gesamtmenge stimmt genau.\n➜ Werden **unabhängige** Schwankungen zusammengefasst, gleichen sie sich teilweise aus (**Gesetz der großen Zahl**)." },
        { t: "formula", h: "Mit Zahlen: Wie viel Puffer spart das Zentrallager?", tex: R`\sigma_{A+B} = \sqrt{\sigma_A^2 + \sigma_B^2} = \sqrt{80^2 + 80^2} \approx 113 \;<\; 80 + 80 = 160`, items: [
          "σ = Standardabweichung = die typische Schwankung der Nachfrage",
          "Getrennt muss jedes Lager seine eigene Schwankung abpuffern: zusammen **160 Stück**",
          "Zentral reicht ein Puffer für **≈ 113 Stück** – rund **30 % weniger** Sicherheitsbestand",
          "Das gilt nur, wenn die Nachfragen **unabhängig** voneinander schwanken"
        ] },
        { t: "cards", h: "Wo nutzt man den Ausgleichseffekt?", items: [
          ["i:warehouse", "Zentralisierung von Lagern", "ein Zentrallager statt vieler Regionallager"],
          ["i:users", "Kapazitätspools", "Fahrzeuge oder Personal gemeinsam nutzen"],
          ["i:puzzle", "Gleichteile", "dasselbe Teil in vielen Produkten – z. B. eine Schraube für alle Modelle"]
        ] },
        { t: "flow", h: "Notebook ohne Postponement (Push – spekulativ)", steps: [
          ["Alle Varianten bauen", "jede Kombination aus Prozessor, Festplatte und Software **komplett** fertigen", "Variantenbildung"],
          ["Fertig lagern", "jede Variante liegt auf Lager"],
          ["Kunde bestellt", "hoffentlich ist seine Variante da", "OPP"],
          ["Ausliefern", "sonst Fehlmenge – oder Restbestände veralten"]
        ] },
        { t: "flow", h: "Notebook mit Postponement (Pull – reaktiv)", steps: [
          ["Basisgerät bauen", "ein **universelles** Gerät für alle Kunden"],
          ["Unfertig lagern", "nur **eine** Variante auf Lager"],
          ["Kunde bestellt", "jetzt steht fest, was er will", "OPP"],
          ["Fertigstellen", "Prozessor, Festplatte, Software **einbauen**", "Variantenbildung"],
          ["Ausliefern", "genau passend"]
        ] },
        { t: "merke", h: "Postponement in einem Satz", x: "Die **Variantenbildung** wird **nach hinten** verschoben – hinter den Kundenauftrag (**OPP** = Order Penetration Point / Variantenbestimmungspunkt). Folge: mehr **reaktive**, weniger **spekulative** Prozesse → weniger Sicherheitsbestand, weniger Fehlmengen, kein Veralterungsrisiko.\nEinsatz: Computer-, Auto- und Bekleidungsindustrie." },
        { t: "text", h: "Bündelung: Warum Auslastung alles ist", x: "Ein Lkw kostet fast gleich viel, egal ob er halb leer oder voll fährt – Transporte haben einen **hohen Fixkostenanteil**. Je mehr Ware er mitnimmt, desto günstiger wird jede einzelne Sendung (**Fixkostendegression**). Bündeln heißt: Güter **zeitlich oder räumlich** zusammenfassen und gemeinsam transportieren." },
        { t: "svg", h: "Vier Formen der Bündelung", svg: SVG_BUENDEL, cap: "D = Depot. Bei allen vier Formen geht es darum, **weniger, aber besser ausgelastete** Fahrzeuge einzusetzen." },
        { t: "table", h: "Die vier Bündelungsformen mit Beispielen", head: ["Form", "So funktioniert’s", "Beispiel"], rows: [
          ["Sendungsverdichtung", "Sendungen aus/in eine Region zusammenfassen und im Hauptlauf **gemeinsam** befördern", "Gebietsspediteur, Transportkooperation **Mars & Ferrero**"],
          ["Tourenverdichtung", "Verkehre mehrerer Versender zusammenlegen → **mehr Stopps** pro Gebiet, kürzere Wege", "Begegnungsverkehre in der Spedition"],
          ["Knotenpunktsysteme", "viele Relationen über **einen Knoten** → weniger, aber volle Fahrzeuge, höhere Frequenz", "Sammelgut-Hubs, Luftfracht"],
          ["Ringsysteme", "an jeder Station Ladung für **alle folgenden** Stationen → gegen **Unpaarigkeit**", "Round-the-World-Lines (Container)"]
        ] },
        { t: "bal", h: "Standardisierung auf zwei Ebenen", mid: "&", l: ["Materiell", ["**Ladehilfsmittel** (Europalette) → schnelleres Handling, Voraussetzung für Automatisierung", "**Verpackung** → einheitliche Güter", "**Teile / Baugruppen** → weniger Komplexität, Skalen- und Ausgleichseffekte"]], r: ["Immateriell", ["**Informationen**: einheitlich lesbar (**NVE** = Nummer der Versandeinheit) und leicht austauschbar (**EDIFACT**)", "**Abläufe**: präzise Daten für Kapazitätsplanung, Qualitätskontrolle, Benchmarking"]] },
        { t: "table", h: "PESTEL – das Umfeld der Logistik", head: ["Faktor", "Beispiele aus der Logistik"], rows: [
          ["**P**olitical", "Infrastrukturausbau, Förderprogramme"],
          ["**E**conomical", "E-Commerce-Wachstum, Protektionismus, Brexit"],
          ["**S**ocial", "**Fahrermangel**, demografischer Wandel, Urbanisierung"],
          ["**T**echnological", "Digitalisierung, autonomes Fahren, 3D-Druck"],
          ["**E**cological", "CO2-Fußabdruck, alternative Antriebe, Klimaziele"],
          ["**L**egal", "Mobilitätspaket, Lenk- und Ruhezeiten, Maut, Mindestlohn"]
        ], cap: "Mit PESTEL ordnest du **Trends von außen**. Typische Frage: „Ordne den Fahrermangel ein“ → **Social**." },
        { t: "check", q: "Nach einer Werbeaktion bestellt der Händler das **Dreifache**, obwohl die Kunden nur 10 % mehr kaufen. Welcher Effekt droht?", o: ["Bullwhip-Effekt", "Statistischer Ausgleich", "Postponement", "Vampireffekt"], why: "Die Bestellung ist größer als die echte Nachfrage – das schaukelt sich entlang der Kette auf: **Bullwhip-Effekt**." },
        { t: "check", q: "Was bremst den Bullwhip-Effekt am wirksamsten?", o: ["Echte Nachfragedaten für alle Stufen", "Seltenere, größere Sammelbestellungen", "Häufigere Preisaktionen im Handel", "Jede Stufe plant nur für sich selbst"], why: "**Enge Kopplung**: Sehen alle Stufen die echte Endkundennachfrage, verschwinden die Informationsasymmetrien. Sammelbestellungen und Preisaktionen sind sogar **Ursachen** des Effekts." },
        { t: "check", q: "Ein Hersteller legt 4 Regionallager zu **einem** Zentrallager zusammen. Welches Prinzip nutzt er?", o: ["Statistischer Ausgleich", "Postponement", "Tourenverdichtung", "Enge Kopplung"], why: "Die Schwankungen der Regionen gleichen sich im Zentrallager teilweise aus → **weniger Sicherheitsbestand**." },
        { t: "check", q: "Beim Postponement wird der Variantenbestimmungspunkt (OPP) …", o: ["nach hinten verschoben", "nach vorne verschoben", "ganz abgeschafft", "an den Lieferanten abgegeben"], why: "Die Variantenbildung rückt **hinter** den Kundenauftrag: erst bestellen, dann fertigstellen." },
        { t: "check", q: "Round-the-World-Lines in der Containerschifffahrt sind ein Beispiel für …", o: ["Ringsysteme", "Sendungsverdichtung", "Knotenpunktsysteme", "Tourenverdichtung"], why: "An jeder Station wird Ladung für alle folgenden Stationen aufgenommen → **Ringsystem**, das die Unpaarigkeit mindert." },
        { t: "check", q: "EDIFACT ist ein Beispiel für Standardisierung auf … Ebene.", o: ["immaterieller", "materieller", "strategischer", "ökologischer"], why: "EDIFACT ist ein **Datenstandard** → immateriell. Die Europalette wäre materiell." }
      ]
    },

    "logistik/l-lernfragen": {
      title: "Prüfungsvorbereitung: die Transportkette aus dem Film",
      min: 6,
      goals: [
        "Die Kette Samsung-Fabrik (Vietnam) → Endkunde (USA) mit Knoten und Verkehrsträgern beschreiben",
        "Erklären, warum die Ladeeinheit unterwegs immer kleiner wird",
        "Akteure, Probleme und Technologien aus dem Film nennen",
        "Die Leitfrage beantworten: Warum braucht die arbeitsteilige Weltwirtschaft SCM?"
      ],
      s: [
        { t: "intro", x: "Zu diesem Film gibt es **offizielle Lernfragen**: Ein Samsung-Gerät reist von einer Fabrik in **Vietnam** bis zu einem Kunden in den **USA**. Wenn du diese Kette mit Fachbegriffen erklären kannst, wendest du fast alles an, was du in Logistik gelernt hast." },
        { t: "flow", h: "Die Transportkette aus dem Film", steps: [
          ["Fabrik in Vietnam", "Samsung produziert", "Quelle"],
          ["Container" + SH + "terminal", "Vorlauf per Binnenschiff oder Lkw, dann Umschlag"],
          ["Seeschiff", "ca. **30 Tage** über den Pazifik", "Hauptlauf"],
          ["Terminal Los Angeles", "Umschlag vom Schiff auf den Lkw"],
          ["Umschlaglager & Logistik" + SH + "zentrum", "Container auflösen, lagern, kommissionieren"],
          ["Zustellung", "Ein Sprinter bringt das Paket zum Kunden", "Senke"]
        ] },
        { t: "svg", h: "Die Ladeeinheit wird immer kleiner", svg: SVG_LADE, cap: "**Container → Palette → Paket → Tüte.** Je näher am Kunden, desto kleiner die Einheit und desto mehr Stopps – deshalb ist die **letzte Meile** so teuer." },
        { t: "cards", h: "Wer macht mit?", items: [
          ["i:factory", "Hersteller", "Samsung mit Fabrik in Vietnam"],
          ["i:ship", "Reedereien", "Evergreen, MSC, Maersk"],
          ["i:container", "Terminal" + SH + "dienstleister", "Umschlag im Hafen"],
          ["i:compass", "Spedition / LDL", "z. B. CDL – organisiert den Weitertransport"],
          ["i:warehouse", "Amazon", "Händler & LDL: Fulfillment, Flex Delivery, Prime Air"],
          ["i:truck", "Paketdienste", "UPS, FedEx"]
        ], cap: "Amazon → Endkunde ist **B2C** (Business to Consumer)." },
        { t: "bal", h: "Probleme und Technologien aus dem Film", mid: "↔", l: ["Probleme globaler Lieferketten", ["Krisen, Konflikte, Pandemie", "**Kanal-Blockaden**, überlastete Häfen, Unwetter", "höhere Nachfrage als geplant", "Fahrer- und Fachkräftemangel, schlechte Arbeitsbedingungen, Inflation", "→ Lieferketten sind abhängig: **Just-in-Time ist nicht krisensicher**"]], r: ["Technologien & Innovationen", ["Sendungsverfolgung (**Track & Trace**)", "**Supply-Chain-Visibility**", "Containerkräne, Lagerroboter", "automatische Sortieranlagen, Förderbänder", "Navigation"]] },
        { t: "merke", h: "Leitfrage: Warum braucht die Weltwirtschaft SCM?", x: "Weil die Produktion über **viele Länder und Unternehmen** verteilt ist. Güter-, Informations- und Finanzflüsse müssen über **alle Stufen** koordiniert werden – sonst kommt die Ware nicht rechtzeitig, günstig und zuverlässig an. Ein einzelnes Unternehmen kann Abhängigkeiten und Störungen (z. B. eine Kanal-Blockade) **allein nicht beherrschen**." },
        { t: "text", h: "So beantwortest du die Lernfragen in der Klausur", x: "1. Die Kette mit **Fachbegriffen** beschreiben: Quelle, Vorlauf, Umschlag, Hauptlauf, Nachlauf, Senke\n2. **Verkehrsträger** nennen: Binnenschiff/Lkw, Seeschiff, Lkw, Sprinter\n3. **Ladeeinheiten** nennen: Container → Palette → Paket → Tüte\n4. **Akteure** zuordnen: Hersteller, Reederei, Terminal, Spedition, Händler, Paketdienst\n5. Mit einem **Problem und einer Lösung** abschließen – z. B. Kanal-Blockade → mehr Puffer und Visibility" },
        { t: "check", q: "Welcher Verkehrsträger übernimmt im Film den **Hauptlauf** Vietnam → USA?", o: ["Seeschiff (ca. 30 Tage)", "Frachtflugzeug (ca. 1 Tag)", "Güterzug (ca. 14 Tage)", "Lkw (ca. 5 Tage)"], why: "Der lange Hauptlauf über den Pazifik läuft per **Seeschiff im Container** – ca. 30 Tage." },
        { t: "check", q: "Warum ist Just-in-Time laut Film **nicht krisensicher**?", o: ["Ohne Puffer fehlt sofort Ware", "Container passen in kein Lager", "Schiffe fahren nur im Sommer", "Paketdienste fahren nur nachts"], why: "Just-in-Time arbeitet mit **minimalen Beständen**. Fällt eine Lieferung aus (Kanal-Blockade, Hafenstau), gibt es keinen Puffer." },
        { t: "check", q: "Amazon liefert an einen Privatkunden. Welche Beziehung ist das?", o: ["B2C", "B2B", "C2C", "B2G"], why: "**B**usiness **to** **C**onsumer – ein Unternehmen verkauft an einen Endverbraucher." }
      ]
    }
  });
})();
