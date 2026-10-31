/*
 * Multiple-Choice-Antworten Grundlagen & Funktionen der Logistik – kurz, in Stichpunkten.
 * Format: "kartenId": ["richtige Antwort", "falsch", "falsch", "falsch"]
 * Regel: Falschantworten gleich lang, gleich aufgebaut, fachlich plausibel.
 */
window.MC_DATA = window.MC_DATA || {};
Object.assign(window.MC_DATA, {
  // 1 · Begriff
  "logistik/l-begriff/lb01": ["Produkt · Menge · Zeit · Ort · Kosten · Info · Qualität", "Produkt · Menge · Zeit · Ort · Preis · Kunde · Qualität", "Produkt · Lager · Zeit · Ort · Kosten · Info · Marke", "Preis · Menge · Zeit · Route · Kosten · Info · Qualität"],
  "logistik/l-begriff/lb02": ["Bedarfsgerecht versorgen zu minimalen Kosten", "Bedarfsgerecht versorgen zu maximalem Tempo", "Möglichst viel lagern zu minimalen Kosten", "Möglichst schnell liefern, egal zu welchen Kosten"],
  "logistik/l-begriff/lb03": ["Transport = Raum · Lager = Zeit", "Transport = Zeit · Lager = Raum", "Transport = Menge · Lager = Sorte", "Transport = Raum · Lager = Menge"],
  "logistik/l-begriff/lb04": ["TUL · Bestände · Aufträge · Verpackung", "TUL · Werbung · Preise · Vertrieb", "Produktion · Bestände · Forschung · Montage", "TUL · Personal · Steuern · Buchhaltung"],
  "logistik/l-begriff/lb05": ["Teil des SCM, plant Vor- und Rückfluss", "Oberbegriff des SCM, plant nur Vorfluss", "Teil des Marketings, plant den Absatz", "Teil der Produktion, plant Fertigung"],
  "logistik/l-begriff/lb06": ["Material- und Informationsflüsse steuern", "Material- und Geldflüsse buchen und abrechnen", "Personal- und Informationsflüsse planen", "Waren einkaufen und weiterverkaufen"],
  "logistik/l-begriff/lb07": ["Effizienz · Kostenreduktion · Zufriedenheit", "Effizienz · Preiserhöhung · Lagerausbau", "Wachstum · Kostenreduktion · Werbewirkung", "Tempo · Preiserhöhung · Zufriedenheit"],
  "logistik/l-begriff/lb08": ["Knoten (Lager) + Kanten (Wege)", "Knoten (Wege) + Kanten (Lager)", "Knoten (Kunden) + Kanten (Lieferanten)", "Knoten (Fahrer) + Kanten (Fahrzeuge)"],
  "logistik/l-begriff/lb09": ["Logistik intern · SCM unternehmensübergreifend", "Logistik übergreifend · SCM unternehmensintern", "Logistik nur Transport · SCM nur Lager", "Logistik strategisch · SCM nur operativ"],
  "logistik/l-begriff/lb10": ["SCM stärker strategisch und mehrstufig", "SCM stärker operativ und einstufig", "Logistik stärker strategisch und mehrstufig", "SCM stärker taktisch und unternehmensintern"],
  "logistik/l-begriff/lb11": ["Güter · Informationen · Finanzen", "Güter · Personal · Energie", "Informationen · Kunden · Lieferanten", "Güter · Fahrzeuge · Fahrer"],
  "logistik/l-begriff/lb12": ["Service vs. Kosten", "Umsatz vs. Gewinn", "Tempo vs. Sicherheit", "Lager vs. Transport"],
  "logistik/l-begriff/lb13": ["Zu effizient → kein Puffer bei Ausfällen", "Zu effizient → zu viel Lagerbestand im Netz", "Zu verfügbar → zu wenig Lagerbestand", "Zu verfügbar → keine Kostenkontrolle mehr"],
  "logistik/l-begriff/lb14": ["TUL → Koordination → SCM → Netzwerke → VUCA", "SCM → TUL → Koordination → VUCA → Netzwerke", "Koordination → TUL → Netzwerke → SCM → VUCA", "TUL → SCM → Koordination → VUCA → Netzwerke"],
  "logistik/l-begriff/lb15": ["Begriffe für eine unsichere, komplexe Welt", "Namen der zwei größten Logistikkonzerne Europas", "Normen für Ladungsträger in Europa", "Kennzahlen zur Messung der Lagerauslastung"],
  "logistik/l-begriff/lb16": ["Kommunikation · Infrastruktur · Organisation", "Kommunikation · Werbung · Organisation", "Infrastruktur · Marke · Preisgestaltung", "Organisation · Steuern · Subventionen"],

  // 2 · Markt
  "logistik/l-markt/lm01": ["Ca. 331 Mrd. € · drittgrößter Bereich", "Ca. 331 Mrd. € · größter Bereich", "Ca. 131 Mrd. € · drittgrößter Bereich", "Ca. 231 Mrd. € · fünftgrößter Bereich"],
  "logistik/l-markt/lm02": ["Enthält nicht verkaufte Eigenleistungen", "Enthält nur an Kunden verkaufte Dienstleistungen", "Enthält nur Steuern und Abgaben", "Enthält nur Löhne der Fahrer"],
  "logistik/l-markt/lm03": ["Ca. 50/50 (VBL: 40 out / 60 in)", "Ca. 80/20 (VBL: 70 out / 30 in)", "Ca. 30/70 (VBL: 20 out / 80 in)", "Ca. 90/10 (VBL: 60 out / 40 in)"],
  "logistik/l-markt/lm04": ["Ca. 5–10 %", "Ca. 15–20 %", "Ca. 25–30 %", "Ca. 1–3 %"],
  "logistik/l-markt/lm05": ["Kaufkraft · Lage · Lieferketten · Effizienz", "Kaufkraft · Löhne · Rohstoffe · Effizienz", "Lage · Häfen · Subventionen · Steuern", "Bevölkerung · Klima · Rohstoffe · Löhne"],
  "logistik/l-markt/lm06": ["Hamburg · Bremerhaven · Wilhelmshaven", "Hamburg · Rotterdam · Antwerpen", "Kiel · Rostock · Wilhelmshaven", "Bremerhaven · Wilhelmshaven · Duisburg"],
  "logistik/l-markt/lm07": ["Ladung · Stückgut · Paket · Kontrakt", "Ladung · Luftfracht · Paket · Pipeline", "Stückgut · Seefracht · Bahn · Kontrakt", "Kühl · Gefahrgut · Paket · Schwerlast"],
  "logistik/l-markt/lm08": ["International · Bulk/Direkt · handlingsbedürftig", "National · Bulk/Direkt · Paketdienste", "International · Luftfracht · Seefracht", "Handlingsbedürftig · Kontrakt · Werkverkehr"],
  "logistik/l-markt/lm09": ["Ca. 27,4 Mrd. €", "Ca. 12,0 Mrd. €", "Ca. 36,0 Mrd. €", "Ca. 80,0 Mrd. €"],
  "logistik/l-markt/lm10": ["Kontraktlogistik, ca. 80 Mrd. €", "KEP-Dienste, ca. 80 Mrd. €", "Ladungsverkehr, ca. 36 Mrd. €", "Luft-/Seefracht, ca. 44 Mrd. €"],
  "logistik/l-markt/lm11": ["Kontrakt 80 · Inhouse 44 · FTL 36 · KEP 27,4", "KEP 80 · Inhouse 44 · FTL 36 · Kontrakt 27,4", "Kontrakt 44 · Inhouse 80 · FTL 27,4 · KEP 36", "Kontrakt 80 · Inhouse 36 · FTL 44 · KEP 12"],
  "logistik/l-markt/lm12": ["Pfohl · Bretzke · Schulte · Ihde", "Gutenberg · Heinen · Ulrich · Wöhe", "Meffert · Bruhn · Walsh · Kotler", "Pfohl · Meffert · Wöhe · Heinen"],

  // 3 · Konzeption
  "logistik/l-konzeption/lk01": ["Beschaffung · Produktion · Distribution · Entsorgung", "Beschaffung · Marketing · Distribution · Finanzierung", "Einkauf · Produktion · Verkauf · Buchhaltung", "Beschaffung · Produktion · Werbung · Entsorgung"],
  "logistik/l-konzeption/lk02": ["Lagern = Zeit · Umschlag = Menge/Sorte", "Lagern = Raum · Umschlag = Zeit", "Lagern = Menge · Umschlag = Raum", "Lagern = Sorte · Umschlag = Zeit"],
  "logistik/l-konzeption/lk03": ["Vorauseilend · begleitend · nachfolgend", "Vorauseilend · parallel · rückwärts", "Intern · extern · übergreifend", "Mündlich · schriftlich · digital"],
  "logistik/l-konzeption/lk04": ["Nein, jeder Fluss hat eigene Wege", "Ja, alle Flüsse laufen gleich", "Nur Güter und Infos laufen gleich", "Nur Güter und Geld laufen gleich"],
  "logistik/l-konzeption/lk05": ["Einstufig direkt · mehrstufig über Knoten", "Einstufig über Knoten · mehrstufig direkt", "Einstufig per Bahn · mehrstufig per Lkw", "Einstufig national · mehrstufig global"],
  "logistik/l-konzeption/lk06": ["Kosten, aber Bündelung & Sortimentsbildung", "Kosten, aber weniger Umschlag & weniger Lager", "Kostenlos, aber langsamere Lieferung", "Kostenlos, aber keine Bündelung möglich"],
  "logistik/l-konzeption/lk07": ["Strategisch Standort · operativ Touren", "Strategisch Touren · operativ Standort", "Taktisch Standort · strategisch Touren", "Operativ Lieferanten · taktisch Touren"],
  "logistik/l-konzeption/lk08": ["System · Fluss · Querschnittsfunktion", "System · Kosten · Gewinnfunktion", "Fluss · Preis · Marketingfunktion", "Netz · Lager · Transportfunktion"],
  "logistik/l-konzeption/lk09": ["Gesamtkosten betrachten, Trade-offs beachten", "Einzelkosten je Abteilung senken, Trade-offs ignorieren", "Transportkosten zuerst minimieren", "Lagerkosten zuerst minimieren"],
  "logistik/l-konzeption/lk10": ["Verpackung ↔ Transportschäden", "Werbebudget ↔ Umsatzwachstum", "Steuerlast ↔ Gewinn nach Steuern", "Fahrerzahl ↔ Anzahl der Lkw"],
  "logistik/l-konzeption/lk11": ["Zuverlässigkeit = Lieferbereitschaftsgrad", "Zuverlässigkeit = Retourenquote", "Zuverlässigkeit = Durchlaufzeit", "Zuverlässigkeit = Umschlagshäufigkeit im Lager"],
  "logistik/l-konzeption/lk12": ["Qualität = Retourenquote", "Qualität = Lieferbereitschaftsgrad", "Qualität = Lieferzeit in Tagen", "Qualität = Lagerumschlag"],
  "logistik/l-konzeption/lk13": ["Ununterbrochener Fluss, Bestände = Störung", "Unterbrochener Fluss, Bestände = Puffer", "Ununterbrochener Fluss, Bestände = Ziel", "Getrennte Abteilungen, Bestände = Sicherheit"],
  "logistik/l-konzeption/lk14": ["Ermöglichen Lieferung, verdecken Probleme", "Verhindern Lieferung, zeigen Probleme", "Ermöglichen Lieferung, zeigen Probleme", "Verhindern Lieferung, verdecken Probleme"],
  "logistik/l-konzeption/lk15": ["Bestände sind Working Capital, nicht „böse“", "Bestände sind immer auf null zu senken", "Bestände sind nur bei Luftfracht sinnvoll", "Bestände ersetzen jede Transportbündelung"],
  "logistik/l-konzeption/lk16": ["Schnittstellen bereichsübergreifend abstimmen", "Jede Abteilung optimiert nur ihre eigenen Kennzahlen", "Logistik entscheidet allein für alle", "Schnittstellen möglichst vermeiden"],

  // 4 · Prinzipien
  "logistik/l-prinzipien/lp01": ["Kopplung · Ausgleich · Postponement · Bündelung · Standards", "Kopplung · Lagerung · Postponement · Werbung · Standards", "TUL · Ausgleich · Push · Bündelung · Pull", "Kopplung · Ausgleich · Outsourcing · Rabatte · Standards"],
  "logistik/l-prinzipien/lp02": ["Eng = frühe Infos an alle Stufen", "Eng = hohe Puffer an allen Stufen", "Lose = frühe Infos an alle Stufen", "Eng = jede Stufe plant allein"],
  "logistik/l-prinzipien/lp03": ["Schwankungen schaukeln sich auf", "Schwankungen gleichen sich aus", "Preise sinken entlang der Kette", "Bestände sinken entlang der Kette"],
  "logistik/l-prinzipien/lp04": ["Zusammenfassen senkt Sicherheitsbestand", "Zusammenfassen erhöht Sicherheitsbestand", "Aufteilen senkt Sicherheitsbestand", "Aufteilen senkt Transportkosten"],
  "logistik/l-prinzipien/lp05": ["Zentrallager · Kapazitätspool · Gleichteile", "Regionallager · Einzelkapazität · Varianten", "Zentrallager · Varianten · Sonderteile", "Dezentrale Lager · Pool · Sonderteile"],
  "logistik/l-prinzipien/lp06": ["Variantenbildung nach hinten verschieben", "Variantenbildung nach vorne verschieben", "Auslieferung an den Kunden nach hinten verschieben", "Produktion komplett vorziehen"],
  "logistik/l-prinzipien/lp07": ["Basisgerät lagern, nach Auftrag ausstatten", "Alle Varianten fertig bauen und auf Lager legen", "Erst bestellen, dann Basisgerät bauen", "Varianten im Distributionslager mischen"],
  "logistik/l-prinzipien/lp08": ["Hohe Fixkosten → Auslastung entscheidet", "Hohe variable Kosten → Tempo entscheidet", "Niedrige Fixkosten → Preis entscheidet", "Hohe Fixkosten → Lagerung entscheidet"],
  "logistik/l-prinzipien/lp09": ["Sendung · Tour · Knotenpunkt · Ring", "Sendung · Lager · Knotenpunkt · Netz", "Push · Pull · Knotenpunkt · Ring", "Tour · Route · Relation · Ring"],
  "logistik/l-prinzipien/lp10": ["Regionale Sendungen bündeln (Gebietsspediteur)", "Mehr Stopps pro Tour fahren (Begegnungsverkehr)", "Alle Relationen über einen Hub", "Ladung an jeder Station (Ring)"],
  "logistik/l-prinzipien/lp11": ["Mehr Stopps, kürzere Wege (Begegnungsverkehr)", "Regionale Sendungen bündeln (Gebietsspediteur)", "Alle Relationen über einen Hub", "Ladung an jeder Station (Ring)"],
  "logistik/l-prinzipien/lp12": ["Relationen über einen Hub bündeln", "Regionale Sendungen vorab bündeln", "Mehr Stopps pro Tour fahren", "Ladung an jeder Station aufnehmen"],
  "logistik/l-prinzipien/lp13": ["Ladung an jeder Station (Round-the-World)", "Alle Relationen über einen Hub (Luftfracht)", "Regionale Sendungen bündeln (Gebiet)", "Mehr Stopps pro Tour (Begegnung)"],
  "logistik/l-prinzipien/lp14": ["Ladehilfsmittel · Verpackung · Teile", "Informationen · Abläufe · Datenformate", "Ladehilfsmittel · Abläufe · Preise", "Marken · Verpackung · Werbemittel"],
  "logistik/l-prinzipien/lp15": ["Informationen (NVE, EDIFACT) · Abläufe", "Paletten (EUR, ISO) · Container", "Teile (DIN, ISO) · Baugruppen", "Verpackungen (NVE, EAN) · Paletten"],
  "logistik/l-prinzipien/lp16": ["Political · Economical · Social · Technological · Ecological · Legal", "Political · Economical · Strategic · Technical · Ethical · Logistic", "Product · Economical · Social · Transport · Ecological · Legal", "Political · Efficiency · Service · Technological · Ecological · Lean"],

  // Lernfragen & Film
  "logistik/l-lernfragen/lf01": ["Container → Palette → Paket → Tüte", "Palette → Container → Tüte → Paket", "Paket → Palette → Container → Tüte", "Container → Paket → Palette → Tüte"],
  "logistik/l-lernfragen/lf02": ["Samsung · Reedereien · Amazon · UPS", "Samsung · Airlines · Zalando · DHL", "Apple · Reedereien · Amazon · Hermes", "Samsung · Deutsche Bahn · Otto · DPD"],
  "logistik/l-lernfragen/lf03": ["Krisen · Abhängigkeiten · Fahrermangel", "Überangebot · Preisverfall · Fahrerüberschuss", "Krisen · Preisverfall · Lageraufbau", "Unabhängigkeit · Fahrerüberschuss · Leerstand"],
  "logistik/l-lernfragen/lf04": ["Track & Trace · Lagerroboter · Sortieranlagen", "Faxgeräte · Lagerroboter · Papierlisten", "Track & Trace · Kutschen · Handsortierung", "Telefon · Stempel · Sortieranlagen"],
  "logistik/l-lernfragen/lf05": ["Verteilte Produktion braucht Koordination", "Zentrale Produktion braucht keine Koordination", "Verteilte Produktion braucht mehr Lager", "Transport ist kostenlos und unkritisch"],
  "logistik/l-lernfragen/lf06": ["Eigenleistung + extern vergebene Leistung", "Extern vergebene Dienstleistungen der Speditionen", "Eigenleistungen der Industrie + Steuern", "Umsätze der Paket- und Kurierdienste"],
  "logistik/l-lernfragen/lf07": ["Rein · intern · raus · zurück", "Raus · intern · rein · zurück", "Rein · raus · intern · zurück", "Zurück · rein · intern · raus"],
  "logistik/l-lernfragen/lf08": ["Echte Nachfrage an alle Stufen weitergeben", "Höhere Bestellmengen an allen Stufen auslösen", "Jede Stufe prognostiziert für sich", "Bestände an allen Stufen erhöhen"]
});
