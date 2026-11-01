/*
 * Lektionen VBL 1 – erst verstehen, dann üben.
 * Abschnittstypen: intro, text, cards, flow, table, matrix, bal, pyr, tree, stairs, svg, ex, merke, formula, check
 * check: o[0] ist immer die richtige Antwort (wird beim Anzeigen gemischt).
 * Icons in cards: "i:<lucide-name>" oder ein Emoji.
 */
(function () {
  window.LESSONS = window.LESSONS || {};

  // ---------- Schaubilder ----------
  const box = (x, y, w, h, title, sub, accent) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" class="${accent ? "dg-a" : "dg-b"}"/>` +
    `<text x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 5)}" text-anchor="middle" class="dg-t">${title}</text>` +
    (sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" class="dg-s">${sub}</text>` : "");

  const SVG_VERTRAEGE = `<svg viewBox="0 0 420 296" role="img" aria-label="Verträge und Warenfluss zwischen Verlader, Spediteur, Frachtführer und Empfänger">{{defs}}
    <line x1="122" y1="47" x2="296" y2="47" class="dg-lp" marker-end="url(#ahp)"/>
    <text x="209" y="38" text-anchor="middle" class="dg-at">Speditionsvertrag</text>
    <text x="209" y="64" text-anchor="middle" class="dg-s">§ 453 HGB</text>
    <line x1="352" y1="72" x2="352" y2="210" class="dg-lp" marker-end="url(#ahp)"/>
    <text x="344" y="136" text-anchor="end" class="dg-at">Frachtvertrag</text>
    <text x="344" y="152" text-anchor="end" class="dg-s">§ 407 HGB</text>
    <line x1="68" y1="74" x2="68" y2="210" class="dg-lp" marker-start="url(#ahp)" marker-end="url(#ahp)"/>
    <text x="76" y="136" class="dg-at">Kaufvertrag</text>
    <text x="76" y="152" class="dg-s">Ware ↔ Geld</text>
    <line x1="124" y1="72" x2="296" y2="212" class="dg-l dg-d" marker-end="url(#ah)"/>
    <text x="226" y="170" text-anchor="end" class="dg-s">Ware</text>
    <line x1="298" y1="237" x2="126" y2="237" class="dg-l dg-d" marker-end="url(#ah)"/>
    <text x="212" y="229" text-anchor="middle" class="dg-s">Ware wird abgeliefert</text>
    ${box(16, 24, 104, 46, "Verlader", "z. B. Nike")}
    ${box(300, 24, 104, 46, "Spediteur", "z. B. Schenker", true)}
    ${box(300, 214, 104, 46, "Frachtführer", "z. B. Willi Betz")}
    ${box(16, 214, 104, 46, "Empfänger", "z. B. Snipes")}
    <line x1="40" y1="281" x2="70" y2="281" class="dg-lp"/><text x="76" y="285" class="dg-s">Vertrag</text>
    <line x1="170" y1="281" x2="200" y2="281" class="dg-l dg-d"/><text x="206" y="285" class="dg-s">Weg der Ware</text>
  </svg>`;

  const SVG_NETZ = `<svg viewBox="0 0 420 160" role="img" aria-label="Quellen, Knoten und Senken eines Transportnetzes">{{defs}}
    <line x1="80" y1="45" x2="168" y2="76" class="dg-l" marker-end="url(#ah)"/>
    <line x1="80" y1="125" x2="168" y2="94" class="dg-l" marker-end="url(#ah)"/>
    <line x1="252" y1="76" x2="340" y2="45" class="dg-l" marker-end="url(#ah)"/>
    <line x1="252" y1="94" x2="340" y2="125" class="dg-l" marker-end="url(#ah)"/>
    <text x="118" y="48" text-anchor="middle" class="dg-at">Kante</text>
    ${box(8, 28, 72, 34, "Quelle")}
    ${box(8, 108, 72, 34, "Quelle")}
    ${box(170, 66, 80, 38, "Knoten", null, true)}
    <text x="210" y="124" text-anchor="middle" class="dg-s">z. B. Umschlaghalle</text>
    ${box(342, 28, 72, 34, "Senke")}
    ${box(342, 108, 72, 34, "Senke")}
  </svg>`;

  const SVG_FAHRZEUGE = `<svg viewBox="0 0 400 200" role="img" aria-label="Sattelzug und Gliederzug im Vergleich">
    <text x="10" y="18" class="dg-t">Sattelzug</text><text x="88" y="18" class="dg-s">16,50 m · 40 t · 33/34 Europaletten</text>
    <rect x="10" y="30" width="272" height="48" rx="6" class="dg-b"/>
    <text x="146" y="58" text-anchor="middle" class="dg-s">Auflieger · 13,6 m Ladelänge</text>
    <rect x="286" y="40" width="44" height="38" rx="6" class="dg-a"/>
    <circle cx="30" cy="86" r="7" class="dg-b"/><circle cx="48" cy="86" r="7" class="dg-b"/><circle cx="66" cy="86" r="7" class="dg-b"/>
    <circle cx="298" cy="86" r="7" class="dg-b"/><circle cx="320" cy="86" r="7" class="dg-b"/>
    <text x="10" y="120" class="dg-t">Gliederzug</text><text x="96" y="120" class="dg-s">18,75 m · 40 t · 38 Europaletten</text>
    <rect x="10" y="132" width="149" height="48" rx="6" class="dg-b"/>
    <text x="84" y="160" text-anchor="middle" class="dg-s">Wechselbrücke 7,45 m</text>
    <line x1="159" y1="164" x2="175" y2="164" class="dg-l"/>
    <rect x="175" y="132" width="149" height="48" rx="6" class="dg-b"/>
    <text x="249" y="160" text-anchor="middle" class="dg-s">Wechselbrücke 7,45 m</text>
    <rect x="328" y="142" width="44" height="38" rx="6" class="dg-a"/>
    <circle cx="36" cy="188" r="7" class="dg-b"/><circle cx="132" cy="188" r="7" class="dg-b"/>
    <circle cx="214" cy="188" r="7" class="dg-b"/><circle cx="300" cy="188" r="7" class="dg-b"/><circle cx="352" cy="188" r="7" class="dg-b"/>
  </svg>`;

  // Direktverkehr (jeder mit jedem) vs. Hub-and-Spoke
  const ring = (cx, cy, r) => [-90, -18, 54, 126, 198].map(a => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)]);
  const L5 = ring(105, 112, 70), R5 = ring(315, 112, 70);
  let direkt = "";
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) direkt += `<line x1="${L5[i][0].toFixed(1)}" y1="${L5[i][1].toFixed(1)}" x2="${L5[j][0].toFixed(1)}" y2="${L5[j][1].toFixed(1)}" class="dg-l"/>`;
  const hub = R5.map(([x, y]) => `<line x1="315" y1="112" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="dg-lp"/>`).join("");
  const dots = (pts) => pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12" class="dg-b"/>`).join("");
  const SVG_HUB = `<svg viewBox="0 0 420 222" role="img" aria-label="Direktverkehr mit 10 Linien im Vergleich zu Hub and Spoke mit 5 Linien">
    <text x="105" y="16" text-anchor="middle" class="dg-t">Direktverkehr</text>
    <text x="315" y="16" text-anchor="middle" class="dg-t">Hub and Spoke</text>
    ${direkt}${hub}${dots(L5)}${dots(R5)}
    <circle cx="315" cy="112" r="21" class="dg-a"/><text x="315" y="117" text-anchor="middle" class="dg-t">Hub</text>
    <text x="105" y="214" text-anchor="middle" class="dg-s">5 Partner · 10 Linien nötig</text>
    <text x="315" y="214" text-anchor="middle" class="dg-s">5 Partner · nur 5 Linien</text>
  </svg>`;

  const SVG_EWR = `<svg viewBox="0 0 420 166" role="img" aria-label="EU, EFTA und EWR">
    <path d="M190,30 V22 H410 V30" class="dg-lp"/><text x="300" y="15" text-anchor="middle" class="dg-at">EFTA</text>
    <rect x="8" y="38" width="298" height="120" rx="16" class="dg-l dg-d"/>
    <text x="22" y="58" class="dg-at">EWR</text>
    ${box(22, 70, 150, 74, "EU", "27 Staaten", true)}
    <rect x="186" y="70" width="108" height="74" rx="12" class="dg-b"/>
    <text x="240" y="96" text-anchor="middle" class="dg-s">Norwegen</text>
    <text x="240" y="112" text-anchor="middle" class="dg-s">Island</text>
    <text x="240" y="128" text-anchor="middle" class="dg-s">Liechtenstein</text>
    ${box(320, 70, 90, 74, "Schweiz", "nicht im EWR")}
  </svg>`;

  const row = (b, label, inner, note) => `<text x="8" y="${b + 24}" class="dg-t">${label}</text>${inner}<text x="262" y="${b + 54}" text-anchor="middle" class="dg-s">${note}</text>`;
  const SVG_EINSAETZE = `<svg viewBox="0 0 420 214" role="img" aria-label="Bilateral, Cross-Trade und Kabotage am Beispiel eines polnischen Lkw">{{defs}}
    ${row(10, "Bilateral",
      `${box(116, 10, 92, 36, "Polen", null, true)}${box(316, 10, 92, 36, "Deutschland")}
       <line x1="210" y1="22" x2="312" y2="22" class="dg-lp" marker-end="url(#ahp)"/>
       <line x1="312" y1="36" x2="212" y2="36" class="dg-l dg-d" marker-end="url(#ah)"/>`,
      "Heimatland ↔ Ausland (und zurück)")}
    ${row(80, "Cross-Trade",
      `${box(116, 80, 92, 36, "Deutschland")}${box(316, 80, 92, 36, "Frankreich")}
       <line x1="210" y1="98" x2="312" y2="98" class="dg-lp" marker-end="url(#ahp)"/>`,
      "zwischen zwei fremden Ländern")}
    ${row(150, "Kabotage",
      `<rect x="116" y="150" width="292" height="36" rx="12" class="dg-b"/>
       <text x="130" y="173" class="dg-s">München</text>
       <line x1="190" y1="168" x2="320" y2="168" class="dg-lp" marker-end="url(#ahp)"/>
       <text x="326" y="173" class="dg-s">Berlin</text>`,
      "innerhalb eines fremden Landes")}
  </svg>`;

  // ---------- Lektionen ----------
  Object.assign(window.LESSONS, {
    "vbl1/a-grundlagen": {
      title: "Wer macht was? Spediteur, Frachtführer & Verträge",
      min: 7,
      goals: [
        "Verlader, Spediteur, Frachtführer und Empfänger unterscheiden",
        "Die drei Verträge richtig zuordnen (Kaufvertrag, § 453, § 407 HGB)",
        "Erklären, warum Ware und Verträge verschiedene Wege gehen",
        "Die Pflichten nach § 454 HGB, TUL, Outsourcing-Kriterien und die ADSp kennen"
      ],
      s: [
        { t: "intro", x: "Nike will 10 Paletten Schuhe an Snipes nach München liefern – hat aber keine eigenen Lkw. Wer kümmert sich darum, wer fährt, und wer hat mit wem einen Vertrag? Genau das klärt diese Lektion. Sie ist die **Grundlage für fast alles in VBL**." },
        { t: "cards", h: "Die vier Beteiligten", items: [
          ["i:factory", "Verlader (Versender)", "Industrie- oder Handelsunternehmen. **Gibt den Auftrag** und übergibt die Ware.\nBeispiel: Nike"],
          ["i:compass", "Spediteur", "**Organisiert („besorgt“)** den Transport: wählt Frachtführer, schließt Verträge, plant den Weg.\nBeispiel: Schenker"],
          ["i:truck", "Frachtführer", "**Fährt** die Ware mit eigenen Fahrzeugen (Lkw, Bahn, Schiff, Flugzeug).\nBeispiel: Willi Betz"],
          ["i:package", "Empfänger", "Der Käufer – **nimmt die Ware entgegen**.\nBeispiel: Snipes"]
        ] },
        { t: "svg", h: "Schaubild: Verträge und Warenfluss", svg: SVG_VERTRAEGE, cap: "Durchgezogene Linien = Verträge · gestrichelte Linien = Weg der Ware" },
        { t: "ex", x: "Nike (Verlader) beauftragt **Schenker** (Spediteur) → das ist der **Speditionsvertrag**. Schenker hat keinen freien Lkw und beauftragt **Willi Betz** (Frachtführer) → das ist der **Frachtvertrag**. Der Lkw von Willi Betz holt die Ware bei Nike ab und fährt **direkt** zu Snipes.\n➜ Die Ware ist **nie** bei Schenker – trotzdem laufen alle Verträge über Schenker." },
        { t: "merke", x: "**Ware** fährt direkt: Verlader → Frachtführer → Empfänger.\n**Verträge** laufen über den Spediteur: Verlader –(§ 453)→ Spediteur –(§ 407)→ Frachtführer.\nDeshalb fallen **Warenfluss und Vertragsbeziehungen auseinander**." },
        { t: "table", h: "Die drei Verträge auf einen Blick", head: ["Vertrag", "Zwischen", "Inhalt"], rows: [
          ["Kaufvertrag", "Verkäufer ↔ Käufer", "Ware liefern ↔ Kaufpreis zahlen"],
          ["Speditionsvertrag (§ 453 HGB)", "Verlader ↔ Spediteur", "Versendung besorgen ↔ Vergütung zahlen"],
          ["Frachtvertrag (§ 407 HGB)", "Spediteur ↔ Frachtführer", "Ware befördern & abliefern ↔ Fracht zahlen"]
        ], cap: "Reihenfolge der Kette merken: Verlader → **453** → Spediteur → **407** → Frachtführer" },
        { t: "text", h: "Was heißt „besorgen“ – und was ist Selbsteintritt?", x: "„Besorgen“ heißt **auswählen, beauftragen und kontrollieren** – nicht selbst fahren. Der Spediteur ist wie ein **Reisebüro für Waren**: Er bucht den passenden Transport, plant die Route und kümmert sich um die Verträge. Deshalb nennt man ihn auch „**Architekt von Transportketten**“.\n\nFährt der Spediteur ausnahmsweise **selbst** mit eigenem Lkw, heißt das **Selbsteintritt**. Dann ist er Spediteur **und** Frachtführer zugleich – und hat auch die Pflichten eines Frachtführers.\n\nFährt dagegen der **Verlader** selbst (Nike mit eigenem Lkw), heißt das **Werkverkehr**." },
        { t: "flow", h: "Pflichten des Spediteurs (§ 454 HGB)", steps: [
          ["Planung", "Beförderungsmittel und Beförderungsweg wählen"],
          ["Ausführung", "Ausführende Unternehmer auswählen, Fracht-, Lager- und Speditionsverträge schließen, Weisungen & Infos erteilen – oder Selbsteintritt"],
          ["Überwachung", "Schadenersatzansprüche sichern (z. B. Schäden dokumentieren)"]
        ], cap: "Merkhilfe: **P**lanen → **A**usführen → **Ü**berwachen" },
        { t: "cards", h: "TUL – die klassischen Leistungen der Spedition", items: [
          ["i:truck", "Transport", "Ware von A nach B bewegen – überbrückt den **Raum**"],
          ["i:refresh-cw", "Umschlag", "Ware von einem Fahrzeug aufs nächste oder ins Lager bringen"],
          ["i:warehouse", "Lagerung", "Ware aufbewahren, bis sie gebraucht wird – überbrückt die **Zeit**"]
        ], cap: "Prof-Hinweis: **TUL = Transport, Umschlag, Lagerung** sicher können!" },
        { t: "table", h: "Selbst machen oder vergeben? (Outsourcing)", head: ["Kriterium", "Spricht für Fremdvergabe", "Spricht für Eigenleistung"], rows: [
          ["Mengen & Netz", "schwankende Mengen, viele Zielorte", "stabile Mengen auf starken eigenen Relationen"],
          ["Kompetenz", "Spezialwissen ist extern verfügbar", "Logistik ist strategisch zentral"],
          ["Investitionen", "Kapital und Anlagen sparen", "eigene Anlagen sind gut ausgelastet"],
          ["Steuerung", "Leistung messbar, Schnittstellen beherrschbar", "kritische Abläufe schwer vertraglich abzusichern"],
          ["Abhängigkeit", "mehrere geeignete Anbieter", "hohe Wechselkosten, wenige Anbieter"]
        ] },
        { t: "text", h: "ADSp – die „AGB“ der Spediteure", x: "Fast alle Speditionen arbeiten auf Basis der **Allgemeinen Deutschen Spediteurbedingungen (ADSp)** – ähnlich wie AGB beim Online-Shopping.\n• Sie weichen teils vom HGB ab – vor allem bei der **Haftung, zugunsten der Spediteure**.\n• Sie gelten nur für **speditionsübliche Geschäfte** (Speditions-, Fracht-, Lagergeschäfte).\n• Sind **Verbraucher** beteiligt (Umzug, Paket), gelten andere Bedingungen." },
        { t: "check", q: "Nike beauftragt Schenker, Schenker beauftragt Willi Betz. Welcher Vertrag besteht zwischen **Schenker und Willi Betz**?", o: ["Frachtvertrag (§ 407 HGB)", "Speditionsvertrag (§ 453 HGB)", "Kaufvertrag", "Gar keiner – nur Nike hat Verträge"], why: "Schenker beauftragt den Frachtführer → **Frachtvertrag nach § 407 HGB**. Der Speditionsvertrag (§ 453) besteht zwischen Nike und Schenker." },
        { t: "check", q: "Schenker fährt die Ware ausnahmsweise mit einem **eigenen** Lkw. Wie heißt das?", o: ["Selbsteintritt", "Werkverkehr", "Kabotage", "Outsourcing"], why: "Fährt der **Spediteur** selbst, ist das **Selbsteintritt** – er hat dann zusätzlich Frachtführerpflichten. Werkverkehr wäre, wenn Nike (der Verlader) selbst fährt." },
        { t: "check", q: "Wo kommt die Ware auf dem Weg von Nike zu Snipes vorbei?", o: ["Nur beim Frachtführer – nicht beim Spediteur", "Beim Spediteur und beim Frachtführer", "Nur im Lager des Spediteurs", "Bei keinem der beiden"], why: "Der Spediteur **organisiert nur**. Die Ware fährt im Lkw des Frachtführers direkt zum Empfänger – deshalb fallen Waren- und Vertragsfluss auseinander." }
      ]
    },

    "vbl1/a-verkehrstraeger": {
      title: "Verkehrsträger wählen & Transportketten verstehen",
      min: 9,
      goals: [
        "Straße, Schiene, Wasser und Luft anhand ihrer Merkmale vergleichen",
        "Einen Verkehrsträger begründet auswählen (5 Schritte)",
        "Vor-, Haupt- und Nachlauf erklären – und warum der Nachlauf so teuer ist",
        "Netzbegriffe (Kante, Knoten, Quelle, Senke, Hub) und Stückgut/LTL/FTL unterscheiden",
        "Eine Bündelungsrechnung durchführen"
      ],
      s: [
        { t: "intro", x: "Bananen aus Ecuador, Blumen aus Holland, Autos aus München: Jede Ware braucht den passenden Weg. Der Spediteur muss entscheiden, **womit** und **wie** transportiert wird. Dafür musst du die Stärken und Schwächen der Verkehrsträger kennen." },
        { t: "text", h: "Verkehrsträger oder Verkehrsmittel?", x: "**Verkehrsträger** = das **System** (Straße, Schiene, Binnenschiff, Seeschiff, Luft, Rohrleitung).\n**Verkehrsmittel** = das **Fahrzeug** darauf (Lkw, Güterzug, Containerschiff, Frachtflugzeug).\nBeispiel: Der Verkehrsträger Straße wird mit dem Verkehrsmittel Sattelzug genutzt." },
        { t: "table", h: "Die vier wichtigsten Verkehrsträger im Vergleich", head: ["Merkmal", "Straße/Lkw", "Schiene", "Wasser", "Luft"], rows: [
          ["Transport von", "**Haus zu Haus**", "Station zu Station", "Station zu Station", "Station zu Station"],
          ["Kapazität", "gering", "hoch", "hoch", "mittel"],
          ["Typische Güter", "Kaufmannsgüter", "Massen- & Kaufmannsgüter", "Massengüter", "hochwertig, zeitkritisch"],
          ["Fixkosten / variabel", "**gering** / mittel", "hoch / gering", "hoch / gering", "hoch / mittel"],
          ["Flexibilität", "**hoch**", "mittel", "gering", "gering–mittel"],
          ["Geschwindigkeit", "mittel–schnell", "langsam–mittel", "langsam", "**schnell**"],
          ["CO2-Intensität", "hoch", "**niedrig**", "mittel", "**sehr hoch**"]
        ] },
        { t: "merke", h: "Faustregel", x: "**Schwer, viel, nicht eilig** → Schiff oder Bahn\n**Eilig, wertvoll, leicht** → Flugzeug\n**Flexibel, Haus-zu-Haus, kurze/mittlere Strecke** → Lkw\nAsien → Europa: Schiff 5–6 Wochen (günstig) · Bahn ca. 3 Wochen · Flugzeug ca. 5 Tage (teuer, CO2 sehr hoch)" },
        { t: "flow", h: "So wählt der Spediteur den Verkehrsträger – in 5 Schritten", steps: [
          ["Eignung", "Passt es zu Gut, Termin, Zugang (z. B. Gleisanschluss?) und Vorschriften?", "ungeeignete raus"],
          ["Gesamtkosten", "Fracht + Umschlag + Vor-/Nachlauf + Bestände + Risiken"],
          ["Leistung", "Zuverlässigkeit, Häufigkeit, Flexibilität, Transparenz"],
          ["Umwelt", "Distanz, Auslastung, Antrieb"],
          ["Entscheidung", "Begründete Empfehlung **mit Rückfalloption**"]
        ] },
        { t: "ex", h: "Warum zählt die Tür-zu-Tür-Zeit?", x: "Frankfurt → Mailand per Flugzeug: Der Flug dauert nur 1,5 Stunden. Aber: Ware zum Flughafen bringen, Cut-off-Zeit, Umschlag, Flug, Umschlag, Zustellung. Am Ende ist der **Lkw oft genauso schnell** – und viel günstiger. Für den Kunden zählt immer die **gesamte Zeit von Tür zu Tür**, nicht die reine Fahrgeschwindigkeit." },
        { t: "flow", h: "Die Transportkette", steps: [
          ["Vorlauf", "Abholung beim Versender, Zuführung zum Knoten (Abholtour, Zeitfenster)"],
          ["Umschlag", "Ware identifizieren, sortieren, auf den nächsten Lkw verladen"],
          ["Hauptlauf", "Gebündelt über die lange Strecke (Relation, Kapazität, Fahrplan)"],
          ["Umschlag", "Ware für die Zustelltouren sortieren"],
          ["Nachlauf", "Verteilung und Zustellung an die Empfänger (Zustellnachweis)", "≈ 50 % der Kosten!"]
        ], cap: "Prof-Hinweis: Der **Nachlauf macht ca. 50 % der Kosten** aus, weil die gebündelte Ware wieder **einzeln** zugestellt wird – viele Stopps, wenig Ware pro Stopp." },
        { t: "svg", h: "Netz-Grundbegriffe im Bild", svg: SVG_NETZ, cap: "Eine **Relation** ist die regelmäßige Verbindung zwischen einer Quelle und einer Senke." },
        { t: "cards", h: "Die wichtigsten Netzbegriffe (Folie 30 – sicher können!)", items: [
          ["i:route", "Kante", "Transportweg zwischen zwei Knoten (Straße, Schiene, Luftweg)"],
          ["i:map-pin", "Knoten", "Ort für Umschlag, Lagerung, Verteilung (Lager, Hafen, Flughafen)"],
          ["i:arrow-right-left", "Quelle & Senke", "Quelle = Start (z. B. Fabrik) · Senke = Ziel (Kunde)"],
          ["i:refresh-cw", "Paarigkeit", "Hin- und Rücktransporte sind ausgeglichen"],
          ["i:trending-down", "Unpaarigkeit", "Ungleichgewicht → **Leerfahrten**, schlechte Auslastung"],
          ["i:network", "Hub & Spoke", "Hub = zentrale Drehscheibe · Spokes = Speichen zu kleinen Knoten"]
        ], cap: "Außerdem: **ARA-Häfen** = Amsterdam, Rotterdam, Antwerpen · **Bad Hersfeld** = zentralster Ort Deutschlands → beliebter Hub-Standort" },
        { t: "table", h: "Stückgut, Teilladung, Komplettladung", head: ["Produkt", "Was ist das?", "Folge"], rows: [
          ["Stückgut / Sammelgut", "kleine Sendungen über Abhol-, Umschlag- und Zustellnetz", "Bündelung, **viele Schnittstellen**"],
          ["Teilladung (LTL)", "„less than truck load“ – belegt einen Teil des Lkw", "mit anderen Ladungen kombiniert"],
          ["Komplettladung (FTL)", "„full truck load“ – ganzer Lkw für einen Auftrag", "meist direkt, kaum Umschlag"]
        ], cap: "Wichtig: Eine Komplettladung muss **nicht physisch voll** sein – sie wird nur als ganzer Lkw disponiert." },
        { t: "formula", h: "Bündelung rechnen", tex: "\\text{Kosten je Sendung} = \\frac{1.000\\,€}{n} + 80\\,€", items: [
          "1.000 € = feste Hauptlaufkosten (werden auf alle Sendungen **verteilt**)",
          "80 € = Kosten, die **jede** Sendung zusätzlich hat (Vor-/Nachlauf, Umschlag)",
          "Direkt (ohne Bündelung) kostet jede Sendung 300 €"
        ] },
        { t: "table", h: "Was bringt die Bündelung?", head: ["Sendungen n", "gebündelt je Sendung", "direkt je Sendung"], rows: [
          ["1", "1.080 €", "300 €"], ["4", "330 €", "300 €"], ["5", "280 € ✓", "300 €"], ["10", "180 € ✓", "300 €"], ["20", "130 € ✓", "300 €"]
        ], cap: "Ab **5 Sendungen** lohnt sich die Bündelung. Je mehr Sendungen, desto günstiger – aber: zusätzlicher **Umschlag** kostet Zeit und erhöht das Schadensrisiko." },
        { t: "check", q: "Holzstämme von Schweden nach Deutschland – welcher Verkehrsträger passt am besten?", o: ["Bahn (Güterzug)", "Luftfracht", "Kühl-Lkw", "Paketdienst"], why: "Holz ist **schweres Massengut**, nicht eilig → Bahn mit hoher Kapazität und niedrigen variablen Kosten." },
        { t: "check", q: "In welchem Abschnitt der Transportkette entstehen ca. **50 % der Kosten**?", o: ["Nachlauf", "Vorlauf", "Hauptlauf", "Umschlag"], why: "Im **Nachlauf** wird die gebündelte Ware wieder einzeln zugestellt – viele Stopps, wenig Ware pro Stopp." },
        { t: "check", q: "Bündelung: 1.000 € Hauptlauf + 80 € je Sendung. Was kostet eine Sendung bei **20 Sendungen**?", o: ["130 €", "180 €", "1.080 €", "50 €"], why: "1.000 € / 20 = 50 € + 80 € = **130 €** je Sendung." }
      ]
    },

    "vbl1/a-markt": {
      title: "Logistikdienstleister 1PL–4PL, Markt & Trends",
      min: 7,
      goals: [
        "1PL, 2PL, 3PL und 4PL anhand ihrer Merkmale unterscheiden (Prüfungsfrage!)",
        "Den „Wandel der Spedition“ und Value Added Services erklären",
        "Die Marktzahlen richtig einordnen: 330 Mrd. € = Kosten, nicht Umsatz",
        "Branchenanforderungen und Trends nennen"
      ],
      s: [
        { t: "intro", x: "Nicht jeder Logistikdienstleister macht das Gleiche: Der eine fährt nur Lkw, der andere steuert die komplette Lieferkette eines Autobauers. Diese Abstufung **1PL bis 4PL** ist laut deinem Prof eine **Prüfungsfrage** – und sie hilft dir, deinen Ausbildungsbetrieb einzuordnen." },
        { t: "stairs", h: "Die Treppe: Je höher, desto mehr Leistung", steps: [
          ["1PL", "Frachtführer", "Fährt nur – Transport & Umschlag, keine Planung.\nz. B. Willi Betz"],
          ["2PL", "Spediteur", "Koordiniert: Frachtführer auswählen, Transporte planen, Zoll.\nz. B. Schenker"],
          ["3PL", "Kontraktlogistiker", "Übernimmt ganze Prozesse langfristig: Lager, Distribution, Kommissionierung.\nz. B. Kühne + Nagel"],
          ["4PL", "Lead Logistics Provider", "Steuert die gesamte Supply Chain, stark IT-gestützt.\nz. B. CEVA Logistics"]
        ], cap: "PL = **Party Logistics Provider**" },
        { t: "table", h: "Die Merkmale im Vergleich", head: ["Merkmal", "1PL", "2PL", "3PL", "4PL"], rows: [
          ["Kunden", "klein, wechselnd", "groß, anonym", "wenige Großkunden", "wenige Großkunden"],
          ["Know-how", "Transport & Technik", "Koordination von TUL", "kundenspezifisch", "prozessorientiert"],
          ["Integration / IT", "gering", "moderat", "hoch", "sehr hoch"],
          ["Vertragslaufzeit", "kurz", "< 1 Jahr", "3–10 Jahre", "> 3 Jahre"]
        ] },
        { t: "merke", x: "Merkhilfe: **Transportunternehmer → Spedition → Kontraktlogistiker**: Leistungsumfang, Integration und Vertragslaufzeit **steigen**, die Zahl der Kunden **sinkt**.\n**Kontraktlogistik** = fester Kunde, lange Laufzeit, großes Volumen, viel Vertrauen." },
        { t: "text", h: "Der „Wandel der Spedition“", x: "Früher machte die Spedition vor allem **TUL** (Transport, Umschlag, Lagerung). Heute konzentrieren sich Industrie und Handel auf ihr **Kerngeschäft** und geben immer mehr Logistik ab. Die Spedition bietet deshalb zusätzlich **Value Added Services (VAS)** an – Mehrwertdienste, die über die Basisleistung hinausgehen. Dafür braucht sie kundenspezifisches Wissen und oft auch Investitionen." },
        { t: "bal", h: "Value Added Services – zwei Arten", mid: "&", l: ["Produktorientiert (am Produkt)", ["Qualitäts- & Temperaturkontrolle", "Montage / Demontage, Reparaturen", "Ver- und Umpacken", "Prüfungen, Entsorgung / Recycling"]], r: ["Prozessorientiert (am Ablauf)", ["Auftragsmanagement, Kommissionierung", "Etikettierung, Preisauszeichnung, Regalservice", "Retouren- & Reklamationsmanagement", "Zoll, Zahlungsdienste, Tourenplanung, Tracking"]] },
        { t: "cards", h: "Der Markt in Zahlen", items: [
          ["i:euro", "≈ 330 Mrd. €", "gesamtes Logistikmarktvolumen in DE (2024) = **Logistikkosten**"],
          ["i:factory", "≈ 60 % insourced", "machen Industrie & Handel **selbst** – wird nicht verkauft, also kein Umsatz"],
          ["i:truck", "≈ 40 % outsourced", "≈ **131 Mrd. € Umsatz** der Speditions- und Logistikbranche (2023)"],
          ["i:boxes", "Sehr fragmentiert", "viele kleine Firmen; große Player: DHL, DSV (ex Schenker), Dachser, Kühne + Nagel"]
        ] },
        { t: "merke", h: "Prüfungsfalle", x: "Es heißt **„330 Mrd. € Logistikkosten“** – **nicht** „Logistikumsatz“. Grund: Ein großer Teil wird im eigenen Unternehmen erbracht und gar nicht verkauft. Umsatz machen nur die extern vergebenen Leistungen (ca. 131 Mrd. €)." },
        { t: "cards", h: "Branchen brauchen Spezialwissen", items: [
          ["i:apple", "Lebensmittel", "Zeit, Temperatur, Hygiene → lückenlose **Kühlkette**"],
          ["i:pill", "Pharma", "Qualität & Nachweise → geschultes Personal, strenge Kontrollen"],
          ["i:car", "Automobil", "Abruf, **Takt & Reihenfolge** → enge Systemintegration"],
          ["i:container", "Projektladung", "Übermaße, Gewicht → individuelle Planung"],
          ["i:shopping-cart", "E-Commerce", "viele kleine Aufträge & **Retouren** → skalierbare Prozesse"]
        ] },
        { t: "cards", h: "Trends, die die Spedition verändern", items: [
          ["i:laptop", "Digitalisierung", "Automatisierung, Echtzeit-Tracking (GPS, IoT)"],
          ["i:leaf", "Nachhaltigkeit", "CO2-Reduktion, grüne Fahrzeuge, Routenoptimierung"],
          ["i:shopping-cart", "E-Commerce", "schnellere Lieferungen, Lösungen für die letzte Meile"],
          ["i:users", "Fachkräftemangel", "Rekrutierung, Weiterbildung, KI zur Entlastung"],
          ["i:globe", "Globale Unsicherheit", "flexible Lieferketten, Risikomanagement"]
        ] },
        { t: "check", q: "Kühne + Nagel betreibt für einen Händler **5 Jahre lang** Lager und Distribution. Welcher Typ ist das?", o: ["3PL – Kontraktlogistik", "2PL – Spediteur", "1PL – Frachtführer", "4PL – Lead Logistics Provider"], why: "Langfristige Übernahme ganzer Logistikprozesse für einen festen Kunden = **Kontraktlogistik (3PL)**." },
        { t: "check", q: "Warum ist „330 Mrd. € Logistikumsatz“ falsch?", o: ["Weil ein großer Teil Eigenleistung ist und nicht verkauft wird", "Weil die Zahl nur Paketdienste umfasst", "Weil darin Steuern enthalten sind", "Weil Logistik keinen Gewinn macht"], why: "Die 330 Mrd. € sind **Kosten** inklusive Eigenleistungen von Industrie und Handel. Umsatz entsteht nur bei extern vergebenen Leistungen (≈ 131 Mrd. €)." },
        { t: "check", q: "Retouren- und Reklamationsmanagement ist ein …", o: ["prozessorientierter Value Added Service", "produktorientierter Value Added Service", "Teil der klassischen TUL-Leistung", "Teil des Frachtvertrags nach § 407 HGB"], why: "Es betrifft den **Ablauf** (Prozess), nicht das Produkt selbst → prozessorientierter VAS." }
      ]
    },

    "vbl1/b-strasse": {
      title: "Straßengüterverkehr: Recht, Fahrzeuge & Maut",
      min: 8,
      goals: [
        "Die Rolle des Lkw und die Definition des Spediteurs einordnen",
        "Die GÜKG-Erlaubnis und ihre drei Voraussetzungen nennen",
        "Fahrzeugtypen mit Gewicht, Länge und Palettenplätzen unterscheiden",
        "Eigenen Fuhrpark und Transportunternehmer abwägen",
        "Fahrpersonalrecht und Lkw-Maut erklären und die Maut berechnen"
      ],
      s: [
        { t: "intro", x: "Rund **80 % aller Güter** in Deutschland fahren mit dem Lkw. Damit das geordnet abläuft, gibt es Regeln: Wer darf überhaupt gewerblich Güter fahren? Wie lange darf ein Fahrer am Steuer sitzen? Und was kostet die Autobahn? Das klärt diese Lektion." },
        { t: "text", h: "Spediteur gestern und heute", x: "**1861 (ADHGB):** „Spediteur ist, wer es übernimmt, Güterversendungen durch Frachtführer oder Verfrachter von Seeschiffen zu **organisieren**.“ → Organisator, nicht Fahrer.\n**1998:** Neudefinition im **§ 453 HGB**.\nÜbernimmt eine Firma beide Rollen (organisieren **und** fahren), spricht man vom **Kraftwagenspediteur** (Selbsteintritt)." },
        { t: "cards", h: "GÜKG – wer darf gewerblich Güter fahren?", items: [
          ["i:shield-check", "Zuverlässigkeit", "des Unternehmers (z. B. keine schweren Verstöße)"],
          ["i:coins", "Finanzielle Leistungsfähigkeit", "Nachweis über Eigenkapital"],
          ["i:graduation-cap", "Fachliche Eignung", "IHK-Prüfung oder gleichwertige Qualifikation"]
        ], cap: "Das **GÜKG** gilt für den **gewerblichen** Güterkraftverkehr mit Fahrzeugen **über 3,5 t zGG**: Inland, grenzüberschreitend mit Start/Ziel in DE und Kabotage. Ohne diese 3 Voraussetzungen keine GÜKG-Erlaubnis (§ 3 GÜKG) bzw. EU-Lizenz." },
        { t: "svg", h: "Sattelzug und Gliederzug (schematisch)", svg: SVG_FAHRZEUGE, cap: "Der Gliederzug trägt **zwei Wechselbrücken**, die man abstellen und tauschen kann." },
        { t: "table", h: "Fahrzeugtypen im Überblick", head: ["Fahrzeug", "Gewicht", "Länge", "Paletten", "Einsatz"], rows: [
          ["Verteilerfahrzeug", "bis 18 t", "–", "–", "Nahverkehr, meist mit Ladebordwand"],
          ["Sattelzug", "40 t", "16,50 m", "33/34", "europäischer Standard im Fernverkehr"],
          ["Gliederzug", "40 t", "18,75 m", "38", "mit Wechselbrücken"],
          ["Lang-Lkw", "40 t", "bis 25,25 m", "–", "bis 50 % mehr Kapazität, Langstrecke & KV"]
        ], cap: "Für alle: Höhe max. 4 m · Breite 2,55 m (Kühlfahrzeuge 2,60 m) · Ladelänge max. 15,65 m · Innenhöhe 3,0 m" },
        { t: "merke", h: "Warum Wechselbrücken?", x: "Die Ladefläche wird vom Lkw **getrennt**: Während eine Brücke be- oder entladen wird, fährt der Lkw mit einer anderen schon weiter. **Der teure Lkw und der Fahrer müssen nicht warten** → bessere Auslastung. Standardlänge 7,45 m, steht auf 4 Stützfüßen." },
        { t: "bal", h: "Eigener Fuhrpark oder Transportunternehmer (TU)?", l: ["Transportunternehmer beauftragen", ["geringeres Risiko – **variable Kosten**", "oft günstiger (schlanke Kostenstruktur)", "flexibel bei schwankender Auftragslage", "keine Kapitalbindung, keine Fixkosten", "**Aber:** Verfügbarkeit hängt vom Markt ab"]], r: ["Eigener Fuhrpark", ["unabhängig von TU-Preisen", "direkter Zugriff auf Laderaum, volle Dispositionshoheit", "Kundenwunsch erfüllbar", "Einfluss auf Corporate Design & Auftreten der Fahrer", "**Aber:** kaum Fahrpersonal in DE verfügbar"]] },
        { t: "text", h: "BALM & Fahrpersonalrecht", x: "Das **BALM** (Bundesamt für Logistik und Mobilität) ist die Bundesbehörde für Güterverkehr: Kontrollen, Förderung nachhaltiger Transporte.\nDas **Fahrpersonalrecht** regelt Arbeitszeit, Lenkzeiten, Pausen und Ruhezeiten der Fahrer – kontrolliert über den **digitalen Tachographen**.\n• **Deutschland:** Arbeitszeitgesetz (ArbZG), Fahrpersonalgesetz (FPersG), Fahrpersonalverordnung (FPersV)\n• **EU:** VO (EG) 561/2006 (Lenk- & Ruhezeiten), VO (EU) 165/2014 (Tachograph), AETR-Abkommen" },
        { t: "flow", h: "Lkw-Maut in Deutschland", steps: [
          ["Wer zahlt?", "Lkw für den Güterverkehr über **3,5 t** (seit 01.01.2005)"],
          ["Wo?", "Alle Autobahnen und Bundesstraßen"],
          ["Wie viel?", "ca. 0,114–0,516 €/km – je nach Achszahl & Gewicht, Schadstoff- und **CO2-Klasse**"],
          ["Wie erfasst?", "Automatisch per **On-Board-Unit (OBU)** mit GPS, Betreiber **Toll Collect**"],
          ["Kontrolle", "Mautbrücken & Mautsäulen"]
        ], cap: "Ausnahmen: Land-/Forstwirtschaft, Feuerwehr, Polizei, Katastrophenschutz, Handwerker (unter Bedingungen). Andere Länder nutzen teils eine **Vignette** (zeitbezogen statt streckenbezogen)." },
        { t: "ex", h: "Maut rechnen", x: "Ein Lkw fährt 420 km auf mautpflichtigen Straßen, Mautsatz 0,348 €/km:\n420 km × 0,348 €/km = **146,16 €**" },
        { t: "check", q: "Ab welchem Gewicht gilt das GÜKG für gewerbliche Transporte?", o: ["Über 3,5 t zGG", "Über 7,5 t zGG", "Über 12 t zGG", "Für alle Fahrzeuge"], why: "GÜKG und Maut gelten beide für Fahrzeuge **über 3,5 t** (zulässiges Gesamtgewicht)." },
        { t: "check", q: "Wie viele Europaletten passen auf einen **Gliederzug**?", o: ["38", "33/34", "52", "24"], why: "Gliederzug **38** (zwei Wechselbrücken), Sattelzug **33/34**." },
        { t: "check", q: "300 km mautpflichtig bei 0,40 €/km – wie hoch ist die Maut?", o: ["120 €", "300 €", "75 €", "1.200 €"], why: "300 km × 0,40 €/km = **120 €**." }
      ]
    },

    "vbl1/b-sammelgut": {
      title: "Sammelgut: Ablauf, Netzwerke & Hub and Spoke",
      min: 7,
      goals: [
        "Den Ablauf des Sammelgutverkehrs mit Tageszeiten beschreiben",
        "Erklären, was systemgebundene Risikoverkehre sind",
        "Firmen- und Kooperationsnetzwerk unterscheiden",
        "Hub and Spoke mit Vor- und Nachteilen beurteilen"
      ],
      s: [
        { t: "intro", x: "Eine Sendung mit 500 kg ist zu schwer für den Paketdienst, aber viel zu klein für einen eigenen Lkw. Die Lösung: **Sammelgut**. Viele kleine Sendungen verschiedener Versender werden gesammelt, gemeinsam transportiert und am Ziel wieder verteilt – **über Nacht, in 24 Stunden**." },
        { t: "flow", h: "Ein Sammelgut-Tag: heute abgeholt, morgen zugestellt", steps: [
          ["Vorlauf", "Abholung beim Versender, Nahverkehrs-Lkw bis 12/15 t", "Nachmittag"],
          ["Umschlag beim Versandspediteur", "Sendungen nach Zielregion sortieren, Sammelladungen bilden", "(früher) Abend"],
          ["Hauptlauf", "„Line haul“ mit Sattel-/Gliederzug bis 40 t oder Bahn (KV)", "Nacht"],
          ["Umschlag beim Empfangsspediteur", "Ware für die Zustelltouren sortieren", "früher Morgen"],
          ["Nachlauf", "Zustellung beim Empfänger mit Verteiler-Lkw", "Vormittag"]
        ], cap: "Typisches Sendungsgewicht: ca. **31 kg bis 3.000 kg**. VS = Versandspediteur, ES = Empfangsspediteur." },
        { t: "text", h: "Systemgebundene Risikoverkehre", x: "Die Hauptläufe fahren **jeden Tag fest geplant** – zum Beispiel jede Nacht Mannheim → Hamburg. Das **Risiko**: Bei der Planung weiß niemand, wie viele Sendungen tatsächlich kommen. Der Lkw fährt trotzdem, ob halb voll oder voll. Beteiligt sind Versand- und Empfangsspediteur, oft im **Rundlauf** oder **Begegnungsverkehr** (beide schicken sich gegenseitig Lkw)." },
        { t: "merke", x: "Für 24-h-Zustellung braucht ein Sammelgutspediteur **flächendeckende Präsenz in ganz Deutschland** → das **Sammelgutnetzwerk**." },
        { t: "bal", h: "Zwei Arten von Netzwerken", mid: "vs.", l: ["Firmennetzwerk", ["überwiegend **eigene Niederlassungen**", "zentrale Strukturen, ein Markenauftritt", "typisch für große Konzerne"]], r: ["Kooperationsnetzwerk", ["Zusammenschluss **rechtlich selbständiger** Speditionen", "feste Gebiete, einheitliches Produkt & Marketing, gemeinsamer Hub", "typisch für Mittelständler (z. B. CargoLine)"]] },
        { t: "svg", h: "Warum ein Hub? Direktverkehr vs. Hub and Spoke", svg: SVG_HUB, cap: "Beim Hub-System schickt jeder Partner **einen** Lkw zum Hub und lädt dort die Sendungen für sein eigenes Gebiet zurück. Die Teilnahme ist meist **Pflicht**." },
        { t: "bal", h: "Hub and Spoke beurteilen", l: ["Vorteile", ["24-h-Netz auch für **kleine Partner** möglich", "auch **schwache Relationen** wirtschaftlich bedienbar", "bessere Auslastung durch Bündelung"]], r: ["Nachteile", ["zusätzliche Kosten – **immer teurer als Direktverkehr**", "zusätzlicher **Umschlag** → mehr Beschädigungs- und Fehlverladungsrisiko"]] },
        { t: "cards", h: "Europäische Sammelgutnetzwerke", items: [
          ["i:network", "CargoLine", "Kooperation, stark in DACH, Benelux, Frankreich, Italien, Osteuropa"],
          ["i:truck", "DHL", "eines der Top-3-Netzwerke Europas"],
          ["i:truck", "DACHSER", "integriertes Netzwerk mit hoher Dichte"],
          ["i:truck", "DSV (ex Schenker)", "europaweites Netz mit eigenen Niederlassungen"]
        ], cap: "Top 3 in Europa: **DHL, DACHSER, DSV**. Sammelgutnetzwerke sind das **Rückgrat der europäischen Logistik**." },
        { t: "check", q: "Wann fährt im Sammelgutverkehr typischerweise der **Hauptlauf**?", o: ["Nachts", "Vormittags", "Nachmittags", "Am Wochenende"], why: "Abholung am Nachmittag, Umschlag am Abend, **Hauptlauf in der Nacht**, Zustellung am nächsten Vormittag." },
        { t: "check", q: "Was ist typisch für ein **Kooperationsnetzwerk**?", o: ["Selbständige Speditionen unter einem gemeinsamen Dach", "Nur eigene Niederlassungen eines Konzerns", "Ein einziger zentraler Standort", "Ausschließlich Paketdienste"], why: "Rechtlich selbständige Mittelständler schließen sich zusammen – mit festen Gebieten, einheitlichem Produkt und gemeinsamem Hub." },
        { t: "check", q: "Was ist ein **Nachteil** von Hub and Spoke?", o: ["Zusätzlicher Umschlag – teurer als Direktverkehr", "Kleine Partner können nicht teilnehmen", "Schwache Relationen sind nicht bedienbar", "Kein 24-h-Netz möglich"], why: "Jeder zusätzliche Umschlag kostet Geld und Zeit und erhöht das Risiko für Schäden und Fehlverladungen." }
      ]
    },

    "vbl1/b-europa": {
      title: "Europa: EU-Recht, CMR, Haftung & Kabotage",
      min: 10,
      goals: [
        "EU, EFTA und EWR auseinanderhalten",
        "Lizenzen, Dokumente und das Mobilitätspaket kennen",
        "Haftung nach HGB und CMR vergleichen und berechnen",
        "Bilateral, Cross-Trade und Kabotage unterscheiden und die Kabotage-Regeln anwenden"
      ],
      s: [
        { t: "intro", x: "Sobald ein Lkw eine Grenze überquert, gelten neue Regeln: Er braucht eine EU-Lizenz, einen **CMR-Frachtbrief**, und es gelten andere Haftungsregeln. Und darf ein polnischer Lkw eigentlich von München nach Berlin fahren? Das ist **Kabotage** – mit festen Regeln." },
        { t: "svg", h: "EU, EFTA und EWR", svg: SVG_EWR, cap: "**EWR = EU + EFTA − Schweiz.** Im EWR: keine Zölle, ca. 80 % der Binnenmarktregeln – aber Verbrauchsteuern bei der Einfuhr." },
        { t: "cards", h: "Die wichtigsten EU-Regeln", items: [
          ["i:landmark", "VO (EG) 1072/2009", "Marktzugang & Kabotage"],
          ["i:timer", "VO (EG) 561/2006", "Lenk- und Ruhezeiten"],
          ["i:scan-line", "VO (EU) 165/2014", "digitaler Tachograph"],
          ["i:graduation-cap", "RL 2003/59/EG", "Grundqualifikation & Weiterbildung der Fahrer"],
          ["i:receipt", "Eurovignetten-RL", "Grundlage für nationale Mautsysteme (EETS: ein Gerät für mehrere Länder)"]
        ] },
        { t: "merke", h: "Mobilitätspaket I (seit 2020)", x: "• **Entsendung:** Fahrer bekommen Mindestlohn und Arbeitsbedingungen des Einsatzlandes\n• **Rückkehrpflicht:** Fahrzeug muss spätestens alle **8 Wochen** zurück in den Niederlassungsstaat\n• **Keine regelmäßige 45-h-Wochenruhe im Lkw**" },
        { t: "table", h: "Lizenzen und Dokumente", head: ["", "National", "Europa"], rows: [
          ["Erlaubnis", "GÜKG-Erlaubnis", "**EU-Lizenz** (Gemeinschaftslizenz) oder **CEMT**-Genehmigung (44 Staaten, auch Nicht-EU)"],
          ["Frachtpapier", "Begleitpapiere / Frachtbrief (optional)", "**CMR-Frachtbrief** (Pflicht)"],
          ["Sonstiges", "Nachweis Güterschaden-Haftpflichtversicherung", "ggf. **A1-Bescheinigung** (Sozialversicherung bei Entsendung)"]
        ], cap: "Werkverkehrsbescheinigung = nur für Transporte für den **eigenen Bedarf**." },
        { t: "text", h: "Der CMR-Frachtbrief", x: "CMR = Übereinkommen über den Beförderungsvertrag im **internationalen Straßengüterverkehr**.\n• **zwingendes Recht**, der Frachtbrief ist **formgebunden**\n• gilt in fast ganz Europa (außer Kosovo, San Marino, Andorra, Monaco, Vatikan)\n• **beweist:** Frachtvertrag, Übernahme und Ablieferung, Art, Menge und Zustand der Güter, Pflichten und Haftung des Frachtführers" },
        { t: "table", h: "Haftung: HGB (national) vs. CMR (international)", head: ["", "HGB", "CMR"], rows: [
          ["Form", "Gesetz mit Paragraphen", "Übereinkommen mit Artikeln"],
          ["Güterschaden / Verlust", "max. **8,33 SZR/kg**", "max. **8,33 SZR/kg**"],
          ["Haftungskorridor", "**2–40 SZR** (ausdrücklich vereinbaren)", "**keiner**"],
          ["Lieferfrist überschritten", "max. **3-fache** Fracht", "max. **1-fache** Fracht"],
          ["Güterfolgeschäden", "keine Haftung", "keine Haftung"],
          ["Vermögensschäden", "max. 3-facher Verlustbetrag", "keine Regulierung"],
          ["Charakter", "teildispositiv (halbzwingend)", "zwingend"]
        ], cap: "SZR = **Sonderziehungsrecht**, Rechnungseinheit des IWF (in der Vorlesung ≈ 1,20 €)" },
        { t: "formula", h: "Haftung berechnen (prüfungsrelevant!)", tex: "2.000\\,\\text{kg} \\times 8{,}33\\,\\text{SZR} \\times 1{,}20\\,€ = 19.992\\,€", items: [
          "Sendung: 2.000 kg, Warenwert 20.000 €",
          "Der Frachtführer haftet höchstens mit **19.992 €**",
          "19.992 € < 20.000 € → **8 € bleiben ungedeckt**"
        ] },
        { t: "svg", h: "Drei Einsatzarten eines polnischen Lkw", svg: SVG_EINSAETZE, cap: "Das Heimatland des Lkw (Polen) ist hervorgehoben." },
        { t: "flow", h: "Kabotage-Regeln (Mobilitätspaket, seit Feb. 2022)", steps: [
          ["Internationale Lieferung", "z. B. Warschau → Köln"],
          ["Max. 3 Kabotagefahrten", "innerhalb von **7 Tagen** im Land"],
          ["4 Tage Abkühlphase", "im Heimatstaat, bevor wieder Kabotage erlaubt ist"],
          ["Rückkehr nach 8 Wochen", "Fahrzeug muss spätestens dann zurück"]
        ], cap: "Außerdem: **kein Sitz** im Kabotageland, Be- und Entladestelle im Kabotageland. Kabotage ist seit **1. Juli 1998** erlaubt. **Deutschland** ist das wichtigste Kabotageziel der EU (über 40 %)." },
        { t: "text", h: "Warum gibt es so viele Leerfahrten?", x: "• **Unpaarige Warenströme** (mehr Importe als Exporte)\n• fehlende digitale Vernetzung zwischen Verladern und Frachtführern\n• **Werkverkehr** (besonders hoher Leerfahrtenanteil)\n• Spezialtransporte ohne passende Rückladung\n• regionale Industriecluster mit einseitigen Strömen\nKabotage soll Leerfahrten reduzieren, Kapazitäten besser auslasten und den Wettbewerb fördern." },
        { t: "check", q: "Ein polnischer Lkw fährt Ware von **Köln nach Dortmund**. Was ist das?", o: ["Kabotage", "Cross-Trade", "Bilateraler Verkehr", "Werkverkehr"], why: "Ein ausländischer Lkw transportiert **innerhalb** eines fremden Landes → **Kabotage**." },
        { t: "check", q: "Wie hoch haftet der Frachtführer nach **CMR** bei Überschreitung der Lieferfrist?", o: ["Max. 1-fache Fracht", "Max. 3-fache Fracht", "8,33 SZR je kg", "Unbegrenzt"], why: "CMR: max. **1-fache** Fracht. Nach HGB wäre es max. die **3-fache** Fracht." },
        { t: "check", q: "Sendung 1.000 kg, 8,33 SZR/kg, 1 SZR = 1,20 €. Wie hoch ist die maximale Haftung?", o: ["9.996 €", "8.330 €", "10.000 €", "1.200 €"], why: "1.000 × 8,33 × 1,20 = **9.996 €**." }
      ]
    }
  });
})();
