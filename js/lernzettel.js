/*
 * 📄 Handgeschriebene Lernzettel für Blöcke ohne eigene Lektion.
 * (Zu jeder Lektion entsteht der Lernzettel automatisch in app.js – mit den Schaubildern der Lektion.)
 *
 * Aufbau: kurz = „Das Wichtigste in 30 Sekunden“ · s = nummerierte Abschnitte mit Bausteinen:
 *   p · ul (cols) · ol · table (1. Zeile = Kopf) · merke · chips · f (Formel, fx = Erklärung)
 *   fig (Schaubild aus js/schaubilder.js) + t (Titel) + read („So liest du das“)
 *   ls (Baustein im Lektions-Stil: cards, flow, bal, pyr, matrix, tree, stairs)
 */
(function () {
  const R = String.raw, SB = window.SB;
  const S = SB.S, B = SB.B, K = SB.K, P = SB.P;
  window.LERNZETTEL = (window.LERNZETTEL || []).concat([
    // =================================================================
    // 📦 Logistik – Beschaffungslogistik (Prof. Schröder)
    // =================================================================
    {
      id: "logistik-schroeder-1", fid: "logistik", part: "Teil 1 · Prof. Dr. Michael Schröder", title: "Beschaffungslogistik",
      lessons: ["logistik/s-beschaffung"],
      kurz: [
        "Logistik überbrückt **Raum** (Transport), **Zeit** (Lagern) und ändert **Menge & Ordnung** (Umschlag).",
        "Der Einkauf ist ein **Hebel**: 3 % weniger Materialkosten bringen so viel Gewinn wie 30 % mehr Umsatz.",
        "Erst Güter **klassifizieren** (ABC/XYZ, Materialportfolio), dann die passende **Strategie** wählen (Single, Dual, Global, Modular).",
        "Anlieferung: **Einzel**, **Vorrat** oder **Just-in-Time/JIS** – Konsignationslager als Mittelweg.",
        "Bestände kosten Kapital: **Sicherheitsbestand = z · σ**, optimale Menge nach **Andler**, vier **Bestellpolitiken**."
      ],
      s: [
        { h: "Die drei Grundfunktionen der Logistik", b: [
          { p: "Logistiker sind **Orchestratoren von Material- und Warenströmen**. Jede logistische Leistung lässt sich auf drei Grundfunktionen zurückführen." },
          { fig: S.grundfunktionen(), t: "Was macht die Logistik?", read: "Jede Spalte zeigt ein Problem und die Lösung: Ware ist am falschen **Ort** → **Transport**. Ware wird erst **später** gebraucht → **Lagern**. Ware kommt in der falschen **Menge oder Sortierung** → **Umschlag** (bündeln, sortieren, kommissionieren). Unten steht jeweils, woher das Problem kommt." },
          { fig: SB.chain([{ t: "Teil 1", s: "Beschaffung", a: true }, { t: "Teil 2", s: "Produktion" }, { t: "Teil 3", s: "Distribution" }], { per: 3, label: "Aufbau der Vorlesung entlang des Güterflusses" }), t: "Aufbau der Vorlesung", read: "Die Vorlesung folgt dem **Güterfluss**: Erst kommt die Versorgung durch Lieferanten (dieser Lernzettel), dann der Materialfluss im Werk, dann die Belieferung der Kunden." }
        ] },
        { h: "Was wird beschafft – und wer macht was?", b: [
          { fig: S.objekte(), t: "Beschaffungsobjekte", read: "Beschaffung heißt **alles besorgen, was das Unternehmen braucht** – nicht nur Material. Der Einkauf kümmert sich vor allem um das **Material** (hervorgehoben); Personal, Kapital oder Informationen gehören aber genauso zur Beschaffung." },
          { ls: { t: "cards", items: [["💼", "Einkauf", "Markt erforschen, verhandeln, Verträge schließen, **Lieferanten bewerten**"], ["📝", "Disposition", "**Bedarf ermitteln**, Bestellmengen und Bestellpolitik festlegen, Bestände steuern"], ["📦", "Lagerhaltung", "Wareneingang prüfen, ein-/auslagern, **kommissionieren**, intern transportieren"]] } }
        ] },
        { h: "Entwicklung des Einkaufs", b: [
          { fig: S.einkauf(), t: "Vom Versorger zum Risikomanager", read: "Lies die Zeitleiste von links nach rechts: Je nach **Marktlage** änderte sich die Aufgabe – erst Knappheit (Hauptsache Ware), dann Preisbewusstsein, dann Auslagerung und Globalisierung. **Heute** stehen nach den Krisen **Resilienz und Nachhaltigkeit** im Mittelpunkt." }
        ] },
        { h: "Der Einkauf als Hebel", b: [
          { p: "Ausgangslage: **1 Mio. € Umsatz**, davon **50 % Materialkosten**, Gewinn 50.000 € (5 % Umsatzrendite). Ziel: **65.000 € Gewinn**." },
          { fig: S.hebel(), t: "Zwei Wege zu +15.000 € Gewinn", read: "Beide Balken bringen **denselben Gewinnzuwachs**. Der Vertrieb müsste aber **300.000 € mehr Umsatz** holen (+30 %), weil vom Umsatz nur 5 % als Gewinn übrig bleiben. Der Einkauf muss nur **15.000 € sparen** (−3 % Materialkosten) – jeder gesparte Euro landet **direkt im Gewinn**." },
          { merke: "**Hebelwirkung des Einkaufs:** Je höher der Materialkostenanteil, desto stärker wirkt jede Einsparung im Einkauf auf den Gewinn." }
        ] },
        { h: "Zielkonflikte (Trade-offs)", b: [
          { fig: S.tradeoffs(), t: "Man kann nicht alles gleichzeitig maximieren", read: "Jede Zeile ist ein **Zielkonflikt**: Verbessert man die linke Seite, leidet meist die rechte. Billig einkaufen kann Qualität kosten, wenig Bestand senkt die Versorgungssicherheit, schnell liefern (Luftfracht statt Schiff China → DE) kostet Geld und CO₂. **Achtung:** Laut Vorlesung können die Wirkungen je nach Fall auch anders ausfallen." }
        ] },
        { h: "Fundamental- und Instrumentalziele", b: [
          { fig: S.ziele(), t: "Wofür ist ein Ziel gut?", read: "**Oben** stehen Ziele, die man **um ihrer selbst willen** verfolgt. **Unten** stehen Ziele, die nur **Mittel zum Zweck** sind – die Pfeile zeigen, dass sie den oberen Zielen dienen. **Risikominimierung** liegt als Band unter allem: Sie macht alle Ziele robuster." },
          { merke: ["Test: „**Warum ist dieses Ziel wichtig?**“ – Gibt es eine Antwort, ist es ein **Instrumentalziel**.", "Beispiel Urlaub: „Viel Sonne“ ist nur Mittel – eigentlich geht es darum, **sich besser zu fühlen**."] }
        ] },
        { h: "Bedarfsarten", b: [
          { fig: S.bedarfsarten(), t: "Primär-, Sekundär-, Tertiärbedarf am Fahrrad", read: "Das **verkaufte Fahrrad** ist der **Primärbedarf**. Was man **zum Bauen** braucht (Rahmen, Räder, Lenker), ist **Sekundärbedarf** – er wird aus dem Primärbedarf abgeleitet. Gestrichelt: **Tertiärbedarf** wie Öl, Strom oder Bohrer – nötig für die Produktion, aber **nicht im Endprodukt**." }
        ] },
        { h: "Vom Brutto- zum Nettobedarf", b: [
          { fig: S.nettobedarf(), t: "Was muss ich wirklich bestellen?", read: "Start ist der **Bruttobedarf** (1.000 Stück). Davon ziehst du ab, was **schon im Lager** liegt und was **schon unterwegs** ist. Was im Lager schon **für andere Aufträge reserviert** ist, kommt wieder dazu. Übrig bleibt der **Nettobedarf** (600) – die Menge, die du tatsächlich beschaffen musst." },
          { f: R`\text{Nettobedarf} = \text{Bruttobedarf} - \text{Lagerbestand} - \text{Unterwegsbestand} + \text{reservierter Bestand}` }
        ] },
        { h: "Bedarfsermittlung: genau berechnen oder schätzen?", b: [
          { ls: { t: "bal", l: ["Deterministisch (programmgebunden)", ["Bedarf wird aus dem **Produktionsprogramm** und der **Stückliste** genau berechnet", "„Ich weiß genau, was ich brauche“", "lohnt sich für **wertvolle** Teile (A-Güter)"]], r: ["Stochastisch (verbrauchsorientiert)", ["Bedarf wird aus **vergangenen Verbräuchen** geschätzt", "Statistik: Mittelwert und Streuung", "für **günstige** Teile (B-/C-Güter), Puffer über Sicherheitsbestand"]], mid: "vs." } }
        ] },
        { h: "Statistik: Mittelwert und Streuung", b: [
          { fig: S.verteilung(), t: "Wochennachfrage: µ = 500, σ = 82", read: "Die Kurve zeigt, wie oft welche Wochennachfrage vorkommt. Die meisten Wochen liegen nahe am **Mittelwert µ = 500**. Die **Standardabweichung σ = 82** misst die Streuung: Im hervorgehobenen Bereich **zwischen 418 und 582** liegen rund **68 %** aller Wochen." },
          { f: R`\mu = \frac{\sum x_i}{n} \qquad \sigma^2_{\text{empirisch}} = \frac{\sum (x_i-\mu)^2}{n} \qquad s^2_{\text{Stichprobe}} = \frac{\sum (x_i-\bar{x})^2}{n-1} \qquad \sigma = \sqrt{\sigma^2}` },
          { merke: "Bei einer **Stichprobe** teilt man durch **n − 1**, sonst wird die wahre Varianz **unterschätzt** (Beispiel 2, 4, 6 Jahre: wahre Varianz 2,67 – mit n im Mittel nur 1,33)." }
        ] },
        { h: "ABC-Analyse", b: [
          { fig: S.abc(), t: "Wenige Artikel – viel Wert", read: "Sortiere die Artikel nach ihrem **Verbrauchswert** und trage die Anteile **kumuliert** ab. Die Kurve steigt am Anfang steil: Die ersten **20 % der Artikel (A)** machen schon **80 % des Werts** aus (gestrichelte Hilfslinie). Die vielen **C-Artikel** (50 %) bringen nur rund **5 %**. → A-Teile genau planen, C-Teile einfach und günstig abwickeln." },
          { merke: "Deine Notiz: ABC-Analyse **verstehen, aber keine Klausurfrage** – das Prinzip musst du trotzdem erklären können." }
        ] },
        { h: "XYZ-Analyse", b: [
          { fig: S.xyz(), t: "Wie regelmäßig ist der Verbrauch?", read: "Jedes Kästchen zeigt den Verbrauch über die Zeit. **X** verläuft fast gerade (gut planbar), **Y** schwankt, **Z** kommt nur sporadisch mit großen Ausschlägen. Gemessen wird das mit dem **Variationskoeffizienten**: Streuung im Verhältnis zum Durchschnitt." },
          { f: R`VK = \frac{\sigma}{\mu} \qquad X: 0 \text{ bis } 0{,}25 \qquad Y: > 0{,}25 \text{ bis } 0{,}5 \qquad Z: > 0{,}5` }
        ] },
        { h: "ABC-XYZ-Matrix: Welche Beschaffungsform passt?", b: [
          { fig: S.abcxyz(), t: "Wert × Regelmäßigkeit", read: "Kombiniere beide Analysen: **oben links** (wertvoll und regelmäßig) lohnt sich **Just-in-Time**. In der **Mitte** helfen **Konsignationslager (KL)** oder **VMI** (der Lieferant steuert den Bestand). **Rechts** bei günstigen, regelmäßigen Teilen passt **Kanban**, **unten rechts** (günstig und sporadisch) die **Einzelbeschaffung**." }
        ] },
        { h: "Materialportfolio", b: [
          { fig: S.materialportfolio(), t: "Ergebnisbeitrag × Versorgungsrisiko", read: "Jedes Material landet in einem Feld. **Nach oben** steigt der Beitrag zum Ergebnis, **nach rechts** das Risiko, nicht beliefert zu werden. In jedem Feld steht ein Beispiel und die **empfohlene Vorgehensweise** (→). Am wichtigsten sind die **strategischen Produkte** oben rechts: Sie verdienen langfristige Partnerschaften." }
        ] },
        { h: "Beschaffungsstrategien", b: [
          { fig: S.strategien(), t: "Wie viele Lieferanten – und welche?", read: "Gleiche Achsen wie beim Materialportfolio, aber hier steht die **Strategie** im Feld. Wenig Risiko und wenig Beitrag → **ein Lieferant** reicht (Rabatte, wenig Aufwand). Hohes Risiko → **mehrere Lieferanten** gegen Stillstand. Hoher Beitrag → weltweit nach Kostenvorteilen suchen oder ganze **Module** einkaufen." },
          { fig: S.distanz(), t: "Und wie weit weg?", read: "Dieselbe Logik für die **Entfernung**: Bei niedrigem Beitrag oder hohem Risiko lieber **in der Nähe** (Local Sourcing, kurze Reaktionszeiten). **JIT** oben rechts braucht immer Nähe. Weltweit (Global Sourcing) lohnt sich nur bei hohem Beitrag und geringem Risiko." }
        ] },
        { h: "Modular Sourcing", b: [
          { fig: S.modular(), t: "Weniger Schnittstellen durch Module", read: "**Links:** Der Hersteller (OEM) spricht mit **sieben Lieferanten** – sieben Schnittstellen. **Rechts:** Ein **Modullieferant** bündelt die Teile und liefert das **fertige Modul** – der OEM hat nur noch **eine** Schnittstelle." },
          { ls: { t: "pyr", levels: [["Endprodukt", "z. B. das Auto"], ["Modul", "kompletter Außenspiegel"], ["Baugruppe", "Spiegelgehäuse mit Motor"], ["Komponente", "Stellmotor"], ["Teil", "Schraube, Glas"]] } },
          { merke: "Treiber ist die **Variantenvielfalt**: Der Audi A1 hat rund **2,8 Trillionen** Kombinationen – ohne Module wäre das nicht beherrschbar." }
        ] },
        { h: "Formen der Güteranlieferung", b: [
          { p: "Welche Form passt, hängt von **Güterstruktur** (Produkt, Fertigungstiefe), **Lieferantenstruktur** (Anzahl, Standorte) und **Produktionsanbindung** (Übergabepunkte, Lagerplatz) ab." },
          { fig: S.anlieferung(), t: "So sieht der Bestand aus", read: "Jedes Kästchen zeigt den **Lagerbestand über die Zeit**. **Einzelbeschaffung:** Ware kommt nur bei Bedarf und ist gleich wieder weg – kaum Bestand, aber schlechte Konditionen. **Vorrat:** große Lieferungen, hoher Durchschnittsbestand (Sicherheit, Rabatte, aber Kapitalbindung). **JIT:** kleine Mengen sehr häufig – fast kein Bestand, dafür hohe Abhängigkeit." },
          { table: [["", "Vorratsbeschaffung", "Just-in-Time"], ["Mengen", "groß, selten", "klein, häufig"], ["Beziehung", "lose, eher preisorientiert", "enge Kooperation, qualitätsorientiert"], ["Kontrolle", "beim Empfänger", "beim Lieferanten"], ["Belege", "Bestellung, Rechnung", "IT-Anbindung zwingend"]] }
        ] },
        { h: "Konsignationslager", b: [
          { fig: S.konsignation(), t: "Lager des Lieferanten beim Kunden", read: "Folge den Pfeilen: Der **Lieferant** füllt ein Lager **beim Kunden**, die Ware bleibt aber **sein Eigentum**. Erst wenn der Kunde etwas **entnimmt**, wird es berechnet (gestrichelter Rückpfeil). Der Kunde hat die Ware sofort griffbereit, **ohne Kapital zu binden**; der Lieferant spart Platz im eigenen Lager." }
        ] },
        { h: "Just-in-Time und Just-in-Sequence", b: [
          { fig: S.jis(), t: "Artrein oder in Reihenfolge?", read: "Oben siehst du die **Reihenfolge der Autos am Band**. **Sequenziert (JIS):** Die Teile kommen **genau in dieser Reihenfolge** an (gestrichelte Linien) – ideal bei vielen Varianten. **Artrein (JIT):** Gleiche Teile kommen zusammen – am Band muss man erst suchen und sortieren." },
          { ul: ["**JIT:** nachfragegenau und bestandslos – Direktabruf, Null-Fehler-Prinzip, Lieferant oft in Werksnähe, **langfristige Verträge**", "**Anlieferkonzepte:** Direktverkehr · über einen **Lieferantenpark/GVZ** oder ein Speditionslager · über einen **Gebietsspediteur**"] }
        ] },
        { h: "Abrufsystem und Frozen Zone", b: [
          { fig: S.abruf(), t: "Je näher der Termin, desto fester die Menge", read: "Die Balken zeigen die **erlaubte Abweichung** der Bestellmenge. Ein Jahr vorher darf sich noch ±30 % ändern, beim **Feinabruf** (10 Arbeitstage vorher) **gar nichts mehr** – das ist die **Frozen Zone**. So kann der Lieferant sicher planen." }
        ] },
        { h: "Lieferantensuche und Nutzwertanalyse", b: [
          { ls: { t: "cards", items: [["🔎", "Quellen", "Lieferantenportale, **Fachmessen**, Netzwerk, **Ausschreibungen**, IHK, Marktberichte"], ["✅", "Kriterien", "Preis, Leistung, Technologie, **Zertifizierungen**, Kapazität, Lage, **finanzielle Stabilität**"]] } },
          { fig: SB.chain([{ t: "Kriterien", s: "festlegen" }, { t: "Gewichte", s: "verteilen" }, { t: "Bewerten", s: "je Kriterium" }, { t: "Summe", s: ["Σ Note ×", "Gewicht"], a: true }], { per: 4, h: 60, label: "Ablauf der Nutzwertanalyse" }), t: "So läuft eine Nutzwertanalyse", read: "Erst Kriterien und **Gewichte festlegen** (vorher, damit niemand trickst), dann jede Alternative bewerten, dann **Note × Gewicht** aufsummieren." },
          { fig: S.nutzwert(), t: "Ergebnis im Beispiel", read: "Lieferant **B** hat den höchsten Nutzwert. Aber: Das Ergebnis ist **dreifach subjektiv** (Kriterien, Gewichte, Noten). Prüfe mit einer **Sensitivitätsanalyse**, ob es bei kleinen Änderungen kippt. Das Rechenbeispiel ist laut deiner Notiz **nicht klausurrelevant** – die kritische Bewertung schon." }
        ] },
        { h: "Bestände und Unternehmenserfolg", b: [
          { fig: S.roi(), t: "Warum Bestände den ROI drücken", read: "Der **ROI** ist Umsatzrendite **mal** Kapitalumschlag. Bestände stecken im **Umlaufvermögen** (unten rechts) und erhöhen das **investierte Kapital** → der Kapitalumschlag sinkt → der **ROI sinkt**. Zusätzlich kosten sie Lagerkosten und senken so die Umsatzrendite." },
          { ls: { t: "bal", l: ["Bestände ermöglichen …", ["Überbrückung von Störungen", "reibungslose Produktion", "prompte Lieferung", "konstante Auslastung"]], r: ["Bestände verdecken …", ["störanfällige Prozesse", "unabgestimmte Kapazitäten", "Ausschuss", "mangelnde Liefertreue"]], mid: "aber" } }
        ] },
        { h: "Der Bestandsverlauf", b: [
          { fig: S.bestandsverlauf(), t: "Das wichtigste Bild im Bestandsmanagement", read: "Der Bestand sinkt durch Verbrauch (schräge Linie). Erreicht er den **Meldebestand s**, wird bestellt (Punkt). Bis die Ware kommt, vergeht die **Wiederbeschaffungszeit (WBZ)** – in der Zeit wird weiter verbraucht. Dann springt der Bestand um die **Bestellmenge q** nach oben. Der **Sicherheitsbestand** (unterer Bereich) wird im Normalfall nicht angerührt." },
          { f: R`\text{Lagerreichweite} = \frac{\text{Bestand}}{\varnothing\text{-Verbrauch}} \qquad \text{Lagerumschlag} = \frac{\text{Jahresverbrauch}}{\varnothing\text{-Bestand}} \qquad LRW = \frac{365}{LU}`, fx: "Hohe Reichweite = sicher, aber teuer · hoher Umschlag = wenig Kapitalbindung, aber viele Nachschübe" }
        ] },
        { h: "Motive der Lagerhaltung und Kosten", b: [
          { chips: ["Akquisition – Kaufimpulse", "Spekulation – Preise", "Veredelung – Reifung", "Assortierung – Sortiment", "Ausgleich – Kapazitäten", "Sicherung – Prognosefehler"] },
          { ls: { t: "cards", items: [["➕", "Variable Bestellkosten", "steigen mit der Menge – inkl. **Einstandspreis**"], ["🧾", "Fixe Bestellkosten", "**je Bestellung**, egal wie viel"], ["🏬", "Lagerhaltungskosten", "Lager, **gebundenes Kapital**, Risiko"], ["⚠️", "Fehlmengenkosten", "entgangener Umsatz, Strafen, **Goodwill**"]] } },
          { fig: S.lhk(), t: "Lagerhaltungskostensatz", read: "Der Satz setzt sich aus **drei Teilen** zusammen: den eigentlichen **Lagerkosten** (Fläche, Personal, Technik), dem **kalkulatorischen Zins** für das gebundene Kapital und dem **Wagnis** (Schwund, Verderb, Veralten). Die Zahlen sind ein Beispiel." }
        ] },
        { h: "Fehlmengenkosten", b: [
          { fig: S.fehlmengen(), t: "Was kostet ein leeres Regal?", read: "Lies von links nach rechts: Ist ein Artikel nicht da, **wartet** der Kunde (oben) oder **geht** (unten). Je weiter unten der Kasten, desto **teurer** wird es – im schlimmsten Fall ist der Kunde für immer weg und mit ihm alle künftigen Deckungsbeiträge." }
        ] },
        { h: "Sicherheitsbestand und z-Wert", b: [
          { fig: S.sicherheit(), t: "Statistische Sicherheit", read: "Die **Fläche links von z** (eingefärbt) ist die **Wahrscheinlichkeit Φ**, dass die Nachfrage gedeckt ist – bei **z = 1,65** sind das **95 %**. Rechts bleibt ein Risiko von 5 %. z zählt also, **wie viele Standardabweichungen** man über dem Mittelwert vorsorgt." },
          { f: R`z = \frac{x - \mu}{\sigma} \qquad \text{Sicherheitsbestand} = z \cdot \sigma` },
          { table: [["gewünschte Sicherheit Φ", "z", "SB bei σ = 82"], ["50 %", "0", "0"], ["84,13 %", "1,00", "82"], ["90 %", "1,28", "105"], ["95 %", "1,65", "135"], ["97,7 %", "2,00", "164"]] },
          { merke: "Deine Notiz: **Folie 78 ganz wichtig** – vom %-Wert zum z-Wert und zurück. z = −2 heißt: nur **2,28 %** liegen darunter." }
        ] },
        { h: "Optimaler Lieferservicegrad", b: [
          { fig: S.service(), t: "Warum 100 % keine gute Idee sind", read: "Die **Bestandskosten** (rote Linie) steigen gegen 100 % immer steiler – für die letzten Prozentpunkte braucht man riesige Sicherheitsbestände. Der **Umsatz** (farbige Linie) wächst vor allem im mittleren Bereich und flacht dann ab. Das **Optimum** liegt dort, wo der **Abstand** zwischen Umsatz und Kosten am größten ist (Doppelpfeil) – also **unter 100 %**." }
        ] },
        { h: "Die vier Bestellpolitiken", b: [
          { fig: S.politiken(), t: "Wann und wie viel bestellen?", read: "**t** = fester **Takt** (Striche unten), **s** = Bestellung beim **Meldebestand** (gestrichelte Linie). **q** = immer **gleiche Menge**, **S** = **auffüllen** bis zum Zielbestand. Oben bestellst du nach Kalender (wenig Aufwand, reagiert schlecht), unten nach tatsächlichem Verbrauch (flexibel, aber laufende Kontrolle)." }
        ] },
        { h: "Optimale Bestellmenge nach Andler", b: [
          { fig: S.andler(), t: "Wo die Gesamtkosten am kleinsten sind", read: "Große Bestellmengen bedeuten **wenige Bestellungen** (Bestellkosten sinken), aber **viel Lager** (Lagerhaltungskosten steigen). Die **Gesamtkosten** (Farbe) bilden ein „U“ – ihr Tiefpunkt ist die **optimale Bestellmenge q***. Dort sind beide Kostenarten **gleich hoch**." },
          { f: R`K = B \cdot p + K_f \cdot \frac{B}{q} + \frac{q}{2} \cdot p \cdot i \quad\Rightarrow\quad q^* = \sqrt{\frac{2 \cdot B \cdot K_f}{p \cdot i}}`, fx: "B = Jahresbedarf · K_f = fixe Kosten je Bestellung · p = Preis je Stück · i = Lagerhaltungskostensatz" },
          { ul: ["Annahmen: **konstanter, bekannter Bedarf**, feste Preise (keine Rabatte), konstante Kostensätze", "**keine Fehlmengen**, Lieferung sofort, keine Lager- oder Kapitalgrenzen, ein Artikel"], cols: true }
        ] },
        { h: "News-Vendor-Modell und kritisches Verhältnis", b: [
          { p: "Der **Zeitungsverkäufer** bestellt morgens einmal: Bleibt etwas übrig, verliert er **c_o** je Stück, fehlt etwas, entgeht ihm **c_u**." },
          { f: R`c_o = k - r = 1{,}00 - 0{,}50 = 0{,}50\,€ \qquad c_u = p - k = 3{,}00 - 1{,}00 = 2{,}00\,€ \qquad \frac{c_u}{c_u + c_o} = \frac{2}{2{,}5} = 0{,}8` },
          { fig: S.newsvendor(), t: "Wie viele Zeitungen bestellen?", read: "Die Balken zeigen, wie wahrscheinlich jede Tagesnachfrage ist. Die Zeile darunter zählt sie **kumuliert** zusammen (5 %, 15 %, 35 % …). Bestelle die **kleinste Menge**, bei der die kumulierte Wahrscheinlichkeit das **kritische Verhältnis (80 %)** erreicht – hier **4 Stück** (85 %). Bei Normalverteilung: **S* = µ + z · σ**." }
        ] },
        { h: "Verbrauchsfolgebewertung", b: [
          { fig: S.fifo(), t: "Welche Lieferung gilt als verbraucht?", read: "Drei Lieferungen liegen übereinander – die Preise sind gestiegen (1 € → 3 €). **FIFO** rechnet die **älteste** (günstigste) als verbraucht → höherer Gewinn. **LIFO** rechnet die **neueste** (teuerste) als verbraucht → niedrigerer Gewinn und weniger Steuern." },
          { table: [["Verfahren", "HGB", "IFRS"], ["FIFO", "erlaubt", "erlaubt"], ["LIFO", "erlaubt", "**nicht erlaubt**"], ["Durchschnitt", "erlaubt", "erlaubt"], ["FEFO, LOFO, HIFO", "nicht zulässig", "nicht zulässig"]] }
        ] },
        { h: "Lagerplanung und Lagerungsarten", b: [
          { fig: SB.chain([{ t: "Layout", s: "Zonen" }, { t: "Sortiments-", s: "reinheit" }, { t: "Lagerplatz-", s: "vergabe" }, { t: "Prioritäten", s: "Wege, ABC", a: true }], { per: 4, label: "Kaskade der Lagerplanung" }), t: "Kaskade der Lagerplanung", read: "Von grob nach fein: Erst **Zonen** nach Gütereigenschaften (Kühlung, Gefahrstoff, Sperrgut), dann **trennen** (Chargen, Kunden, Quarantäne), dann **Platzvergabe**, zuletzt **Prioritäten** wie kurze Wege für Schnelldreher." },
          { table: [["Lagerungsart", "+", "−"], ["Bodenlager (Block/Reihe)", "billig, flexibel", "viel Fläche, wenig Höhe"], ["Regallager", "hohe Raumnutzung, direkter Zugriff", "teuer, Technik nötig"], ["Speziallager (Silo, Tank, Hängelager)", "passt zu besonderen Gütern", "teuer, rechtlich anspruchsvoll"]] },
          { p: "Lagertechnik: **statisch** (Palettenregal, Kanallager, Lagerlift) – die Ware bleibt am Platz · **dynamisch** (Durchlauf-, Schiebe-, Umlaufregal) – Ware oder Regal bewegen sich." }
        ] },
        { h: "Lagerplatzvergabe und AutoStore", b: [
          { fig: S.lagerplatz(), t: "Festplatz oder chaotisch?", read: "**Links:** Jeder Artikel hat **seine Spalte** – übersichtlich, aber freie Plätze bleiben reserviert (gestrichelt). **Rechts:** Jeder Artikel kommt dorthin, wo **gerade Platz** ist – alles voll genutzt, aber ohne **Lagerverwaltungssystem (LVS)** und Scanner findet man nichts. Festplatz passt zu kleinen Lagern, chaotisch zu großen (E-Commerce)." },
          { fig: S.autostore(), t: "AutoStore – das Neue", read: "Die Behälter stehen **ohne Gänge** dicht übereinander. **Roboter** fahren oben auf dem Raster, holen den richtigen Behälter heraus und bringen ihn zum **Pickplatz** – die Ware kommt zur Person, nicht umgekehrt. Ergebnis: **sehr hohe Raumausnutzung**." }
        ] }
      ]
    },

    // =================================================================
    // 🚆 VBL 1 – Bahnverkehr
    // =================================================================
    {
      id: "vbl1-bahn", fid: "vbl1", part: "Teil C · Dräger, Hanisch, Hackelberg", title: "Bahnverkehr",
      lessons: ["vbl1/c-bahn"],
      kurz: [
        "Seit **91/440** und der **Bahnreform 1994** gibt es Wettbewerb auf der Schiene – heute über 400 NE-Bahnen.",
        "Die Bahn ist stark bei **Masse, Sicherheit und Umwelt**, schwach bei **Netzzugang und Flexibilität**.",
        "**Trasse** = Recht, einen Streckenabschnitt zu einer Zeit zu nutzen; Züge in DE max. **740 m**.",
        "Produktionssysteme: **Ganzzug** (Zug = Sendung), **Einzelwagen** (über Rangierbahnhöfe), **KV**.",
        "Recht: national **HGB + ALB** (8,33 SZR/kg), international **CIM** (17 SZR/kg); Güterwagen nach **AVV**."
      ],
      s: [
        { h: "Vom Monopol zum Wettbewerb", b: [
          { fig: B.zeitleiste(), t: "Meilensteine", read: "Lies die Zeitleiste von links nach rechts: Die Bahn macht seit 1830 schwere Güter transportierbar. Mit der **EU-Richtlinie 91/440** wurden **Netz und Betrieb getrennt**, mit der **Bahnreform 1994** wurde aus der Staatsbahn die **DB AG**. Heute fahren **über 400 nichtbundeseigene Bahnen**." },
          { ls: { t: "bal", l: ["Vor der Bahnreform", ["Monopol, Bürokratie", "Personalkosten > Umsatz", "über 60 Mrd. DM Schulden", "Marktanteile gingen verloren"]], r: ["Heute", ["unternehmerische Strukturen", "**Wettbewerb** auf der Schiene", "Schuldenabbau, Profitabilität", "„Renaissance der Schiene“"]], mid: "→" } }
        ] },
        { h: "Leistungsprofil der Bahn", b: [
          { fig: B.vergleich(), t: "Langsam, aber sehr massenstark", read: "**Oben:** Im Durchschnitt ist die Bahn mit 20–30 km/h langsamer als der Lkw (Wartezeiten, Rangieren). **Unten:** Dafür bewegt ein Zug bis zu **4.000 t** – über hundertmal so viel wie ein Lkw (Achtung: unten ist die Skala logarithmisch, sonst wäre der Lkw-Balken unsichtbar)." },
          { chips: ["Massenleistungsfähigkeit", "Sicherheit", "Pünktlichkeit", "Umweltfreundlich", "witterungsunabhängig"] },
          { p: "Typische Bahngüter: **Kohle, Erz, Kies und Sand, Salz, Holz, Stahl, Mineralöl, Autos** und Großteile wie **Windräder**. Schwäche: Es gibt nur noch rund **2.300 Gleisanschlüsse**." }
        ] },
        { h: "Wettbewerb", b: [
          { ls: { t: "bal", l: ["Intermodal – zwischen Verkehrsträgern", ["**Lkw** ist größter Konkurrent (Preisdruck, auch aus Osteuropa)", "Binnenschiff auf dem Rhein", "Short-Sea-Verkehre (Ostsee, Skandinavien)"]], r: ["Intramodal – innerhalb der Schiene", ["DB Cargo gegen ausländische Staatsbahnen und Privatbahnen", "Netz ist **diskriminierungsfrei** zugänglich", "Kunden verteilen Mengen auf **mehrere Anbieter**"]], mid: "vs." } }
        ] },
        { h: "Grenzüberschreitender Schienengüterverkehr", b: [
          { ls: { t: "cards", items: [["⚡", "Technik", "5 Stromsysteme, 7 Signalsysteme, 3 Spurweiten, Lichtraumprofile, Rechts-/Linksverkehr"], ["🛃", "Grenzprozesse", "Lok- und Lokführerwechsel, Bremsprobe, Wagenuntersuchung, Dokumente, Zoll/Gefahrgut"], ["🔑", "Zugang", "Lizenz, Fahrzeugzulassung, Trassenzuweisung, Trassenentgelt"], ["⚖️", "Politik", "Binnenschiff und Flugzeug zahlen keine Mineralölsteuer, ungleiche externe Kosten"]] } },
          { merke: "Deshalb ist die Bahn im internationalen Verkehr oft langsamer als nötig – Lösungen sind **Güterkorridore**, **ETCS** und **Mehrsystemloks**." }
        ] },
        { h: "Trassen und Zuglängen", b: [
          { merke: "**Trasse** = die Möglichkeit, einen **bestimmten Streckenabschnitt** zwischen zwei Orten in einem **bestimmten Zeitraum** mit einem Zug bestimmter Bauart zu nutzen. (Deine Notiz: **wichtig**)" },
          { fig: B.zuglaengen(), t: "Wie lang darf ein Güterzug sein?", read: "Deutschland liegt mit **740 m** (Wagenzug 700 m) hinter Frankreich oder Dänemark. Ausnahme: **Padborg–Maschen** mit 835 m. Längere Züge würden die Kosten um bis zu **30 %** senken, brauchen aber längere Überholgleise." },
          { ul: ["**Zugsicherung:** Züge fahren im **Raumabstand** (Blöcke), ab 80 km/h ist **Zugbeeinflussung** Pflicht", "**PZB** bis 160 km/h · **LZB** ab 160 km/h · europäisch **ETCS**"] }
        ] },
        { h: "Zugang zum Netz: der Gleisanschluss", b: [
          { fig: B.gleisanschluss(), t: "Prinzipskizze mit drei Verträgen", read: "Von der **Hauptstrecke** zweigt an der **Anschlussweiche** das Anschlussgleis ab. Ab der **Anschlussgrenze** gehört die Anlage dem Anschließer, an der **Übergabestelle** werden die Wagen übergeben. Unten die **drei Verträge**: mit dem Netzbetreiber (Anschluss), mit der Behörde (Betrieb) und mit dem EVU (Bedienung)." },
          { p: "**Hauptanschließer** hängen direkt am Netz eines EIU, **Nebenanschließer** an einer anderen Anlage (z. B. Industriestammgleis). Weitere Zugangspunkte: Ladestraßen, **Railports**, Häfen, **GVZ**, Umschlagbahnhöfe." }
        ] },
        { h: "Güterwagen: Lastgrenze und Lademaß", b: [
          { ls: { t: "cards", items: [["⚖️", "Lastgrenze", "**Höchstlademasse** je **Streckenklasse** – maßgeblich ist die **schwächste Strecke** auf dem Weg; „S“ = beladen bis 100 km/h"], ["📐", "Lademaß", "Umriss, den die **Ladung nicht überragen** darf – das **kleinste** Lademaß auf dem Weg zählt; Überschreitung = LÜ"]] } },
          { ul: ["**DAK** (Digitale Automatische Kupplung): kuppelt selbst, mit Strom und Daten → längere Züge, automatische Bremsprobe (≈ 17.500 € je Wagen)", "**Containerisierung:** 80–90 % der Transporte passen in Container → einfacher Umschlag, einfacher Wagenpark"] }
        ] },
        { h: "Privatgüterwagen und AVV", b: [
          { fig: B.pwagen(), t: "Wer hat mit wem einen Vertrag?", read: "Der **Kunde** schließt den **Frachtvertrag** mit dem **EVU** (oben). Das EVU nutzt aber fremde Wagen: Mit dem **Halter** (z. B. VTG, GATX) gilt der **AVV** (rechts). Der Halter lässt die Wagen in der **Werkstatt** instand halten (unten)." },
          { merke: "**AVV = Allgemeiner Vertrag für die Verwendung von Güterwagen** – multilateral auf Basis **COTIF/CUV**, **jeder Halter mit jeder Bahn**. Regelt Haftung, Schäden, Wagenanschriften, Leerwagen, Instandhaltung. Hat **2006 das RIV abgelöst**. (Deine Notiz: **sehr wichtig**)" }
        ] },
        { h: "Produktionssysteme", b: [
          { fig: B.produktion(), t: "Ganzzug, Einzelwagen, KV", read: "**Oben:** Der **Ganzzug** fährt ohne Zwischenhalt von Werk zu Werk – Zug = Sendung, ideal für Massengut. **Mitte:** Beim **Einzelwagen** werden Wagen aus vielen Gleisanschlüssen (GLA) über Knoten und **Rangierbahnhöfe (Rbf)** gesammelt und neu gebündelt – flexibel, aber aufwendig. **Unten:** Im **KV** fährt nur die Ladeeinheit auf der Schiene." }
        ] },
        { h: "Der Rangierbahnhof", b: [
          { fig: B.rangierbahnhof(), t: "Wie Wagen neu sortiert werden", read: "Ein Zug kommt in der **Einfahrgruppe** an und wird entkuppelt. Über den **Ablaufberg** rollen die Wagen einzeln in die **Richtungsgruppe** – jedes Gleis sammelt ein Ziel. In der **Ausfahrgruppe** wird der neue Zug gekuppelt und die Bremsprobe gemacht. Beispiel: **Mannheim**, zweitgrößter Rangierbahnhof von DB Cargo." }
        ] },
        { h: "Recht und Haftung", b: [
          { fig: B.haftung(), t: "National vs. international", read: "Die **CIM** (international) haftet **höher** als HGB/ALB (national): 17 statt 8,33 SZR je kg und bis zur 4- statt 3-fachen Fracht bei Verspätung. National gilt zusätzlich eine Grenze je Schadenfall (1 Mio. € oder 2 SZR/kg)." },
          { ul: ["**ALB:** Transportauftrag mit den Angaben nach **§ 408 HGB**, gilt ohne Widerspruch als angenommen", "Wagen bestellen bis **10 Uhr am Werktag vor dem Bedarfstag**", "**§ 412 HGB:** Absender lädt beförderungssicher, Frachtführer sorgt für betriebssichere Verladung", "Gefahrgut nach **§ 410 HGB** rechtzeitig in Textform melden"] }
        ] },
        { h: "Kooperation, Verbände und Umwelt", b: [
          { chips: ["UIC (1922, Paris)", "CER", "OTIF (COTIF)", "CIT", "UIRR (KV)", "VDV"] },
          { p: "Bahnen kooperieren in **Produktion, Personal, Vertrieb, Equipment** (Wagen- und Lokpools), **Logistik, Einkauf und F&E** – um Kosten und Risiken zu teilen." },
          { merke: "**Externe Kosten** = vom Verkehr verursacht, aber von der **Allgemeinheit** bezahlt (DE ≈ 149 Mrd. €, v. a. Unfälle). Gegenmittel: **Internalisierung** – Maut, lärmabhängige Trassenpreise, CO₂-Abgaben." }
        ] }
      ]
    },

    // =================================================================
    // 🚛🚆 VBL 1 – Kombinierter Verkehr (vorläufig aus den Notizen)
    // =================================================================
    {
      id: "vbl1-kv", fid: "vbl1", part: "Teil C · vorläufig aus deinen Notizen", title: "Kombinierter Verkehr",
      lessons: ["vbl1/c-kv"],
      kurz: [
        "Langer **Hauptlauf auf Bahn oder Binnenschiff**, kurzer Vor- und Nachlauf per Lkw.",
        "Nur die **Ladeeinheit** wird umgeschlagen, die Ware bleibt drin.",
        "Lkw im KV: **44 t statt 40 t**; Zug ohne Lenk- und Ruhezeiten.",
        "Lohnt sich ab etwa **300 km**; Nachteil: Cut-off-Zeiten und Umschlag."
      ],
      s: [
        { h: "Das Prinzip", b: [
          { fig: K.kette(), t: "Lang auf der Schiene, kurz auf der Straße", read: "Der Lkw holt die Ladeeinheit ab (kurzer **Vorlauf**) und bringt sie zum **Terminal**. Dort hebt ein Kran sie auf den Zug oder das Schiff für den **langen Hauptlauf**. Am Ziel-Terminal übernimmt wieder ein Lkw den kurzen **Nachlauf**. Die Ware selbst wird nie angefasst." },
          { merke: "Der **KV-Operateur** ist „**wie ein Spediteur**“: Er organisiert die Züge und verkauft Stellplätze an Speditionen." }
        ] },
        { h: "Begleitet oder unbegleitet?", b: [
          { fig: K.begleitet(), t: "Was fährt auf dem Zug mit?", read: "**Links:** Nur der **Sattelauflieger** (oder Container/Wechselbehälter) fährt mit – Zugmaschine und Fahrer bleiben in der Region. Das ist der Normalfall. **Rechts:** Bei der **Rollenden Landstraße** fährt der **ganze Lkw** mit, der Fahrer reist im Liegewagen." },
          { table: [["Wagen", "transportiert"], ["**Taschenwagen**", "Sattelauflieger"], ["**Containertragwagen**", "Container und Wechselbehälter"]] }
        ] },
        { h: "Wann lohnt sich KV?", b: [
          { fig: K.breakeven(), t: "Faustregel: ab rund 300 km", read: "Der **Lkw** (rot) startet bei null, wird aber mit jedem Kilometer deutlich teurer. Der **KV** (Farbe) hat **feste Kosten** für Umschlag sowie Vor- und Nachlauf, dafür sind die Kilometer günstiger. Wo sich die Linien schneiden – laut Vorlesung bei **rund 300 km** – wird KV günstiger." },
          { ls: { t: "bal", l: ["Vorteile", ["Lkw darf **44 t statt 40 t** → 4 t mehr Ladung", "Zug **schneller** auf langen Strecken – keine Lenk- und Ruhezeiten", "umweltfreundlicher, weniger Fahrer nötig"]], r: ["Nachteile", ["**wenig flexibel** – feste Abfahrten, **Cut-off-Zeiten**", "zusätzlicher **Umschlag** im Terminal", "Terminal muss in der Nähe sein"]], mid: "vs." } }
        ] },
        { h: "Hinweise aus deinen Notizen", b: [
          { ul: ["Seit der **Liberalisierung (1994)** steigt die Güterverkehrsleistung; der **Online-Handel** wächst", "**Folie 36–38:** „muss gegeben sein“ – mit dem Foliensatz abgleichen · **Folie 57:** Ablauf", "⚠️ Vorläufig: Sobald du mir die KV-Folien schickst, ergänze ich diesen Lernzettel."] }
        ] }
      ]
    },

    // =================================================================
    // 📦 VBL 1 – KEP-Dienste (vorläufig aus den Notizen)
    // =================================================================
    {
      id: "vbl1-kep", fid: "vbl1", part: "Teil C · vorläufig aus deinen Notizen", title: "KEP-Dienste",
      lessons: ["vbl1/c-kep"],
      kurz: [
        "**Kurier** begleitet direkt, **Express** garantiert die Zeit, **Paket** ist standardisiert und läuft über Hubs.",
        "KEP ≈ **10 % des Logistikmarkts**, 4,4 Mrd. Sendungen, ≈ 30 Mrd. €, seit 2015 **+50 %** (Quelle: BIEK).",
        "**B2C wächst**, B2B nimmt ab – wegen des Online-Handels.",
        "Netze: **Direktverkehr** oder **Hub-and-Spoke**; die **letzte Meile** ist am teuersten → **Mikrohubs**."
      ],
      s: [
        { h: "Kurier, Express, Paket", b: [
          { fig: P.segmente(), t: "Drei Segmente", read: "**Nach oben** steigen Tempo und Preis, **nach rechts** Standardisierung und Automatisierung. Der **Kurier** fährt eine Sendung persönlich und direkt – schnell, aber teuer. **Express** garantiert eine Zustellzeit über Netze. Das **Paket** ist standardisiert (meist bis ca. 31,5 kg) und läuft vollautomatisch über Hubs – günstig, 24–48 h ohne Garantie." },
          { p: "Abgrenzung: **Stückgut = Paletten** (LTL/FTL-Netze), **KEP = Pakete**. Beide brauchen flächendeckende Netze mit **mehreren Hubs**." }
        ] },
        { h: "Der KEP-Markt in Zahlen", b: [
          { fig: P.markt(), t: "Klein, aber stark wachsend", read: "Der Ring zeigt: KEP ist rund **10 % des Logistikmarkts**. Daneben die Eckdaten: **4,4 Mrd. Sendungen** und **rund 30 Mrd. €** im Jahr, fast komplett **outgesourced**. Der Pfeil steht für das Wachstum: **+50 % seit 2015**, getrieben vom Online-Handel (B2C ↑, B2B ↓). Laut Prof ist die Quelle wichtig: **BIEK-KEP-Studie**." }
        ] },
        { h: "Player und Preise", b: [
          { chips: ["DHL (Deutsche Post)", "Hermes", "DPD", "GLS", "UPS", "FedEx", "Amazon Logistics", "neu: Flink, Lieferando"] },
          { ul: ["Die **Post** war früher ein **Staatsmonopol** – heute weitgehend privatisiert", "Händler, die selbst ausliefern (z. B. Gorillas) = **Händler-Logistik im Selbsteintritt – kein Kurier**; Dachser = **LDL**", "**Amazon** ist der größte Pakettransporteur, aber **kein klassischer Paketdienstleister** (vor allem eigene Sendungen)", "Preise ändern sich ständig: **Wettbewerb** und neue Player, schwankende **Kosten** (Personal, Diesel, Maut), **Saisonspitzen**, Marktmacht großer Versender"] }
        ] },
        { h: "Die Transportkette im KEP-Bereich", b: [
          { fig: SB.chain([{ t: "Zentrallager", s: "des Händlers" }, { t: "Abholung", s: "Vorlauf" }, { t: "Paketzentrum", s: "sortieren" }, { t: "Hub", s: "nachts", a: true }, { t: "Ziel-Depot", s: "Touren bilden" }, { t: "Zustellung", s: "letzte Meile" }], { per: 3, label: "Transportkette im KEP-Bereich vom Händler bis zum Kunden" }), t: "Vom Lager bis zur Haustür", read: "Lies Zeile für Zeile: Der Händler versendet aus **einem Zentrallager**, der KEP-Dienst holt ab, **sortiert** im Paketzentrum, bündelt nachts über den **Hub** und verteilt im Ziel-Depot auf **Zustelltouren**." },
          { merke: "Ein **zentrales Lager** (z. B. **Bad Hersfeld**) spart Lagerkosten und erlaubt eine **spätere Cut-off-Zeit** – besser als z. B. aus Freiburg nach Hamburg zu schicken." }
        ] },
        { h: "Zwei Netzwerkarten", b: [
          { fig: P.netze(), t: "Direktverkehr oder Hub-and-Spoke?", read: "Sechs Depots: **Links** fährt jedes direkt zu jedem – **15 Linien**, schnell, aber nur mit viel Menge auszulasten. **Rechts** fahren alle zum **Hub** – nur **6 Linien**, gut ausgelastet, dafür ein zusätzlicher Umschlag. In der Praxis mischt man: starke Relationen direkt, schwache über den Hub." }
        ] },
        { h: "Letzte Meile und Citylogistik", b: [
          { fig: P.citylogistik(), t: "Der Mikrohub in der Stadt", read: "Der Lkw bringt alle Pakete gebündelt in einen **Mikrohub** mitten in der Stadt. Von dort stellen **Lastenräder oder E-Transporter** zu – weniger große Lkw in der Innenstadt, weniger Lärm und Emissionen." },
          { ul: ["Letzte Meile = **teuerster Abschnitt**: viele Stopps, wenig Sendungen je Stopp, Fehlzustellungen", "**Wenig Begeisterung der Bevölkerung** (Lieferverkehr, Halten in zweiter Reihe)", "**Citylogistik** hat die meisten neuen Projekte (Folie 63)"] }
        ] },
        { h: "Hinweise aus deinen Notizen", b: [
          { ul: ["**Folie 21:** auf die Überschrift achten – könnte ein Hauptthema sein", "**Folie 41:** Herausforderungen · Folie 64 laut Notiz nicht wichtig", "⚠️ Vorläufig: Schick mir die KEP-Folien, dann ergänze ich alles mit den echten Inhalten."] }
        ] }
      ]
    }
  ]);
})();
