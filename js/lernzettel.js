/*
 * 📄 Handgeschriebene Lernzettel für Blöcke ohne eigene Lektion.
 * (Zu jeder Lektion entsteht der Lernzettel automatisch in app.js.)
 * Bausteine: p · ul (cols) · ol · table (1. Zeile = Kopf) · merke (Text oder Liste) · chips · flow · f (Formel, fx = Erklärung)
 */
(function () {
  const R = String.raw;
  window.LERNZETTEL = (window.LERNZETTEL || []).concat([
    // =================================================================
    // 📦 Logistik – Beschaffungslogistik (Prof. Schröder)
    // =================================================================
    {
      id: "logistik-schroeder-1", fid: "logistik", part: "Teil 1 · Prof. Dr. Michael Schröder", title: "Beschaffungslogistik",
      lessons: ["logistik/s-beschaffung"],
      s: [
        { h: "Grundfunktionen & Aufbau der Vorlesung", b: [
          { table: [["Grundfunktion", "leistet", "weil …"],
            ["Transport", "**Raumüberbrückung**", "Produktion und Bedarf liegen an verschiedenen Orten (Dislozierung)"],
            ["Lagern", "**Zeitausgleich**", "Angebot und Nachfrage haben verschiedene Zeitstrukturen"],
            ["Umschlag", "**Bündeln und Ordnen**", "die Wertschöpfung ist arbeitsteilig"]] },
          { flow: ["Teil 1 Beschaffungslogistik (inbound)", "Teil 2 Produktionslogistik", "Teil 3 Distributionslogistik"] },
          { merke: "Logistiker sind **Orchestratoren** von Material- und Warenströmen – Logistik ist eine **Querschnittsfunktion** mit Knoten und Kanten." }
        ] },
        { h: "Beschaffungsobjekte & Materialwirtschaft", b: [
          { p: "Beschaffung = **Summe aller Maßnahmen zur Versorgung der Unternehmung**. Objekte:" },
          { chips: ["Roh-, Hilfs-, Betriebsstoffe", "Zulieferteile, Baugruppen, Module", "Handelswaren", "Ersatzteile", "Dienstleistungen (z. B. Frachteinkauf)", "Betriebsmittel", "Personal", "Informationen", "Kapital"] },
          { table: [["Einkauf", "Disposition", "Lagerhaltung"],
            ["Beschaffungsmarktforschung, Anbahnung und Abschluss, Preis-/Wertanalyse, **Lieferantenbewertung**", "Bestandsverwaltung, **Bedarfsermittlung**, Bestellmengen und -politiken, Anlieferstrategien", "Wareneingang und -prüfung, Ein-/Um-/Auslagerung, **Kommissionierung**, innerbetrieblicher Transport"]] }
        ] },
        { h: "Entwicklung des Einkaufs", b: [
          { flow: ["1950 Versorgung um jeden Preis", "1960 preisbewusst", "1970 EDV", "1980 Outsourcing", "1990 Marketingbezug", "2000 Global Sourcing", "2020+ Resilienz & Nachhaltigkeit"] }
        ] },
        { h: "Der Einkauf als Hebel", b: [
          { table: [["", "Ausgangslage", "über den Vertrieb", "über den Einkauf"],
            ["Umsatz", "1,0 Mio. €", "**1,3 Mio. € (+30 %)**", "1,0 Mio. €"],
            ["Materialkosten", "500 T€ (50 %)", "650 T€ (50 %)", "**485 T€ (−3 %)**"],
            ["Gewinn", "50 T€", "65 T€", "65 T€"],
            ["Umsatzrendite", "5 %", "5 %", "**6,5 %**"]] },
          { merke: "Jeder im Einkauf gesparte Euro wirkt **direkt auf den Gewinn** – 3 % weniger Materialkosten bringen so viel wie 30 % mehr Umsatz." }
        ] },
        { h: "Trade-offs & Ziele", b: [
          { ul: ["Niedrige Beschaffungskosten ↔ **hohe Qualität**", "Geringe Bestände ↔ **Versorgungssicherheit**/Risikominimierung", "Kurze Beschaffungszeiten ↔ **Kosten und Nachhaltigkeit** (Schiff China → DE: langsam, aber günstig)", "Achtung: Die Wirkungen können **je nach Fall auch anders** sein"], cols: true },
          { table: [["Fundamentalziele (um ihrer selbst willen)", "Instrumentalziele (dienen anderen Zielen)"],
            ["Versorgungssicherheit, niedrige Beschaffungskosten, niedrige Lagerhaltungskosten, hohe Qualität", "geringe Bestände, kurze Beschaffungszeiten, Nachhaltigkeit, Flexibilität"]] },
          { merke: ["Test: „**Warum ist dieses Ziel wichtig?**“ – gibt es eine Antwort, ist es ein Instrumentalziel.", "**Risikominimierung** ist eine Querschnittsanforderung, um die Fundamentalziele robuster zu erreichen."] }
        ] },
        { h: "Bedarfsarten & Bedarfsermittlung", b: [
          { table: [["Primärbedarf", "Sekundärbedarf", "Tertiärbedarf"],
            ["verkaufsfähige **Endprodukte**, Baugruppen, Ersatzteile", "Rohstoffe, Teile, Baugruppen **für die Herstellung** – abgeleitet", "Hilfs-/Betriebsstoffe, Verschleißwerkzeuge – meist **nicht im Endprodukt**"]] },
          { f: R`\text{Nettobedarf} = \text{Bruttobedarf} - \text{Lagerbestand} - \text{Unterwegsbestand} + \text{reservierter Bestand}` },
          { table: [["deterministisch / programmgebunden", "stochastisch / verbrauchsorientiert"],
            ["genau aus dem **Produktionsprogramm** berechnet – „ich weiß genau, was ich brauche“", "aus **Vergangenheitsverbräuchen** prognostiziert (Mittelwert, Streuung)"]] }
        ] },
        { h: "Statistik: Mittelwert, Varianz, Standardabweichung", b: [
          { f: R`\mu = \frac{\sum x_i}{n} \qquad \sigma^2_{\text{empirisch}} = \frac{\sum (x_i-\mu)^2}{n} \qquad s^2_{\text{Stichprobe}} = \frac{\sum (x_i-\bar{x})^2}{n-1}`, fx: "Beispiel Nachfrage: µ = 500, σ² = 6.687, σ ≈ 82 Stück pro Woche" },
          { merke: "Mit **n** unterschätzt eine Stichprobe die wahre Varianz (Faktor (n−1)/n) – deshalb teilt man bei Stichproben durch **n − 1**. Beispiel 2, 4, 6 Jahre: wahre Varianz 2,67 – mit n im Mittel nur 1,33." }
        ] },
        { h: "ABC- und XYZ-Analyse", b: [
          { table: [["", "Kriterium", "Klassen"],
            ["ABC", "**wertmäßiger Verbrauch** (sortieren, **kumulieren**)", "A hoch → hoher Planungsaufwand · B mittel · C niedrig → verbrauchsorientiert"],
            ["XYZ", "**Regelmäßigkeit** des Verbrauchs", "X 0–0,25 konstant · Y > 0,25–0,5 schwankend · Z > 0,5 sporadisch"]] },
          { f: R`VK = \frac{\sigma}{\mu}`, fx: "Variationskoeffizient = Schwankung relativ zum Durchschnittsverbrauch" },
          { p: "Kombinierte ABC-XYZ-Matrix → Beschaffungsform: **JIT** bei AX/AY/BX, **Kanban**, **Konsignationslager/VMI** in der Mitte, **Einzelbeschaffung** bei CZ." },
          { merke: "Deine Notiz: ABC-Analyse **verstehen, aber keine Klausurfrage**." }
        ] },
        { h: "Materialportfolio", b: [
          { p: "Achsen: **Ergebnisbeitrag** (hoch/niedrig) × **Versorgungsrisiko** (niedrig/hoch)" },
          { table: [["", "Versorgungsrisiko niedrig", "Versorgungsrisiko hoch"],
            ["Ergebnisbeitrag hoch", "**Hebelprodukte** (Standard-Rohstoffe, Verpackung): Marktmacht nutzen, Substitution, Mix Rahmenvertrag/Spotmarkt", "**Strategische Produkte** (Schlüsselkomponenten, Halbleiter): Marktforschung, **langfristige Beziehungen**, Make-or-buy"],
            ["Ergebnisbeitrag niedrig", "**Unkritische Güter** (C-Teile, Büromaterial): standardisieren, effizient abwickeln, Auftragsmengen optimieren", "**Engpassgüter** (Spezialchemikalien, seltene Ersatzteile): **Mengen sichern**, Kontrolle, Sicherheitsbestand, Ausweichpläne"]] }
        ] },
        { h: "Beschaffungsstrategien", b: [
          { table: [["", "Versorgungsrisiko niedrig", "Versorgungsrisiko hoch"],
            ["Ergebnisbeitrag hoch", "**Global Sourcing** – Kostenunterschiede, Kapazitäten, Local-content", "**Modular Sourcing** – Module statt Einzelteile"],
            ["Ergebnisbeitrag niedrig", "**Single/Sole Sourcing** – Rabatte, weniger Transport-/Transaktionskosten (Sole = erzwungen)", "**Dual/Multiple Sourcing** – Stillstand vermeiden, Wettbewerb, neue Entwicklungen"]] },
          { p: "Nach **räumlicher Distanz**: Global Sourcing/Nearshoring bei hohem Beitrag und geringem Risiko · **Local Sourcing** bei niedrig/niedrig (kurze Wege, wenig Admin) und bei hohem Risiko (kurze Reaktionszeiten) · **JIT** bei hoch/hoch braucht Nähe." }
        ] },
        { h: "Modular Sourcing", b: [
          { flow: ["Teil", "Komponente", "Baugruppe", "Modul", "Endprodukt"] },
          { merke: "Individualisierung → Variantenexplosion (Audi A1: **2,8 Trillionen** Kombinationen). **Modullieferanten** bündeln Unterlieferanten und liefern ganze Module (z. B. Außenspiegel) → weniger Komplexität, aber Abhängigkeit." }
        ] },
        { h: "Formen der Güteranlieferung", b: [
          { p: "Entscheidend: **Güterstruktur** (Programm, Gestaltung, Fertigungstiefe) · **Lieferantenstruktur** (Anzahl, Standorte, Wege) · **Produktionsanbindung** (Übergabepunkte, Lagerkapazität, Zeitrestriktionen)." },
          { table: [["", "Einzelbeschaffung", "Vorratsbeschaffung", "Just-in-Time"],
            ["Idee", "im Bedarfsfall, auftragsbezogen", "Bestand als Sicherheit", "nachfragegenau, bestandslos"],
            ["+", "keine Lager- und Kapitalbindungskosten", "hohe Verfügbarkeit, Mengenrabatte, unabhängig von Engpässen", "kaum Bestand, kurze Durchlaufzeiten"],
            ["−", "ungünstige Konditionen", "Fläche, **Kapitalbindung**, Verderb, Obsoleszenz", "Abhängigkeit, Störanfälligkeit"]] },
          { table: [["", "Vorratsbeschaffung", "JIT-Beschaffung"],
            ["Bestellmengen", "hoch, wenige Anlieferungen", "klein, häufig"],
            ["Beziehung", "lose, kurzfristig", "technische/logistische Kooperation"],
            ["Bewertung", "eher preisorientiert", "qualitätsorientiert"],
            ["Qualitätskontrolle", "beim Empfänger", "beim Lieferanten"],
            ["Belegwesen", "Bestell- und Rechnungsformulare", "IT-Anbindung zwingend"]] }
        ] },
        { h: "Konsignationslager, JIT & JIS", b: [
          { ul: ["**Konsignationslager:** Lager des Lieferanten beim Abnehmer, Lieferant bleibt **Eigentümer**, **Fakturierung erst bei Entnahme** → Abnehmer ohne Kapitalbindung, Lieferant mit freien Flächen", "**JIT:** Direktabruf, Null-Fehler-Prinzip, Lieferant in Werksnähe, **langfristige Verträge**", "**JIS:** zusätzlich **sequenziert** (Einbaureihenfolge) statt artrein verpackt – bei hoher Variantenvielfalt am Band", "Anlieferkonzepte: **Direktverkehr** · über **Lieferantenpark/GVZ** oder Speditionslager · über **Gebietsspediteur**"] },
          { table: [["Ebene", "Bezeichnung", "Intervall", "Horizont", "erlaubtes Delta"],
            ["Absatz-/Produktionsplanung", "Rahmenvereinbarung", "6 Monate", "12 Monate", "30 %"],
            ["Produktionsprogramm", "Rahmenauftrag", "monatlich", "3 Monate", "10 %"],
            ["Materialbedarf", "Lieferabruf", "wöchentlich", "1 Monat", "2 %"],
            ["Fertigungssteuerung", "Feinabruf", "täglich", "10 Arbeitstage", "**0 % = Frozen Zone**"]] }
        ] },
        { h: "Lieferantensuche & Nutzwertanalyse", b: [
          { table: [["Quellen", "Kriterien"],
            ["Lieferantenportale, Fachmessen, Netzwerk, Ausschreibungen, IHK, Marktforschungsberichte, Pressemitteilungen", "Preis, Leistungsfähigkeit, Technologie, Zertifizierungen, Kapazität, Lieferfähigkeit, Lage, **finanzielle Stabilität**"]] },
          { f: R`\text{Nutzwert} = \sum (\text{Bewertung} \times \text{Gewichtung})` },
          { merke: ["Nutzwertanalyse = **transparente Strukturierung subjektiver Urteile**, keine objektive Wahrheit („dreifach subjektiv“). Kontrolle: Kriterien und Gewichte vorher festlegen, mehrere Bewerter, **Sensitivitätsanalyse**.", "Nicht geeignet bei Scheingenauigkeit, Verhandlungsentscheidungen und nicht messbaren Kriterien. Rechenbeispiel laut Notiz **nicht klausurrelevant**."] }
        ] },
        { h: "Bestände: Bedeutung, ROI & Kennzahlen", b: [
          { p: "Bestände gibt es auf jeder Stufe (Beschaffungs-, Produktions-, Distributionslager, Handel, Logistiker, Haushalte). Sie binden **Kapital** → senken den **ROI = Umsatzrendite × Kapitalumschlag**." },
          { p: "Bestandsverlauf (Sägezahn): **Bestellpunkt/Meldebestand** = Nachfrage während der **Wiederbeschaffungszeit** + **Sicherheitsbestand**; jede Lieferung bringt die **Bestellmenge**." },
          { f: R`LRW = \frac{\text{Bestand}}{\varnothing\text{-Verbrauch}} \qquad LU = \frac{\text{Jahresverbrauch}}{\varnothing\text{-Bestand}} \qquad LRW = \frac{365}{LU}` },
          { table: [["Bestände ermöglichen …", "Bestände verdecken …"],
            ["Überbrückung von Störungen, reibungslose Produktion, prompte Lieferung, konstante Auslastung, wirtschaftliche Fertigung", "störanfällige Prozesse, unabgestimmte Kapazitäten, mangelnde Flexibilität, Ausschuss, mangelnde Liefertreue"]] }
        ] },
        { h: "Motive der Lagerhaltung & Kosten", b: [
          { chips: ["Akquisition (Kaufimpulse)", "Spekulation (Preise)", "Veredelung (Reifung)", "Assortierung (Sortiment)", "Ausgleich (Kapazitäten)", "Sicherung (Prognosefehler)"] },
          { table: [["Variable Bestellkosten", "Fixe Bestellkosten", "Lagerhaltungskosten", "Fehlmengenkosten"],
            ["mengenproportional, inkl. Einstandspreis", "je Bestellung (Verwaltung, Handling)", "Infrastruktur, Kapitalbindung, Bestandsrisiko", "Leerkosten, Eilfracht, Strafen, entgangener Umsatz, Goodwill"]] },
          { f: R`\text{Lagerhaltungskostensatz} = \text{Lagerkostensatz} + \text{kalk. Zinssatz} + \text{kalk. Wagnissatz}` },
          { p: "Senken durch: Betriebskosten sparen (Anbieterwechsel, Leasing, Outsourcing) · **Bestand reduzieren** · **Umschlag erhöhen**." }
        ] },
        { h: "Fehlmengenkosten", b: [
          { table: [["Kundenreaktion bei Stockout", "Fehlmengenkosten"],
            ["wartet – reguläre Nachlieferung (Back Sales)", "keine"],
            ["wartet – Eilbestellung", "zusätzlicher Aufwand"],
            ["kauft Substitut", "Differenz der Deckungsbeiträge"],
            ["kauft danach wie bisher (Lost Sale)", "entgangener DB in t1"],
            ["kauft danach weniger", "DB in t1 + Summe der Folgeperioden"],
            ["kauft gar nicht mehr", "entgangener DB ab t1"]] }
        ] },
        { h: "Sicherheitsbestand, z-Wert & Lieferservicegrad", b: [
          { f: R`z = \frac{x-\mu}{\sigma} \qquad \text{Sicherheitsbestand} = z \cdot \sigma`, fx: "z misst den Abstand vom Mittelwert in Standardabweichungen; die Fläche Φ links von z ist die Wahrscheinlichkeit." },
          { table: [["Statistische Sicherheit Φ", "z", "SB bei σ = 82"],
            ["50 %", "0", "0"], ["84,13 %", "1,00", "82"], ["90 %", "1,28", "105"], ["95 %", "1,65", "135"], ["97,7 %", "2,00", "164"], ["99,95 %", "3,29", "269"]] },
          { merke: ["z = −2 → nur **2,28 %** aller Ereignisse liegen links davon. Deine Notiz: **Folie 78 ganz wichtig** – vom %-Wert zum z-Wert und zurück.", "Kapitalbindungskosten steigen gegen 100 % **asymptotisch gegen unendlich**, die Nachfrage reagiert nur im relevanten Bereich → **optimaler Lieferservicegrad < 100 %**."] }
        ] },
        { h: "Bestellpolitiken", b: [
          { table: [["", "q fix", "S variabel (auffüllen)"],
            ["**t** fester Rhythmus", "**tq:** wenig Aufwand, keine Dauerkontrolle – reagiert schlecht auf Schwankungen", "**tS:** effizient, Bündelung, Rabatte – Fehlmengen bei Spitzen, Totbestände"],
            ["**s** Meldebestand", "**sq:** reagiert auf Verbrauch, optimale Menge – hoher Aufwand, unregelmäßige Termine", "**sS:** flexibel bei Schwankungen – laufende Überwachung, schwierige Transportplanung"]] }
        ] },
        { h: "Andler & News-Vendor", b: [
          { f: R`K = B \cdot p + K_f \cdot \frac{B}{q} + \frac{q}{2} \cdot p \cdot i \quad\Rightarrow\quad q^* = \sqrt{\frac{2 \cdot B \cdot K_f}{p \cdot i}}`, fx: "Im Optimum sind Bestell- und Lagerhaltungskosten gleich hoch. Annahmen: konstanter Bedarf, feste Preise/Kostensätze, keine Fehlmengen, sofortige Lieferung." },
          { f: R`c_o = k - r \qquad c_u = p - k \qquad \text{kritisches Verhältnis} = \frac{c_u}{c_u + c_o} \qquad S^* = \mu + z \cdot \sigma`, fx: "Beispiel Zeitung: k = 1 €, p = 3 €, r = 0,50 € → c_o = 0,50, c_u = 2,00 → 2 / 2,5 = 0,8" }
        ] },
        { h: "Verbrauchsfolgebewertung", b: [
          { table: [["Verfahren", "HGB", "IFRS", "Kurz"],
            ["FIFO", "erlaubt", "erlaubt", "steigende Preise → Gewinn höher"],
            ["LIFO", "erlaubt", "**nicht erlaubt**", "steigende Preise → Gewinn und Steuer niedriger"],
            ["Durchschnitt", "erlaubt", "erlaubt", "realistischer Mischpreis, sehr verbreitet"],
            ["FEFO", "nicht zulässig", "nicht zulässig", "eher Lagerprinzip (Ablaufdatum)"],
            ["LOFO / HIFO", "nicht zulässig", "nicht zulässig", "zu stark ergebnissteuernd"]] }
        ] },
        { h: "Lagerplanung, Lagerungsarten & Lagerplatzvergabe", b: [
          { flow: ["Layout/Zonierung", "Sortimentsreinheit", "Lagerplatzvergabe", "Prioritäten (Wege, ABC, Querverteilung)"] },
          { table: [["Lagerungsart", "+", "−"],
            ["Bodenlager (Block/Reihe)", "geringe Investition, flexibel", "Flächenbedarf, wenig Höhe, begrenzt stapelbar"],
            ["Regallager", "hohe Raumnutzung, direkter Zugriff", "hohe Investition, Fördertechnik nötig"],
            ["Speziallager (Silo, Tank, Hänge-, Explosivstofflager)", "passt zu besonderen Gütern", "teuer, technisch und rechtlich anspruchsvoll"]] },
          { p: "Lagertechnik: **statisch** (Palettenregal, Kanallager, Lagerlift) vs. **dynamisch** (Durchlauf-, Schiebe-, Umlaufregal). **AutoStore:** Behälter im Raster ohne Gänge, Roboter von oben – „Ware zur Person“." },
          { table: [["", "Festplatz", "chaotisch"],
            ["+", "übersichtlich, wenig Suchaufwand", "sehr hohe Raumnutzung, flexibel"],
            ["−", "schlechte Raumnutzung, unflexibel", "nur mit **LVS/MDE**, hohe Datenpflege"],
            ["passt für", "kleine Läger, wenige Artikel (Ersatzteile)", "große Läger, viele Artikel (E-Commerce)"]] }
        ] }
      ]
    },

    // =================================================================
    // 🚆 VBL 1 – Bahnverkehr
    // =================================================================
    {
      id: "vbl1-bahn", fid: "vbl1", part: "Teil C · Dräger, Hanisch, Hackelberg", title: "Bahnverkehr",
      lessons: ["vbl1/c-bahn"],
      s: [
        { h: "Geschichte & Liberalisierung", b: [
          { flow: ["Antike–19. Jh.: Lasten führen", "ab 1830: Industrie skalieren (Liverpool–Manchester)", "seit 1991: Märkte öffnen"] },
          { ul: ["**EU-RL 91/440:** Trennung von **Netz und Betrieb**, unternehmerische Eigenständigkeit", "Vier **Eisenbahnpakete** öffnen die Märkte bis 2016", "**Bahnreform 1994:** DB AG statt Staatsbahn (vorher Monopol, > 60 Mrd. DM Schulden, Personalkosten > Umsatz)", "Heute **> 400 NE-Bahnen**, rund 237 EVU im Güterverkehr"] }
        ] },
        { h: "Leistungsprofil & Wettbewerb", b: [
          { table: [["", "Lkw", "Bahn", "Binnenschiff"],
            ["max. Sendung", "24 t", "**4.000 t**", "16.000 t"],
            ["Ø Geschwindigkeit", "50 km/h", "20–30 km/h", "6 km/h"],
            ["Netz in DE", "ca. 230.000 km", "ca. 38.600 km", "ca. 7.300 km"],
            ["Netzzugänge", "überall", "ca. 2.300 Gleisanschlüsse", "Binnenhäfen"]] },
          { chips: ["Massenleistung", "Sicherheit", "Pünktlichkeit", "Umwelt", "witterungsunabhängig"] },
          { p: "Typische Bahngüter: **Kohle, Erz, Kies/Sand, Salz, Holz, Stahl, Mineralöl, Autos, Windräder**. Modal Split Schiene ≈ **19–20 %** der tkm." },
          { table: [["intermodaler Wettbewerb", "intramodaler Wettbewerb"],
            ["zwischen Verkehrsträgern – **Lkw** größter Konkurrent, Binnenschiff (Rhein), Short Sea", "innerhalb der Schiene – DB Cargo vs. ausländische Staatsbahnen, Privatbahnen; nimmt stetig zu"]] }
        ] },
        { h: "Internationaler Schienengüterverkehr", b: [
          { table: [["Technik", "Grenzprozesse", "Zugang", "Politik"],
            ["5 Stromsysteme, 7 Signalsysteme, 3 Spurweiten, Lichtraumprofile, Rechts-/Linksverkehr", "Lok-/Lokführerwechsel, Bremsprobe, Wagenuntersuchung, Dokumente, Zoll/Gefahrgut", "Lizenz, Fahrzeugzulassung, Trassenzuweisung, Trassenentgelt", "Mineralölsteuer-Befreiung von Schiff und Flug, ungleiche externe Kosten"]] }
        ] },
        { h: "Trassen & Zuglängen", b: [
          { merke: "**Trasse** = Möglichkeit, einen **bestimmten Streckenabschnitt** zwischen zwei Orten in einem **bestimmten Zeitraum** mit einem Zug bestimmter Bauart zu nutzen. (Deine Notiz: **wichtig**)" },
          { ul: ["Deutschland: Gesamtzug max. **740 m**, Wagenzug max. **700 m**; Ausnahme Padborg–Maschen **835 m**", "Begrenzt durch Bahnhofs-/Überholgleise und Sicherungstechnik (EBO § 34)", "**Lange Güterzüge**: bis **30 %** weniger Produktionskosten, mehr Streckenkapazität ohne Neubau", "Zugsicherung: Fahrt im **Raumabstand** (Blöcke), Zugbeeinflussung ab 80 km/h Pflicht – **PZB** bis 160 km/h, **LZB** ab 160 km/h, **ETCS**"] }
        ] },
        { h: "Zugang zum Netz: Gleisanschluss", b: [
          { chips: ["private Gleisanschlüsse", "Ladestraßen/Freiladegleise", "Railports", "Seehäfen", "Binnenhäfen", "GVZ", "Umschlagbahnhöfe", "Automotive Compounds"] },
          { table: [["Vertrag", "mit", "Zweck"],
            ["Infrastrukturanschlussvertrag", "Netzbetreiber (EIU, z. B. DB InfraGO)", "Anschluss an das Netz"],
            ["Betriebsgenehmigung", "EBA bzw. Landesbehörde", "Inbetriebnahme"],
            ["Bedienungsvertrag", "EVU (z. B. DB Cargo)", "Beförderung der Güter"]] },
          { p: "**Hauptanschließer** = direkt am Netz eines EIU · **Nebenanschließer** = an einer anderen Anlage (Hauptanschließer, Industriestammgleis). Zahl der Gleisanschlüsse: 1994 ≈ 11.700 → 2021 ≈ 2.300." }
        ] },
        { h: "Güterwagen: Lastgrenze, Lademaß & Innovation", b: [
          { ul: ["**Lastgrenze** = Höchstlademasse je **Streckenklasse**; maßgeblich ist die **geringste** Streckenklasse auf dem Weg; „S“ = beladen bis 100 km/h (Notiz: **wichtig**)", "**Lademaß** = Umriss, den die Ladung nicht überragen darf; das **kleinste** Lademaß auf dem Weg zählt; Überschreitung = **LÜ**", "Wagennummer (12 Ziffern): Interoperabilität, Land/Halter (80 = DB), Gattung, laufende Nummer, Kontrollziffer", "**DAK:** automatische Kupplung mit Strom/Daten → längere Züge, automatische Bremsprobe (≈ 17.500 € je Wagen)", "**Containerisierung:** 80–90 % der Transporte containerisierbar · Wagon Intelligence, Wayside Monitoring"] }
        ] },
        { h: "Privatgüterwagen & AVV", b: [
          { table: [["Beziehung", "Vertrag"],
            ["Kunde ↔ EVU", "Fracht-/Beförderungsvertrag"],
            ["EVU ↔ Halter", "**AVV**"],
            ["Halter ↔ Werkstatt", "Service-/Instandhaltungsvertrag (ECM-Nachweis bei der ERA)"]] },
          { merke: "**AVV = Allgemeiner Vertrag für die Verwendung von Güterwagen** – multilateral auf Basis **COTIF 1999 / CUV**, jeder Halter mit jeder Bahn. Regelt Haftung, Schadensabwicklung, Wagenanschriften, Zugriffsrechte, Leerwagen, Instandhaltung, Wagenuntersuchungen. Hat **2006 das RIV abgelöst**. (Deine Notiz: **sehr wichtig**)" }
        ] },
        { h: "Produktionssysteme", b: [
          { table: [["Ganzzug", "Einzelwagen", "Kombinierter Verkehr"],
            ["**Zug = Sendung**, direkt ohne Zwischenbehandlung; Massengüter bis ca. 6.000 t", "Wagen werden über **Knoten- und Rangierbahnhöfe gebündelt**; flexibel für kleine Mengen, aber teuer", "Straße sammelt und verteilt, **Schiene** im Hauptlauf, Umschlag der Ladeeinheiten im Terminal"]] },
          { flow: ["Gleisanschluss", "Satellit/Knotenbahnhof", "Rangierbahnhof", "Fernzug", "Rangierbahnhof", "Empfänger"] },
          { flow: ["Einfahrgruppe (entkuppeln)", "Ablaufberg (lenken)", "Richtungsgruppe (bremsen, sammeln)", "Ausfahrgruppe (kuppeln, Bremsprobe)"] },
          { p: "Rangierbahnhof **Mannheim**: zweitgrößter von DB Cargo, ca. 4.000 Wagen täglich." }
        ] },
        { h: "Recht & Haftung", b: [
          { table: [["", "national (HGB + ALB)", "international (COTIF/CIM)"],
            ["Grundlage", "HGB-Frachtrecht, ALB des EVU, AEG, EBO", "ER CIM, CIM-Frachtbrief, RID (Gefahrgut)"],
            ["Güterschaden", "**8,33 SZR/kg**; je Fall max. 1 Mio. € oder 2 SZR/kg", "Obhutshaftung bis **17 SZR/kg**"],
            ["Lieferfrist", "max. **3-fache Fracht**", "max. **4-fache Fracht**"],
            ["Sonstiges", "Verlustvermutung 30 Tage nach Lieferfrist", "Verjährung 1 Jahr; Richtung Osten SMGS"]] },
          { ul: ["ALB: Transportauftrag mit Angaben nach **§ 408 HGB**; gilt als angenommen ohne Widerspruch", "Wagen bestellen bis **10 Uhr am Werktag vor dem Bedarfstag**", "**§ 412 HGB:** Absender lädt beförderungssicher, Frachtführer sorgt für betriebssichere Verladung", "Wagen gereinigt und fristgerecht zurückgeben; Gefahrgut nach **§ 410 HGB** melden"] }
        ] },
        { h: "Kooperationen, Verbände & Umwelt", b: [
          { p: "Kooperation in Produktion, Personal, Vertrieb, Equipment (Wagen-/Lokpools), Logistik, Beschaffung und F&E → Kosten und Risiken teilen, Marktstellung stärken." },
          { chips: ["UIC (1922, Paris)", "CER", "OTIF (COTIF)", "CIT", "UIRR (KV)", "VDV", "EIM"] },
          { merke: "**Externe Kosten** = vom Verkehr verursacht, von der **Allgemeinheit getragen** (DE ≈ 149 Mrd. €, v. a. Unfälle). Verringern durch **Internalisierung**: Maut, lärmabhängige Trassenpreise, CO₂-Abgaben. Emissionen vergleichen mit **EcoTransIT**." }
        ] }
      ]
    },

    // =================================================================
    // 🚛🚆 VBL 1 – Kombinierter Verkehr (vorläufig aus den Notizen)
    // =================================================================
    {
      id: "vbl1-kv", fid: "vbl1", part: "Teil C · vorläufig aus deinen Notizen", title: "Kombinierter Verkehr",
      lessons: ["vbl1/c-kv"],
      s: [
        { h: "Was ist Kombinierter Verkehr?", b: [
          { merke: "**Längerer Teil** der Strecke auf **Bahn oder Binnenschiff**, nur der **kürzere** Vor- und Nachlauf auf dem **Lkw**. Umgeschlagen wird nur die **Ladeeinheit** – das Gut bleibt darin (**ungebrochen**)." },
          { flow: ["Vorlauf Lkw", "Terminal (Umschlag)", "Hauptlauf Bahn/Binnenschiff", "Terminal (Umschlag)", "Nachlauf Lkw"] }
        ] },
        { h: "Begleitet vs. unbegleitet", b: [
          { table: [["unbegleiteter KV", "begleiteter KV (Rollende Landstraße)"],
            ["nur die Ladeeinheit fährt mit (Container, Wechselbehälter, Sattelauflieger) – der Normalfall", "der ganze Lkw fährt auf dem Zug, der Fahrer reist mit"]] }
        ] },
        { h: "Wagen & Akteure", b: [
          { table: [["Wagen", "transportiert"],
            ["**Taschenwagen**", "Sattelauflieger"],
            ["**Containertragwagen**", "Container und Wechselbehälter"]] },
          { p: "Der **KV-Operateur** ist „**wie ein Spediteur**“: organisiert die Züge und verkauft Stellplätze an Speditionen." }
        ] },
        { h: "Vor- und Nachteile", b: [
          { table: [["Vorteile", "Nachteile"],
            ["Lkw darf im Vor-/Nachlauf **44 t statt 40 t** → 4 t mehr Ladung", "Zug **wenig flexibel** – feste Abfahrten, **Cut-off-Zeiten**"],
            ["Zug **schneller als Lkw** auf langen Strecken – **keine Lenk-/Ruhezeiten**", "zusätzlicher **Umschlag** im Terminal"],
            ["umweltfreundlicher, weniger Fahrer nötig", "Terminal muss erreichbar sein"]] },
          { merke: "Faustregel aus der Vorlesung: **ab rund 300 km** lohnt es sich, über KV nachzudenken." }
        ] },
        { h: "Hinweise aus deinen Notizen", b: [
          { ul: ["Seit der **Liberalisierung (1994)** steigt die Güterverkehrsleistung; der **Online-Handel** wächst", "**Folie 36–38**: „muss gegeben sein“ – mit dem Foliensatz abgleichen", "**Folie 57**: Ablauf", "⚠️ Vorläufig: Sobald du mir die KV-Folien schickst, ergänze ich diesen Lernzettel und die Lernfragen."] }
        ] }
      ]
    },

    // =================================================================
    // 📦 VBL 1 – KEP-Dienste (vorläufig aus den Notizen)
    // =================================================================
    {
      id: "vbl1-kep", fid: "vbl1", part: "Teil C · vorläufig aus deinen Notizen", title: "KEP-Dienste",
      lessons: ["vbl1/c-kep"],
      s: [
        { h: "Kurier, Express, Paket", b: [
          { table: [["Segment", "Prinzip", "typisch"],
            ["**Kurier**", "persönlich begleitet, **direkt ohne Umschlag**", "eilige Dokumente, Ersatzteile – teuer"],
            ["**Express**", "**garantierte Zustellzeit**, über Netze mit Umschlag", "„bis 10 Uhr am nächsten Tag“"],
            ["**Paket**", "**standardisiert** (meist bis ca. 31,5 kg), automatisierte Hub-Netze", "24–48 h ohne Garantie"]] },
          { p: "Abgrenzung: **Stückgut = Paletten** (LTL/FTL-Netze), **KEP = Pakete** – beide flächendeckend mit **mehreren Hubs**." }
        ] },
        { h: "Markt in Zahlen", b: [
          { merke: ["KEP ≈ **10 % des Logistikmarkts**, wächst ständig – seit 2015 rund **+50 %**. Quelle laut Prof wichtig: **BIEK-KEP-Studie**.", "Rund **4,4 Mrd. Sendungen** und **≈ 30 Mrd. €** – fast **komplett outgesourced**."] },
          { p: "**B2C nimmt zu, B2B nimmt ab** – weil der Online-Handel bei Privatkunden wächst, während B2B-Sendungen stagnieren." }
        ] },
        { h: "Player & Preise", b: [
          { chips: ["DHL (Deutsche Post)", "Hermes", "DPD", "GLS", "UPS", "FedEx", "Amazon Logistics", "neu: Flink, Lieferando"] },
          { ul: ["Die **Post** war ein **Staatsmonopol** – heute weitgehend privatisiert", "Händler, die selbst ausliefern (z. B. Gorillas), = **Händler-Logistik im Selbsteintritt – kein Kurier**; Dachser = **LDL**", "**Amazon** ist der größte Pakettransporteur, aber **kein klassischer Paketdienstleister** (v. a. eigene Sendungen)", "Preise ändern sich ständig: Wettbewerb und neue Player, Kosten (Personal, Diesel, Maut), Saisonspitzen, Marktmacht großer Versender"] }
        ] },
        { h: "Transportkette & Netze", b: [
          { flow: ["Zentrallager des Händlers", "Abholung", "Paketzentrum/Depot", "Hub (nachts)", "Ziel-Depot", "Zustelltour", "Kunde"] },
          { merke: "Ein **zentrales Bestandslager** (z. B. in **Bad Hersfeld**) senkt Lagerkosten und erlaubt eine **spätere Cut-off-Zeit** – besser als z. B. aus Freiburg nach Hamburg." },
          { table: [["Direktverkehrsnetz", "Hub-and-Spoke"],
            ["jedes Depot fährt jedes andere direkt an – schnell, wenig Umschlag, braucht viel Menge", "alle über zentrale Hubs – gut ausgelastet auch bei schwachen Relationen, aber Zusatzumschlag"]] }
        ] },
        { h: "Letzte Meile & Citylogistik", b: [
          { ul: ["Letzte Meile = **teuerster Abschnitt**: hohe Stoppzahl, wenig Sendungen je Stopp", "**Wenig Begeisterung** der Bevölkerung (Verkehr, Halten in zweiter Reihe)", "**Citylogistik** hat die meisten neuen Projekte (Folie 63)", "**Mikrohubs** mitten in der Stadt: Umschlag auf **kleinere Fahrzeuge** (Lastenrad, E-Transporter)"], cols: true },
          { ul: ["Notiz: **Folie 21** – auf die Überschrift achten, könnte ein Hauptthema sein", "**Folie 41**: Herausforderungen · Folie 64 laut Notiz nicht wichtig", "⚠️ Vorläufig: Schick mir die KEP-Folien, dann ergänze ich alles mit den echten Inhalten."] }
        ] }
      ]
    }
  ]);
})();
