/*
 * Grundlagen der BWL (Klausur 120 Min: 80 Min BWL + 40 Min Marketing)
 * Quellen: Folien Verena von Medem (Block 1 & 2, nach Wöhe 2020),
 *          Folien Prof. Dr. Andreas Stenger „Grundlagen des Marketing“, Julians Notizen.
 */
window.BUILTIN_FOLDERS.push({
  id: "bwl",
  name: "Grundlagen der BWL",
  emoji: "💼",
  color: "#1f9d63",
  decks: [
    // ------------------------------------------------------------------
    {
      id: "bwl-b1",
      name: "BWL 1 · Was ist BWL? Betrieb als System",
      description: "von Medem Block 1: Einordnung, Erfahrungs-/Erkenntnisobjekt, Methoden, Gütekriterien, Ansätze der BWL, System, Betriebstypologie",
      cards: [
        { id: "b101", q: "Wie ist die Klausur Grundlagen der BWL aufgebaut?", a: "120 Minuten: 80 Min. Teilklausur BWL (von Medem) + 40 Min. Marketing (Stenger). Bestanden ab Gesamtnote 4,0 → 5 Credit Points (ABWL I)." },
        { id: "b102", q: "Wo ist die BWL im System der Wissenschaften eingeordnet?", a: "Wissenschaften → Realwissenschaften → Geisteswissenschaften → Wirtschaftswissenschaften → BWL. (Daneben: Meta- und Formalwissenschaften, Naturwissenschaften.)" },
        { id: "b103", q: "Was ist das Erfahrungsobjekt der BWL?", a: "Der Betrieb – der wahrnehmbare Ausschnitt der Realität, von dem die Erkenntnis ausgeht.", important: true },
        { id: "b104", q: "Wie ist ein Betrieb definiert?", a: "Eine planvoll organisierte Wirtschaftseinheit, in der Produktionsfaktoren kombiniert werden, um Güter und Dienstleistungen herzustellen und abzusetzen.", important: true },
        { id: "b105", q: "Was ist das Erkenntnisobjekt der BWL?", a: "Das Wirtschaften (im Betrieb) – v. a. der Entscheidungsprozess in einem privaten Betrieb im marktwirtschaftlichen Wettbewerb. Die BWL ist anwendungsorientiert und will Handlungsempfehlungen geben.", important: true },
        { id: "b106", q: "Was sind Produktionsfaktoren?", a: "Alle Einsatzmengen, die für die Herstellung von Waren und Dienstleistungen erforderlich sind." },
        { id: "b107", q: "Was ist Induktion?", a: "Schluss vom Einzelnen aufs Allgemeine: Aus der Beobachtung (Empirie) einzelner Situationen wird eine allgemeingültige Hypothese/Theorie abgeleitet (Abstrahieren des Beobachteten).", important: true },
        { id: "b108", q: "Was ist Deduktion?", a: "Schluss vom Allgemeinen aufs Einzelne: Logisches Ableiten von Aussagen aus Grundaussagen nach Ableitungsregeln – Theorien werden angewandt, um Hypothesen zu bilden.", important: true },
        { id: "b109", q: "Welche drei Gütekriterien gelten für Forschung?", a: "Objektivität: Ergebnis unabhängig von der Person, die erhebt/auswertet.\nReliabilität (Zuverlässigkeit): bei Wiederholung gleiches Ergebnis.\nValidität (Gültigkeit): Es wird wirklich das gemessen, was untersucht werden soll.", important: true },
        { id: "b110", q: "Produktivitätsorientierter Ansatz der BWL – wer, was?", a: "Erich Gutenberg: Relation zwischen Produktionsfaktoreinsatz und -ertrag; Produktions-, Kosten- und Preistheorie. Annahmen: vollkommene Information, rationale Entscheider." },
        { id: "b111", q: "Entscheidungsorientierter Ansatz der BWL – wer, was?", a: "Edmund Heinen: Aufgabe der Prämisse vollkommener Information; realitätsnahe Modelle konkreter Entscheidungssituationen; Öffnung zu sozialwissenschaftlichen Fragen." },
        { id: "b112", q: "Systemorientierter Ansatz der BWL – wer, was?", a: "Hans Ulrich: interdisziplinär (wie der entscheidungsorientierte Ansatz), Unternehmen als System; Definition von Sollwerten als Zielsetzung." },
        { id: "b113", q: "Verhaltensorientierter Ansatz der BWL?", a: "Gibt das rein rationale Entscheidungsverhalten (Homo Oeconomicus) zugunsten verhaltenswissenschaftlicher Erkenntnisse auf.", important: true, hint: "In deinen Notizen: „Wichtig! Angucken!“" },
        { id: "b114", q: "Umweltorientierter Ansatz der BWL – zwei Ausprägungen?", a: "Ethisch-normativ: ökologische Sicht mit BWL-Entscheidungen vereinbar machen, Gewinnmaximierung nicht mehr einziges Ziel (Stakeholder- vs. Shareholder-Ansatz).\nÖkologieorientiert: traditionelle BWL unter Einbezug ökologischer Erkenntnisse.", important: true },
        { id: "b115", q: "Institutionenorientierter Ansatz der BWL?", a: "Bricht die Realitätsferne der klassischen BWL auf: Verfügungsrechte an Produktionsfaktoren, Transaktionskosten (Übertragung von Produktionsfaktoren), Informationsökonomik (wer weiß was mit welchen Folgen).", important: true },
        { id: "b116", q: "Was ist ein System?", a: "Eine Menge geordneter Elemente, die durch Relationen verknüpft sind; eine Gesamtheit aus Teilsystemen, Elementen und Verknüpfungen. Im Betrieb: Personen und Betriebsmittel als Teilsysteme, in Abteilungen organisiert, die Sachziele erfüllen." },
        { id: "b117", q: "Warum ist der Betrieb ein sozio-ökonomisches System?", a: "Weil er soziale, technische und ökonomische Elemente, Ziele und Verknüpfungen in sich vereint." },
        { id: "b118", q: "Welche Systemeigenschaften (Gegensatzpaare) gibt es?", a: "offen – geschlossen · statisch – dynamisch · autonom – fremdbestimmt · einfach – komplex" },
        { id: "b119", q: "Welche Systemeigenschaften hat ein Betrieb/Unternehmen?", a: "Offen, dynamisch, fremdbestimmt, komplex. (Zum Vergleich: Armbanduhr = geschlossen, statisch, autonom.)", important: true },
        { id: "b120", q: "Betrieb, Unternehmung, Geschäft, Firma, Fabrik – Unterschiede?", a: "Betrieb: planvoll organisierte Wirtschaftseinheit.\nUnternehmung: Betrieb im marktwirtschaftlichen System.\nGeschäft: Einzeltransaktion bzw. deren Ort.\nFirma: Name (juristisch), unter dem ein Kaufmann Geschäfte betreibt.\nFabrik/Werk: Ort der Leistungserstellung (Sachgüter).", important: true },
        { id: "b121", q: "Welche Wirtschaftssubjekte (Wirtschaftseinheiten) gibt es?", a: "Haushalte (private und öffentliche) und Betriebe (private Betriebe = Unternehmen, gemischtwirtschaftliche Betriebe, öffentliche Betriebe/Verwaltungen)." },
        { id: "b122", q: "Nach welchen Typologien kann man Betriebe einteilen?", a: "Betriebsziel (Gewinnerzielung vs. Non-Profit), Art der Leistung (Sach- vs. Dienstleistung), Wirtschaftszweig (für Statistik), Betriebsgröße (klein, mittel, groß)." },
        { id: "b123", q: "Wozu dient die Klassifikation der Wirtschaftszweige?", a: "Wirtschaftliche Tätigkeiten aller statistischen Einheiten in amtlichen Statistiken einheitlich erfassen. 21 Abschnitte (A–U), 88 Abteilungen, 615 Klassen u. a.; jeweils für viele Jahre gültig (Fassungen 93, 03, 08)." },
        { id: "b124", q: "Einteilung nach Größe: Grenzen für Kleinst-, kleine, mittlere und große Unternehmen?", a: "Kleinst: < 9 Mitarbeiter, < 2 Mio. € Umsatz\nKlein: < 49 MA, < 10 Mio. €\nMittel: 50–249 MA, < 50 Mio. €\nGroß: > 250 MA, > 50 Mio. €", important: true },
        { id: "b125", q: "Gewinn – wie berechnet man ihn?", a: "Gewinn = Umsatz (Erlös) − Kosten. Ist das Ergebnis negativ, ist es ein Verlust." }
      ],
      quiz: [
        { q: "Was ist das Erfahrungsobjekt der BWL?", options: ["Das Wirtschaften", "Der Betrieb", "Der Markt", "Der Mensch"], correct: 1, explain: "Erfahrungsobjekt = Betrieb, Erkenntnisobjekt = Wirtschaften." },
        { q: "Vom Einzelfall aufs Allgemeine schließen nennt man …", options: ["Deduktion", "Induktion", "Validität", "Reliabilität"], correct: 1, explain: "Induktion: Beobachtung → Theorie. Deduktion: Theorie → Hypothese." },
        { q: "Ein Messinstrument liefert bei Wiederholung dasselbe Ergebnis. Welches Gütekriterium?", options: ["Objektivität", "Validität", "Reliabilität", "Produktivität"], correct: 2, explain: "Reliabilität = Zuverlässigkeit." },
        { q: "Wer steht für den produktivitätsorientierten Ansatz?", options: ["Heinen", "Ulrich", "Gutenberg", "Wöhe"], correct: 2, explain: "Gutenberg = produktivitätsorientiert, Heinen = entscheidungsorientiert, Ulrich = systemorientiert." },
        { q: "Welche Eigenschaften hat ein Unternehmen als System?", options: ["geschlossen, statisch, autonom, einfach", "offen, dynamisch, fremdbestimmt, komplex", "offen, statisch, autonom, komplex", "geschlossen, dynamisch, fremdbestimmt, einfach"], correct: 1, explain: "Unternehmen: offen, dynamisch, fremdbestimmt, komplex." },
        { q: "Ein Unternehmen hat 120 Mitarbeiter und 30 Mio. € Umsatz. Es ist …", options: ["Kleinstunternehmen", "Kleines Unternehmen", "Mittleres Unternehmen", "Großunternehmen"], correct: 2, explain: "Mittel: 50–249 Mitarbeiter, < 50 Mio. €." },
        { q: "Der Name, unter dem ein Kaufmann seine Geschäfte betreibt, ist die …", options: ["Unternehmung", "Firma", "Fabrik", "Betrieb"], correct: 1, explain: "Firma = juristischer Name." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "bwl-b2",
      name: "BWL 2 · Leistungserstellung & Messgrößen",
      description: "von Medem Block 2: Gutenberg, Produktionsfaktoren, Bedürfnis → Nachfrage, Güterarten, ökonomisches Prinzip, Leistungsprozess, Produktivität/Wirtschaftlichkeit/Rentabilität",
      cards: [
        { id: "b201", q: "Welche Bestimmungsfaktoren des Betriebs sind nach Gutenberg vom Wirtschaftssystem UNABHÄNGIG?", a: "Produktionsfaktoren, Prinzip der Wirtschaftlichkeit (ökonomisches Prinzip), Prinzip des finanziellen Gleichgewichts.", important: true },
        { id: "b202", q: "Welche Bestimmungsfaktoren sind vom Wirtschaftssystem ABHÄNGIG – Marktwirtschaft?", a: "Erwerbswirtschaftliches Prinzip, Autonomieprinzip, Prinzip des Privateigentums → Betrieb = Unternehmen.", important: true },
        { id: "b203", q: "Welche Bestimmungsfaktoren sind vom Wirtschaftssystem ABHÄNGIG – Planwirtschaft?", a: "Planerfüllungsprinzip, Organprinzip, Gemeinschaftseigentum → Betrieb = Organ der Gesamtwirtschaft.", important: true },
        { id: "b204", q: "Was bedeuten Erwerbswirtschaftliches Prinzip, Autonomieprinzip und Prinzip des Privateigentums?", a: "Erwerbswirtschaftlich: Ziel ist Gewinnmaximierung.\nAutonomie: Betrieb entscheidet selbst, was/wie viel er produziert (keine staatliche Planvorgabe).\nPrivateigentum: Produktionsmittel gehören Privatpersonen, die auch Entscheidungs- und Gewinnrechte haben." },
        { id: "b205", q: "Gliederung der Produktionsfaktoren nach Gutenberg (1951)?", a: "Elementarfaktoren: ausführende Arbeit, Betriebsmittel (materiell/immateriell), Werkstoffe (Roh-, Hilfs-, Betriebsstoffe).\nDispositiver Faktor: Planung, Organisation, Kontrolle (Leitung).", important: true },
        { id: "b206", q: "Roh-, Hilfs- und Betriebsstoffe – Unterschied?", a: "Rohstoff: Hauptbestandteil des Produkts (z. B. Stahl beim Auto).\nHilfsstoff: Nebenbestandteil (z. B. Schrauben, Lack).\nBetriebsstoff: geht nicht ins Produkt ein, wird bei der Produktion verbraucht (z. B. Strom, Schmieröl, Diesel)." },
        { id: "b207", q: "Produktionsfaktoren am Beispiel Paketsendung?", a: "Ausführende Arbeit: Fahrer, Sortierer · Betriebsmittel: Lkw, Sortieranlage, Software · Werkstoffe: Diesel (Betriebsstoff), Verpackung/Etiketten · Dispositiver Faktor: Tourenplanung, Disposition, Kontrolle." },
        { id: "b208", q: "Bedürfnis, Bedarf, Nachfrage – Unterschied? (Pizza-Beispiel)", a: "Bedürfnis: empfundener Mangel, unkonkret und unbegrenzt („Ich habe Hunger“).\nBedarf: konkret in Art und Menge („Ich will eine Pizza essen“).\nNachfrage: konkret am Markt gekaufte Menge („Ich kaufe eine Pizza Salami bei Pizza Hut“).", important: true },
        { id: "b209", q: "Freie Güter vs. knappe Güter?", a: "Freie Güter: Preis = 0 (z. B. Luft). Knappe Güter/Wirtschaftsgüter: Preis > 0 – nur sie sind Gegenstand des Wirtschaftens." },
        { id: "b210", q: "Wie werden knappe Güter (Wirtschaftsgüter) kategorisiert?", a: "Materielle Güter: Produktionsgüter (Werkstoffe, Betriebsmittel) und Konsumgüter (Verbrauchs-, Gebrauchsgüter).\nImmaterielle Güter: Dienstleistungen und Rechte." },
        { id: "b211", q: "Was bedeutet FMCG und was sind Merkmale?", a: "Fast Moving Consumer Goods: Güter des täglichen Bedarfs, schnell umgeschlagen, niedriger Preis, hohe Kaufhäufigkeit, geringes Involvement (z. B. Unilever, Nestlé, P&G, Henkel, Coca-Cola)." },
        { id: "b212", q: "Was ist das ökonomische Prinzip?", a: "Vernünftiges wirtschaftliches Handeln unter knappen Mitteln zur Erreichung wirtschaftlicher Ziele (Nutzenmaximierung im Haushalt, Gewinnmaximierung im Unternehmen) – Verhältnis von Output zu Input optimieren.", important: true },
        { id: "b213", q: "Maximal-, Minimal- und Extremumprinzip?", a: "Maximalprinzip: Aufwand gegeben → Ertrag maximieren.\nMinimalprinzip: Ertrag gegeben → Aufwand minimieren.\nExtremumprinzip (Optimum): Verhältnis Ertrag zu Aufwand optimieren (beides variabel).", important: true },
        { id: "b214", q: "Ökonomisches Prinzip: Spediteur hat 5.000 € Dieselbudget und will so viele Leistungen wie möglich anbieten.", a: "Maximalprinzip (Aufwand gegeben, Ertrag maximieren)." },
        { id: "b215", q: "Ökonomisches Prinzip: Gründerin will mit möglichst wenig Eigenkapital 200.000 € Gewinn erzielen.", a: "Minimalprinzip (Ergebnis gegeben, Einsatz minimieren)." },
        { id: "b216", q: "Ökonomisches Prinzip: Lkw-Fahrer will mit möglichst wenig Diesel eine möglichst weite Strecke fahren.", a: "Extremumprinzip – beides variabel; streng genommen nicht erfüllbar („so wenig wie möglich für so viel wie möglich“), sinnvoll ist nur das optimale Verhältnis." },
        { id: "b217", q: "Wie sieht der betriebliche Leistungsprozess aus?", a: "Input (Produktionsfaktoren) = Beschaffung → Transformation (Faktorkombination) = Produktion → Output (Produkte/Dienstleistungen) = Absatz." },
        { id: "b218", q: "Güter- und finanzwirtschaftliche Perspektive des Leistungsprozesses?", a: "Güterwirtschaftlich: Beschaffung → Produktion → Absatz.\nFinanzwirtschaftlich: Finanzierung (Mittelherkunft) → Investition (Mittelverwendung) → Rückfluss liquider Mittel durch den Absatz." },
        { id: "b219", q: "Was gehört zur Beschaffung?", a: "Bedarfsermittlung, Bezugsquellenermittlung, Bestellung, Lagermanagement. Objekte i. w. S.: Finanzmittel, Immobilien, Personal, Informationen; i. e. S.: Betriebsmittel, Werkstoffe, Dienstleistungen, Handelswaren." },
        { id: "b220", q: "Was gehört zum Absatz? Was sind die 4P bzw. 7P?", a: "Marketing & Vertrieb: Leistungsverwertung, Abnehmer identifizieren, physische Distribution.\n4P: Product, Price, Place, Promotion; 7P zusätzlich People, Process, Physical Facilities." },
        { id: "b221", q: "Produktivität vs. Wirtschaftlichkeit vs. Rentabilität?", a: "Produktivität = Output / Input (mengenmäßig).\nWirtschaftlichkeit = Ertrag / Aufwand bzw. Erlös / Kosten (wertmäßig).\nRentabilität = Gewinn im Verhältnis zum eingesetzten Kapital bzw. Umsatz (in %).", important: true },
        { id: "b222", q: "Wann arbeitet ein Unternehmen wirtschaftlich?", a: "Wenn die Wirtschaftlichkeit > 1 ist (Erlöse > Kosten). = 1: Kosten gedeckt, < 1: Verlust." },
        { id: "b223", q: "Formeln Umsatzrendite und Gesamtkapitalrendite?", a: "Umsatzrendite = Gewinn / Umsatz × 100\nGesamtkapitalrendite = (Gewinn + Fremdkapitalzinsen) / Gesamtkapital × 100\nEigenkapitalrendite = Gewinn / Eigenkapital × 100", important: true },
        {
          id: "b224",
          q: "Rechenaufgabe Flittiflotti GmbH (Teil 1–3):\n10 Touren, 2 Fahrer je 5 Std. im eigenen Lkw, zusammen 120 l Diesel. Diesel 2 €/l, Fahrer 30 €/Std., Lkw-Nutzung 20 €/Std. Erlös 100 € pro Tour. Gesamtkapital 500.000 €, Jahresgewinn 50.000 €, Jahresumsatz 400.000 €.\n1. Produktivität je Faktor\n2. Wirtschaftlichkeit – profitabel?\n3. Umsatz- und Gesamtkapitalrendite",
          hint: "Erst Faktormengen: 10 Fahrerstunden, 10 Lkw-Stunden, 120 l Diesel. Dann Kosten je Faktor.",
          steps: [
            "Faktormengen: Arbeit 2 × 5 = 10 Std. · Lkw 2 × 5 = 10 Lkw-Std. · Diesel 120 l",
            "1. Produktivität Arbeit = 10 Touren / 10 Std. = 1 Tour pro Fahrerstunde",
            "Produktivität Lkw = 10 Touren / 10 Lkw-Std. = 1 Tour pro Lkw-Stunde",
            "Produktivität Diesel = 10 Touren / 120 l ≈ 0,083 Touren pro Liter (= 12 l pro Tour)",
            "2. Kosten: Diesel 120 × 2 € = 240 € · Personal 10 × 30 € = 300 € · Lkw 10 × 20 € = 200 € → gesamt 740 €",
            "Erlös: 10 × 100 € = 1.000 €",
            "Wirtschaftlichkeit = 1.000 / 740 ≈ 1,35 > 1 → wirtschaftlich/profitabel",
            "3. Umsatzrendite = 50.000 / 400.000 × 100 = 12,5 %",
            "Gesamtkapitalrendite = 50.000 / 500.000 × 100 = 10 % (keine FK-Zinsen angegeben)"
          ],
          a: "Produktivität: 1 Tour/Fahrerstd., 1 Tour/Lkw-Std., 0,083 Touren/l · Wirtschaftlichkeit ≈ 1,35 (profitabel) · Umsatzrendite 12,5 % · Gesamtkapitalrendite 10 %",
          important: true
        },
        {
          id: "b225",
          q: "Flittiflotti Teil 4: Die Wirtschaftlichkeit soll auf 2,2 steigen. Einsatzmengen und Preise für Diesel, Personal und Lkw bleiben gleich. Welche Stellschraube bleibt – und ist der Vorschlag realistisch?",
          hint: "Wirtschaftlichkeit = Erlös / Kosten. Die Kosten (740 €) sind fix.",
          steps: [
            "Kosten bleiben 740 € → einzige Stellschraube: der Erlös (Preis pro Tour)",
            "Benötigter Erlös = 2,2 × 740 € = 1.628 €",
            "Preis pro Tour = 1.628 € / 10 = 162,80 € (statt 100 €, also +62,8 %)",
            "Bewertung: Im stark umkämpften Straßengüterverkehr (starker Wettbewerb) ist eine Preiserhöhung um über 60 % kaum durchsetzbar → unrealistisch"
          ],
          a: "Preis pro Tour auf 162,80 € erhöhen (Erlös 1.628 €) – am Markt kaum realisierbar.",
          important: true
        },
        {
          id: "b226",
          q: "Flittiflotti Teil 5: Wirtschaftlichkeit soll auf 1,6 steigen. Einsatzmengen, Diesel- und Lkw-Preis sowie der Erlös (1.000 €) bleiben gleich. Neuer Vorschlag – realistisch?",
          hint: "Erlös fix → Kosten müssen sinken. Welcher Faktorpreis darf sich noch ändern?",
          steps: [
            "Maximale Kosten = 1.000 € / 1,6 = 625 €",
            "Diesel (240 €) und Lkw (200 €) bleiben → für Personal bleiben 625 − 440 = 185 €",
            "Stundenlohn = 185 € / 10 Std. = 18,50 € (statt 30 €, also −38 %)",
            "Bewertung: Bei Fahrermangel und Mindestlohn-/Tarifdruck wäre eine Lohnkürzung um fast 40 % nicht durchsetzbar → Fahrer würden kündigen; unrealistisch"
          ],
          a: "Fahrerlohn auf 18,50 €/Std. senken – praktisch nicht umsetzbar (Fahrermangel).",
          important: true
        }
      ],
      quiz: [
        { q: "Welcher Bestimmungsfaktor ist vom Wirtschaftssystem UNABHÄNGIG?", options: ["Autonomieprinzip", "Prinzip des finanziellen Gleichgewichts", "Organprinzip", "Prinzip des Privateigentums"], correct: 1, explain: "Unabhängig: Produktionsfaktoren, Wirtschaftlichkeit, finanzielles Gleichgewicht." },
        { q: "Was gehört bei Gutenberg zum dispositiven Faktor?", options: ["Werkstoffe", "Betriebsmittel", "Planung, Organisation, Kontrolle", "Ausführende Arbeit"], correct: 2, explain: "Der dispositive Faktor ist die leitende Tätigkeit." },
        { q: "„Ich will eine Pizza essen“ ist ein …", options: ["Bedürfnis", "Bedarf", "Nachfrage", "Angebot"], correct: 1, explain: "Bedarf = konkret in Art und Menge, aber noch nicht gekauft." },
        { q: "Mit gegebenem Aufwand maximalen Ertrag erzielen ist das …", options: ["Minimalprinzip", "Maximalprinzip", "Extremumprinzip", "Erwerbsprinzip"], correct: 1, explain: "Aufwand gegeben → Ertrag maximieren = Maximalprinzip." },
        { q: "Erlöse 1.200 €, Kosten 800 €. Wirtschaftlichkeit?", options: ["0,67", "1,5", "400", "1,2"], correct: 1, explain: "1.200 / 800 = 1,5." },
        { q: "Gewinn 30.000 €, Umsatz 600.000 €. Umsatzrendite?", options: ["2 %", "5 %", "20 %", "50 %"], correct: 1, explain: "30.000 / 600.000 × 100 = 5 %." },
        { q: "Produktivität ist ein … Verhältnis von Output zu Input.", options: ["wertmäßiges", "mengenmäßiges", "prozentuales", "kapitalbezogenes"], correct: 1, explain: "Produktivität = mengenmäßig, Wirtschaftlichkeit = wertmäßig." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "mkt-1",
      name: "Marketing 1 · Markt, Marketing & Kaufverhalten",
      description: "Stenger Kap. 1: 4P, Definition Marketing, Marktteilnehmer, Marktformen, Käufermarkt, Marketingphilosophien, S-O-R, Involvement, Kaufverhaltenstypen, B2B",
      cards: [
        { id: "k101", q: "Leitfrage des Marketing-Moduls?", a: "„Warum kauft jemand ausgerechnet bei uns?“" },
        { id: "k102", q: "Was sind die 4P des Marketing-Mix?", a: "Product (Funktion, Qualität, Marke, Verpackung, Service) · Price (Preis, Rabatte, Zahlungsbedingungen) · Place/Distribution (Kanäle, Logistik, Verfügbarkeit, Retouren) · Promotion/Kommunikation (Werbung, PR, Social Media, Verkauf).", important: true },
        { id: "k103", q: "Wie definiert Bruhn (2024) Marketing?", a: "Marketing ist eine unternehmerische Denkhaltung. Sie konkretisiert sich in Analyse, Planung, Umsetzung und Kontrolle aller internen und externen Aktivitäten, die durch Ausrichtung der Leistungen am Kundennutzen (konsequente Kundenorientierung) absatzmarktorientierte Unternehmensziele erreichen sollen.", important: true },
        { id: "k104", q: "Welche drei Kernaussagen trägt die Marketing-Definition?", a: "Denkhaltung statt Abteilung · Kundennutzen statt Produkteigenschaft („Der Kunde kauft keinen Bohrer, sondern ein Loch“) · Unternehmensziele statt Selbstzweck (Kundenorientierung ist Mittel, nicht Ziel)." },
        { id: "k105", q: "Zitat Peter F. Drucker zum Marketing?", a: "„Marketing is not a function, it is the whole business seen from the customer's point of view.“" },
        { id: "k106", q: "Warum ist Lieferzeit ein Marketingthema?", a: "Die Lieferzeit ist kein Logistikthema mit Marketingrand, sondern ein Marketinginstrument (Place/Service) – z. B. Express für 4,99 € vs. Standard kostenlos." },
        { id: "k107", q: "Welche Marktteilnehmer gibt es?", a: "Nachfrager (aktuell/potenziell), Anbieter (aktuell/potenziell), Absatzmittler (Handel, Plattform), Absatzhelfer (Spedition, Zahlungsdienstleister), Beeinflusser (Bewertungen, Medien, Regulierung)." },
        { id: "k108", q: "Warum ist der Absatzhelfer für die Logistik besonders relevant?", a: "Der Zusteller ist oft der Einzige, den der Endkunde persönlich trifft – der wirksamste Kontaktpunkt des Herstellers, den dieser nicht selbst kontrolliert." },
        { id: "k109", q: "Wie definieren Meffert et al. einen Markt?", a: "Menge aktueller und potenzieller Nachfrager bestimmter Leistungen sowie der aktuellen und potenziellen Anbieter dieser Leistungen und der Beziehungen zwischen Nachfragern und Anbietern.", important: true },
        { id: "k110", q: "Wann kommt ein Tausch zustande?", a: "Wenn beide Seiten den erhaltenen Wert höher einschätzen als den abgegebenen. Marketing arbeitet an dieser Einschätzung." },
        { id: "k111", q: "Marktformen bei vielen Nachfragern?", a: "Ein Anbieter: Angebotsmonopol · wenige Anbieter: Angebotsoligopol · viele Anbieter: Polypol. (Diese Zeile beschreibt Konsumgütermärkte und den Preisspielraum.)", important: true },
        { id: "k112", q: "Marktformen bei einem bzw. wenigen Nachfragern?", a: "Ein Nachfrager: zweiseitiges Monopol (1 Anbieter), beschränktes Nachfragemonopol (wenige), Nachfragemonopol (viele Anbieter).\nWenige Nachfrager: beschränktes Monopol, zweiseitiges Oligopol, Nachfrageoligopol." },
        { id: "k113", q: "Verkäufermarkt vs. Käufermarkt?", a: "Verkäufermarkt (früher): Nachfrage > Angebot, Engpass Produktion, Marketing = Absatzorganisation.\nKäufermarkt (heute): Angebot > Nachfrage, Engpass beim Kunden, Marketing wird Führungsfunktion.", important: true },
        { id: "k114", q: "Was bedeutet duale Führungsfunktion des Marketing?", a: "1. Gleichberechtigte Funktion/Abteilung (Marktforschung, Markteinführung, Kampagnen, Preise).\n2. Leitkonzept der Unternehmensführung: Kundenorientierung als Maßstab aller Bereiche (z. B. Tourenplanung bestimmt Lieferzeit)." },
        { id: "k115", q: "Transaktionsorientiertes Marketing?", a: "Fokus auf den einzelnen Kaufakt; Erfolgsmaß = einzelner Abschluss; Neu- und Bestandskunde gleichwertig; Kommunikation = Reichweite. Typisch für Impulskäufe, täglichen Bedarf.", important: true },
        { id: "k116", q: "Beziehungsorientiertes Marketing?", a: "Fokus auf den gesamten Beziehungszyklus; Erfolgsmaß = Kundenwert über die Zeit; Stammkunde günstiger als Neukunde; datengetriebene Kundenbindung. Typisch für Abos, B2B, Dienstleistungen, E-Commerce.", important: true },
        { id: "k117", q: "Das strategische Dreieck – welche drei Bedingungen muss ein Wettbewerbsvorteil erfüllen?", a: "Bezugspunkte: Unternehmen, Kunde, Wettbewerber. Der Vorteil muss für den Kunden relevant, für ihn wahrnehmbar und für das Unternehmen nachhaltig/dauerhaft sein.", important: true },
        { id: "k118", q: "Drei Dimensionen der Nachhaltigkeit im Marketing?", a: "Triple Bottom Line: ökologisch, sozial, ökonomisch. Risiken in der Kommunikation: Greenwashing und Social Washing." },
        { id: "k119", q: "Welche sechs Fragen muss man zum Kaufverhalten beantworten?", a: "Wann, was, wie viel, wo, wie und warum wird gekauft? Die ersten fünf lassen sich aus eigenen Daten beantworten – das „Warum“ nicht." },
        { id: "k120", q: "S-R-Modell vs. S-O-R-Modell?", a: "S-R (Stimulus-Response): nur beobachtbare Größen, Reiz führt direkt zur Reaktion – erklärt nicht, warum dieselbe Anzeige unterschiedlich wirkt.\nS-O-R: Zwischen Reiz und Reaktion steht der Organismus (Mensch) mit nicht beobachtbarer Verarbeitung – erklärt, warum Segmentierung nötig ist.", important: true },
        { id: "k121", q: "Was steckt im „O“ des S-O-R-Modells?", a: "Nicht beobachtbare Prozesse: Aktivierung & Emotion, Motive & Einstellungen, Involvement, Erfahrung & Lernen. (S = Marketingmaßnahmen, Umfeldreize; R = Produkt-, Kanalwahl, Menge, Zeitpunkt.)" },
        { id: "k122", q: "Vier Ebenen von Einflussfaktoren auf das Kaufverhalten?", a: "Weiteres soziales Umfeld (Kultur, Schicht, Subkulturen) · direktes soziales Umfeld (Familie, Freunde, Rollen) · persönliche Faktoren (Alter, Lebensphase, Beruf, Lebensstil) · psychische Faktoren (Aktivierung, Motivation, Einstellungen, Involvement, Lernen)." },
        { id: "k123", q: "Aktiviertheit vs. Involvement?", a: "Aktiviertheit: allgemeiner innerer Erregungszustand (Leistungsbereitschaft des Nervensystems).\nInvolvement: themenbezogene Ich-Beteiligung/Engagement bei der Informationsverarbeitung. Man kann hellwach sein und trotzdem kein Involvement für Waschmittel haben.", important: true },
        { id: "k124", q: "Drei Aktivierungstechniken in der Werbung?", a: "Emotional (Humor, Erotik, Kindchenschema) – wirkt länger, funktioniert aber nur einmal.\nKognitiv (Überraschung, Widerspruch) – wirkt sofort, erzeugt bei Wiederholung Abwehr.\nPhysisch (grelle Farben, Lautstärke, Bewegung) – wirkt schnell, kann die Botschaft überlagern.", important: true },
        { id: "k125", q: "Vampireffekt vs. Bumerangeffekt?", a: "Vampireffekt: starker Reiz saugt Aufmerksamkeit von der Botschaft ab – Werbung wird erinnert, Marke nicht (z. B. Promis, Erotik, Angst).\nBumerangeffekt: gegenteilige Wirkung – Ablehnung statt Präferenz (Botschaft passt nicht zur Realität, unangemessene Wortwahl).", important: true },
        { id: "k126", q: "Motiv vs. Motivation? Welche Motivarten gibt es?", a: "Motiv: Antrieb für eine Handlung, empfundener Mangelzustand. Motivation: die daraus entstehende Energie (Wirksamwerden des Motivs).\nArten: primär/sekundär (angeboren/erlernt), intrinsisch/extrinsisch, bewusst/unbewusst." },
        { id: "k127", q: "Maslows Bedürfnispyramide (von unten nach oben)?", a: "1. Physiologische Bedürfnisse (Essen, Schlaf) 2. Sicherheit (Wohnung, Arbeitsplatz) 3. Soziale Bedürfnisse (Zugehörigkeit) 4. Individualbedürfnisse (Anerkennung, Status) 5. Selbstverwirklichung." },
        { id: "k128", q: "Vier Typen des Kaufverhaltens (nach Involvement und Markenunterschieden)?", a: "Hohes Involvement + große Markenunterschiede: komplex (Auto, Immobilie).\nHohes Involvement + geringe Unterschiede: dissonanzreduzierend (Tablet, Versicherung).\nNiedriges Involvement + große Unterschiede: Variety Seeking (Wein, Snacks).\nNiedriges Involvement + geringe Unterschiede: habitualisiert (Zahnpasta, Milch).", important: true },
        { id: "k129", q: "Wie unterscheidet sich B2B-Kaufverhalten vom privaten Kauf?", a: "Formalisierung (Ausschreibungen), Kollektiventscheidung (Nutzer, Einkäufer, Budgetverantwortlicher – Buying Center), Fremdbestimmung (Endkunde schreibt Teile vor), Anreize/Sanktionen (Einkäufer an Einsparungen gemessen), Compliance (Vergaberegeln, Audits)." }
      ],
      quiz: [
        { q: "Welches P steht für Kanäle, Logistik und Retouren?", options: ["Product", "Price", "Place", "Promotion"], correct: 2, explain: "Place = Distribution." },
        { q: "Viele Anbieter, viele Nachfrager – welche Marktform?", options: ["Monopol", "Oligopol", "Polypol", "Zweiseitiges Monopol"], correct: 2, explain: "Polypol – kaum Preissetzungsspielraum." },
        { q: "Heute ist Angebot > Nachfrage. Das ist ein …", options: ["Verkäufermarkt", "Käufermarkt", "Monopolmarkt", "Planmarkt"], correct: 1, explain: "Käufermarkt: Engpass liegt beim Kunden, Marketing wird Führungsfunktion." },
        { q: "Zahnpasta kaufen ist typisch für welches Kaufverhalten?", options: ["Komplex", "Dissonanzreduzierend", "Variety Seeking", "Habitualisiert"], correct: 3, explain: "Niedriges Involvement, geringe Markenunterschiede → Gewohnheitskauf." },
        { q: "Die Werbung wird erinnert, die Marke aber nicht. Das ist der …", options: ["Bumerangeffekt", "Vampireffekt", "Bullwhip-Effekt", "Halo-Effekt"], correct: 1, explain: "Vampireffekt: der Reiz saugt die Aufmerksamkeit ab." },
        { q: "Welches Modell berücksichtigt nicht beobachtbare Prozesse im Menschen?", options: ["S-R-Modell", "S-O-R-Modell", "4P-Modell", "BCG-Matrix"], correct: 1, explain: "O = Organismus." },
        { q: "Ein Wettbewerbsvorteil muss NICHT …", options: ["relevant für den Kunden sein", "wahrnehmbar sein", "dauerhaft sein", "der billigste Preis sein"], correct: 3, explain: "Relevant, wahrnehmbar, nachhaltig – nicht zwingend billig." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "mkt-2",
      name: "Marketing 2 · Marktforschung, Analyse, Ziele & Segmentierung",
      description: "Stenger Kap. 2: Marktforschung, Primär/Sekundär, Befragung/Beobachtung/Experiment, Situationsanalyse, Marktgröße, SWOT, BCG, Ziele, Segmentierung",
      cards: [
        { id: "k201", q: "Wie ist Marktforschung definiert?", a: "Gewinnung, Auswertung und Interpretation von Informationen über jetzige und zukünftige Marketingsituationen und -entscheidungen eines Unternehmens (Bruhn 2024)." },
        { id: "k202", q: "Welche vier Funktionen hat die Marktforschung?", a: "Anregung (Wo liegen Chancen?), Prognose (Was wird passieren?), Bewertung (Welche Option ist besser?), Kontrolle (Hat die Maßnahme gewirkt?)." },
        { id: "k203", q: "Die vier Schritte des Marktforschungsprozesses?", a: "1. Problemdefinition/Forschungsfrage 2. Informationsgewinnung (Stichprobe, Methode, Erhebung) 3. Informationsverarbeitung (prüfen, auswerten) 4. Ergebniskommunikation. Der erste Schritt entscheidet über den Wert des Ganzen." },
        { id: "k204", q: "Sekundär- vs. Primärforschung?", a: "Sekundär: Auswertung vorhandener Daten (intern/extern) – günstig, begrenzt passgenau, Aktualität oft unklar.\nPrimär: Erhebung neuer Daten (Befragung, Beobachtung, Experiment) – teuer, passgenau, aktuell.\nRegel: erst intern suchen, dann extern, dann selbst erheben.", important: true },
        { id: "k205", q: "Befragung, Beobachtung, Experiment – Stärken und Schwächen?", a: "Befragung: erfasst was Menschen sagen, Gründe/Absichten – aber Menschen wissen nicht immer, warum sie handeln.\nBeobachtung: was Menschen tun, unabhängig von Selbstauskunft – zeigt aber nicht den Grund.\nExperiment: Wirkung einer gezielt veränderten Größe → Aussagen über Ursachen – aufwendig, teils künstlich.", important: true },
        { id: "k206", q: "Befragungsarten mit Stärken/Schwächen?", a: "Persönlich: Rückfragen, hohe Antwortquote – teuer, Interviewereinfluss.\nTelefonisch: günstig, Rückfragen – hohe Ablehnung.\nSchriftlich: günstig, kein Interviewereinfluss – geringer Rücklauf.\nOnline: maximale Reichweite, schnell – geringer Rücklauf, Selbstselektion." },
        { id: "k207", q: "Was ist das Problem der Selbstselektion bei Online-Befragungen?", a: "Es antwortet nur, wer ohnehin eine Meinung hat; Zufriedene/Gleichgültige antworten nicht. Das Ergebnis ist dann nicht falsch erhoben, sondern falsch verallgemeinert." },
        { id: "k208", q: "Warum ist der A/B-Test ein Experiment und was zeigt er?", a: "Zwei Gruppen sehen zufällig zugeteilt zwei Varianten. Wegen der Zufallszuteilung lässt sich der Unterschied auf die Variante zurückführen → Kausalität statt bloßer Korrelation." },
        { id: "k209", q: "Vollerhebung vs. Teilerhebung – wann ist ein Schluss auf die Grundgesamtheit möglich?", a: "Vollerhebung nur bei sehr kleiner Grundgesamtheit (z. B. 30 Schlüsselkunden). Bei Teilerhebung erlaubt nur die zufällige Auswahl den Schluss auf die Grundgesamtheit – nicht die Größe der Stichprobe (Newsletter-Umfrage ≠ Zufallsauswahl)." },
        { id: "k210", q: "Drei Ebenen der Situationsanalyse – welche sind steuerbar?", a: "Umwelt & Gesellschaft (Geopolitik, Wirtschaft, Ökologie, Technologie, Recht) und Markt (Wettbewerb, Kunden, Handel) sind exogen – nicht steuerbar. Nur das Unternehmen (Finanzen, Kompetenzen, Marken) ist endogen." },
        { id: "k211", q: "Nach welchen drei Kriterien grenzt man den relevanten Markt ab? Häufigster Fehler?", a: "Sachlich (welche Produkte), räumlich (regional/national/global), zeitlich (z. B. saisonal). Fehler: Abgrenzung zu eng am eigenen Produkt statt am Kundenbedürfnis → Substitute und neue Wettbewerber werden übersehen (Bücher vs. Markt für Wissensvermittlung)." },
        { id: "k212", q: "Marktvolumen, Marktpotenzial, Absatzvolumen?", a: "Marktvolumen: tatsächlich abgesetzte Menge/Umsatz aller Anbieter.\nMarktpotenzial: maximal mögliche Menge/Umsatz aller Anbieter.\nAbsatzvolumen: tatsächlich abgesetzte Menge eines Unternehmens.", important: true },
        { id: "k213", q: "Formeln Marktanteil und relativer Marktanteil?", a: "Marktanteil = Absatzvolumen / Marktvolumen × 100\nRelativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Wettbewerbers (× 100)", important: true },
        {
          id: "k214",
          q: "Rechenaufgabe Marktanteil:\nEin regionaler Logistikdienstleister stellt 4,2 Mio. Sendungen pro Jahr zu. Marktvolumen im Gebiet: 60 Mio. Sendungen, Marktpotenzial: 78 Mio.\na) Marktanteil?\nb) Marktanteil, wenn das Potenzial voll ausgeschöpft wird und das Unternehmen seine Menge hält?\nc) Strategische Folgerung?",
          hint: "Marktanteil = Absatzvolumen / Marktvolumen × 100",
          steps: [
            "a) 4,2 Mio. / 60 Mio. × 100 = 7 %",
            "b) 4,2 Mio. / 78 Mio. × 100 ≈ 5,4 %",
            "c) Der Anteil sinkt rechnerisch, obwohl das Unternehmen nichts verliert – der Markt wächst an ihm vorbei.",
            "Markt wächst von 60 auf 78 Mio. (+30 %) → Menge muss ebenfalls um 30 % auf ca. 5,5 Mio. steigen, um 7 % zu halten.",
            "18 Mio. Sendungen ungenutztes Potenzial → Wachstumsstrategie: Marktdurchdringung (mehr Kunden im Gebiet, Preis-/Servicevorteile) oder Marktentwicklung (neue Zielgruppen, Gebiete)."
          ],
          a: "a) 7 % · b) ≈ 5,4 % · c) Wachstumsstrategie, um nicht Marktanteil zu verlieren",
          important: true
        },
        { id: "k215", q: "Was ist eine SWOT-Analyse?", a: "Führt interne und externe Sicht zusammen:\nS – Strengths: Worin sind wir besser?\nW – Weaknesses: Worin sind andere besser?\nO – Opportunities: Welche Entwicklungen nützen uns?\nT – Threats: Welche Entwicklungen schaden uns?\n(S/W intern, O/T extern)", important: true },
        { id: "k216", q: "Was ist die BCG-Matrix und welche Grenzen hat sie?", a: "Portfolioanalyse nach Marktwachstum und (relativem) Marktanteil (Question Marks, Stars, Cash Cows, Poor Dogs).\nGrenzen: nur zwei Größen, ignoriert Verbundeffekte, unterstellt einen Lebenszyklus, sagt nicht, warum ein Produkt dort steht.", important: true },
        { id: "k217", q: "Welche drei Bestandteile hat ein operationalisiertes Ziel?", a: "Zielinhalt (Was?), Ausmaß (Wie viel, messbar?), Zeitbezug (Bis wann?).\nBeispiel: Umsatz Eiscreme um 15 % bis Ende 2027 steigern.", important: true },
        { id: "k218", q: "Was sind Marketingziele und woraus leiten sie sich ab?", a: "Vorzugszustände für den Marketingbereich, die durch den Einsatz der Marketinginstrumente erreicht werden sollen. Abgeleitet aus den Unternehmenszielen, heruntergebrochen in Instrumentalziele (Produkt, Preis, Distribution, Kommunikation)." },
        { id: "k219", q: "Drei Gruppen von Marketingzielen mit Beispielen?", a: "Ökonomisch: Gewinn, Umsatz, Deckungsbeitrag, Marktanteil, CLV – direkt messbar.\nVorökonomisch: Bekanntheit, Präferenz, Zufriedenheit, Weiterempfehlung – vorlaufend, indirekt messbar.\nÖkologisch & sozial: Recyclingquote, erneuerbare Energie, faire Arbeit – zunehmend berichtspflichtig.", important: true },
        { id: "k220", q: "Welche Zielbeziehungen gibt es? Klassischer Zielkonflikt?", a: "Komplementär (stützen sich), neutral (unabhängig), Zielkonflikt (behindern sich). Klassisch: Senkung der Lieferkosten vs. Erhöhung der Liefergeschwindigkeit." },
        { id: "k221", q: "Was ist Marktsegmentierung?", a: "Aufteilung eines heterogenen Gesamtmarktes in Teilmärkte, die in sich möglichst homogen und untereinander möglichst verschieden sind, um sie differenziert zu bearbeiten. I. e. S. = Markterfassung, i. w. S. = auch Marktbearbeitung.", important: true },
        { id: "k222", q: "Sechs Anforderungen an Segmentierungskriterien?", a: "Verhaltensrelevanz (wichtigste!), Messbarkeit, Zugänglichkeit, Handlungsfähigkeit, Wirtschaftlichkeit, zeitliche Stabilität.", important: true },
        { id: "k223", q: "Segmentierungskriterien bei Konsumgütern vs. Industriegütern?", a: "Konsumgüter: verhaltensorientiert (Markentreue, Preisklasse), psychographisch (Lebensstil, Nutzen), soziodemographisch (Alter, Einkommen), geographisch.\nIndustriegüter: branchenbezogen, unternehmensbezogen (Umsatz, Mitarbeiter), gruppenbezogen (Buying Center), personenbezogen (Funktion des Entscheiders)." },
        { id: "k224", q: "Warum ist „alle zwischen 18 und 29“ keine gute Zielgruppe?", a: "Das ist ein Merkmal, kein Segment – eine 24-jährige Berufspendlerin und ein 24-jähriger Student verhalten sich völlig unterschiedlich (fehlende Verhaltensrelevanz)." }
      ],
      quiz: [
        { q: "Welche Forschungsform wertet bereits vorhandene Daten aus?", options: ["Primärforschung", "Sekundärforschung", "Experiment", "Beobachtung"], correct: 1, explain: "Sekundärforschung – erst intern, dann extern suchen." },
        { q: "Welche Methode erlaubt Aussagen über Ursachen (Kausalität)?", options: ["Befragung", "Beobachtung", "Experiment", "Sekundäranalyse"], correct: 2, explain: "Experiment, z. B. A/B-Test mit Zufallszuteilung." },
        { q: "Absatz 3 Mio., Marktvolumen 40 Mio. Marktanteil?", options: ["3 %", "7,5 %", "13,3 %", "12 %"], correct: 1, explain: "3 / 40 × 100 = 7,5 %." },
        { q: "Welche Ebene der Situationsanalyse ist endogen (steuerbar)?", options: ["Umwelt", "Gesellschaft", "Markt", "Unternehmen"], correct: 3, explain: "Nur das Unternehmen selbst ist steuerbar." },
        { q: "„Markenbekanntheit steigern“ ist ein … Ziel.", options: ["ökonomisches", "vorökonomisches", "ökologisches", "soziales"], correct: 1, explain: "Vorökonomisch – vorlaufend, indirekt messbar." },
        { q: "Welche Anforderung an Segmentierungskriterien ist die wichtigste?", options: ["Messbarkeit", "Verhaltensrelevanz", "Zeitliche Stabilität", "Zugänglichkeit"], correct: 1, explain: "Verhaltensrelevanz wird am häufigsten übersprungen." },
        { q: "SWOT: Was sind „Threats“?", options: ["Interne Schwächen", "Externe Risiken", "Interne Stärken", "Externe Chancen"], correct: 1, explain: "O und T sind extern, S und W intern." }
      ]
    }
  ]
});
