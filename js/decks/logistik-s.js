/*
 * Logistik – Teil „Funktionen“: Beschaffungslogistik (Prof. Dr. Michael Schröder, WSTL 26)
 * Quelle: Folien „Logistik“ Teil 1 (Kapitel 1–5) + Julians Notizen.
 * important: true = deckt ein offizielles Lernziel ab („Sie sollen erläutern können, …“).
 */
(function () {
  const f = window.BUILTIN_FOLDERS.find(x => x.id === "logistik");
  if (!f) return;
  f.decks.push({
    id: "s-beschaffung",
    name: "5 · Beschaffungslogistik (Prof. Schröder)",
    description: "Grundfunktionen · Beschaffungsobjekte · Hebel des Einkaufs · Bedarfsarten · ABC/XYZ · Portfolios · Sourcing · JIT/JIS · Konsignationslager · Bestellpolitiken · Andler · News-Vendor · Lager",
    cards: [
      { id: "sb01", q: "Welche drei logistischen Grundfunktionen gibt es – und welches Problem löst jede?", a: "Transport = Raumüberbrückung (Dislozierung) · Lagern = Zeitausgleich (unterschiedliche Zeitstrukturen) · Umschlag = Bündeln und Ordnen (Arbeitsteiligkeit).", important: true },
      { id: "sb02", q: "Welche Beschaffungsobjekte gibt es?", a: "Material (Roh-, Hilfs-, Betriebsstoffe, Zulieferteile/Module, Handelswaren, Ersatzteile), Dienstleistungen (z. B. Frachteinkauf), Betriebsmittel, Personal, Informationen, Kapital.", important: true },
      { id: "sb03", q: "In welche drei Teilbereiche gliedert sich die Materialwirtschaft?", a: "Einkauf (Marktforschung, Verhandlung, Lieferantenbewertung) · Disposition (Bedarfsermittlung, Bestellmengen, Bestände) · Lagerhaltung (Wareneingang, Ein-/Auslagerung, Kommissionierung, innerbetrieblicher Transport).", important: true },
      { id: "sb04", q: "Hebelwirkung des Einkaufs: Wie erreicht man 65 T€ statt 50 T€ Gewinn (1 Mio. € Umsatz, 50 % Materialkosten)?", a: "Über den Vertrieb: Umsatz +30 % auf 1,3 Mio. €. Über den Einkauf: Materialkosten nur −3 % (500 → 485 T€) → Umsatzrendite 6,5 %. Jeder gesparte Euro wirkt direkt auf den Gewinn.", important: true },
      { id: "sb05", q: "Fundamentalziel vs. Instrumentalziel?", a: "Fundamentalziel: um seiner selbst willen verfolgt (z. B. Versorgungssicherheit, niedrige Kosten, Qualität). Instrumentalziel: dient einem anderen Ziel (z. B. geringe Bestände, kurze Beschaffungszeiten). Test: „Warum ist das wichtig?“", important: true },
      { id: "sb06", q: "Primär-, Sekundär- und Tertiärbedarf?", a: "Primär: verkaufsfähige Endprodukte/Ersatzteile · Sekundär: Rohstoffe, Teile, Baugruppen für deren Herstellung · Tertiär: Hilfs-/Betriebsstoffe, Verschleißwerkzeuge.", important: true },
      { id: "sb07", q: "Wie berechnet man den Nettobedarf?", a: "Nettobedarf = Bruttobedarf − Lagerbestand − Unterwegsbestand + reservierter Bestand." },
      { id: "sb08", q: "Deterministische vs. stochastische Bedarfsermittlung?", a: "Deterministisch (programmgebunden): genau aus dem Produktionsprogramm/Stückliste berechnet. Stochastisch (verbrauchsorientiert): aus Vergangenheitsverbräuchen prognostiziert.", important: true },
      { id: "sb09", q: "Warum teilt man bei der Stichprobenvarianz durch n − 1?", a: "Mit n wird die wahre Varianz bei Stichproben systematisch unterschätzt (Verzerrung (n−1)/n). Teilen durch n − 1 korrigiert das – im Beispiel ergibt sich so im Mittel die wahre Varianz 2,67.", important: true },
      { id: "sb10", q: "Was misst die XYZ-Analyse und wo liegen die Grenzen?", a: "Die Regelmäßigkeit des Verbrauchs über den Variationskoeffizienten VK = σ/µ: X 0–0,25 (konstant) · Y > 0,25–0,5 (schwankend) · Z > 0,5 (sporadisch).", important: true },
      { id: "sb11", q: "Was teilt die ABC-Analyse ein?", a: "Güter nach ihrem wertmäßigen Verbrauch (sortieren, kumulieren): A = hoher Wertanteil, hoher Planungsaufwand lohnt · B = mittel · C = niedrig, verbrauchsorientiert planen. (Notiz: verstehen, aber keine Klausurfrage.)" },
      { id: "sb12", q: "Die vier Felder des Materialportfolios (Ergebnisbeitrag × Versorgungsrisiko)?", a: "Unkritische Güter (niedrig/niedrig) · Hebelprodukte (Ergebnisbeitrag hoch, Risiko niedrig) · Engpassgüter (Ergebnisbeitrag niedrig, Risiko hoch) · Strategische Produkte (hoch/hoch).", important: true },
      { id: "sb13", q: "Was empfiehlt man für Engpassgüter und für strategische Produkte?", a: "Engpassgüter: Mengen sichern, Lieferanten kontrollieren, Sicherheitsbestände, Ausweichpläne. Strategische Produkte: genaue Marktforschung, langfristige Lieferantenbeziehungen, Make-or-buy.", important: true },
      { id: "sb14", q: "Die vier Beschaffungsstrategien im Portfolio?", a: "Global Sourcing (hoher Ergebnisbeitrag, niedriges Risiko) · Modular Sourcing (hoch/hoch) · Single/Sole Sourcing (niedrig/niedrig, Sole = erzwungen) · Dual/Multiple Sourcing (niedriger Beitrag, hohes Risiko).", important: true },
      { id: "sb15", q: "Warum Single Sourcing – und warum Dual/Multiple Sourcing?", a: "Single: Mengenrabatte, geringere Transport- und Transaktionskosten, hohe Qualitätsstandards. Dual/Multiple: Stillstand minimieren, Wettbewerb nutzen, niedrige Wechselbarrieren, neue Entwicklungen erfassen.", important: true },
      { id: "sb16", q: "Warum gewinnt Modular Sourcing an Bedeutung?", a: "Die Individualisierung erzeugt riesige Variantenvielfalt (Audi A1: ca. 2,8 Trillionen Kombinationen). Neue Prozessstufen (Teil → Komponente → Baugruppe → Modul) und Modullieferanten senken die Komplexität, z. B. kompletter Außenspiegel.", important: true },
      { id: "sb17", q: "Welche drei Formen der Güteranlieferung gibt es?", a: "Einzelbeschaffung (im Bedarfsfall), Vorratsbeschaffung, produktionssynchrone Beschaffung (Just-in-Time). Entscheidend: Güterstruktur, Lieferantenstruktur, Produktionsanbindung.", important: true },
      { id: "sb18", q: "Was ist ein Konsignationslager?", a: "Lager des Lieferanten beim Abnehmer: Ware bleibt bis zur Entnahme Eigentum des Lieferanten, Fakturierung erst bei Entnahme. Abnehmer: keine Kapitalbindung. Lieferant: freie Flächen, mehr Dispositionsfreiheit.", important: true },
      { id: "sb19", q: "Was unterscheidet Just-in-Sequence von Just-in-Time?", a: "JIS liefert zusätzlich in der Einbaureihenfolge – sequenziert statt artrein verpackt. Sinnvoll bei hoher Variantenvielfalt am Band (Automobil).", important: true },
      { id: "sb20", q: "Was ist die „Frozen Zone“ im Abrufsystem?", a: "Der Zeitraum des Feinabrufs (ca. 10 Arbeitstage), in dem keine Abweichung mehr erlaubt ist (0 %). Davor: Rahmenvereinbarung ±30 %, Rahmenauftrag ±10 %, Lieferabruf ±2 %.", important: true },
      { id: "sb21", q: "Lagerreichweite und Lagerumschlag – Formeln?", a: "Lagerreichweite = Bestand / Ø-Verbrauch · Lagerumschlag = Jahresverbrauch / Ø-Bestand · LRW = 365 / LU.", important: true },
      { id: "sb22", q: "Die vier Kostenkategorien im Bestandsmanagement?", a: "Variable Bestellkosten (inkl. Einstandspreis), fixe Bestellkosten (je Bestellung), Lagerhaltungskosten (inkl. Kapitalbindung), Fehlmengenkosten (entgangener Umsatz, Goodwill …).", important: true },
      { id: "sb23", q: "Woraus setzt sich der Lagerhaltungskostensatz zusammen?", a: "Lagerkostensatz + kalkulatorischer Zinssatz (Kapitalbindung) + kalkulatorischer Wagnissatz (Schwund, Verderb, Obsoleszenz).", important: true },
      { id: "sb24", q: "Wie berechnet man den Sicherheitsbestand bei normalverteilter Nachfrage?", a: "Sicherheitsbestand = z × σ. Beispiel σ = 82: 95 % → z = 1,65 → 135 Stück; 97,7 % → z = 2,00 → 164 Stück.", important: true },
      { id: "sb25", q: "Was sagt ein z-Wert von −2?", a: "Der Wert liegt 2 Standardabweichungen unter dem Mittelwert – nur 2,28 % aller Ereignisse liegen links davon (Fläche Φ).", important: true },
      { id: "sb26", q: "Warum liegt der optimale Lieferservicegrad unter 100 %?", a: "Die Kapitalbindungskosten steigen gegen 100 % asymptotisch gegen unendlich, die Nachfrage reagiert aber nur in einem relevanten Bereich – der Gewinn ist darunter maximal.", important: true },
      { id: "sb27", q: "Die vier Bestellpolitiken tq, tS, sq, sS?", a: "t = fester Bestellrhythmus, s = Meldebestand (Bestellpunkt); q = feste Menge, S = auffüllen auf Zielbestand. tq: wenig Aufwand, reagiert schlecht · sS: flexibel bei schwankendem Verbrauch, aber laufende Kontrolle.", important: true },
      { id: "sb28", q: "Andlersche Losgröße: Formel und Annahmen?", a: "q* = √(2 · B · K_f / (p · i)). Annahmen: konstanter bekannter Bedarf, feste Preise, konstante Kostensätze, keine Fehlmengen, sofortige Lieferung, keine Kapazitätsgrenzen.", important: true },
      { id: "sb29", q: "News-Vendor: Was sind c_o, c_u und das kritische Verhältnis?", a: "c_o = k − r (Überbestand), c_u = p − k (Unterbestand), kritisches Verhältnis = c_u / (c_u + c_o). Beispiel 2 / 2,5 = 0,8 → so viel bestellen, dass die Nachfrage mit 80 % Wahrscheinlichkeit gedeckt ist (S* = µ + z·σ).", important: true },
      { id: "sb30", q: "Welche Verbrauchsfolgeverfahren erlauben HGB und IFRS?", a: "HGB: FIFO, LIFO, Durchschnitt. IFRS: FIFO und Durchschnitt – LIFO nicht. FEFO, LOFO, HIFO sind regelmäßig nicht zulässig.", important: true },
      { id: "sb31", q: "Festplatz vs. chaotische Lagerplatzvergabe?", a: "Festplatz: übersichtlich, wenig Suchaufwand, aber schlechte Raumnutzung → kleine Läger, wenige Artikel. Chaotisch: hohe Raumnutzung und Flexibilität, braucht LVS und MDE → große Läger, E-Commerce.", important: true },
      { id: "sb32", q: "Was ist das Besondere an AutoStore?", a: "Behälter werden ohne Gänge übereinander im Raster gestapelt, Roboter holen sie von oben – „Ware zur Person“, sehr hohe Raumausnutzung.", important: true }
    ],
    quiz: []
  });

  window.MC_DATA = window.MC_DATA || {};
  Object.assign(window.MC_DATA, {
    "logistik/s-beschaffung/sb01": ["Transport, Lagern, Umschlag", "Einkauf, Verkauf, Marketing", "Planung, Steuerung, Kontrolle", "Verpacken, Etikettieren, Prüfen"],
    "logistik/s-beschaffung/sb02": ["Material, Dienstleistungen, Betriebsmittel, Personal, Infos, Kapital", "Nur Rohstoffe und Handelswaren", "Nur Maschinen und Anlagen", "Nur Dienstleistungen und Personal"],
    "logistik/s-beschaffung/sb03": ["Einkauf, Disposition, Lagerhaltung", "Vertrieb, Marketing, Service", "Produktion, Montage, Prüfung", "Finanzierung, Investition, Controlling"],
    "logistik/s-beschaffung/sb04": ["Materialkosten −3 % statt Umsatz +30 %", "Materialkosten −30 % statt Umsatz +3 %", "Umsatz +3 % statt Materialkosten −30 %", "Preise +30 % statt Materialkosten −3 %"],
    "logistik/s-beschaffung/sb05": ["Fundamental = Selbstzweck · Instrumental = dient anderem Ziel", "Fundamental = dient anderem Ziel · Instrumental = Selbstzweck", "Fundamental = kurzfristig · Instrumental = langfristig", "Fundamental = messbar · Instrumental = nicht messbar"],
    "logistik/s-beschaffung/sb06": ["Endprodukt · Teile dafür · Hilfs-/Betriebsstoffe", "Hilfsstoffe · Endprodukt · Teile dafür", "Teile · Hilfsstoffe · Endprodukt", "Endprodukt · Hilfsstoffe · Werkzeuge"],
    "logistik/s-beschaffung/sb07": ["Brutto − Lager − unterwegs + reserviert", "Brutto + Lager + unterwegs − reserviert", "Brutto − Lager + unterwegs − reserviert", "Brutto + Lager − unterwegs + reserviert"],
    "logistik/s-beschaffung/sb08": ["Programmgebunden berechnet vs. aus Verbräuchen prognostiziert", "Aus Verbräuchen prognostiziert vs. programmgebunden", "Nur für C-Teile vs. nur für A-Teile", "Monatlich vs. jährlich geplant"],
    "logistik/s-beschaffung/sb09": ["Teilen durch n unterschätzt die wahre Varianz", "Teilen durch n überschätzt die wahre Varianz", "n − 1 macht die Rechnung nur einfacher", "Bei Stichproben gibt es keine Varianz"],
    "logistik/s-beschaffung/sb10": ["Regelmäßigkeit über VK = σ / µ", "Wertanteil über kumulierte Umsätze", "Lieferzeit über Ø-Wiederbeschaffung", "Lagerdauer über Reichweite"],
    "logistik/s-beschaffung/sb11": ["Wertmäßiger Verbrauch, kumuliert", "Regelmäßigkeit über den VK", "Versorgungsrisiko der Lieferanten", "Gewicht und Volumen der Güter"],
    "logistik/s-beschaffung/sb12": ["Unkritisch, Hebel, Engpass, Strategisch", "Stars, Cash Cows, Dogs, Question Marks", "A, B, C, D nach Wert", "Push, Pull, Hybrid, Lean"],
    "logistik/s-beschaffung/sb13": ["Engpass: Mengen sichern · strategisch: lange Partnerschaft", "Engpass: Marktmacht nutzen · strategisch: Spotmarkt", "Engpass: standardisieren · strategisch: Einzelbeschaffung", "Engpass: keine Bestände · strategisch: viele Wechsel"],
    "logistik/s-beschaffung/sb14": ["Global, Modular, Single/Sole, Dual/Multiple", "Push, Pull, JIT, JIS", "Lokal, Regional, National, Global", "Einzel, Vorrat, Konsignation, JIT"],
    "logistik/s-beschaffung/sb15": ["Single: Rabatte · Dual: Stillstand vermeiden", "Single: Stillstand vermeiden · Dual: Rabatte", "Single: mehr Wettbewerb · Dual: weniger Kosten", "Single: Wechsel leicht · Dual: Abhängigkeit"],
    "logistik/s-beschaffung/sb16": ["Variantenvielfalt → Module vom Systemlieferanten", "Weniger Varianten → mehr Einzelteile", "Mehr Eigenfertigung → weniger Lieferanten", "Billigere Teile → mehr Lagerbestand"],
    "logistik/s-beschaffung/sb17": ["Einzel-, Vorrats-, produktionssynchrone Beschaffung", "Global, Local, Nearshoring", "Kauf, Miete, Leasing", "Direkt, indirekt, gemischt"],
    "logistik/s-beschaffung/sb18": ["Lieferantenlager beim Kunden, Zahlung bei Entnahme", "Kundenlager beim Lieferanten, Zahlung vorab", "Gemeinsames Lager, Zahlung bei Einlagerung", "Zolllager, Zahlung bei Auslieferung"],
    "logistik/s-beschaffung/sb19": ["Zusätzlich in Einbaureihenfolge", "Ohne feste Zeitfenster", "Nur artrein verpackt", "Nur einmal im Monat"],
    "logistik/s-beschaffung/sb20": ["Feinabruf ohne erlaubte Abweichung", "Rahmenvertrag mit ±30 %", "Lager für Tiefkühlware", "Zeitraum ohne Lieferungen"],
    "logistik/s-beschaffung/sb21": ["LRW = Bestand / Ø-Verbrauch · LU = Jahresverbrauch / Ø-Bestand", "LRW = Jahresverbrauch / Ø-Bestand · LU = Bestand / Ø-Verbrauch", "LRW = Bestand × Verbrauch · LU = 365 × Bestand", "LRW = Verbrauch / Bestand · LU = Bestand / 365"],
    "logistik/s-beschaffung/sb22": ["Variable/fixe Bestellkosten, Lagerhaltung, Fehlmengen", "Personal, Miete, Energie, Steuern", "Transport, Zoll, Versicherung, Maut", "Fixkosten, Gemeinkosten, Einzelkosten, Sondereinzelkosten"],
    "logistik/s-beschaffung/sb23": ["Lagerkosten + kalk. Zins + kalk. Wagnis", "Lagerkosten + Transport + Zoll", "Kalk. Zins + Gewinnzuschlag", "Personal + Energie + Miete"],
    "logistik/s-beschaffung/sb24": ["z × σ", "µ × σ", "z × µ", "σ / µ"],
    "logistik/s-beschaffung/sb25": ["2 σ unter dem Mittel, 2,28 % darunter", "2 σ über dem Mittel, 2,28 % darüber", "2 % unter dem Mittel", "Genau der Mittelwert"],
    "logistik/s-beschaffung/sb26": ["Kosten steigen asymptotisch, Nachfrage reagiert begrenzt", "Kosten sinken gegen 100 %", "Kunden wollen keinen guten Service", "Lieferanten verbieten 100 %"],
    "logistik/s-beschaffung/sb27": ["t = Rhythmus, s = Meldebestand · q = fix, S = auffüllen", "t = Menge, s = Rhythmus · q = Ziel, S = fix", "t = Transport, s = Sicherheit · q = Qualität, S = Service", "t = Termin, s = Sortiment · q = Quote, S = Summe"],
    "logistik/s-beschaffung/sb28": ["√(2·B·K_f / (p·i)), konstanter Bedarf", "2·B·K_f / (p·i), schwankender Bedarf", "√(B·p / (2·K_f·i)), mit Fehlmengen", "B / q · K_f, mit Rabatten"],
    "logistik/s-beschaffung/sb29": ["c_u / (c_u + c_o) = 0,8", "c_o / (c_u + c_o) = 0,2 → optimal", "c_u − c_o = 1,5", "c_o / c_u = 0,25 → bestellen"],
    "logistik/s-beschaffung/sb30": ["HGB: FIFO, LIFO, Ø · IFRS: ohne LIFO", "HGB: nur FIFO · IFRS: FIFO, LIFO", "Beide: alle sechs Verfahren", "HGB: HIFO, LOFO · IFRS: FEFO"],
    "logistik/s-beschaffung/sb31": ["Festplatz: kleine Läger · chaotisch: große Läger mit LVS", "Festplatz: E-Commerce · chaotisch: Ersatzteillager", "Festplatz: hohe Raumnutzung · chaotisch: wenig", "Beide nur mit Papierlisten"],
    "logistik/s-beschaffung/sb32": ["Behälter im Raster, Roboter von oben, Ware zur Person", "Breite Gänge, Stapler, Person zur Ware", "Bodenlager in Blöcken ohne Technik", "Hängelager für Textilien"]
  });
})();
