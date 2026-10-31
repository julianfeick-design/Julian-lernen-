/*
 * Grundlagen und Funktionen der Logistik (Prof. Dr. Alexander Nehm, WSTL 26)
 * Quellen: Folien „Einführung in die Logistik“ + Julians handschriftliche Notizen.
 */
window.BUILTIN_FOLDERS.push({
  id: "logistik",
  name: "Grundlagen & Funktionen der Logistik",
  emoji: "📦",
  color: "#f2a900",
  decks: [
    // ------------------------------------------------------------------
    {
      id: "l-begriff",
      name: "1 · Begriff der Logistik, Logistik vs. SCM",
      description: "7 R, TUL, Definitionen, Logistik vs. Supply Chain Management, Service vs. Kosten, Entwicklungsstufen",
      cards: [
        { id: "lb01", q: "Was sind die sieben „R“ der Logistik?", a: "Das richtige Produkt, in der richtigen Menge, zur richtigen Zeit, am richtigen Ort, zu den richtigen Kosten, mit den richtigen Informationen, in der richtigen Qualität.", important: true },
        { id: "lb02", q: "Wie definiert Plowman (1964) die Logistik?", a: "Die Logistik hat dafür zu sorgen, dass ein Empfangspunkt gemäß seines Bedarfs von einem Lieferpunkt mit dem richtigen Produkt (Menge und Sorte), im richtigen Zustand, zur richtigen Zeit, am richtigen Ort zu minimalen Kosten versorgt wird." },
        { id: "lb03", q: "Welche drei zentralen Aufgaben hat die Logistik und welche „Überbrückung“ leisten sie?", a: "Transport = Raumüberbrückung (Güter zwischen Standorten bewegen).\nLagerung = Zeitüberbrückung (Bestände bis zum Abruf aufbewahren).\nKommissionierung/Umschlag = Veränderung der Anordnung (Waren für den Versand zusammenstellen).", important: true },
        { id: "lb04", q: "Welche typischen Aufgaben hat die Logistik? (aus deinen Notizen)", a: "TUL (Transport, Umschlag, Lagerung), Bestandsmanagement, Auftragsabwicklung, Verpackung/Kommissionierung, Logistiknetzwerk und 3PL-Steuerung." },
        { id: "lb05", q: "Wissenschaftliche Definition von Logistikmanagement (CSCMP)?", a: "Teil des Supply Chain Managements, der den effizienten und effektiven Vorwärts- und Rückfluss sowie die Lagerung von Gütern, Dienstleistungen und zugehörigen Informationen zwischen Ursprungs- und Verbrauchspunkt plant, umsetzt und steuert, um Kundenanforderungen zu erfüllen.", important: true },
        { id: "lb06", q: "Kurzdefinition Logistik nach Christopher (2016)?", a: "Logistik ist die Planung, Steuerung, Realisierung und Kontrolle von Material- und den dazugehörigen Informationsflüssen." },
        { id: "lb07", q: "Welche Vorteile bringt erfolgreiche Logistik?", a: "Effizienzsteigerung (Zeit und Kosten sparen), Kostenreduktion (Bestände und Wege optimieren), Kundenzufriedenheit (pünktliche Lieferung, Kontrolle über die Lieferkette)." },
        { id: "lb08", q: "Woraus besteht ein logistisches Netzwerk?", a: "Aus Knoten (z. B. Lager) und Kanten (Transportwege), die zusammen eine effiziente Raum- und Zeitüberbrückung in der Lieferkette ermöglichen." },
        { id: "lb09", q: "Logistik vs. Supply Chain Management – der Kernunterschied?", a: "Logistik steuert logistische Flüsse (Transport, Lager, Umschlag, Bestände, Auftragsabwicklung) – meist aus Sicht des eigenen (fokalen) Unternehmens.\nSCM integriert und koordiniert die gesamte unternehmensübergreifende Supply Chain vom Rohstoff bis zum Endkunden.", important: true, hint: "Notiz: Logistik koordiniert im Unternehmen die logistische Kette, SCM die gesamte Kette." },
        { id: "lb10", q: "Logistik vs. SCM: Managementebene und Kooperationsumfang?", a: "Logistik: operativ, taktisch, strategisch; interne Bereiche + direkte Logistikpartner.\nSCM: stärker strategisch, integrativ, systemisch; Lieferanten, Dienstleister, Handel und Kunden über mehrere Stufen." },
        { id: "lb11", q: "Welche drei Flüsse koordiniert die Logistik/das SCM?", a: "Güter-/Materialfluss, Informationsfluss, Finanzfluss." },
        { id: "lb12", q: "Welcher Zielkonflikt besteht bei Logistikleistungen?", a: "Logistikservice (Lieferzeit, Lieferqualität, Lieferflexibilität, Lieferbereitschaft) = marktgerechte Leistung\nvs.\nLogistikkosten (Bestände, Handling, Transport, Systeme) = minimaler Aufwand.\nMehr Service kostet mehr – die Waage muss ausbalanciert werden.", important: true },
        { id: "lb13", q: "Warum konkurrieren Effizienz und Verfügbarkeit (Resilienz) in der Logistik? (Beispiel aus deinen Notizen)", a: "Effizienzsteigerung ist immer Ziel – wird sie zu stark getrieben (z. B. nur 1 Handy auf Lager statt 10), fehlt bei Ausfällen der Puffer: Kunden bleiben unversorgt und unzufrieden. Just-in-Time ist nicht krisensicher." },
        { id: "lb14", q: "Entwicklungsstufen der Logistik (1960er bis heute)?", a: "1960er: TUL-Logistik (Transport, Umschlag, Lagerung).\n1970/80er: Funktionenintegrations- & Koordinationslogistik (7 R, Kundenbedürfnisse).\n1990er: Fließsystemlogistik/Supply Chain Management (Netzwerk, Pull-Logik).\n2000er: global integrierte Netzwerklogistik (AutoID, Automatisierung, Daten).\nHeute: Logistik in der VUCA- und BANI-Welt (Digitalisierung, Nachhaltigkeit, De-/Globalisierung, demografischer Wandel).", important: true },
        { id: "lb15", q: "Was bedeuten VUCA und BANI?", a: "VUCA: Volatility, Uncertainty, Complexity, Ambiguity (volatil, unsicher, komplex, mehrdeutig).\nBANI: Brittle, Anxious, Non-linear, Incomprehensible (brüchig, ängstlich, nicht-linear, unbegreiflich). Beschreiben die heutige Welt, in der Supply Chains resilient sein müssen." },
        { id: "lb16", q: "Was waren schon immer die Erfolgsfaktoren der Logistik (Ursprünge)?", a: "Kommunikation, Infrastruktur, Organisation, Transport, Warenarten, Verkehrsträger." }
      ],
      quiz: [
        { q: "Welches „R“ gehört NICHT zu den 7 R?", options: ["Richtige Menge", "Richtige Zeit", "Richtiger Lieferant", "Richtige Qualität"], correct: 2, explain: "Produkt, Menge, Zeit, Ort, Kosten, Informationen, Qualität." },
        { q: "Lagerung leistet welche Überbrückung?", options: ["Raumüberbrückung", "Zeitüberbrückung", "Mengenüberbrückung", "Wertüberbrückung"], correct: 1, explain: "Transport = Raum, Lagerung = Zeit." },
        { q: "Was gehört zum Logistikservice (nicht zu den Kosten)?", options: ["Bestände", "Handling", "Lieferflexibilität", "Systeme"], correct: 2, explain: "Service: Lieferzeit, -qualität, -flexibilität, -bereitschaft." },
        { q: "Was unterscheidet SCM von Logistik?", options: ["SCM ist rein operativ", "SCM koordiniert unternehmensübergreifend die gesamte Kette", "SCM betrifft nur Transport", "Es gibt keinen Unterschied"], correct: 1, explain: "SCM = End-to-End über mehrere Stufen." },
        { q: "In welchem Jahrzehnt stand die Fließsystemlogistik / SCM im Fokus?", options: ["1960er", "1970/80er", "1990er", "2000er"], correct: 2, explain: "1960er TUL, 70/80er Koordination, 90er SCM, 2000er globale Netzwerke." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "l-markt",
      name: "2 · Logistikwirtschaft: Zahlen, Segmente, Player",
      description: "331 Mrd. €, Eigenleistung vs. extern, Logistikstandort Deutschland, Marktsegmente (Folie 21!)",
      cards: [
        { id: "lm01", q: "Wie groß ist der Wirtschaftsbereich Logistik in Deutschland und welcher Rang ist das?", a: "Ca. 331 Mrd. € (2024, Prognose) – drittgrößter Wirtschaftsbereich Deutschlands. Ca. 3,35 Mio. Beschäftigte (2023).", important: true },
        { id: "lm02", q: "Warum muss man bei den 331 Mrd. € von Kosten statt Umsatz sprechen?", a: "Es ist das Logistikwirtschaftsvolumen – inklusive Eigenleistungen von Industrie und Handel (eigener Lagerbetrieb, innerbetrieblicher Materialfluss), die nicht verkauft werden. Also Logistikkosten, nicht (nur) Dienstleisterumsätze.", important: true },
        { id: "lm03", q: "Wie teilt sich das Logistikvolumen auf Eigenleistung und extern vergebene Leistungen auf (laut Logistik-Folien)?", a: "Ca. 50 / 50: Eigenleistungen von Industrie und Handel vs. extern vergebene Logistikdienstleistungen (Spedition, Transport, Paketdienst, Kontraktlogistik).\n(Hinweis: In VBL 1 nennt Nehm ca. 40 % outsourced / 60 % insourced – merk dir beide Folien.)", important: true },
        { id: "lm04", q: "Wie hoch ist der Anteil der Logistikkosten an den Gesamtkosten eines Unternehmens? (Notiz)", a: "Ca. 5–10 % der Gesamtkosten." },
        { id: "lm05", q: "Welche vier Gründe erklären die hohe logistische Bedeutung Deutschlands?", a: "1. Hohe Kaufkraft der Bevölkerung (85 Mio. Einwohner, bevölkerungsreichstes Land Europas)\n2. Zentrale Lage in der Mitte Europas (Transitland Nord-Süd/West-Ost, Seehäfen)\n3. Globale Lieferketten (Exportnation, starke Handelsverflechtung)\n4. Effizienz und Zuverlässigkeit (Top 5 im Logistics Performance Index der Weltbank)", important: true },
        { id: "lm06", q: "Welche deutschen Seehäfen sind besonders wichtig?", a: "Hamburg, Bremerhaven und Wilhelmshaven – auch für Transporte ost- und südosteuropäischer Länder, da besser vernetzt als Mittelmeer-Alternativen." },
        { id: "lm07", q: "Welche vier wichtigen Wertschöpfungsketten/„Produktionstypen“ der Logistik gibt es?", a: "Ladungsverkehre, Stückgutverkehr, Paketdienste, Kontraktlogistik." },
        { id: "lm08", q: "In welche drei Gruppen werden die Marktsegmente der Logistik eingeteilt?", a: "Internationale Transport-/Logistiksysteme · Bulk- und Direktladungsverkehrslogistik · handlingsbedürftige Industrie- und Konsumgüterlogistik." },
        { id: "lm09", q: "Klausurfrage: Wie viel Umsatz machen Logistikdienstleister im KEP-Bereich?", a: "KEP-Dienste (Kurier, Express, Paket): ca. 27,4 Mrd. € (Marktsegmente Deutschland 2021, Fraunhofer IIS) – davon 26,0 Mrd. € outsourced.", important: true, hint: "In deinen Notizen als Klausurfrage markiert! Folie 21." },
        { id: "lm10", q: "Welches ist das größte Marktsegment der Logistik in Deutschland (Folie 21)?", a: "Kontraktlogistik-Dienstleistungen mit ca. 80 Mrd. € (davon ca. 22,5 Mrd. € outsourced).", important: true },
        { id: "lm11", q: "Marktsegmente Folie 21 – Größenordnungen der wichtigsten Segmente (Mrd. €)?", a: "Kontraktlogistik 80 · KMU-Inhouse-Logistik 44 · Allg. Ladungsverkehr (FTL) 36 · Globale Luft- & Seefracht 33 · KEP 27,4 · Ladungsverkehr mit Spezialequipment 20,1 · Massengut (Bulk) 16,5 · Terminal/Lager/Mehrwertdienste 15 · Stückgut-Netzwerke (LTL) 12 · spezielle Stückgüter 10", important: true, hint: "Folie 21 nochmal angucken (Notiz)" },
        { id: "lm12", q: "Welche Literatur/Autoren wurden in der Logistik-Vorlesung genannt?", a: "Pfohl, Klaus, Bretzke, Baumgarten, Sunemann, Schulte, Ihde (sowie Christopher, Arnold)." }
      ],
      quiz: [
        { q: "Wie groß ist das Logistikvolumen in Deutschland ungefähr?", options: ["33 Mrd. €", "131 Mrd. €", "331 Mrd. €", "1.000 Mrd. €"], correct: 2, explain: "Ca. 331 Mrd. € (2024) – drittgrößter Wirtschaftsbereich." },
        { q: "Wie groß ist der KEP-Markt laut Folie 21?", options: ["12 Mrd. €", "27,4 Mrd. €", "80 Mrd. €", "131 Mrd. €"], correct: 1, explain: "KEP ≈ 27,4 Mrd. € – als Klausurfrage markiert!" },
        { q: "Größtes Marktsegment der Logistik?", options: ["KEP", "Stückgut", "Kontraktlogistik", "Massengut"], correct: 2, explain: "Kontraktlogistik ≈ 80 Mrd. €." },
        { q: "Was ist KEIN Grund für Deutschlands logistische Bedeutung laut Folie?", options: ["Hohe Kaufkraft", "Zentrale Lage", "Niedrige Löhne", "Effizienz & Zuverlässigkeit"], correct: 2, explain: "Kaufkraft, Lage, globale Lieferketten, Effizienz – nicht niedrige Löhne." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "l-konzeption",
      name: "3 · Logistiksysteme & Logistikkonzeption",
      description: "Beschaffungs-/Produktions-/Distributions-/Entsorgungslogistik, Gütertransformation, Informationsfluss, Systemstrukturen, Planungsebenen, System-/Fluss-/Querschnittsdenken",
      cards: [
        { id: "lk01", q: "Welche funktionalen Logistiksysteme gibt es aus Sicht eines Herstellers?", a: "Beschaffungslogistik (vom Beschaffungsmarkt), Produktionslogistik, Distributionslogistik (zum Absatzmarkt) und Entsorgungslogistik (Rückfluss/Reverse Logistics).", important: true },
        { id: "lk02", q: "Welche Logistikprozesse bewirken welche Gütertransformation?", a: "Lagern → Zeitänderung\nTransportieren → Raumänderung\nUmschlagen (Zusammenfassen, Auflösen) → Mengenänderung\nUmschlagen (Sortieren) → Sortenänderung\nVerpacken, Signieren → Änderung der TUL-Eigenschaften\nAufträge übermitteln/bearbeiten → Änderung der logistischen Determiniertheit", important: true },
        { id: "lk03", q: "Welche drei Arten von Informationsfluss gibt es im Logistiksystem?", a: "Vorauseilender Informationsfluss (t0, vor dem Material, z. B. Lieferavis), begleitender Informationsfluss (t1, mit dem Material, z. B. Lieferschein), nachfolgender Informationsfluss (t2, danach, z. B. Rechnung/Abliefernachweis)." },
        { id: "lk04", q: "Laufen Güter, Informationen und Zahlungen denselben Weg?", a: "Nein – sie folgen eigenen Wegen. Güter: Lieferant → Hersteller → Handel → Endkunde. Informationen (Bestellung, Bedarf, Status, Avis) in beide Richtungen. Zahlungen fließen entgegen dem Güterstrom. Bestellung und Status sind Informationen, Zahlung und Rechnung sind unterschiedliche Vorgänge." },
        { id: "lk05", q: "Einstufige, mehrstufige und kombinierte Logistiksysteme?", a: "Einstufig: direkter Güterfluss Lieferant → Empfänger.\nMehrstufig: indirekter Güterfluss über Knoten (break-bulk point = Auflösungspunkt, consolidation point = Sammelpunkt).\nKombiniert: direkter und indirekter Güterfluss gemischt.", important: true },
        { id: "lk06", q: "Welche Nachteile und Vorteile haben Knoten in Logistiksystemen?", a: "Nachteil: Knoten verursachen Kosten (Umschlag, Lagerung, Kapitalbindung).\nVorteile: Bündelungseffekte (z. B. Sammelgut-Hauptlauf, KV), kurzfristige Bedarfsbefriedigung (zeitliche Erreichbarkeit), Sortimentsbildung (Kommissionierung im Handel).", important: true },
        { id: "lk07", q: "Strategische, taktische und operative Planungsebene – Beispiele?", a: "Strategisch (langfristige Struktur): Systemlieferanten wählen, Layoutplanung, Standortwahl Auslieferungslager, Make-or-buy der Entsorgung.\nTaktisch (vorhandene Strukturen nutzen): Prozesskette optimieren, Transportmittel wählen, Serviceniveau festlegen, Umschlagpunkte bestimmen.\nOperativ (konkrete Aufträge): Feinabruf, Transportaufträge auslösen, kurzfristige Tourenplanung, Demontagesteuerung.", important: true },
        { id: "lk08", q: "Welche drei Charakteristika hat die Logistikkonzeption?", a: "Systemdenken (Gesamtsystem optimieren, nicht Teilbereiche), Flussdenken (durchgängiger Güter-/Informationsfluss, Wartezeiten vermeiden), Querschnittsfunktionsdenken (Logistik durchdringt alle Bereiche der Wertschöpfung).", important: true },
        { id: "lk09", q: "Was bedeutet Gesamtkostendenken (Systemdenken)?", a: "Betrachtung aller entscheidungsrelevanten Kosten: Logistiksysteme haben viele Trade-offs – Kostensenkungen in einem Teilsystem führen häufig zu Kostensteigerungen in einem anderen (z. B. Ersatzteile per Luftfracht: teurer Transport, aber weniger Lagerbestand).", important: true },
        { id: "lk10", q: "Nenne Beispiele für Zielkonflikte (Trade-offs) in der Logistik.", a: "Verpackungskosten vs. Kosten durch Transportschäden · Auftragsabwicklungskosten vs. Transportkosten (Routenplanung) · Lagerbestandskosten vs. Produktionskosten (kleine Lose) · Lagerbestandskosten vs. Einkaufskosten (häufigere, kleinere Bestellungen)." },
        { id: "lk11", q: "Lieferzeit und Lieferzuverlässigkeit – Definition und Kennzahl?", a: "Lieferzeit: Zeitspanne von der Auftragserteilung bis zum Wareneingang beim Kunden (Stunden/Tage) – beeinflussbar durch Auftragsbearbeitung, Transport, Lagerstandort.\nLieferzuverlässigkeit: Wahrscheinlichkeit, die Lieferzeit einzuhalten – Kennzahl Lieferbereitschaftsgrad (%), beeinflussbar durch Bestandsführung.", important: true },
        { id: "lk12", q: "Lieferqualität und Lieferflexibilität – Definition und Kennzahl?", a: "Lieferqualität: Erfüllung der Kundenanforderungen an Beschaffenheit/Zusammensetzung – Kennzahl Retourenquote (%), beeinflussbar durch Verpackung, Transport, Kommissionierung.\nLieferflexibilität: Fähigkeit, Liefermodalitäten an Kundenwünsche anzupassen – schwer messbar.", important: true },
        { id: "lk13", q: "Was bedeutet Flussdenken?", a: "Durchgängige Betrachtung des Güter- und Informationsflusses in der gesamten Kette. Wartezeiten, große Lose und schlechte Übergaben verlängern die Durchlaufzeit. Bestände gelten als unerwünschte Unterbrechung des Materialflusses. Ziel: ununterbrochener Güterfluss." },
        { id: "lk14", q: "Was ermöglichen Bestände – und was verdecken sie?", a: "Ermöglichen: reibungslose Produktion, prompte Lieferung, Überbrückung von Störungen, wirtschaftliche Fertigung, konstante Auslastung.\nVerdecken (wie Wasser die Felsen): störanfällige Prozesse, unabgestimmte Kapazitäten, mangelnde Flexibilität, Ausschuss, mangelnde Liefertreue.", important: true },
        { id: "lk15", q: "Welche Position vertritt Prof. Bretzke zu Beständen?", a: "Bestände sind „nicht böse“, sondern Working Capital: Push-Prinzip bei Produkten mit niedriger Wertdichte, Sicherheitsbestände gegen Versorgungsrisiken, Transportbündelung = Green Logistics. Steigende Transportpreise erzwingen eine neue Balance zwischen Bestands- und Transportkosten." },
        { id: "lk16", q: "Was bedeutet Querschnittsfunktionsdenken?", a: "Gestaltung der Schnittstellen zwischen betrieblichen Grund- und Servicefunktionen: Trotz konkurrierender Ziele müssen bereichsübergreifend optimale Entscheidungen getroffen werden; Mitarbeiter müssen gegenseitige Abhängigkeiten akzeptieren." }
      ],
      quiz: [
        { q: "Welche Gütertransformation bewirkt das Lagern?", options: ["Raumänderung", "Zeitänderung", "Sortenänderung", "Mengenänderung"], correct: 1, explain: "Lagern = Zeit, Transport = Raum, Umschlag = Menge/Sorte." },
        { q: "Standortwahl eines Auslieferungslagers ist eine … Entscheidung.", options: ["operative", "taktische", "strategische", "normative"], correct: 2, explain: "Langfristige Struktur = strategisch." },
        { q: "Mit welcher Kennzahl misst man die Lieferzuverlässigkeit?", options: ["Retourenquote", "Lieferbereitschaftsgrad", "Umschlagshäufigkeit", "Durchlaufzeit"], correct: 1, explain: "Lieferbereitschaftsgrad in %." },
        { q: "Was verdecken hohe Bestände NICHT?", options: ["Störanfällige Prozesse", "Ausschuss", "Prompte Lieferung", "Mangelnde Liefertreue"], correct: 2, explain: "Prompte Lieferung ist ein Vorteil, den Bestände ermöglichen." },
        { q: "„Optimiere das Gesamtsystem, nicht die Teilbereiche“ beschreibt das …", options: ["Flussdenken", "Systemdenken", "Querschnittsdenken", "Push-Prinzip"], correct: 1, explain: "Systemdenken = Gesamtkosten- und Leistungsdenken." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "l-prinzipien",
      name: "4 · Gestaltungsprinzipien & Trends",
      description: "Enge Kopplung & Bullwhip, statistischer Ausgleich, Postponement, Bündelung (4 Formen), Standardisierung, PESTEL",
      cards: [
        { id: "lp01", q: "Welche fünf Gestaltungsprinzipien der Logistik gibt es (Ihde/Janz)?", a: "Enge Kopplung, statistische Ausgleichseffekte, Postponement, Bündelung, Standardisierung. Ziel: Unsicherheit und Komplexität bewältigen für Kostenminimierung/Leistungsmaximierung.", important: true },
        { id: "lp02", q: "Lose vs. enge Kopplung?", a: "Lose Kopplung: an der funktionalen Gliederung ausgerichtet → hohe Puffer, Fehlmengen, lange Durchlaufzeiten, weil Informationen verzögert ankommen.\nEnge Kopplung: frühzeitige Information über Bedarfe an alle vorgelagerten Prozesse → Beschaffung kann früh auf Marktveränderungen reagieren.", important: true },
        { id: "lp03", q: "Was ist der Bullwhip-Effekt und was sind die Ursachen?", a: "Schwankungen der Endkundennachfrage schaukeln sich entlang der Kette zu immer größeren Bestell- und Bestandsschwankungen auf (Peitscheneffekt).\nUrsachen: falsche Prognosen, Informationsasymmetrien, Bündelbestellungen, Preisschwankungen. Gegenmittel: enge Kopplung/Informationsaustausch.", important: true },
        { id: "lp04", q: "Was sind statistische Ausgleichseffekte?", a: "Werden unabhängige, schwankende Nachfragen zusammengefasst, gleichen sich Schwankungen teilweise aus (Gesetz der großen Zahl) → weniger Sicherheitsbestände und Reservekapazität nötig. Die Schwankung von A + B ist kleiner als die Summe der Einzelschwankungen.", important: true },
        { id: "lp05", q: "Anwendungsgebiete statistischer Ausgleichseffekte?", a: "Kapazitätspools, Zentralisierung von Lagerstrukturen, Verwendung von Gleichteilen." },
        { id: "lp06", q: "Was ist Postponement?", a: "Verschieben der Variantenbildung: Der Variantenbestimmungspunkt (Order Penetration Point), ab dem kundenbezogen produziert wird, wird in der Wertschöpfungskette nach hinten verschoben → mehr reaktive, weniger spekulative Prozesse. Weniger Sicherheitsbestände, Fehlmengen und Veralterungsrisiko.", important: true },
        { id: "lp07", q: "Postponement am Beispiel Notebook?", a: "Traditionell: jede Variante (Prozessor, Festplatte, Software A–Z) wird komplett gebaut und gelagert (Push).\nMit Postponement: universelles Basisgerät wird unfertig gelagert, erst nach Kundenauftrag (OPP) werden Komponenten/Software eingebaut (Pull). Einsatz: Computer-, Auto-, Bekleidungsindustrie." },
        { id: "lp08", q: "Warum ist Bündelung im Transport so wichtig?", a: "Transporte haben einen hohen Fixkostenanteil → Auslastung entscheidet über die Wirtschaftlichkeit (Fixkostendegression). Bündelung = Zusammenfassen von Gütern für gemeinsamen Transport, zeitlich oder räumlich." },
        { id: "lp09", q: "Vier Formen der Bündelung?", a: "Sendungsverdichtung, Tourenverdichtung, Knotenpunktsysteme (Hub-and-Spoke), Ringsysteme.", important: true },
        { id: "lp10", q: "Sendungsverdichtung – was, Vorteil, Beispiel?", a: "Sendungen aus/in eine Region werden zusammengefasst und im Hauptlauf gemeinsam befördert. Vorteil: bessere Auslastung, weniger Transporte. Beispiel: Gebietsspeditionskonzept, Transportkooperation Mars & Ferrero." },
        { id: "lp11", q: "Tourenverdichtung – was, Vorteil, Beispiel?", a: "Mehr Quell- und Zielpunkte in einem Gebiet durch Zusammenfassen der Verkehre mehrerer Versender → geringere Entfernung pro Stopp. Vorteil: mehr Empfänger bzw. mehr Touren in gleicher Zeit. Beispiel: Begegnungsverkehre in der Spedition." },
        { id: "lp12", q: "Knotenpunktsysteme (Hub-and-Spoke) – Vorteil, Beispiel?", a: "Mehrere Relationen werden über einen gemeinsamen Knoten bedient. Vorteil: weniger, aber besser ausgelastete Transportmittel, höhere Frequenz. Beispiel: Hubs der Sammelgutspedition, Luftfracht." },
        { id: "lp13", q: "Ringsysteme – was, Vorteil, Beispiel?", a: "An jeder Station kann Ladung für alle folgenden Stationen aufgenommen werden. Vorteil: negative Auswirkungen von Unpaarigkeit werden minimiert. Beispiel: Round-the-World-Lines in der Containerschifffahrt." },
        { id: "lp14", q: "Standardisierung auf materieller Ebene – Beispiele und Nutzen?", a: "Ladehilfsmittel (z. B. Europalette) → rationelleres Handling, Voraussetzung für Automatisierung. Verpackung → Homogenisierung der Güter. Teile/Baugruppen/Produkte → weniger Komplexität, Skalen- und Ausgleichseffekte." },
        { id: "lp15", q: "Standardisierung auf immaterieller Ebene – Beispiele?", a: "Informationen: einheitliche Interpretation (NVE = Nummer der Versandeinheit) und einfacher Austausch (EDIFACT-Standard). Abläufe: präzise Daten zur Kapazitätsbelastung (Kapazitätsplanung, Qualitätskontrolle, Benchmarking)." },
        { id: "lp16", q: "Was ist eine PESTEL-Analyse? Nenne je ein Logistik-Beispiel.", a: "Political (Infrastrukturausbau, Förderung), Economical (E-Commerce-Wachstum, Protektionismus, Brexit), Social (Fahrermangel, demografischer Wandel, Urbanisierung), Technological (Digitalisierung, autonomes Fahren, 3D-Druck), Ecological (CO2-Footprint, alternative Antriebe, Klimaziele), Legal (Mobility Packages, Lenk-/Ruhezeiten, Maut, Mindestlohn).", important: true }
      ],
      quiz: [
        { q: "Was ist eine Ursache des Bullwhip-Effekts?", options: ["Enge Kopplung", "Informationsasymmetrien", "Standardisierung", "Postponement"], correct: 1, explain: "Dazu: falsche Prognosen, Bündelbestellungen, Preisschwankungen." },
        { q: "Beim Postponement wird der Variantenbestimmungspunkt …", options: ["nach vorne verschoben", "nach hinten verschoben", "abgeschafft", "verdoppelt"], correct: 1, explain: "Später = näher am Kundenauftrag → mehr reaktive Prozesse." },
        { q: "Round-the-World-Lines in der Containerschifffahrt sind ein Beispiel für …", options: ["Sendungsverdichtung", "Tourenverdichtung", "Hub-and-Spoke", "Ringsysteme"], correct: 3, explain: "Ringsysteme minimieren Unpaarigkeit." },
        { q: "Die Zentralisierung von Lagern nutzt welches Prinzip?", options: ["Statistische Ausgleichseffekte", "Postponement", "Enge Kopplung", "Tourenverdichtung"], correct: 0, explain: "Schwankungen gleichen sich aus → weniger Sicherheitsbestand." },
        { q: "EDIFACT ist ein Beispiel für Standardisierung auf … Ebene.", options: ["materieller", "immaterieller", "strategischer", "ökologischer"], correct: 1, explain: "Informationsstandard = immateriell." },
        { q: "Fahrermangel gehört in der PESTEL-Analyse zu …", options: ["Political", "Social", "Technological", "Legal"], correct: 1, explain: "Social: Demografie, Fachkräftemangel, Urbanisierung." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "l-lernfragen",
      name: "⭐ Lernfragen & Film (Prüfungsvorbereitung)",
      description: "Offizielle Lernfragen von Prof. Nehm + Transportkette aus dem Film (Samsung → Endkunde)",
      cards: [
        { id: "lf01", q: "Beschreibe die Transportkette aus dem Film: Samsung-Fabrik in Vietnam → Endkunde in den USA. Welche Knoten, Verkehrsträger und Ladeeinheiten?", a: "Fabrik (Hersteller) → Binnenschiff/Lkw → Containerterminal (Umschlag) → Seeschiff (ca. 30 Tage) → Containerterminal Los Angeles → Lkw → Umschlaglager → Lkw → Logistikzentrum (Lager/Umschlag) → Auslieferungsfahrzeug (Sprinter) → Endkunde.\nLadeeinheit wird immer kleiner: Container → Palette → Paket → Tüte.", important: true },
        { id: "lf02", q: "Welche Unternehmen/Rollen kommen im Film vor?", a: "Hersteller (Samsung, Fabrik in Vietnam), Reedereien (Evergreen, MSC, Maersk), Terminaldienstleister, Spedition/LDL (CDL u. a.), Händler/LDL Amazon (Fulfillment, Flex Delivery, Prime Air), UPS/FedEx als Paketdienste. Amazon → Endkunde = B2C." },
        { id: "lf03", q: "Welche Probleme der globalen Lieferketten zeigt der Film?", a: "Globale Krisen/Konflikte und Pandemie, Abhängigkeiten, Kanal-Blockaden (Verzögerung), Überlastung von Häfen, Unwetter, höhere Nachfrage als geplant, Fachkräfte-/Fahrermangel, schlechte Arbeitsbedingungen, Inflation. Lieferketten sind sehr abhängig, Just-in-Time ist nicht krisensicher." },
        { id: "lf04", q: "Welche Technologien und Innovationen kamen im Film vor?", a: "Sendungsverfolgung (Track & Trace), Supply-Chain-Visibility, Containerkräne, Lagerroboter, automatisierte Sortieranlagen/Förderbänder, Navigation." },
        { id: "lf05", q: "Warum braucht die arbeitsteilige Weltwirtschaft ein unternehmensübergreifendes SCM? (Leitfrage)", a: "Weil Produktion über viele Länder und Unternehmen verteilt ist: Güter-, Informations- und Finanzflüsse müssen über alle Stufen koordiniert werden, damit Waren rechtzeitig, kostengünstig und zuverlässig ankommen – einzelne Unternehmen allein können Abhängigkeiten und Störungen nicht beherrschen.", important: true },
        { id: "lf06", q: "Wie setzt sich das Logistikmarktvolumen in Deutschland zusammen?", a: "Ca. 331 Mrd. € = Eigenleistungen von Industrie und Handel (insourced) + extern vergebene Logistikdienstleistungen (outsourced), etwa 50/50 laut Logistik-Folie.", important: true },
        { id: "lf07", q: "Wie unterscheiden sich Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik?", a: "Beschaffungslogistik: vom Lieferanten bis zum Wareneingang/Rohmateriallager.\nProduktionslogistik: Materialfluss innerhalb der Produktion.\nDistributionslogistik: vom Fertigwarenlager bis zum Kunden.\nEntsorgungslogistik: Rückflüsse (Retouren, Verpackungen, Abfälle, Recycling).", important: true },
        { id: "lf08", q: "Was versteht man unter enger Kopplung und wie reduziert sie den Bullwhip-Effekt?", a: "Enge informatorische Verknüpfung aller Prozessstufen: Echte Nachfragedaten werden früh an alle vorgelagerten Stufen weitergegeben. So bestellen die Stufen nicht auf Basis verzerrter Bestellungen, Informationsasymmetrien sinken und das Aufschaukeln der Bestände wird gebremst.", important: true }
      ],
      quiz: []
    }
  ]
});
