/*
 * VBL 1 – Teil C: Bahnverkehr, Kombinierter Verkehr, KEP-Dienste
 * Quellen: Folien „Bahnverkehr“ (Dräger, Hanisch, Hackelberg, WSTL 26) + Julians Notizen zu KV und KEP.
 * KV und KEP: vorläufig aus den Notizen – wird ergänzt, sobald die Foliensätze da sind.
 * important: true = von Julian als „wichtig“ markiert oder vom Prof hervorgehoben.
 */
(function () {
  const f = window.BUILTIN_FOLDERS.find(x => x.id === "vbl1");
  if (!f) return;
  const decks = [
    {
      id: "c-bahn",
      name: "C1 · Bahnverkehr: Markt, Netz, Produktion & Recht",
      description: "Dräger/Hanisch/Hackelberg: Liberalisierung · Leistungsprofil · Trassen · Gleisanschluss · Ganzzug/Einzelwagen · Güterwagen · AVV · ALB/CIM · Umwelt",
      cards: [
        { id: "r01", q: "Was änderte die EU-Richtlinie 91/440 im Eisenbahnmarkt?", a: "Sie stärkte die unternehmerische Eigenständigkeit der Bahnen und trennte Netz und Betrieb. Vier Eisenbahnpakete öffneten danach die Märkte schrittweise bis 2016." },
        { id: "r02", q: "Was waren Probleme der Bahn vor der Bahnreform 1994 – und was änderte sich?", a: "Vorher: bürokratische Staatsbahn mit Monopol, starker Bundeseinfluss, hohe Verluste (Personalkosten > Umsatz), über 60 Mrd. DM Schulden, Marktanteilsverlust.\nDanach: DB AG mit unternehmerischen Strukturen, Wettbewerb auf der Schiene, Schuldenabbau, „Renaissance der Schiene“.", important: true },
        { id: "r03", q: "Wie viele Eisenbahnen außer DB Cargo sind im Schienengüterverkehr tätig?", a: "Über 400 nichtbundeseigene Eisenbahnen (NE); rund 237 EVU sind im Schienengüterverkehr aktiv – das Netz ist diskriminierungsfrei zugänglich." },
        { id: "r04", q: "Öffentliche vs. nicht-öffentliche Eisenbahnen (§ 3 AEG)?", a: "Öffentlich: gewerbsmäßiger Betrieb, von jedermann nutzbar, inkl. Betreiber öffentlicher Infrastruktur.\nNicht-öffentlich: keine Beförderung auf dem öffentlichen Netz, für bestimmte Auftraggeber bzw. auf eigenem Netz – v. a. Werks-, Hafen- und Industriebahnen." },
        { id: "r05", q: "Welche Stärken hat die Bahn im Leistungsprofil?", a: "Massenleistungsfähigkeit (Zug bis ca. 4.000 t), Transportsicherheit/geringe Unfallhäufigkeit, Berechenbarkeit/Pünktlichkeit, hohe Umweltverträglichkeit (wenig Energie und Emissionen), Witterungsunabhängigkeit.", important: true },
        { id: "r06", q: "Typische Bahngüter?", a: "Massengüter und schwere Güter: Kohle, Erz, Kies/Sand, Salz, Holz, Stahl, Mineralöl, Chemie – aber auch Autos und Großteile wie Windräder." },
        { id: "r07", q: "Lkw, Bahn, Binnenschiff: maximale Sendungsgröße und Durchschnittsgeschwindigkeit?", a: "Lkw: 24 t, ca. 50 km/h · Bahn: 4.000 t, ca. 20–30 km/h · Binnenschiff: 16.000 t, ca. 6 km/h." },
        { id: "r08", q: "Intermodaler vs. intramodaler Wettbewerb?", a: "Intermodal = zwischen Verkehrsträgern (Lkw als größter Konkurrent, Binnenschiff auf dem Rhein, Short Sea).\nIntramodal = innerhalb der Schiene: DB Cargo gegen ausländische Staatsbahnen, Privatbahnen und Neugründungen – nimmt stetig zu.", important: true },
        { id: "r09", q: "Welche technischen Unterschiede erschweren den internationalen Schienengüterverkehr?", a: "5 Stromsysteme, 7 Signal-/Zugsicherungssysteme, 3 Spurweiten, unterschiedliche Lichtraumprofile, Rechts-/Linksverkehr. An der Grenze: Lok- und Lokführerwechsel, Bremsprobe, Wagenuntersuchung, Dokumente, Zoll/Gefahrgut." },
        { id: "r10", q: "Was ist eine Trasse?", a: "Die Möglichkeit, einen bestimmten Streckenabschnitt des Schienennetzes (zwischen zwei Orten) in einem bestimmten Zeitraum mit einem Zug bestimmter Bauart zu nutzen – die fahrplanmäßige Belegung von Gleisabschnitten.", important: true },
        { id: "r11", q: "Wie lang darf ein Güterzug in Deutschland sein?", a: "Gesamtzuglänge max. 740 m, Wagenzuglänge max. 700 m. Ausnahme: Padborg (DK) – Maschen bei Hamburg mit 835 m. Begrenzt durch Bahnhofs-/Überholgleise und Sicherungstechnik." },
        { id: "r12", q: "Welche drei Verträge braucht ein Gleisanschluss?", a: "Infrastrukturanschlussvertrag mit dem Netzbetreiber (EIU, z. B. DB InfraGO) · Betriebsgenehmigung von EBA bzw. Landesbehörde · Bedienungsvertrag mit einem EVU (z. B. DB Cargo).", important: true },
        { id: "r13", q: "Hauptanschließer vs. Nebenanschließer?", a: "Hauptanschließer: eigene Gleisanlage, direkt an das Netz eines EIU angeschlossen.\nNebenanschließer: schließt an eine andere Anlage an (Hauptanschließer oder Industriestammgleis)." },
        { id: "r14", q: "Wie hat sich die Zahl der Gleisanschlüsse entwickelt?", a: "Stark rückläufig: 1994 ca. 11.700 → 2021 ca. 2.300 – ein Grund, warum oft Vor-/Nachlauf auf der Straße nötig ist." },
        { id: "r15", q: "Was ist ein Ganzzug?", a: "Ein Zug, der vom Versender direkt zum Empfänger fährt, ohne betriebliche Zwischenbehandlung: Zug = Sendung. Für Massengüter in großen Mengen (Erz, Kohle, Kies, Mineralöl, Autos), bis ca. 6.000 t.", important: true },
        { id: "r16", q: "Wie funktioniert der Einzelwagenverkehr?", a: "Einzelne Wagen werden über ein flexibles Knotenpunktsystem gebündelt: Gleisanschluss → Satellit/Knotenbahnhof (Nahbereich) → Rangierbahnhof → Fernzug → Rangierbahnhof → Verteilung zum Empfänger. Flexibel für kleine Mengen, aber rangieraufwendig.", important: true },
        { id: "r17", q: "Die Gleisgruppen einer Zugbildungsanlage in der richtigen Reihenfolge?", a: "Einfahrgruppe (abstellen, entkuppeln) → Ablaufberg (abdrücken, gezielt lenken) → Richtungsgruppe (gezielt bremsen, sammeln) → Ausfahrgruppe (kuppeln, schlauchen, Bremsprobe)." },
        { id: "r18", q: "Was gibt die Lastgrenze eines Güterwagens an?", a: "Die Höchstlademasse, bis zu der der Wagen auf Strecken einer bestimmten Streckenklasse beladen werden darf. Maßgeblich ist immer die geringste Streckenklasse auf dem Weg. „S“: beladen bis 100 km/h.", important: true },
        { id: "r19", q: "Was ist das Lademaß?", a: "Die Begrenzungslinie, die die Ladung nicht überragen darf. Maßgeblich ist das kleinste Lademaß auf dem Beförderungsweg; Überschreitungen heißen Lademaßüberschreitung (LÜ)." },
        { id: "r20", q: "Was sind Privatgüterwagen (P-Wagen)?", a: "Güterwagen, die nicht dem EVU, sondern einem Halter gehören (v. a. Kesselwagen, z. B. GATX, VTG, Ermewa). Kunde ↔ EVU: Fracht-/Beförderungsvertrag · EVU ↔ Halter: AVV · Halter ↔ Werkstatt: Instandhaltung (ECM-Nachweis bei der ERA).", important: true },
        { id: "r21", q: "Was ist der AVV?", a: "Allgemeiner Vertrag für die Verwendung von Güterwagen: multilateraler Vertrag auf Grundlage des COTIF 1999 (Anlage CUV). Regelt die Überlassung von Güterwagen an EVU – jeder Halter mit jeder Bahn. Hat 2006 das alte RIV abgelöst.", important: true },
        { id: "r22", q: "Was regelt der AVV inhaltlich?", a: "Haftung (Lieferfrist, Schäden am und durch den Wagen), Schadensabwicklung, Wagenanschriften, Zugriffsrechte des Halters, Übernahme/Zurückweisung, Beförderungsfristen, Leerwagendisposition (CUV-Wagenbrief), Zulassung, Instandhaltung, Wagenuntersuchungen.", important: true },
        { id: "r23", q: "Welche Rechtsgrundlagen gelten national und international im Schienengüterverkehr?", a: "National: HGB-Frachtrecht + ALB des EVU (+ ggf. ADSp), AEG, EBO, GGVSEB.\nInternational: COTIF mit ER CIM (CIM-Frachtbrief), RID für Gefahrgut; Richtung Osten SMGS (kombinierter CIM/SMGS-Frachtbrief)." },
        { id: "r24", q: "Haftung nach ALB/HGB vs. CIM?", a: "ALB/HGB: 8,33 SZR/kg, je Schadenfall max. 1 Mio. € oder 2 SZR/kg (der höhere Betrag); Lieferfrist max. 3-fache Fracht.\nCIM: verschuldensunabhängige Obhutshaftung bis 17 SZR/kg; Lieferfrist bis 4-fache Fracht; Verjährung 1 Jahr.", important: true },
        { id: "r25", q: "Bis wann müssen Wagen bei DB Cargo bestellt werden?", a: "Bis 10 Uhr des Werktags vor dem Bedarfstag (ALB Ziffer 4/5)." },
        { id: "r26", q: "Wer verlädt nach § 412 HGB?", a: "Der Absender lädt, staut und befestigt das Gut beförderungssicher und entlädt es; der Frachtführer sorgt für die betriebssichere Verladung." },
        { id: "r27", q: "Was sind externe Kosten des Verkehrs?", a: "Kosten, die Verkehrsteilnehmer verursachen, die aber die Allgemeinheit trägt – in Deutschland ca. 149 Mrd. € (2017), größter Anteil Unfallkosten (41 %), dazu Klima, Luft, Lärm, Natur. Gegenmittel: Internalisierung (Maut, lärmabhängige Trassenpreise, CO₂-Abgaben)." },
        { id: "r28", q: "Was bringt die Digitale Automatische Kupplung (DAK)?", a: "Automatisches Kuppeln mit Luft-, Strom- und Datenleitung, höhere Zug-/Druckkräfte → längere, schwerere Züge, automatische Bremsprobe, Zustandsmonitoring, weniger Instandhaltung. Kosten ca. 17.500 € je Wagen." },
        { id: "r29", q: "Welche Verbände sind im Schienengüterverkehr wichtig?", a: "UIC (weltweiter Eisenbahnverband, 1922, Paris – Normen, Interoperabilität), CER, OTIF (zuständig für das COTIF), CIT, UIRR (Kombinierter Verkehr), VDV, EIM, OSShD." }
      ],
      quiz: []
    },
    {
      id: "c-kv",
      name: "C2 · Kombinierter Verkehr (vorläufig aus deinen Notizen)",
      description: "Lang/kurz-Prinzip · Ladeeinheiten & Wagen · KV-Operateur · 44 t · ab 300 km · Vor- und Nachteile",
      cards: [
        { id: "v01", q: "Was ist Kombinierter Verkehr (KV)?", a: "Güterbeförderung, bei der der längere Hauptlauf auf Bahn oder Binnenschiff und nur der kürzere Vor- und Nachlauf auf dem Lkw stattfindet. Umgeschlagen wird nur die Ladeeinheit, das Gut bleibt darin.", important: true },
        { id: "v02", q: "Wie viel darf ein Lkw im Vor- und Nachlauf des KV wiegen?", a: "44 t statt 40 t zulässiges Gesamtgewicht – er darf also 4 t mehr transportieren.", important: true },
        { id: "v03", q: "Welcher Wagen transportiert Sattelauflieger, welcher Container und Wechselbehälter?", a: "Taschenwagen → Sattelauflieger. Containertragwagen → Container und Wechselbehälter." },
        { id: "v04", q: "Was macht ein KV-Operateur?", a: "Er ist „wie ein Spediteur“: organisiert die KV-Züge, kauft Traktion und Terminalleistung ein und verkauft Stellplätze an Speditionen." },
        { id: "v05", q: "Begleiteter vs. unbegleiteter KV?", a: "Unbegleitet: nur die Ladeeinheit (Container, Wechselbehälter, Sattelauflieger) fährt mit – der Normalfall.\nBegleitet (Rollende Landstraße): der ganze Lkw fährt auf dem Zug mit, der Fahrer reist mit." },
        { id: "v06", q: "Ab welcher Entfernung lohnt sich KV laut Vorlesung?", a: "Ab rund 300 km kann man über KV nachdenken – dann lohnt es sich.", important: true },
        { id: "v07", q: "Warum ist der Zug im KV auf langen Strecken schneller als der Lkw – und wo ist er schwächer?", a: "Schneller, weil der Zug keine Lenk- und Ruhezeiten braucht. Schwächer bei der Flexibilität: feste Abfahrten und Cut-off-Zeiten im Terminal, zusätzlicher Umschlag." },
        { id: "v08", q: "Was trieb die Entwicklung des Güterverkehrs auf der Schiene laut Vorlesung?", a: "Die Liberalisierung (Bahnreform 1994) ließ die Güterverkehrsleistung steigen; dazu wächst der Online-Handel." }
      ],
      quiz: []
    },
    {
      id: "c-kep",
      name: "C3 · KEP-Dienste (vorläufig aus deinen Notizen)",
      description: "Kurier/Express/Paket · Markt (BIEK) · B2C/B2B · Player · Preise · Transportkette · Netze · letzte Meile & Citylogistik",
      cards: [
        { id: "k01", q: "Was unterscheidet Kurier, Express und Paket?", a: "Kurier: persönlich begleitet, direkt ohne Umschlag, am schnellsten.\nExpress: zeitgenau garantierte Zustellung über Netze.\nPaket: standardisierte Sendungen (meist bis ca. 31,5 kg) über automatisierte Hub-Netze, 24–48 h ohne Garantie.", important: true },
        { id: "k02", q: "Wie groß ist der KEP-Markt?", a: "Rund 10 % des Logistikmarkts, ca. 4,4 Mrd. Sendungen und rund 30 Mrd. € pro Jahr; seit 2015 um ca. 50 % gewachsen (Quelle: BIEK-KEP-Studie).", important: true },
        { id: "k03", q: "Wie stark ist der KEP-Markt outgesourced?", a: "Fast komplett – Versender stellen Pakete kaum selbst zu." },
        { id: "k04", q: "Warum nimmt B2C im KEP-Markt zu und B2B ab?", a: "Der Online-Handel wächst: Privatkunden bestellen immer mehr, während B2B-Sendungen mit schwächerer Industrie stagnieren.", important: true },
        { id: "k05", q: "Stückgut vs. KEP – was wird jeweils transportiert?", a: "Stückgut: Paletten (Netze für LTL/FTL). KEP: Pakete. Beide sind flächendeckend und brauchen mehrere Hubs." },
        { id: "k06", q: "Sind Gorillas oder Flink Kurierdienste?", a: "Nein – liefert ein Händler seine eigene Ware selbst aus, ist das Händler-Logistik im Selbsteintritt, kein Kurier. (Dachser dagegen ist ein Logistikdienstleister, LDL.)" },
        { id: "k07", q: "Warum ist Amazon kein klassischer Paketdienstleister?", a: "Amazon ist der größte Pakettransporteur, transportiert aber vor allem eigene (Marktplatz-)Sendungen statt als Dienstleister für fremde Versender." },
        { id: "k08", q: "Warum lohnt sich ein Zentrallager z. B. in Bad Hersfeld für Online-Händler?", a: "Ein zentrales Bestandslager senkt die Lagerkosten, und dank zentraler Lage kann die Ware später (spätere Cut-off-Zeit) an den KEP-Dienst übergeben werden – besser als z. B. aus Freiburg nach Hamburg." },
        { id: "k09", q: "Welche zwei Netzwerkarten sind bei Stückgut und KEP am gängigsten?", a: "Direktverkehrsnetz (jedes Depot fährt jedes andere direkt an) und Hub-and-Spoke (alle über zentrale Hubs).", important: true },
        { id: "k10", q: "Warum ist die letzte Meile so teuer – und was hilft?", a: "Hohe Stoppzahl, wenig Sendungen je Stopp, Fehlzustellungen, wenig Akzeptanz der Bevölkerung. Lösungen der Citylogistik: Mikrohubs mitten in der Stadt mit Umschlag auf kleinere Fahrzeuge (Lastenräder, E-Transporter), Paketstationen.", important: true },
        { id: "k11", q: "Warum ändern KEP-Anbieter ständig ihre Preise?", a: "Wettbewerbsdruck und neue Player, schwankende Kosten (Personal, Diesel, Maut), Saisonspitzen (Peak-Zuschläge), Marktmacht großer Versender, Preisdifferenzierung nach Segment und Zustellart.", important: true }
      ],
      quiz: []
    }
  ];
  const at = f.decks.findIndex(d => d.id === "lernfragen");
  f.decks.splice(at >= 0 ? at : f.decks.length, 0, ...decks);

  // Multiple Choice: erste Antwort = richtig (wird beim Anzeigen gemischt)
  window.MC_DATA = window.MC_DATA || {};
  Object.assign(window.MC_DATA, {
    "vbl1/c-bahn/r01": ["Trennung von Netz und Betrieb", "Verbot privater Eisenbahnen", "Verstaatlichung aller Netze", "Einheitlicher EU-Trassenpreis"],
    "vbl1/c-bahn/r02": ["Monopol, Schulden → DB AG im Wettbewerb", "Wettbewerb, Gewinne → Staatsbahn", "Monopol, Gewinne → Verkauf ans Ausland", "Wettbewerb, Schulden → Netzschließung"],
    "vbl1/c-bahn/r03": ["Über 400 nichtbundeseigene Bahnen", "Rund 40 nichtbundeseigene Bahnen", "Über 4.000 nichtbundeseigene Bahnen", "Keine – DB Cargo ist allein"],
    "vbl1/c-bahn/r04": ["Öffentlich für jedermann · nicht-öffentlich = Werksbahnen", "Öffentlich = Werksbahnen · nicht-öffentlich für jedermann", "Öffentlich = nur Personenverkehr · nicht-öffentlich = Güter", "Öffentlich = Staatsbahnen · nicht-öffentlich = Privatbahnen"],
    "vbl1/c-bahn/r05": ["Massenleistung, Sicherheit, Pünktlichkeit", "Flexibilität, Netzdichte, Haus zu Haus", "Geschwindigkeit, Netzdichte, Flexibilität", "Haus zu Haus, kleine Mengen, Tempo"],
    "vbl1/c-bahn/r06": ["Kohle, Erz, Kies, Holz, Autos", "Blumen, Pharma, Elektronik, Mode", "Briefe, Pakete, Dokumente, Ersatzteile", "Frischfisch, Obst, Blumen, Pakete"],
    "vbl1/c-bahn/r07": ["Bahn 4.000 t bei ca. 20–30 km/h", "Bahn 24 t bei ca. 50 km/h", "Bahn 16.000 t bei ca. 6 km/h", "Bahn 400 t bei ca. 80 km/h"],
    "vbl1/c-bahn/r08": ["Inter = zwischen Trägern · intra = innerhalb der Schiene", "Inter = innerhalb der Schiene · intra = zwischen Trägern", "Inter = international · intra = national", "Inter = Personenverkehr · intra = Güterverkehr"],
    "vbl1/c-bahn/r09": ["Strom-, Signalsysteme und Spurweiten", "Einheitliche Spurweite in ganz Europa", "Gleiche Stromsysteme, nur andere Sprachen", "Nur unterschiedliche Fahrpläne"],
    "vbl1/c-bahn/r10": ["Nutzung eines Streckenabschnitts in einem Zeitraum", "Ein Gleisanschluss eines Unternehmens", "Die Gesamtlänge eines Güterzugs", "Ein Vertrag über Güterwagen"],
    "vbl1/c-bahn/r11": ["740 m gesamt, 700 m Wagenzug", "700 m gesamt, 650 m Wagenzug", "1.000 m gesamt, 950 m Wagenzug", "835 m gesamt auf allen Strecken"],
    "vbl1/c-bahn/r12": ["Anschlussvertrag, Betriebsgenehmigung, Bedienungsvertrag", "Frachtvertrag, Speditionsvertrag, Kaufvertrag", "AVV, CIM-Frachtbrief, Bedienungsvertrag", "Mietvertrag, Leasingvertrag, Servicevertrag"],
    "vbl1/c-bahn/r13": ["Haupt = direkt ans EIU · Neben = an andere Anlage", "Haupt = an andere Anlage · Neben = direkt ans EIU", "Haupt = ohne Gleis · Neben = mit eigenem Gleis", "Haupt = EVU · Neben = Netzbetreiber"],
    "vbl1/c-bahn/r14": ["Von ca. 11.700 auf ca. 2.300 gesunken", "Von ca. 2.300 auf ca. 11.700 gestiegen", "Gleich geblieben bei ca. 5.000", "Von ca. 11.700 auf ca. 9.000 gesunken"],
    "vbl1/c-bahn/r15": ["Direkt, ohne Zwischenbehandlung – Zug = Sendung", "Viele Wagen über Rangierbahnhöfe gebündelt", "Nur Ladeeinheiten, Vor-/Nachlauf per Lkw", "Ein Zug pro Wagen, täglich umgestellt"],
    "vbl1/c-bahn/r16": ["Wagen über Knotenbahnhöfe und Rangierbahnhöfe bündeln", "Ein Zug fährt direkt vom Versender zum Empfänger", "Nur Container werden zwischen Terminals gefahren", "Lkw sammeln Wagen ein und fahren sie zum Kunden"],
    "vbl1/c-bahn/r17": ["Einfahrgruppe → Ablaufberg → Richtungsgruppe → Ausfahrgruppe", "Ablaufberg → Einfahrgruppe → Ausfahrgruppe → Richtungsgruppe", "Richtungsgruppe → Einfahrgruppe → Ablaufberg → Ausfahrgruppe", "Einfahrgruppe → Ausfahrgruppe → Ablaufberg → Richtungsgruppe"],
    "vbl1/c-bahn/r18": ["Höchstlademasse je Streckenklasse", "Maximale Höhe der Ladung", "Höchstgeschwindigkeit des Wagens", "Maximale Zuglänge je Strecke"],
    "vbl1/c-bahn/r19": ["Umriss, den die Ladung nicht überragen darf", "Höchstlademasse je Streckenklasse", "Länge der Ladefläche eines Wagens", "Anzahl der Radsätze je Wagen"],
    "vbl1/c-bahn/r20": ["Wagen eines Halters, z. B. Kesselwagen von VTG", "Wagen, die nur Privatkunden nutzen dürfen", "Wagen des EVU für den Personenverkehr", "Wagen ohne Zulassung für das Netz"],
    "vbl1/c-bahn/r21": ["Vertrag über die Verwendung von Güterwagen", "Vertrag über die Nutzung von Trassen", "Frachtbrief im internationalen Verkehr", "AGB der deutschen Spediteure"],
    "vbl1/c-bahn/r22": ["Haftung, Wagenanschriften, Leerwagen, Instandhaltung", "Trassenpreise, Fahrpläne, Zuglängen", "Lenkzeiten, Mautsätze, Fahrerlöhne", "Zölle, Einfuhrabgaben, Incoterms"],
    "vbl1/c-bahn/r23": ["National HGB + ALB · international COTIF/CIM", "National CIM · international HGB + ALB", "National CMR · international HGB", "National COTIF · international ADSp"],
    "vbl1/c-bahn/r24": ["HGB/ALB 8,33 SZR/kg · CIM 17 SZR/kg", "HGB/ALB 17 SZR/kg · CIM 8,33 SZR/kg", "Beide 8,33 SZR/kg", "HGB/ALB 2 SZR/kg · CIM 40 SZR/kg"],
    "vbl1/c-bahn/r25": ["Bis 10 Uhr am Werktag vor dem Bedarfstag", "Bis 18 Uhr am Bedarfstag selbst", "Mindestens eine Woche vorher", "Bis 10 Uhr zwei Werktage vorher"],
    "vbl1/c-bahn/r26": ["Absender beförderungssicher, Frachtführer betriebssicher", "Frachtführer beförderungssicher, Absender betriebssicher", "Nur der Frachtführer ist zuständig", "Nur der Empfänger ist zuständig"],
    "vbl1/c-bahn/r27": ["Kosten, die die Allgemeinheit trägt", "Kosten des Netzbetreibers für Trassen", "Kosten für Auslandstransporte", "Kosten der Spedition für Subunternehmer"],
    "vbl1/c-bahn/r28": ["Automatisch kuppeln, längere Züge, Bremsprobe", "Billigere Wagen ohne Bremse", "Kuppeln nur noch per Hand", "Mehr Rangierpersonal je Zug"],
    "vbl1/c-bahn/r29": ["UIC, CER, OTIF, UIRR", "ADAC, DSLV, BGL, IHK", "IATA, ICAO, FIATA, WTO", "BIEK, VDA, BDI, DIHK"],
    "vbl1/c-kv/v01": ["Hauptlauf Schiene/Schiff, kurzer Vor-/Nachlauf per Lkw", "Hauptlauf Lkw, kurzer Vor-/Nachlauf per Bahn", "Gut wird an jedem Terminal umgepackt", "Lkw und Bahn fahren parallel dieselbe Strecke"],
    "vbl1/c-kv/v02": ["44 t statt 40 t", "40 t statt 44 t", "48 t statt 40 t", "50 t statt 44 t"],
    "vbl1/c-kv/v03": ["Taschenwagen → Sattelauflieger, Tragwagen → Container", "Taschenwagen → Container, Tragwagen → Sattelauflieger", "Kesselwagen → Sattelauflieger, Tragwagen → Wechselbrücken", "Flachwagen → Pakete, Taschenwagen → Paletten"],
    "vbl1/c-kv/v04": ["Organisiert Züge wie ein Spediteur", "Fährt als Lkw-Fahrer den Vorlauf", "Betreibt das öffentliche Schienennetz", "Baut Container und Wechselbrücken"],
    "vbl1/c-kv/v05": ["Unbegleitet = nur Ladeeinheit · begleitet = ganzer Lkw", "Unbegleitet = ganzer Lkw · begleitet = nur Ladeeinheit", "Unbegleitet = ohne Lokführer · begleitet = mit Lokführer", "Unbegleitet = Binnenschiff · begleitet = Bahn"],
    "vbl1/c-kv/v06": ["Ab rund 300 km", "Ab rund 30 km", "Erst ab rund 3.000 km", "Bei jeder Entfernung"],
    "vbl1/c-kv/v07": ["Keine Lenk-/Ruhezeiten · aber Cut-off-Zeiten", "Höhere Geschwindigkeit · aber mehr Fahrer nötig", "Keine Umschlagkosten · aber Lenkzeiten", "Flexibler als Lkw · aber langsamer"],
    "vbl1/c-kv/v08": ["Liberalisierung 1994 und Online-Handel", "Verstaatlichung 1994 und Briefverkehr", "Lkw-Verbot 1994 und Kohleausbau", "Mautabschaffung und Stahlkrise"],
    "vbl1/c-kep/k01": ["Kurier begleitet direkt · Express garantiert · Paket standardisiert", "Kurier standardisiert · Express direkt · Paket garantiert", "Alle drei laufen gleich über Hubs", "Kurier nur B2C · Express nur B2B · Paket nur Post"],
    "vbl1/c-kep/k02": ["Ca. 10 % des Logistikmarkts, ca. 4,4 Mrd. Sendungen", "Ca. 50 % des Logistikmarkts, ca. 44 Mrd. Sendungen", "Ca. 1 % des Logistikmarkts, ca. 440 Mio. Sendungen", "Ca. 30 % des Logistikmarkts, ca. 4,4 Mio. Sendungen"],
    "vbl1/c-kep/k03": ["Fast komplett outgesourced", "Fast komplett insourced", "Genau halb und halb", "Nur zu etwa 10 % outgesourced"],
    "vbl1/c-kep/k04": ["Online-Handel wächst bei Privatkunden", "Industrie verschickt mehr Pakete", "Privatkunden kaufen weniger online", "Paketpreise für B2B sind gestiegen"],
    "vbl1/c-kep/k05": ["Stückgut = Paletten · KEP = Pakete", "Stückgut = Pakete · KEP = Paletten", "Beide nur Container", "Stückgut = Massengut · KEP = Paletten"],
    "vbl1/c-kep/k06": ["Nein – Händler-Logistik im Selbsteintritt", "Ja – klassische Kurierdienste", "Ja – Expressdienste mit Garantie", "Nein – Kontraktlogistiker (3PL)"],
    "vbl1/c-kep/k07": ["Transportiert v. a. eigene Sendungen", "Transportiert nur Briefe", "Transportiert nur Paletten", "Ist ein staatlicher Postdienst"],
    "vbl1/c-kep/k08": ["Niedrige Lagerkosten, spätere Cut-off-Zeit", "Höhere Lagerkosten, frühere Cut-off-Zeit", "Mehr Lager, längere Wege zum Kunden", "Keine Paketdienste nötig"],
    "vbl1/c-kep/k09": ["Direktverkehrsnetz und Hub-and-Spoke", "Ringsystem und Pipeline", "Milk Run und Sternfahrt", "Ganzzug und Einzelwagen"],
    "vbl1/c-kep/k10": ["Viele Stopps · Lösung Mikrohubs", "Wenig Stopps · Lösung größere Lkw", "Lange Hauptläufe · Lösung Luftfracht", "Hohe Maut · Lösung Bahnzustellung"],
    "vbl1/c-kep/k11": ["Wettbewerb, schwankende Kosten, Peaks", "Gesetzliche Festpreise ändern sich", "Die Post legt alle Preise fest", "Preise ändern sich nur bei neuen Steuern"]
  });
})();
