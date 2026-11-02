/*
 * Priming-Fragen je Lektion: konkret, aus dem Kopf beantwortbar (schätzen erlaubt).
 * q = Frage, ph = Platzhalter/Denkanstoß, a = Auflösung (wird nach der Lektion gezeigt).
 */
(function () {
  const R = String.raw;
  window.PRIMING = {
    // ---------------- VBL 1 ----------------
    "vbl1/a-grundlagen": [
      { q: "Nike verkauft 10 Paletten Schuhe an Snipes in München. Wer ist alles beteiligt, damit die Schuhe dort ankommen? Zähl alle Rollen auf, die dir einfallen.", ph: "z. B. Nike als Verkäufer, …", a: "**Verlader** (Nike), **Spediteur** (organisiert, z. B. Schenker), **Frachtführer** (fährt, z. B. Willi Betz), **Empfänger** (Snipes)." },
      { q: "Was ist deiner Meinung nach der Unterschied zwischen einem **Spediteur** und einem **Frachtführer**?", ph: "Wer macht was?", a: "Der Spediteur **organisiert** („besorgt“) den Transport, der Frachtführer **fährt** selbst." },
      { q: "Kommt die Ware beim Spediteur vorbei, wenn er den Transport organisiert? Begründe kurz.", ph: "Ja / Nein, weil …", a: "**Nein.** Die Ware fährt direkt vom Verlader zum Empfänger – nur die **Verträge** laufen über den Spediteur." }
    ],
    "vbl1/a-verkehrstraeger": [
      { q: "Holz aus Schweden, Blumen aus Holland, ein Ersatzteil, das morgen in Shanghai sein muss: Womit würdest du jeweils transportieren – und warum?", ph: "Holz: … / Blumen: … / Ersatzteil: …", a: "Holz: **Bahn oder Schiff** (schwer, nicht eilig) · Blumen: **Lkw** (flexibel, Haus zu Haus) · Ersatzteil: **Flugzeug** (eilig, wertvoll, leicht)." },
      { q: "Ein Paket reist von der Fabrik zum Kunden. In welche Abschnitte würdest du die Strecke einteilen?", ph: "Erst … dann … dann …", a: "**Vorlauf → Umschlag → Hauptlauf → Umschlag → Nachlauf.**" },
      { q: "Schätz mal: Welcher Abschnitt einer Transportkette ist am teuersten – und warum?", ph: "Ich tippe auf …", a: "Der **Nachlauf** mit ca. **50 % der Kosten**: viele Einzelstopps mit wenig Ware pro Stopp." }
    ],
    "vbl1/a-markt": [
      { q: "Manche Logistikfirmen fahren nur Lkw, andere steuern die komplette Lieferkette eines Autobauers. Welche Abstufungen dazwischen kannst du dir vorstellen?", ph: "nur fahren → … → alles steuern", a: "**1PL** Frachtführer → **2PL** Spediteur → **3PL** Kontraktlogistiker → **4PL** steuert die ganze Supply Chain." },
      { q: "Schätz mal: Wie viel Geld wird in Deutschland pro Jahr für Logistik ausgegeben – 30, 300 oder 3.000 Mrd. €?", ph: "Ich schätze …", a: "**≈ 330 Mrd. €** – und das sind **Kosten**, nicht Umsatz, weil viel im eigenen Unternehmen erledigt wird." },
      { q: "Welche Zusatzleistungen außer dem Fahren könnte eine Spedition einem Online-Shop anbieten?", ph: "z. B. Lager, …", a: "**Value Added Services**, z. B. Kommissionierung, Etikettieren, Verpacken, Retourenmanagement, Montage, Zoll." }
    ],
    "vbl1/b-strasse": [
      { q: "Wer darf in Deutschland gewerblich Güter mit dem Lkw fahren? Was müsste man dafür deiner Meinung nach nachweisen?", ph: "z. B. einen Führerschein, …", a: "Man braucht die **GÜKG-Erlaubnis** (Fahrzeuge über 3,5 t): **Zuverlässigkeit, finanzielle Leistungsfähigkeit, fachliche Eignung.**" },
      { q: "Welche Lkw-Typen kennst du von der Autobahn – und worin unterscheiden sie sich?", ph: "z. B. mit Auflieger, …", a: "**Sattelzug** (16,50 m, 33/34 Paletten), **Gliederzug** mit Wechselbrücken (18,75 m, 38 Paletten), Verteiler-Lkw, Lang-Lkw." },
      { q: "Ein Lkw fährt 400 km Autobahn. Wofür muss der Unternehmer dabei zahlen – und wie wird das erfasst?", ph: "Ich vermute …", a: "**Lkw-Maut** pro Kilometer (nach Achsen, Gewicht, CO2-Klasse) – automatisch per **On-Board-Unit** (Toll Collect)." }
    ],
    "vbl1/b-sammelgut": [
      { q: "Ein Kunde will 300 kg Ware verschicken – zu schwer fürs Paket, zu wenig für einen eigenen Lkw. Wie würdest du das lösen?", ph: "Meine Idee: …", a: "**Sammelgut:** viele kleine Sendungen werden gesammelt, gemeinsam im Hauptlauf gefahren und am Ziel verteilt." },
      { q: "Heute Nachmittag abgeholt, morgen Vormittag in Hamburg zugestellt: Wie könnte der Ablauf über Nacht aussehen?", ph: "Nachmittag … Abend … Nacht …", a: "Vorlauf (Nachmittag) → Umschlag (Abend) → **Hauptlauf (Nacht)** → Umschlag (früher Morgen) → Zustellung (Vormittag)." },
      { q: "Warum könnte es sich lohnen, alle Sendungen über einen zentralen Umschlagplatz (Hub) zu schicken statt direkt?", ph: "Vorteil: … / Nachteil: …", a: "**Weniger Linien, vollere Lkw**, auch kleine Partner und schwache Strecken werden bedienbar – kostet aber **zusätzlichen Umschlag**." }
    ],
    "vbl1/b-europa": [
      { q: "Ein polnischer Lkw fährt Ware von München nach Berlin. Darf er das überhaupt? Was vermutest du?", ph: "Ja / Nein, weil …", a: "Ja, als **Kabotage** – aber nach einer internationalen Lieferung höchstens **3 Fahrten in 7 Tagen**, danach 4 Tage Pause." },
      { q: "EU, EFTA, EWR: Was glaubst du, ist der Unterschied – und wo gehört die Schweiz hin?", ph: "EU = …, die Schweiz …", a: "**EWR = EU + EFTA ohne Schweiz.** Die Schweiz ist in der EFTA, aber nicht im EWR." },
      { q: "Eine Sendung mit 2.000 kg und 20.000 € Warenwert geht kaputt. Muss der Frachtführer den vollen Wert ersetzen? Schätz mal.", ph: "Ich glaube …", a: "Nein, nur bis **8,33 SZR je kg** ≈ **19.992 €** – 8 € bleiben ungedeckt." }
    ],
    // ---------------- Logistik ----------------
    "logistik/l-begriff": [
      { q: "Du bestellst ein Ladekabel online. Was muss alles stimmen, damit du zufrieden bist? Zähl so viele Punkte auf wie möglich.", ph: "das richtige Kabel, …", a: "Die **7 R**: richtiges Produkt, Menge, Zeit, Ort, Kosten, Informationen, Qualität." },
      { q: "Was passiert in der Logistik eigentlich mit der Ware? Nenne die drei wichtigsten Tätigkeiten.", ph: "1. … 2. … 3. …", a: "**Transport** (überbrückt den Raum), **Lagerung** (die Zeit), **Umschlag/Kommissionierung** (Menge & Anordnung)." },
      { q: "Logistik oder Supply Chain Management: Was glaubst du, ist der Unterschied?", ph: "Logistik = … / SCM = …", a: "Logistik steuert die Flüsse meist aus Sicht des **eigenen Unternehmens**, SCM koordiniert die **ganze Kette** über alle Unternehmen." }
    ],
    "logistik/l-markt": [
      { q: "Schätz mal: Wie viel Geld wird in Deutschland pro Jahr für Logistik ausgegeben – 30, 300 oder 3.000 Mrd. €? Und auf welchem Platz der größten Wirtschaftsbereiche landet die Logistik?", ph: "Ich schätze … Mrd. €, Platz …", a: "**≈ 331 Mrd. €** – der **drittgrößte** Wirtschaftsbereich Deutschlands." },
      { q: "Nenne 3 Logistikunternehmen, die du kennst – und was sie genau machen (Pakete, ganze Lkw-Ladungen, Lager …).", ph: "1. … macht …", a: "z. B. **DHL** (Pakete, Kontraktlogistik), **DSV/Schenker** (Spedition), **Dachser** (Stückgut), **Kühne + Nagel** (Kontraktlogistik)." },
      { q: "Warum sitzen gerade in Deutschland so viele Logistikunternehmen? Nenne 2–3 Gründe.", ph: "weil …", a: "**Hohe Kaufkraft, zentrale Lage in Europa, Exportnation mit globalen Lieferketten, Effizienz & Zuverlässigkeit.**" }
    ],
    "logistik/l-konzeption": [
      { q: "Ein Autohersteller – vom Zulieferer bis zum alten Auto: An welchen Stellen braucht er Logistik?", ph: "Teile anliefern, …", a: "**Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik.**" },
      { q: "Ware direkt vom Lieferanten zum Kunden fahren – oder über ein Lager dazwischen? Was spricht jeweils dafür?", ph: "direkt: … / über Lager: …", a: "Direkt: kein Umschlag, keine Lagerkosten. Über einen **Knoten**: Bündelung, schnelle Lieferung, Sortimente – kostet aber Umschlag und Kapital." },
      { q: "Viel Lagerbestand – gut oder schlecht? Notiere je ein Argument.", ph: "gut, weil … / schlecht, weil …", a: "Gut: lieferfähig, Puffer bei Störungen. Schlecht: bindet Geld und **verdeckt Probleme** (wie Wasser die Felsen)." }
    ],
    "logistik/l-prinzipien": [
      { q: "Im Supermarkt wird plötzlich 10 % mehr Klopapier gekauft. Was passiert deiner Meinung nach beim Händler, beim Großhändler und beim Hersteller?", ph: "Der Händler bestellt …", a: "Jede Stufe bestellt „sicherheitshalber“ mehr – die Schwankung wird immer größer: der **Bullwhip-Effekt**." },
      { q: "Ein Notebook-Hersteller bietet 50 Varianten an. Wie könnte er vermeiden, von jeder Variante viel auf Lager zu haben?", ph: "Idee: …", a: "**Postponement:** ein Basisgerät lagern und erst **nach der Bestellung** ausstatten." },
      { q: "Warum ist ein halb leerer Lkw so teuer – und was könnte man dagegen tun?", ph: "teuer, weil … / Lösung: …", a: "Hohe **Fixkosten** pro Fahrt → **bündeln**: Sendungen, Touren, über Hubs oder in Ringsystemen." }
    ],
    "logistik/l-lernfragen": [
      { q: "Ein Samsung-Fernseher wird in Vietnam gebaut und in den USA verkauft. Welche Stationen und Verkehrsmittel braucht er unterwegs?", ph: "Fabrik → …", a: "Fabrik → Lkw/Binnenschiff → Containerterminal → **Seeschiff (≈ 30 Tage)** → Terminal Los Angeles → Lkw → Logistikzentrum → Zustellung." },
      { q: "In welchen „Verpackungseinheiten“ reist die Ware – und wie ändern sie sich unterwegs?", ph: "zuerst im … später …", a: "**Container → Palette → Paket → Tüte:** je näher am Kunden, desto kleiner." },
      { q: "Was kann auf so einer langen Reise alles schiefgehen?", ph: "z. B. …", a: "Kanal-Blockaden, überlastete Häfen, Krisen, Unwetter, Fahrermangel – **Just-in-Time ist nicht krisensicher.**" }
    ],
    // ---------------- BWL & Marketing ----------------
    "bwl/bwl-b1": [
      { q: "BWL und VWL: Was glaubst du, womit beschäftigt sich die BWL – und womit die VWL?", ph: "BWL: … / VWL: …", a: "**BWL:** der einzelne Betrieb und seine Entscheidungen. **VWL:** die Gesamtwirtschaft." },
      { q: "Betrieb, Unternehmen, Firma: Ist das für dich dasselbe? Versuch eine Abgrenzung.", ph: "Betrieb = …", a: "**Betrieb** = planvoll organisierte Wirtschaftseinheit · **Unternehmung** = Betrieb in der Marktwirtschaft · **Firma** = der Name." },
      { q: "Eine Umfrage liefert bei jeder Wiederholung ein anderes Ergebnis. Was stimmt dann nicht?", ph: "Das Problem ist …", a: "Sie ist nicht **reliabel** (zuverlässig). Weitere Gütekriterien: **Objektivität** und **Validität**." }
    ],
    "bwl/bwl-b2": [
      { q: "Was braucht eine Spedition alles, um ein Paket zuzustellen? Liste die „Zutaten“ auf.", ph: "einen Fahrer, …", a: "**Produktionsfaktoren:** ausführende Arbeit (Fahrer), Betriebsmittel (Lkw, Software), Werkstoffe (Diesel, Verpackung) + **Leitung** (Planung, Disposition)." },
      { q: "„Ich habe Hunger“ – „Ich will eine Pizza“ – „Ich kaufe eine Pizza“: Worin unterscheiden sich die drei Sätze?", ph: "Satz 1 ist … Satz 2 …", a: "**Bedürfnis → Bedarf → Nachfrage.**" },
      { q: "Woran würdest du erkennen, ob eine Spedition gut wirtschaftet? Nenne 2 Kennzahlen, die dir einfallen.", ph: "z. B. …", a: "**Produktivität** (Output ÷ Input), **Wirtschaftlichkeit** (Ertrag ÷ Aufwand > 1), **Rentabilität** (Gewinn ÷ Kapital in %)." }
    ],
    "bwl/mkt-1": [
      { q: "Warum kaufst du deine Sneaker genau in diesem einen Shop – und nicht woanders? Nenne 3 Gründe.", ph: "1. Preis … 2. …", a: "Das ist die Leitfrage des Moduls. Marketing arbeitet genau mit diesen Gründen: **Produkt, Preis, Place (Lieferung), Promotion** – die 4P." },
      { q: "Ist Marketing für dich nur Werbung? Was gehört deiner Meinung nach noch dazu?", ph: "auch …", a: "Nein: Marketing ist eine **Denkhaltung** – alles vom Kunden her denken, auch Preis, Lieferzeit und Service." },
      { q: "Zahnpasta oder ein Auto kaufen: Wie unterschiedlich gehst du dabei vor?", ph: "Zahnpasta: … / Auto: …", a: "Zahnpasta: **Gewohnheitskauf** (niedriges Involvement). Auto: **komplexer Kauf** (hohes Involvement, große Markenunterschiede)." }
    ],
    "bwl/mkt-2": [
      { q: "Ein Online-Shop will wissen, ob „Lieferung morgen“ mehr Käufe bringt als „Lieferung in 3 Tagen“. Wie würdest du das herausfinden?", ph: "Ich würde …", a: "Mit einem **Experiment (A/B-Test)** – nur das zeigt **Ursachen**. Befragung oder Beobachtung reichen dafür nicht." },
      { q: "Ein Paketdienst stellt 4 Mio. Sendungen zu, im ganzen Markt sind es 60 Mio. Was sagt dir das – und wie rechnest du es aus?", ph: "Rechnung: …", a: R`**Marktanteil** = $\frac{4}{60} \cdot 100 \approx 6{,}7\,\%$.` },
      { q: "Welche Stärken und Schwächen hat dein Ausbildungsbetrieb – und welche Chancen und Gefahren kommen von außen?", ph: "Stärke: … / Gefahr: …", a: "Genau das ist eine **SWOT-Analyse**: Stärken und Schwächen **intern**, Chancen und Gefahren **extern**." }
    ],
    // ---------------- Mathe ----------------
    "mathe/m-abschreibung": [
      { q: "Ein neuer Lkw kostet 100.000 €. Verliert er jedes Jahr gleich viel Wert – oder am Anfang mehr? Was glaubst du?", ph: "Ich glaube …, weil …", a: "Am Anfang mehr: **degressiv** wird jedes Jahr derselbe Prozentsatz vom **Restwert** abgeschrieben." },
      { q: "Schätz mal: Wie viel ist der Lkw bei 20 % Abschreibung pro Jahr nach 4 Jahren noch wert?", ph: "ungefähr … €", a: R`$100.000 \cdot 0{,}8^4 = 40.960$ €` },
      { q: "Wenn die gesuchte Zahl der Jahre $n$ im Exponenten steht: Mit welchem Werkzeug aus der Mathe holst du sie da raus?", ph: "mit dem …", a: R`Mit dem **Logarithmus**: $\ln(q^n) = n \cdot \ln q$.` }
    ],
    "mathe/m-zinseszins": [
      { q: "Du legst 10.000 € zu 10 % Zinsen an. Wie viel hast du nach 2 Jahren – genau 12.000 € oder mehr?", ph: "Ich tippe auf …", a: "**12.100 €** – im 2. Jahr gibt es auch Zinsen auf die Zinsen (**Zinseszins**)." },
      { q: "Schätz mal: Nach wie vielen Jahren verdoppelt sich Geld bei 5 % Zinsen?", ph: "nach ungefähr … Jahren", a: "Nach **≈ 14,2 Jahren** (Faustregel: 72 ÷ 5 ≈ 14)." },
      { q: "Du willst in 5 Jahren 10.000 € haben. Wie würdest du ausrechnen, wie viel du heute anlegen musst?", ph: "Ich würde …", a: R`**Abzinsen:** $K_0 = \frac{K_n}{q^n}$.` }
    ],
    "mathe/m-unterjaehrig": [
      { q: "Bank A zahlt 8 % Zinsen einmal im Jahr, Bank B jeden Monat ein Zwölftel davon. Wo bekommst du mehr – oder ist es gleich?", ph: "Bei Bank …, weil …", a: "Bei **Bank B** etwas mehr (≈ **8,30 %** effektiv), weil schon während des Jahres Zinsen auf Zinsen anfallen." },
      { q: "Was passiert deiner Meinung nach, wenn man noch öfter verzinst – täglich, stündlich, jede Sekunde?", ph: "Dann …", a: "Der Zuwachs wird immer kleiner und nähert sich einer Grenze: der **stetigen Verzinsung** mit der Zahl **e**." },
      { q: "Woran würdest du in einer Aufgabe erkennen, welche Zinsformel du brauchst?", ph: "am Wort …", a: R`„jährlich“ → $K_0 q^n$ · „monatlich/vierteljährlich“ → $K_0(1+\frac{p}{100m})^{mn}$ · „stetig“ → $e$ · „effektiv“ → $p^*$` }
    ]
  };
})();
