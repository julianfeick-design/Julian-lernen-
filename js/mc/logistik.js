/*
 * Multiple-Choice-Antworten Grundlagen & Funktionen der Logistik – kurz, in Stichpunkten.
 * Format: "kartenId": ["richtige Antwort", "falsch", "falsch", "falsch"]
 */
window.MC_DATA = window.MC_DATA || {};
Object.assign(window.MC_DATA, {
  // 1 · Begriff
  "logistik/l-begriff/lb01": ["Produkt · Menge · Zeit · Ort · Kosten · Informationen · Qualität", "Preis · Werbung · Marke · Kunde · Lager · Lkw · Fahrer", "Transport · Umschlag · Lagerung · Zoll · Maut · Lizenz · Haftung", "Planung · Steuerung · Kontrolle · Einkauf · Verkauf · Lager · Zeit"],
  "logistik/l-begriff/lb02": ["Empfänger richtig versorgen – zu minimalen Kosten (Plowman)", "So schnell wie möglich – egal was es kostet", "Nur Waren lagern", "Nur Lkw disponieren"],
  "logistik/l-begriff/lb03": ["Transport = Raum · Lagerung = Zeit · Kommissionierung = Anordnung", "Transport = Zeit · Lagerung = Raum", "Lagerung = Menge · Transport = Qualität", "Alle drei = Raumüberbrückung"],
  "logistik/l-begriff/lb04": ["TUL · Bestände · Auftragsabwicklung · Verpackung · 3PL-Steuerung", "Werbung · Preis · Vertrieb", "Produktion · Montage · Forschung", "Buchhaltung · Steuern · Personal"],
  "logistik/l-begriff/lb05": ["Teil des SCM: Vorwärts-/Rückfluss & Lagerung planen und steuern", "Synonym für Transport", "Nur Lagerhaltung", "Teil des Marketings"],
  "logistik/l-begriff/lb06": ["Planung, Steuerung, Realisierung & Kontrolle von Material- und Infoflüssen", "Nur Transport von Gütern", "Einkauf von Material", "Verkauf von Produkten"],
  "logistik/l-begriff/lb07": ["Effizienz · Kostenreduktion · Kundenzufriedenheit", "Höhere Preise · mehr Lager", "Weniger Kunden", "Längere Lieferzeiten"],
  "logistik/l-begriff/lb08": ["Knoten (Lager) + Kanten (Transportwege)", "Nur Lkw und Fahrer", "Kunden und Lieferanten", "Rechnungen und Lieferscheine"],
  "logistik/l-begriff/lb09": ["Logistik: Flüsse im Unternehmen · SCM: ganze Kette unternehmensübergreifend", "Logistik: ganze Kette · SCM: nur Lager", "Beides identisch", "SCM: nur Transport"],
  "logistik/l-begriff/lb10": ["Logistik: operativ–strategisch · SCM: stärker strategisch, mehrstufig", "Logistik: nur strategisch · SCM: nur operativ", "Beide nur operativ", "SCM betrifft nur Lieferanten"],
  "logistik/l-begriff/lb11": ["Güter-, Informations- und Finanzfluss", "Personal-, Strom- und Wasserfluss", "Nur Güterfluss", "Kunden-, Lieferanten-, Staatsfluss"],
  "logistik/l-begriff/lb12": ["Service (Lieferzeit, -qualität …) vs. Kosten (Bestände, Transport …)", "Umsatz vs. Gewinn", "Kunden vs. Lieferanten", "Lkw vs. Bahn"],
  "logistik/l-begriff/lb13": ["Zu viel Effizienz → kein Puffer → Ausfälle & unzufriedene Kunden", "Effizienz erhöht immer die Verfügbarkeit", "Beide Ziele sind identisch", "Verfügbarkeit ist unwichtig"],
  "logistik/l-begriff/lb14": ["60er TUL → 70/80er Koordination → 90er SCM → 2000er Netzwerke → heute VUCA/BANI", "60er SCM → 70/80er TUL → 90er Netzwerke → 2000er Koordination → heute VUCA", "60er Koordination → 70/80er TUL → 90er VUCA → 2000er SCM → heute Netzwerke", "60er TUL → 70/80er SCM → 90er Koordination → 2000er VUCA → heute Netzwerke"],
  "logistik/l-begriff/lb15": ["VUCA: volatil, unsicher, komplex, mehrdeutig · BANI: brüchig, ängstlich, nicht-linear, unbegreiflich", "VUCA & BANI sind Logistikfirmen", "VUCA: Versand · BANI: Bahn", "Beides sind Lkw-Typen"],
  "logistik/l-begriff/lb16": ["Kommunikation · Infrastruktur · Organisation · Transport", "Werbung · Marke · Preis", "Nur moderne Technik", "Nur günstige Löhne"],

  // 2 · Markt
  "logistik/l-markt/lm01": ["Ca. 331 Mrd. € · drittgrößter Wirtschaftsbereich", "Ca. 33 Mrd. € · kleinster Bereich", "Ca. 131 Mrd. € · größter Bereich", "Ca. 1.000 Mrd. € · zweitgrößter"],
  "logistik/l-markt/lm02": ["Enthält Eigenleistungen, die nicht verkauft werden", "Weil Logistik keinen Umsatz macht", "Weil es Steuern sind", "Weil es nur Löhne sind"],
  "logistik/l-markt/lm03": ["Ca. 50/50 (Logistik-Folie) – VBL nennt 40/60", "100 % extern", "90 % intern / 10 % extern", "Ca. 80 % extern"],
  "logistik/l-markt/lm04": ["Ca. 5–10 %", "Ca. 30–40 %", "Ca. 1 %", "Ca. 50 %"],
  "logistik/l-markt/lm05": ["Kaufkraft · zentrale Lage · globale Lieferketten · Effizienz", "Niedrige Löhne · wenig Regeln", "Viele Berge · wenig Straßen", "Keine Konkurrenz"],
  "logistik/l-markt/lm06": ["Hamburg · Bremerhaven · Wilhelmshaven", "Rotterdam · Antwerpen · Amsterdam", "Kiel · Rostock · Lübeck", "Duisburg · Köln · Mannheim"],
  "logistik/l-markt/lm07": ["Ladung · Stückgut · Paket · Kontraktlogistik", "Luft · See · Bahn · Rohr", "Kühl · Gefahr · Schwer · Leicht", "Lager · Büro · Werkstatt · Hof"],
  "logistik/l-markt/lm08": ["International · Bulk/Direktladung · handlingsbedürftige Güter", "Klein · mittel · groß", "Nord · Süd · Ost", "Privat · öffentlich · gemischt"],
  "logistik/l-markt/lm09": ["Ca. 27,4 Mrd. €", "Ca. 80 Mrd. €", "Ca. 12 Mrd. €", "Ca. 331 Mrd. €"],
  "logistik/l-markt/lm10": ["Kontraktlogistik (ca. 80 Mrd. €)", "KEP (ca. 27 Mrd. €)", "Stückgut (ca. 12 Mrd. €)", "Massengut (ca. 16,5 Mrd. €)"],
  "logistik/l-markt/lm11": ["Kontrakt 80 · Inhouse 44 · FTL 36 · Luft/See 33 · KEP 27,4", "KEP 80 · Kontrakt 27 · FTL 12", "Alle Segmente gleich groß", "Stückgut 80 · KEP 44"],
  "logistik/l-markt/lm12": ["Pfohl · Klaus · Bretzke · Schulte · Ihde", "Gutenberg · Heinen · Ulrich", "Meffert · Bruhn · Walsh", "Wöhe · Drucker · Maslow"],

  // 3 · Konzeption
  "logistik/l-konzeption/lk01": ["Beschaffungs- · Produktions- · Distributions- · Entsorgungslogistik", "Einkauf · Verkauf · Marketing · Personal", "Lkw · Bahn · Schiff · Flugzeug", "Klein · mittel · groß · global"],
  "logistik/l-konzeption/lk02": ["Lagern = Zeit · Transport = Raum · Umschlag = Menge/Sorte", "Lagern = Raum · Transport = Zeit", "Verpacken = Zeitänderung", "Umschlag = Raumänderung"],
  "logistik/l-konzeption/lk03": ["Vorauseilend · begleitend · nachfolgend", "Schnell · langsam · gar nicht", "Intern · extern · global", "Schriftlich · mündlich · digital"],
  "logistik/l-konzeption/lk04": ["Nein – Güter, Infos & Zahlungen haben eigene Wege", "Ja, immer genau gleich", "Nur Güter und Geld gleich", "Infos gibt es nicht"],
  "logistik/l-konzeption/lk05": ["Einstufig: direkt · mehrstufig: über Knoten · kombiniert: beides", "Einstufig: über Knoten · mehrstufig: direkt", "Alle gehen über einen Hub", "Kombiniert: nur Luftfracht"],
  "logistik/l-konzeption/lk06": ["Kosten (Umschlag, Lager) · aber Bündelung & Sortimentsbildung", "Nur Vorteile, keine Kosten", "Nur Kosten, keine Vorteile", "Knoten sind verboten"],
  "logistik/l-konzeption/lk07": ["Strategisch: Standort · taktisch: Transportmittel · operativ: Touren", "Strategisch: Touren · operativ: Standort", "Alle Entscheidungen sind operativ", "Taktisch: Lieferantenauswahl auf 10 Jahre"],
  "logistik/l-konzeption/lk08": ["System- · Fluss- · Querschnittsfunktionsdenken", "Kosten- · Preis- · Gewinndenken", "Lkw- · Bahn- · Schiffsdenken", "Push · Pull · Hub"],
  "logistik/l-konzeption/lk09": ["Alle entscheidungsrelevanten Kosten – Trade-offs beachten", "Nur Transportkosten senken", "Jede Abteilung spart für sich", "Kosten sind egal"],
  "logistik/l-konzeption/lk10": ["Verpackung vs. Transportschäden · Bestand vs. Bestellkosten", "Umsatz vs. Werbung", "Lkw vs. Fahrer", "Gewinn vs. Steuern"],
  "logistik/l-konzeption/lk11": ["Lieferzeit: Auftrag bis Eingang · Zuverlässigkeit: Lieferbereitschaftsgrad", "Lieferzeit: Retourenquote · Zuverlässigkeit: km/h", "Beides in Euro gemessen", "Zuverlässigkeit: Anzahl Lkw"],
  "logistik/l-konzeption/lk12": ["Qualität: Retourenquote · Flexibilität: schwer messbar", "Qualität: km/h · Flexibilität: Lieferbereitschaftsgrad", "Beide in Tagen gemessen", "Qualität: Umsatz"],
  "logistik/l-konzeption/lk13": ["Durchgängiger Fluss ohne Wartezeiten · Bestände = Unterbrechung", "Möglichst große Lager", "Jede Abteilung plant allein", "Nur Informationsfluss betrachten"],
  "logistik/l-konzeption/lk14": ["Ermöglichen prompte Lieferung · verdecken Probleme & Ausschuss", "Haben nur Nachteile", "Haben nur Vorteile", "Sind gesetzlich verboten"],
  "logistik/l-konzeption/lk15": ["Bestände sind „nicht böse“, sondern Working Capital", "Bestände müssen immer auf 0", "Bestände sind illegal", "Nur Just-in-Time zählt"],
  "logistik/l-konzeption/lk16": ["Schnittstellen zwischen Bereichen abstimmen", "Jede Abteilung optimiert sich selbst", "Nur Logistik entscheidet", "Keine Zusammenarbeit nötig"],

  // 4 · Prinzipien
  "logistik/l-prinzipien/lp01": ["Enge Kopplung · Ausgleich · Postponement · Bündelung · Standardisierung", "TUL · 7 R · SCM · KEP · FTL", "Push · Pull · Hub · Spoke · Ring", "Planung · Steuerung · Kontrolle · Einkauf"],
  "logistik/l-prinzipien/lp02": ["Lose: Puffer, Verzögerung · Eng: frühe Infos an alle Stufen", "Lose: frühe Infos · Eng: Puffer", "Beide identisch", "Eng: keine Informationen"],
  "logistik/l-prinzipien/lp03": ["Schwankungen schaukeln sich in der Kette auf (Prognosen, Infomangel)", "Peitsche für Lkw-Fahrer", "Konstante Nachfrage", "Preissenkung im Handel"],
  "logistik/l-prinzipien/lp04": ["Zusammengefasste Nachfragen gleichen sich aus → weniger Sicherheitsbestand", "Mehr Lager = mehr Sicherheit", "Statistik über Unfälle", "Zufällige Preisänderungen"],
  "logistik/l-prinzipien/lp05": ["Kapazitätspools · Zentrallager · Gleichteile", "Mehr dezentrale Lager", "Mehr Varianten", "Werbung"],
  "logistik/l-prinzipien/lp06": ["Variantenbildung nach hinten verschieben (OPP später)", "Produktion vorziehen", "Lieferung verschieben", "Lager verkleinern"],
  "logistik/l-prinzipien/lp07": ["Basisgerät lagern · Ausstattung erst nach Kundenauftrag", "Alle Varianten fertig auf Lager", "Notebook erst nach Lieferung bauen", "Nur ein Modell anbieten"],
  "logistik/l-prinzipien/lp08": ["Hohe Fixkosten → Auslastung entscheidet (Fixkostendegression)", "Weil Lkw billig sind", "Wegen weniger Maut", "Weil Kunden es fordern"],
  "logistik/l-prinzipien/lp09": ["Sendungs-, Tourenverdichtung · Knotenpunkt- · Ringsysteme", "Push · Pull · Just-in-Time", "Lkw · Bahn · Schiff · Flugzeug", "FTL · LTL · KEP"],
  "logistik/l-prinzipien/lp10": ["Sendungen einer Region bündeln · z. B. Gebietsspediteur", "Mehr Stopps pro Tour", "Über einen Hub fahren", "Ringförmige Route"],
  "logistik/l-prinzipien/lp11": ["Mehr Stopps im Gebiet, kürzere Wege · z. B. Begegnungsverkehr", "Sendungen einer Region bündeln", "Alles über einen Hub", "Round-the-World-Line"],
  "logistik/l-prinzipien/lp12": ["Relationen über Hub · weniger, besser ausgelastete Fahrzeuge", "Direktverkehr zwischen allen", "Ringförmige Route", "Nur Paketdienste"],
  "logistik/l-prinzipien/lp13": ["Ladung an jeder Station für folgende · z. B. Round-the-World", "Sternförmig zum Hub", "Direktfahrt ohne Stopp", "Nur Rückfahrten"],
  "logistik/l-prinzipien/lp14": ["Ladehilfsmittel · Verpackung · Teile → Automatisierung", "Informationen · Abläufe · EDIFACT", "Marken · Werbung · Preis", "Fahrer · Arbeitszeit"],
  "logistik/l-prinzipien/lp15": ["Informationen (NVE, EDIFACT) · Abläufe", "Paletten · Container", "Teile · Baugruppen", "Verpackungen"],
  "logistik/l-prinzipien/lp16": ["Political · Economical · Social · Technological · Ecological · Legal", "Preis · Einkauf · Service · Transport · Effizienz · Lager", "Plan · Execute · Steer · Track · Evaluate · Learn", "Produkt · Ort · Preis · Werbung"],

  // Lernfragen & Film
  "logistik/l-lernfragen/lf01": ["Fabrik → Terminal → Seeschiff → LA → Lager → Logistikzentrum → Kunde", "Fabrik → Flugzeug → Kunde", "Fabrik → Bahn → Kunde", "Fabrik → Kunde direkt per Lkw"],
  "logistik/l-lernfragen/lf02": ["Samsung · Reedereien (MSC, Maersk) · Amazon · UPS", "Nur Samsung und der Kunde", "Nur Deutsche Bahn", "Nur Amazon"],
  "logistik/l-lernfragen/lf03": ["Krisen · Abhängigkeiten · Überlastung · Fahrermangel", "Zu viele Fahrer", "Zu niedrige Nachfrage", "Keine Probleme"],
  "logistik/l-lernfragen/lf04": ["Track & Trace · Containerkräne · Lagerroboter · Sortieranlagen", "Nur Papierlisten", "Pferdekutschen", "Fax und Telefon"],
  "logistik/l-lernfragen/lf05": ["Verteilte Produktion → alle Flüsse über Firmen hinweg koordinieren", "Weil jede Firma alles selbst macht", "Weil Transport kostenlos ist", "Weil es gesetzlich vorgeschrieben ist"],
  "logistik/l-lernfragen/lf06": ["331 Mrd. € = Eigenleistung + extern vergeben (ca. 50/50)", "Nur Umsätze der Speditionen", "Nur Paketdienste", "Nur Staatsausgaben"],
  "logistik/l-lernfragen/lf07": ["Beschaffung: rein · Produktion: intern · Distribution: raus · Entsorgung: zurück", "Alle vier sind gleich", "Beschaffung = Verkauf an Kunden", "Entsorgung = Einkauf von Rohstoffen"],
  "logistik/l-lernfragen/lf08": ["Echte Nachfragedaten an alle Stufen → weniger Aufschaukeln", "Mehr Lager auf allen Stufen", "Weniger Kommunikation", "Höhere Bestellmengen"]
});
