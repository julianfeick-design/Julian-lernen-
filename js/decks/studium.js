/*
 * Studienwissen BWL – Spedition, Transport und Logistik (DHBW)
 * Allgemeines Grundwissen fürs ganze Studium und die Praxisphasen – unabhängig von einer Klausur.
 * type "general": zählt nicht in „Fällig“/Prüfungs-Countdown, ist aber im MC-Training und
 * im „Wissen des Tages“ auf der Startseite.
 */
window.BUILTIN_FOLDERS.push({
  id: "studium",
  type: "general",
  name: "Studienwissen BWL-STL",
  emoji: "🎓",
  decks: [
    {
      id: "fachbegriffe",
      name: "Fachbegriffe Spedition & Logistik",
      description: "Begriffe, die in Vorlesungen und im Ausbildungsbetrieb ständig fallen.",
      cards: [
        { id: "f01", q: "Was ist ein TEU und ein FEU?", a: "TEU = Twenty-foot Equivalent Unit (20-Fuß-Container, Standardmaß für Containerkapazität). FEU = 40-Fuß-Container = 2 TEU." },
        { id: "f02", q: "Welche Maße hat eine Europalette (EPAL)?", a: "1.200 × 800 mm (× 144 mm hoch). Auf einen Sattelzug passen 33/34 Europaletten." },
        { id: "f03", q: "Was ist ein Lademeter (LDM)?", a: "1 laufender Meter Ladefläche eines Lkw (volle Breite). Abrechnungsgröße für sperrige Güter – 1 LDM ≈ 2,4 Europaletten (quer)." },
        { id: "f04", q: "Was bedeutet Cross-Docking?", a: "Ware wird im Umschlagzentrum ohne Einlagerung direkt vom eingehenden auf den ausgehenden Lkw umgeschlagen (kurze Durchlaufzeit, kein Bestand)." },
        { id: "f05", q: "Was ist Just-in-Time (JIT) und Just-in-Sequence (JIS)?", a: "JIT: Anlieferung genau zum Bedarfszeitpunkt, kaum Lager. JIS: zusätzlich in der richtigen Reihenfolge der Produktion (typisch Automobilindustrie)." },
        { id: "f06", q: "Was ist ein Milk Run?", a: "Ein festgelegter Rundlauf, bei dem ein Fahrzeug mehrere Lieferanten nacheinander anfährt und deren Teile gebündelt zum Werk bringt." },
        { id: "f07", q: "Was ist ein Avis?", a: "Vorankündigung einer Lieferung (Zeitpunkt, Menge, Fahrzeug) an den Empfänger – vorauseilender Informationsfluss." },
        { id: "f08", q: "Was bedeutet POD?", a: "Proof of Delivery – Abliefernachweis, z. B. Unterschrift des Empfängers auf dem Scanner oder Lieferschein." },
        { id: "f09", q: "Was ist ein Konnossement (Bill of Lading, B/L)?", a: "Frachtdokument der Seefracht: Empfangsbestätigung, Beweis des Frachtvertrags und Wertpapier (Traditionspapier) – wer es besitzt, kann die Ware herausverlangen." },
        { id: "f10", q: "Was ist ein AWB?", a: "Air Waybill – Luftfrachtbrief. Kein Wertpapier, sondern Beweisdokument für den Luftfrachtvertrag." },
        { id: "f11", q: "Was ist die Cut-off-Zeit?", a: "Spätester Zeitpunkt, zu dem Ware oder Dokumente angeliefert sein müssen, um noch eine bestimmte Abfahrt (Schiff, Zug, Flug, Hauptlauf) zu erreichen." },
        { id: "f12", q: "Was regelt das ADR?", a: "Das Europäische Übereinkommen über die Beförderung gefährlicher Güter auf der Straße (Gefahrgut: Kennzeichnung, Verpackung, Fahrerschulung, Ausrüstung)." },
        { id: "f13", q: "Was ist eine EORI-Nummer?", a: "Economic Operators Registration and Identification – EU-weite Zollnummer, die Unternehmen für Import/Export benötigen." },
        { id: "f14", q: "Was ist ein Frachtzahler / „frei Haus“ vs. „unfrei“?", a: "„Frei Haus“: Versender zahlt die Fracht bis zum Empfänger. „Unfrei“: Empfänger zahlt die Fracht." },
        { id: "f15", q: "Was ist Retourenlogistik (Reverse Logistics)?", a: "Rückfluss von Waren vom Kunden zum Händler/Hersteller (Retouren, Reparaturen, Recycling) – besonders wichtig im E-Commerce." },
        { id: "f16", q: "Was ist ein Ladungsträger bzw. Ladehilfsmittel?", a: "Hilfsmittel, das Güter zu einer Ladeeinheit zusammenfasst und den Umschlag erleichtert: Palette, Gitterbox, Container, Wechselbrücke." },
        { id: "f17", q: "Was ist die Kommissionierung?", a: "Zusammenstellen von Artikeln aus dem Lagersortiment nach einem Kundenauftrag (z. B. Pick-by-Scan, Pick-by-Voice)." },
        { id: "f18", q: "Was bedeuten FIFO und LIFO im Lager?", a: "FIFO: First In, First Out – älteste Ware raus zuerst (z. B. Lebensmittel). LIFO: Last In, First Out – zuletzt eingelagerte Ware raus zuerst." }
      ],
      quiz: []
    },
    {
      id: "incoterms",
      name: "Incoterms® 2020",
      description: "Lieferklauseln: wer zahlt was, wann geht das Risiko über? Wichtig für jede Spedition.",
      cards: [
        { id: "i01", q: "Was regeln die Incoterms – und was nicht?", a: "Sie regeln Kosten- und Gefahrenübergang, Transport- und Zollpflichten zwischen Verkäufer und Käufer. Nicht geregelt: Eigentumsübergang, Zahlung, Vertragsrecht." },
        { id: "i02", q: "Welche Incoterms gelten für alle Transportarten, welche nur für See-/Binnenschiff?", a: "Alle Transportarten: EXW, FCA, CPT, CIP, DAP, DPU, DDP. Nur See/Binnenschiff: FAS, FOB, CFR, CIF." },
        { id: "i03", q: "EXW – was bedeutet das?", a: "Ex Works (ab Werk): Verkäufer stellt die Ware auf seinem Gelände bereit. Käufer trägt alle Kosten und Risiken ab dort, inkl. Verladung und Exportverzollung – Minimalpflicht des Verkäufers." },
        { id: "i04", q: "DDP – was bedeutet das?", a: "Delivered Duty Paid (geliefert verzollt): Verkäufer trägt alle Kosten und Risiken bis zum Bestimmungsort inkl. Importverzollung und Einfuhrabgaben – Maximalpflicht des Verkäufers." },
        { id: "i05", q: "FCA – wann geht das Risiko über?", a: "Free Carrier: wenn der Verkäufer die Ware dem vom Käufer benannten Frachtführer am vereinbarten Ort übergibt (exportverzollt)." },
        { id: "i06", q: "FOB – wann geht das Risiko über?", a: "Free On Board: wenn die Ware an Bord des Schiffes im Verschiffungshafen ist. Ab dann trägt der Käufer Kosten und Risiko." },
        { id: "i07", q: "CIF – was zahlt der Verkäufer?", a: "Cost, Insurance and Freight: Verkäufer zahlt Seefracht und Versicherung bis zum Bestimmungshafen. Das Risiko geht aber schon beim Verladen an Bord im Verschiffungshafen über." },
        { id: "i08", q: "Was ist das Besondere an den C-Klauseln (CPT, CIP, CFR, CIF)?", a: "Kosten- und Gefahrenübergang fallen auseinander: Der Verkäufer zahlt den Haupttransport, das Risiko geht aber schon bei Übergabe an den ersten Frachtführer bzw. an Bord über (Zwei-Punkt-Klauseln)." },
        { id: "i09", q: "DAP vs. DPU?", a: "DAP (Delivered at Place): geliefert, aber nicht entladen am Bestimmungsort. DPU (Delivered at Place Unloaded): zusätzlich entladen – einzige Klausel mit Entladepflicht des Verkäufers." },
        { id: "i10", q: "Wie sind die Incoterms nach Gruppen geordnet?", a: "E (Abholklausel: EXW), F (Haupttransport nicht bezahlt: FCA, FAS, FOB), C (Haupttransport bezahlt: CPT, CIP, CFR, CIF), D (Ankunftsklauseln: DAP, DPU, DDP)." }
      ],
      quiz: []
    },
    {
      id: "bwl-basics",
      name: "BWL-Basics für die Praxis",
      description: "Kennzahlen und Begriffe aus Rechnungswesen und Recht, die im ganzen Studium vorkommen.",
      cards: [
        { id: "b01", q: "Aktiva und Passiva der Bilanz?", a: "Aktiva = Mittelverwendung (Anlage- und Umlaufvermögen). Passiva = Mittelherkunft (Eigen- und Fremdkapital). Beide Seiten sind immer gleich groß." },
        { id: "b02", q: "Bilanz vs. Gewinn- und Verlustrechnung (GuV)?", a: "Bilanz: Bestandsrechnung zu einem Stichtag (Vermögen und Kapital). GuV: Erfolgsrechnung über einen Zeitraum (Erträge − Aufwendungen = Gewinn/Verlust)." },
        { id: "b03", q: "Fixe vs. variable Kosten – Beispiele in einer Spedition?", a: "Fix (unabhängig von der Menge): Lkw-Abschreibung, Versicherung, Hallenmiete, Gehälter der Disposition. Variabel (steigen mit Menge/km): Diesel, Maut, Reifen." },
        { id: "b04", q: "Was ist der Deckungsbeitrag?", a: "Erlös − variable Kosten. Der Deckungsbeitrag dient zur Deckung der Fixkosten; was darüber hinausgeht, ist Gewinn." },
        { id: "b05", q: "Was ist der Break-even-Point?", a: "Die Menge, ab der Erlöse alle Kosten decken (Gewinn = 0): Break-even-Menge = Fixkosten ÷ Deckungsbeitrag je Stück." },
        { id: "b06", q: "Was bedeutet EBIT?", a: "Earnings Before Interest and Taxes – Ergebnis vor Zinsen und Steuern (operatives Ergebnis)." },
        { id: "b07", q: "Liquidität vs. Rentabilität?", a: "Liquidität = Fähigkeit, Zahlungsverpflichtungen fristgerecht zu erfüllen. Rentabilität = Verzinsung des eingesetzten Kapitals. Zielkonflikt: viel Liquidität bringt wenig Rendite." },
        { id: "b08", q: "Wie haften die Gesellschafter einer GmbH?", a: "Die GmbH haftet mit ihrem Gesellschaftsvermögen; die Gesellschafter nur mit ihrer Einlage. Mindeststammkapital 25.000 €." },
        { id: "b09", q: "Wie haften die Gesellschafter einer OHG?", a: "Alle Gesellschafter haften unbeschränkt, unmittelbar und gesamtschuldnerisch – auch mit ihrem Privatvermögen." },
        { id: "b10", q: "Was ist eine KG?", a: "Kommanditgesellschaft: mindestens ein Komplementär (haftet unbeschränkt) und mindestens ein Kommanditist (haftet nur mit seiner Einlage)." },
        { id: "b11", q: "Was ist eine GmbH & Co. KG – und warum ist sie bei Speditionen beliebt?", a: "Eine KG, deren Komplementär eine GmbH ist. So haftet keine natürliche Person unbeschränkt – Haftungsbeschränkung bei Personengesellschaftsvorteilen. Häufig bei Familienspeditionen." },
        { id: "b12", q: "Was ist der Unterschied zwischen Umsatz und Gewinn?", a: "Umsatz = Erlöse aus verkauften Leistungen (Menge × Preis). Gewinn = Umsatz − Kosten." },
        { id: "b13", q: "Was ist Abschreibung (AfA)?", a: "Absetzung für Abnutzung: Verteilung der Anschaffungskosten eines Anlageguts (z. B. Lkw) über die Nutzungsdauer als Aufwand – linear oder degressiv." },
        { id: "b14", q: "Was ist das Working Capital?", a: "Umlaufvermögen − kurzfristige Verbindlichkeiten. Kennzahl für die kurzfristige Finanzkraft; Bestände binden Working Capital." }
      ],
      quiz: []
    },
    {
      id: "geografie",
      name: "Verkehrsgeografie",
      description: "Häfen, Flughäfen, Wasserstraßen und Routen, die man als Speditionskaufmann kennen sollte.",
      cards: [
        { id: "g01", q: "Größter Seehafen Europas und größter Seehafen Deutschlands?", a: "Europa: Rotterdam. Deutschland: Hamburg." },
        { id: "g02", q: "Größter Containerhafen der Welt?", a: "Shanghai (China)." },
        { id: "g03", q: "Welcher Hafen gilt als größter Binnenhafen Europas?", a: "Duisburg (am Rhein) – auch Endpunkt vieler Güterzüge aus China." },
        { id: "g04", q: "Größte Frachtflughäfen in Deutschland?", a: "Frankfurt am Main (größter) und Leipzig/Halle (zweitgrößter, europäisches Drehkreuz von DHL)." },
        { id: "g05", q: "Wichtigste Binnenwasserstraße Europas?", a: "Der Rhein – verbindet Basel, Mannheim, Duisburg mit Rotterdam und den ARA-Häfen." },
        { id: "g06", q: "Was ist der Nord-Ostsee-Kanal?", a: "Kanal in Schleswig-Holstein zwischen Nordsee (Brunsbüttel) und Ostsee (Kiel) – meistbefahrene künstliche Wasserstraße der Welt, spart den Weg um Dänemark." },
        { id: "g07", q: "Welche zwei Kanäle sind für den Welthandel entscheidend?", a: "Suezkanal (Mittelmeer ↔ Rotes Meer, Asien–Europa) und Panamakanal (Atlantik ↔ Pazifik)." },
        { id: "g08", q: "Wie lange braucht ein Güterzug von China nach Duisburg ungefähr?", a: "Ca. 2–3 Wochen – schneller als das Schiff (5–6 Wochen), günstiger als Luftfracht." },
        { id: "g09", q: "Wichtigste Alpenübergänge für den Güterverkehr?", a: "Brenner (Österreich–Italien) und Gotthard (Schweiz). Die Schweiz verlagert Transit gezielt auf die Schiene (Lkw-Abgabe LSVA, Gotthard-Basistunnel)." },
        { id: "g10", q: "Was ist die „Blaue Banane“?", a: "Der dichtbesiedelte, wirtschaftsstarke Korridor Europas von Nordengland über Benelux und das Rheinland bis Norditalien – Rückgrat der europäischen Güterströme." }
      ],
      quiz: []
    },
    {
      id: "studium-dhbw",
      name: "Klausur-Technik & Studium",
      description: "Operatoren verstehen, Punkte holen, wissenschaftlich arbeiten.",
      cards: [
        { id: "s01", q: "Was verlangt der Operator „Nennen“?", a: "Begriffe oder Fakten ohne Erklärung aufzählen – Stichpunkte reichen." },
        { id: "s02", q: "Was verlangt der Operator „Beschreiben“?", a: "Einen Sachverhalt mit eigenen Worten strukturiert wiedergeben – was ist wie, ohne Begründung." },
        { id: "s03", q: "Was verlangt der Operator „Erläutern“?", a: "Beschreiben + verständlich machen: Zusammenhänge, Ursachen und Beispiele ergänzen." },
        { id: "s04", q: "Was verlangt der Operator „Beurteilen“ bzw. „Bewerten“?", a: "Vor- und Nachteile bzw. Kriterien abwägen und zu einem begründeten eigenen Urteil (Fazit) kommen." },
        { id: "s05", q: "Was verlangt der Operator „Berechnen“?", a: "Rechenweg mit Formel, Einsetzen, Ergebnis und Einheit nachvollziehbar darstellen – Teilpunkte gibt es auch für den Weg." },
        { id: "s06", q: "Wie holt man in einer Rechenaufgabe Teilpunkte, wenn das Ergebnis falsch ist?", a: "Formel allgemein hinschreiben, Werte sichtbar einsetzen, Zwischenergebnisse notieren, Einheit angeben – Folgefehler werden oft trotzdem bewertet." },
        { id: "s07", q: "Wie viele ECTS hat ein Bachelor an der DHBW?", a: "210 ECTS in 6 Semestern (Theorie- und Praxisphasen im Wechsel)." },
        { id: "s08", q: "Was ist der Unterschied zwischen direktem und indirektem Zitat?", a: "Direkt: wörtlich in Anführungszeichen mit genauer Seite. Indirekt: sinngemäß in eigenen Worten, oft mit „vgl.“ – Quelle muss bei beiden angegeben werden." },
        { id: "s09", q: "Wie viel Zeit sollte man in einer Klausur pro Punkt einplanen?", a: "Faustregel: Bearbeitungszeit ÷ Gesamtpunkte. Beispiel: 80 Min. für 80 Punkte ≈ 1 Minute pro Punkt – so erkennt man, wann man weitergehen muss." }
      ],
      quiz: []
    }
  ]
});

// Multiple-Choice-Antworten (gleich lang & plausibel)
window.MC_DATA = window.MC_DATA || {};
Object.assign(window.MC_DATA, {
  "studium/fachbegriffe/f01": ["TEU = 20-Fuß · FEU = 40-Fuß-Container", "TEU = 40-Fuß · FEU = 20-Fuß-Container", "TEU = 20-Fuß · FEU = 45-Fuß-Container", "TEU = 10-Fuß · FEU = 20-Fuß-Container"],
  "studium/fachbegriffe/f02": ["1.200 × 800 mm", "1.200 × 1.000 mm", "1.000 × 800 mm", "1.200 × 600 mm"],
  "studium/fachbegriffe/f03": ["1 m Ladefläche in voller Breite", "1 m³ Laderaum in voller Innenhöhe", "1 m Ladefläche je Europalette", "1 t Nutzlast je Meter Ladefläche"],
  "studium/fachbegriffe/f04": ["Umschlag ohne Einlagerung, direkt weiter", "Einlagerung mit Bestand, später weiter", "Umschlag nur zwischen Bahn und Schiff", "Kommissionierung im Kundenauftrag"],
  "studium/fachbegriffe/f05": ["JIT zum Zeitpunkt · JIS zusätzlich in Reihenfolge", "JIT in Reihenfolge · JIS zusätzlich zum Zeitpunkt", "JIT mit Pufferlager · JIS ganz ohne Lager", "JIT per Bahn im KV · JIS per Lkw direkt"],
  "studium/fachbegriffe/f06": ["Rundlauf zu mehreren Lieferanten, gebündelt", "Direktfahrt eines Lieferanten zum Werk", "Rundlauf zu mehreren Kunden, Zustellung", "Täglicher Milchtransport zur Molkerei"],
  "studium/fachbegriffe/f07": ["Vorankündigung einer Lieferung", "Nachweis der erfolgten Lieferung", "Rechnung zur Lieferung", "Mängelrüge nach der Lieferung"],
  "studium/fachbegriffe/f08": ["Abliefernachweis (Proof of Delivery)", "Abholnachweis (Proof of Departure)", "Zahlungsnachweis (Proof of Debit)", "Zollnachweis für Ausfuhren (Proof of Duty)"],
  "studium/fachbegriffe/f09": ["Seefrachtdokument und Wertpapier", "Luftfrachtbrief ohne Wertpapier", "Bahnfrachtbrief und Wertpapier", "Seefrachtdokument ohne Beweiskraft"],
  "studium/fachbegriffe/f10": ["Luftfrachtbrief, kein Wertpapier", "Luftfrachtbrief und Wertpapier", "Seefrachtbrief, kein Wertpapier", "Zolldokument der Luftfracht"],
  "studium/fachbegriffe/f11": ["Spätester Anlieferzeitpunkt für eine Abfahrt", "Frühester Abholzeitpunkt beim Versender", "Ende der täglichen Lenkzeit eines Fahrers", "Spätester Zahlungstermin für die Seefracht"],
  "studium/fachbegriffe/f12": ["Gefahrguttransport auf der Straße", "Gefahrguttransport auf der Schiene", "Lenk- und Ruhezeiten der Fahrer", "Haftung im internationalen Verkehr"],
  "studium/fachbegriffe/f13": ["EU-Zollnummer für Unternehmen", "EU-Lizenz für Kabotage", "EU-Nummer für Gefahrgut", "EU-Steuernummer für Fahrer"],
  "studium/fachbegriffe/f14": ["Frei Haus: Versender zahlt · unfrei: Empfänger", "Frei Haus: Empfänger zahlt · unfrei: Versender", "Frei Haus: Spediteur zahlt · unfrei: Versender", "Frei Haus: kostenlos · unfrei: doppelte Fracht"],
  "studium/fachbegriffe/f15": ["Rückfluss vom Kunden zum Händler", "Hinfluss vom Händler zum Kunden", "Rückfahrt des leeren Lkw", "Rücknahme von Leergut an der Kasse"],
  "studium/fachbegriffe/f16": ["Palette · Gitterbox · Container", "Gabelstapler · Kran · Förderband", "Lkw · Zug · Schiff", "Lieferschein · Frachtbrief · Avis"],
  "studium/fachbegriffe/f17": ["Zusammenstellen nach Kundenauftrag", "Einlagern nach dem Wareneingang", "Verladen nach dem Tourenplan", "Verpacken und Prüfen einer Retoure"],
  "studium/fachbegriffe/f18": ["FIFO: älteste zuerst · LIFO: neueste zuerst", "FIFO: neueste zuerst · LIFO: älteste zuerst", "FIFO: schwerste zuerst · LIFO: leichteste zuerst", "FIFO: teuerste zuerst · LIFO: günstigste zuerst"],

  "studium/incoterms/i01": ["Kosten & Risiko – nicht Eigentum & Zahlung", "Eigentum & Zahlung – nicht Kosten & Risiko", "Kosten & Eigentum – nicht Risiko & Zahlung", "Zahlung & Risiko – nicht Kosten & Zoll"],
  "studium/incoterms/i02": ["See-only: FAS, FOB, CFR, CIF", "See-only: FCA, FOB, CPT, CIF", "See-only: EXW, FOB, DAP, CIF", "See-only: FAS, FCA, CFR, CIP"],
  "studium/incoterms/i03": ["Ab Werk – Käufer trägt fast alles", "Ab Werk – Verkäufer trägt fast alles", "Ab Hafen – Käufer trägt fast alles", "Ab Werk – Kosten werden geteilt"],
  "studium/incoterms/i04": ["Verkäufer trägt alles inkl. Importzoll", "Käufer trägt alles inkl. Importzoll", "Verkäufer trägt alles ohne Importzoll", "Kosten geteilt, Zoll trägt der Käufer"],
  "studium/incoterms/i05": ["Bei Übergabe an den Frachtführer des Käufers", "Bei Ankunft der Ware am Lager des Käufers", "Beim Verladen an Bord des Schiffes im Hafen", "Bei Bereitstellung auf dem Werksgelände"],
  "studium/incoterms/i06": ["Wenn die Ware an Bord ist", "Wenn die Ware im Zielhafen ist", "Wenn die Ware beim Käufer ist", "Wenn die Ware das Werk verlässt"],
  "studium/incoterms/i07": ["Fracht + Versicherung, Risiko ab Bord", "Fracht + Versicherung, Risiko ab Zielhafen", "Nur Fracht, Risiko ab Bord", "Fracht + Zoll, Risiko ab Zielhafen"],
  "studium/incoterms/i08": ["Kosten- und Gefahrenübergang fallen auseinander", "Kosten- und Gefahrenübergang fallen immer zusammen", "Verkäufer trägt Risiko bis zum Bestimmungsort", "Käufer zahlt den Haupttransport selbst"],
  "studium/incoterms/i09": ["DPU zusätzlich entladen", "DAP zusätzlich entladen", "DPU zusätzlich verzollt", "DAP zusätzlich versichert"],
  "studium/incoterms/i10": ["E · F · C · D", "A · B · C · D", "E · F · G · H", "F · C · D · E"],

  "studium/bwl-basics/b01": ["Aktiva = Verwendung · Passiva = Herkunft", "Aktiva = Herkunft · Passiva = Verwendung", "Aktiva = Erträge · Passiva = Aufwand", "Aktiva = Gewinn · Passiva = Verlust"],
  "studium/bwl-basics/b02": ["Bilanz Stichtag · GuV Zeitraum", "Bilanz Zeitraum · GuV Stichtag", "Bilanz Erfolg · GuV Bestand", "Bilanz Plan · GuV Ist"],
  "studium/bwl-basics/b03": ["Fix: Abschreibung · variabel: Diesel", "Fix: Diesel · variabel: Abschreibung", "Fix: Maut · variabel: Hallenmiete", "Fix: Reifen · variabel: Versicherung"],
  "studium/bwl-basics/b04": ["Erlös − variable Kosten", "Erlös − fixe Kosten", "Erlös − Gesamtkosten", "Gewinn − variable Kosten"],
  "studium/bwl-basics/b05": ["Fixkosten ÷ DB je Stück", "DB je Stück ÷ Fixkosten", "Fixkosten ÷ Preis je Stück", "Gesamtkosten ÷ Menge"],
  "studium/bwl-basics/b06": ["Ergebnis vor Zinsen und Steuern", "Ergebnis nach Zinsen und Steuern", "Ergebnis vor Abschreibungen", "Umsatz vor Zinsen und Steuern"],
  "studium/bwl-basics/b07": ["Zahlungsfähigkeit vs. Kapitalverzinsung", "Kapitalverzinsung vs. Zahlungsfähigkeit", "Umsatzhöhe vs. Gewinnhöhe", "Vermögen vs. Schulden"],
  "studium/bwl-basics/b08": ["GmbH haftet, Gesellschafter nur mit Einlage", "Gesellschafter haften unbeschränkt privat", "Geschäftsführer haftet immer privat", "GmbH haftet nicht, nur der Staat"],
  "studium/bwl-basics/b09": ["Alle unbeschränkt und gesamtschuldnerisch", "Alle nur mit ihrer Einlage in die Gesellschaft", "Einer unbeschränkt, die anderen beschränkt", "Nur die Gesellschaft, nicht privat"],
  "studium/bwl-basics/b10": ["Komplementär voll · Kommanditist mit Einlage", "Kommanditist voll · Komplementär mit Einlage", "Beide haften nur mit ihrer Einlage", "Beide haften unbeschränkt privat"],
  "studium/bwl-basics/b11": ["KG mit GmbH als Komplementär", "GmbH mit KG als Gesellschafter", "KG mit AG als Kommanditist", "OHG mit GmbH als Geschäftsführer"],
  "studium/bwl-basics/b12": ["Umsatz = Menge × Preis · Gewinn = Umsatz − Kosten", "Umsatz = Gewinn − Kosten · Gewinn = Menge × Preis", "Umsatz = Kosten + Gewinn · Gewinn = Umsatz × Marge", "Umsatz = Menge × Kosten · Gewinn = Umsatz − Preis"],
  "studium/bwl-basics/b13": ["Anschaffungskosten über Nutzungsdauer verteilen", "Anschaffungskosten sofort voll abziehen", "Wertsteigerung über Nutzungsdauer verteilen", "Reparaturkosten über Nutzungsdauer verteilen"],
  "studium/bwl-basics/b14": ["Umlaufvermögen − kurzfristige Verbindlichkeiten", "Anlagevermögen − langfristige Verbindlichkeiten", "Eigenkapital − Fremdkapital", "Umsatz − kurzfristige Verbindlichkeiten"],

  "studium/geografie/g01": ["Europa: Rotterdam · DE: Hamburg", "Europa: Hamburg · DE: Bremerhaven", "Europa: Antwerpen · DE: Hamburg", "Europa: Rotterdam · DE: Bremerhaven"],
  "studium/geografie/g02": ["Shanghai", "Singapur", "Rotterdam", "Los Angeles"],
  "studium/geografie/g03": ["Duisburg", "Mannheim", "Basel", "Köln"],
  "studium/geografie/g04": ["Frankfurt und Leipzig/Halle", "München und Hamburg", "Frankfurt und Köln/Bonn", "Leipzig/Halle und Berlin"],
  "studium/geografie/g05": ["Der Rhein", "Die Donau", "Die Elbe", "Der Main"],
  "studium/geografie/g06": ["Nordsee ↔ Ostsee, meistbefahrener Kanal", "Rhein ↔ Main, längster Kanal Deutschlands", "Nordsee ↔ Elbe, tiefster Kanal Europas", "Ostsee ↔ Oder, ältester Kanal Europas"],
  "studium/geografie/g07": ["Suezkanal und Panamakanal", "Suezkanal und Nord-Ostsee-Kanal", "Panamakanal und Mittellandkanal", "Kielkanal und Bosporus"],
  "studium/geografie/g08": ["Ca. 2–3 Wochen", "Ca. 5–6 Wochen", "Ca. 3–4 Tage", "Ca. 8–10 Wochen"],
  "studium/geografie/g09": ["Brenner und Gotthard", "Brenner und Mont Blanc", "Gotthard und Arlberg", "Simplon und Großglockner"],
  "studium/geografie/g10": ["Wirtschaftskorridor England–Norditalien", "Bananen-Importroute nach Hamburg", "Wirtschaftskorridor Paris–Warschau", "Schifffahrtsroute durch den Ärmelkanal"],

  "studium/studium-dhbw/s01": ["Aufzählen ohne Erklärung", "Erklären mit Beispiel", "Abwägen mit Fazit", "Beschreiben mit Begründung"],
  "studium/studium-dhbw/s02": ["Strukturiert wiedergeben, ohne Begründung", "In Stichpunkten aufzählen, ohne Erklärung", "Abwägen und ein eigenes Urteil fällen", "Herleiten mit vollständigem Rechenweg"],
  "studium/studium-dhbw/s03": ["Beschreiben + Zusammenhänge & Beispiele", "Begriffe ohne weitere Erklärung aufzählen", "Nur ein eigenes Urteil abgeben", "Nur eine passende Formel hinschreiben"],
  "studium/studium-dhbw/s04": ["Abwägen und begründet urteilen", "Aufzählen ohne jede Erklärung", "Beschreiben ohne eigenes Urteil", "Nur die Nachteile nennen"],
  "studium/studium-dhbw/s05": ["Formel, Einsetzen, Ergebnis mit Einheit", "Nur das Endergebnis ohne Einheit notieren", "Formel nennen, aber nicht einsetzen", "Ergebnis schätzen und sinnvoll runden"],
  "studium/studium-dhbw/s06": ["Formel, Einsetzen und Zwischenschritte zeigen", "Nur das Endergebnis groß und deutlich hinschreiben", "Rechnung weglassen und das Ergebnis schätzen", "Mehrere Ergebnisse zur Auswahl angeben"],
  "studium/studium-dhbw/s07": ["210 ECTS", "180 ECTS", "240 ECTS", "150 ECTS"],
  "studium/studium-dhbw/s08": ["Direkt wörtlich · indirekt sinngemäß", "Direkt sinngemäß · indirekt wörtlich", "Direkt ohne Quelle · indirekt mit Quelle", "Direkt aus Büchern · indirekt aus Internet"],
  "studium/studium-dhbw/s09": ["Zeit ÷ Punkte, z. B. ≈ 1 Min. je Punkt", "Punkte ÷ Zeit, z. B. ≈ 2 Min. je Punkt", "Immer 5 Min. je Aufgabe", "Zuerst die längste Aufgabe bearbeiten"]
});
