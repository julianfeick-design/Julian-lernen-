/*
 * Lektionen Logistik – Prof. Schröder: Teil 1 Beschaffungslogistik + Teil 2 Produktionslogistik (Kapitel 1–5).
 * Schema wie js/lessons/logistik.js. check: o[0] ist immer die richtige Antwort (wird gemischt).
 * Wird nach js/schaubilder.js und js/schaubilder-pl.js geladen (nutzt SB.S und SB.PL).
 * Teil 1 hat einen handgeschriebenen Lernzettel (js/lernzettel.js) – für Teil 2 entstehen die Lernzettel aus diesen Lektionen (+ js/lz-plus.js).
 */
(function () {
  window.LESSONS = window.LESSONS || {};
  const R = String.raw, SB = window.SB;
  if (!SB || !SB.PL) return;
  const S = SB.S, PL = SB.PL;

  Object.assign(window.LESSONS, {
    // =================================================================
    // Teil 1 – Beschaffungslogistik
    // =================================================================
    "logistik/s-beschaffung": {
      title: "Beschaffungslogistik: vom Bedarf bis zum Lagerplatz",
      min: 14,
      goals: [
        "Die drei Grundfunktionen und die Hebelwirkung des Einkaufs erklären",
        "Bedarfsarten, Nettobedarf und die XYZ-Analyse (VK) anwenden",
        "Materialportfolio und Beschaffungsstrategien zuordnen",
        "JIT, JIS und Konsignationslager unterscheiden",
        "Sicherheitsbestand mit z-Wert, Andler und News-Vendor rechnen",
        "Festplatz, chaotische Lagerung und AutoStore erklären"
      ],
      s: [
        { t: "intro", x: "Teil 1 bei Prof. Schröder folgt dem Güterfluss: **Was** wird beschafft, **wie viel** brauche ich, **von wem** kaufe ich, **wie** kommt die Ware an, **wie viel Bestand** halte ich – und **wo** lagere ich sie? Diese Lektion führt dich in sechs Schritten durch. Alle Details und Schaubilder stehen im Lernzettel „Beschaffungslogistik“, die 48 Lernziele in den Lernfragen." },
        { t: "svg", h: "Die drei Grundfunktionen der Logistik", svg: S.grundfunktionen(), cap: "Jede Spalte ist ein Problem mit seiner Lösung: Ware am falschen **Ort** → **Transport**. Ware wird erst **später** gebraucht → **Lagern**. Falsche **Menge oder Sortierung** → **Umschlag** (bündeln und ordnen)." },
        { t: "text", h: "1 · Was macht die Beschaffung?", x: "Beschaffung heißt: alles besorgen, was das Unternehmen braucht – **Material**, Dienstleistungen, Betriebsmittel, Personal, Informationen und Kapital. Die **Materialwirtschaft** gliedert sich in **Einkauf** (Markt, Verhandlung, Lieferantenbewertung), **Disposition** (Bedarf, Mengen, Bestände) und **Lagerhaltung** (Wareneingang, Lagern, Kommissionieren)." },
        { t: "svg", h: "Der Einkauf als Hebel", svg: S.hebel(), cap: "1 Mio. € Umsatz, 50 % Materialkosten, 5 % Rendite. Für **+15.000 € Gewinn** müsste der Vertrieb **30 % mehr Umsatz** holen – der Einkauf nur **3 % Materialkosten** sparen. Jeder gesparte Euro wirkt voll auf den Gewinn." },
        { t: "merke", h: "Fundamental- oder Instrumentalziel?", x: "**Fundamentalziele** verfolgt man um ihrer selbst willen (Versorgungssicherheit, Kosten, Qualität). **Instrumentalziele** sind Mittel zum Zweck (geringe Bestände, kurze Beschaffungszeit). Test: „**Warum ist das wichtig?**“ – gibt es darauf eine Antwort, ist es ein Instrumentalziel." },
        { t: "text", h: "2 · Wie viel brauche ich?", x: "**Primärbedarf** = verkaufte Endprodukte, **Sekundärbedarf** = Teile und Baugruppen dafür (aus der Stückliste), **Tertiärbedarf** = Hilfs- und Betriebsstoffe. Bestellt wird der **Nettobedarf** = Brutto − Lager − unterwegs + reserviert. **Deterministisch** rechnet man genau aus dem Produktionsprogramm, **stochastisch** schätzt man aus vergangenen Verbräuchen." },
        { t: "formula", h: "Wie regelmäßig ist der Verbrauch? Die XYZ-Analyse", tex: R`VK = \frac{\sigma}{\mu} \qquad X: 0 \text{ bis } 0{,}25 \qquad Y: \text{bis } 0{,}5 \qquad Z: > 0{,}5`, items: [
          "σ = Standardabweichung (bei einer Stichprobe durch **n − 1** teilen), µ = Mittelwert",
          "**X:** gut planbar → Just-in-Time · **Z:** sporadisch → Einzel- oder Vorratsbeschaffung",
          "Die ABC-Analyse (nach Wert) sollst du **verstehen** – laut deiner Notiz ist sie aber **keine Klausurfrage**"
        ] },
        { t: "svg", h: "3 · Von wem kaufe ich? Das Materialportfolio", svg: S.materialportfolio(), cap: "Nach oben steigt der **Beitrag zum Ergebnis**, nach rechts das **Versorgungsrisiko**. So landet jedes Material in einem von vier Feldern: unkritisch, Hebel, Engpass oder strategisch." },
        { t: "svg", h: "Die passende Beschaffungsstrategie", svg: S.strategien(), cap: "Gleiche Achsen, aber jetzt steht die **Strategie** im Feld: wenig Risiko und wenig Beitrag → **ein Lieferant**. Hoher Beitrag, wenig Risiko → **weltweit** einkaufen. Hohes Risiko → **mehrere Lieferanten**. Beides hoch → **Module** vom Systemlieferanten." },
        { t: "bal", h: "Single oder Dual/Multiple Sourcing?", l: ["Single Sourcing", ["Mengenrabatte, weniger Transport- und Transaktionskosten", "hohe Qualitätsstandards, enge Partnerschaft", "Risiko: Abhängigkeit (Sole Sourcing = es gibt nur einen)"]], r: ["Dual/Multiple Sourcing", ["Stillstand vermeiden – man kann ausweichen", "Wettbewerb nutzen, niedrige Wechselbarrieren", "Nachteil: mehr Aufwand, kleinere Mengen je Lieferant"]] },
        { t: "text", h: "4 · Wie kommt die Ware an?", x: "**Einzelbeschaffung** (erst im Bedarfsfall), **Vorratsbeschaffung** (große Mengen aufs Lager) oder **produktionssynchron** (Just-in-Time). **Just-in-Sequence** liefert zusätzlich in **Einbaureihenfolge** – für viele Varianten am Band. Das **Konsignationslager** ist der Mittelweg: Der Lieferant lagert beim Kunden, bezahlt wird erst bei **Entnahme**." },
        { t: "svg", h: "Das Konsignationslager", svg: S.konsignation(), cap: "Der **Lieferant** füllt ein Lager **beim Kunden**, die Ware bleibt **sein Eigentum**. Erst bei der **Entnahme** wird sie berechnet. Der Kunde bindet kein Kapital, der Lieferant gewinnt Dispositionsfreiheit." },
        { t: "text", h: "5 · Wie viel Bestand halte ich?", x: "Bestände kosten **Kapital** (Lagerhaltungskostensatz = Lagerkosten + kalkulatorischer Zins + Wagnis) – Fehlmengen kosten aber Umsatz und Kunden. Drei Rechenwerkzeuge musst du können: den **Sicherheitsbestand mit z**, die optimale Bestellmenge nach **Andler** und das **News-Vendor-Modell**." },
        { t: "svg", h: "Sicherheitsbestand und z-Wert", svg: S.sicherheit(), cap: "Die eingefärbte **Fläche links von z** ist die Wahrscheinlichkeit Φ, dass die Nachfrage gedeckt ist – bei **z = 1,65** sind das **95 %**. z zählt, wie viele Standardabweichungen man über dem Mittelwert vorsorgt." },
        { t: "formula", h: "Die drei Formeln für die Klausur", tex: R`SB = z \cdot \sigma \qquad q^* = \sqrt{\frac{2 \cdot B \cdot K_f}{p \cdot i}} \qquad \frac{c_u}{c_u + c_o}`, items: [
          "**z-Wert** (deine Notiz zu Folie 78: „ganz wichtig“): z = (x − µ) / σ · z = 1,65 → 95 % · z = 2 → 97,7 % · z = −2 → nur 2,28 % liegen darunter",
          "**Andler:** im Optimum sind Bestell- und Lagerhaltungskosten gleich hoch",
          "**News-Vendor:** so viel bestellen, dass die Nachfrage mit der Wahrscheinlichkeit c_u / (c_u + c_o) gedeckt ist – c_o = k − r, c_u = p − k"
        ] },
        { t: "ex", h: "Andler durchgerechnet", x: "B = 12.000 Stück/Jahr, K_f = 150 € je Bestellung, p = 20 €, i = 12,5 % → q* = √(2 · 12.000 · 150 / 2,5) = **1.200 Stück** → 10 Bestellungen im Jahr, je **1.500 €** Bestell- und Lagerhaltungskosten." },
        { t: "svg", h: "Die vier Bestellpolitiken", svg: S.politiken(), cap: "**t** = fester Bestellrhythmus, **s** = Bestellung beim Meldebestand. **q** = immer gleiche Menge, **S** = auffüllen bis zum Zielbestand. Daraus entstehen tq, tS, sq und sS." },
        { t: "svg", h: "6 · Wo lagere ich? Festplatz oder chaotisch", svg: S.lagerplatz(), cap: "**Links:** Jeder Artikel hat seinen festen Platz – übersichtlich, aber freie Plätze bleiben reserviert. **Rechts:** Jeder Artikel kommt dorthin, wo gerade Platz ist – hohe Raumnutzung, geht aber nur mit Lagerverwaltungssystem." },
        { t: "merke", h: "Das Neue an AutoStore", x: "Die Behälter stehen **ohne Gänge** dicht übereinander im Raster, **Roboter** holen sie von oben und bringen sie zum Pickplatz – **Ware zur Person** bei sehr hoher Raumausnutzung." },
        { t: "check", q: "Materialquote 50 %, Rendite 5 %: Der Einkauf spart 3 % Materialkosten. Wie stark müsste der Umsatz für denselben Gewinneffekt steigen?", o: ["um 30 %", "um 3 %", "um 15 %", "um 50 %"], why: "3 % von 500.000 € = 15.000 € Gewinn. Über den Umsatz: 15.000 € / 5 % = 300.000 € = **30 %** mehr." },
        { t: "check", q: "Ein Artikel hat im Monat µ = 200 und σ = 120. In welche Klasse gehört er?", o: ["Z", "X", "Y", "A"], why: "VK = 120 / 200 = **0,6** – über 0,5 → **Z**, sporadischer Verbrauch." },
        { t: "check", q: "Ein Spezialteil mit hohem Versorgungsrisiko, aber geringem Ergebnisbeitrag ist …", o: ["ein Engpassgut", "ein Hebelprodukt", "ein strategisches Produkt", "ein unkritisches Gut"], why: "Geringer Beitrag, hohes Risiko = **Engpassgut** → Mengen sichern, Sicherheitsbestand, mehrere Lieferanten aufbauen." },
        { t: "check", q: "Was unterscheidet Just-in-Sequence von Just-in-Time?", o: ["Lieferung zusätzlich in Einbaureihenfolge", "Lieferung ohne festes Zeitfenster", "Lieferung nur artrein verpackt", "Lieferung immer aus dem Zentrallager"], why: "JIS liefert **sequenziert** – genau in der Reihenfolge der Autos am Band." },
        { t: "check", q: "σ = 50 Stück. Welcher Sicherheitsbestand ergibt 95 % Lieferbereitschaft?", o: ["82,5 Stück", "50 Stück", "100 Stück", "165 Stück"], why: "SB = z · σ = 1,65 · 50 = **82,5 Stück**." },
        { t: "check", q: "Im Andler-Optimum gilt:", o: ["Bestellkosten = Lagerhaltungskosten", "Bestellkosten = 0", "Lagerhaltungskosten sind maximal", "Bestellmenge = Jahresbedarf"], why: "Die Gesamtkosten sind dort am kleinsten, wo sich fallende Bestellkosten und steigende Lagerhaltungskosten **schneiden**." }
      ]
    },

    // =================================================================
    // Teil 2 – Kapitel 1: Produktion als Kernfunktion der Unternehmung
    // =================================================================
    "logistik/p-kosten": {
      title: "Produktion & Kosten: Isoquanten, Kostenkurven, Lerneffekte",
      min: 12,
      goals: [
        "Isoquanten erklären – substitutional vs. limitational",
        "Gesamtkostenfunktion, Kostenisoquante und Minimalkostenkombination erläutern",
        "Bereitschafts-, Mengen-, sprungfixe und Durchschnittskosten unterscheiden",
        "Grenzkosten herleiten und berechnen",
        "Größeneffekte der Produktion systematisieren",
        "Wright’s Law erklären, rechnen und begründen"
      ],
      s: [
        { t: "intro", x: "Bevor es um Materialfluss geht, schaut Prof. Schröder auf die **Produktion selbst**: Wie kombiniert man Faktoren wie Arbeit, Maschinen und Material zu einem Output – und was kostet das? Das ist das Handwerkszeug für alle späteren Entscheidungen über Losgrößen, Layout und Automatisierung." },
        { t: "text", h: "Produktion als Kernfunktion", x: "Der Betrieb nimmt **Input** auf, erstellt eine Leistung (**Produktion**) und verwertet sie (**Absatz**). Die Logistik koordiniert dabei die **Güterströme**, das Finanzwesen die **Zahlungsströme**." },
        { t: "svg", h: "Die Produktionsfunktion: nur effiziente Kombinationen", svg: PL.effizienz(), cap: "Alle neun Punkte erzeugen **5 Stück**. Effizient sind nur **A, B, D und H**: Bei C, E, F, G und I braucht man für denselben Output mehr von einem Faktor. Die Linie durch die effizienten Punkte ist die **Isoquante**." },
        { t: "svg", h: "Isoquanten: substitutional oder limitational", svg: PL.isoquanten(), cap: "**Links:** Die Faktoren lassen sich gegeneinander austauschen – die Isoquanten sind gekrümmt. **Rechts:** Die Faktoren müssen im festen Verhältnis eingesetzt werden (Prozessgerade). Mehr von nur einem Faktor bringt nichts – die Isoquanten sind rechtwinklig." },
        { t: "ex", h: "Limitational im Alltag", x: "Ein Fahrrad braucht **1 Rahmen und 2 Räder**. Mit 3 Rädern und 1 Rahmen baust du trotzdem nur ein Fahrrad – das dritte Rad ist nutzlos. Ein Lkw braucht genau einen Fahrer – ein zweiter Fahrer macht ihn nicht schneller." },
        { t: "formula", h: "Gesamtkosten und Kostenisoquante", tex: R`K = q_1 \cdot r_1 + q_2 \cdot r_2 + \ldots + q_n \cdot r_n \qquad r_2 = -\frac{q_1}{q_2} \cdot r_1 + \frac{K^0}{q_2}`, items: [
          "q = Faktorpreise, r = Faktormengen – Kosten = Preis × Menge, über alle Faktoren",
          "**Kostenisoquante** (Isokostengerade) = alle Kombinationen mit **gleichen Kosten** K⁰",
          "Achsenabschnitte: K⁰/q₁ (nur Faktor 1) und K⁰/q₂ (nur Faktor 2)",
          "Budget ↑ → parallel nach außen · q₁ ↑ → steiler · q₂ ↑ → flacher"
        ] },
        { t: "svg", h: "Die Minimalkostenkombination", svg: PL.minimalkosten(), cap: "Gesucht ist die **billigste** Kombination für den Output m. K⁰ ist zu knapp – sie erreicht die Isoquante nicht. K² schneidet sie, ist aber teurer als nötig. Die Kostengerade **K¹ berührt** die Isoquante genau in **A** – das ist die Minimalkostenkombination." },
        { t: "merke", h: "Vom Tangentialpunkt zur Kostenfunktion", x: "Für jeden Output gibt es einen eigenen Tangentialpunkt. Verbindet man sie, entsteht die **Minimalkostenlinie** – daraus ergibt sich die langfristige Gesamtkostenfunktion **K = f(m)**." },
        { t: "svg", h: "Fixe und variable Kosten", svg: PL.kosten(), cap: "**Links:** Die Gesamtkosten starten beim Fixkostensockel Kf und steigen mit jeder Einheit um kv. **Rechts:** Je Stück verteilen sich die Fixkosten auf immer mehr Einheiten – die Stückkosten sinken bis fast auf kv (**Fixkostendegression**)." },
        { t: "table", h: "Die Kostenbegriffe", head: ["Begriff", "Bedeutung", "Beispiel"], rows: [
          ["Bereitschaftskosten", "fix – fallen auch ohne Produktion an", "Miete, Maschinen, Gehälter"],
          ["Mengenkosten", "variabel – steigen mit der Menge: Kv = kv · m", "Material je Stück"],
          ["Sprungfixe Kosten", "fix bis zur Kapazitätsgrenze, dann ein Sprung", "zweite Maschine, weitere Schicht"],
          ["Durchschnittskosten", "Stückkosten k = K / m = Kf / m + kv", "sinken durch Fixkostendegression"],
          ["Grenzkosten", "Kosten der letzten Einheit: K′ = ∂K / ∂m", "bei linearem K: K′ = kv"]
        ] },
        { t: "svg", h: "Nutzkosten und Leerkosten", svg: PL.nutzleer(), cap: "Die Fixkosten zahlt man immer – aber nur der **genutzte Teil** (Nutzkosten) trägt zur Produktion bei. Bei 6.000 von 8.000 Stück sind 75 % genutzt: **75 kEUR Nutzkosten**, **25 kEUR Leerkosten**." },
        { t: "ex", h: "Zeitliche Anpassung", x: "Reicht die Normalarbeitszeit nicht, macht man **Überstunden**. Ab dieser Menge steigt die Kostenkurve steiler, weil **Überstundenzuschläge** dazukommen." },
        { t: "svg", h: "Grenzkosten am Beispiel einer Bäckerei", svg: PL.grenzkosten(), cap: "Die **Stückkosten** fallen zuerst (Fixkosten verteilen sich), dann steigen sie wieder (das 0,1x² wird teurer). Die **Grenzkosten** steigen gleichmäßig. Wo sich beide schneiden – bei **100 Broten** –, sind die Stückkosten am niedrigsten: **22 €**." },
        { t: "formula", h: "Grenzkosten herleiten", tex: R`K(x) = 1.000 + 2x + 0{,}1x^2 \;\Rightarrow\; K'(x) = 2 + 0{,}2x \qquad k(x) = \frac{1.000}{x} + 2 + 0{,}1x`, items: [
          "K′ = **erste Ableitung** der Kostenfunktion = Kosten der letzten produzierten Einheit",
          "Linear (K = 100 + 2x): K′ = 2 bleibt gleich, k sinkt von 12 € (10 Brote) auf 3 € (100 Brote)",
          "Mit 0,1x² steigen die Grenzkosten: K′(50) = 12 €, K′(150) = 32 €",
          "Die Stückkosten sind minimal, wo **K′ = k**: x = 100 → 22 €"
        ] },
        { t: "svg", h: "Größeneffekte der Produktion", svg: PL.groesse(), cap: "**Economies of Scale:** Mehr Menge → niedrigere Stückkosten – durch größere Anlagen, Spezialisierung, Lernen, dichtere Netze (Density) oder Unternehmensgröße (Size). **Economies of Scope:** Mehrere Produkte teilen sich Ressourcen – zusammen billiger als getrennt." },
        { t: "svg", h: "Wright’s Law: Lerneffekte", svg: PL.wright(), cap: "Jede **Verdopplung** der kumulierten Stückzahl senkt die Zeit je Stück auf **80 %**: 100 → 80 → 64 → 51,2 Stunden. Am Anfang lernt man schnell, später werden die Schritte kleiner." },
        { t: "formula", h: "Wright’s Law rechnen", tex: R`k_x = k_1 \cdot x^{b} \qquad b = \frac{\ln r}{\ln 2} = \frac{\ln 0{,}8}{\ln 2} \approx -0{,}322`, items: [
          "Beispiel: k₁ = 100 Ah → k₈ = 100 · 8^(−0,322) ≈ **51,2 Ah**",
          "Gegenprobe über die Verdopplungen: 100 → 80 → 64 → 51,2",
          "Gründe: Abläufe sitzen, weniger Fehler, bessere Werkzeuge, passgenauere Teile, routiniertere Planung",
          "Achtung: Nicht jede Kostensenkung bei mehr Menge ist ein Lerneffekt – es gibt auch andere Economies of Scale"
        ] },
        { t: "check", q: "Kombination C braucht für denselben Output mehr r₂ als B – bei gleichem r₁. C ist …", o: ["ineffizient", "effizient", "limitational", "kostenminimal"], why: "Mehr Einsatz für denselben Output = **ineffizient**. Auf der Isoquante liegen nur effiziente Kombinationen." },
        { t: "check", q: "Ein Fahrrad besteht aus 1 Rahmen und 2 Rädern. Welche Produktionsfunktion ist das?", o: ["limitational", "substitutional", "degressiv", "sprungfix"], why: "Festes Einsatzverhältnis → **limitational**. Ein drittes Rad bringt keinen Mehroutput." },
        { t: "check", q: "Der Preis von Faktor 1 steigt. Was passiert mit der Kostenisoquante?", o: ["Sie wird steiler", "Sie wird flacher", "Sie verschiebt sich parallel nach außen", "Sie bleibt gleich"], why: "Der Schnittpunkt mit der r₁-Achse (K⁰/q₁) wandert nach links → die Gerade wird **steiler**." },
        { t: "check", q: "Kf = 100 kEUR, Kapazität 8.000 Stück, produziert werden 6.000. Wie hoch sind die Leerkosten?", o: ["25 kEUR", "75 kEUR", "0 kEUR", "100 kEUR"], why: "KN = 100 · 6.000 / 8.000 = 75 kEUR → KL = 100 − 75 = **25 kEUR**." },
        { t: "check", q: "K(x) = 500 + 3x. Wie hoch sind die Grenzkosten?", o: ["3 €", "500 €", "503 €", "Sie hängen von x ab"], why: "Ableitung von 500 + 3x ist **3** – bei linearen Kosten gilt K′ = kv." },
        { t: "check", q: "Das 1. Teil braucht 50 Stunden, die Lernrate ist 0,8. Wie lange dauert das 4. Teil?", o: ["32 Stunden", "40 Stunden", "25 Stunden", "12,5 Stunden"], why: "Zwei Verdopplungen (1 → 2 → 4): 50 · 0,8 · 0,8 = **32 h**." }
      ]
    },

    // =================================================================
    // Teil 2 – Kapitel 2: Grundlagen der Produktionslogistik
    // =================================================================
    "logistik/p-grundlagen": {
      title: "Grundlagen der Produktionslogistik: Standorte, Ziele, Materialfluss",
      min: 11,
      goals: [
        "Die raumzeitliche Herausforderung globaler Produktion erklären",
        "Sechs Typen von Produktionsstandorten mit Beispielen unterscheiden",
        "Ziele und Zielkonflikte der Produktionslogistik erläutern",
        "Maßnahmen und den Planungsprozess des Materialflusses beschreiben",
        "Transportaufkommen, Transportleistung und Fahrleistung berechnen",
        "Materialflussmatrix, Sankey-Diagramm und U-Form erklären"
      ],
      s: [
        { t: "intro", x: "Moderne Produktion ist ein **Netz aus Standorten**: Volkswagen hat über 100 Werke in vielen Ländern, ein iPhone besteht aus Teilen aus der ganzen Welt. Die Produktionslogistik sorgt dafür, dass das Material **zwischen** und **innerhalb** der Werke effizient fließt." },
        { t: "svg", h: "Die raumzeitliche Herausforderung", svg: PL.raumzeit(), cap: "**Links** läuft die ganze Wertschöpfung an einem Ort (r0) – sie ist schnell fertig. **Rechts** wechselt die Ware zwischendurch in eine andere Raumeinheit (rm): Der Transport kostet Zeit, das Produkt ist erst später (tn) fertig." },
        { t: "svg", h: "Sechs Typen von Produktionsstandorten", svg: PL.standorte(), cap: "Jedes Kästchen ist ein Mini-Netz aus **Werken (W)** und **Märkten (M)**. Achte auf die Pfeile: **ein** Werk für alle Märkte, **parallele** Werke, Werke, die sich die Arbeit **teilen**, ein **Spezialist** für andere Werke, Werke **direkt am Markt** – oder ein Werk, das **im Auftrag** einer Marke fertigt." },
        { t: "table", h: "Standorttypen mit Beispielen", head: ["Typ", "Merkmal", "Beispiel"], rows: [
          ["Weltmarktfabrik", "ein großer Standort beliefert viele Länder – Standardprodukte, hohe Automatisierung", "BMW Spartanburg, Porsche Leipzig, TSMC"],
          ["Standortteilung", "Parallelproduktion an mehreren Standorten, oft nahe den Märkten", "Tesla-Gigafactories, Coca-Cola-Abfüller"],
          ["Standortspaltung", "starke Spezialisierung, Materialflüsse zwischen den Werken", "Airbus, Apple iPhone, H&M"],
          ["Fokusfabrik", "klare Spezialisierung, Leitwerk, beliefert andere Werke", "Mercedes Gaggenau (Getriebe), Rittal Haiger"],
          ["Lokale Fabrik", "nah am Kunden – für sperrige, schwere, frische Produkte", "Harry-Brot, Transportbetonwerke"],
          ["Verlängerte Werkbank", "wenig Eigenständigkeit, fertigt oder montiert im Auftrag", "Foxconn, Magna Steyr (G-Klasse)"]
        ] },
        { t: "svg", h: "Ziele der Produktionslogistik", svg: PL.ziele(), cap: "Rund um das Oberziel **niedrige Kosten** stehen die Teilziele: viel Fläche nutzen, kurze Durchlaufzeit, Termintreue, Auslastung, wenig Bestand, kurze Wege, Flexibilität – alles bei **ergonomischer** Umsetzung." },
        { t: "svg", h: "Zielkonflikte in der Produktionslogistik", svg: PL.tradeoffs(), cap: "Große Lose verbessern alles **links** (weniger Rüsten, volle Maschinen) – und verschlechtern alles **rechts**: mehr Bestand, längere Durchlaufzeit, weniger Flexibilität. Man muss abwägen." },
        { t: "merke", h: "Das Dilemma der Produktion", x: "Man kann nicht alles gleichzeitig maximieren: **Hohe Auslastung** (alle Maschinen laufen) erzeugt Warteschlangen und damit **lange Durchlaufzeiten**. **Hohe Lieferbereitschaft** braucht **Bestände**." },
        { t: "cards", h: "Maßnahmen und Instrumente – in der Reihenfolge der Planung", items: [
          ["📐", "Produktgeometrie", "logistikgerecht konstruieren, Demontage und Recycling mitdenken"],
          ["🗺️", "Layout und Ablauf", "Wege kurz halten, Abläufe optimieren"],
          ["✅", "Total Quality Management", "Fehler vermeiden statt nacharbeiten"],
          ["⚙️", "Rüstarme Prozesse", "damit kleinere Lose wirtschaftlich werden"],
          ["📦", "Zwischenbestände", "optimieren – nicht maximieren"],
          ["🧩", "Modularisieren", "(Halb-)Erzeugnisse als Module aufbauen"],
          ["⚖️", "Make-or-Buy", "selbst fertigen oder zukaufen?"]
        ] },
        { t: "svg", h: "Planungsprozess des innerbetrieblichen Materialflusses", svg: PL.planung(), cap: "Produkt, Fertigungsverfahren und Produktionsprogramm bestimmen, **wie viel** wohin fließt (Mengen je Zeiteinheit). Erst mit dem **Layout** kommen die Entfernungen dazu – daraus folgt die nötige **Transportleistung** (Menge × Entfernung je Zeiteinheit)." },
        { t: "svg", h: "Die drei verkehrswissenschaftlichen Kennzahlen", svg: PL.kennzahlen(), cap: "Ein Stapler bringt 1 t über 200 m und fährt leer zurück. **Transportaufkommen** zählt nur die Menge (1 t), **Transportleistung** Menge mal Weg (200 tm), **Fahrleistung** den ganzen Weg des Fahrzeugs – auch leer (400 m)." },
        { t: "ex", h: "Rechne mit", x: "Ein Stapler fährt 40-mal je 1,2 t über 180 m und jeweils leer zurück: **Aufkommen** 48 t · **Transportleistung** 48 t × 180 m = 8.640 tm · **Fahrleistung** 40 × 360 m = 14,4 km. Leerfahrten zählen nur bei der Fahrleistung!" },
        { t: "svg", h: "Materialflussmatrix und Sankey-Diagramm", svg: PL.sankey(), cap: "**Oben** die Von-nach-Matrix: Jede Zeile sagt, wie viel von einem Bereich in einen anderen fließt. **Unten** dieselben Zahlen als **Sankey-Diagramm**: Die Breite jedes Pfeils entspricht der Menge – Hauptströme und Ausschuss sieht man sofort." },
        { t: "svg", h: "Warum die U-Form?", svg: PL.uform(), cap: "In der **Linie** liegen Anfang und Ende weit auseinander – ein Mitarbeiter, der beides betreut, läuft weit. In der **U-Form** liegen Ein- und Ausgang **nebeneinander**: kurze Wege, ein Mitarbeiter kann Station 1 und 6 bedienen, das Team arbeitet nah beieinander." },
        { t: "check", q: "Ein Werk in Taiwan fertigt Chips für Kunden auf der ganzen Welt. Welcher Standorttyp ist das?", o: ["Weltmarktfabrik", "Lokale Fabrik", "Standortteilung", "Fokusfabrik"], why: "Ein großer Standort beliefert viele Länder → **Weltmarktfabrik**." },
        { t: "check", q: "Foxconn montiert iPhones im Auftrag von Apple. Das ist eine …", o: ["verlängerte Werkbank", "Fokusfabrik", "Weltmarktfabrik", "lokale Fabrik"], why: "Ausführende Montage im Auftrag, wenig Eigenständigkeit → **verlängerte Werkbank**." },
        { t: "check", q: "Was verschlechtert sich meist, wenn man die Losgrößen erhöht?", o: ["Durchlaufzeit und Bestände", "Rüstkosten", "Auslastung", "Effizienz"], why: "Große Lose sparen Rüsten und erhöhen die Auslastung – aber **Bestände und Durchlaufzeit steigen**." },
        { t: "check", q: "Ein Stapler bringt 2 t über 100 m und fährt leer zurück. Wie hoch ist die Transportleistung?", o: ["200 tm", "400 tm", "2 t", "200 m"], why: "Transportleistung = Menge × Entfernung = 2 t × 100 m = **200 tm**. Die 200 m Fahrweg sind die Fahrleistung." },
        { t: "check", q: "Bei welchem Instrument ist die Pfeilbreite proportional zur Menge?", o: ["Sankey-Diagramm", "Materialflussmatrix", "Gantt-Diagramm", "Ishikawa-Diagramm"], why: "Beim **Sankey-Diagramm** sieht man die Mengen an der Breite der Pfeile." },
        { t: "check", q: "Ein Vorteil der U-Form ist, dass …", o: ["ein Mitarbeiter Anfang und Ende bedienen kann", "mehr Platz für Zwischenlager entsteht", "Start und Ende weit auseinanderliegen", "jede Station eigenes Personal braucht"], why: "Ein- und Ausgang liegen **nebeneinander** – kurze Wege und flexibler Personaleinsatz." }
      ]
    },

    // =================================================================
    // Teil 2 – Kapitel 3: Produktionssysteme und innerbetrieblicher Materialfluss
    // =================================================================
    "logistik/p-systeme": {
      title: "Produktionssysteme: Fertigungsprinzipien, Layout und Linienabgleich",
      min: 14,
      goals: [
        "Fertigungsprinzipien systematisieren und in der Produkt-Prozess-Matrix verorten",
        "Begründen, wann Werkstatt-, Reihen-, Fließfertigung oder Transferstraße passt",
        "Das Dreiecksverfahren und die Largest Candidate Rule anwenden",
        "Erklären, was ein NP-schweres Problem ist",
        "Ansätze des Line Balancing nennen",
        "Segmentierung, Zentrenfertigung und Fördersysteme erklären"
      ],
      s: [
        { t: "intro", x: "Wie stellt man Maschinen in einer Halle auf? Das hängt davon ab, **was** und **wie viel** man produziert: Einzelstücke brauchen Flexibilität, Massenware braucht einen Takt. Dazu kommen zwei Planungswerkzeuge zum Rechnen – das **Dreiecksverfahren** und die **Largest Candidate Rule**." },
        { t: "svg", h: "Fertigungsprinzipien im Überblick", svg: PL.prinzipien(), cap: "Lies von links nach rechts: Beim **Funktionsprinzip** stehen gleiche Maschinen zusammen → **Werkstatt**. Beim **Objektprinzip** folgen die Maschinen dem Produkt – entweder als einheitlicher Fluss (Reihe, Fließ, Transferstraße) oder in **Zentren** (Fertigungsinsel, flexibles Fertigungssystem)." },
        { t: "svg", h: "Die Produkt-Prozess-Matrix", svg: PL.ppmatrix(), cap: "Nach rechts steigt die **Auftragsgröße** (Einzel → Masse), nach unten wird der Fluss **stetiger** und die Vielfalt **kleiner**. Wirtschaftlich ist die **Diagonale**. Abseits davon wird es zu starr (oben rechts) oder zu teuer (unten links)." },
        { t: "bal", h: "Werkstatt- vs. Reihen-/Fließfertigung", l: ["Werkstattfertigung", ["gleichartige Maschinen in einer Werkstatt (Drehen, Fräsen …), universell einsetzbar", "+ flexibel, Fachpersonal, kleine Lose wirtschaftlich, Ersatzmaschinen", "− weite Wege und Wartezeiten → lange Durchlaufzeit, Zwischenbestände, hoher Steuerungsaufwand, ungleiche Auslastung"]], r: ["Reihen-/Fließfertigung", ["Maschinen in der Reihenfolge des Ablaufs, bei Fließfertigung mit festem Takt", "+ hohe Flächennutzung, kurze Wege, kurze Durchlaufzeit, niedrige Stückkosten", "− unflexibel bei Schwankungen, störanfällig, hoher Kapitalbedarf, monotone Arbeit"]] },
        { t: "merke", h: "Transferstraße", x: "Automatisch **verkettete** Maschinen mit festem Takt – lohnt sich nur bei **Massenfertigung** mit wenigen Varianten. Fließfertigung braucht eine **belastbare Marktanalyse**, weil sich die Linie kaum umbauen lässt." },
        { t: "svg", h: "Das Dreiecksverfahren von Schmigalla", svg: PL.dreieck(), cap: "Im Dreiecksraster hat jeder Platz sechs Nachbarn. Zuerst kommen die zwei Stationen mit dem **größten Fluss** nebeneinander (4 und 5). Dann folgt jeweils die Station mit der **größten Summe** zu den schon platzierten (3, dann 1) – so liegen starke Flüsse nah beieinander." },
        { t: "flow", h: "Dreiecksverfahren in 4 Schritten", steps: [
          ["Matrix", "Materialflussmatrix aufstellen – Flüsse in **beide Richtungen** addieren"],
          ["Startpaar", "die zwei Stationen mit dem **größten Fluss** nebeneinander setzen", "4–5: 210"],
          ["Anbauen", "die Station mit der **größten Summe** zu allen platzierten angrenzend setzen", "3: 280, dann 1: 310"],
          ["Wiederholen", "bis alle Stationen im Raster stehen"]
        ] },
        { t: "svg", h: "Warum Heuristiken? NP-schwere Probleme", svg: PL.fakultaet(), cap: "Die Balken zeigen, wie viele **Reihenfolgen** es für k Kunden gibt (k!). Jeder Balken ist in Zehnerpotenzen gezeichnet – von 120 bei 5 Kunden auf **2,4 Trillionen** bei 20 Kunden. Alles durchzurechnen ist unmöglich." },
        { t: "merke", h: "NP-schwer in einem Satz", x: "Der Rechenaufwand **explodiert** mit der Problemgröße – für große Fälle ist die exakte Lösung praktisch unmöglich. **Heuristiken** wie das Dreiecksverfahren oder die Largest Candidate Rule liefern schnell **gute**, aber nicht garantiert optimale Lösungen." },
        { t: "svg", h: "Largest Candidate Rule: die Ausgangslage", svg: PL.vorrang(), cap: "Jeder Kasten ist eine Arbeitsaufgabe mit ihrer Zeit. Ein **Pfeil** heißt: Diese Aufgabe muss **vorher** erledigt sein. B und C brauchen A, H braucht D und E, J braucht G, H und I." },
        { t: "flow", h: "Largest Candidate Rule in 5 Schritten", steps: [
          ["Taktzeit", "T = verfügbare Zeit / Menge", "27.000 s / 450 = 60 s"],
          ["Mindestzahl", "Nmin = Σt / T – immer aufrunden", "335 / 60 = 5,58 → 6"],
          ["Sortieren", "Aufgaben nach Zeit **absteigend** ordnen"],
          ["Stationen füllen", "die **größte zulässige** Aufgabe nehmen, die noch in die Restzeit passt – passt nichts mehr, beginnt eine neue Station"],
          ["Effizienz", "E = Σt / (N · T)", "335 / 540 ≈ 0,62"]
        ] },
        { t: "svg", h: "Largest Candidate Rule: das Ergebnis", svg: PL.stationen(), cap: "Jede Zeile ist eine Station mit 60 s Takt. Die Kästchen mit Buchstaben sind die Aufgaben, **gelb** ist die Leerzeit bis zum Takt. Statt der theoretischen 6 braucht man **9 Stationen** – die Linieneffizienz liegt nur bei **62 %**, 205 s sind Leerlauf." },
        { t: "merke", h: "So rechnet Prof. Schröder", x: "In der Vorlesung ist eine Aufgabe **zulässig**, wenn ihre Vorgänger in einer **früheren** Station erledigt sind – deshalb stehen B, D, H und J jeweils allein (9 Stationen). Viele Lehrbücher erlauben den Vorgänger auch in **derselben** Station – dann kämen 7 Stationen heraus. Rechne in der Klausur wie in der Vorlesung und schreib deine Regel in einem Satz dazu." },
        { t: "svg", h: "Line Balancing: Leerzeiten abbauen", svg: PL.balancing(), cap: "**Links** brauchen die Stationen 8, 11, 5 und 6 Minuten – Station 2 liegt über dem Takt von 10 Minuten und bremst die ganze Linie. **Rechts** wird die Arbeit (30 Minuten) neu verteilt: 3 Stationen mit genau 10 Minuten, keine Leerzeit." },
        { t: "cards", h: "Vier Ansätze des Line Balancing", items: [
          ["🔀", "Arbeitsinhalte neu verteilen", "Schritte von überlasteten Stationen verschieben, Plätze zusammenlegen, U-Form, Nachfrage glätten"],
          ["🧑‍🔧", "Personal flexibilisieren", "Springer an Engpässen, Mitarbeiter für mehrere Stationen trainieren, 5S am Arbeitsplatz"],
          ["🛠️", "Technische Verfügbarkeit", "TPM, Rüstzeit senken mit SMED (internes in externes Rüsten umwandeln)"],
          ["📦", "Materialfluss neu gestalten", "Kanban (Pull) gegen Stau und Leerlauf, Puffer vor Stationen mit hoher Varianz"]
        ] },
        { t: "svg", h: "Fertigungssegmentierung", svg: PL.segmentierung(), cap: "**Links** stehen gleiche Maschinen zusammen – jedes Teil wandert kreuz und quer durch die Halle. **Rechts** bekommt jedes **Segment** (z. B. je Produkt) alle Maschinen in Flussrichtung. Folge: kleinere Lose, kürzere Durchlaufzeit, kleinerer Kapazitätsquerschnitt." },
        { t: "text", h: "Fabrik in der Fabrik und Zentrenfertigung", x: "Wie ein **Farnblatt** aus vielen kleinen, gleich aufgebauten Blättchen besteht (Fraktale), zerlegt man das große Werk in kleine, **selbstständige Einheiten** – jede arbeitet wie eine eigene Fabrik. Umgesetzt wird das als **Zentrenfertigung**: zusammengehörige Schritte in einem Zentrum, **Komplettbearbeitung**, innen nach dem **Fließprinzip**, mit eigener **Kostenverantwortung**. Motive: kürzere Durchlaufzeiten, weg vom starren **Taylor-Prinzip**, mehr Eigenverantwortung und Motivation (teilautonome Gruppen)." },
        { t: "svg", h: "Fördersysteme planen", svg: PL.kaskade(), cap: "Die Planung läuft wie eine Kaskade: Erst klären, **was** transportiert wird, dann **wie viel**, **wie weit**, **wie oft** und **wie schnell**. Erst dann wählt man das Fördermittel." },
        { t: "svg", h: "Stetig- oder Unstetigförderer?", svg: PL.foerder(), cap: "**Stetigförderer** bewegen das Gut ununterbrochen auf fester Strecke (Band, Rollenbahn). **Unstetigförderer** fahren einzeln und flexibel (Stapler, fahrerlose Transportsysteme, Kran). Weiter unterscheidet man nach Förderebene, Beweglichkeit und Antrieb." },
        { t: "check", q: "Ein Sondermaschinenbauer fertigt Einzelstücke nach Kundenwunsch. Welches Prinzip passt?", o: ["Werkstattfertigung", "Transferstraße", "Fließfertigung", "Reihenfertigung"], why: "Einzelfertigung mit hoher Vielfalt → **Werkstattfertigung** (oben links in der Produkt-Prozess-Matrix)." },
        { t: "check", q: "Beim Dreiecksverfahren setzt man zuerst …", o: ["das Paar mit dem größten Fluss nebeneinander", "das Lager in die Mitte", "die Station mit den meisten Maschinen", "das Paar mit dem kleinsten Fluss"], why: "Start ist immer das Paar mit dem **größten Materialfluss**." },
        { t: "check", q: "Verfügbar sind 7,5 Stunden, gefordert 450 Stück. Wie lang ist die Taktzeit?", o: ["60 s", "100 s", "45 s", "6 s"], why: "7,5 h = 27.000 s → 27.000 / 450 = **60 s**." },
        { t: "check", q: "Σt = 335 s, 9 Stationen, T = 60 s. Wie hoch ist die Linieneffizienz?", o: ["≈ 0,62", "≈ 0,38", "≈ 0,93", "≈ 1,61"], why: "E = 335 / (9 · 60) = 335 / 540 ≈ **0,62**." },
        { t: "check", q: "Was folgt aus der Fertigungssegmentierung?", o: ["Losgröße, Durchlaufzeit und Kapazitätsquerschnitt sinken", "Losgröße und Durchlaufzeit steigen", "Nur die Durchlaufzeit steigt", "Der Kapazitätsquerschnitt steigt"], why: "Laut Folie 193: **Losgröße ↓, Durchlaufzeit ↓, Kapazitätsquerschnitt ↓**." },
        { t: "check", q: "Ein Gabelstapler ist ein …", o: ["Unstetigförderer", "Stetigförderer", "Schwerkraftförderer", "Strömungsförderer"], why: "Er fährt **einzelne Fahrten** und ist flexibel → **Unstetigförderer** (flurgebunden, gleislos)." }
      ]
    },

    // =================================================================
    // Teil 2 – Kapitel 4: Produktionsplanung und -steuerung
    // =================================================================
    "logistik/p-pps": {
      title: "Produktionsplanung & -steuerung: Little, Kanban, Andler, OEE",
      min: 15,
      goals: [
        "Little’s Law erklären und Konsequenzen ableiten",
        "Steuerung und Regelung sowie PPS-Systeme (MRP II, Kanban) unterscheiden",
        "Die Anzahl der Kanbans berechnen",
        "Andlers optimale Losgröße herleiten",
        "Variantenbestimmungspunkt und Postponement-Matrix erklären",
        "Prioritätsregeln anwenden und die OEE berechnen"
      ],
      s: [
        { t: "intro", x: "Jetzt wird geplant und gesteuert: **Wie viele Aufträge** lasse ich gleichzeitig in die Fertigung? **Wer** löst die Produktion aus – der Plan oder der Verbrauch? **Wie groß** sind die Lose, **in welcher Reihenfolge** arbeite ich ab – und **wie gut** nutze ich meine Anlagen?" },
        { t: "svg", h: "Das Gesetz von Little", svg: PL.little(), cap: "Links kommen 90 Stück pro Stunde hinein, rechts gehen 90 hinaus. Drinnen sind im Schnitt **225 Stück** in Arbeit. Jedes Stück braucht deshalb **225 / 90 = 2,5 Stunden** – mehr Bestand im System heißt automatisch längere Durchlaufzeit." },
        { t: "cards", h: "Drei Konsequenzen aus Little’s Law", items: [
          ["🚦", "Bestände begrenzen", "WIP-Limits, Kanban – nicht beliebig viele Aufträge gleichzeitig freigeben"],
          ["🎟️", "Freigabe steuern", "Aufträge erst freigeben, wenn Kapazität frei ist – die Fertigung nicht „zumüllen“"],
          ["🍾", "Engpass managen", "Störungen am Engpass zuerst beheben, Rüstzeit senken, Qualität davor sichern"]
        ] },
        { t: "svg", h: "Steuerung oder Regelung?", svg: PL.regelung(), cap: "**Links** gibt die obere Ebene nur Vorgaben – was unten durch Störungen passiert, kommt oben nicht an. **Rechts** meldet die untere Ebene das Ergebnis zurück (gestrichelt): Das Ist wird mit dem Soll verglichen und korrigiert – ein **Regelkreis**." },
        { t: "table", h: "PPS-Systeme systematisieren", head: ["", "Steuerung", "Regelung"], rows: [
          ["Prinzip", "Bring-Prinzip (Push)", "Hol-Prinzip (Pull)"],
          ["Auslöser", "programmorientiert (Plan)", "verbrauchsorientiert (Verbrauch)"],
          ["Organisation", "zentrale Planung", "dezentrale Umsetzung"],
          ["Beispiel", "MRP II", "Kanban"]
        ] },
        { t: "svg", h: "MRP II: zentral in fünf Stufen", svg: PL.mrp(), cap: "Von oben nach unten wird immer **feiner** geplant: von Jahren und dem ganzen Unternehmen in Euro bis zu Stunden, einzelnen Maschinen und Arbeitsgängen. Im Produktionsprogramm (MPS) steht der **Primärbedarf**, die Materialbedarfsplanung (MRP) rechnet den **Sekundärbedarf**." },
        { t: "svg", h: "Kanban: Regelkreise mit Karten", svg: PL.kanban(), cap: "Zwischen den Stationen liegen kleine **Puffer** (Supermärkte). Nimmt eine Station Teile heraus, geht die **Kanban-Karte** zurück (gestrichelt) – erst dann fertigt die vorherige Station genau diese Menge nach. Der Verbrauch **zieht** die Produktion (Pull)." },
        { t: "bal", h: "Kanban: Regeln und Voraussetzungen", mid: "&", l: ["Regeln", ["Auslöser ist der **aktuelle Bedarf** der verbrauchenden Stelle", "weder **vorzeitig** noch **mehr** bestellen", "nicht mehr als benötigt erzeugen", "keine **fehlerhaften** Teile liefern"]], r: ["Voraussetzungen", ["harmonisiertes Produktionsprogramm", "materialflussorientierte Organisation", "**kurze Rüstzeiten**", "hohe **Disziplin** der Mitarbeiter"]] },
        { t: "formula", h: "Anzahl Kanbans", tex: R`\text{Kanbans} = \frac{B \cdot (Z_W + Z_P + Z_A) + \sigma \cdot z}{K_{LT}}`, items: [
          "B = Bedarf pro Zeiteinheit · σ = Standardabweichung des Bedarfs · z = z-Wert (99 % → 2,33)",
          "Z_W Wartezeit, Z_P Produktionszeit, Z_A Anlieferzeit – in **derselben Zeiteinheit** wie B!",
          "K_LT = Kapazität des Ladungsträgers (Teile je Behälter)",
          "Das Ergebnis immer **aufrunden**"
        ] },
        { t: "svg", h: "Rechenbeispiel aus der Vorlesung", svg: PL.kanbanzahl(), cap: "In 3 Stunden Wiederbeschaffungszeit werden **15 Stück** verbraucht, dazu **2,33 Stück** Sicherheit = 17,33 Stück. Ein Behälter fasst 3 Stück → 5,78 Behälter → **6 Kanbans** (aufrunden), die zusammen 18 Stück fassen." },
        { t: "formula", h: "Optimale Losgröße nach Andler", tex: R`K = B \cdot k + K_f \cdot \frac{B}{q} + \frac{q}{2} \cdot k \cdot i \;\Rightarrow\; -\frac{K_f \cdot B}{q^2} + \frac{k \cdot i}{2} = 0 \;\Rightarrow\; q^* = \sqrt{\frac{2 \cdot B \cdot K_f}{k \cdot i}}`, items: [
          "B · k = unmittelbare Kosten (Jahresmenge × variable Stückkosten) – hängen **nicht** von q ab",
          "K_f · B / q = Rüstkosten (Kosten je Rüstvorgang × Anzahl der Rüstvorgänge)",
          "q / 2 · k · i = Lagerhaltungskosten (Ø-Bestandswert × Lagerhaltungskostensatz)",
          "Nach q ableiten und null setzen – im Optimum sind **Rüstkosten = Lagerhaltungskosten**"
        ] },
        { t: "svg", h: "Andler im Bild", svg: PL.losgroesse(), cap: "Große Lose bedeuten **wenige Rüstvorgänge** (die Rüstkosten fallen), aber **viel Lager** (die Lagerhaltungskosten steigen). Die Gesamtkosten bilden ein „U“ – ihr Minimum liegt genau dort, wo beide Kostenarten **gleich hoch** sind: bei **q***." },
        { t: "svg", h: "Losgröße: Kompromiss mit der Variabilität", svg: PL.zyklus(), cap: "Drei Tischsorten A, B, C an einem Tag. **Oben** wird jede Sorte am Stück gefertigt – die nachgelagerte Lackierung (nur A und C) hat mal Stau, mal nichts zu tun. **Unten** wechseln kleine Lose ständig: Die Lackierung wird **gleichmäßig** versorgt, dafür muss öfter gerüstet werden." },
        { t: "svg", h: "Der Variantenbestimmungspunkt (OPP)", svg: PL.opp(), cap: "Der **Order Penetration Point** trennt die Kette: **links** wird nach Prognose gearbeitet (antizipativ), **rechts** erst nach dem Kundenauftrag (reaktiv). Make-to-Order setzt ihn ganz vorne an, Make-to-Stock ganz hinten." },
        { t: "merke", h: "Postponement", x: "Die **Variantenbildung** wird gezielt verzögert, bis der Kundenauftrag da ist. Durch **schnellere Prozesse** passen mehr Schritte in die Lieferzeit, die der Markt akzeptiert – der reaktive Teil der Kette wächst (bei Prof. Nehm heißt das: Der OPP wandert in der Kette „nach hinten“, Richtung Beschaffung). Folge: weniger Prognoserisiko, weniger Bestand." },
        { t: "svg", h: "Das Postponement-Speculation-Portfolio", svg: PL.postponement(), cap: "Waagerecht die **Form**: Ware auf Vorrat fertigen (Speculation) oder erst auf Auftrag (Postponement). Senkrecht die **Geografie**: dezentrale Lager (Speculation) oder ein zentrales Lager (Postponement). Oben rechts – beides verzögert – steht **Full Postponement**." },
        { t: "svg", h: "Prioritätsregeln im Vergleich", svg: PL.prioritaet(), cap: "Dieselben fünf Aufträge in vier Reihenfolgen. **Gelb** heißt: zu spät fertig. **SPT** hat die kleinste Durchschnittszeit (9,6 h), **EDD** die kleinste maximale Verspätung (7 h), **Moore** die wenigsten verspäteten Aufträge (nur einer)." },
        { t: "table", h: "Welche Regel für welches Ziel?", head: ["Regel", "Vorgehen", "optimiert"], rows: [
          ["FCFS", "nach Ankunft", "nichts – nur „fair“"],
          ["SPT", "kürzeste Belegungszeit zuerst", "Ø Fertigstellungs- bzw. Durchlaufzeit"],
          ["EDD", "früheste Fälligkeit zuerst", "maximale Verspätung"],
          ["Moore", "Start mit EDD, dann den längsten Auftrag bis zur ersten Verspätung ans Ende", "Anzahl verspäteter Aufträge"]
        ] },
        { t: "svg", h: "OEE – die Gesamtanlageneffektivität", svg: PL.oee(), cap: "Von **480 geplanten Minuten** gehen erst Stillstände ab (Verfügbarkeit 70 %), dann Geschwindigkeitsverluste (Leistung 80 %), dann Ausschuss (Qualität 90 %). Übrig bleiben **241,9 Minuten** echte Wertschöpfung = **50,4 %** – unter dem typischen Durchschnitt von etwa 60 %." },
        { t: "check", q: "In einer Fertigung sind 300 Stück in Arbeit, der Durchsatz beträgt 60 Stück pro Stunde. Wie lang ist die Durchlaufzeit?", o: ["5 h", "0,2 h", "18.000 h", "360 h"], why: "DLZ = Bestand / Durchsatz = 300 / 60 = **5 h**." },
        { t: "check", q: "Bei welchem Prinzip gibt es eine Rückmeldung von unten nach oben?", o: ["Regelung", "Steuerung", "Push-Prinzip", "programmorientierte Planung"], why: "Nur die **Regelung** hat eine Bottom-up-Rückkopplung (Feedback)." },
        { t: "check", q: "B = 10 Teile/h, Zeiten zusammen 1 h, σ · z = 4, ein Behälter fasst 5 Teile. Wie viele Kanbans?", o: ["3", "2", "14", "4"], why: "(10 · 1 + 4) / 5 = 2,8 → aufrunden: **3**." },
        { t: "check", q: "Im Andler-Optimum sind … gleich hoch.", o: ["Rüst- und Lagerhaltungskosten", "Rüst- und Herstellkosten", "Lagerhaltungs- und Fehlmengenkosten", "Fix- und Stückkosten"], why: "Die Gesamtkosten sind dort minimal, wo fallende **Rüstkosten** und steigende **Lagerhaltungskosten** gleich groß sind." },
        { t: "check", q: "Welche Regel minimiert die durchschnittliche Fertigstellungszeit?", o: ["SPT", "EDD", "FCFS", "Moore"], why: "**Shortest Processing Time**: Kurze Aufträge zuerst – dann warten im Schnitt alle am wenigsten." },
        { t: "check", q: "Verfügbarkeit 90 %, Leistung 80 %, Qualität 95 %. Wie hoch ist die OEE?", o: ["68,4 %", "88,3 %", "265 %", "72 %"], why: "0,9 · 0,8 · 0,95 = **0,684 = 68,4 %** – die drei Faktoren werden multipliziert." }
      ]
    },

    // =================================================================
    // Teil 2 – Kapitel 5: Lean Production als Managementkonzept
    // =================================================================
    "logistik/p-lean": {
      title: "Lean Production: Verschwendung erkennen und beseitigen",
      min: 11,
      goals: [
        "Die vier Leistungsarten der Produktion unterscheiden",
        "Effektivität, Effizienz und Lean abgrenzen",
        "Verschwendung mit TIMWOOD systematisieren",
        "Six Sigma und die Prinzipien von Lean Production erklären",
        "Das Ishikawa-Diagramm anwenden",
        "TPM und 5S mit ihren Zielen erklären"
      ],
      s: [
        { t: "intro", x: "Lean heißt **schlank**: das Gleiche – oder mehr – mit **weniger** Zeit, Fläche, Material und Bestand. Vorbild ist das **Toyota-Produktionssystem**. Der Kern: Alles, wofür der Kunde nicht bezahlt, ist **Verschwendung (Muda)**." },
        { t: "svg", h: "Leistungsarten der Produktion", svg: PL.leistungsarten(), cap: "In jedem Kästchen steigt nach rechts der **Aufwand**, nach oben der **Wert** für den Kunden. Nur bei der **Nutzleistung** wächst der Wert mit. Schein- und Blindleistung kosten, ohne Wert zu schaffen; die **Fehlleistung** vernichtet sogar Wert." },
        { t: "svg", h: "Effektivität, Effizienz und Lean", svg: PL.effektiv(), cap: "Nach oben steigt die **Effektivität** (die richtigen Dinge tun), nach rechts die **Effizienz** (die Dinge richtig tun). Ziel ist oben rechts. Unten rechts ist gefährlich: Man macht etwas **perfekt**, das niemand braucht." },
        { t: "merke", h: "Lokal oder gesamt?", x: "Traditionelle **Effizienz** optimiert oft **lokal** – eine Maschine, eine Abteilung. **Lean** optimiert das **Gesamtsystem**: Eine voll ausgelastete Maschine nützt nichts, wenn sich davor und dahinter Bestände stapeln." },
        { t: "svg", h: "Muda: sieben Arten der Verschwendung", svg: PL.muda(), cap: "Rund um **Muda** stehen die sieben Verschwendungsarten. Ihre Anfangsbuchstaben ergeben **TIMWOOD**: Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects." },
        { t: "table", h: "TIMWOOD mit Ursachen und Gegenmitteln", head: ["Art", "typische Ursache", "Gegenmittel"], rows: [
          ["Transport", "veraltetes Layout, gewachsenes Volumen", "Stationen näher anordnen, Arbeitsschritte takten und verknüpfen"],
          ["Inventory (Bestände)", "falsche Bestellregeln, Großmengen wegen niedriger Preise", "Bestände prüfen, Bestellpolitik anpassen, Pull-Prinzip"],
          ["Motion (Bewegung)", "lange Wege zu Material und Werkzeug, falsche Arbeitshöhe", "Lagerplatzbelegung prüfen, ergonomische Arbeitsplätze"],
          ["Waiting (Warten)", "nicht synchronisierte Abläufe, zu viel Staplerverkehr", "Material sicherstellen, Prozesszeiten genau planen, Mehrstationenbetrieb"],
          ["Overproduction", "Skaleneffekte erzwingen, falsche Prognosen", "an der Nachfrage ausrichten, Kanban, Produktion auf Abruf"],
          ["Overprocessing", "Technik- statt Kundensicht, Marketingversprechen", "nur das nötige Minimum, kontinuierlich verbessern"],
          ["Defects (Fehler)", "wenig Eigenverantwortung, Tagesgeschäft vor Verbesserung", "Mitarbeiterfeedback, Schulung, KVP"]
        ] },
        { t: "svg", h: "Six Sigma", svg: PL.sixsigma(), cap: "Die Balken zeigen **Fehler pro einer Million Möglichkeiten** je Sigma-Niveau (in Zehnerpotenzen gezeichnet). Merken musst du nur das Ziel: **6σ = 3,4 Fehler pro Million** = 99,99966 % fehlerfrei." },
        { t: "text", h: "Six Sigma kurz erklärt", x: "Six Sigma ist ein **Baukasten zur Prozessverbesserung**: Fehler, Verschwendung und **Schwankungen** werden systematisch gesenkt – alle Analysen und Entscheidungen beruhen auf **Statistik** (Normalverteilung wie in Teil 1, Folie 79/80). Umgesetzt wird in Projekten mit speziell geschulten **Belts** (White, Yellow, Green, Black)." },
        { t: "svg", h: "Die fünf Prinzipien von Lean Production", svg: PL.lean(), cap: "Das Dach **Lean Production** ruht auf fünf Säulen: nur tun, wofür der **Kunde** zahlt · **Prozesse** sichtbar machen (Wertstromanalyse) · **Fluss** ohne Warten (Pull) · **Kaizen** in kleinen Schritten · **Kennzahlen**, denn was man nicht misst, kann man nicht steuern." },
        { t: "svg", h: "Das Ishikawa-Diagramm", svg: PL.ishikawa(), cap: "Am **Kopf** steht das Problem. Jede **Gräte** ist eine Ursachen-Kategorie (6 M), daran hängen konkrete mögliche Ursachen. Im Team sammelt man so systematisch – und findet die **echte Ursache** statt nur Symptome." },
        { t: "svg", h: "Total Productive Maintenance (TPM)", svg: PL.tpm(), cap: "TPM will **null Verluste** an den Anlagen und steigert so die **OEE**. Die acht Prinzipien reichen von kleinen Verbesserungen (Kaizen) über die **Wartung durch die Bediener selbst** bis zur Sicherheit (null Unfälle)." },
        { t: "svg", h: "Die 5S-Methode", svg: PL.fuenfS(), cap: "Fünf Schritte zu einem Arbeitsplatz ohne Suchen: **aussortieren**, was nicht gebraucht wird – jedem Ding einen **festen Platz** geben – **sauber** halten, damit Fehler auffallen – **Standards** festlegen (Farben, Markierungen) – mit **Disziplin** dranbleiben." },
        { t: "check", q: "Ein Gabelstapler bringt Teile vom Wareneingang ins Lager. Welche Leistungsart ist das?", o: ["Scheinleistung", "Nutzleistung", "Fehlleistung", "Blindleistung"], why: "Nötig, schafft aber keinen Wert für den Kunden → **Scheinleistung**." },
        { t: "check", q: "„Die Dinge richtig tun“ beschreibt …", o: ["Effizienz", "Effektivität", "Lean", "Kaizen"], why: "**Effizient** = die Dinge richtig tun. Effektiv = die richtigen Dinge tun." },
        { t: "check", q: "Ein Mitarbeiter läuft täglich 20 Minuten, um Werkzeug zu holen. Welche Verschwendung ist das?", o: ["Motion", "Transport", "Overproduction", "Defects"], why: "Unnötige **Bewegung** von Mitarbeitern = **Motion** – Gegenmittel: 5S und ergonomische Arbeitsplätze." },
        { t: "check", q: "Six Sigma strebt an …", o: ["3,4 Fehler pro 1 Mio. Möglichkeiten", "6 Fehler pro 1 Mio. Möglichkeiten", "6 % Ausschuss", "3,4 % Ausschuss"], why: "6σ = **3,4 DPMO** = 99,99966 % innerhalb der Toleranz." },
        { t: "check", q: "Die Gräten des Ishikawa-Diagramms stehen für …", o: ["Ursachenkategorien wie Mensch, Maschine, Material", "Arbeitsschritte in zeitlicher Reihenfolge", "Kunden in verschiedenen Absatzregionen", "Kostenarten im Budget"], why: "Jede Gräte ist eine **Ursachen-Kategorie** (6 M), die zum Problem am Kopf führt." },
        { t: "check", q: "Welcher 5S-Schritt entfernt alles Überflüssige vom Arbeitsplatz?", o: ["Seiri (Sortieren)", "Seiton (Aufräumen)", "Seiso (Sauber halten)", "Shitsuke (Disziplin)"], why: "**Seiri**: Nicht benötigte Werkzeuge, Teile und Unterlagen kommen weg." }
      ]
    }
  });
  // ---------- Priming: drei Fragen vor jeder Lektion ----------
  window.PRIMING = window.PRIMING || {};
  Object.assign(window.PRIMING, {
    "logistik/s-beschaffung": [
      { q: "Ein Unternehmen macht 1 Mio. € Umsatz, die Hälfte davon sind Materialkosten, 5 % bleiben als Gewinn. Was bringt mehr Gewinn: 3 % weniger Materialkosten oder 3 % mehr Umsatz?", ph: "Schätz mal …", a: "**3 % weniger Materialkosten** = 15.000 € mehr Gewinn. 3 % mehr Umsatz bringen nur 5 % davon = 1.500 €. Für 15.000 € bräuchte man **30 %** mehr Umsatz – die **Hebelwirkung des Einkaufs**." },
      { q: "Warum hält ein Händler einen Sicherheitsbestand – und warum nicht einfach so viel, dass nie etwas fehlt?", ph: "weil …", a: "Die Nachfrage **schwankt** – der Sicherheitsbestand puffert das (SB = z · σ). 100 % Sicherheit wären aber **unendlich teuer**, deshalb liegt der optimale Servicegrad darunter." },
      { q: "Ein Autowerk bekommt Sitze genau in der Reihenfolge, in der die Autos am Band fahren. Wie heißt das wohl – und warum macht man das?", ph: "Just-in-…", a: "**Just-in-Sequence (JIS):** wegen der vielen Varianten (Farbe, Bezug) – so muss am Band niemand suchen und es braucht kein Lager." }
    ],
    "logistik/p-kosten": [
      { q: "Eine Bäckerei hat 100 € Fixkosten am Tag, jedes Brot kostet 2 € Zutaten. Was kostet ein Brot im Schnitt, wenn sie 10 Brote backt – und bei 100 Broten?", ph: "10 Brote: … € · 100 Brote: … €", a: "10 Brote: (100 + 20) / 10 = **12 €** · 100 Brote: (100 + 200) / 100 = **3 €**. Die Fixkosten verteilen sich auf mehr Brote – **Fixkostendegression**." },
      { q: "Das erste Flugzeug einer Serie braucht 100.000 Arbeitsstunden. Braucht das zweite genauso viele? Begründe.", ph: "Ich glaube …", a: "Nein – die Arbeiter **lernen**. Nach **Wright’s Law** sinkt die Zeit bei jeder Verdopplung der Menge auf etwa **80 %**: 2. Flugzeug ≈ 80.000 h, 4. ≈ 64.000 h." },
      { q: "Kann man Arbeit durch Maschinen ersetzen? Und kann man bei einem Fahrrad ein Rad durch einen zweiten Rahmen ersetzen?", ph: "Arbeit/Maschine: … · Rad/Rahmen: …", a: "Arbeit und Maschine sind teilweise **austauschbar** (substitutional). Rahmen und Räder nicht – sie werden im **festen Verhältnis** gebraucht (limitational)." }
    ],
    "logistik/p-grundlagen": [
      { q: "Ein iPhone wird in China montiert, die Teile kommen aus Taiwan, Korea, Japan und Europa. Welches Problem entsteht dadurch für die Logistik?", ph: "z. B. …", a: "**Raumzeitliche Verzögerung:** Die Teile müssen zwischen vielen Standorten transportiert werden – das kostet Zeit, Bestände unterwegs und viel Abstimmung." },
      { q: "Ein Stapler bringt 1 Tonne über 200 m und fährt leer zurück. Wie viele Meter ist er gefahren – und wie viele „Tonnenmeter“ hat er transportiert?", ph: "Meter: … · Tonnenmeter: …", a: "Gefahren: **400 m** (Fahrleistung, inklusive Leerfahrt). Transportiert: 1 t × 200 m = **200 tm** (Transportleistung)." },
      { q: "Warum könnte es sinnvoll sein, Maschinen in einer U-Form statt in einer geraden Linie aufzustellen?", ph: "weil …", a: "Ein- und Ausgang liegen **nebeneinander**: kurze Wege, ein Mitarbeiter kann Anfang und Ende bedienen, Teamwork und schnelle Nacharbeit." }
    ],
    "logistik/p-systeme": [
      { q: "Eine Werkstatt baut Sondermaschinen nach Kundenwunsch, ein anderes Werk füllt Millionen gleicher Flaschen ab. Sollten beide ihre Maschinen gleich aufstellen?", ph: "Nein, weil …", a: "Nein: Einzelstücke brauchen **Flexibilität** (Werkstattfertigung), Massenware braucht einen **Takt** (Fließfertigung, Transferstraße) – das zeigt die Produkt-Prozess-Matrix." },
      { q: "Ein Paketbote hat 10 Stopps. Wie viele mögliche Reihenfolgen gibt es ungefähr? Schätz!", ph: "etwa …", a: "10! = **3.628.800**. Bei 20 Stopps sind es schon 2,4 Trillionen – solche Probleme heißen **NP-schwer** und werden mit **Heuristiken** gelöst." },
      { q: "Eine Linie soll 450 Stück in 7,5 Stunden schaffen. Wie viele Sekunden darf eine Station höchstens pro Stück brauchen?", ph: "… Sekunden", a: "7,5 h = 27.000 s → 27.000 / 450 = **60 s** – das ist die **Taktzeit**." }
    ],
    "logistik/p-pps": [
      { q: "In einer Werkstatt liegen 200 Aufträge, pro Tag werden 50 fertig. Wie lange dauert es ungefähr, bis ein neuer Auftrag fertig ist?", ph: "… Tage", a: "200 / 50 = **4 Tage** – das ist **Little’s Law**: Durchlaufzeit = Bestand / Durchsatz." },
      { q: "Im Supermarkt wird nachgefüllt, was die Kunden aus dem Regal nehmen. Wie könnte man das auf eine Fabrik übertragen?", ph: "z. B. …", a: "Das ist die Idee von **Kanban (Pull)**: Die verbrauchende Station entnimmt aus einem Puffer, eine Karte geht zurück, und der Vorgänger fertigt genau das nach." },
      { q: "Fünf Aufträge warten an einer Maschine. Würdest du die kurzen oder die dringenden zuerst machen? Was gewinnt man jeweils?", ph: "kurze zuerst: … · dringende zuerst: …", a: "Kurze zuerst (**SPT**) → kleinste **Ø-Durchlaufzeit**. Dringende zuerst (**EDD**) → kleinste **maximale Verspätung**. Keine Regel ist in allem die beste." }
    ],
    "logistik/p-lean": [
      { q: "Wofür bezahlt ein Kunde gern: fürs Lackieren seines Autos, fürs Hin- und Herfahren der Karosserie in der Halle oder fürs Nacharbeiten eines Kratzers?", ph: "Lackieren: … · Fahren: … · Nacharbeit: …", a: "Nur das **Lackieren** schafft Wert (Nutzleistung). Das Fahren ist **Scheinleistung**, die Nacharbeit **Fehlleistung** – beides ist Verschwendung (Muda)." },
      { q: "Ist es gut, wenn eine Maschine immer zu 100 % ausgelastet ist?", ph: "Ja/Nein, weil …", a: "Nicht unbedingt: Das ist **lokale Effizienz**. Stapeln sich davor und dahinter Bestände, leidet das **Gesamtsystem** – Lean optimiert das Ganze." },
      { q: "Dein Schreibtisch ist chaotisch, du suchst ständig Sachen. Was würdest du in welcher Reihenfolge tun?", ph: "1. … 2. … 3. …", a: "Das ist **5S**: aussortieren (Seiri), feste Plätze (Seiton), sauber halten (Seiso), Regeln festlegen (Seiketsu), dranbleiben (Shitsuke)." }
    ]
  });
})();
