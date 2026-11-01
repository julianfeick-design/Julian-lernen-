/*
 * Lektionen Grundlagen der BWL (von Medem) + Marketing (Stenger) – erst verstehen, dann üben.
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
  const T = (x, y, t, cls) => `<text x="${x}" y="${y}" text-anchor="middle" class="${cls || "dg-s"}">${t}</text>`;

  // Wo steht die BWL im System der Wissenschaften?
  const SVG_WISS = `<svg viewBox="0 0 420 278" role="img" aria-label="System der Wissenschaften: von den Wissenschaften über Real-, Geistes- und Wirtschaftswissenschaften bis zur BWL">
    <line x1="307" y1="40" x2="307" y2="58" class="dg-lp"/>
    <path d="M307,49 H96 V58" class="dg-l"/>
    <line x1="307" y1="98" x2="307" y2="116" class="dg-lp"/>
    <path d="M307,107 H96 V116" class="dg-l"/>
    <line x1="307" y1="156" x2="307" y2="174" class="dg-lp"/>
    <path d="M307,214 V223 H362 V232" class="dg-lp"/>
    <path d="M307,223 H242 V232" class="dg-l"/>
    ${box(200, 6, 214, 34, "Wissenschaften")}
    ${box(6, 58, 180, 40, "Formalwissenschaften", "+ Metawissenschaften")}
    ${box(200, 58, 214, 40, "Realwissenschaften", "untersuchen die Wirklichkeit")}
    ${box(6, 116, 180, 40, "Naturwissenschaften", "z. B. Physik, Chemie")}
    ${box(200, 116, 214, 40, "Geisteswissenschaften", "Mensch &amp; Gesellschaft")}
    ${box(200, 174, 214, 40, "Wirtschaftswissenschaften", "Umgang mit knappen Gütern")}
    ${box(184, 232, 116, 40, "VWL", "Gesamtwirtschaft")}
    ${box(310, 232, 104, 40, "BWL", "der Betrieb", true)}
  </svg>`;

  // Induktion und Deduktion
  const SVG_INDUKTION = `<svg viewBox="0 0 420 200" role="img" aria-label="Induktion schließt von Beobachtungen auf eine Theorie, Deduktion von der Theorie auf den Einzelfall">{{defs}}
    ${box(70, 8, 280, 44, "Allgemeine Theorie", "gilt für alle Fälle")}
    ${box(70, 148, 280, 44, "Einzelne Beobachtungen", "konkrete Fälle (Empirie)")}
    <line x1="120" y1="146" x2="120" y2="56" class="dg-lp" marker-end="url(#ahp)"/>
    <line x1="300" y1="54" x2="300" y2="144" class="dg-l" marker-end="url(#ah)"/>
    <text x="132" y="82" class="dg-at">Induktion</text>
    <text x="132" y="98" class="dg-s">Einzelnes → Allgemeines</text>
    <text x="288" y="124" text-anchor="end" class="dg-t">Deduktion</text>
    <text x="288" y="140" text-anchor="end" class="dg-s">Allgemeines → Einzelnes</text>
  </svg>`;

  // Das strategische Dreieck
  const SVG_DREIECK = `<svg viewBox="0 0 420 228" role="img" aria-label="Strategisches Dreieck aus Kunde, Unternehmen und Wettbewerber mit dem Wettbewerbsvorteil in der Mitte">
    <line x1="172" y1="54" x2="92" y2="174" class="dg-lp"/>
    <line x1="248" y1="54" x2="328" y2="174" class="dg-l"/>
    <line x1="150" y1="198" x2="270" y2="198" class="dg-l dg-d"/>
    ${box(145, 8, 130, 46, "Kunde", "Nutzen &amp; Bedürfnis", true)}
    ${box(8, 174, 142, 46, "Unternehmen", "unser Angebot")}
    ${box(270, 174, 142, 46, "Wettbewerber", "deren Angebot")}
    ${T(210, 114, "Wettbewerbsvorteil", "dg-t")}
    ${T(210, 133, "relevant", "dg-at")}
    ${T(210, 149, "wahrnehmbar", "dg-at")}
    ${T(210, 165, "nachhaltig", "dg-at")}
  </svg>`;

  // S-R- und S-O-R-Modell
  const SVG_SOR = `<svg viewBox="0 0 420 194" role="img" aria-label="Im S-R-Modell führt ein Reiz direkt zur Reaktion, im S-O-R-Modell verarbeitet der Organismus den Reiz">{{defs}}
    <text x="6" y="60" class="dg-t">S-R</text>
    ${box(52, 34, 96, 42, "Reiz (S)", "z. B. Anzeige")}
    <line x1="150" y1="55" x2="304" y2="55" class="dg-l" marker-end="url(#ah)"/>
    ${T(227, 47, "Mensch = Black Box")}
    ${box(308, 34, 106, 42, "Reaktion (R)", "z. B. Kauf")}
    <text x="6" y="132" class="dg-t">S-O-R</text>
    ${box(52, 106, 96, 42, "Reiz (S)", "z. B. Anzeige")}
    <line x1="150" y1="127" x2="166" y2="127" class="dg-lp" marker-end="url(#ahp)"/>
    ${box(170, 106, 116, 42, "Organismus (O)", "nicht beobachtbar", true)}
    <line x1="288" y1="127" x2="304" y2="127" class="dg-lp" marker-end="url(#ahp)"/>
    ${box(308, 106, 106, 42, "Reaktion (R)", "z. B. Kauf")}
    ${T(228, 170, "im O: Aktivierung, Emotion, Motive,")}
    ${T(228, 186, "Einstellungen, Involvement, Lernen")}
  </svg>`;

  // Drei Ebenen der Situationsanalyse
  const SVG_UMWELT = `<svg viewBox="0 0 420 232" role="img" aria-label="Drei Ebenen der Situationsanalyse: Umwelt und Gesellschaft, Markt und Unternehmen">
    <rect x="6" y="6" width="408" height="220" rx="20" class="dg-b"/>
    <text x="20" y="28" class="dg-t">Umwelt &amp; Gesellschaft</text>
    <text x="400" y="28" text-anchor="end" class="dg-at">exogen</text>
    <text x="20" y="45" class="dg-s">Geopolitik, Wirtschaft, Ökologie, Technologie, Recht</text>
    <rect x="40" y="58" width="340" height="156" rx="18" class="dg-b"/>
    <text x="54" y="80" class="dg-t">Markt</text>
    <text x="366" y="80" text-anchor="end" class="dg-at">exogen</text>
    <text x="54" y="97" class="dg-s">Wettbewerb, Kunden, Handel</text>
    <rect x="110" y="112" width="200" height="88" rx="14" class="dg-a"/>
    ${T(210, 142, "Unternehmen", "dg-t")}
    ${T(210, 160, "Finanzen, Kompetenzen, Marken")}
    ${T(210, 182, "endogen – steuerbar", "dg-at")}
  </svg>`;

  // Marktpotenzial ⊃ Marktvolumen ⊃ Absatzvolumen
  const SVG_MARKT = `<svg viewBox="0 0 420 150" role="img" aria-label="Das Marktpotenzial umfasst das Marktvolumen, das Marktvolumen umfasst das eigene Absatzvolumen">
    <rect x="6" y="6" width="408" height="138" rx="16" class="dg-b"/>
    <text x="20" y="28" class="dg-t">Marktpotenzial</text>
    <text x="20" y="45" class="dg-s">maximal möglich – alle Anbieter</text>
    <rect x="20" y="56" width="290" height="80" rx="14" class="dg-b"/>
    <text x="34" y="78" class="dg-t">Marktvolumen</text>
    <text x="34" y="95" class="dg-s">tatsächlich verkauft – alle Anbieter</text>
    <rect x="34" y="104" width="124" height="24" rx="9" class="dg-a"/>
    ${T(96, 121, "Absatzvolumen", "dg-t")}
    <text x="168" y="121" class="dg-s">= unsere eigene Menge</text>
    ${T(362, 92, "noch")}${T(362, 108, "ungenutzt")}
  </svg>`;

  // ---------- Lektionen ----------
  Object.assign(window.LESSONS, {
    "bwl/bwl-b1": {
      title: "Was ist BWL? Wissenschaft, Betrieb & System",
      min: 9,
      goals: [
        "Die BWL im System der Wissenschaften einordnen",
        "Erfahrungs- und Erkenntnisobjekt unterscheiden",
        "Induktion, Deduktion und die drei Gütekriterien erklären",
        "Die BWL-Ansätze ihren Vertretern zuordnen (Gutenberg, Heinen, Ulrich …)",
        "Den Betrieb als System beschreiben und Betrieb, Unternehmung, Firma … unterscheiden",
        "Wirtschaftseinheiten und Größenklassen kennen"
      ],
      s: [
        { t: "intro", x: "Bevor du BWL lernst, musst du wissen, **was** die BWL eigentlich untersucht und **wie** sie zu Wissen kommt. Klingt trocken – aber genau diese Grundbegriffe kommen dran. Zur Klausur: **120 Minuten** = 80 Min BWL (von Medem) + 40 Min Marketing (Stenger), bestanden ab Gesamtnote 4,0 → 5 Credit Points." },
        { t: "svg", h: "Wo steht die BWL? – das System der Wissenschaften", svg: SVG_WISS, cap: "Der Weg zur BWL: **Wissenschaften → Realwissenschaften → Geisteswissenschaften → Wirtschaftswissenschaften → BWL**. Links stehen die Nachbarn auf jeder Stufe." },
        { t: "bal", h: "Erfahrungsobjekt vs. Erkenntnisobjekt", l: ["Erfahrungsobjekt: der **Betrieb**", ["das, was man **sehen und erleben** kann", "der wahrnehmbare Ausschnitt der Realität, von dem die Erkenntnis ausgeht", "z. B. eine Spedition mit Lkw, Lager und Mitarbeitern"]], r: ["Erkenntnisobjekt: das **Wirtschaften**", ["der **Blickwinkel**, unter dem die BWL den Betrieb untersucht", "v. a. Entscheidungen im privaten Betrieb im marktwirtschaftlichen Wettbewerb", "z. B. Wie plant die Spedition ihre Touren möglichst wirtschaftlich?"]], cap: "Eselsbrücke: Das **Erfahrungs**objekt kann man **erfahren** (anschauen), das **Erkenntnis**objekt ist das, was man **erkennen** will. Die BWL ist **anwendungsorientiert** – sie will Handlungsempfehlungen geben." },
        { t: "merke", h: "Definition Betrieb", x: "**Betrieb** = eine **planvoll organisierte Wirtschaftseinheit**, in der **Produktionsfaktoren kombiniert** werden, um Güter und Dienstleistungen herzustellen und abzusetzen.\n**Produktionsfaktoren** = alle Einsatzmengen, die man dafür braucht." },
        { t: "svg", h: "Induktion und Deduktion", svg: SVG_INDUKTION, cap: "**Induktion:** aus Beobachtungen (Empirie) eine allgemeine Hypothese oder Theorie ableiten. **Deduktion:** aus allgemeinen Aussagen nach Ableitungsregeln logisch auf den Einzelfall schließen." },
        { t: "ex", h: "Beide Wege an einem Beispiel", x: "**Induktion:** Du beobachtest 50 Speditionen. Alle mit Telematik haben weniger Leerfahrten. → Hypothese: „Telematik senkt Leerfahrten.“\n**Deduktion:** Theorie: „Bündelung senkt die Kosten je Sendung.“ → Daraus folgt für deine Spedition: Ein voller Sammelgut-Lkw ist je Sendung günstiger als zwei halb volle." },
        { t: "table", h: "Die drei Gütekriterien der Forschung", head: ["Kriterium", "Frage", "Beispiel"], rows: [
          ["Objektivität", "Kommt **jeder** zum gleichen Ergebnis?", "Zwei Mitarbeiter werten dieselbe Umfrage aus → gleiches Ergebnis"],
          ["Reliabilität (Zuverlässigkeit)", "Kommt bei **Wiederholung** dasselbe heraus?", "Die Waage zeigt beim zweiten Wiegen wieder 20 kg"],
          ["Validität (Gültigkeit)", "Wird wirklich das gemessen, was **gemessen werden soll**?", "Kundenzufriedenheit nicht nur an der Zahl der Beschwerden messen"]
        ], cap: "Eselsbrücke **O-R-V**: **O**bjektiv – egal, wer misst · **R**eliabel – egal, wie oft · **V**alide – das Richtige." },
        { t: "table", h: "Die Ansätze der BWL – wer steht wofür?", head: ["Ansatz", "Vertreter", "Kerngedanke"], rows: [
          ["Produktivitätsorientiert", "**Gutenberg**", "Verhältnis von Faktoreinsatz und Ertrag; Produktions-, Kosten- und Preistheorie; Annahme: vollkommene Information, rationale Entscheider"],
          ["Entscheidungsorientiert", "**Heinen**", "keine vollkommene Information mehr; realitätsnahe Modelle konkreter Entscheidungen; Öffnung zu sozialwissenschaftlichen Fragen"],
          ["Systemorientiert", "**Ulrich**", "das Unternehmen als **System**; interdisziplinär; Sollwerte als Zielsetzung"],
          ["Verhaltensorientiert", "–", "Abschied vom rein rationalen **Homo oeconomicus** → echtes menschliches Verhalten"],
          ["Umweltorientiert", "–", "ethisch-normativ (Stakeholder statt nur Shareholder) und ökologieorientiert"],
          ["Institutionenorientiert", "–", "Verfügungsrechte, **Transaktionskosten**, Informationsökonomik (wer weiß was?)"]
        ], cap: "Eselsbrücke **G-H-U**: **G**utenberg = **G**üter & Produktion · **H**einen = **H**andeln & Entscheiden · **U**lrich = **U**nternehmen als System. Den verhaltensorientierten Ansatz hast du dir als **„Wichtig! Angucken!“** notiert." },
        { t: "text", h: "Der Betrieb als System", x: "Ein **System** ist eine Menge geordneter **Elemente**, die durch **Beziehungen** verknüpft sind. Im Betrieb sind das z. B. Menschen und Betriebsmittel, organisiert in Abteilungen, die gemeinsam die Sachziele erfüllen.\nWeil im Betrieb **soziale, technische und ökonomische** Elemente zusammenwirken, heißt er **sozio-ökonomisches System**." },
        { t: "matrix", h: "Systemeigenschaften: Armbanduhr vs. Unternehmen", legend: "Hervorgehoben = die Eigenschaften eines Unternehmens", cols: ["Armbanduhr", "Unternehmen"], rows: [
          ["offen ↔ geschlossen", ["geschlossen", "kein Austausch mit der Umwelt"], ["offen", "tauscht Güter, Geld und Infos mit dem Markt", true]],
          ["statisch ↔ dynamisch", ["statisch", "bleibt, wie sie ist"], ["dynamisch", "verändert sich ständig", true]],
          ["autonom ↔ fremdbestimmt", ["autonom", "läuft von selbst"], ["fremdbestimmt", "Kunden, Gesetze und Wettbewerb wirken ein", true]],
          ["einfach ↔ komplex", ["eher einfach", "feste, berechenbare Mechanik"], ["komplex", "viele Menschen, Abteilungen, Beziehungen", true]]
        ] },
        { t: "merke", x: "**Unternehmen = offen, dynamisch, fremdbestimmt, komplex.** Merkhilfe: das Gegenteil der Armbanduhr." },
        { t: "table", h: "Betrieb, Unternehmung, Firma … – nicht dasselbe!", head: ["Begriff", "Bedeutung", "Beispiel"], rows: [
          ["Betrieb", "planvoll organisierte Wirtschaftseinheit", "auch ein Krankenhaus oder ein Stadtwerk"],
          ["Unternehmung", "Betrieb im **marktwirtschaftlichen** System", "eine Spedition, die am Markt Gewinn erzielen will"],
          ["Firma", "der **Name** (juristisch), unter dem ein Kaufmann Geschäfte betreibt", "der Name auf dem Briefkopf und im Handelsregister"],
          ["Geschäft", "eine Einzeltransaktion bzw. deren Ort", "ein Speditionsauftrag; ein Laden"],
          ["Fabrik / Werk", "Ort der Leistungserstellung (Sachgüter)", "das Werk in Wolfsburg"]
        ] },
        { t: "tree", h: "Wirtschaftseinheiten (Wirtschaftssubjekte)", root: "Wirtschaftseinheiten", kids: [
          ["Haushalte", ["private Haushalte", "öffentliche Haushalte"]],
          ["Betriebe", ["private Betriebe = **Unternehmen**", "gemischtwirtschaftliche Betriebe", "öffentliche Betriebe / Verwaltungen"]]
        ], cap: "Betriebe lassen sich nach **Betriebsziel** (Gewinn vs. Non-Profit), **Art der Leistung** (Sach- vs. Dienstleistung), **Wirtschaftszweig** (Statistik: 21 Abschnitte A–U) und **Größe** einteilen." },
        { t: "table", h: "Größenklassen von Unternehmen", head: ["Größe", "Mitarbeiter", "Umsatz"], rows: [
          ["Kleinst", "bis 9", "bis 2 Mio. €"],
          ["Klein", "10–49", "bis 10 Mio. €"],
          ["Mittel", "50–249", "bis 50 Mio. €"],
          ["Groß", "ab 250", "über 50 Mio. €"]
        ], cap: "Beispiel: 120 Mitarbeiter und 30 Mio. € Umsatz → **mittleres** Unternehmen. Und nicht vergessen: **Gewinn = Umsatz − Kosten** (negativ = Verlust)." },
        { t: "check", q: "Was ist das **Erkenntnisobjekt** der BWL?", o: ["Das Wirtschaften im Betrieb", "Der Betrieb selbst", "Der Markt", "Der Staat"], why: "Erfahrungsobjekt = der **Betrieb** (das, was man sieht). Erkenntnisobjekt = das **Wirtschaften** (der Blickwinkel)." },
        { t: "check", q: "Du befragst dieselben Kunden zweimal im Abstand einer Woche und bekommst fast die gleichen Antworten. Welches Gütekriterium ist erfüllt?", o: ["Reliabilität", "Validität", "Objektivität", "Produktivität"], why: "Gleiches Ergebnis bei **Wiederholung** = **Reliabilität** (Zuverlässigkeit)." },
        { t: "check", q: "Wer steht für den **entscheidungsorientierten** Ansatz?", o: ["Heinen", "Gutenberg", "Ulrich", "Drucker"], why: "**H**einen = **H**andeln/Entscheiden. Gutenberg = produktivitätsorientiert, Ulrich = systemorientiert." },
        { t: "check", q: "Welche Systemeigenschaften hat ein Unternehmen?", o: ["offen, dynamisch, fremdbestimmt, komplex", "geschlossen, statisch, autonom, einfach", "offen, statisch, autonom, komplex", "geschlossen, dynamisch, fremdbestimmt, einfach"], why: "Ein Unternehmen tauscht sich mit dem Markt aus (**offen**), verändert sich (**dynamisch**), wird von außen beeinflusst (**fremdbestimmt**) und hat viele Beziehungen (**komplex**)." },
        { t: "check", q: "Vom Einzelfall auf das Allgemeine schließen nennt man …", o: ["Induktion", "Deduktion", "Validität", "Reliabilität"], why: "**Induktion**: Beobachtung → Theorie. Die Deduktion geht den umgekehrten Weg." }
      ]
    },

    "bwl/bwl-b2": {
      title: "Leistungserstellung: Faktoren, Güter, ökonomisches Prinzip & Kennzahlen",
      min: 10,
      goals: [
        "Die Bestimmungsfaktoren des Betriebs nach Gutenberg zuordnen",
        "Die Produktionsfaktoren nach Gutenberg mit Beispielen nennen",
        "Bedürfnis, Bedarf und Nachfrage unterscheiden und Güter einteilen",
        "Maximal-, Minimal- und Extremumprinzip erkennen",
        "Den Leistungsprozess güter- und finanzwirtschaftlich beschreiben",
        "Produktivität, Wirtschaftlichkeit und Rentabilität berechnen (Flittiflotti)"
      ],
      s: [
        { t: "intro", x: "Jeder Betrieb macht im Kern dasselbe: Er **kombiniert Produktionsfaktoren** und erstellt daraus Leistungen. Ob er das gut macht, misst man mit drei Kennzahlen – und die kommen ziemlich sicher als **Rechenaufgabe** dran (Flittiflotti!)." },
        { t: "table", h: "Bestimmungsfaktoren des Betriebs (Gutenberg)", head: ["", "Marktwirtschaft", "Planwirtschaft"], rows: [
          ["Systemunabhängig – gilt immer", "Produktionsfaktoren · ökonomisches Prinzip · finanzielles Gleichgewicht", "dieselben drei"],
          ["Systemabhängig", "**erwerbswirtschaftliches** Prinzip · **Autonomie**prinzip · **Privateigentum**", "**Planerfüllungs**prinzip · **Organ**prinzip · **Gemeinschafts**eigentum"],
          ["Ergebnis", "Betrieb = **Unternehmen**", "Betrieb = **Organ der Gesamtwirtschaft**"]
        ], cap: "Erwerbswirtschaftlich = Ziel **Gewinnmaximierung** · Autonomie = der Betrieb entscheidet **selbst**, was und wie viel er produziert · Privateigentum = Produktionsmittel gehören Privatpersonen (mit Entscheidungs- und Gewinnrechten)." },
        { t: "tree", h: "Produktionsfaktoren nach Gutenberg (1951)", root: "Produktionsfaktoren", kids: [
          ["Elementarfaktoren", ["**ausführende Arbeit** – z. B. Fahrer, Sortierer", "**Betriebsmittel** – z. B. Lkw, Sortieranlage, Software", "**Werkstoffe** – Roh-, Hilfs-, Betriebsstoffe"]],
          ["Dispositiver Faktor", ["**Leitung**: Planung, Organisation, Kontrolle", "z. B. Tourenplanung, Disposition"]]
        ], cap: "Die Beispiele stammen aus dem **Paketsendungs-Beispiel** der Vorlesung. Betriebsmittel können materiell (Lkw) oder immateriell (Software) sein." },
        { t: "table", h: "Werkstoffe: Roh-, Hilfs- und Betriebsstoffe", head: ["Art", "Was ist das?", "Beispiel Auto"], rows: [
          ["Rohstoff", "**Hauptbestandteil** des Produkts", "Stahl"],
          ["Hilfsstoff", "**Nebenbestandteil** des Produkts", "Schrauben, Lack"],
          ["Betriebsstoff", "geht **nicht** ins Produkt ein, wird bei der Produktion verbraucht", "Strom, Schmieröl, Diesel"]
        ] },
        { t: "flow", h: "Vom Bedürfnis zur Nachfrage (Pizza-Beispiel)", steps: [
          ["Bedürfnis", "empfundener **Mangel** – unkonkret und unbegrenzt\n„Ich habe Hunger.“"],
          ["Bedarf", "**konkret** in Art und Menge\n„Ich will eine Pizza essen.“"],
          ["Nachfrage", "am Markt **tatsächlich gekauft**\n„Ich kaufe eine Pizza Salami bei Pizza Hut.“"]
        ] },
        { t: "tree", h: "Welche Güter gibt es?", root: "Güter", kids: [
          ["Freie Güter", ["Preis = 0 (z. B. Luft)", "**kein** Gegenstand des Wirtschaftens"]],
          ["Knappe Güter (Wirtschaftsgüter)", ["Preis > 0", "**materiell:** Produktionsgüter (Werkstoffe, Betriebsmittel) und Konsumgüter (Verbrauchs-, Gebrauchsgüter)", "**immateriell:** Dienstleistungen, Rechte"]]
        ], cap: "**FMCG** (Fast Moving Consumer Goods) = Güter des täglichen Bedarfs: schnell umgeschlagen, günstig, oft gekauft, geringes Involvement – z. B. Nestlé, Unilever, Henkel." },
        { t: "matrix", h: "Das ökonomische Prinzip – drei Varianten", legend: "Hervorgehoben = das wird optimiert. Grundidee: mit knappen Mitteln vernünftig wirtschaften – das Verhältnis von **Output zu Input** optimieren.", cols: ["Input (Aufwand)", "Output (Ertrag)"], rows: [
          ["Maximal" + SH + "prinzip", ["gegeben", "fest vorgegeben"], ["maximieren", "so viel wie möglich", true]],
          ["Minimal" + SH + "prinzip", ["minimieren", "so wenig wie möglich", true], ["gegeben", "fest vorgegeben"]],
          ["Extremum" + SH + "prinzip", ["variabel", "beides frei"], ["variabel", "bestes **Verhältnis** finden", true]]
        ] },
        { t: "ex", h: "So erkennst du das Prinzip in der Klausur", x: "• Spediteur hat **5.000 € Dieselbudget** und will damit möglichst viele Leistungen anbieten → **Maximalprinzip** (Aufwand fest)\n• Gründerin will **200.000 € Gewinn** mit möglichst wenig Eigenkapital → **Minimalprinzip** (Ergebnis fest)\n• Fahrer will mit **möglichst wenig Diesel möglichst weit** fahren → **Extremumprinzip** – streng genommen unerfüllbar („so wenig wie möglich für so viel wie möglich“), sinnvoll ist nur das **optimale Verhältnis**." },
        { t: "flow", h: "Der Leistungsprozess – güterwirtschaftlich", steps: [
          ["Beschaffung", "Produktionsfaktoren besorgen: Bedarf ermitteln, Bezugsquellen finden, bestellen, Lager managen", "Input"],
          ["Produktion", "Faktoren kombinieren", "Transformation"],
          ["Absatz", "Produkte und Dienstleistungen verkaufen – Marketing & Vertrieb", "Output"]
        ] },
        { t: "flow", h: "… und finanzwirtschaftlich", steps: [
          ["Finanzierung", "Woher kommt das Geld? (**Mittelherkunft**)"],
          ["Investition", "Wofür wird es ausgegeben? (**Mittelverwendung**)"],
          ["Rückfluss", "Das Geld fließt durch den **Absatz** zurück"]
        ], cap: "Absatz-Instrumente: **4P** = Product, Price, Place, Promotion – bei Dienstleistungen **7P** (+ People, Process, Physical Facilities)." },
        { t: "formula", h: "Drei Kennzahlen – drei Fragen", tex: R`\begin{aligned} \text{Produktivität} &= \frac{\text{Output (Menge)}}{\text{Input (Menge)}} \\[6pt] \text{Wirtschaftlichkeit} &= \frac{\text{Ertrag (Wert)}}{\text{Aufwand (Wert)}} \\[6pt] \text{Rentabilität} &= \frac{\text{Gewinn}}{\text{Kapital}} \cdot 100 \end{aligned}`, items: [
          "**Produktivität** ist **mengenmäßig** – z. B. Touren pro Fahrerstunde",
          "**Wirtschaftlichkeit** ist **wertmäßig** (Erlöse ÷ Kosten): **> 1** wirtschaftlich · **= 1** Kosten gedeckt · **< 1** Verlust",
          "**Rentabilität** zeigt in **%**, wie gut sich das eingesetzte Kapital (bzw. der Umsatz) verzinst"
        ] },
        { t: "formula", h: "Die drei Renditen", tex: R`\begin{aligned} \text{Umsatzrendite} &= \frac{\text{Gewinn}}{\text{Umsatz}} \cdot 100 \\[6pt] \text{Eigenkapitalrendite} &= \frac{\text{Gewinn}}{\text{Eigenkapital}} \cdot 100 \\[6pt] \text{Gesamtkapitalrendite} &= \frac{\text{Gewinn} + \text{FK-Zinsen}}{\text{Gesamtkapital}} \cdot 100 \end{aligned}` },
        { t: "table", h: "Flittiflotti GmbH – die Lösung auf einen Blick", head: ["Schritt", "Rechnung", "Ergebnis"], rows: [
          ["Faktormengen", "Arbeit 2 × 5 Std. · Lkw 2 × 5 Std. · Diesel", "10 Std. · 10 Lkw-Std. · 120 l"],
          ["Produktivität", "10 Touren ÷ 10 Std. · 10 ÷ 10 Lkw-Std. · 10 ÷ 120 l", "1 Tour/Std. · 1 Tour/Lkw-Std. · ≈ 0,083 Touren/l"],
          ["Kosten", "120 l × 2 € + 10 × 30 € + 10 × 20 €", "240 + 300 + 200 = **740 €**"],
          ["Erlös", "10 Touren × 100 €", "**1.000 €**"],
          ["Wirtschaftlichkeit", "1.000 € ÷ 740 €", "**≈ 1,35 > 1 → wirtschaftlich**"],
          ["Umsatzrendite", "50.000 ÷ 400.000 × 100", "**12,5 %**"],
          ["Gesamtkapitalrendite", "50.000 ÷ 500.000 × 100", "**10 %** (keine FK-Zinsen angegeben)"]
        ], cap: "Aufgabe: 10 Touren, 2 Fahrer je 5 Std. im eigenen Lkw, 120 l Diesel · Diesel 2 €/l, Fahrer 30 €/Std., Lkw 20 €/Std., Erlös 100 €/Tour · Gesamtkapital 500.000 €, Gewinn 50.000 €, Umsatz 400.000 €." },
        { t: "merke", h: "Trick für Teil 4 & 5: Wirtschaftlichkeit erhöhen", x: "Halte fest, was **fix** bleibt, und stelle nach dem Rest um:\n• Kosten fix (740 €), Ziel 2,2 → Erlös = 2,2 × 740 € = 1.628 € → **162,80 € pro Tour** (+62,8 %) – im harten Wettbewerb **unrealistisch**\n• Erlös fix (1.000 €), Ziel 1,6 → Kosten max. 1.000 € ÷ 1,6 = 625 € → für Personal bleiben 185 € → **18,50 €/Std.** (−38 %) – bei Fahrermangel **unrealistisch**\nIn der Klausur immer eine **Bewertung** dazuschreiben!" },
        { t: "check", q: "„Ich will eine Pizza essen.“ – Was ist das?", o: ["Bedarf", "Bedürfnis", "Nachfrage", "Angebot"], why: "Konkret in Art und Menge, aber noch nicht gekauft → **Bedarf**. „Ich habe Hunger“ wäre das Bedürfnis, der Kauf bei Pizza Hut die Nachfrage." },
        { t: "check", q: "Strom, der in der Produktion verbraucht wird, ist ein …", o: ["Betriebsstoff", "Rohstoff", "Hilfsstoff", "Betriebsmittel"], why: "Strom geht **nicht** ins Produkt ein, sondern wird verbraucht → **Betriebsstoff**. Betriebsmittel sind Maschinen, Lkw usw." },
        { t: "check", q: "Ein Spediteur hat **5.000 € Dieselbudget** und will damit so viele Touren wie möglich fahren. Welches Prinzip?", o: ["Maximalprinzip", "Minimalprinzip", "Extremumprinzip", "Erwerbsprinzip"], why: "Der **Aufwand ist fest** (5.000 €), der Ertrag soll maximal werden → **Maximalprinzip**." },
        { t: "check", q: "Erlöse 1.200 €, Kosten 800 €. Wie hoch ist die **Wirtschaftlichkeit**?", o: ["1,5", "0,67", "400 €", "150 %"], why: "1.200 € ÷ 800 € = **1,5** > 1 → wirtschaftlich. (400 € wäre der Gewinn.)" },
        { t: "check", q: "Welcher Bestimmungsfaktor gilt in **jedem** Wirtschaftssystem?", o: ["Finanzielles Gleichgewicht", "Prinzip des Privateigentums", "Erwerbswirtschaftliches Prinzip", "Planerfüllungsprinzip"], why: "Systemunabhängig sind Produktionsfaktoren, ökonomisches Prinzip und **finanzielles Gleichgewicht**. Privateigentum und Erwerbsprinzip gelten nur in der Marktwirtschaft, die Planerfüllung nur in der Planwirtschaft." },
        { t: "check", q: "Gewinn 30.000 €, Umsatz 600.000 €. Wie hoch ist die **Umsatzrendite**?", o: ["5 %", "2 %", "20 %", "0,5 %"], why: "30.000 ÷ 600.000 × 100 = **5 %**." }
      ]
    },

    "bwl/mkt-1": {
      title: "Marketing: Markt, Kundenorientierung & Kaufverhalten",
      min: 11,
      goals: [
        "Die 4P und die Marketing-Definition (Bruhn) erklären",
        "Marktteilnehmer und Marktformen unterscheiden",
        "Verkäufer- vs. Käufermarkt und Transaktions- vs. Beziehungsmarketing gegenüberstellen",
        "Das strategische Dreieck und das S-O-R-Modell erklären",
        "Aktivierung, Involvement, Vampir- und Bumerangeffekt sowie Maslow einordnen",
        "Die vier Kaufverhaltenstypen und Besonderheiten im B2B kennen"
      ],
      s: [
        { t: "intro", x: "Leitfrage des Moduls: **„Warum kauft jemand ausgerechnet bei uns?“** Marketing ist dabei keine Werbeabteilung, sondern eine **Denkhaltung**: Alles im Unternehmen wird vom Kunden her gedacht – sogar die Tourenplanung." },
        { t: "cards", h: "Die 4P des Marketing-Mix", items: [
          ["i:package", "Product", "Funktion, Qualität, Marke, Verpackung, Service"],
          ["i:tag", "Price", "Preis, Rabatte, Zahlungsbedingungen"],
          ["i:truck", "Place", "Kanäle, **Logistik**, Verfügbarkeit, Retouren"],
          ["i:megaphone", "Promotion", "Werbung, PR, Social Media, Verkauf"]
        ], cap: "Bei Dienstleistungen **7P**: zusätzlich People, Process, Physical Facilities. Beispiel für Place: Express für 4,99 € oder Standard kostenlos – die **Lieferzeit ist ein Marketinginstrument**, kein reines Logistikthema." },
        { t: "text", h: "Was ist Marketing? (Bruhn 2024)", x: "Marketing ist eine **unternehmerische Denkhaltung**. Sie zeigt sich in **Analyse, Planung, Umsetzung und Kontrolle** aller internen und externen Aktivitäten, die durch **konsequente Kundenorientierung** absatzmarktorientierte Unternehmensziele erreichen sollen.\n\n**Drei Kernaussagen:**\n• **Denkhaltung statt Abteilung**\n• **Kundennutzen statt Produkteigenschaft** – „Der Kunde kauft keinen Bohrer, sondern ein Loch.“\n• **Unternehmensziele statt Selbstzweck** – Kundenorientierung ist Mittel, nicht Ziel\n\nPeter F. Drucker: „Marketing is not a function, it is the whole business seen from the customer's point of view.“" },
        { t: "cards", h: "Wer ist am Markt beteiligt?", items: [
          ["i:users", "Nachfrager", "aktuelle und potenzielle Kunden"],
          ["i:factory", "Anbieter", "aktuelle und potenzielle Wettbewerber"],
          ["i:shopping-cart", "Absatzmittler", "Handel, Plattformen – verkaufen an die Endkunden"],
          ["i:truck", "Absatzhelfer", "Spedition, Zahlungsdienstleister – unterstützen den Verkauf"],
          ["i:message-circle", "Beeinflusser", "Bewertungen, Medien, Regulierung"]
        ], cap: "Für die Logistik wichtig: Der **Zusteller** (Absatzhelfer) ist oft der **einzige Mensch**, den der Endkunde persönlich trifft – ein Kontaktpunkt, den der Hersteller nicht selbst kontrolliert." },
        { t: "merke", h: "Markt und Tausch", x: "**Markt** (Meffert): aktuelle und potenzielle **Nachfrager** und **Anbieter** bestimmter Leistungen – **und die Beziehungen** zwischen ihnen.\nEin **Tausch** kommt zustande, wenn **beide Seiten** das Erhaltene höher schätzen als das Abgegebene. Marketing arbeitet an genau dieser Einschätzung." },
        { t: "table", h: "Marktformen: Wie viele Anbieter, wie viele Nachfrager?", head: ["Nachfrager ↓ · Anbieter →", "einer", "wenige", "viele"], rows: [
          ["viele", "Angebots" + SH + "monopol", "Angebots" + SH + "oligopol", "**Polypol**"],
          ["wenige", "beschränktes Monopol", "zweiseitiges Oligopol", "Nachfrage" + SH + "oligopol"],
          ["einer", "zweiseitiges Monopol", "beschränktes Nachfrage" + SH + "monopol", "Nachfrage" + SH + "monopol"]
        ], cap: "Die **oberste Zeile** (viele Nachfrager) beschreibt typische **Konsumgütermärkte**: Je mehr Anbieter, desto **kleiner der Preisspielraum** – im Polypol fast keiner." },
        { t: "bal", h: "Verkäufermarkt (früher) → Käufermarkt (heute)", mid: "→", l: ["Verkäufermarkt", ["Nachfrage **>** Angebot", "Engpass: die **Produktion**", "Marketing = Absatzorganisation"]], r: ["Käufermarkt", ["Angebot **>** Nachfrage", "Engpass: der **Kunde**", "Marketing wird **Führungsfunktion**"]], cap: "**Duale Führungsfunktion:** Marketing ist (1) eine gleichberechtigte **Abteilung** (Marktforschung, Kampagnen, Preise) und (2) das **Leitkonzept** für alle Bereiche – z. B. bestimmt die Tourenplanung die Lieferzeit, die der Kunde erlebt." },
        { t: "table", h: "Transaktions- vs. Beziehungsmarketing", head: ["", "Transaktionsorientiert", "Beziehungsorientiert"], rows: [
          ["Fokus", "der **einzelne Kauf**", "der **ganze Beziehungszyklus**"],
          ["Erfolgsmaß", "einzelner Abschluss", "**Kundenwert** über die Zeit"],
          ["Neu- vs. Stammkunde", "gleichwertig", "Stammkunde ist **günstiger**"],
          ["Kommunikation", "Reichweite", "datengetriebene Kundenbindung"],
          ["Typisch für", "Impulskäufe, täglicher Bedarf", "Abos, B2B, Dienstleistungen, E-Commerce"]
        ] },
        { t: "svg", h: "Das strategische Dreieck", svg: SVG_DREIECK, cap: "Ein **Wettbewerbsvorteil** entsteht im Dreieck aus Unternehmen, Kunde und Wettbewerber. Er muss für den Kunden **relevant**, für ihn **wahrnehmbar** und für das Unternehmen **nachhaltig (dauerhaft)** sein. Der billigste Preis ist **keine** Bedingung." },
        { t: "merke", h: "Nachhaltigkeit im Marketing", x: "**Triple Bottom Line**: ökologisch, sozial, ökonomisch. Risiken in der Kommunikation: **Greenwashing** und **Social Washing** – also mehr versprechen, als man tut." },
        { t: "text", h: "Kaufverhalten: sechs Fragen", x: "**Wann, was, wie viel, wo, wie** und **warum** wird gekauft? Die ersten fünf beantworten **eigene Daten** (Kasse, Webshop). Das **Warum** nicht – dafür braucht man Modelle wie S-O-R.\n**Einflussfaktoren auf vier Ebenen:** weiteres soziales Umfeld (Kultur, Schicht, Subkulturen) · direktes Umfeld (Familie, Freunde, Rollen) · persönliche Faktoren (Alter, Lebensphase, Beruf, Lebensstil) · psychische Faktoren (Aktivierung, Motive, Einstellungen, Involvement, Lernen)." },
        { t: "svg", h: "S-R-Modell vs. S-O-R-Modell", svg: SVG_SOR, cap: "Das **S-R-Modell** kennt nur Beobachtbares und erklärt nicht, warum **dieselbe Anzeige** bei verschiedenen Menschen unterschiedlich wirkt. Das **S-O-R-Modell** schon: Der Mensch (O) verarbeitet den Reiz unterschiedlich → deshalb braucht man **Segmentierung**." },
        { t: "bal", h: "Aktiviertheit vs. Involvement", l: ["Aktiviertheit", ["**allgemeine** innere Erregung", "Leistungsbereitschaft des Nervensystems", "z. B. hellwach nach dem Kaffee"]], r: ["Involvement", ["**themenbezogene** Ich-Beteiligung", "wie sehr mich ein Thema beschäftigt", "z. B. beim Autokauf hoch, bei Waschmittel niedrig"]], cap: "Man kann **hellwach** sein und trotzdem **kein Involvement** für Waschmittel haben." },
        { t: "table", h: "Drei Aktivierungstechniken in der Werbung", head: ["Technik", "Mittel", "Wirkung"], rows: [
          ["Emotional", "Humor, Erotik, Kindchenschema", "wirkt **länger** – funktioniert aber nur **einmal**"],
          ["Kognitiv", "Überraschung, Widerspruch", "wirkt **sofort** – bei Wiederholung **Abwehr**"],
          ["Physisch", "grelle Farben, Lautstärke, Bewegung", "wirkt **schnell** – kann die Botschaft **überlagern**"]
        ] },
        { t: "bal", h: "Wenn Werbung nach hinten losgeht", l: ["Vampireffekt", ["Ein starker Reiz **saugt** die Aufmerksamkeit von der Botschaft ab", "Die Werbung wird erinnert – die **Marke nicht**", "z. B. Promis, Erotik, Angst"]], r: ["Bumerangeffekt", ["Die Werbung bewirkt das **Gegenteil**", "**Ablehnung** statt Vorliebe", "z. B. Botschaft passt nicht zur Realität, unpassende Wortwahl"]] },
        { t: "pyr", h: "Maslows Bedürfnispyramide", levels: [
          ["5. Selbst" + SH + "verwirklichung", "das eigene Potenzial entfalten"],
          ["4. Individual" + SH + "bedürfnisse", "Anerkennung, Status"],
          ["3. Soziale Bedürfnisse", "Zugehörigkeit, Freunde"],
          ["2. Sicherheit", "Wohnung, Arbeitsplatz"],
          ["1. Physiologische Bedürfnisse", "Essen, Schlaf"]
        ], cap: "Von **unten nach oben** lesen: Erst wenn eine Stufe erfüllt ist, wird die nächste wichtig. **Motiv** = Antrieb aus einem empfundenen Mangel · **Motivation** = die Energie, die daraus entsteht. Motive sind primär/sekundär (angeboren/erlernt), intrinsisch/extrinsisch, bewusst/unbewusst." },
        { t: "matrix", h: "Vier Typen des Kaufverhaltens", cols: ["große Marken" + SH + "unterschiede", "geringe Marken" + SH + "unterschiede"], rows: [
          ["hohes Involvement", ["Komplex", "Auto, Immobilie"], ["Dissonanz" + SH + "reduzierend", "Tablet, Versicherung"]],
          ["niedriges Involvement", ["Variety Seeking", "Wein, Snacks"], ["Habitualisiert", "Zahnpasta, Milch"]]
        ], cap: "**Dissonanzreduzierend**: Man kauft überlegt, zweifelt danach aber („War das richtig?“) und sucht Bestätigung. **Habitualisiert** = Gewohnheitskauf. **Variety Seeking** = Abwechslung aus Lust am Neuen." },
        { t: "table", h: "B2B: Warum Unternehmen anders kaufen", head: ["Merkmal", "Bedeutung"], rows: [
          ["Formalisierung", "Ausschreibungen, feste Abläufe"],
          ["Kollektiventscheidung", "**Buying Center**: Nutzer, Einkäufer und Budgetverantwortliche entscheiden gemeinsam"],
          ["Fremdbestimmung", "Der Endkunde schreibt Teile vor"],
          ["Anreize & Sanktionen", "Einkäufer werden an Einsparungen gemessen"],
          ["Compliance", "Vergaberegeln, Audits"]
        ] },
        { t: "check", q: "Viele Anbieter, viele Nachfrager – welche Marktform?", o: ["Polypol", "Angebotsoligopol", "Angebotsmonopol", "Zweiseitiges Monopol"], why: "Viele auf beiden Seiten = **Polypol** – der einzelne Anbieter hat kaum Preisspielraum." },
        { t: "check", q: "Die Werbung mit einem Promi wird erinnert, die Marke aber nicht. Welcher Effekt?", o: ["Vampireffekt", "Bumerangeffekt", "Bullwhip-Effekt", "Halo-Effekt"], why: "Der starke Reiz (Promi) **saugt** die Aufmerksamkeit von der Marke ab → **Vampireffekt**." },
        { t: "check", q: "Zahnpasta kaufen ist typisch für welches Kaufverhalten?", o: ["Habitualisiert", "Komplex", "Variety Seeking", "Dissonanzreduzierend"], why: "Niedriges Involvement und geringe Markenunterschiede → **Gewohnheitskauf (habitualisiert)**." },
        { t: "check", q: "Welches Modell erklärt, warum **dieselbe Anzeige** unterschiedlich wirkt?", o: ["S-O-R-Modell", "S-R-Modell", "4P-Modell", "BCG-Matrix"], why: "Im **S-O-R-Modell** verarbeitet der Organismus (Mensch) den Reiz – mit Emotionen, Motiven, Einstellungen und Involvement." },
        { t: "check", q: "Ein Wettbewerbsvorteil muss **nicht** …", o: ["der billigste Preis sein", "für den Kunden relevant sein", "für den Kunden wahrnehmbar sein", "dauerhaft (nachhaltig) sein"], why: "Die drei Bedingungen: **relevant, wahrnehmbar, nachhaltig**. Der niedrigste Preis ist keine Bedingung." },
        { t: "check", q: "Heute ist das Angebot größer als die Nachfrage. Das ist ein …", o: ["Käufermarkt", "Verkäufermarkt", "Monopolmarkt", "Planmarkt"], why: "Angebot > Nachfrage → der Engpass liegt beim **Kunden** → **Käufermarkt**. Marketing wird zur Führungsfunktion." }
      ]
    },

    "bwl/mkt-2": {
      title: "Marktforschung, Analyse, Ziele & Segmentierung",
      min: 11,
      goals: [
        "Den Marktforschungsprozess und Primär- vs. Sekundärforschung erklären",
        "Befragung, Beobachtung und Experiment (A/B-Test) vergleichen",
        "Die Ebenen der Situationsanalyse und die Marktgrößen unterscheiden",
        "Marktanteil und relativen Marktanteil berechnen",
        "SWOT-Analyse und BCG-Matrix anwenden",
        "Ziele operationalisieren und Märkte sinnvoll segmentieren"
      ],
      s: [
        { t: "intro", x: "Bevor ein Unternehmen Geld ins Marketing steckt, muss es wissen: **Wie sieht der Markt aus? Wo stehen wir? Wo wollen wir hin – und für wen?** Genau in dieser Reihenfolge geht diese Lektion vor: **forschen → analysieren → Ziele setzen → Zielgruppen bilden**." },
        { t: "flow", h: "Der Marktforschungsprozess", steps: [
          ["Problem definieren", "Welche Frage wollen wir beantworten?", "entscheidet über den Wert!"],
          ["Informationen gewinnen", "Stichprobe, Methode, Erhebung"],
          ["Informationen verarbeiten", "prüfen und auswerten"],
          ["Ergebnisse kommunizieren", "verständlich an die Entscheider"]
        ], cap: "**Marktforschung** (Bruhn 2024) = Gewinnung, Auswertung und Interpretation von Informationen über jetzige und zukünftige Marketingsituationen. **Vier Funktionen:** Anregung (Wo liegen Chancen?) · Prognose (Was wird passieren?) · Bewertung (Was ist besser?) · Kontrolle (Hat es gewirkt?)." },
        { t: "bal", h: "Sekundär- vs. Primärforschung", l: ["Sekundärforschung", ["**vorhandene** Daten auswerten (intern oder extern)", "günstig und schnell", "aber: oft nicht passgenau, Aktualität unklar"]], r: ["Primärforschung", ["**neue** Daten erheben", "Befragung, Beobachtung, Experiment", "passgenau und aktuell – aber **teuer**"]], cap: "Reihenfolge merken: **erst intern suchen → dann extern → erst dann selbst erheben**." },
        { t: "table", h: "Drei Methoden der Primärforschung", head: ["Methode", "Zeigt …", "Schwäche"], rows: [
          ["Befragung", "was Menschen **sagen** – Gründe und Absichten", "Menschen wissen nicht immer, **warum** sie handeln"],
          ["Beobachtung", "was Menschen **tun** – unabhängig von Selbstauskunft", "zeigt nicht den **Grund**"],
          ["Experiment", "die **Wirkung** einer gezielt veränderten Größe → Aussagen über **Ursachen**", "aufwendig, teils künstlich"]
        ] },
        { t: "ex", h: "Der A/B-Test – ein echtes Experiment", x: "Ein Online-Shop zeigt der Hälfte der Besucher **„Lieferung morgen“** (A) und der anderen Hälfte **„Lieferung in 2–3 Tagen“** (B). Weil die Besucher **zufällig** verteilt werden, unterscheiden sich die Gruppen nur in der Variante. Kauft Gruppe A mehr, liegt das **an der Lieferzeit** → **Kausalität** statt bloßer Korrelation." },
        { t: "table", h: "Befragungsarten im Vergleich", head: ["Art", "Stärke", "Schwäche"], rows: [
          ["Persönlich", "Rückfragen möglich, hohe Antwortquote", "teuer, Interviewer beeinflusst"],
          ["Telefonisch", "günstig, Rückfragen möglich", "hohe Ablehnung"],
          ["Schriftlich", "günstig, kein Interviewereinfluss", "geringer Rücklauf"],
          ["Online", "riesige Reichweite, schnell", "geringer Rücklauf, **Selbstselektion**"]
        ], cap: "**Selbstselektion:** Es antwortet nur, wer ohnehin eine Meinung hat. Das Ergebnis ist dann nicht falsch erhoben, sondern **falsch verallgemeinert**. Auf die Grundgesamtheit schließen darf man nur bei **Zufallsauswahl** – nicht wegen einer großen Stichprobe. Eine **Vollerhebung** lohnt sich nur bei sehr kleiner Grundgesamtheit (z. B. 30 Schlüsselkunden)." },
        { t: "svg", h: "Drei Ebenen der Situationsanalyse", svg: SVG_UMWELT, cap: "Nur das **Unternehmen** selbst ist steuerbar (endogen). Umwelt und Markt kann man nicht steuern (exogen) – man muss sie **beobachten und nutzen**." },
        { t: "text", h: "Den relevanten Markt abgrenzen", x: "Drei Kriterien: **sachlich** (welche Produkte?), **räumlich** (regional, national, global?), **zeitlich** (z. B. saisonal?).\n**Häufigster Fehler:** zu eng am **eigenen Produkt** statt am **Kundenbedürfnis** abgrenzen. Dann übersieht man Substitute und neue Wettbewerber – ein Buchverlag konkurriert im **Markt für Wissensvermittlung** z. B. auch mit Lernvideos und Podcasts." },
        { t: "svg", h: "Marktpotenzial, Marktvolumen, Absatzvolumen", svg: SVG_MARKT, cap: "Beispiel aus der Rechenaufgabe: Potenzial **78 Mio.** Sendungen, Volumen **60 Mio.**, eigener Absatz **4,2 Mio.** → 18 Mio. Sendungen sind noch ungenutzt." },
        { t: "formula", h: "Marktanteil berechnen", tex: R`\begin{aligned} \text{Marktanteil} &= \frac{\text{Absatzvolumen}}{\text{Marktvolumen}} \cdot 100 \\[6pt] \text{relativer Marktanteil} &= \frac{\text{eigener Marktanteil}}{\text{Marktanteil des stärksten Konkurrenten}} \end{aligned}`, items: [
          "Beispiel: 4,2 Mio. ÷ 60 Mio. × 100 = **7 %**",
          "Wächst der Markt auf 78 Mio. und das Unternehmen bleibt bei 4,2 Mio. → nur noch **≈ 5,4 %** – obwohl es nichts verloren hat: **Der Markt wächst an ihm vorbei.**",
          "Um 7 % zu halten, müsste es um 30 % auf **≈ 5,5 Mio.** Sendungen wachsen → Wachstumsstrategie (Marktdurchdringung oder Marktentwicklung)",
          "Relativer Marktanteil **> 1** heißt: Wir sind **Marktführer**"
        ] },
        { t: "matrix", h: "SWOT-Analyse", legend: "SWOT führt die **interne** Sicht (Unternehmen) und die **externe** Sicht (Umwelt & Markt) zusammen.", cols: ["positiv", "negativ"], rows: [
          ["intern (wir)", ["Strengths", "Worin sind wir besser?\nz. B. dichtes eigenes Netz", true], ["Weak" + SH + "nesses", "Worin sind andere besser?\nz. B. veraltete IT"]],
          ["extern (Umfeld)", ["Oppor" + SH + "tunities", "Welche Entwicklungen nützen uns?\nz. B. E-Commerce wächst", true], ["Threats", "Welche Entwicklungen schaden uns?\nz. B. Fahrermangel"]]
        ] },
        { t: "matrix", h: "BCG-Matrix (Portfolio-Analyse)", cols: ["niedriger relativer Marktanteil", "hoher relativer Marktanteil"], rows: [
          ["hohes Markt" + SH + "wachstum", ["Question Marks", "Nachwuchs: investieren oder aufgeben?"], ["Stars", "Wachstum fördern – investieren", true]],
          ["niedriges Markt" + SH + "wachstum", ["Poor Dogs", "kaum Zukunft – eher aufgeben"], ["Cash Cows", "Geld abschöpfen – finanzieren die anderen", true]]
        ], cap: "**Grenzen der BCG-Matrix:** nur zwei Größen, ignoriert Verbundeffekte, unterstellt einen Lebenszyklus und sagt nicht, **warum** ein Produkt dort steht." },
        { t: "cards", h: "Ein gutes Ziel hat drei Bestandteile", items: [
          ["i:target", "Zielinhalt", "**Was?** – z. B. Umsatz mit Eiscreme"],
          ["i:trending-up", "Ausmaß", "**Wie viel?** – messbar: + 15 %"],
          ["i:calendar", "Zeitbezug", "**Bis wann?** – bis Ende 2027"]
        ], cap: "Zusammen: „Umsatz mit Eiscreme um **15 %** bis **Ende 2027** steigern.“ **Marketingziele** leiten sich aus den **Unternehmenszielen** ab und werden in Instrumentalziele (Produkt, Preis, Distribution, Kommunikation) heruntergebrochen." },
        { t: "table", h: "Drei Gruppen von Marketingzielen", head: ["Gruppe", "Beispiele", "Messbarkeit"], rows: [
          ["Ökonomisch", "Gewinn, Umsatz, Deckungsbeitrag, Marktanteil, CLV", "**direkt** messbar"],
          ["Vorökonomisch", "Bekanntheit, Präferenz, Zufriedenheit, Weiterempfehlung", "**vorlaufend**, nur indirekt messbar"],
          ["Ökologisch & sozial", "Recyclingquote, erneuerbare Energie, faire Arbeit", "zunehmend **berichtspflichtig**"]
        ], cap: "**Zielbeziehungen:** komplementär (stützen sich) · neutral (unabhängig) · **Zielkonflikt** (behindern sich) – klassisch: Lieferkosten senken vs. Liefergeschwindigkeit erhöhen." },
        { t: "text", h: "Marktsegmentierung", x: "Ein **heterogener** Gesamtmarkt wird in Teilmärkte aufgeteilt, die **in sich möglichst ähnlich** (homogen) und **untereinander möglichst verschieden** sind – damit man sie gezielt bearbeiten kann. Im engeren Sinn heißt das, den Markt zu **erfassen**, im weiteren Sinn auch, ihn zu **bearbeiten**." },
        { t: "cards", h: "Sechs Anforderungen an Segmentierungskriterien", items: [
          ["i:star", "Verhaltensrelevanz", "**die wichtigste!** Erklärt das Merkmal das Kaufverhalten?"],
          ["i:ruler", "Messbarkeit", "Das Merkmal lässt sich erheben"],
          ["i:map-pin", "Zugänglichkeit", "Das Segment ist über Medien und Kanäle erreichbar"],
          ["i:compass", "Handlungsfähigkeit", "Daraus lassen sich gezielte Maßnahmen ableiten"],
          ["i:coins", "Wirtschaftlichkeit", "Der Nutzen ist größer als die Kosten"],
          ["i:timer", "Zeitliche Stabilität", "Das Segment bleibt eine Weile bestehen"]
        ] },
        { t: "ex", h: "Warum „alle zwischen 18 und 29“ keine Zielgruppe ist", x: "Eine 24-jährige Berufspendlerin und ein 24-jähriger Student sind gleich alt – aber sie haben **völlig unterschiedliches Kaufverhalten** (Zeit, Geld, Bedürfnisse). Alter ist ein **Merkmal, kein Segment** → es fehlt die **Verhaltensrelevanz**." },
        { t: "table", h: "Segmentierungskriterien nach Marktart", head: ["Markt", "Kriterien"], rows: [
          ["Konsumgüter", "**verhaltensorientiert** (Markentreue, Preisklasse) · **psychographisch** (Lebensstil, Nutzen) · **soziodemographisch** (Alter, Einkommen) · **geographisch**"],
          ["Industriegüter", "**branchenbezogen** · **unternehmensbezogen** (Umsatz, Mitarbeiter) · **gruppenbezogen** (Buying Center) · **personenbezogen** (Funktion des Entscheiders)"]
        ] },
        { t: "check", q: "Welche Methode erlaubt Aussagen über **Ursachen** (Kausalität)?", o: ["Experiment", "Befragung", "Beobachtung", "Sekundärforschung"], why: "Nur im **Experiment** wird eine Größe gezielt verändert und der Rest durch **Zufallszuteilung** gleich gehalten – z. B. beim A/B-Test." },
        { t: "check", q: "Absatz 3 Mio. Stück, Marktvolumen 40 Mio. Stück. Wie hoch ist der **Marktanteil**?", o: ["7,5 %", "13,3 %", "3 %", "12 %"], why: "3 ÷ 40 × 100 = **7,5 %**." },
        { t: "check", q: "„Unsere IT ist veraltet“ gehört in der SWOT-Analyse zu …", o: ["Weaknesses (intern)", "Threats (extern)", "Strengths (intern)", "Opportunities (extern)"], why: "Eine eigene Schwäche ist **intern** und **negativ** → **Weakness**. Threats sind Gefahren von außen." },
        { t: "check", q: "Hoher relativer Marktanteil, niedriges Marktwachstum – welches BCG-Feld?", o: ["Cash Cow", "Star", "Question Mark", "Poor Dog"], why: "Starke Position in einem gesättigten Markt → viel Geld bei wenig Investitionsbedarf → **Cash Cow**." },
        { t: "check", q: "Welche Anforderung an Segmentierungskriterien ist die **wichtigste**?", o: ["Verhaltensrelevanz", "Messbarkeit", "Zeitliche Stabilität", "Zugänglichkeit"], why: "Ohne **Verhaltensrelevanz** bildet man Gruppen, die sich gar nicht unterschiedlich verhalten (siehe die 18- bis 29-Jährigen)." },
        { t: "check", q: "„Markenbekanntheit steigern“ ist ein … Ziel.", o: ["vorökonomisches", "ökonomisches", "ökologisches", "soziales"], why: "Bekanntheit ist **vorlaufend** und nur indirekt messbar → **vorökonomisch**." }
      ]
    }
  });
})();
