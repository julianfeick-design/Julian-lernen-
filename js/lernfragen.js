/*
 * 🎯 Lernfragen je Ordner
 * - official: Lernfragen, die die Profs selbst auf ihre Folien geschrieben haben („Wer die beantworten kann, ist perfekt vorbereitet“)
 * - pred: vermutete Prüfungsfragen im gleichen Stil für Teile ohne offizielle Lernfragen
 * Jede Frage: q = Frage, pts = Kernpunkte der Musterantwort (zum Abhaken), tip = Antwortaufbau, ref = Lektion zum Nachlesen
 */
window.LERNFRAGEN = window.LERNFRAGEN || {};

// =====================================================================
// 📦 Grundlagen & Funktionen der Logistik – Prof. Dr. Alexander Nehm
// =====================================================================
window.LERNFRAGEN.logistik = {
  sources: {
    nehm: { label: "Lernfragen Prof. Nehm (Folie 64)", official: true },
    pred: { label: "Vermutete Prüfungsfragen (Folieninhalte ohne Lernfrage)", official: false }
  },
  items: [
    { id: "n01", src: "nehm", ref: "logistik/l-begriff",
      q: "Was sind die sieben „R“ der Logistik und welches Ziel verfolgen sie?",
      tip: "Erst alle 7 R aufzählen (Reihenfolge egal), dann das Ziel in einem Satz – und den Zielkonflikt Service ↔ Kosten erwähnen.",
      pts: [
        "Das richtige **Produkt** in der richtigen **Menge**",
        "zur richtigen **Zeit** am richtigen **Ort**",
        "zu den richtigen **Kosten**",
        "mit den richtigen **Informationen** in der richtigen **Qualität**",
        "**Ziel:** den Empfänger **bedarfsgerecht versorgen** – zu **minimalen Kosten** (Definition nach Plowman)",
        "Spannungsfeld: **mehr Service kostet mehr** → Logistik muss Service und Kosten ausbalancieren"
      ] },
    { id: "n02", src: "nehm", ref: "logistik/l-begriff",
      q: "Welche Aufgaben erfüllen Transport, Umschlag und Lagerung (TUL)?",
      tip: "Jede Funktion mit ihrer „Überbrückung“ bzw. Veränderung nennen und ein kurzes Beispiel geben.",
      pts: [
        "**Transport** = **Raumüberbrückung**: Güter zwischen Standorten bewegen",
        "**Lagerung** = **Zeitüberbrückung**: Bestände bis zum Bedarf aufbewahren (z. B. Weihnachtsware ab September)",
        "**Umschlag/Kommissionierung** = Veränderung von **Menge und Sorte/Anordnung**: zusammenfassen, auflösen, sortieren, Aufträge zusammenstellen",
        "TUL sind die **Kernprozesse** der Logistik (und die klassischen Leistungen der Spedition)",
        "Weitere Aufgaben: Bestandsmanagement, Auftragsabwicklung, Verpackung, Steuerung des Netzwerks"
      ] },
    { id: "n03", src: "nehm", ref: "logistik/l-begriff",
      q: "Worin unterscheiden sich Logistik und Supply Chain Management (SCM)?",
      tip: "Als Gegenüberstellung antworten: Blickwinkel – Kooperationsumfang – Managementebene. Ein Satz zum Zusammenhang.",
      pts: [
        "**Logistik** steuert die logistischen Flüsse (Transport, Lager, Umschlag, Bestände, Auftragsabwicklung) – meist aus Sicht des **eigenen (fokalen) Unternehmens**",
        "**SCM** koordiniert die **gesamte, unternehmensübergreifende Kette** vom Rohstoff bis zum Endkunden",
        "Kooperation: Logistik = interne Bereiche + direkte Partner · SCM = Lieferanten, Dienstleister, Handel und Kunden **über mehrere Stufen**",
        "Ebene: Logistik operativ, taktisch, strategisch · SCM **stärker strategisch, integrativ, systemisch**",
        "Beide koordinieren **Güter-, Informations- und Finanzflüsse**; Logistikmanagement ist ein **Teil des SCM**"
      ] },
    { id: "n04", src: "nehm", ref: "logistik/l-begriff",
      q: "Welche Entwicklungsstufen hat die Logistik durchlaufen?",
      tip: "Chronologisch von den 1960ern bis heute – je Stufe ein Stichwort, was neu dazukam.",
      pts: [
        "**1960er: TUL-Logistik** – Transport, Umschlag, Lagerung als einzelne Funktionen",
        "**1970/80er: Funktionenintegration & Koordination** – 7 R, Kundenbedürfnisse im Fokus",
        "**1990er: Fließsystemlogistik / SCM** – ganze Kette als Netzwerk, Pull-Logik",
        "**2000er: global integrierte Netzwerklogistik** – AutoID, Automatisierung, Daten",
        "**Heute: Logistik in der VUCA-/BANI-Welt** – Digitalisierung, Nachhaltigkeit, De-/Globalisierung, demografischer Wandel → Supply Chains müssen **resilient** sein"
      ] },
    { id: "n05", src: "nehm", ref: "logistik/l-begriff",
      q: "Welcher Zielkonflikt besteht zwischen Logistikservice und Logistikkosten?",
      tip: "Beide Seiten der „Waage“ mit ihren Bestandteilen nennen, dann den Konflikt mit einem Beispiel zeigen.",
      pts: [
        "**Logistikservice** = marktgerechte Leistung: **Lieferzeit, Lieferqualität, Lieferflexibilität, Lieferbereitschaft/-zuverlässigkeit**",
        "**Logistikkosten** = minimaler Aufwand: **Bestände, Handling, Transport, Systeme**",
        "Konflikt: **mehr Service → höhere Kosten** (z. B. Same-Day-Lieferung braucht mehr Bestand nah am Kunden und mehr Transporte)",
        "Ziel ist ein **ausbalanciertes Optimum** – nicht maximaler Service, nicht minimale Kosten",
        "Verwandt: Effizienz ↔ Verfügbarkeit (zu wenig Puffer → bei Störungen nicht lieferfähig)"
      ] },
    { id: "n06", src: "nehm", ref: "logistik/l-markt",
      q: "Wie setzt sich das Logistikmarktvolumen in Deutschland zusammen?",
      tip: "Zahl nennen, dann die Zusammensetzung erklären – und warum man von Kosten statt Umsatz spricht.",
      pts: [
        "Volumen ca. **331 Mrd. €** (2024) – **drittgrößter Wirtschaftsbereich** Deutschlands",
        "= **Eigenleistungen von Industrie und Handel** (insourced: eigenes Lager, innerbetrieblicher Materialfluss)",
        "+ **extern vergebene Logistikdienstleistungen** (outsourced: Spedition, Transport, KEP, Kontraktlogistik)",
        "Verhältnis laut Logistik-Folie etwa **50 : 50** (in VBL 1 nennt Prof. Nehm ca. 40 % outsourced / 60 % insourced)",
        "Deshalb **Logistikkosten**, nicht Umsatz: Eigenleistungen werden nicht verkauft"
      ] },
    { id: "n07", src: "nehm", ref: "logistik/l-markt",
      q: "Welche Faktoren begründen die hohe Bedeutung Deutschlands als Logistikstandort?",
      tip: "Vier Faktoren nennen und jeweils kurz begründen.",
      pts: [
        "**Hohe Kaufkraft** – großer Absatzmarkt (rund 85 Mio. Einwohner, bevölkerungsreichstes Land der EU)",
        "**Zentrale Lage in Europa** – Transitland Nord–Süd und West–Ost, starke Seehäfen (Hamburg, Bremerhaven, Wilhelmshaven)",
        "**Exportnation mit globalen Lieferketten** – starke Handelsverflechtung, Import und Export",
        "**Effizienz und Zuverlässigkeit** – starke Infrastruktur, Top-Platzierung im Logistics Performance Index der Weltbank"
      ] },
    { id: "n08", src: "nehm", ref: "logistik/l-markt",
      q: "Welche wesentlichen Marktsegmente und Akteure kennzeichnen die Logistikwirtschaft?",
      tip: "Segmente nach Größe (Folie 21) nennen, dann Wertschöpfungsketten und typische Akteure zuordnen.",
      pts: [
        "Größtes Segment: **Kontraktlogistik** (ca. 80 Mrd. €), dann KMU-Inhouse-Logistik (44), allg. Ladungsverkehr/FTL (36), globale Luft- & Seefracht (33), **KEP (ca. 27,4 Mrd. €)**",
        "Vier Wertschöpfungsketten: **Ladungsverkehre, Stückgutverkehr, Paketdienste, Kontraktlogistik**",
        "Drei Gruppen: internationale Transport-/Logistiksysteme · Bulk- und Direktladungsverkehre · handlingsbedürftige Industrie- und Konsumgüterlogistik",
        "**Akteure:** Verlader (Industrie/Handel mit Eigenlogistik), Transportunternehmen/Frachtführer, Speditionen, KEP-Dienste, Kontraktlogistiker (z. B. DHL, DSV/Schenker, Dachser, Kühne + Nagel)"
      ] },
    { id: "n09", src: "nehm", ref: "logistik/l-konzeption",
      q: "Wie unterscheiden sich Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik?",
      tip: "Am Güterfluss eines Herstellers entlang erklären: von wo – bis wo – mit Beispiel.",
      pts: [
        "**Beschaffungslogistik:** vom Lieferanten / Beschaffungsmarkt bis zum Wareneingang bzw. Rohmateriallager",
        "**Produktionslogistik:** Materialfluss **innerhalb** der Produktion (Lager → Fertigung → Fertigwarenlager)",
        "**Distributionslogistik:** vom Fertigwarenlager **zum Kunden** bzw. Absatzmarkt",
        "**Entsorgungslogistik:** **Rückflüsse** – Retouren, Verpackungen, Abfälle, Recycling (Reverse Logistics)",
        "Zusammen bilden sie die **funktionalen Logistiksysteme** eines Herstellers"
      ] },
    { id: "n10", src: "nehm", ref: "logistik/l-konzeption",
      q: "Welche Funktionen erfüllen Güter-, Informations- und Finanzflüsse in Logistiksystemen?",
      tip: "Jeden Fluss mit Richtung und Funktion erklären; beim Informationsfluss die drei Zeitpunkte nennen.",
      pts: [
        "**Güterfluss:** bewegt die Ware vom Lieferanten über Hersteller und Handel zum Endkunden (Raum-, Zeit-, Mengenänderung)",
        "**Informationsfluss** (in **beide Richtungen**): Bestellungen, Bedarfe, Status, Avis – steuert den Güterfluss",
        "Informationen **vorauseilend** (t0, z. B. Lieferavis), **begleitend** (t1, z. B. Lieferschein), **nachfolgend** (t2, z. B. Rechnung, Abliefernachweis)",
        "**Finanzfluss:** Zahlungen fließen **entgegen** dem Güterstrom",
        "Die drei Flüsse folgen **eigenen Wegen** und müssen koordiniert werden"
      ] },
    { id: "n11", src: "nehm", ref: "logistik/l-konzeption",
      q: "Wie sind logistische Netzwerke aufgebaut und welche Funktionen erfüllen ihre Knoten?",
      tip: "Bausteine (Knoten, Kanten) → Strukturtypen (ein-, mehrstufig, kombiniert) → Funktionen und Nachteil der Knoten.",
      pts: [
        "Netzwerk = **Knoten** (Lager, Umschlagpunkte, Häfen) + **Kanten** (Transportwege)",
        "**Einstufig:** direkter Güterfluss Lieferant → Empfänger · **mehrstufig:** indirekt über Knoten · **kombiniert:** beides",
        "Knotentypen: **Auflösungspunkt (break-bulk)** und **Sammelpunkt (consolidation point)**",
        "Funktionen der Knoten: **Bündelung** (z. B. Sammelgut-Hauptlauf), **schnelle Bedarfsbefriedigung** (zeitliche Nähe zum Kunden), **Sortimentsbildung** (Kommissionierung)",
        "Nachteil: Knoten verursachen **Kosten** – Umschlag, Lagerung, Kapitalbindung"
      ] },
    { id: "n12", src: "nehm", ref: "logistik/l-konzeption",
      q: "Welche Aufgaben werden auf strategischer, taktischer und operativer Ebene der Logistikplanung getroffen?",
      tip: "Je Ebene Zeithorizont + zwei Beispiele.",
      pts: [
        "**Strategisch** (langfristig, Struktur): Standortwahl eines Auslieferungslagers, Systemlieferanten wählen, Layoutplanung, Make-or-buy",
        "**Taktisch** (mittelfristig, vorhandene Strukturen nutzen): Prozessketten optimieren, Transportmittel wählen, Serviceniveau festlegen, Umschlagpunkte bestimmen",
        "**Operativ** (kurzfristig, konkrete Aufträge): Feinabrufe, Transportaufträge auslösen, kurzfristige Tourenplanung",
        "Die Ebenen bauen aufeinander auf: Strategie setzt den Rahmen für Taktik und Tagesgeschäft"
      ] },
    { id: "n13", src: "nehm", ref: "logistik/l-konzeption",
      q: "Was kennzeichnet das System-, Fluss- und Querschnittsfunktionsdenken in der Logistik?",
      tip: "Die drei Denkweisen der Logistikkonzeption je mit Kerngedanke und Beispiel.",
      pts: [
        "**Systemdenken / Gesamtkostendenken:** das **Gesamtsystem** optimieren, nicht Teilbereiche – Trade-offs beachten",
        "Beispiel Systemdenken: Ersatzteile per **teurer Luftfracht** statt großer Lager in jedem Land → Gesamtkosten sinken",
        "**Flussdenken:** durchgängiger, **ununterbrochener Güter- und Informationsfluss**; Wartezeiten, große Lose und Bestände gelten als Unterbrechung",
        "**Querschnittsfunktionsdenken:** Logistik durchdringt **alle Bereiche**; Schnittstellen bereichsübergreifend optimal gestalten, trotz konkurrierender Ziele"
      ] },
    { id: "n14", src: "nehm", ref: "logistik/l-konzeption",
      q: "Welche Vor- und Nachteile entstehen durch hohe Lagerbestände?",
      tip: "Gegenüberstellung + Fazit (Bestände gezielt steuern statt pauschal abbauen).",
      pts: [
        "**Vorteile:** reibungslose Produktion, **prompte Lieferfähigkeit**, **Puffer gegen Störungen**, wirtschaftliche Losgrößen, konstante Auslastung",
        "**Nachteile:** **Kapitalbindung** und Lagerkosten, Risiko von Veralterung/Schwund",
        "Bestände **verdecken Probleme** wie Wasser die Felsen: störanfällige Prozesse, unabgestimmte Kapazitäten, Ausschuss, mangelnde Liefertreue",
        "Gegenposition: Bestände sind **„nicht böse“, sondern Working Capital** – z. B. Sicherheitsbestände gegen Versorgungsrisiken, Bündelung spart Transporte",
        "Fazit: Bestände **bewusst steuern** – Balance aus Bestands- und Transportkosten"
      ] },
    { id: "n15", src: "nehm", ref: "logistik/l-prinzipien",
      q: "Was versteht man unter enger Kopplung logistischer Prozesse und wie lässt sich damit der Bullwhip-Effekt reduzieren?",
      tip: "Erst Bullwhip-Effekt erklären (mit Ursachen), dann lose vs. enge Kopplung, dann die Wirkung.",
      pts: [
        "**Bullwhip-Effekt:** kleine Schwankungen der Endkundennachfrage **schaukeln sich** entlang der Kette zu immer größeren Bestell- und Bestandsschwankungen **auf**",
        "Ursachen: **falsche Prognosen, Informationsasymmetrien, Bündelbestellungen, Preisschwankungen**",
        "**Lose Kopplung:** Infos kommen verzögert an → hohe Puffer, Fehlmengen, lange Durchlaufzeiten",
        "**Enge Kopplung:** **echte Nachfragedaten früh an alle Stufen** weitergeben (Informationsaustausch)",
        "Wirkung: Stufen bestellen nicht mehr auf Basis verzerrter Bestellungen → **Aufschaukeln wird gebremst**, weniger Bestände"
      ] },
    { id: "n16", src: "nehm", ref: "logistik/l-prinzipien",
      q: "Was bedeutet Postponement und welche Vorteile bietet dieses Gestaltungsprinzip?",
      tip: "Definition mit Fachbegriff (Variantenbestimmungspunkt), Beispiel Notebook, dann Vorteile.",
      pts: [
        "**Verschieben der Variantenbildung**: Der **Variantenbestimmungspunkt (Order Penetration Point)** wird in der Kette **nach hinten** verschoben",
        "Bis dahin wird ein **neutrales Basisprodukt** gefertigt/gelagert, erst **nach dem Kundenauftrag** individualisiert (Push → Pull)",
        "Beispiel: Notebook-Basisgerät, Komponenten/Software erst nach Bestellung; auch Auto- und Bekleidungsindustrie",
        "Vorteile: **weniger Sicherheitsbestände, weniger Fehlmengen, geringeres Veralterungsrisiko**, mehr reaktive statt spekulative Prozesse",
        "Nachteil: etwas **längere Lieferzeit** ab Auftrag"
      ] },
    { id: "n17", src: "nehm", ref: "logistik/l-prinzipien",
      q: "Welche Formen der Transportbündelung gibt es und welche Vorteile bieten sie?",
      tip: "Warum bündeln (Fixkosten) → vier Formen je mit Beispiel und Vorteil.",
      pts: [
        "Warum: Transporte haben **hohe Fixkosten** → Auslastung entscheidet über Wirtschaftlichkeit (**Fixkostendegression**)",
        "**Sendungsverdichtung:** Sendungen einer Region im Hauptlauf zusammenfassen → bessere Auslastung, weniger Fahrten (z. B. Gebietsspedition)",
        "**Tourenverdichtung:** Verkehre mehrerer Versender in einem Gebiet zusammenfassen → kürzere Wege pro Stopp, mehr Empfänger je Tour",
        "**Knotenpunktsysteme (Hub-and-Spoke):** Relationen über einen gemeinsamen Knoten → weniger, besser ausgelastete Fahrzeuge, höhere Frequenz (z. B. Sammelgut-Hubs, Luftfracht)",
        "**Ringsysteme:** an jeder Station Ladung für alle folgenden aufnehmen → **Unpaarigkeit** wird abgefedert (z. B. Round-the-World-Lines)"
      ] },
    { id: "n18", src: "nehm", ref: "logistik/l-lernfragen",
      q: "Welche Funktionen übernehmen die einzelnen Knoten der Transportkette (Filminhalte)?",
      tip: "Die Kette aus dem Film entlanggehen: Knoten → Funktion. Fachbegriffe Quelle, Vorlauf, Umschlag, Hauptlauf, Nachlauf, Senke benutzen.",
      pts: [
        "**Fabrik in Vietnam** = Quelle: Produktion und Bereitstellung der Ware",
        "**Containerterminal (Abgangshafen):** Umschlag vom Vorlauf (Binnenschiff/Lkw) aufs Seeschiff, Bündelung in Containern",
        "**Terminal Los Angeles:** Umschlag vom Seeschiff auf den Lkw, Container wird weitergeleitet",
        "**Umschlaglager / Logistikzentrum:** Container auflösen, einlagern, **kommissionieren**, Sendungen für die Zustellung bilden",
        "**Zustellung/Senke:** letzte Meile zum Endkunden – Ladeeinheit wird immer kleiner: **Container → Palette → Paket → Tüte**"
      ] },
    { id: "n19", src: "nehm", ref: "logistik/l-lernfragen",
      q: "Welche Unternehmen und Berufsgruppen sind an der Transportkette im Film beteiligt und welche Aufgaben übernehmen sie?",
      tip: "Unternehmen mit Rolle nennen, dann typische Berufe entlang der Kette. Ergänze Berufe aus deinen Filmnotizen.",
      pts: [
        "**Hersteller:** Samsung (Fabrik in Vietnam) – produziert und stellt bereit",
        "**Reedereien** (Evergreen, MSC, Maersk) – Seetransport im Hauptlauf; **Terminaldienstleister** – Umschlag im Hafen",
        "**Spedition/LDL** (z. B. CDL) – organisiert den Weitertransport; **Amazon** als Händler und LDL (Fulfillment, Flex Delivery, Prime Air); **Paketdienste** UPS/FedEx",
        "Berufsgruppen z. B.: **Berufskraftfahrer**, **Hafen-/Terminalarbeiter und Kranführer**, **Schiffsbesatzung**, **Speditionskaufleute/Disponenten**, **Fachkräfte für Lagerlogistik**, **Zusteller**",
        "Beziehung Amazon → Privatkunde = **B2C**"
      ] },
    { id: "n20", src: "nehm", ref: "logistik/l-lernfragen",
      q: "Welche Verkehrsträger werden im Film eingesetzt und warum ist ihr Zusammenspiel notwendig?",
      tip: "Verkehrsträger je Abschnitt nennen, dann begründen (Stärken/Schwächen ergänzen sich) – mit einem Problem aus dem Film abschließen.",
      pts: [
        "**Binnenschiff/Lkw** im Vorlauf zum Hafen · **Seeschiff** im Hauptlauf (ca. **30 Tage**) · **Lkw** zum Umschlaglager · **Sprinter/Transporter** auf der letzten Meile",
        "Kein Verkehrsträger kann alles: Seeschiff = **große Mengen, günstig über weite Strecken**, aber nur Hafen zu Hafen; Lkw = **flexibel, Haus zu Haus**",
        "Deshalb **intermodale Kette** mit Container als einheitlicher Ladeeinheit – Umschlag ohne Umpacken",
        "Schnittstellen (Umschlag) sind **kritisch**: Störungen wie **Kanal-Blockaden** oder überlastete Häfen verzögern die ganze Kette",
        "Lösungsideen: mehr **Puffer**, Track & Trace/**Supply-Chain-Visibility**, alternative Routen"
      ] },

    // ---------- vermutete Prüfungsfragen ----------
    { id: "p01", src: "pred", ref: "logistik/l-konzeption",
      q: "Nennen Sie die Elemente des Lieferservice und je eine Kennzahl bzw. Einflussgröße.",
      tip: "Vier Elemente, je Definition + Kennzahl/Einfluss.",
      pts: [
        "**Lieferzeit:** Zeit von Auftragserteilung bis Wareneingang beim Kunden – beeinflusst durch Auftragsbearbeitung, Transport, Lagerstandort",
        "**Lieferzuverlässigkeit:** Wahrscheinlichkeit, die Lieferzeit einzuhalten – Kennzahl **Lieferbereitschaftsgrad (%)**",
        "**Lieferqualität:** Lieferung wie bestellt und unbeschädigt – Kennzahl **Retourenquote (%)**",
        "**Lieferflexibilität:** Anpassung an Kundenwünsche (Termin, Menge, Ort) – schwer messbar"
      ] },
    { id: "p02", src: "pred", ref: "logistik/l-konzeption",
      q: "Welche Gütertransformationen bewirken die logistischen Prozesse?",
      tip: "Prozess → Transformation als Zuordnung.",
      pts: [
        "**Lagern → Zeitänderung**",
        "**Transportieren → Raumänderung**",
        "**Umschlagen** (zusammenfassen, auflösen) **→ Mengenänderung**; Sortieren → **Sortenänderung**",
        "**Verpacken, Signieren →** Änderung der logistischen Eigenschaften (TUL-Eigenschaften)",
        "**Aufträge übermitteln/bearbeiten →** Änderung der logistischen Determiniertheit"
      ] },
    { id: "p03", src: "pred", ref: "logistik/l-prinzipien",
      q: "Erläutern Sie statistische Ausgleichseffekte und Standardisierung als Gestaltungsprinzipien der Logistik.",
      tip: "Je Prinzip: Idee – Anwendung – Nutzen.",
      pts: [
        "**Statistischer Ausgleich:** unabhängige, schwankende Nachfragen zusammenfassen → Schwankungen gleichen sich teilweise aus (**Gesetz der großen Zahl**)",
        "Anwendung: **Zentralisierung von Lagern**, Kapazitätspools, Gleichteile → weniger Sicherheitsbestand",
        "**Standardisierung materiell:** Ladehilfsmittel (Europalette), Verpackung, Teile → rationelles Handling, Automatisierung",
        "**Standardisierung immateriell:** Informationen (NVE, **EDIFACT**) und Abläufe → reibungsloser Datenaustausch, Planbarkeit",
        "Gemeinsames Ziel: **Unsicherheit und Komplexität** beherrschen – Kosten senken, Leistung steigern"
      ] },
    { id: "p04", src: "pred", ref: "logistik/l-prinzipien",
      q: "Analysieren Sie mit Hilfe der PESTEL-Analyse die wichtigsten Trends der Logistikwirtschaft.",
      tip: "Alle sechs Buchstaben mit je einem Trend und seiner Wirkung auf Logistiker.",
      pts: [
        "**Political:** Infrastrukturausbau, Förderprogramme, Handelspolitik",
        "**Economic:** E-Commerce-Wachstum, Protektionismus, Kostendruck",
        "**Social:** **Fahrer-/Fachkräftemangel**, demografischer Wandel, Urbanisierung",
        "**Technological:** Digitalisierung, Automatisierung, autonomes Fahren",
        "**Ecological:** CO₂-Reduktion, alternative Antriebe · **Legal:** Mobilitätspaket, Lenk-/Ruhezeiten, Maut, Mindestlohn"
      ] }
  ]
};

// =====================================================================
// 🚚 VBL 1 – Teil A: Einführung in die Spedition (Prof. Dr. Alexander Nehm)
//            Teil B: Straßengüterverkehr in Europa (Uwe Hasselberg)
// =====================================================================
window.LERNFRAGEN.vbl1 = {
  sources: {
    nehm: { label: "Lernfragen Prof. Nehm – Einführung in die Spedition (Folie 51)", official: true },
    pred: { label: "Vermutete Prüfungsfragen – Straßengüterverkehr (Hasselberg)", official: false }
  },
  items: [
    { id: "n01", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Worin unterscheiden sich Versender, Spedition, Frachtführer und Empfänger? In welchem Verhältnis stehen diese?",
      tip: "Erst jede Rolle definieren, dann die drei Verträge mit Paragraphen nennen (Dreieck) und den Warenfluss ergänzen.",
      pts: [
        "**Versender/Verlader:** Industrie- oder Handelsunternehmen, **Auftraggeber**, übergibt das Gut (fährt er selbst = Werkverkehr)",
        "**Spediteur:** **besorgt/organisiert** die Versendung, beauftragt Frachtführer – Mittler und „Architekt“ der Transportkette",
        "**Frachtführer:** **führt die Beförderung durch** – mit eigenen Fahrzeugen (Lkw, Bahn, Reederei, Airline)",
        "**Empfänger:** Käufer, an den das Gut abgeliefert wird",
        "Verhältnisse: Versender ↔ Empfänger = **Kaufvertrag** · Versender ↔ Spediteur = **Speditionsvertrag § 453 HGB** · Spediteur ↔ Frachtführer = **Frachtvertrag § 407 HGB**"
      ] },
    { id: "n02", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Welche Leistungen erbringen Spediteur und Frachtführer?",
      tip: "Gegenüberstellung: organisieren vs. durchführen – mit je 3 konkreten Leistungen.",
      pts: [
        "**Spediteur – organisieren:** Transportkette planen, Beförderungsmittel und Weg wählen, ausführende Unternehmen auswählen und beauftragen",
        "Spediteur außerdem: **Verträge schließen**, Informationen und Weisungen weitergeben, Ansprüche sichern; **bündelt** Sendungen (Verhandlungsmacht)",
        "Spediteur klassisch: **TUL** (Transport, Umschlag, Lagerung) plus Zusatzleistungen (VAS, Zoll …)",
        "**Frachtführer – durchführen:** befördert das Gut mit eigenen Fahrzeugen und **liefert es ab** (§ 407 HGB)",
        "Fährt der Spediteur selbst, ist er zugleich Frachtführer (**Selbsteintritt**)"
      ] },
    { id: "n03", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Warum können Warenfluss und Vertragsbeziehungen unterschiedlich verlaufen?",
      tip: "Am Beispiel Nike → Snipes erklären: physischer Weg vs. Vertragsweg.",
      pts: [
        "Der **Warenfluss** läuft physisch: Verkäufer → **Frachtführer** → Käufer",
        "Die **Verträge** laufen über den **Spediteur** (Speditionsvertrag mit dem Versender, Frachtvertrag mit dem Frachtführer)",
        "Der Spediteur **organisiert nur** – die Ware kommt bei ihm gar nicht vorbei",
        "Beispiel: Nike beauftragt Schenker, Schenker beauftragt Willi Betz; die Schuhe fahren direkt von Nike zu Snipes"
      ] },
    { id: "n04", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Welche Entscheidungen umfasst die Besorgung nach § 454 HGB?",
      tip: "Die drei Bereiche Planung – Ausführung – Überwachung mit ihren Entscheidungen; „Besorgen“ definieren.",
      pts: [
        "**Besorgen** = kaufmännisch-organisatorische **Auswahl und Kontrolle** der Verträge mit Frachtführern, Lagerhaltern und sonstigen Dienstleistern",
        "**Planung:** Wahl des **Beförderungsmittels** und des **Beförderungswegs** (Kette aus Vor-, Haupt-, Nachlauf)",
        "**Ausführung:** Auswahl der **ausführenden Unternehmer**, Abschluss der Fracht-, Lager- und Speditionsverträge, **Informationen und Weisungen** erteilen",
        "**Überwachung:** **Sicherung von Schadenersatzansprüchen** (Abweichungen und Schäden dokumentieren)"
      ] },
    { id: "n05", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Wann hat ein Spediteur hinsichtlich der Beförderung Frachtführerpflichten?",
      tip: "Drei Fälle mit Paragraph – und den Satz „Rechte und Pflichten eines Frachtführers“ verwenden.",
      pts: [
        "**Selbsteintritt (§ 458 HGB):** Er führt die Beförderung selbst mit eigenen Fahrzeugen durch",
        "**Spedition zu festen Kosten (§ 459 HGB):** Es ist ein Festpreis vereinbart, der die Beförderungskosten einschließt",
        "**Sammelladung (§ 460 HGB):** Er bündelt Sendungen mehrerer Versender auf eigene Rechnung in einer Sammelladung",
        "In diesen Fällen hat er **hinsichtlich der Beförderung die Rechte und Pflichten eines Frachtführers** (z. B. Frachtführerhaftung)"
      ] },
    { id: "n06", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Was wird in den ADSp geregelt?",
      tip: "Was sind die ADSp – wofür gelten sie – worin weichen sie vom HGB ab – wann nicht.",
      pts: [
        "**ADSp = Allgemeine Deutsche Spediteurbedingungen** – die **AGB**, auf deren Grundlage fast alle Speditionen arbeiten",
        "Regeln die Zusammenarbeit bei **speditionsüblichen Leistungen**: Speditions-, Fracht- und Lagergeschäfte",
        "Weichen **teilweise vom HGB ab**, vor allem bei der **Haftung** – zugunsten von Spediteur, Frachtführer bzw. Lagerhalter",
        "Gelten **nicht**, wenn **Verbraucher** beteiligt sind (dann andere AGB, z. B. Umzug, Paketdienste)"
      ] },
    { id: "n07", src: "nehm", ref: "vbl1/a-grundlagen",
      q: "Welche Gründe gibt es, weshalb manche Verlader ihre Logistik selbst („insourced“) erledigen und warum andere Logistikaufgaben an externe Dienstleister („outsourced“) vergeben?",
      tip: "Nach den Kriterien Mengen & Netz, Kompetenz, Investitionen, Steuerung, Abhängigkeit gegenüberstellen.",
      pts: [
        "**Mengen & Netz:** Outsourcing bei **schwankenden Mengen und vielen Zielorten** (Dienstleister bündelt) · Insourcing bei **stabilen Mengen auf starken eigenen Relationen**",
        "**Kompetenz:** Insourcing, wenn Logistik **strategisch zentral** ist · Outsourcing, wenn **Spezialwissen extern** verfügbar ist",
        "**Investitionen:** Outsourcing vermeidet **Kapitalbindung** in Fahrzeuge, Lager, IT",
        "**Steuerung:** Outsourcing, wenn die **Leistung messbar** und vertraglich steuerbar ist · sonst eigene Kontrolle behalten",
        "**Abhängigkeit:** gegen Outsourcing bei **hohen Wechselkosten / wenigen Anbietern** · dafür, wenn mehrere geeignete Anbieter da sind",
        "Trend: Verlader konzentrieren sich aufs **Kerngeschäft** → mehr Outsourcing"
      ] },
    { id: "n08", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Welche Auftragsdaten braucht die Verkehrsträgerwahl?",
      tip: "Fünf Datengruppen nennen und jeweils sagen, warum sie die Wahl beeinflussen.",
      pts: [
        "**Masse, Maße, Verpackung** – begrenzen Lade- und Gewichtskapazität (leichtes, sperriges Gut braucht viel Raum)",
        "**Bereitstellung und Lieferfenster** – z. B. Abholzeit, **Cut-off** im Terminal, Zustelltermin",
        "**Wert und Empfindlichkeit** – Versicherung, Temperatur, Schadensrisiko",
        "**Infrastruktur und Schnittstellen** – z. B. kein Gleisanschluss beim Empfänger, Rampe/Ladebordwand",
        "**Auftrag und Dokumentation** – Umladeverbot, Zollauftrag, Zustellnachweis"
      ] },
    { id: "n09", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Warum ist die Tür-zu-Tür-Laufzeit wichtiger als die reine Fahrgeschwindigkeit?",
      tip: "Kundensicht + was zur Laufzeit alles dazugehört + Beispiel.",
      pts: [
        "Der Kunde erlebt die **gesamte Laufzeit** vom Abholen bis zur Zustellung",
        "Dazu gehören **Vorlauf, Umschlag, Wartezeiten** (Cut-off, Abfahrtszeiten), Hauptlauf und **Nachlauf**",
        "Ein schneller Hauptlauf nützt wenig, wenn die **Schnittstellen** lange dauern",
        "Beispiel: Luftfracht ist im Hauptlauf schnell, aber mit Vor-/Nachlauf und Abfertigung kann der Lkw auf mittleren Strecken schneller sein"
      ] },
    { id: "n10", src: "nehm", ref: "vbl1/a-markt",
      q: "Was sind die besonderen Merkmale des Speditions- und Logistikmarktes? Kennen Sie die wichtigsten Player?",
      tip: "Struktur (fragmentiert, Grenzen verschwimmen) + Größe + 5–6 Player nennen.",
      pts: [
        "Sehr **fragmentiert**: viele kleine und mittlere Speditionen neben wenigen Großen",
        "**Grenzen verschwimmen**: „Spedition“ ist von anderen Logistikdienstleistern kaum noch sauber zu trennen",
        "Großer Markt (ca. 330 Mrd. € Logistikkosten), **Wandel** zu mehr Zusatzleistungen und Kontraktlogistik",
        "**Wichtige Player:** DHL, DB Schenker (heute DSV), Dachser, Kühne + Nagel, Hermes, UPS, DPD, Rhenus"
      ] },
    { id: "n11", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Hinsichtlich welcher Kriterien unterscheiden sich die einzelnen Verkehrsträger?",
      tip: "Kriterien nennen und am Vergleich Straße / Schiene / Wasser / Luft zeigen.",
      pts: [
        "Kriterien: **Zuverlässigkeit, Schnelligkeit, Massenleistungsfähigkeit/Kapazität, Netzdichte (Haus-zu-Haus?), Sicherheit, Kosten (fix/variabel), Flexibilität, Umwelt (CO₂)**",
        "**Straße:** Haus zu Haus, flexibel, geringe Fixkosten, aber kleine Kapazität und hoher CO₂-Ausstoß",
        "**Schiene:** hohe Kapazität für Massen- und Kaufmannsgüter, hohe Fixkosten, niedriger CO₂-Ausstoß, Station zu Station",
        "**Wasser:** sehr große Mengen, günstig, aber langsam und unflexibel",
        "**Luft:** sehr schnell für hochwertige, zeitkritische Güter, aber teuer und sehr CO₂-intensiv"
      ] },
    { id: "n12", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Was unterscheidet Verkehrsaufkommen und Verkehrsleistung?",
      tip: "Beide Größen mit Einheit definieren, dann am Modal Split (Bahn) zeigen, warum die Anteile verschieden sind.",
      pts: [
        "**Verkehrsaufkommen** = beförderte **Menge in Tonnen (t)**",
        "**Verkehrsleistung** = Menge × Entfernung in **Tonnenkilometern (tkm)**",
        "Modal Split DE: Straße ca. **81 %** des Aufkommens, aber nur ca. **74 %** der Leistung",
        "Bahn: ca. 7 % des Aufkommens, aber ca. 16 % der Leistung – weil sie im Schnitt **längere Strecken** fährt"
      ] },
    { id: "n13", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Welche Aufgaben haben Vorlauf, Hauptlauf und Nachlauf?",
      tip: "Je Abschnitt: was passiert + was entscheidet die Spedition; Kostenhinweis Nachlauf.",
      pts: [
        "**Vorlauf:** Abholung beim Versender und Zuführung zum Terminal – Entscheidung: Abholtour, Zeitfenster, Fahrzeug",
        "**Hauptlauf:** **gebündelte** Beförderung zwischen den Knoten – Entscheidung: Relation, Kapazität, Fahrplan/Abfahrtszeit",
        "**Nachlauf:** Verteilung und Zustellung an den Empfänger – Entscheidung: Zustelltour, Entladebedingungen, Zustellnachweis",
        "Der Nachlauf verursacht ca. **50 % der Kosten**, weil die gebündelte Ware wieder **vereinzelt** zugestellt wird",
        "An den **Schnittstellen**: Übernahme, Umschlag – Identifikation, Zustand, Menge erfassen"
      ] },
    { id: "n14", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Wann spart Bündelung Kosten und wann entstehen Zusatzkosten?",
      tip: "Mit Formel und Rechenbeispiel antworten.",
      pts: [
        "Formel: **Kosten je Sendung = fixe Hauptlaufkosten / n + variable Kosten je Sendung**",
        "Beispiel: 1.000 € Hauptlauf + 80 €/Sendung → bei 10 Sendungen **180 €** je Sendung statt 300 € direkt",
        "**Spart Kosten**, je mehr Sendungen (n) sich die fixen Hauptlaufkosten teilen (**Fixkostendegression**)",
        "**Zusatzkosten** durch zusätzlichen **Umschlag und Schnittstellen**: Zeit, Personal, Schadens- und Fehlleitungsrisiko",
        "Bei zu wenigen Sendungen oder Zeitdruck/Umladeverbot ist der **Direktverkehr** günstiger bzw. nötig"
      ] },
    { id: "n15", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Wieso wirkt eine schwache Rückrichtung auf die Auslastung?",
      tip: "Paarigkeit/Unpaarigkeit definieren, dann die Folge für Kosten und Preise.",
      pts: [
        "**Paarigkeit** = ausgeglichene Hin- und Rücktransporte · **Unpaarigkeit** = Ungleichgewicht",
        "Bei schwacher Rückrichtung fehlt **Rückladung** → Lkw fahren **leer oder schlecht ausgelastet** zurück",
        "Die Kosten der Rückfahrt fallen trotzdem an und müssen über die **Hinfahrt** mitbezahlt werden",
        "Gegenmittel: **Rundläufe**, Ringsysteme, Frachtbörsen, Kooperationen, Kabotage"
      ] },
    { id: "n16", src: "nehm", ref: "vbl1/a-verkehrstraeger",
      q: "Was unterscheidet Stückgut, Teilladung und Komplettladung?",
      tip: "Nach Sendungsgröße, Umschlag und Netz unterscheiden – je ein Beispiel.",
      pts: [
        "**Stückgut/Sammelgut:** kleine Sendungen (ca. 31–3.000 kg) über ein **Netz** aus Abholung, Umschlag und Zustellung – stark gebündelt, **mehrfach umgeschlagen**",
        "**Teilladung (LTL):** belegt **einen Teil** des Lkw, wird mit anderen Ladungen kombiniert, meist **direkt ohne Umschlag**",
        "**Komplettladung (FTL):** das **ganze Fahrzeug** für einen Auftrag, eine Lade- und eine Entladestelle, kein Umschlag (muss nicht physisch voll sein)",
        "Je größer die Sendung, desto **direkter** und mit **weniger Schnittstellen** läuft sie"
      ] },
    { id: "n17", src: "nehm", ref: "vbl1/a-markt",
      q: "Was sind zusätzliche Aufgaben, die eine Spedition übernehmen kann? Was ist unter Value Added Services zu verstehen?",
      tip: "Definition VAS, dann produkt- und prozessorientierte Beispiele.",
      pts: [
        "**Value Added Services** = **Mehrwertdienste**, die über die Basisleistungen (TUL) hinausgehen und das Angebot entlang der Wertschöpfungskette aufwerten",
        "**Produktorientiert:** Qualitäts- und Temperaturkontrolle, Montage/Demontage, Reparaturen, Ver- und Umpacken, Prüfungen, Entsorgung/Recycling",
        "**Prozessorientiert:** Auftragsmanagement, **Kommissionierung**, Konfektionierung, Etikettierung, **Retourenmanagement**, Zollservices, Tracking & Tracing",
        "Ziel: stärkere **Kundenbindung** und höhere Wertschöpfung für die Spedition"
      ] },
    { id: "n18", src: "nehm", ref: "vbl1/a-markt",
      q: "Was ist mit „Wandel der Spedition“ gemeint?",
      tip: "Ursache (Verlader) → Reaktion (Spedition) → Voraussetzungen.",
      pts: [
        "Verlader konzentrieren sich auf ihr **Kerngeschäft** und geben **immer mehr Logistik ab** (Outsourcing)",
        "Die Spedition entwickelt sich vom reinen Organisator (TUL) zum **umfassenden Logistikdienstleister** mit **Value Added Services**",
        "Dafür braucht sie **kundenspezifisches Wissen** und oft **Investitionen** (Lager, IT) – Richtung Kontraktlogistik",
        "Treiber: **Digitalisierung, Nachhaltigkeit, E-Commerce, Fachkräftemangel, globale Unsicherheit**"
      ] },
    { id: "n19", src: "nehm", ref: "vbl1/a-markt",
      q: "Was sind grundlegende Unterschiede zwischen einem Transport- (1PL), einem Speditions- (2PL) und einem Kontraktlogistikunternehmen (3PL)?",
      tip: "Der Prof sagt: „Sie sollten entscheidende Merkmale kennen!“ → Tabelle im Kopf: Leistung, Kunden, Integration, Vertragslaufzeit, Beispiel.",
      pts: [
        "**1PL – Transportunternehmen/Frachtführer:** physischer Transport und Umschlag, **keine Planung**; Kunden klein und wechselnd; Integration gering; **kurze** Verträge (z. B. Willi Betz)",
        "**2PL – Spedition:** **Koordination** – Frachtführer auswählen, Transport planen, Zoll; Kunden groß, eher anonym; Integration moderat; Laufzeit **< 1 Jahr** (z. B. Schenker)",
        "**3PL – Kontraktlogistik:** **langfristige Übernahme ganzer Logistikprozesse** (Lager, Kommissionierung, Distribution); wenige Großkunden, kundenspezifische Lösungen; Integration hoch; **3–10 Jahre** (z. B. Kühne + Nagel)",
        "Merke: von 1PL zu 3PL steigen **Leistungsumfang, Integrationstiefe und Vertragslaufzeit** – die Kunden werden **weniger, aber größer**"
      ] },
    { id: "n20", src: "nehm", ref: "vbl1/a-markt",
      q: "Wie groß ist der Logistikmarkt? Wie ist das Verhältnis zwischen „insourced“- und „outsourced“-Leistungen?",
      tip: "Zwei Zahlen und das Verhältnis – plus ein Satz, was insourced/outsourced bedeutet.",
      pts: [
        "Logistikmarkt Deutschland ca. **330 Mrd. €** (2024) – egal ob selbst erbracht oder eingekauft",
        "**Outsourced** (an Dienstleister vergeben): ca. **40 %** ≈ **131 Mrd. €** Umsatz der Speditions-/Logistikbranche (2023)",
        "**Insourced** (Eigenlogistik von Industrie und Handel): ca. **60 %**",
        "(Die Logistik-Folie nennt etwa 50 : 50 – in VBL gilt Nehms 40/60.)"
      ] },
    { id: "n21", src: "nehm", ref: "vbl1/a-markt",
      q: "Wieso ist es falsch, von einem Gesamtlogistikumsatz in Höhe von etwa 330 Mrd. € zu sprechen? Wie müsste es richtigerweise heißen? Wie viel Umsatz machen die Logistikdienstleister?",
      tip: "Drei Teile beantworten: warum falsch – richtiger Begriff – Umsatz der Dienstleister.",
      pts: [
        "Ein großer Teil der Leistungen wird **im eigenen Unternehmen erbracht (insourced)** und gar **nicht verkauft** – das ist **kein Umsatz**",
        "Richtig heißt es: **Logistikkosten** bzw. Logistikmarktvolumen",
        "Umsatz der Logistikdienstleister: nur der **outsourced** Teil – ca. **131 Mrd. €** (≈ 40 %)"
      ] },

    // ---------- Teil B: vermutete Prüfungsfragen (Hasselberg) ----------
    { id: "p01", src: "pred", ref: "vbl1/b-strasse",
      q: "Für welche Transporte gilt das GÜKG und welche Voraussetzungen braucht ein Unternehmen für die Erlaubnis?",
      tip: "Geltungsbereich (3,5 t, gewerblich) + drei Voraussetzungen + mitzuführende Dokumente.",
      pts: [
        "**GÜKG** regelt den **gewerblichen** Güterkraftverkehr mit Fahrzeugen **über 3,5 t zGG** (Inland, grenzüberschreitend mit Start/Ziel in DE, Kabotage)",
        "Voraussetzungen der Erlaubnis: **1. Zuverlässigkeit** des Unternehmers",
        "**2. Finanzielle Leistungsfähigkeit** (Eigenkapitalnachweis)",
        "**3. Fachliche Eignung** (IHK-Prüfung oder gleichwertig)",
        "Mitführen: Erlaubnisurkunde/-ausfertigung und Nachweis der **Güterschaden-Haftpflichtversicherung**; Kontrolle durch das **BALM**"
      ] },
    { id: "p02", src: "pred", ref: "vbl1/b-strasse",
      q: "Vergleichen Sie Sattelzug, Gliederzug mit Wechselbrücken und Lang-Lkw. Welchen Vorteil bietet die Wechselbrücke?",
      tip: "Kennzahlen je Fahrzeug (Länge, Gewicht, Paletten) + Einsatz + Vorteil der WB.",
      pts: [
        "**Sattelzug:** 16,50 m, 40 t zGG, **33/34 Europaletten** – der europäische Standard",
        "**Gliederzug:** 18,75 m, 40 t zGG, bis **38 Paletten** mit zwei Wechselbrücken",
        "**Wechselbrücke:** abnehmbarer Aufbau (ca. 7,45 m) auf Stützfüßen → der Lkw **muss beim Be-/Entladen nicht warten**, tauscht die Brücke und fährt weiter → bessere Auslastung von Fahrzeug und Fahrer",
        "**Lang-Lkw:** bis 25,25 m, 40 t → bis zu **50 % mehr Volumen**, weniger Fahrten, weniger CO₂ und Kosten pro tkm",
        "**Verteiler-Lkw** (bis 18 t, Ladebordwand) für Abholung und Zustellung in der Region"
      ] },
    { id: "p03", src: "pred", ref: "vbl1/b-strasse",
      q: "Eigener Fuhrpark oder Transportunternehmer? Erläutern Sie Vor- und Nachteile aus Sicht einer Spedition.",
      tip: "Gegenüberstellung mit Fazit (Mischung aus beidem).",
      pts: [
        "**Transportunternehmer:** variable statt fixe Kosten → **geringeres Risiko**, keine Kapitalbindung, oft günstiger, **flexibel** bei schwankender Auslastung",
        "Nachteil TU: Verfügbarkeit und Preis **hängen vom Markt** ab, weniger Einfluss auf Qualität",
        "**Eigener Fuhrpark:** direkter Zugriff auf Laderaum, **volle Dispositionshoheit**, Kundenwünsche sicher erfüllbar, Einfluss auf Auftreten/Corporate Design",
        "Nachteil eigener Fuhrpark: **Fixkosten**, Kapitalbindung und vor allem **Fahrermangel**",
        "Fazit: meist **Kombination** – Grundlast selbst, Spitzen mit Transportunternehmern"
      ] },
    { id: "p04", src: "pred", ref: "vbl1/b-strasse",
      q: "Wie funktioniert die Lkw-Maut in Deutschland? Berechnen Sie die Maut für 420 km bei 0,348 €/km.",
      tip: "Pflicht – Betreiber – Berechnungsparameter – Erfassung/Kontrolle – Rechnung.",
      pts: [
        "Mautpflichtig: Lkw für den Güterkraftverkehr **über 3,5 t** auf **Autobahnen und Bundesstraßen** (seit 2005), Betreiber **Toll Collect**",
        "Streckenbezogen: Mautsatz je km nach **Achszahl/Gewicht, Schadstoffklasse und CO₂-Emissionsklasse**",
        "Erfassung automatisch per **On-Board-Unit (GPS)**; Kontrolle durch Mautbrücken und Kontrollsäulen",
        "Rechnung: **420 km × 0,348 €/km = 146,16 €**",
        "Ausnahmen u. a. Land- und Forstwirtschaft, Polizei, Feuerwehr"
      ] },
    { id: "p05", src: "pred", ref: "vbl1/b-sammelgut",
      q: "Beschreiben Sie den Ablauf eines Sammelgutverkehrs inklusive Tageszeiten und eingesetzter Fahrzeuge.",
      tip: "Die fünf Stufen in der richtigen Reihenfolge – je Zeit und Fahrzeug; Kundenerwartung 24 h.",
      pts: [
        "**Vorlauf** (nachmittags): Abholung beim Versender mit leichten/mittelschweren Lkw (Nahverkehr)",
        "**Umschlag beim Versandspediteur** (abends): Sendungen nach Zielregionen zu **Sammelladungen** bündeln",
        "**Hauptlauf** (nachts): Sattel-/Gliederzüge bis 40 t (oder Bahn im KV) zum Empfangsspediteur – systemgebundener Risikoverkehr",
        "**Umschlag beim Empfangsspediteur** (früh morgens): Sammelladung auflösen, **Touren bilden**",
        "**Nachlauf** (vormittags): Zustellung an die Empfänger – Kunde erwartet **24 h** (nächster Werktag)"
      ] },
    { id: "p06", src: "pred", ref: "vbl1/b-sammelgut",
      q: "Unterscheiden Sie Firmen- und Kooperationsnetzwerke und erläutern Sie Vor- und Nachteile des Hub-and-Spoke-Systems.",
      tip: "Erst die zwei Netzwerktypen, dann Hub-Verkehr erklären, dann Plus/Minus.",
      pts: [
        "**Firmennetzwerk:** überwiegend **eigene Niederlassungen** eines Konzerns, zentrale Strukturen (z. B. DHL, Dachser)",
        "**Kooperationsnetzwerk:** **rechtlich selbständige** Speditionen unter einer Kooperationsgesellschaft – feste Gebiete, einheitliches Produkt, zentrale Hubs (z. B. CargoLine)",
        "**Hub-Verkehr:** jeder Partner fährt zum zentralen Hub und lädt dort die Sendungen für sein Zustellgebiet – wegen **ungleich starker Güterströme**",
        "**Vorteile:** 24-h-Netz auch für **kleine Partner**, wirtschaftlich auch in **schwachen Relationen**",
        "**Nachteile:** **teurer als Direktverkehr**, zusätzlicher Umschlag → mehr **Schadens- und Fehlverladungsrisiko**"
      ] },
    { id: "p07", src: "pred", ref: "vbl1/b-europa",
      q: "Vergleichen Sie die Haftung des Frachtführers nach HGB und CMR und berechnen Sie die Höchsthaftung für 1.500 kg bei einem Warenwert von 18.000 € (1 SZR = 1,20 €).",
      tip: "Gegenüberstellung in vier Punkten + Rechnung mit Ergebnis und Satz zum ungedeckten Rest.",
      pts: [
        "**Charakter:** HGB = nationales Gesetz, **halbzwingend** (Korridor 2–40 SZR vereinbar) · CMR = internationales Übereinkommen, **zwingend**",
        "**Güterschaden/Verlust:** beide max. **8,33 SZR je kg Rohgewicht**",
        "**Lieferfristüberschreitung:** HGB max. **3-fache Fracht** · CMR max. **1-fache Fracht**",
        "**Vermögensschäden:** HGB max. das 3-Fache des Verlustbetrags · CMR keine Regelung; Güterfolgeschäden in beiden nicht",
        "Rechnung: 1.500 × 8,33 × 1,20 € = **14.994 €** < 18.000 € → **3.006 € ungedeckt**"
      ] },
    { id: "p08", src: "pred", ref: "vbl1/b-europa",
      q: "Was ist Kabotage, welche Regeln gelten und wie grenzt sie sich von bilateralem Verkehr und Cross-Trade ab?",
      tip: "Drei Verkehrsarten mit Beispiel, dann die Kabotageregeln und der Zweck.",
      pts: [
        "**Bilateral:** zwischen Heimatland und Ausland (dt. Lkw Mannheim → Lyon) · **Cross-Trade:** zwischen zwei fremden Ländern (poln. Lkw DE → FR)",
        "**Kabotage:** Inlandstransport in einem fremden EU-Land (poln. Lkw München → Berlin)",
        "Regeln: kein Sitz im Kabotageland, **max. 3 Fahrten in 7 Tagen** nach einer internationalen Lieferung",
        "Danach **4 Tage Abkühlphase**; Fahrzeug muss spätestens **alle 8 Wochen** zurück in den Niederlassungsstaat",
        "Zweck: **Leerfahrten vermeiden**, Kapazitäten auslasten, Wettbewerb im Binnenmarkt"
      ] },
    { id: "p09", src: "pred", ref: "vbl1/b-europa",
      q: "Welche Genehmigungen und Dokumente braucht ein Lkw im nationalen bzw. europäischen Güterkraftverkehr?",
      tip: "National vs. international gegenüberstellen; CMR-Frachtbrief erklären.",
      pts: [
        "**National:** GÜKG-Erlaubnis(ausfertigung), Nachweis der **Güterschaden-Haftpflichtversicherung**, ggf. Frachtbrief",
        "**EU/EWR:** **Gemeinschaftslizenz (EU-Lizenz)** – erlaubt grenzüberschreitende Transporte und zeitweilige Kabotage",
        "**Außerhalb der EU:** **CEMT-Genehmigung** (multilateral) oder bilaterale Genehmigungen",
        "**CMR-Frachtbrief:** beweist Frachtvertrag, Übernahme/Ablieferung, Art, Menge und Zustand der Ware",
        "Bei Entsendung: **A1-Bescheinigung** (Sozialversicherungsnachweis); Werkverkehr: Werkverkehrsbescheinigung"
      ] },
    { id: "p10", src: "pred", ref: "vbl1/b-europa",
      q: "Was regelt das EU-Mobilitätspaket und welche Folgen hat es für Fahrer und Unternehmen?",
      tip: "Drei Regeln nennen und je eine Folge.",
      pts: [
        "**Entsendung:** Fahrer erhalten **Mindestlohn und Arbeitsbedingungen des Einsatzlandes** (z. B. bei Kabotage)",
        "**Rückkehrpflicht** des Fahrzeugs spätestens **alle 8 Wochen** in den Niederlassungsstaat",
        "**Keine regelmäßige 45-Stunden-Wochenruhe im Fahrzeug**",
        "Strengere **Kabotageregeln** (3 in 7, danach 4 Tage Pause)",
        "Folgen: **höhere Kosten** für Billiganbieter, fairerer Wettbewerb, mehr Dokumentationsaufwand"
      ] },
    { id: "p11", src: "pred", ref: "vbl1/b-europa",
      q: "Nennen Sie Ursachen für Leerfahrten und Maßnahmen, um sie zu vermeiden.",
      tip: "Ursachen und passende Gegenmaßnahmen paarweise.",
      pts: [
        "**Unpaarige Warenströme** (z. B. mehr Importe als Exporte in einer Region)",
        "Fehlende **digitale Vernetzung** zwischen Verladern und Frachtführern",
        "**Werkverkehr** (besonders hoher Leerfahrtenanteil) und **Spezialtransporte** ohne passende Rückladung",
        "Regionale **Industriecluster** mit einseitigen Strömen",
        "Maßnahmen: **Frachtbörsen/Digitalisierung, Kooperationen, Rundläufe, Kabotage**, Bündelung"
      ] }
  ]
};

// =====================================================================
// 💼 Grundlagen der BWL – BWL (Verena von Medem) + Marketing (Stenger)
// Keine offiziellen Lernfragen → vermutete Prüfungsfragen aus Folien und Übungen
// =====================================================================
window.LERNFRAGEN.bwl = {
  sources: {
    bwl: { label: "Vermutete Prüfungsfragen BWL (Block 1–2, mit Vorlesungsübungen)", official: false },
    mkt: { label: "Vermutete Prüfungsfragen Marketing", official: false }
  },
  items: [
    { id: "b01", src: "bwl", ref: "bwl/bwl-b1",
      q: "Grenzen Sie Erfahrungs- und Erkenntnisobjekt der BWL ab und ordnen Sie die BWL in das System der Wissenschaften ein.",
      tip: "Zwei Begriffe definieren, dann den Ast im Wissenschaftsbaum von oben nach unten.",
      pts: [
        "**Erfahrungsobjekt = der Betrieb** – der wahrnehmbare Ausschnitt der Realität, von dem die Erkenntnis ausgeht",
        "**Betrieb** = planvoll organisierte Wirtschaftseinheit, in der **Produktionsfaktoren kombiniert** werden, um Güter/Dienstleistungen herzustellen und abzusetzen",
        "**Erkenntnisobjekt = das Wirtschaften im Betrieb** – v. a. Entscheidungen im privaten Betrieb im Wettbewerb",
        "BWL ist **anwendungsorientiert**: will Handlungsempfehlungen geben",
        "Einordnung: Wissenschaften → **Realwissenschaften** → Geisteswissenschaften → **Wirtschaftswissenschaften** → BWL (neben VWL)"
      ] },
    { id: "b02", src: "bwl", ref: "bwl/bwl-b1",
      q: "Erläutern Sie Induktion und Deduktion und nennen Sie die drei Gütekriterien wissenschaftlicher Forschung.",
      tip: "Richtung des Schlusses (Einzelfall ↔ Allgemeines) je mit Beispiel; dann drei Gütekriterien mit je einem Satz.",
      pts: [
        "**Induktion:** vom **Einzelnen aufs Allgemeine** – aus Beobachtungen (Empirie) wird eine allgemeine Hypothese/Theorie abgeleitet",
        "**Deduktion:** vom **Allgemeinen aufs Einzelne** – aus Theorien werden logisch Aussagen/Hypothesen für den Einzelfall abgeleitet",
        "**Objektivität:** Ergebnis ist **unabhängig von der Person**, die erhebt oder auswertet",
        "**Reliabilität (Zuverlässigkeit):** bei **Wiederholung gleiches Ergebnis**",
        "**Validität (Gültigkeit):** es wird **wirklich das gemessen**, was untersucht werden soll"
      ] },
    { id: "b03", src: "bwl", ref: "bwl/bwl-b1",
      q: "Stellen Sie die wichtigsten Ansätze der BWL dar.",
      tip: "Je Ansatz ein Kerngedanke – Reihenfolge nach Entstehung.",
      pts: [
        "**Produktivitätsorientiert:** Verhältnis Faktoreinsatz ↔ Ertrag; Produktions- und Kostentheorie; Annahme **vollkommener Information** (Gutenberg)",
        "**Entscheidungsorientiert:** gibt vollkommene Information auf, **realitätsnahe Entscheidungsmodelle** (Heinen)",
        "**Systemorientiert:** Unternehmen als **System**, Ziele als Sollwerte, interdisziplinär (Ulrich)",
        "**Verhaltensorientiert:** statt Homo Oeconomicus **verhaltenswissenschaftliche Erkenntnisse**",
        "**Umweltorientiert:** ökologische Sicht einbeziehen, Gewinn nicht einziges Ziel (Stakeholder-Ansatz)",
        "**Institutionenorientiert:** Verfügungsrechte, **Transaktionskosten**, Informationsökonomik (wer weiß was?)"
      ] },
    { id: "b04", src: "bwl", ref: "bwl/bwl-b1",
      q: "Erläutern Sie, warum ein Unternehmen ein offenes, dynamisches, fremdbestimmtes und komplexes System ist. Nutzen Sie Beispiele aus der Logistik.",
      tip: "Übung aus der Vorlesung: System definieren, dann jede Eigenschaft mit Logistik-Beispiel (Vergleich Armbanduhr).",
      pts: [
        "**System** = Menge von Elementen, die durch Beziehungen verknüpft sind; der Betrieb ist ein **sozio-ökonomisches** System",
        "**Offen:** Austausch mit der Umwelt – z. B. Spedition kauft Diesel, nimmt Aufträge an",
        "**Dynamisch:** verändert sich ständig – z. B. neue Kunden, Saisonspitzen, Digitalisierung",
        "**Fremdbestimmt:** von außen beeinflusst – z. B. Gesetze (Lenkzeiten, Maut), Markt, Kunden",
        "**Komplex:** viele Elemente und Beziehungen – Fahrer, Fahrzeuge, Lager, IT, Partner",
        "Gegenbeispiel Armbanduhr: **geschlossen, statisch, autonom**"
      ] },
    { id: "b05", src: "bwl", ref: "bwl/bwl-b1",
      q: "Grenzen Sie Betrieb, Unternehmung, Firma, Geschäft und Fabrik voneinander ab und nennen Sie Merkmale, nach denen man Betriebe typisieren kann.",
      tip: "Fünf Begriffe kurz definieren, dann vier Typologien; KMU-Grenzen als Beispiel.",
      pts: [
        "**Betrieb:** planvoll organisierte Wirtschaftseinheit · **Unternehmung:** Betrieb in der **Marktwirtschaft**",
        "**Firma:** **Name**, unter dem ein Kaufmann seine Geschäfte betreibt · **Geschäft:** einzelne Transaktion bzw. deren Ort · **Fabrik/Werk:** Ort der Sachgüterproduktion",
        "Typologien: **Betriebsziel** (Gewinn vs. Non-Profit), **Art der Leistung** (Sach- vs. Dienstleistung), **Wirtschaftszweig**, **Betriebsgröße**",
        "Größenklassen: Kleinst < 10 MA/< 2 Mio. €, klein < 50 MA/< 10 Mio. €, **mittel 50–249 MA/< 50 Mio. €**, groß ab 250 MA/> 50 Mio. €"
      ] },
    { id: "b06", src: "bwl", ref: "bwl/bwl-b2",
      q: "Welche Bestimmungsfaktoren des Betriebs unterscheidet Gutenberg? Grenzen Sie systemunabhängige und systemabhängige Faktoren ab.",
      tip: "Drei systemunabhängige Faktoren, dann Marktwirtschaft vs. Planwirtschaft gegenüberstellen.",
      pts: [
        "**Systemunabhängig** (gelten in jedem Wirtschaftssystem): **Produktionsfaktoren**, **Prinzip der Wirtschaftlichkeit**, **Prinzip des finanziellen Gleichgewichts**",
        "**Marktwirtschaft:** **erwerbswirtschaftliches Prinzip** (Gewinnmaximierung), **Autonomieprinzip** (Betrieb entscheidet selbst), **Privateigentum** → Betrieb = Unternehmen",
        "**Planwirtschaft:** **Planerfüllungsprinzip**, **Organprinzip**, **Gemeinschaftseigentum** → Betrieb = Organ der Gesamtwirtschaft"
      ] },
    { id: "b07", src: "bwl", ref: "bwl/bwl-b2",
      q: "Gliedern Sie die Produktionsfaktoren nach Gutenberg und ordnen Sie die Faktoren einer Paketzustellung zu.",
      tip: "Übung aus der Vorlesung: Struktur (Elementar- und dispositiver Faktor) + Zuordnung am Beispiel.",
      pts: [
        "**Elementarfaktoren:** **ausführende Arbeit**, **Betriebsmittel**, **Werkstoffe** (Roh-, Hilfs-, Betriebsstoffe)",
        "**Dispositiver Faktor:** **Leitung** – Planung, Organisation, Kontrolle",
        "Paketzustellung: ausführende Arbeit = **Fahrer, Sortierer** · Betriebsmittel = **Lkw, Sortieranlage, Software**",
        "Werkstoffe = **Diesel (Betriebsstoff), Verpackung, Etiketten** · dispositiver Faktor = **Tourenplanung, Disposition**",
        "Rohstoff = Hauptbestandteil, Hilfsstoff = Nebenbestandteil, **Betriebsstoff geht nicht ins Produkt ein**"
      ] },
    { id: "b08", src: "bwl", ref: "bwl/bwl-b2",
      q: "Unterscheiden Sie Bedürfnis, Bedarf und Nachfrage sowie freie und knappe Güter.",
      tip: "Kette Bedürfnis → Bedarf → Nachfrage mit Pizza-Beispiel; dann Güter.",
      pts: [
        "**Bedürfnis:** empfundener **Mangel**, unkonkret und unbegrenzt („Ich habe Hunger“)",
        "**Bedarf:** **konkretisiert** in Art und Menge („Ich will eine Pizza essen“)",
        "**Nachfrage:** Bedarf **mit Kaufkraft am Markt** („Ich kaufe eine Pizza Salami“)",
        "**Freie Güter:** Preis = 0 (Luft) · **knappe Güter/Wirtschaftsgüter:** Preis > 0 – nur sie sind Gegenstand des Wirtschaftens",
        "Wirtschaftsgüter: **materiell** (Produktions- und Konsumgüter) und **immateriell** (Dienstleistungen, Rechte)"
      ] },
    { id: "b09", src: "bwl", ref: "bwl/bwl-b2",
      q: "Erläutern Sie das ökonomische Prinzip in seinen drei Ausprägungen und ordnen Sie Beispiele zu.",
      tip: "Übung aus der Vorlesung: je Ausprägung was gegeben / was optimiert + Beispiel; Achtung bei „so wenig wie möglich für so viel wie möglich“.",
      pts: [
        "**Ökonomisches Prinzip:** mit knappen Mitteln vernünftig wirtschaften – Verhältnis Output zu Input optimieren",
        "**Maximalprinzip:** Aufwand gegeben → **Ertrag maximieren** (5.000 € Dieselbudget, möglichst viele Touren)",
        "**Minimalprinzip:** Ertrag gegeben → **Aufwand minimieren** (200.000 € Gewinn mit möglichst wenig Kapital)",
        "**Extremum-/Optimumprinzip:** beides variabel → **bestes Verhältnis** von Ertrag und Aufwand",
        "„Mit möglichst wenig Diesel möglichst weit“ ist streng genommen **nicht erfüllbar** – sinnvoll ist nur das optimale Verhältnis"
      ] },
    { id: "b10", src: "bwl", ref: "bwl/bwl-b2",
      q: "Stellen Sie den betrieblichen Leistungsprozess aus güter- und finanzwirtschaftlicher Sicht dar.",
      tip: "Zwei parallele Ketten zeichnen bzw. beschreiben; Input – Transformation – Output.",
      pts: [
        "**Güterwirtschaftlich:** **Beschaffung** (Input: Produktionsfaktoren) → **Produktion** (Faktorkombination) → **Absatz** (Output)",
        "**Finanzwirtschaftlich:** **Finanzierung** (Mittelherkunft) → **Investition** (Mittelverwendung) → **Rückfluss** liquider Mittel durch den Absatz",
        "Beschaffung: Bedarf ermitteln, Bezugsquellen, Bestellung, Lager · Absatz: Marketing & Vertrieb, physische Distribution (4P)",
        "Güterstrom und Geldstrom laufen **entgegengesetzt**"
      ] },
    { id: "b11", src: "bwl", ref: "bwl/bwl-b2",
      q: "Grenzen Sie Produktivität, Wirtschaftlichkeit und Rentabilität ab. Wann benötigt man welche Messgröße?",
      tip: "Übung aus der Vorlesung: Formel, Art der Größe und Einsatzzweck je Kennzahl.",
      pts: [
        "**Produktivität = Output / Input** (mengenmäßig) – z. B. Touren pro Fahrerstunde; für **technische Effizienz** einzelner Faktoren",
        "**Wirtschaftlichkeit = Ertrag / Aufwand** bzw. Erlös / Kosten (wertmäßig) – **> 1 wirtschaftlich**",
        "**Rentabilität** = Gewinn im Verhältnis zu Kapital oder Umsatz (in %) – für **Kapitalgeber und Vergleich von Investitionen**",
        "**Umsatzrendite** = Gewinn / Umsatz × 100 · **EK-Rendite** = Gewinn / EK × 100",
        "**GK-Rendite** = (Gewinn + FK-Zinsen) / Gesamtkapital × 100"
      ] },
    { id: "b12", src: "bwl", ref: "bwl/bwl-b2",
      q: "Wie kann ein Transportunternehmen seine Wirtschaftlichkeit erhöhen? Beurteilen Sie die Stellschrauben (Fall Flittiflotti).",
      tip: "Formel als Ausgangspunkt, dann Zähler- und Nennerseite; realistisch bewerten.",
      pts: [
        "Wirtschaftlichkeit = **Erlös / Kosten** → entweder Erlöse erhöhen oder Kosten senken",
        "**Preis pro Tour erhöhen** (Flittiflotti: auf 162,80 € für 2,2) – am Markt bei starkem Wettbewerb **kaum durchsetzbar**",
        "**Löhne senken** (Flittiflotti: auf 18,50 €/Std. für 1,6) – wegen **Fahrermangel praktisch nicht umsetzbar**",
        "Realistischer: **Produktivität steigern** – mehr Touren pro Stunde, weniger Diesel pro Tour (Tourenplanung, Bündelung, Auslastung)",
        "Fazit: Kennzahlen zeigen **Ansatzpunkte**, die Umsetzung muss **marktfähig** sein"
      ] },

    // ---------- Marketing ----------
    { id: "m01", src: "mkt", ref: "bwl/mkt-1",
      q: "Definieren Sie Marketing und erläutern Sie die Kernaussagen der Definition.",
      tip: "Definition sinngemäß, dann drei Kernaussagen + duale Führungsfunktion.",
      pts: [
        "Marketing ist eine **unternehmerische Denkhaltung**: Analyse, Planung, Umsetzung und Kontrolle aller Aktivitäten, die durch **Ausrichtung am Kundennutzen** absatzmarktorientierte Unternehmensziele erreichen",
        "**Denkhaltung statt Abteilung** – betrifft das ganze Unternehmen",
        "**Kundennutzen statt Produkteigenschaft** („Der Kunde kauft keinen Bohrer, sondern ein Loch“)",
        "**Unternehmensziele statt Selbstzweck** – Kundenorientierung ist Mittel, nicht Ziel",
        "**Duale Führungsfunktion:** Marketing ist eine Funktion/Abteilung **und** Leitkonzept der Unternehmensführung"
      ] },
    { id: "m02", src: "mkt", ref: "bwl/mkt-1",
      q: "Was ist ein Markt und welche Marktteilnehmer gibt es? Warum ist der Absatzhelfer für die Logistik besonders relevant?",
      tip: "Marktdefinition, fünf Teilnehmergruppen, dann die Rolle des Zustellers.",
      pts: [
        "**Markt** = aktuelle und potenzielle **Nachfrager** und **Anbieter** einer Leistung und ihre **Beziehungen**",
        "Teilnehmer: **Nachfrager**, **Anbieter**, **Absatzmittler** (Handel, Plattformen), **Absatzhelfer** (Spedition, Zahlungsdienstleister), **Beeinflusser** (Bewertungen, Medien, Regulierung)",
        "Ein **Tausch** kommt zustande, wenn beide Seiten das Erhaltene höher bewerten als das Abgegebene",
        "Der **Zusteller** ist oft der **einzige persönliche Kontakt** zum Endkunden – wirksamster Kontaktpunkt des Herstellers, den er nicht selbst kontrolliert",
        "Deshalb sind **Lieferzeit und Zustellqualität Marketinginstrumente** (Place)"
      ] },
    { id: "m03", src: "mkt", ref: "bwl/mkt-1",
      q: "Unterscheiden Sie Verkäufer- und Käufermarkt sowie transaktions- und beziehungsorientiertes Marketing.",
      tip: "Zwei Gegenüberstellungen mit Engpass bzw. Erfolgsmaß.",
      pts: [
        "**Verkäufermarkt** (früher): Nachfrage > Angebot, Engpass = **Produktion**, Marketing = Absatzorganisation",
        "**Käufermarkt** (heute): Angebot > Nachfrage, Engpass = **Kunde** → Marketing wird **Führungsfunktion**",
        "**Transaktionsorientiert:** Fokus auf den **einzelnen Kaufakt**, Erfolgsmaß Abschluss, Reichweite (Impulskäufe)",
        "**Beziehungsorientiert:** Fokus auf den **Beziehungszyklus**, Erfolgsmaß **Kundenwert über die Zeit**, Stammkunde günstiger als Neukunde (Abo, B2B, E-Commerce)"
      ] },
    { id: "m04", src: "mkt", ref: "bwl/mkt-1",
      q: "Erläutern Sie das strategische Dreieck. Welche Bedingungen muss ein Wettbewerbsvorteil erfüllen?",
      tip: "Drei Ecken, drei Bedingungen, ein Logistik-Beispiel.",
      pts: [
        "Bezugspunkte: **Unternehmen – Kunde – Wettbewerber**",
        "Der Vorteil muss für den Kunden **relevant** sein",
        "… vom Kunden **wahrnehmbar** sein",
        "… für das Unternehmen **nachhaltig/dauerhaft** (schwer kopierbar) sein",
        "Beispiel: verlässliche Zustellung im 2-Stunden-Fenster mit Live-Tracking – nicht zwingend der billigste Preis"
      ] },
    { id: "m05", src: "mkt", ref: "bwl/mkt-1",
      q: "Erklären Sie das S-O-R-Modell im Vergleich zum S-R-Modell und nennen Sie die Einflussgrößen im „O“.",
      tip: "Beide Modelle, warum S-O-R besser erklärt, dann die psychischen Größen.",
      pts: [
        "**S-R-Modell:** nur beobachtbare Größen – Reiz (Stimulus) → Reaktion; erklärt nicht, **warum dieselbe Anzeige unterschiedlich wirkt**",
        "**S-O-R-Modell:** zwischen Reiz und Reaktion steht der **Organismus** mit nicht beobachtbaren Prozessen",
        "Im **O:** **Aktivierung & Emotion, Motive & Einstellungen, Involvement, Erfahrung & Lernen**",
        "**Aktiviertheit** = allgemeine innere Erregung · **Involvement** = themenbezogene Ich-Beteiligung",
        "Folge: Menschen reagieren verschieden → **Segmentierung** nötig"
      ] },
    { id: "m06", src: "mkt", ref: "bwl/mkt-1",
      q: "Erläutern Sie die vier Typen des Kaufverhaltens und die Besonderheiten des B2B-Kaufs.",
      tip: "2×2-Matrix aus Involvement und Markenunterschieden mit Beispielen; dann B2B-Merkmale.",
      pts: [
        "Hohes Involvement + große Markenunterschiede: **komplexes Kaufverhalten** (Auto, Immobilie, Kontraktlogistiker)",
        "Hohes Involvement + geringe Unterschiede: **dissonanzreduzierend** (Versicherung, Tablet)",
        "Niedriges Involvement + große Unterschiede: **Variety Seeking** (Wein, Snacks)",
        "Niedriges Involvement + geringe Unterschiede: **habitualisiert** (Zahnpasta, Milch)",
        "**B2B:** Formalisierung (Ausschreibungen), **Buying Center** (Kollektiventscheidung), Fremdbestimmung, Anreize/Einsparziele, Compliance"
      ] },
    { id: "m07", src: "mkt", ref: "bwl/mkt-2",
      q: "Vergleichen Sie Primär- und Sekundärforschung sowie Befragung, Beobachtung und Experiment.",
      tip: "Erst die zwei Forschungsarten, dann die drei Methoden mit Stärke/Schwäche; A/B-Test als Beispiel.",
      pts: [
        "**Sekundärforschung:** vorhandene Daten auswerten – günstig, aber oft nicht passgenau/aktuell",
        "**Primärforschung:** neue Daten erheben – passgenau und aktuell, aber teuer",
        "**Befragung:** erfasst Gründe und Absichten – aber Menschen wissen nicht immer, warum sie handeln; online **Selbstselektion**",
        "**Beobachtung:** zeigt, was Menschen **tun** – aber nicht warum",
        "**Experiment** (z. B. **A/B-Test** mit Zufallszuteilung): zeigt **Ursachen (Kausalität)** – aufwendig"
      ] },
    { id: "m08", src: "mkt", ref: "bwl/mkt-2",
      q: "Definieren Sie Marktvolumen, Marktpotenzial, Absatzvolumen und Marktanteil. Berechnen Sie: 4,2 Mio. Sendungen bei 60 Mio. Marktvolumen; stärkster Wettbewerber hat 12 %.",
      tip: "Begriffe sauber trennen, Formeln, dann rechnen.",
      pts: [
        "**Marktvolumen:** tatsächlich abgesetzte Menge **aller** Anbieter · **Marktpotenzial:** maximal mögliche Menge aller Anbieter",
        "**Absatzvolumen:** abgesetzte Menge **eines** Unternehmens",
        "**Marktanteil** = Absatzvolumen / Marktvolumen × 100 = 4,2 / 60 × 100 = **7 %**",
        "**Relativer Marktanteil** = eigener MA / MA des stärksten Wettbewerbers = 7 / 12 ≈ **0,58**",
        "Relevanten Markt **sachlich, räumlich, zeitlich** abgrenzen – nicht zu eng am eigenen Produkt"
      ] },
    { id: "m09", src: "mkt", ref: "bwl/mkt-2",
      q: "Erläutern Sie SWOT-Analyse und BCG-Matrix und nennen Sie Grenzen der BCG-Matrix.",
      tip: "SWOT: intern/extern; BCG: Achsen + vier Felder; dann Grenzen.",
      pts: [
        "**SWOT:** **Stärken/Schwächen = intern**, **Chancen/Risiken = extern** – verbindet Unternehmens- und Umweltanalyse",
        "**BCG-Matrix:** Achsen **Marktwachstum** und **relativer Marktanteil**",
        "Felder: **Question Marks, Stars, Cash Cows, Poor Dogs** – mit Normstrategien",
        "Grenzen: **nur zwei Größen**, ignoriert Verbundeffekte, unterstellt einen Lebenszyklus, erklärt nicht, **warum** ein Produkt dort steht"
      ] },
    { id: "m10", src: "mkt", ref: "bwl/mkt-2",
      q: "Formulieren Sie ein operationalisiertes Marketingziel und erläutern Sie Zielarten und Zielbeziehungen.",
      tip: "Drei Bestandteile eines Ziels, drei Zielgruppen, drei Beziehungen mit Logistik-Konflikt.",
      pts: [
        "Operationalisiert = **Zielinhalt + Ausmaß + Zeitbezug** (z. B. „Neukunden in der Luftfracht um 15 % bis Ende 2027 steigern“)",
        "**Ökonomische Ziele:** Gewinn, Umsatz, Deckungsbeitrag, Marktanteil",
        "**Vorökonomische Ziele:** Bekanntheit, Image, Zufriedenheit, Weiterempfehlung",
        "**Ökologische und soziale Ziele:** z. B. CO₂-Reduktion, faire Arbeit",
        "Beziehungen: **komplementär, neutral, konkurrierend** – klassisch: niedrige Lieferkosten ↔ schnelle Lieferung"
      ] },
    { id: "m11", src: "mkt", ref: "bwl/mkt-2",
      q: "Was ist Marktsegmentierung und welche Anforderungen müssen Segmentierungskriterien erfüllen?",
      tip: "Definition, sechs Anforderungen (Verhaltensrelevanz zuerst), Kriterien B2C vs. B2B.",
      pts: [
        "Aufteilung eines heterogenen Gesamtmarkts in **intern homogene, untereinander verschiedene** Teilmärkte, um sie differenziert zu bearbeiten",
        "Anforderungen: **Verhaltensrelevanz (wichtigste!)**, Messbarkeit, Zugänglichkeit, Handlungsfähigkeit, Wirtschaftlichkeit, zeitliche Stabilität",
        "**B2C-Kriterien:** verhaltensorientiert, psychographisch, soziodemographisch, geographisch",
        "**B2B-Kriterien:** Branche, Unternehmensgröße, Sendungsvolumen, Buying Center",
        "„Alle zwischen 18 und 29“ ist ein Merkmal, **kein Segment** – fehlende Verhaltensrelevanz"
      ] }
  ]
};

// =====================================================================
// 🧮 Mathematik & Statistik – Finanzmathematik
// =====================================================================
(function () {
  const R = String.raw;
  window.LERNFRAGEN.mathe = {
    sources: { pred: { label: "Vermutete Prüfungsfragen – Verständnis & Rechenweg", official: false } },
    items: [
      { id: "q01", src: "pred", ref: "mathe/m-abschreibung",
        q: "Erklären Sie die degressive Abschreibung. Wie berechnet man den Restwert, den Abschreibungssatz und die Laufzeit?",
        tip: "Formel aufschreiben, dann je eine Umstellung (nach p und nach n). Warum sinken die Beträge?",
        pts: [
          R`Jedes Jahr wird derselbe **Prozentsatz vom Restwert** abgeschrieben: $R_n = A \cdot q^n$ mit $q = 1 - \frac{p}{100}$`,
          "Die **Abschreibungsbeträge sinken**, weil sie vom immer kleineren Restwert berechnet werden",
          R`Satz gesucht: $q = \sqrt[n]{\frac{R_n}{A}}$, dann $p = (1-q) \cdot 100$`,
          R`Laufzeit gesucht: $n = \frac{\ln(R_n/A)}{\ln q}$ – $n$ mit dem **Logarithmus** aus dem Exponenten holen`,
          R`Abschreibung im Jahr $k$: $a_k = R_{k-1} \cdot \frac{p}{100}$`
        ] },
      { id: "q02", src: "pred", ref: "mathe/m-zinseszins",
        q: "Erläutern Sie die Zinseszinsformel und wie man Startkapital, Zinssatz und Laufzeit bestimmt.",
        tip: "Grundformel + drei Umstellungen + ein Satz zu „Zinsen auf Zinsen“.",
        pts: [
          R`$K_n = K_0 \cdot q^n$ mit $q = 1 + \frac{p}{100}$ – Zinsen werden mitverzinst (**Zinseszins**)`,
          R`Startkapital (**Abzinsen**): $K_0 = \frac{K_n}{q^n}$`,
          R`Zinssatz: $q = \sqrt[n]{\frac{K_n}{K_0}}$, $p = (q-1) \cdot 100$`,
          R`Laufzeit: $n = \frac{\ln(K_n/K_0)}{\ln q}$; Verdopplung: $n = \frac{\ln 2}{\ln q}$ (Startkapital kürzt sich weg)`
        ] },
      { id: "q03", src: "pred", ref: "mathe/m-unterjaehrig",
        q: "Was ist unterjährige Verzinsung und warum liegt der effektive Jahreszins über dem nominellen?",
        tip: "Formel mit m, Effektivzins-Formel, Begründung, Beispiel 6 % monatlich.",
        pts: [
          R`Zinsen werden $m$-mal pro Jahr gutgeschrieben: $K_n = K_0 \left(1 + \frac{p}{100\,m}\right)^{m \cdot n}$`,
          R`Zins je Periode $\frac{p}{m}$ (monatlich: $m = 12$, vierteljährlich: $m = 4$), Exponent $m \cdot n$`,
          "Effektiv höher, weil schon **während des Jahres Zinsen auf Zinsen** anfallen",
          R`Effektiver Jahreszins: $p^* = \left[\left(1 + \frac{p}{100\,m}\right)^m - 1\right] \cdot 100$ – z. B. 6 % monatlich → $p^* \approx 6{,}17\,\%$`
        ] },
      { id: "q04", src: "pred", ref: "mathe/m-unterjaehrig",
        q: "Erklären Sie die stetige Verzinsung und ihren effektiven Jahreszins.",
        tip: "Grenzfall von m → ∞, Formel mit e, Umstellung nach n, Effektivzins.",
        pts: [
          "Grenzfall unendlich häufiger Verzinsung (**m → ∞**)",
          R`$K_n = K_0 \cdot e^{\frac{p}{100} \cdot n}$`,
          R`Laufzeit: $n = \frac{\ln(K_n/K_0)}{p/100}$ – z. B. Verdopplung bei 6 %: $n = \frac{\ln 2}{0{,}06} \approx 11{,}55$ Jahre`,
          R`Effektiver Jahreszins: $p^* = \left(e^{p/100} - 1\right) \cdot 100$ – z. B. 7 % stetig → $\approx 7{,}25\,\%$`
        ] },
      { id: "q05", src: "pred", ref: "mathe/m-zinseszins",
        q: "Wie rechnet man mit mehreren Phasen (unterschiedliche Zinssätze oder Abschreibungssätze nacheinander)?",
        tip: "Faktoren hintereinander multiplizieren; bei gesuchter Laufzeit einer Phase nach dieser Phase umstellen.",
        pts: [
          R`Faktoren der Phasen **multiplizieren**: $K_n = K_0 \cdot q_1^{n_1} \cdot q_2^{n_2} \cdot q_3^{n_3}$`,
          R`Abschreibung analog: $R = A \cdot q_1^{n_1} \cdot q_2^{n_2} \cdot \ldots$ mit $q_i = 1 - \frac{p_i}{100}$`,
          "Bei unterjährigen Phasen jede Phase mit ihrem eigenen m und Exponenten m·n",
          R`Gesuchte Laufzeit einer Phase: alles Bekannte auf eine Seite, dann $\ln$ – z. B. $n_3 = \frac{\ln\left(\frac{R}{A\,q_1^{n_1} q_2^{n_2}}\right)}{\ln q_3}$`
        ] },
      { id: "q06", src: "pred", ref: "mathe/m-unterjaehrig",
        q: "Zwei Banken verzinsen unterschiedlich oft. Wie vergleichen Sie die Angebote und wann ist ein Guthaben doppelt so hoch wie das andere?",
        tip: "Effektivzinsen vergleichen; für das Vielfache die Gleichung ansetzen und mit ln lösen.",
        pts: [
          R`Fairer Vergleich über den **effektiven Jahreszins** $p^*$ – der Nominalzins allein täuscht`,
          R`Vielfaches: $K_0 \cdot q_2^n = 2 \cdot K_0 \cdot q_1^n$ → $K_0$ **kürzt sich weg**`,
          R`$\left(\frac{q_2}{q_1}\right)^n = 2$ → $n = \frac{\ln 2}{\ln(q_2/q_1)}$`,
          R`Bei unterschiedlichem $m$: $q$ jeweils als Jahresfaktor $\left(1 + \frac{p}{100\,m}\right)^m$ einsetzen`
        ] },
      { id: "q07", src: "pred", ref: "mathe/m-renten",
        q: "Was ist der Rentenendwert und wie unterscheiden sich vorschüssige und nachschüssige Einzahlungen?",
        tip: "Definition, beide Formeln, warum vorschüssig mehr bringt, ein Zahlenbeispiel.",
        pts: [
          R`**Rentenendwert (REW)** = Endwert regelmäßig gleicher Einzahlungen $E$`,
          R`**Vorschüssig** (am Periodenanfang): $K_n = E \cdot q \cdot \frac{q^n - 1}{q - 1}$`,
          R`**Nachschüssig** (am Periodenende): $K_n = E \cdot \frac{q^n - 1}{q - 1}$`,
          R`Vorschüssig ist genau $q$-mal so viel – jede Rate wird **eine Periode länger** verzinst`,
          R`Beispiel Vorlesung: 500 €, 2,5 %, 15 Jahre vorschüssig → $K_{15} \approx 9.190{,}11$ €`
        ] },
      { id: "q08", src: "pred", ref: "mathe/m-renten",
        q: "Wie bestimmen Sie bei der Rentenrechnung die Rate E und die Laufzeit n?",
        tip: "Nach E umstellen (durch den Rentenfaktor teilen) und nach n (erst qⁿ freistellen, dann ln) – mit der typischen Falle.",
        pts: [
          R`Rate: $E = \frac{K_n}{q \cdot \frac{q^n - 1}{q - 1}}$ (vorschüssig) bzw. $E = \frac{K_n}{\frac{q^n - 1}{q - 1}}$ (nachschüssig)`,
          R`Laufzeit (nachschüssig): $\frac{K_n}{E}(q - 1) + 1 = q^n$ → $n = \frac{\ln\left(\frac{K_n}{E}(q - 1) + 1\right)}{\ln q}$`,
          R`Vorschüssig: zuerst durch $E \cdot q$ teilen, dann genauso weiter`,
          R`**Falle:** $\ln$ nicht auf den ganzen Bruch anwenden – erst $q^n$ alleine stellen`
        ] },
      { id: "q09", src: "pred", ref: "mathe/m-zinseszins",
        q: "Nach wie vielen Jahren ist der Endbetrag der besseren Bank dreimal so groß wie der der schlechteren? Leiten Sie die allgemeine Formel her.",
        tip: "In deiner Mitschrift als „Klausur!“ markiert. Ansatz aufschreiben, K₀ kürzen, ln, nach n auflösen.",
        pts: [
          R`Ansatz: $3 \cdot K_0 \cdot q_1^n = K_0 \cdot q_2^n$ (gleiches $K_0$ und $n$, $p_1 < p_2$)`,
          R`$K_0$ **kürzt sich weg**: $3 \cdot q_1^n = q_2^n$`,
          R`$\ln$: $\ln 3 + n \ln q_1 = n \ln q_2$ → $n = \frac{\ln 3}{\ln q_2 - \ln q_1}$`,
          R`Allgemein für das $k$-Fache: $n = \frac{\ln k}{\ln q_2 - \ln q_1}$; bei unterjähriger Verzinsung $m \cdot \ln\left(1 + \frac{p}{100m}\right)$ statt $\ln q$`
        ] }
    ]
  };
})();

// =====================================================================
// 🚆 VBL 1 – Teil C: Bahnverkehr (Dräger, Hanisch, Hackelberg) · Kombinierter Verkehr · KEP-Dienste
// Bahn: keine Lernfragen-Folie → vermutete Fragen, Schwerpunkt auf deinen Markierungen („wichtig“/„sehr wichtig“)
// KV/KEP: aus deinen Vorlesungsnotizen (Prof-Hinweise) – vorläufig, bis die Foliensätze da sind
// =====================================================================
Object.assign(window.LERNFRAGEN.vbl1.sources, {
  bahn: { label: "Vermutete Prüfungsfragen – Bahnverkehr (Schwerpunkte aus deinen Markierungen)", official: false },
  kep: { label: "KEP-Dienste – Themen, die der Prof genannt hat (aus deinen Notizen)", official: true },
  kv: { label: "Kombinierter Verkehr – vermutete Prüfungsfragen (aus deinen Notizen)", official: false }
});
window.LERNFRAGEN.vbl1.items.push(
  // ---------- Bahnverkehr ----------
  { id: "c01", src: "bahn", ref: "vbl1/c-bahn",
    q: "Wie hat sich der Schienengüterverkehr durch die Bahnreform und die Liberalisierung in Deutschland und Europa verändert?",
    tip: "Vorher – Maßnahmen – Ergebnis. Mit EU-Richtlinie 91/440 und den Eisenbahnpaketen.",
    pts: [
      "**Vorher:** bürokratische Staatsbahn mit **Monopol**, starker Einfluss des Bundes, hohe Verluste (Personalkosten > Umsatz), über 60 Mrd. DM Schulden, Marktanteilsverlust",
      "**EU-Richtlinie 91/440:** unternehmerische Eigenständigkeit der Bahnen, **Trennung von Netz und Betrieb**; vier **Eisenbahnpakete** öffnen die Märkte schrittweise bis 2016",
      "**Bahnreform 1994** in Deutschland: Gründung der **DB AG**, unternehmerische Strukturen, **Wettbewerb auf der Schiene**",
      "Heute: **> 400 nichtbundeseigene Eisenbahnen (NE)**, rund 237 EVU im Schienengüterverkehr, das Netz ist **diskriminierungsfrei zugänglich**",
      "Folgen: zunehmender **intramodaler Wettbewerb** zur DB, Güterverkehrsleistung der Schiene steigt"
    ] },
  { id: "c02", src: "bahn", ref: "vbl1/c-bahn",
    q: "Beschreiben Sie das Leistungsprofil der Bahn im Vergleich zu Lkw und Binnenschiff. Welche Güter sind typisch für die Bahn?",
    tip: "Stärken, Schwächen, typische Güter – gern mit Zahlen aus dem Vergleich.",
    pts: [
      "**Stärken:** **Massenleistungsfähigkeit** (Zug bis ca. 4.000 t vs. Lkw 24 t), **Transportsicherheit/geringe Unfallhäufigkeit**, **Berechenbarkeit/Pünktlichkeit**, **Witterungsunabhängigkeit**",
      "**Umweltverträglich:** wenig Energieverbrauch und CO₂ je tkm",
      "**Schwächen:** geringe Durchschnittsgeschwindigkeit (ca. 20–30 km/h vs. Lkw 50 km/h), **wenige Netzzugänge** (nur noch rund 2.300 Gleisanschlüsse), wenig flexibel, oft Vor-/Nachlauf auf der Straße nötig",
      "**Typische Bahngüter:** Massengüter und schwere Güter – **Kohle, Erz, Kies/Sand, Salz, Holz, Stahl, Mineralöl, Chemie**, aber auch **Autos** und Großteile (z. B. Windräder)",
      "Modal Split: Schiene hält rund **19–20 %** der Verkehrsleistung (tkm), die Straße über 70 %"
    ] },
  { id: "c03", src: "bahn", ref: "vbl1/c-bahn",
    q: "Unterscheiden Sie intermodalen und intramodalen Wettbewerb im Schienengüterverkehr.",
    tip: "Je eine Definition + Beispiele + wie sich der Wettbewerb entwickelt.",
    pts: [
      "**Intermodal** = Wettbewerb **zwischen Verkehrsträgern**: Lkw ist größter Konkurrent (starker Preisdruck, u. a. durch osteuropäische Unternehmen), Binnenschiff auf dem Rhein, Short-Sea-Verkehre",
      "**Intramodal** = Wettbewerb **innerhalb der Schiene**: DB Cargo gegen andere EVU – ausländische Staatsbahnen und deren Töchter, Privatbahnen, Neugründungen",
      "Treiber: diskriminierungsfreier Netzzugang, Kapital neuer Investoren, Partnerschaften zwischen Bahnen",
      "Kunden **verteilen ihre Mengen auf mehrere Anbieter** → der Anteil der Wettbewerber der DB nimmt stetig zu"
    ] },
  { id: "c04", src: "bahn", ref: "vbl1/c-bahn",
    q: "Welche Besonderheiten erschweren den internationalen Schienengüterverkehr?",
    tip: "In vier Gruppen ordnen: Technik – Grenzprozesse – Zugang – Verkehrspolitik.",
    pts: [
      "**Technische Unterschiede:** 5 Stromsysteme, 7 Signal-/Zugsicherungssysteme, 3 Spurweiten, unterschiedliche Lichtraumprofile, Rechts- und Linksverkehr",
      "**Grenzprozesse:** Lok- und Lokführerwechsel, Bremsprobe, Wagenuntersuchung, Prüfung und Übergabe der Frachtdokumente, Zoll- und Gefahrgutformalitäten",
      "**Zugangsbedingungen:** Lizenzen, Fahrzeugzulassung, Trassenzuweisung und Trassenentgelte je Land; Sicherheits- und Sozialvorschriften",
      "**Verkehrspolitik:** ungleiche Belastung – z. B. Mineralölsteuer-Befreiung von Binnenschiff und Luftverkehr, unterschiedliche Infrastruktur- und externe Kosten",
      "Lösungen: Güterkorridore (z. B. Korridor A Rotterdam–Genua), **ETCS**, Mehrsystemloks, Kooperationen"
    ] },
  { id: "c05", src: "bahn", ref: "vbl1/c-bahn",
    q: "Was ist eine Trasse und welche Zuglängen sind in Deutschland erlaubt? Warum fordert man längere Güterzüge?",
    tip: "Deine Notiz: „wichtig“. Definition wörtlich können, dann Zuglängen und Nutzen langer Züge.",
    pts: [
      "**Trasse** = die Möglichkeit, einen **bestimmten Streckenabschnitt** zwischen zwei Orten in einem **bestimmten Zeitraum** mit einem Zug bestimmter Bauart zu nutzen (fahrplanmäßige Belegung von Gleisabschnitten)",
      "Trassen werden beim Netzbetreiber (DB InfraGO) bestellt und gegen **Trassenentgelt** genutzt",
      "Deutschland: Gesamtzuglänge max. **740 m**, Wagenzug max. **700 m**; Ausnahme **Padborg–Maschen 835 m** (andere Länder bis 750–850 m)",
      "Begrenzt durch Länge der **Bahnhofs- und Überholgleise**, Sicherungstechnik und Zugkräfte (EBO)",
      "**Längere Züge:** bis zu **30 % geringere Produktionskosten**, mehr Streckenkapazität ohne Neubau – brauchen aber Investitionen in Überholgleise und Technik"
    ] },
  { id: "c06", src: "bahn", ref: "vbl1/c-bahn",
    q: "Welche Zugangspunkte zum Schienennetz gibt es und welche Verträge braucht ein Gleisanschluss?",
    tip: "Zugangspunkte aufzählen, dann die drei Verträge des Gleisanschlusses mit Vertragspartner; Haupt- vs. Nebenanschließer.",
    pts: [
      "Zugangspunkte: **private Gleisanschlüsse**, Ladestraßen/Freiladegleise, Railports/Logistikzentren, **Seehäfen**, **Binnenhäfen**, **Güterverkehrszentren (GVZ)**, Umschlagbahnhöfe des KV, Automotive Compounds",
      "Zahl der Gleisanschlüsse ist stark gesunken: **1994 rund 11.700 → 2021 rund 2.300**",
      "Gleisanschluss = **nicht öffentliche Eisenbahninfrastruktur**, die der Anschließer betreibt",
      "Verträge: **Infrastrukturanschlussvertrag** mit dem Netzbetreiber (EIU, z. B. DB InfraGO) · **Betriebsgenehmigung** von EBA bzw. Landesbehörde · **Bedienungsvertrag** mit einem EVU (z. B. DB Cargo)",
      "**Hauptanschließer:** schließt direkt an das Netz eines EIU an · **Nebenanschließer:** schließt an eine andere Anlage an (Hauptanschließer, Industriestammgleis)"
    ] },
  { id: "c07", src: "bahn", ref: "vbl1/c-bahn",
    q: "Unterscheiden Sie Ganzzugverkehr, Einzelwagenverkehr und Kombinierten Verkehr als Produktionssysteme der Bahn.",
    tip: "Deine Notiz beim Einzelwagenverkehr: „wichtig“. Je System: Prinzip, typische Güter, Vor-/Nachteil.",
    pts: [
      "**Ganzzug:** fährt **direkt vom Versender zum Empfänger ohne Zwischenbehandlung – „Zug = Sendung“**; Massengüter in großen Mengen (Erz, Kohle, Kies, Mineralöl, Autos), bis ca. 6.000 t; günstig, aber stark auslastungsabhängig",
      "**Einzelwagen:** einzelne Wagen/Wagengruppen werden über ein **Knotenpunktsystem gebündelt**: Gleisanschluss → Satellit/Knotenbahnhof → **Rangierbahnhof** → Fernzug → Rangierbahnhof → Verteilung",
      "Einzelwagen: flexibel auch für **kleine Mengen**, aber aufwendig (Rangieren, Nah-Fern- und Fern-Nah-Umstellung) und teurer",
      "**Kombinierter Verkehr:** Sammlung und Verteilung auf der **Straße**, Hauptlauf auf der **Schiene**, Umschlag der **Ladeeinheiten** (Container, Wechselbehälter, Sattelauflieger) in Terminals – Direktzüge oder Drehscheibe (Hub)",
      "Produktionsformen im Netz: Nabe-Speiche (Hub), Stamm-/Flügelzüge, Linienzug, Direktzug"
    ] },
  { id: "c08", src: "bahn", ref: "vbl1/c-bahn",
    q: "Erklären Sie den Ablauf in einer Zugbildungsanlage (Rangierbahnhof).",
    tip: "Gleisgruppen in der Reihenfolge, was jeweils passiert; Beispiel Mannheim.",
    pts: [
      "**Einfahrgruppe:** Züge kommen an, werden abgestellt und **entkuppelt**",
      "**Ablaufberg:** Wagen werden über den Berg geschoben und rollen **gezielt gelenkt** (Fahrstraßen) in ihre Gleise",
      "**Richtungsgruppe:** Wagen werden **gezielt gebremst** und nach Zielrichtungen gesammelt; Umfahrungsgleis für Wagen mit Ablaufverbot",
      "**Ausfahrgruppe:** **kuppeln, Bremsleitungen verbinden (schlauchen), Bremsprobe**, Ausfahrt vorbereiten",
      "Beispiel **Rangierbahnhof Mannheim**: zweitgrößter von DB Cargo, rund 4.000 Wagen täglich, 40.000 Züge im Jahr"
    ] },
  { id: "c09", src: "bahn", ref: "vbl1/c-bahn",
    q: "Was geben Lastgrenze und Lademaß eines Güterwagens an?",
    tip: "Deine Notiz: „wichtig“. Je Begriff Definition + welche Strecke/welches Maß maßgeblich ist.",
    pts: [
      "**Lastgrenze** = **Höchstlademasse**, bis zu der ein Wagen auf Strecken einer bestimmten **Streckenklasse** beladen werden darf (Lastgrenzenraster am Wagen)",
      "Auf dem Weg gilt immer die **Strecke mit der geringsten Streckenklasse**",
      "Beförderungsart **S**: beladen bis **100 km/h**; mit höherer Geschwindigkeit (z. B. 120 km/h) uneingeschränkt nur leer",
      "**Lademaß** = Umriss, den die **Ladung nicht überragen** darf; maßgeblich ist das **kleinste Lademaß** auf dem Beförderungsweg (gemessen ab Schienenoberkante)",
      "Überschreitungen sind **Lademaßüberschreitungen (LÜ)** und brauchen eine Sondergenehmigung; Lademaß GC u. a. in Deutschland"
    ] },
  { id: "c10", src: "bahn", ref: "vbl1/c-bahn",
    q: "Was sind Privatgüterwagen und welche Vertragsbeziehungen bestehen zwischen Kunde, EVU, Halter und Werkstatt?",
    tip: "Deine Notiz: „wichtig“. Als Viereck aufbauen: wer – mit wem – welcher Vertrag.",
    pts: [
      "**Privatgüterwagen (P-Wagen)** gehören nicht dem EVU, sondern einem **Halter/Vermieter** – v. a. Kesselwagen (z. B. GATX, VTG, Ermewa), sonstige Wagen z. B. Transwaggon, On Rail, AAE",
      "**Kunde ↔ EVU:** Fracht- bzw. Beförderungsvertrag (das EVU ist Beförderer)",
      "**EVU ↔ Halter:** Verwendung der Wagen nach dem **AVV**",
      "**Halter ↔ Werkstatt:** Service-/Instandhaltungsvertrag; seit 2011 muss der Halter eine zuständige **Stelle für die Instandhaltung (ECM)** bei der ERA nachweisen",
      "Kunde ↔ Halter: Miet-/Leasingvertrag, wenn der Kunde die Wagen selbst stellt"
    ] },
  { id: "c11", src: "bahn", ref: "vbl1/c-bahn",
    q: "Was ist der AVV und was regelt er? Wie hängt er mit dem RIV zusammen?",
    tip: "Deine Notiz: „sehr wichtig“. Definition, Rechtsgrundlage, Prinzip „jeder mit jedem“, dann Inhalte aufzählen.",
    pts: [
      "**AVV = Allgemeiner Vertrag für die Verwendung von Güterwagen** – **multilateraler Vertrag** auf Grundlage des **COTIF 1999** und seiner Anlage **CUV**",
      "Regelt die **Überlassung von Güterwagen** als Beförderungsmittel an EVU im nationalen und internationalen Verkehr; **jeder Halter hat einen Vertrag mit jeder Bahn**, die AVV-Mitglied ist (über 600 Unterzeichner, > 600.000 Wagen)",
      "Inhalte: **Haftung** (Lieferfristüberschreitung, Schäden am Wagen und durch den Wagen), Schadensfeststellung und -abwicklung, **Wagenanschriften**, Zugriffsrechte des Halters",
      "Außerdem: Übernahme und Zurückweisung von Wagen, Beförderungsfristen, **Disposition leerer Wagen** (CUV-Wagenbrief), technische Zulassung, **Instandhaltung** und Wagenuntersuchungen",
      "**RIV** war das ältere internationale Wagenübereinkommen; der AVV hat es **2006 abgelöst** – das Kürzel „RIV“ steht aber noch an vielen Wagen"
    ] },
  { id: "c12", src: "bahn", ref: "vbl1/c-bahn",
    q: "Welche Rechtsgrundlagen gelten im nationalen und im grenzüberschreitenden Schienengüterverkehr? Vergleichen Sie die Haftung nach ALB/HGB und CIM.",
    tip: "National vs. international gegenüberstellen, dann Haftungszahlen.",
    pts: [
      "**National:** **HGB-Frachtrecht**, ergänzt durch die **ALB** des EVU (z. B. DB Cargo) und ggf. ADSp; dazu AEG, EBO, GGVSEB (Gefahrgut)",
      "**International:** **COTIF** mit Anhang B = **ER CIM** (Frachtvertrag, **CIM-Frachtbrief**), RID für Gefahrgut; im Osten SMGS (kombinierter CIM/SMGS-Frachtbrief)",
      "**HGB/ALB:** **8,33 SZR je kg**, je Schadenfall höchstens **1 Mio. € oder 2 SZR/kg** (der höhere Betrag); Lieferfrist max. **3-fache Fracht**; Verlustvermutung 30 Tage nach Ablauf der Lieferfrist",
      "**CIM:** verschuldensunabhängige **Obhutshaftung** bis **17 SZR je kg**; Lieferfristüberschreitung bis zur **4-fachen Fracht**; einjährige Verjährung",
      "ALB regeln u. a. Transportauftrag (Angaben nach **§ 408 HGB**), Wagenbestellung (bis **10 Uhr am Werktag vor dem Bedarfstag**), Be-/Entladung (§ 412 HGB), Gefahrgut (§ 410 HGB)"
    ] },
  { id: "c13", src: "bahn", ref: "vbl1/c-bahn",
    q: "Welche Pflichten haben Kunde und EVU nach den ALB bei Wagenstellung sowie Be- und Entladung?",
    tip: "Erst EVU, dann Kunde; § 412 HGB zur Verladung nennen.",
    pts: [
      "**EVU (z. B. DB Cargo):** stellt Wagen zur Verfügung, wenn sie bis **10 Uhr des Werktags vor dem Bedarfstag** bestellt sind",
      "**Kunde:** gibt Anzahl und Gattung der Wagen richtig und rechtzeitig an, **prüft** bereitgestellte Wagen vor dem Beladen, meldet Schäden sofort, nutzt Wagen nur vertragsgemäß und **haftet** für verursachte Schäden",
      "**Be- und Entladung** durch den Kunden nach den Verladerichtlinien – **§ 412 HGB:** der Absender lädt **beförderungssicher**, der Frachtführer sorgt für **betriebssichere** Verladung",
      "Wagen **vollständig geleert und gereinigt**, mit allen losen Teilen und **fristgerecht** zurückgeben; Ladereste beseitigen",
      "Gefahrgut: Absender muss die Gefahr rechtzeitig in Textform mitteilen (**§ 410 HGB**); Klassen 1, 2 und 7 brauchen eine schriftliche Übergabevereinbarung"
    ] },
  { id: "c14", src: "bahn", ref: "vbl1/c-bahn",
    q: "In welchen Bereichen kooperieren Bahnen und welche Verbände sind wichtig?",
    tip: "Bereiche mit Ziel, dann 4–5 Verbände mit Aufgabe.",
    pts: [
      "**Produktion** (z. B. HGK und DB Cargo, Fahrpläne abstimmen) → Wirtschaftlichkeit; **Personal** → Zugang zu Ressourcen, Streckenkenntnis",
      "**Vertrieb** und **Logistik** (Spediteure, 3PL/4PL, Häfen) → Marktstellung; **Transportequipment** (Wagen- und Lokpools, z. B. BR 189) → Skaleneffekte",
      "**Beschaffung** (gemeinsamer Einkauf von Loks/Wagen/Trassen) und **F&E/Technik** (Wagen, Signalsysteme, Umspuranlagen) → Kosten und Risiken teilen",
      "Verbände: **UIC** (weltweiter Bahnverband, 1922, Paris – Normen, Interoperabilität), **CER**, **OTIF** (zuständig für das COTIF), **CIT**, **UIRR** (Kombinierter Verkehr), **VDV**, EIM, OSShD"
    ] },
  { id: "c15", src: "bahn", ref: "vbl1/c-bahn",
    q: "Was sind externe Kosten des Verkehrs, wie kann man sie verringern und welche Innovationen machen die Schiene wettbewerbsfähiger?",
    tip: "Definition + Größenordnung, Internalisierung, dann 3–4 Innovationen mit Nutzen.",
    pts: [
      "**Externe Kosten** = Kosten, die Verkehrsteilnehmer verursachen, die aber die **Allgemeinheit trägt** – in Deutschland rund **149 Mrd. €** (2017), größter Posten **Unfallkosten**, dazu Klima, Luft, Lärm, Natur",
      "Verringern durch **Internalisierung**: entfernungsabhängige Maut, **lärmabhängige Trassenpreise**, Abgaben auf Treibhausgase, emissionsabhängige Gebühren; Emissionen vergleichen mit **EcoTransIT**",
      "**Digitale automatische Kupplung (DAK):** automatisches Kuppeln, Strom- und Datenleitung, längere/schwerere Züge, automatische Bremsprobe (rund 17.500 € je Wagen)",
      "**Lange Güterzüge** (bis 30 % Kostensenkung), **Wagon Intelligence/Sensorik**, **Wayside Monitoring** (zustandsbasierte Instandhaltung), Zweikraft-/Hybridloks, multifunktionale Wagen (m²)",
      "**Containerisierung:** rund 80–90 % der Transporte sind containerisierbar → günstiger Umschlag, einfacher Wagenpark"
    ] },

  // ---------- KEP-Dienste ----------
  { id: "k01", src: "kep", ref: "vbl1/c-kep",
    q: "Definieren Sie KEP-Dienste. Was unterscheidet die Segmente Kurier, Express und Paket?",
    tip: "Laut deinen Notizen ein Prof-Thema. Je Segment: Beförderung, Geschwindigkeit/Garantie, Sendungsart.",
    pts: [
      "**KEP** = Kurier-, Express- und Paketdienste: Beförderung **kleiner, leichter Sendungen** (Dokumente, Pakete) mit hoher Geschwindigkeit über flächendeckende Netze",
      "**Kurier:** Sendung wird **persönlich begleitet**, **direkt ohne Umschlag** befördert – am schnellsten und teuersten (z. B. dringende Ersatzteile, Dokumente)",
      "**Express:** **zeitgenau garantierte Zustellung** (z. B. „bis 10 Uhr“), läuft über Netze mit Umschlag",
      "**Paket:** **standardisierte Sendungen** (Gewichts- und Maßgrenzen, meist bis ca. 31,5 kg), stark **automatisierte Hub-Netze**, Regellaufzeit 24–48 h ohne Garantie",
      "Abgrenzung: Stückgut = **Paletten** (LTL/FTL-Netze), KEP = **Pakete** – beide brauchen **flächendeckende Netze mit mehreren Hubs**"
    ] },
  { id: "k02", src: "kep", ref: "vbl1/c-kep",
    q: "Ordnen Sie den KEP-Markt in den Logistikmarkt ein. Wie groß ist er und wie entwickelt er sich?",
    tip: "Zahlen aus deinen Notizen (Quelle laut Prof wichtig: BIEK-Studie) + Trend B2C/B2B mit Begründung.",
    pts: [
      "KEP macht rund **10 % des Logistikmarkts** aus und **wächst ständig** – seit 2015 um rund **50 %** (Quelle: KEP-Studie des Branchenverbands BIEK)",
      "Rund **4,4 Mrd. Sendungen** pro Jahr, Marktvolumen rund **30 Mrd. €**",
      "Der KEP-Markt ist **fast komplett outgesourced** – Versender stellen Pakete kaum selbst zu",
      "**B2C nimmt zu, B2B nimmt ab:** Treiber ist der **Online-Handel** (Privatkunden bestellen immer mehr), während B2B-Sendungen mit schwächerer Industrie stagnieren",
      "Folge: mehr Einzelzustellungen an Privathaushalte → Druck auf die **letzte Meile**"
    ] },
  { id: "k03", src: "kep", ref: "vbl1/c-kep",
    q: "Wer sind die wichtigsten und die neuen Player im KEP-Markt? Warum ist Amazon kein klassischer Paketdienstleister?",
    tip: "Etablierte Player, neue Player (Notiz: Lieferando, Flink), Abgrenzung Händler-Logistik.",
    pts: [
      "Etabliert: **DHL** (Deutsche Post), **Hermes, DPD, GLS, UPS, FedEx**",
      "Die Post war früher ein **Staatsmonopol** – heute ist der Markt weitgehend **privatisiert und liberalisiert**",
      "**Neue Player:** Quick-Commerce und Lieferplattformen wie **Flink** oder **Lieferando**",
      "Liefert ein **Händler seine eigene Ware selbst** aus (z. B. Gorillas, Flink), ist das **Händler-Logistik im Selbsteintritt – kein Kurierdienst**",
      "**Amazon** ist inzwischen der **größte Pakettransporteur**, transportiert aber vor allem **eigene** (Marktplatz-)Sendungen – also kein klassischer Paketdienstleister für fremde Versender"
    ] },
  { id: "k04", src: "kep", ref: "vbl1/c-kep",
    q: "Warum ändern die KEP-Anbieter ständig ihre Preise?",
    tip: "Laut deinen Notizen ein Prof-Thema. Kostenseite und Marktseite trennen.",
    pts: [
      "**Hoher Wettbewerbs- und Preisdruck** – viele Anbieter, neue Player drängen in den Markt",
      "**Kostenschwankungen:** Personal (Fahrermangel, Mindestlohn), **Energie/Diesel**, Maut (CO₂-Aufschlag)",
      "**Nachfrageschwankungen:** Saisonspitzen (Weihnachten, Black Friday) → **Peak-Zuschläge**",
      "**Marktmacht großer Versender** (z. B. Online-Händler) erzwingt individuelle Konditionen und Mengenrabatte",
      "Anbieter **differenzieren Preise** nach Segment (B2C/B2B), Größe, Zustellart (Haustür, Paketshop, Packstation)"
    ] },
  { id: "k05", src: "kep", ref: "vbl1/c-kep",
    q: "Beschreiben Sie die Transportkette im KEP-Bereich vom Hersteller bis zum Kunden.",
    tip: "Laut deinen Notizen ein Prof-Thema. Stationen in Reihenfolge + Beispiel Zentrallager Bad Hersfeld.",
    pts: [
      "**Hersteller/Händler** lagert meist in **einem zentralen Bestandslager** (E-Commerce: niedrige Lagerkosten, z. B. notebooksbilliger)",
      "**Abholung (Vorlauf)** beim Versender → **Depot/Paketzentrum** des KEP-Dienstes: Sortierung",
      "**Hauptlauf** nachts über **Hubs** zum Ziel-Paketzentrum → Sortierung auf **Zustelltouren**",
      "**Letzte Meile:** Zustellung an Haustür, Paketshop oder Packstation",
      "Zentrallager in **Bad Hersfeld**: dank zentraler Lage spätere **Cut-off-Zeit** – Ware kann später an den KEP-Dienst übergeben werden als z. B. aus Freiburg nach Hamburg"
    ] },
  { id: "k06", src: "kep", ref: "vbl1/c-kep",
    q: "Welche zwei Netzwerkarten sind bei Stückgut- und KEP-Diensten am gängigsten? Vergleichen Sie sie.",
    tip: "Direktverkehrsnetz vs. Hub-and-Spoke mit Vor- und Nachteilen.",
    pts: [
      "**Direktverkehrsnetz:** jedes Depot fährt **direkt** jedes andere Depot an – schnell, wenig Umschlag, lohnt sich nur bei **hohen Mengen je Relation**",
      "**Hub-and-Spoke:** alle Depots fahren zu einem oder mehreren **zentralen Hubs**, dort wird umgeschlagen – **wenige, gut ausgelastete Linien**",
      "Hub-and-Spoke: wirtschaftlich auch bei **schwachen Relationen**, aber **zusätzlicher Umschlag**, Umwege, Schadensrisiko",
      "In der Praxis oft **Mischform**: starke Relationen direkt, schwache über den Hub"
    ] },
  { id: "k07", src: "kep", ref: "vbl1/c-kep",
    q: "Warum ist die letzte Meile so teuer und welche Lösungen gibt es in der Citylogistik?",
    tip: "Probleme der letzten Meile, dann Citylogistik-Lösungen (Notiz: Mikrohubs, Folie 63).",
    pts: [
      "Letzte Meile = **teuerster Abschnitt**: **hohe Stoppzahl**, wenig Sendungen je Stopp, Fehlzustellungen, Parkplatzsuche",
      "**Wenig Begeisterung der Bevölkerung**: Lieferverkehr, Halten in zweiter Reihe, Lärm und Emissionen in der Stadt",
      "**Citylogistik** hat die meisten neuen Projekte",
      "**Mikrohubs** mitten in der Stadt: Umschlag auf **kleinere Fahrzeuge** (Lastenräder, E-Transporter)",
      "Weitere Ansätze: **Paketstationen/Paketshops**, gebündelte Belieferung, Zustellfenster, alternative Antriebe"
    ] },

  // ---------- Kombinierter Verkehr ----------
  { id: "v01", src: "kv", ref: "vbl1/c-kv",
    q: "Was ist Kombinierter Verkehr (KV)? Unterscheiden Sie begleiteten und unbegleiteten KV.",
    tip: "Definition mit Lang/Kurz-Prinzip, Ladeeinheiten, dann begleitet vs. unbegleitet.",
    pts: [
      "Güterbeförderung, bei der der **längere Teil (Hauptlauf) auf Bahn oder Binnenschiff** und nur der **kürzere Vor- und Nachlauf auf dem Lkw** stattfindet",
      "Es wird nur die **Ladeeinheit umgeschlagen** (Container, Wechselbehälter, Sattelauflieger) – das Gut selbst bleibt darin (**ungebrochen**)",
      "**Unbegleiteter KV:** nur die Ladeeinheit fährt auf der Bahn, der Lkw bleibt in der Region – der Normalfall",
      "**Begleiteter KV (Rollende Landstraße):** der **ganze Lkw** fährt auf dem Zug mit, der Fahrer reist mit",
      "Der **KV-Operateur** ist „wie ein Spediteur“: organisiert die Züge und verkauft Stellplätze an Speditionen"
    ] },
  { id: "v02", src: "kv", ref: "vbl1/c-kv",
    q: "Welche Vorteile und Nachteile hat der Kombinierte Verkehr? Ab welcher Entfernung lohnt er sich?",
    tip: "Vorteile (Gewicht, Zeit, Umwelt), Nachteile (Flexibilität, Umschlag), Faustregel 300 km.",
    pts: [
      "Im Vor- und Nachlauf darf der Lkw **44 t statt 40 t** wiegen – also **4 t mehr transportieren**",
      "Auf langen Strecken **schneller als der Lkw**, weil der Zug **keine Lenk- und Ruhezeiten** braucht; weniger Fahrer nötig (Fahrermangel)",
      "**Umweltfreundlicher** (weniger CO₂), weniger Maut und Straßenverkehr",
      "Nachteile: **weniger flexibel** – feste Abfahrten und **Cut-off-Zeiten** im Terminal, zusätzliche **Umschlagkosten**, Terminal muss in der Nähe sein",
      "Faustregel aus der Vorlesung: **ab rund 300 km** lohnt es sich, über KV nachzudenken"
    ] },
  { id: "v03", src: "kv", ref: "vbl1/c-kv",
    q: "Welche Ladeeinheiten und Wagen werden im KV eingesetzt und welche Voraussetzungen müssen für KV gegeben sein?",
    tip: "Wagen ↔ Ladeeinheit zuordnen. Deine Notiz: „Folie 36–38 = muss gegeben sein“ – mit den Folien abgleichen.",
    pts: [
      "**Taschenwagen** → **Sattelauflieger** (kranbar)",
      "**Containertragwagen** → **Container und Wechselbehälter**",
      "Umschlag im **KV-Terminal** per Portalkran oder Reachstacker",
      "Voraussetzungen: **kranbare Ladeeinheit**, **Terminal** in erreichbarer Nähe, ausreichend **lange Strecke** (ab ca. 300 km), Mengen und Zeitfenster passen zu **Abfahrten/Cut-off**",
      "Entwicklung: seit der **Liberalisierung (Bahnreform 1994)** steigt die Güterverkehrsleistung, der **Online-Handel** wächst – KV gewinnt an Bedeutung"
    ] }
);

// =====================================================================
// 📦 Logistik – Teil „Funktionen“: Beschaffungslogistik (Prof. Dr. Michael Schröder)
// Offizielle Lernziele am Ende jedes Kapitels („Sie sollen erläutern können, …“)
// =====================================================================
(function () {
  const R = String.raw;
  window.LERNFRAGEN.logistik.sources.schroeder = { label: "Lernziele Prof. Schröder – Beschaffungslogistik (Kapitel 1–5)", official: true };
  const S = (id, kap, q, pts, tip) => ({ id, src: "schroeder", ref: "logistik/s-beschaffung", q: `Kap. ${kap}: ${q}`, pts, tip });
  window.LERNFRAGEN.logistik.items.push(
    // ---------- Kapitel 1: Grundlagen und strategische Bedeutung ----------
    S("s101", 1, "In welche logistischen Grundfunktionen kann Logistik unterteilt werden?", [
      "**Transport = Raumüberbrückung** – reagiert auf **Dislozierung** (Produktion und Bedarf an verschiedenen Orten)",
      "**Lagern = Zeitausgleich** – reagiert auf unterschiedliche **Zeitstrukturen** von Angebot und Nachfrage",
      "**Umschlag = Bündeln und Ordnen** (Mengen- und Sortenänderung) – reagiert auf **Arbeitsteiligkeit** in der Wertschöpfung",
      "Logistiker sind „**Orchestratoren**“ von Material- und Warenströmen; Logistik ist eine **Querschnittsfunktion** mit Knoten und Kanten"
    ], "Drei Grundfunktionen je mit dem Problem, das sie lösen (Folie 5)."),
    S("s102", 1, "Was für Beschaffungsobjekte gibt es?", [
      "**Material:** Roh-, Hilfs- und Betriebsstoffe, Zulieferteile/Baugruppen/Module, **Handelswaren**, **Ersatzteile**",
      "**Dienstleistungen** – z. B. Frachteneinkauf",
      "**Betriebsmittel** (Maschinen, Anlagen)",
      "**Personal**, **Informationen** (zweckgebundenes Wissen) und **finanzielle Mittel** (Kapital)",
      "Beschaffung = Summe aller Maßnahmen zur **Versorgung der Unternehmung**; der **Einkauf** kümmert sich v. a. um das „Material“"
    ]),
    S("s103", 1, "In welche Teilbereiche lässt sich die Materialwirtschaft grundsätzlich segmentieren?", [
      "**Einkauf:** Beschaffungsmarktforschung, Beschaffungsanbahnung und -abschluss, Preis- und Wertanalyse, **Lieferantenbewertung**",
      "**Disposition:** Bestandsverwaltung, **Bedarfsermittlung**, Bestellmengen und -politiken, Anlieferstrategien",
      "**Lagerhaltung:** Warenannahme und Wareneingangsprüfung, Ein-, Um- und Auslagerung, **Kommissionierung**, innerbetrieblicher Transport"
    ]),
    S("s104", 1, "Wie und warum hat sich der Einkauf bzw. die Beschaffung bis heute entwickelt?", [
      "**1950 Nachkriegsjahre:** Versorgung um jeden Preis",
      "**1960 Wirtschaftswunder:** preisbewusstes Einkaufen · **1970:** Beginn der EDV (Mikroprozessor)",
      "**1980:** Boom der Fremdvergabe – Beginn von **Outsourcing** · **1990:** neue Wettbewerber, Einkauf mit Marketingbezug",
      "**2000:** globale Chancen – **Global Sourcing**",
      "**2020+:** globale Krisen → **Resilienz und Nachhaltigkeit**",
      "Treiber: Marktlage (Knappheit → Überfluss), Technik, Globalisierung, Krisen"
    ], "Chronologisch mit je einem Stichwort (Folie 12)."),
    S("s105", 1, "Warum kann der Einkauf signifikanten Einfluss auf das Unternehmensergebnis nehmen?", [
      "Ausgangslage: 1,0 Mio. € Umsatz, **50 % Materialkosten** (500 T€), Gewinn 50 T€ = **5 % Umsatzrendite**",
      "Ziel 65 T€ Gewinn über den **Vertrieb**: Umsatz muss auf **1,3 Mio. € (+30 %)** steigen – mehr Arbeit, schwer am Markt",
      "Über den **Einkauf**: Materialkosten nur um **3 % (15 T€) auf 485 T€** senken → gleicher Gewinn, Rendite **6,5 %**",
      "Jeder eingesparte Euro im Einkauf wirkt **direkt auf den Gewinn** → **Hebelwirkung des Einkaufs**, besonders bei hohem Materialkostenanteil"
    ], "Das Rechenbeispiel von Folie 13 nachrechnen können."),
    S("s106", 1, "Welche Trade-offs müssen in der Beschaffungslogistik berücksichtigt werden?", [
      "**Niedrige Beschaffungskosten ↔ hohe Qualität** (bessere Qualität kostet mehr)",
      "**Geringe Bestände ↔ hohe Versorgungssicherheit / Risikominimierung**",
      "**Kurze Beschaffungszeiten ↔ Nachhaltigkeit und Kosten** (z. B. Seeschiff China → DE dauert lange, ist aber günstig und emissionsärmer als Luftfracht)",
      "**Flexibilität** wirkt auf mehrere Ziele, positiv wie negativ",
      "Wichtig: Die Wirkungen (Pfeile) können je nach Situation **auch anders** ausfallen"
    ], "Deine Notiz: „Pfeile können auch anders sein!“ – 2–3 Zielpaare mit Begründung."),
    S("s107", 1, "Was sind Fundamental- und Instrumentalziele und wie grenzt man sie in der Beschaffungslogistik ab?", [
      "**Fundamentalziel:** wird **um seiner selbst willen** verfolgt, braucht keine weitere Begründung",
      "**Instrumentalziel:** wird verfolgt, weil es **ein anderes, fundamentales Ziel fördert** – Test: „**Warum ist dieses Ziel wichtig?**“",
      "Notfalls Instrumentalziel streichen und durch das Fundamentalziel ersetzen (Beispiel Urlaub: „viel Sonne“ dient eigentlich dem Wohlgefühl)",
      "Beschaffung – **Fundamentalziele:** Versorgungssicherheit, niedrige Beschaffungskosten, niedrige Lagerhaltungskosten, hohe Qualität",
      "**Instrumentalziele:** geringe Bestände, kurze Beschaffungszeiten, Nachhaltigkeit, Flexibilität; **Risikominimierung** = Querschnittsanforderung"
    ], "Laut deiner Notiz auch wichtig für Projektarbeiten."),

    // ---------- Kapitel 2: Bedarfsermittlung und Güterklassifikation ----------
    S("s201", 2, "Welche Bedarfsarten gibt es?", [
      "**Primärbedarf:** marktbestimmte, verkaufsfähige **Endprodukte**, Baugruppen oder Ersatzteile",
      "**Sekundärbedarf:** Rohstoffe, Einzelteile und Baugruppen **für die Herstellung** des Primärbedarfs – daraus **abgeleitet**",
      "**Tertiärbedarf:** Hilfs- und Betriebsstoffe, Verschleißwerkzeuge – meist **nicht Bestandteil** des Endprodukts",
      R`**Brutto- vs. Nettobedarf:** Nettobedarf = Bruttobedarf − Lagerbestand − Unterwegsbestand + reservierter Bestand`
    ]),
    S("s202", 2, "Was ist der Unterschied zwischen programmgebundener und verbrauchsorientierter Bedarfsermittlung?", [
      "**Deterministisch/programmgebunden:** Bedarf wird aus dem **Produktionsprogramm** (Stückliste) **genau berechnet** – „ich weiß genau, was ich brauche“",
      "Geeignet für hochwertige Teile mit planbarem Bedarf (z. B. A-Güter)",
      "**Stochastisch/verbrauchsorientiert:** Bedarf wird aus **Vergangenheitsverbräuchen prognostiziert** (Statistik, Mittelwert, Streuung)",
      "Geeignet für geringwertige Teile mit regelmäßigem Verbrauch (B-/C-Güter); Unsicherheit über **Sicherheitsbestand** abfedern"
    ]),
    S("s203", 2, "Welcher Unterschied besteht zwischen empirischer Varianz und Stichprobenvarianz?", [
      R`**Empirische Varianz** (Grundgesamtheit): Summe der quadrierten Abweichungen **geteilt durch $n$** – Beispiel 2, 4, 6 Jahre: $\mu = 4$, $\sigma^2 = 8/3 = 2{,}67$`,
      R`Bei einer **Stichprobe** schätzt Teilen durch $n$ die wahre Varianz **zu niedrig** (Verzerrung um den Faktor $\frac{n-1}{n}$)`,
      R`**Stichprobenvarianz** korrigiert das: Summe der quadrierten Abweichungen **geteilt durch $n-1$**`,
      R`Beweis im Beispiel: Mittel aller 9 Stichproben mit $n$ = 1,33 (falsch) – mit $n-1$ = **2,67** = wahre Varianz`,
      R`Standardabweichung $\sigma = \sqrt{\sigma^2}$ – z. B. Nachfrage $\mu = 500$, $\sigma^2 = 6.687$, $\sigma \approx 82$ Stück/Woche`
    ]),
    S("s204", 2, "Welchen Zweck erfüllen die ABC- und die XYZ-Analyse und wie wendet man sie an?", [
      "**ABC-Analyse:** teilt Güter nach ihrem **wertmäßigen Verbrauch** ein – Güter nach Verbrauchswert sortieren, **kumulieren**, Grenzen ziehen",
      "**A** = hoher Wertanteil (wenige Teile) → rechtfertigt hohen Planungsaufwand · **B** = mittel · **C** = niedriger Wertanteil (viele Teile) → verbrauchsorientierte Planung",
      R`**XYZ-Analyse:** teilt nach **Regelmäßigkeit des Verbrauchs** ein – Maß: **Variationskoeffizient** $VK = \frac{\sigma}{\mu}$`,
      "**X** = 0 bis 0,25 (konstant, gut vorhersagbar) · **Y** = > 0,25 bis 0,5 (schwankend) · **Z** = > 0,5 (sporadisch, schlecht vorhersagbar)",
      "Zweck: **Planungsaufwand dort konzentrieren, wo er sich lohnt**, und passende Beschaffungsformen wählen"
    ], "Deine Notiz zur ABC-Analyse: „verstehen, aber keine Klausurfrage“ – Zweck und Vorgehen trotzdem erklären können."),
    S("s205", 2, "Wie lassen sich Material- und Warengruppen in einem Portfolio zweckmäßig systematisieren?", [
      "Achsen: **Ergebnisbeitrag** (niedrig/hoch) und **Versorgungsrisiko** (niedrig/hoch)",
      "**Unkritische Güter** (niedrig/niedrig): Standardteile, C-Teile, Büromaterial",
      "**Hebelprodukte** (Ergebnisbeitrag hoch/Risiko niedrig): Standard-Rohstoffe, Verpackungen",
      "**Engpassgüter** (Ergebnisbeitrag niedrig/Risiko hoch): Spezialchemikalien, seltene Ersatzteile",
      "**Strategische Produkte** (hoch/hoch): Schlüsselkomponenten, Halbleiter",
      "Ergänzend: **kombinierte ABC-XYZ-Matrix** ordnet Beschaffungsformen zu (z. B. AX → JIT, CZ → Einzelbeschaffung)"
    ], "Vier Felder mit Achsen und Beispielen."),
    S("s206", 2, "Welche Vorgehensweisen sind für jede Material- bzw. Warengruppe zu empfehlen?", [
      "**Hebelprodukte:** Marktmacht ausnutzen, Produktsubstitution, Mix aus langfristigen Verträgen und Spotmarkt",
      "**Strategische Produkte:** genaue Marktforschung, **langfristige Lieferantenbeziehungen**, Make-or-buy prüfen",
      "**Unkritische Güter:** Produktstandardisierung, **effiziente Abwicklung**, Auftragsmengen optimieren",
      "**Engpassgüter:** **Mengen sichern**, Lieferantenkontrolle, **Sicherheitsbestände**, Ausweichpläne",
      "Aus der ABC-XYZ-Matrix: **JIT** für AX/AY/BX, **Kanban**, **Konsignationslager/VMI** für mittlere Felder, **Einzelbeschaffung** für CZ"
    ]),

    // ---------- Kapitel 3: Beschaffungsstrategien und Lieferantenmanagement ----------
    S("s301", 3, "Wie lassen sich Beschaffungsstrategien in einem Portfolio systematisieren?", [
      "Achsen wieder **Ergebnisbeitrag** und **Versorgungsrisiko**",
      "**Global Sourcing** (Ergebnisbeitrag hoch, Risiko niedrig): „die ganze Welt ist der Supermarkt“",
      "**Modular Sourcing** (hoch/hoch): ganze **Module** statt Einzelteile vom Systemlieferanten",
      "**Single bzw. Sole Sourcing** (niedrig/niedrig): ein Lieferant – Sole Sourcing = **erzwungen** (nur ein Anbieter existiert)",
      "**Dual/Multiple Sourcing** (Ergebnisbeitrag niedrig, Risiko hoch): zwei bzw. **mehr als zwei** Lieferanten"
    ]),
    S("s302", 3, "Welche Vorgehensweisen sind für jede Beschaffungsstrategie zu empfehlen?", [
      "**Global Sourcing:** globale **Kostenunterschiede** nutzen, Lieferkapazitäten sichern, **Local-content-Vorgaben** erfüllen",
      "**Single Sourcing:** **Mengenrabatte**, geringere Transport- und **Transaktionskosten**, hohe Qualitätsstandards durch enge Partnerschaft",
      "**Dual/Multiple Sourcing:** **Stillstand minimieren**, Wettbewerb nutzen, niedrige Wechselbarrieren, neue Entwicklungen erfassen",
      "**Modular Sourcing:** Komplexität an **Modullieferanten** abgeben (z. B. VW kauft den kompletten Außenspiegel)"
    ]),
    S("s303", 3, "Wie strukturiert man Beschaffungsstrategien nach räumlicher Distanz?", [
      "Portfolio aus Ergebnisbeitrag und Versorgungsrisiko → **Global Sourcing, Nearshoring, Local Sourcing**",
      "**Niedrig/niedrig:** Aufwand für global zu hoch → **Local Sourcing**: Transportwege kurz halten, Administration senken",
      "Hohes **Versorgungsrisiko:** Risikoabsicherung durch **kurze Reaktionszeiten** und hohe Versorgungssicherheit → Local Sourcing/**Nearshoring**",
      "**Hoch/hoch:** **Just-in-Time-Konzepte** brauchen Nähe – kurze Reaktionszeiten, hohe Pünktlichkeit",
      "Hoher Ergebnisbeitrag bei niedrigem Risiko: **Global Sourcing** bzw. Nearshoring lohnt sich"
    ]),
    S("s304", 3, "Welche Bedeutung hat Modular Sourcing heute in vielen Branchen und warum?", [
      "Treiber: **Individualisierung der Nachfrage** → riesige **Variantenvielfalt** (Audi A1: rund **2,8 Trillionen** Kombinationen)",
      "Komplexität sinkt durch **neue Prozessstufen**: Teil → Komponente → Baugruppe → **Modul** → Endprodukt",
      "Folge: **Modullieferanten** bündeln mehrere Unterlieferanten und liefern **komplette Module** (z. B. Pkw-Außenspiegel)",
      "Vorteile für den Hersteller: **weniger direkte Lieferanten**, geringere Komplexität, Fokus aufs Kerngeschäft",
      "Risiko: **Abhängigkeit** vom Modullieferanten → enge, langfristige Partnerschaft"
    ]),
    S("s305", 3, "Welche Faktoren sind bei der Auswahl der Güteranlieferung zu diskutieren?", [
      "**Güterstruktur:** Produktprogramm, Produktgestaltung, **Fertigungstiefe** („Wie viel mache ich vom Produkt selbst?“)",
      "**Lieferantenstruktur:** Anzahl der Lieferanten, **Standorte**, Transportwege",
      "**Produktionsanbindung:** Anzahl der Übergabepunkte, **Lagerkapazitäten**, zeitliche Restriktionen",
      "Daraus folgt die Form: **Einzelbeschaffung, Vorratsbeschaffung oder produktionssynchrone Beschaffung (JIT)**"
    ]),
    S("s306", 3, "Welche Vor- und Nachteile haben Einzel-, Vorrats- und Just-in-Time-Beschaffung?", [
      "**Einzelbeschaffung** (im Bedarfsfall, auftragsbezogen, Einzelfertigung): + keine Lager- und **Kapitalbindungskosten** · − ungünstige Konditionen, v. a. in Hochpreisphasen",
      "**Vorratsbeschaffung:** + hohe **Materialverfügbarkeit**, Mengenrabatte, weniger bestellfixe Kosten, Unabhängigkeit von Lieferengpässen und Preisschwankungen",
      "**Vorratsbeschaffung:** − Flächenbedarf/Lagerkosten, **Kapitalbindung**, Gefahr von Verderb, Obsoleszenz, Schwund",
      "**Just-in-Time:** + **kaum Bestand**, geringe Kapitalbindung, kurze Durchlaufzeiten · − hohe **Abhängigkeit** und Störanfälligkeit, hohe Anforderungen an Lieferanten und Logistik",
      "Vergleich: Vorrat = große Mengen, eher preisorientiert, lose Beziehung · JIT = kleine Mengen in festen Intervallen, qualitätsorientiert, **enge Kooperation, IT-Anbindung zwingend**"
    ]),
    S("s307", 3, "Was ist ein Konsignationslager und welche Vorteile sind damit verbunden?", [
      "**Lager des Lieferanten beim Abnehmer** – strenge Kennzeichnungspflicht",
      "Der **Lieferant bleibt Eigentümer** bis zur Entnahme; **Fakturierung erst bei Entnahme**; alleiniges Verfügungsrecht hat der Kunde",
      "**Vorteil Abnehmer:** hohe Verfügbarkeit **ohne Kapitalbindungskosten**",
      "**Vorteile Lieferant:** freie Flächen im eigenen Versandlager, mehr Freiheit beim Disponieren, Kundenbindung",
      "Rahmenvertrag regelt kaufmännisch (Ort, Lagerkosten, Preise, Eigentumsübergang, Sanktionen bei Stockouts) und operativ (Mindest-/Maximalbestand, Reichweite, Sicherheitsbestand, Zugang, Entnahmeregistrierung)"
    ]),
    S("s308", 3, "In welchem Zusammenhang könnte eine Just-in-Sequence-Versorgung zweckmäßig sein?", [
      "**JIS** = Just-in-Time **plus richtige Reihenfolge**: Teile kommen **sequenziert** in der Einbaureihenfolge an",
      "Statt **artrein** verpackt (alle gleichen Teile zusammen) wird **sequenziert** verpackt (passend zum jeweiligen Fahrzeug am Band)",
      "Zweckmäßig bei **hoher Variantenvielfalt** und **Fließfertigung** – typisch Automobilindustrie (Sitze, Cockpits, Stoßfänger)",
      "Vorteile: kein Lager und kein Suchen am Band, weniger Fläche · Voraussetzung: exakte Abrufe, Lieferant nah am Werk"
    ]),
    S("s309", 3, "Wie und warum kann eine Just-in-Time-Versorgung physisch und vertraglich ausgestaltet sein?", [
      "Ziel: **nachfragegenaue, bestandslose** Versorgung – hohe Lieferflexibilität, weniger Unsicherheit, kurze Durchlaufzeiten",
      "**Physisch:** Direkt-Abruf, **Lieferantenansiedlung in Werksnähe**; Anlieferung als **Direktverkehr**, über **Lieferantenpark/GVZ** bzw. Speditionslager oder über einen **Gebietsspediteur**",
      "**Vertraglich:** **langfristige (relationale) Verträge**, Null-Fehler-Prinzip, Qualitätskontrolle beim Lieferanten",
      "**Planungshierarchie:** Rahmenvereinbarung (12 Monate, ±30 %) → Rahmenauftrag (3 Monate, ±10 %) → **Lieferabruf** (1 Monat, ±2 %) → **Feinabruf** (10 Arbeitstage, **0 % = Frozen Zone**)",
      "Je näher am Liefertermin, desto **weniger Abweichung** ist erlaubt – das gibt dem Lieferanten Planungssicherheit"
    ], "Physisch (Anlieferkonzepte) und vertraglich (Abrufsystem, Frozen Zone) trennen."),
    S("s310", 3, "Welche Quellen und Kriterien sind bei der Lieferantensuche wichtig?", [
      "**Quellen:** Lieferantenportale, **Fachmessen**, Empfehlungen aus dem Netzwerk, **Ausschreibungen**, IHK, Marktforschungsberichte, Pressemitteilungen",
      "**Kriterien:** Preisniveau, Produkt-/Leistungsfähigkeit, technologische Kompetenz, **Zertifizierungen** (z. B. Nachhaltigkeit)",
      "Außerdem: **Produktionskapazitäten, Lieferfähigkeit, geografische Lage, finanzielle Stabilität**",
      "Ziel sind meist **langfristige Lieferbeziehungen**"
    ]),
    S("s311", 3, "Wie wendet man die Nutzwertanalyse als Bewertungsverfahren kritisch an?", [
      R`Vorgehen: **Kriterien bestimmen und gewichten** → Alternativen je Kriterium bewerten → **Nutzwert = Σ (Bewertung × Gewichtung)**`,
      "Sie schafft **keine objektive Wahrheit**, sondern strukturiert **subjektive Urteile** transparent – „dreifach subjektiv“ (Kriterien, Gewichte, Bewertungen)",
      "**Subjektivität kontrollieren:** Kriterien und Gewichte **vorher** festlegen, Gewichtung von Bewertung trennen, Ausschlusskriterien, mehrere Bewerter, **Sensitivitätsanalyse**",
      "Kippt das Ergebnis bei kleinen Änderungen, ist die Entscheidung **nicht robust**",
      "**Nicht geeignet** bei Scheingenauigkeit (7,23 vs. 7,18), bei Verhandlungsentscheidungen (Budget, Standortschließung) und bei nicht messbaren Kriterien"
    ], "Deine Notizen: Das Rechenbeispiel ist nicht klausurrelevant – die kritische Anwendung schon. Für wissenschaftliche Arbeiten nur zum Herleiten, nicht zum Begründen."),

    // ---------- Kapitel 4: Bestellmengen- und Bestandsmanagement ----------
    S("s401", 4, "Welche Bedeutung nehmen Bestände im gesamten Güterflussnetzwerk ein?", [
      "Bestände gibt es **an jeder Stufe**: Beschaffungs- (inbound), Produktions- (throughput) und Distributionslager (outbound) der Industrie",
      "Dazu Lager im **Groß- und Einzelhandel**, bei **Logistikunternehmen**, Konsumentenlager der Haushalte und Recyclinglager",
      "Sie **entkoppeln** die Stufen des Güterflusses und puffern Schwankungen",
      "Damit binden sie entlang der ganzen Kette **Kapital**"
    ]),
    S("s402", 4, "Wie wirken sich Bestände auf den Unternehmenserfolg aus?", [
      "Über den **ROI** (Return on Investment) = **Umsatzrendite × Kapitalumschlag**",
      "Bestände erhöhen das **Umlaufvermögen** → mehr **gebundenes Kapital** → geringerer Kapitalumschlag → **ROI sinkt**",
      "Bestände verursachen **Kosten** (Lager, Zinsen, Risiko) → Gewinn und Umsatzrendite sinken",
      "Andererseits sichern sie **Lieferfähigkeit und Umsatz** → Balance nötig"
    ]),
    S("s403", 4, "Aus welchen Bestandteilen setzt sich ein Lagerbestand bzw. dessen Verlauf zusammen?", [
      "Idealisierter **Sägezahnverlauf**: Bestand sinkt durch Verbrauch, steigt mit jeder Lieferung um die **Bestellmenge**",
      "**Meldebestand/Bestellpunkt:** bei Erreichen wird bestellt – deckt die **Nachfrage während der Wiederbeschaffungszeit**",
      "**Sicherheitsbestand:** Puffer gegen Verbrauchs- und Lieferschwankungen, wird im Normalfall nicht angegriffen",
      R`Durchschnittsbestand ≈ $\frac{q}{2}$ + Sicherheitsbestand`
    ]),
    S("s404", 4, "Was sind Lagerreichweite und Lagerumschlagshäufigkeit und wie berechnet man sie?", [
      R`**Lagerreichweite** = Bestand / Ø-Verbrauch – wie lange reicht der Bestand?`,
      R`**Lagerumschlag** = Jahresverbrauch / Ø-Bestand – wie oft wird der Bestand erneuert?`,
      R`Zusammenhang: $LRW = \frac{365}{LU}$ und $LU = \frac{365}{LRW}$`,
      "**Hohe Reichweite:** hohe Versorgungssicherheit, geringer Bestelldruck, aber hohe Lagerkosten",
      "**Hoher Umschlag:** geringe Kapitalbindung, frische Bestände, aber häufige Nachschubprozesse"
    ]),
    S("s405", 4, "Welcher Wandel in der Sichtweise von Beständen ist zu beobachten?", [
      "Früher: Bestände als **Sicherheit** – sie ermöglichen Überbrückung von Störungen, reibungslose Produktion, prompte Lieferung, konstante Auslastung",
      "Lean-Sicht: Bestände **verdecken Probleme** – störanfällige Prozesse, unabgestimmte Kapazitäten, mangelnde Flexibilität, Ausschuss, mangelnde Liefertreue",
      "Daher Bestandsabbau (JIT, Lean) – Bestände als „**Verschwendung**“",
      "Heute nach globalen Krisen: **Resilienz** – Bestände gezielt als **Puffer** einsetzen, Balance aus Effizienz und Sicherheit"
    ]),
    S("s406", 4, "Welche Motive der Lagerhaltung gibt es?", [
      "**Marketing:** **Akquisitionsfunktion** – Kaufimpulse auslösen (Ware ist sichtbar und sofort verfügbar)",
      "**Spekulationsfunktion:** erwartete Preisänderungen am Markt ausnutzen",
      "**Veredelungsfunktion:** Reifeprozesse und Wertsteigerung (z. B. Wein, Käse, Holz)",
      "**Assortierungsfunktion:** bedarfsgerechtes **Sortiment** bilden",
      "**Logistik/Produktion:** **Ausgleichsfunktion** (ungleiche Kapazitäten überbrücken) und **Sicherungsfunktion** (gegen Prognosefehler)"
    ]),
    S("s407", 4, "Welche vier Kostenkategorien beeinflussen Entscheidungen im Bestandsmanagement?", [
      "**Variable Bestellkosten:** proportional zur Menge – inkl. **Einstandspreise** und mengenabhängiger Transportkosten",
      "**Fixe Bestellkosten:** **je Bestellung**, unabhängig von der Menge – Verwaltung, Handhabung",
      "**Lagerhaltungskosten:** Lagerinfrastruktur, **Opportunitätskosten des gebundenen Kapitals**, Bestandsrisiko",
      "**Fehlmengenkosten:** Leerkosten, Nacharbeit, Nachlieferung, Vertragsstrafen, **entgangener Umsatz, Loss of Goodwill**"
    ]),
    S("s408", 4, "Wie lassen sich Lagerhaltungskosten systematisieren?", [
      "**Lagerhaltungskosten = Lagerkosten + Kapitalbindungskosten**",
      "**Lagerkosten:** Fläche/Raum, Ausstattung (Regale, Flurförderzeuge, IT/LVS), Personal, Abschreibungen, Energie → **Lagerkostensatz**",
      "**Kapitalbindungskosten:** entgangener Zins alternativer Anlagen bzw. Fremdkapitalzins → **kalkulatorischer Zinssatz**; Bestandsrisiken (Schwund, Verderb, Obsoleszenz) → **kalkulatorischer Wagnissatz**",
      "**Lagerhaltungskostensatz = Lagerkostensatz + kalk. Zinssatz + kalk. Wagnissatz**",
      "Senken durch: **Betriebskosten sparen** (Anbieterwechsel, Leasing, Outsourcing), **Bestand reduzieren** (Bestellpolitik, Eigentumsübergang), **Umschlag erhöhen**"
    ]),
    S("s409", 4, "Wie schlagen sich Fehlbestände in Fehlmengenkosten nieder und wie lassen sie sich systematisieren?", [
      "Stockout in t1 → **Kunde wartet (Back Sales)** oder **wartet nicht (Lost Sales)**",
      "Back Sales: reguläre Nachlieferung → **keine** Fehlmengenkosten · Eilbestellung → Kosten = **zusätzlicher Aufwand**",
      "Lost Sales: Kunde kauft ein **Substitut** → Kosten = **Differenz der Deckungsbeiträge** · kauft danach wie bisher → **entgangener DB in t1**",
      "Kunde kauft danach **weniger** → entgangener DB in t1 + Summe der Folgeperioden",
      "Kunde kommt **gar nicht mehr** → **entgangener DB ab t1** (schlimmster Fall, Loss of Goodwill)"
    ]),
    S("s410", 4, "Wie errechnet man mit der Gaußschen Standardnormalverteilung statistische Sicherheiten?", [
      "Annahme: Nachfrage ist **normalverteilt** mit Mittelwert µ und Standardabweichung σ",
      "Abstand vom Mittelwert wird **in Standardabweichungen** gemessen; normiert zur **Standardnormalverteilung** (µ = 0, σ = 1)",
      "Die **Fläche Φ** links vom z-Wert = **Wahrscheinlichkeit** (= statistische Sicherheit/Lieferservicegrad)",
      R`**Sicherheitsbestand = z × σ** – Beispiel σ = 82: 95 % → z = 1,65 → **135 Stück**; 97,7 % → z = 2,00 → **164 Stück**`,
      "Tabellen lesen: vom gewünschten **Prozentwert (Φ) zum z-Wert** und umgekehrt"
    ], "Deine Notiz: „ganz wichtig“ (Folie 78) – Φ ↔ z sicher ablesen können."),
    S("s411", 4, "Was ist der z-Wert, wie interpretiert und wie wendet man ihn an?", [
      R`$z = \frac{x - \mu}{\sigma}$ – Abstand eines Werts vom Mittelwert **in Standardabweichungen**`,
      "Beispiel Pickleistung: 8 Positionen über dem Mittel sind bei **großem σ** normal, bei **kleinem σ** außergewöhnlich gut – erst z macht es vergleichbar",
      "**Interpretation:** z = −2 → nur **2,28 %** aller Werte liegen darunter; z = 0 → 50 %; z = 1 → 84,13 %",
      R`**Anwendung:** Sicherheitsfaktor für eine Ziel-Sicherheit: z(95 %) ≈ 1,65 → Sicherheitsbestand $= z \cdot \sigma$`
    ]),
    S("s412", 4, "Welche Auswirkungen haben Veränderungen des Lieferservice auf Bestandskosten und Nachfragereaktionen?", [
      "Mit steigendem **Lieferservicegrad** steigen Sicherheitsbestand und **Kapitalbindungskosten überproportional** – gegen 100 % **asymptotisch gegen unendlich**",
      "Beispiel (10 €/Stück, 8 %): 90 % → 84 € · 99,95 % → 215 € Kapitalbindungskosten",
      "Die **Nachfrage** reagiert nur in einem **relevanten Bereich** auf besseren Service (S-Kurve) – darüber kaum noch zusätzlicher Umsatz",
      "→ **Optimaler Lieferservicegrad liegt unter 100 %**: dort, wo der Abstand von Umsatz zu Bestandskosten (Gewinn) maximal ist"
    ]),
    S("s413", 4, "Wie unterscheiden sich Bestellrhythmus- von Bestellpunktverfahren?", [
      "**Bestellrhythmusverfahren (t):** Bestellung in **festen Zeitabständen** – Bestand muss nicht laufend überwacht werden",
      "**Bestellpunktverfahren (s):** Bestellung, sobald der Bestand den **Meldebestand s** erreicht – laufende Bestandskontrolle nötig",
      "Menge jeweils **fix (q)** oder **variabel bis zum Zielbestand S** → vier Politiken: **tq, tS, sq, sS**",
      "Rhythmus = planbar, wenig Aufwand · Punkt = reagiert auf den **tatsächlichen Verbrauch**"
    ]),
    S("s414", 4, "Welche Vor- und Nachteile haben die vier grundsätzlichen Bestellverfahren?", [
      "**tq** (fester Rhythmus, feste Menge): + geringer Dispositionsaufwand, keine permanente Kontrolle · − reagiert schlecht auf Schwankungen → Über- oder Fehlbestände",
      "**tS** (fester Rhythmus, auffüllen auf S): + administrative Effizienz, Bündelung, Mengenrabatte · − Fehlmengen bei Spitzen, Totbestände, S regelmäßig prüfen",
      "**sq** (Meldebestand, feste Menge): + reagiert auf Verbrauch, optimale Bestellmenge, gleiche Transportkapazität · − hoher Aufwand, unregelmäßige Zeitpunkte, laufende Kontrolle",
      "**sS** (Meldebestand, auffüllen auf S): + passt Menge an die Lage an – gut bei schwankendem Verbrauch und teuren Fehlmengen · − laufende Überwachung, schwierige Transportplanung, s und S sorgfältig bestimmen"
    ]),
    S("s415", 4, "Was ist das Grundkonzept der Andlerschen Losgrößenformel und welche Annahmen stehen dahinter?", [
      R`Gesamtkosten $K = B \cdot p + K_f \cdot \frac{B}{q} + \frac{q}{2} \cdot p \cdot i$ (Einkauf + Bestellkosten + Lagerhaltungskosten)`,
      "**Zielkonflikt:** große Mengen → wenige Bestellungen, aber hohe Lagerkosten; kleine Mengen → umgekehrt",
      R`Ableiten und null setzen: $q^* = \sqrt{\frac{2 \cdot B \cdot K_f}{p \cdot i}}$ – im Optimum sind **Bestell- und Lagerhaltungskosten gleich hoch**`,
      "Annahmen: **konstanter, bekannter Bedarf**, feste Preise (keine Rabatte), konstante Bestellkosten und Lagerhaltungskostensatz, **keine Fehlmengen**, sofortige Lieferung, unbegrenzte Lager- und Finanzkapazität, ein Artikel"
    ]),
    S("s416", 4, "Wie formalisiert das News-Vendor-Modell die Bestellmengenplanung?", [
      "Einmalige Bestellung vor unsicherer Nachfrage (Zeitungsverkäufer): **Übrig bleibt Wertverlust**, zu wenig kostet Gewinn",
      R`**Überbestandskosten** $c_o = k - r$ (Kosten − Rückgabepreis) = 1,00 − 0,50 = **0,50 €**`,
      R`**Unterbestandskosten** $c_u = p - k$ (Preis − Kosten) = 3,00 − 1,00 = **2,00 €**`,
      "Für eine Bestellmenge: **erwarteter Überbestand × c_o + erwarteter Unterbestand × c_u** = erwartete Kosten (Beispiel q = 4: 1,2 × 0,50 + 0,2 × 2,00 = 1,00 €)",
      "Optimal ist die Menge, bei der die **Verteilungsfunktion das kritische Verhältnis** erreicht"
    ]),
    S("s417", 4, "Was ist das kritische Verhältnis und wie wird es angewandt?", [
      R`**Kritisches Verhältnis** $= \frac{c_u}{c_u + c_o}$ – im Beispiel $\frac{2}{2 + 0{,}5} = 0{,}8$`,
      "Optimale Bestellmenge: dort, wo die **Wahrscheinlichkeit, dass die Nachfrage ≤ q ist, = kritisches Verhältnis** (hier 80 %)",
      R`Bei Normalverteilung: kritisches Verhältnis als Servicegrad → **z-Wert** aus der Tabelle → $S^* = \mu + z \cdot \sigma$`,
      "Hohe Unterbestandskosten (hohe Marge) → hohes Verhältnis → **mehr bestellen**"
    ]),
    S("s418", 4, "Welche Verbrauchsfolgebewertungen gibt es und welche sind wo erlaubt?", [
      "**FIFO** (first in, first out): bei steigenden Preisen Verbrauch zu alten, niedrigen Preisen → Gewinn höher, Vorräte höher bewertet",
      "**LIFO** (last in, first out): bei steigenden Preisen Gewinn niedriger → **niedrigere Steuerlast**",
      "**Durchschnittsmethode** (periodisch/gleitend gewogen): realistischer Mischpreis, sehr verbreitet · **FEFO** (first expired, first out): eher Lagerprinzip (Lebensmittel, Medikamente)",
      "**LOFO / HIFO:** niedrigster bzw. höchster Preis zuerst – stark ergebnissteuernd, nur interne Analysen",
      "**HGB:** FIFO, LIFO, Durchschnitt erlaubt · **IFRS:** FIFO und Durchschnitt erlaubt, **LIFO nicht** · FEFO, LOFO, HIFO regelmäßig **nicht zulässig**"
    ]),

    // ---------- Kapitel 5: Lagersysteme und Lagerplatzvergabe ----------
    S("s501", 5, "Welche grundsätzlichen Faktoren sind bei der Lagerplanung zu diskutieren?", [
      "Kaskade: **Layout/Zonierung → Sortimentsreinheit → Lagerplatzvergabe → Prioritäten**",
      "**Zonierung** nach Gütereigenschaften: Temperatur, Gefahrstoffe, Sperrgut, Langgut, Kleinteile, Flüssigkeiten, Gase",
      "**Sortimentsreinheit:** getrennt nach Chargen, Serien, Kunden, Regionen, Quarantäne",
      "**Lagerplatzvergabe:** Festplatz oder chaotisch",
      "**Prioritäten:** Wegeoptimierung (Gewicht, Volumen, Stapelbarkeit, Zugriffshäufigkeit ABC) und Querverteilung (Engstellen, Bundles, Ausfallsicherheit)"
    ]),
    S("s502", 5, "Welche Lagerungsarten gibt es und welche Vor- und Nachteile haben sie?", [
      "**Bodenlager** (Block- oder Reihenlager): + geringe Investition, flexibel, einfach · − geringe Höhennutzung, hoher Flächenbedarf, begrenzte Stapelbarkeit",
      "**Regallager** (Paletten-, Fachboden-, Kragarmregal): + hohe Raumausnutzung, strukturiert, direkter Zugriff · − hohe Investition, Regaltechnik und Fördermittel nötig",
      "**Speziallager** (Silos, Tanks, Schüttgut-, Hänge-, Explosivstofflager): + an besondere Gütereigenschaften angepasst · − teuer in Anschaffung und Betrieb, technisch und rechtlich anspruchsvoll"
    ]),
    S("s503", 5, "Wie kann man die Lagertechnik systematisieren?", [
      "**Statische Lagerung:** die Ware bleibt am Platz – **Palettenregal, Kanallagersystem, Lagerlift**",
      "**Dynamische Lagerung:** die Ware bzw. das Regal bewegt sich – **Schwerkraft-Durchlaufregal, Schieberegal, Umlaufregal**",
      "Moderne Variante der dynamischen Lagerung: **AutoStore** (Behälterlager mit Robotern)"
    ]),
    S("s504", 5, "Was ist das Neue am System AutoStore?", [
      "Behälter werden **direkt übereinander gestapelt** in einem **Würfel-Raster (Grid)** – ohne Gänge",
      "**Roboter fahren auf dem Raster** und holen die Behälter von oben heraus",
      "Prinzip **„Ware zur Person“**: Behälter kommen zum Kommissionierplatz, Mitarbeiter laufen nicht",
      "Folge: **sehr hohe Raumausnutzung**, gut skalierbar (mehr Roboter), hohe Pickleistung"
    ]),
    S("s505", 5, "Welche Optionen der Lagerplatzorganisation sind für welche Art von Lägern zweckmäßig?", [
      "**Festplatzvergabe:** jeder Artikel immer am gleichen Platz → für **kleine/mittlere Läger** mit gleichbleibenden Artikeln und **geringer Artikelvielfalt** (z. B. Ersatzteillager)",
      "**Chaotische Einlagerung:** Artikel dorthin, wo gerade ein **geeigneter freier Platz** ist → für **große Läger** mit vielen Artikeln und wechselnden Beständen (z. B. **E-Commerce**)",
      "Chaotisch geht praktisch nur mit **Lagerverwaltungssystem (LVS)** und mobiler Datenerfassung (MDE)"
    ]),
    S("s506", 5, "Was sind die Vor- und Nachteile von Festplatzvergabe und chaotischer Einlagerung?", [
      "**Festplatz +** übersichtlich, einfach, geringer Suchaufwand",
      "**Festplatz −** schlechte Raumnutzung (Plätze werden freigehalten), Leerflächen bei schwankenden Beständen, unflexibel bei Sortimentsänderungen",
      "**Chaotisch +** sehr hohe Raumausnutzung, hohe Flexibilität",
      "**Chaotisch −** ohne LVS kaum praktikabel, Personal auf **MDE** angewiesen, hohe Anforderungen an die **Datenpflege**"
    ])
  );
})();
