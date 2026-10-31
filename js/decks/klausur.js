/*
 * Klausuraufgaben im DHBW-Stil (Operatoren, Punkte, Musterlösung mit Erwartungshorizont).
 * Wird als zusätzlicher Stapel in die bestehenden Prüfungsordner eingehängt.
 * Aufgaben laufen im Aufgabenmodus: lösen → Musterlösung aufdecken → selbst bewerten.
 */
(function () {
  const R = String.raw;
  const add = (folderId, deck) => {
    const f = window.BUILTIN_FOLDERS.find(x => x.id === folderId);
    if (f) f.decks.push(deck);
  };
  const SHORT = { vbl1: "VBL 1", bwl: "BWL", logistik: "Logistik", mathe: "Mathe" };
  window.BUILTIN_FOLDERS.forEach(f => { if (SHORT[f.id]) f.short = SHORT[f.id]; });

  // ==================================================================
  // VBL 1
  // ==================================================================
  add("vbl1", {
    id: "klausur",
    name: "📝 Klausuraufgaben VBL 1",
    description: "Prüfungsnahe Aufgaben mit Punkten und Musterlösung – Rechnen, Erläutern, Fälle lösen.",
    cards: [
      {
        id: "k01", important: true,
        q: "Erläutern Sie die Rechtsbeziehungen zwischen Versender, Spediteur, Frachtführer und Empfänger. Zeichnen Sie dazu gedanklich das Vertragsdreieck und gehen Sie auf den Warenfluss ein. (8 Punkte)",
        hint: "Operator „Erläutern“: nicht nur nennen, sondern Zusammenhänge mit Begründung darstellen. Drei Verträge + Warenfluss.",
        steps: [
          "Kaufvertrag zwischen Verkäufer (Versender) und Käufer (Empfänger): Ware liefern ↔ Kaufpreis zahlen (1 P.)",
          "Speditionsvertrag § 453 HGB zwischen Versender und Spediteur: Spediteur besorgt die Versendung, Versender zahlt Vergütung (2 P.)",
          "Frachtvertrag § 407 HGB zwischen Spediteur (als Absender) und Frachtführer: Frachtführer befördert und liefert ab, Spediteur zahlt Fracht (2 P.)",
          "Warenfluss läuft physisch Versender → Frachtführer → Empfänger (1 P.)",
          "Vertragsbeziehungen laufen dagegen über den Spediteur – Waren- und Vertragsfluss fallen auseinander; der Empfänger hat keinen Vertrag mit dem Frachtführer (2 P.)"
        ],
        a: "3 Verträge (Kauf, § 453, § 407) + Warenfluss direkt vs. Vertragsfluss über den Spediteur."
      },
      {
        id: "k02", important: true,
        q: "Eine Spedition hat 12 Stückgutsendungen à 800 kg von Mannheim nach Hamburg. Einzeltransporte kosten je 260 €. Gebündelt entstehen 1.200 € Hauptlaufkosten plus 70 € je Sendung (Vor-/Nachlauf, Umschlag).\na) Berechnen Sie die Gesamtkosten und die Kosten je Sendung für beide Varianten. (4 P.)\nb) Ab wie vielen Sendungen lohnt sich die Bündelung? (3 P.)\nc) Nennen Sie zwei Nachteile der Bündelung. (2 P.)",
        hint: "Kosten je Sendung gebündelt = Hauptlaufkosten / n + variable Kosten je Sendung. Für b) die beiden Kosten je Sendung gleichsetzen.",
        steps: [
          "a) Direkt: 12 × 260 € = 3.120 € → 260 € je Sendung",
          "a) Gebündelt: 1.200 € + 12 × 70 € = 2.040 € → 170 € je Sendung",
          "b) Bedingung: 1.200/n + 70 < 260 → 1.200/n < 190 → n > 6,3",
          "b) Ab 7 Sendungen ist die Bündelung günstiger",
          "c) Zusätzlicher Umschlag → mehr Zeit und höheres Schadens-/Fehlverladungsrisiko",
          "c) Abhängigkeit von festen Abfahrtszeiten (Systemverkehr) / Risiko, wenn Volumen ausbleibt"
        ],
        a: "Direkt 3.120 € (260 €/Sdg.) · gebündelt 2.040 € (170 €/Sdg.) · lohnt ab 7 Sendungen."
      },
      {
        id: "k03", important: true,
        q: "Ein Frachtführer verliert bei einem innerdeutschen Transport eine Sendung mit 1.500 kg Rohgewicht und einem Warenwert von 18.000 €. Es wurde nichts Besonderes vereinbart. 1 SZR = 1,20 €.\na) Berechnen Sie die Haftungshöchstgrenze. (3 P.)\nb) Wie viel Euro bekommt der Versender ersetzt? (1 P.)\nc) Was würde sich ändern, wenn es ein Transport Mannheim → Lyon wäre? (2 P.)",
        hint: "Regelhaftung 8,33 SZR je kg Rohgewicht. Ersetzt wird höchstens der tatsächliche Schaden.",
        steps: [
          "a) 1.500 kg × 8,33 SZR × 1,20 €/SZR = 14.994 €",
          "b) Ersetzt werden 14.994 € (Haftungsgrenze < Warenwert 18.000 €) → 3.006 € bleiben ungedeckt",
          "c) International gilt die CMR: ebenfalls 8,33 SZR/kg, Ergebnis also gleich",
          "c) Unterschied: Bei CMR kein Haftungskorridor (2–40 SZR) vereinbar, CMR ist zwingend; HGB ist halbzwingend"
        ],
        a: "Haftung max. 14.994 €, Rest (3.006 €) ungedeckt; CMR gleiche Höhe, aber zwingend ohne Korridor."
      },
      {
        id: "k04",
        q: "Ein Kunde möchte 8 Paletten Ersatzteile (2,4 t, Warenwert 120.000 €) innerhalb von 24 Stunden von Stuttgart nach Mailand liefern lassen. Der Empfänger hat keinen Gleisanschluss.\nBegründen Sie Ihre Verkehrsträgerwahl anhand der Leistungsmerkmale der Verkehrsträger. (6 Punkte)",
        hint: "Operator „Begründen“: Entscheidung + Argumente. Prüfe Eignung (Zeit, Infrastruktur, Menge, Wert) und schließe Alternativen aus.",
        steps: [
          "Entscheidung: Lkw als Direkt-/Teilladung (1 P.)",
          "Zeit: 24 h verlangt hohe Geschwindigkeit + Flexibilität → Lkw (Haus-zu-Haus) erfüllt das (1 P.)",
          "Infrastruktur: kein Gleisanschluss → Bahn bräuchte Vor-/Nachlauf, zu langsam (1 P.)",
          "Menge: 8 Paletten = Teilladung, für Bahn/Schiff zu klein (1 P.)",
          "Luftfracht: auf 500 km nicht schneller (Station-zu-Station, Vor-/Nachlauf), sehr teuer, CO2 sehr hoch (1 P.)",
          "Hoher Warenwert → Versicherung, ggf. Direktfahrt ohne Umschlag wegen Schadensrisiko (1 P.)"
        ],
        a: "Lkw (Direkt-/Teilladung): schnell, Haus-zu-Haus, kein Gleisanschluss nötig, wenig Umschlag."
      },
      {
        id: "k05", important: true,
        q: "Unterscheiden Sie 1PL, 2PL und 3PL anhand von vier Merkmalen und ordnen Sie Ihren Ausbildungsbetrieb begründet ein. (8 Punkte)",
        hint: "Merkmale z. B.: Hauptaufgabe, Kundenkreis, Integrationstiefe/IT, Vertragslaufzeit. Prof-Hinweis: Das ist eine Prüfungsfrage!",
        steps: [
          "Hauptaufgabe: 1PL physischer Transport · 2PL Koordination/Organisation · 3PL Übernahme ganzer Logistikprozesse (2 P.)",
          "Kundenkreis: 1PL klein, wechselnd · 2PL groß, anonym · 3PL wenige Großkunden (1,5 P.)",
          "Integrationstiefe/IT: gering · moderat · hoch (1,5 P.)",
          "Vertragslaufzeit: kurz · < 1 Jahr · 3–10 Jahre (1 P.)",
          "Beispiele: Willi Betz · Schenker · Kühne + Nagel (1 P.)",
          "Einordnung Ausbildungsbetrieb mit Begründung über die genannten Merkmale (2 P.)"
        ],
        a: "Transport → Koordination → Kontraktlogistik; steigende Integration, Laufzeit und Kundenspezifität."
      },
      {
        id: "k06", important: true,
        q: "Ein polnischer Frachtführer liefert am Montag eine internationale Ladung von Warschau nach Köln. Danach fährt er:\nDi: Köln → Dortmund · Mi: Dortmund → Hannover · Do: Hannover → Berlin · Fr: Berlin → Leipzig\nPrüfen Sie, ob alle Fahrten zulässig sind, und nennen Sie die geltenden Regeln. (6 Punkte)",
        hint: "Kabotage: max. 3 Fahrten in 7 Tagen nach einer internationalen Lieferung, danach 4 Tage Abkühlphase.",
        steps: [
          "Die Fahrten innerhalb Deutschlands durch einen polnischen Unternehmer sind Kabotage (1 P.)",
          "Erlaubt sind max. 3 Kabotagefahrten innerhalb von 7 Tagen nach der internationalen Entladung (1 P.)",
          "Di, Mi, Do = 3 Fahrten → zulässig (1 P.)",
          "Fr (4. Fahrt) → unzulässig (1 P.)",
          "Danach 4 Tage Abkühlphase, Fahrzeug muss spätestens nach 8 Wochen in den Heimatstaat zurück (1 P.)",
          "Fahrer gilt als entsendet → Mindestlohn & Arbeitsbedingungen in DE, keine Niederlassung im Kabotageland erlaubt (1 P.)"
        ],
        a: "3 Fahrten (Di–Do) zulässig, die 4. (Fr) nicht – Regel 3 in 7, danach 4 Tage Pause."
      },
      {
        id: "k07",
        q: "Beschreiben Sie den Ablauf eines Sammelgutverkehrs von der Abholung bis zur Zustellung inklusive der typischen Tageszeiten und der eingesetzten Fahrzeuge. (7 Punkte)",
        hint: "5 Stufen: Vorlauf – Umschlag VS – Hauptlauf – Umschlag ES – Nachlauf.",
        steps: [
          "Vorlauf/Abholung beim Versender, nachmittags, Nahverkehrs-Lkw bis 12/15 t (1,5 P.)",
          "Umschlag beim Versandspediteur, früher Abend: Sortieren nach Zielregion, Sammelladungen bilden (1,5 P.)",
          "Hauptlauf nachts zum Empfangsspediteur, Sattel-/Gliederzug bis 40 t oder Bahn (KV) (1,5 P.)",
          "Umschlag beim Empfangsspediteur, früher Morgen: Touren bilden (1 P.)",
          "Nachlauf/Zustellung vormittags mit Verteiler-Lkw (1 P.)",
          "Ziel: Zustellung in 24 h, Sendungen ca. 31–3.000 kg (0,5 P.)"
        ],
        a: "Vorlauf (nachm.) → Umschlag VS (abends) → Hauptlauf (nachts) → Umschlag ES (früh) → Nachlauf (vorm.)."
      },
      {
        id: "k08",
        q: "Ein Mittelständler mit 5 Niederlassungen überlegt, einem Sammelgut-Kooperationsnetzwerk beizutreten. Beurteilen Sie Vor- und Nachteile eines Hub-and-Spoke-Systems für dieses Unternehmen. (6 Punkte)",
        hint: "Operator „Beurteilen“: Vor- und Nachteile abwägen UND ein begründetes Fazit ziehen.",
        steps: [
          "Vorteil: flächendeckendes 24-h-Netz ohne eigene Niederlassungen überall (1 P.)",
          "Vorteil: auch schwache Relationen wirtschaftlich bedienbar, bessere Auslastung durch Bündelung am Hub (1 P.)",
          "Nachteil: zusätzlicher Umschlag → höhere Kosten, teurer als Direktverkehr (1 P.)",
          "Nachteil: höheres Schadens-/Fehlverladungsrisiko, Abhängigkeit von Netzregeln, Teilnahmepflicht (1 P.)",
          "Fazit: Für einen Mittelständler ohne eigene flächendeckende Präsenz überwiegen die Vorteile – Beitritt sinnvoll; starke Relationen ggf. weiter direkt fahren (2 P.)"
        ],
        a: "Vorteile (24-h-Netz, Auslastung) überwiegen für Mittelständler; starke Relationen direkt fahren."
      },
      {
        id: "k09",
        q: "Ein Lkw (5 Achsen, Euro VI) fährt 420 km auf mautpflichtigen Straßen. Der Mautsatz beträgt 0,348 €/km.\na) Berechnen Sie die Maut. (2 P.)\nb) Nennen Sie vier Parameter, nach denen sich der Mautsatz in Deutschland richtet. (2 P.)\nc) Wer betreibt das System und wie wird die Maut erfasst? (2 P.)",
        hint: "Maut = Strecke × Satz. Parameter: Strecke, Achsen/Gewicht, Schadstoffklasse, CO2-Klasse.",
        steps: [
          "a) 420 km × 0,348 €/km = 146,16 €",
          "b) Streckenlänge · Achszahl & technisch zulässige Gesamtmasse · Schadstoffklasse · CO2-Emissionsklasse",
          "c) Betreiber: Toll Collect (seit 01.01.2005)",
          "c) Erfassung automatisch per On-Board-Unit mit GPS, Kontrolle über Mautbrücken/-säulen"
        ],
        a: "146,16 € Maut · Parameter: Strecke, Achsen/Gewicht, Schadstoff-, CO2-Klasse · Toll Collect, OBU."
      },
      {
        id: "k10",
        q: "Erklären Sie, warum es falsch ist, von 330 Mrd. € „Logistikumsatz“ zu sprechen, und ordnen Sie den Speditionsumsatz ein. (5 Punkte)",
        hint: "Prof-Lernfrage. Begriffe: Logistikkosten, insourced, outsourced.",
        steps: [
          "Die ca. 330 Mrd. € sind das gesamte Logistikmarktvolumen = Logistikkosten (1 P.)",
          "Darin enthalten sind auch Leistungen, die Industrie und Handel selbst erbringen (insourced) – diese werden nicht verkauft (1,5 P.)",
          "Umsatz entsteht nur bei extern vergebenen Leistungen (outsourced) (1 P.)",
          "Speditions-/Logistikbranche: ca. 131 Mrd. € Umsatz ≈ 40 % outsourced, ca. 60 % insourced (1,5 P.)"
        ],
        a: "330 Mrd. € = Kosten inkl. Eigenleistung; nur ca. 131 Mrd. € (40 %) sind Umsatz der Dienstleister."
      },
      {
        id: "k11",
        q: "Ein Verlader überlegt, seine Distribution an eine Kontraktlogistik auszulagern. Nennen und erläutern Sie je zwei Argumente für Outsourcing und für Insourcing. (8 Punkte)",
        hint: "Kriterien: Mengen & Netz, Kompetenz, Investitionen, Steuerung, Abhängigkeit.",
        steps: [
          "Pro Outsourcing: schwankende Mengen/viele Ziele → Dienstleister bündelt mit anderen Kunden, bessere Auslastung (2 P.)",
          "Pro Outsourcing: Kapital und Anlagen vermeiden, Spezialwissen extern nutzen (2 P.)",
          "Pro Insourcing: Logistik ist strategisch zentral / Wettbewerbsvorteil (z. B. Lieferzeit) (2 P.)",
          "Pro Insourcing: hohe Wechselkosten und Abhängigkeit, kritische Abläufe schwer vertraglich abzusichern (2 P.)"
        ],
        a: "Out: Bündelung, Kapital sparen, Know-how · In: strategische Bedeutung, Abhängigkeit vermeiden."
      },
      {
        id: "k12",
        q: "Nennen Sie die Kernpflichten des Spediteurs nach § 454 HGB und ordnen Sie sie den Bereichen Planung, Ausführung und Überwachung zu. Wann hat der Spediteur zusätzlich Frachtführerpflichten? (6 Punkte)",
        hint: "Planung: Mittel & Weg · Ausführung: Unternehmer, Verträge, Weisungen · Überwachung: Ansprüche sichern.",
        steps: [
          "Planung: Wahl des Beförderungsmittels und des Beförderungswegs (1,5 P.)",
          "Ausführung: Auswahl ausführender Unternehmer, Abschluss der Fracht-/Lager-/Speditionsverträge, Erteilung von Informationen & Weisungen (2 P.)",
          "Überwachung: Sicherung von Schadenersatzansprüchen (1 P.)",
          "Frachtführerpflichten beim Selbsteintritt: Der Spediteur führt die Beförderung selbst aus (1,5 P.)"
        ],
        a: "Planung (Mittel, Weg) · Ausführung (Unternehmer, Verträge, Weisungen) · Überwachung (Ansprüche) · Selbsteintritt."
      }
    ],
    quiz: []
  });

  // ==================================================================
  // BWL
  // ==================================================================
  add("bwl", {
    id: "klausur",
    name: "📝 Klausuraufgaben BWL & Marketing",
    description: "Prüfungsnahe Aufgaben: Kennzahlen rechnen, Prinzipien zuordnen, Marketing-Fälle lösen.",
    cards: [
      {
        id: "k01", important: true,
        q: "Die Spedition Rollfix fährt mit 3 Fahrern (je 8 Std.) und 3 Lkw (je 8 Std.) 24 Touren und verbraucht 360 l Diesel. Diesel 1,90 €/l, Fahrer 28 €/Std., Lkw-Nutzung 22 €/Std., Erlös 85 € je Tour.\na) Berechnen Sie die Produktivität je Faktor. (3 P.)\nb) Berechnen Sie die Wirtschaftlichkeit und beurteilen Sie sie. (3 P.)",
        hint: "Produktivität = Output/Input (Mengen). Wirtschaftlichkeit = Erlös/Kosten (Werte).",
        steps: [
          "Faktormengen: 24 Fahrerstd. · 24 Lkw-Std. · 360 l Diesel",
          "a) Arbeit: 24 Touren / 24 Std. = 1 Tour/Std. · Lkw: 1 Tour/Lkw-Std. · Diesel: 24/360 ≈ 0,067 Touren/l (15 l/Tour)",
          "b) Kosten: Diesel 360 × 1,90 = 684 € · Personal 24 × 28 = 672 € · Lkw 24 × 22 = 528 € → 1.884 €",
          "b) Erlös: 24 × 85 € = 2.040 €",
          "b) Wirtschaftlichkeit = 2.040 / 1.884 ≈ 1,08 > 1 → knapp wirtschaftlich, geringer Puffer"
        ],
        a: "1 Tour/Std., 1 Tour/Lkw-Std., 0,067 Touren/l · Wirtschaftlichkeit ≈ 1,08 (knapp wirtschaftlich)."
      },
      {
        id: "k02", important: true,
        q: "Ein Unternehmen hat ein Gesamtkapital von 2 Mio. € (davon 800.000 € Eigenkapital). Jahresgewinn 120.000 €, Fremdkapitalzinsen 48.000 €, Umsatz 1,5 Mio. €.\nBerechnen Sie Eigenkapital-, Gesamtkapital- und Umsatzrendite. (6 Punkte)",
        hint: "EKR = Gewinn/EK · GKR = (Gewinn + FK-Zinsen)/GK · UR = Gewinn/Umsatz – jeweils × 100.",
        steps: [
          "EKR = 120.000 / 800.000 × 100 = 15 % (2 P.)",
          "GKR = (120.000 + 48.000) / 2.000.000 × 100 = 8,4 % (2 P.)",
          "UR = 120.000 / 1.500.000 × 100 = 8 % (2 P.)"
        ],
        a: "EKR 15 % · GKR 8,4 % · UR 8 %."
      },
      {
        id: "k03", important: true,
        q: "Ordnen Sie zu und begründen Sie: Welches ökonomische Prinzip liegt vor? (je 1 Punkt)\na) Ein Disponent soll mit 6 Lkw so viele Touren wie möglich fahren.\nb) Eine Firma will 500 Pakete pro Tag mit möglichst wenig Personal zustellen.\nc) Ein Lager will das Verhältnis von Umschlagsleistung zu Kosten optimieren.\nd) Ein Student will mit möglichst wenig Lernzeit die bestmögliche Note.",
        hint: "Maximal: Input fix · Minimal: Output fix · Extremum: beides variabel.",
        steps: [
          "a) Maximalprinzip – Input (6 Lkw) gegeben, Output maximieren",
          "b) Minimalprinzip – Output (500 Pakete) gegeben, Input minimieren",
          "c) Extremum-/Optimumprinzip – Verhältnis von Output zu Input optimieren",
          "d) Widerspruch – „so wenig wie möglich für so viel wie möglich“ ist nicht erfüllbar; sinnvoll formuliert wäre z. B. Minimalprinzip mit fester Zielnote"
        ],
        a: "a) Maximal · b) Minimal · c) Extremum · d) unzulässige Formulierung."
      },
      {
        id: "k04",
        q: "Erläutern Sie, warum ein Unternehmen ein offenes, dynamisches, fremdbestimmtes und komplexes System ist. Nutzen Sie jeweils ein Beispiel aus der Logistik. (8 Punkte)",
        hint: "Für jede der vier Eigenschaften: Bedeutung + Beispiel.",
        steps: [
          "Offen: Austausch mit der Umwelt (Kunden, Lieferanten, Staat) – z. B. Spedition bezieht Diesel, verkauft Transporte (2 P.)",
          "Dynamisch: verändert sich ständig – z. B. Auftragslage schwankt saisonal, neue Kunden (2 P.)",
          "Fremdbestimmt: Einflüsse von außen – z. B. Lenk- und Ruhezeiten, Maut, Mobilitätspaket (2 P.)",
          "Komplex: viele Elemente und Beziehungen – z. B. Netzwerk aus Fahrern, Lkw, Umschlaghallen, IT (2 P.)"
        ],
        a: "Offen (Austausch), dynamisch (Wandel), fremdbestimmt (Gesetze/Markt), komplex (viele Elemente) – je mit Beispiel."
      },
      {
        id: "k05", important: true,
        q: "Stellen Sie den betrieblichen Leistungsprozess einer Paketzustellung aus güter- und finanzwirtschaftlicher Sicht dar und ordnen Sie die Produktionsfaktoren nach Gutenberg zu. (8 Punkte)",
        hint: "Güter: Beschaffung → Produktion → Absatz · Finanzen: Finanzierung → Investition → Rückfluss · Faktoren: Arbeit, Betriebsmittel, Werkstoffe, dispositiver Faktor.",
        steps: [
          "Beschaffung: Fahrzeuge, Diesel, Personal, Scanner (1 P.)",
          "Produktion: Sortieren, Touren fahren, zustellen (1 P.)",
          "Absatz: Verkauf der Zustellleistung an Versender (1 P.)",
          "Finanzwirtschaftlich: Finanzierung (Mittelherkunft) → Investition in Fahrzeuge/Halle (Mittelverwendung) → Rückfluss über Erlöse (2 P.)",
          "Ausführende Arbeit: Fahrer, Sortierer · Betriebsmittel: Lkw, Sortieranlage · Werkstoffe: Diesel (Betriebsstoff), Etiketten · dispositiver Faktor: Tourenplanung, Kontrolle (3 P.)"
        ],
        a: "Beschaffung → Produktion → Absatz; Finanzierung → Investition → Rückfluss; 4 Faktorgruppen zuordnen."
      },
      {
        id: "k06",
        q: "Ein Logistikdienstleister stellt 3,6 Mio. Sendungen pro Jahr zu. Marktvolumen: 45 Mio., Marktpotenzial: 54 Mio. Sendungen. Der stärkste Wettbewerber hat 12 % Marktanteil.\na) Berechnen Sie Marktanteil und relativen Marktanteil. (3 P.)\nb) Wie viel Prozent des Marktpotenzials sind ausgeschöpft? (1 P.)\nc) Leiten Sie eine Strategieempfehlung ab. (2 P.)",
        hint: "MA = Absatz / Marktvolumen · rel. MA = eigener MA / MA des Stärksten · Ausschöpfung = Volumen / Potenzial.",
        steps: [
          "a) MA = 3,6 / 45 × 100 = 8 %",
          "a) Relativer MA = 8 % / 12 % ≈ 0,67 (< 1 → nicht Marktführer)",
          "b) Ausschöpfung = 45 / 54 × 100 ≈ 83,3 % (9 Mio. Sendungen ungenutzt)",
          "c) Wachstum möglich: Marktdurchdringung (Neukunden im Gebiet, Service) oder Marktentwicklung; mit relativ. MA < 1 Differenzierung statt Preiskampf"
        ],
        a: "MA 8 % · rel. MA 0,67 · Potenzial zu 83,3 % ausgeschöpft · Wachstum über Durchdringung/Differenzierung."
      },
      {
        id: "k07", important: true,
        q: "Ordnen Sie die Käufe einem Kaufverhaltenstyp zu und begründen Sie über Involvement und Markenunterschiede: (je 1,5 Punkte)\na) Ein Unternehmen wählt einen neuen Kontraktlogistiker\nb) Ein Student kauft Energy Drinks einer neuen Sorte\nc) Ein Kunde kauft wie immer seine Zahnpasta\nd) Ein Kunde kauft eine Hausratversicherung",
        hint: "Komplex: hoch/groß · Dissonanzreduzierend: hoch/gering · Variety Seeking: niedrig/groß · Habitualisiert: niedrig/gering.",
        steps: [
          "a) Komplexes Kaufverhalten – hohes Involvement, große Unterschiede, intensive Informationssuche (B2B, Buying Center)",
          "b) Variety Seeking – niedriges Involvement, Wechsel aus Neugier",
          "c) Habitualisiert – niedriges Involvement, Gewohnheitskauf ohne Suche",
          "d) Dissonanzreduzierend – hohes Involvement, aber Angebote wirken ähnlich; Zweifel nach dem Kauf"
        ],
        a: "a) komplex · b) Variety Seeking · c) habitualisiert · d) dissonanzreduzierend."
      },
      {
        id: "k08",
        q: "Formulieren Sie das Ziel „Wir wollen in der Luftfracht mehr Kunden gewinnen“ als operationalisiertes Marketingziel und ordnen Sie es einer Zielkategorie zu. Nennen Sie einen möglichen Zielkonflikt. (5 Punkte)",
        hint: "Drei Bestandteile: Zielinhalt, Ausmaß, Zeitbezug. Kategorien: ökonomisch, vorökonomisch, ökologisch/sozial.",
        steps: [
          "Beispiel: „Steigerung der Zahl der Luftfracht-Neukunden um 15 % bis zum 31.12.2027“ (2 P.)",
          "Inhalt = Neukundenzahl · Ausmaß = +15 % · Zeitbezug = bis Ende 2027 (1 P.)",
          "Kategorie: ökonomisches Ziel (messbar, kundenbezogen) (1 P.)",
          "Zielkonflikt: Neukundengewinnung über Preise ↔ Gewinn/Marge, oder Wachstum ↔ CO2-Ziele (1 P.)"
        ],
        a: "Inhalt + Ausmaß + Zeitbezug, z. B. „+15 % Neukunden bis Ende 2027“; ökonomisch; Konflikt Preis ↔ Marge."
      },
      {
        id: "k09",
        q: "Erstellen Sie eine kurze SWOT-Analyse für eine mittelständische Stückgutspedition (je 2 Punkte pro Feld). (8 Punkte)",
        hint: "S/W = intern (wir selbst), O/T = extern (Markt, Umwelt).",
        steps: [
          "Strengths: regionale Nähe, persönliche Betreuung, Netzwerkmitglied (24 h)",
          "Weaknesses: begrenztes Kapital, wenig Digitalisierung, Abhängigkeit von Subunternehmern",
          "Opportunities: E-Commerce-Wachstum, Nachfrage nach grüner Logistik, Fördermittel",
          "Threats: Fahrermangel, steigende Energie- und Mautkosten, Preisdruck durch Großkonzerne"
        ],
        a: "Intern: Stärken/Schwächen · extern: Chancen/Risiken – je 2 passende Punkte."
      },
      {
        id: "k10",
        q: "Ein Logistikdienstleister möchte seinen Markt segmentieren. Schlagen Sie drei Segmentierungskriterien vor und prüfen Sie jedes auf Verhaltensrelevanz. (6 Punkte)",
        hint: "Industriegüter-Kriterien: branchenbezogen, unternehmensbezogen, gruppenbezogen, personenbezogen.",
        steps: [
          "Branche (z. B. Pharma, Automotive, E-Commerce): verhaltensrelevant, weil unterschiedliche Anforderungen (Kühlkette, Takt, Retouren) (2 P.)",
          "Sendungsstruktur/Auftragsvolumen: verhaltensrelevant, bestimmt Produkt (Stückgut vs. FTL) und Preissensibilität (2 P.)",
          "Unternehmensgröße nach Mitarbeitern: nur bedingt relevant – sagt wenig über Logistikbedarf aus, besser mit Sendungsvolumen kombinieren (2 P.)"
        ],
        a: "Branche ✓, Sendungsvolumen ✓, Mitarbeiterzahl nur bedingt – Verhaltensrelevanz ist das wichtigste Kriterium."
      },
      {
        id: "k11",
        q: "Erläutern Sie den Unterschied zwischen Induktion und Deduktion und nennen Sie die drei Gütekriterien wissenschaftlicher Forschung mit je einem Satz. (7 Punkte)",
        hint: "Induktion: Einzelfall → Theorie · Deduktion: Theorie → Einzelfall.",
        steps: [
          "Induktion: aus beobachteten Einzelfällen wird eine allgemeine Hypothese/Theorie abgeleitet (1,5 P.)",
          "Deduktion: aus einer allgemeinen Theorie werden logisch Aussagen/Hypothesen für den Einzelfall abgeleitet (1,5 P.)",
          "Objektivität: Ergebnis unabhängig von der Person, die erhebt/auswertet (1,5 P.)",
          "Reliabilität: bei Wiederholung gleiches Ergebnis (1,5 P.)",
          "Validität: es wird wirklich gemessen, was gemessen werden soll (1 P.)"
        ],
        a: "Induktion ↑ (Einzelfall → Theorie), Deduktion ↓ (Theorie → Einzelfall); Objektivität, Reliabilität, Validität."
      },
      {
        id: "k12",
        q: "Ein Onlineshop testet, ob eine kostenlose Express-Option die Abschlussquote erhöht. Welche Marktforschungsmethode schlagen Sie vor? Begründen Sie und nennen Sie ein Problem der Alternative „Online-Befragung“. (5 Punkte)",
        hint: "Befragung = was Menschen sagen · Beobachtung = was sie tun · Experiment = Ursache-Wirkung.",
        steps: [
          "Methode: Experiment / A/B-Test (1 P.)",
          "Zufällige Zuteilung der Besucher auf Variante A (ohne) und B (mit Express) (1 P.)",
          "Unterschied in der Abschlussquote ist kausal auf die Express-Option zurückzuführen (1 P.)",
          "Problem Online-Befragung: Selbstselektion – nur Personen mit Meinung antworten; Menschen sagen nicht immer, wie sie handeln (2 P.)"
        ],
        a: "A/B-Test (Experiment) wegen Kausalität; Befragung leidet unter Selbstselektion und Selbstauskunft."
      }
    ],
    quiz: []
  });

  // ==================================================================
  // Logistik
  // ==================================================================
  add("logistik", {
    id: "klausur",
    name: "📝 Klausuraufgaben Logistik",
    description: "Prüfungsnahe Aufgaben: Zielkonflikte, Gestaltungsprinzipien, Fälle und Begründungen.",
    cards: [
      {
        id: "k01", important: true,
        q: "Erläutern Sie den Zielkonflikt zwischen Logistikservice und Logistikkosten an einem Beispiel aus dem E-Commerce. (6 Punkte)",
        hint: "Service: Lieferzeit, -qualität, -flexibilität, -bereitschaft · Kosten: Bestände, Handling, Transport, Systeme.",
        steps: [
          "Logistikservice umfasst Lieferzeit, Lieferqualität, Lieferflexibilität und Lieferbereitschaft (1,5 P.)",
          "Logistikkosten umfassen Bestände, Handling, Transport und Systeme (1,5 P.)",
          "Beispiel: Same-Day-Delivery erhöht den Service, erfordert aber dezentrale Lager (mehr Bestände) und kleine, teure Einzeltransporte (2 P.)",
          "Ziel: marktgerechte Leistung bei minimalem Aufwand – Service nur so hoch, wie der Kunde ihn honoriert (1 P.)"
        ],
        a: "Mehr Service (z. B. Same-Day) → höhere Bestands- und Transportkosten; Balance aus marktgerechter Leistung und minimalem Aufwand."
      },
      {
        id: "k02", important: true,
        q: "Erklären Sie den Bullwhip-Effekt, nennen Sie drei Ursachen und zeigen Sie, wie enge Kopplung ihn reduziert. (7 Punkte)",
        hint: "Aufschaukeln der Bestellschwankungen entlang der Kette; Ursachen: Prognosen, Informationsasymmetrie, Bündelbestellungen, Preisschwankungen.",
        steps: [
          "Definition: kleine Schwankungen der Endkundennachfrage schaukeln sich stromaufwärts zu großen Bestell- und Bestandsschwankungen auf (2 P.)",
          "Ursachen: falsche Prognosen · Informationsasymmetrien · Bündelbestellungen · Preisschwankungen/Aktionen (3 P.)",
          "Enge Kopplung: echte Nachfragedaten werden früh an alle vorgelagerten Stufen weitergegeben → weniger Sicherheitszuschläge, kleinere Puffer (2 P.)"
        ],
        a: "Aufschaukeln der Bestellungen; Ursachen Prognose, Info-Asymmetrie, Bündelbestellungen; Lösung: Nachfragedaten teilen."
      },
      {
        id: "k03", important: true,
        q: "Ein Sportartikelhersteller produziert Trikots in 20 Vereinsvarianten. Die Nachfrage ist schwer vorherzusagen. Erläutern Sie, wie Postponement helfen kann, und nennen Sie Vor- und Nachteile. (6 Punkte)",
        hint: "Variantenbestimmungspunkt (Order Penetration Point) nach hinten verschieben.",
        steps: [
          "Idee: Neutrale Trikots produzieren und lagern, Bedrucken mit Vereinslogo erst nach Kundenauftrag (2 P.)",
          "Der Variantenbestimmungspunkt wird nach hinten verschoben → mehr reaktive, weniger spekulative Prozesse (1 P.)",
          "Vorteile: weniger Sicherheitsbestand je Variante, weniger Fehlmengen und Restposten (Obsoleszenz) (2 P.)",
          "Nachteil: längere Lieferzeit nach Auftrag, Investition in flexible Endfertigung (1 P.)"
        ],
        a: "Neutral produzieren, erst nach Auftrag individualisieren; weniger Bestand/Obsoleszenz, aber längere Lieferzeit."
      },
      {
        id: "k04",
        q: "Zwei Filialen haben eine zufällig schwankende Wochennachfrage mit einer Standardabweichung von je 40 Stück (unabhängig). Für den Sicherheitsbestand wird das 2-Fache der Standardabweichung gehalten.\na) Wie hoch ist der Sicherheitsbestand bei zwei getrennten Lagern? (2 P.)\nb) Wie hoch bei einem Zentrallager (σ gesamt = √(σ₁² + σ₂²))? (3 P.)\nc) Welches Gestaltungsprinzip zeigt das? (1 P.)",
        hint: "Statistischer Ausgleich: Die Streuung der Summe ist kleiner als die Summe der Streuungen.",
        steps: [
          "a) Je Filiale 2 × 40 = 80 Stück → zusammen 160 Stück",
          "b) σ gesamt = √(40² + 40²) = √3.200 ≈ 56,6 Stück",
          "b) Sicherheitsbestand Zentrallager = 2 × 56,6 ≈ 113 Stück (≈ 29 % weniger)",
          "c) Statistische Ausgleichseffekte (Zentralisierung / Pooling)"
        ],
        a: "Getrennt 160 Stück, zentral ≈ 113 Stück → statistischer Ausgleich spart ≈ 29 % Sicherheitsbestand."
      },
      {
        id: "k05", important: true,
        q: "Nennen Sie die vier Formen der Transportbündelung und ordnen Sie folgende Beispiele zu: (8 Punkte)\na) Gebietsspediteur sammelt für ein Montagewerk\nb) Round-the-World-Line in der Containerschifffahrt\nc) Begegnungsverkehr zweier Speditionen\nd) Hub einer Sammelgutkooperation",
        hint: "Sendungsverdichtung · Tourenverdichtung · Knotenpunktsysteme · Ringsysteme.",
        steps: [
          "a) Sendungsverdichtung – Sendungen einer Region werden gebündelt und gemeinsam im Hauptlauf befördert (2 P.)",
          "b) Ringsystem – an jeder Station Ladung für folgende Stationen, minimiert Unpaarigkeit (2 P.)",
          "c) Tourenverdichtung – mehr Quell-/Zielpunkte je Raum, kürzere Wege pro Stopp (2 P.)",
          "d) Knotenpunktsystem (Hub-and-Spoke) – Relationen über einen gemeinsamen Knoten, bessere Auslastung (2 P.)"
        ],
        a: "a) Sendungsverdichtung · b) Ring · c) Tourenverdichtung · d) Knotenpunkt (Hub-and-Spoke)."
      },
      {
        id: "k06",
        q: "Ordnen Sie die Entscheidungen der strategischen, taktischen oder operativen Planungsebene zu: (je 1 Punkt)\na) Standort eines neuen Auslieferungslagers\nb) Tourenplanung für morgen\nc) Festlegung des Serviceniveaus (z. B. 98 % Lieferbereitschaft)\nd) Auswahl eines Systemlieferanten für 5 Jahre\ne) Auslösen eines Transportauftrags\nf) Wahl der Transportmittel für eine Relation",
        hint: "Strategisch = langfristige Struktur · taktisch = vorhandene Strukturen nutzen · operativ = konkrete Aufträge.",
        steps: [
          "a) strategisch",
          "b) operativ",
          "c) taktisch",
          "d) strategisch",
          "e) operativ",
          "f) taktisch"
        ],
        a: "Strategisch: a, d · taktisch: c, f · operativ: b, e."
      },
      {
        id: "k07", important: true,
        q: "„Bestände sind böse.“ Nehmen Sie kritisch Stellung und beziehen Sie die Position von Prof. Bretzke ein. (7 Punkte)",
        hint: "Operator „Stellung nehmen“: Pro und Contra + eigenes begründetes Urteil.",
        steps: [
          "Contra Bestände (Flussdenken): binden Kapital, verlängern Durchlaufzeiten, verdecken Probleme wie Ausschuss und störanfällige Prozesse (2 P.)",
          "Pro Bestände: ermöglichen prompte Lieferung, überbrücken Störungen, erlauben wirtschaftliche Losgrößen und konstante Auslastung (2 P.)",
          "Bretzke: Bestände sind „nicht böse“, sondern Working Capital; Sicherheitsbestände schützen vor Versorgungsrisiken; steigende Transportpreise machen Bündelung und Bestände attraktiver (2 P.)",
          "Eigenes Fazit: Bestände gezielt dort halten, wo sie Risiken absichern – nicht pauschal minimieren (1 P.)"
        ],
        a: "Nicht pauschal böse: Kosten & verdeckte Probleme vs. Lieferfähigkeit & Resilienz – gezielt steuern."
      },
      {
        id: "k08",
        q: "Grenzen Sie Logistik und Supply Chain Management anhand von vier Kriterien voneinander ab. (8 Punkte)",
        hint: "Kriterien: Ziel/Fokus, Betrachtungsbereich, typische Inhalte, Managementebene, Kooperationsumfang.",
        steps: [
          "Fokus: Logistik = effiziente Flüsse und Bestände · SCM = End-to-End-Koordination der gesamten Kette (2 P.)",
          "Betrachtungsbereich: Logistik meist aus Sicht des eigenen Unternehmens · SCM unternehmensübergreifend (2 P.)",
          "Inhalte: Logistik = TUL, Bestände, Aufträge · SCM = zusätzlich Beschaffung, Produktion, Partnerintegration (2 P.)",
          "Ebene/Kooperation: Logistik operativ bis strategisch mit direkten Partnern · SCM stärker strategisch über mehrere Stufen (2 P.)"
        ],
        a: "Logistik steuert Flüsse im Unternehmen; SCM integriert die ganze Kette unternehmensübergreifend und strategisch."
      },
      {
        id: "k09",
        q: "Nennen Sie die drei Arten von Informationsflüssen in einem Logistiksystem und geben Sie für einen Lkw-Transport je ein konkretes Beispiel. (6 Punkte)",
        hint: "Vorauseilend (t0), begleitend (t1), nachfolgend (t2).",
        steps: [
          "Vorauseilend (vor dem Material): Lieferavis / Bestellung an den Empfänger (2 P.)",
          "Begleitend (mit dem Material): Lieferschein, Frachtbrief, CMR (2 P.)",
          "Nachfolgend (nach dem Material): Abliefernachweis (POD), Rechnung (2 P.)"
        ],
        a: "Vorauseilend (Avis), begleitend (Lieferschein/Frachtbrief), nachfolgend (POD, Rechnung)."
      },
      {
        id: "k10", important: true,
        q: "Begründen Sie mit vier Argumenten, warum Deutschland ein bedeutender Logistikstandort ist. (6 Punkte)",
        hint: "Folie 18: Kaufkraft, Lage, globale Lieferketten, Effizienz.",
        steps: [
          "Hohe Kaufkraft: ca. 85 Mio. Einwohner, bevölkerungsreichstes Land Europas → hohe Nachfrage (1,5 P.)",
          "Zentrale Lage in Europa: Transitland Nord-Süd und West-Ost, wichtige Seehäfen (1,5 P.)",
          "Globale Lieferketten: Exportnation, starke internationale Verflechtung (1,5 P.)",
          "Effizienz & Zuverlässigkeit: Top 5 im Logistics Performance Index, gute Infrastruktur (1,5 P.)"
        ],
        a: "Kaufkraft, zentrale Lage, globale Lieferketten, Effizienz/Infrastruktur."
      },
      {
        id: "k11",
        q: "Wenden Sie die 7 R auf die Versorgung eines Krankenhauses mit Impfstoff an. (7 Punkte)",
        hint: "Für jedes R ein konkreter Satz zum Fall.",
        steps: [
          "Richtiges Produkt: der bestellte Impfstoff in korrekter Sorte",
          "Richtige Menge: genau die geplanten Dosen, keine Fehlmengen",
          "Richtige Zeit: vor dem Impftermin, ohne zu frühe Lagerung",
          "Richtiger Ort: Krankenhausapotheke statt Hauptpforte",
          "Richtige Kosten: wirtschaftlich, ohne Luxus-Express wenn nicht nötig",
          "Richtige Informationen: Avis, Chargennummer, Temperaturprotokoll",
          "Richtige Qualität: Kühlkette lückenlos eingehalten"
        ],
        a: "Je ein R auf den Fall bezogen – besonders Qualität (Kühlkette) und Informationen (Temperaturprotokoll)."
      },
      {
        id: "k12",
        q: "Erklären Sie anhand einer PESTEL-Analyse je einen Einflussfaktor auf eine Spedition und dessen Auswirkung. (6 Punkte)",
        hint: "Political, Economical, Social, Technological, Ecological, Legal – je 1 Punkt.",
        steps: [
          "Political: Infrastrukturausbau/Förderprogramme → bessere Anbindung, Förderung alternativer Antriebe",
          "Economical: E-Commerce-Wachstum → mehr Kleinsendungen und Retouren",
          "Social: Fahrermangel, demografischer Wandel → höhere Löhne, Kapazitätsengpässe",
          "Technological: Digitalisierung, autonomes Fahren → Effizienz, neue Investitionen",
          "Ecological: CO2-Ziele, CO2-Maut → Druck zu grüner Logistik",
          "Legal: Lenk- und Ruhezeiten, Mobilitätspaket, Mindestlohn → Planungsrestriktionen"
        ],
        a: "Je ein passender Faktor + Auswirkung für P, E, S, T, E, L."
      }
    ],
    quiz: []
  });

  // ==================================================================
  // Mathe – gemischte Klausuraufgaben
  // ==================================================================
  add("mathe", {
    id: "klausur",
    name: "📝 Klausur-Mix Finanzmathematik",
    description: "Gemischte, mehrteilige Aufgaben wie in der Klausur – mit Punkten.",
    cards: [
      {
        id: "km01", important: true,
        q: R`Ein Spediteur kauft einen Lkw für $A = 140.000$ €. Er wird degressiv mit $p = 18\,\%$ abgeschrieben.
a) Restwert nach 5 Jahren? (2 P.)
b) Nach wie vielen Jahren liegt der Restwert erstmals unter 20.000 €? (3 P.)
c) Welcher Abschreibungssatz wäre nötig, damit der Restwert nach 5 Jahren genau 30.000 € beträgt? (3 P.)`,
        hint: R`$R_n = A \cdot q^n$ mit $q = 1 - \frac{p}{100}$; $n$ per $\ln$, $p$ per $n$-ter Wurzel.`,
        steps: [
          R`a) $q = 0{,}82$ → $R_5 = 140.000 \cdot 0{,}82^5 = 140.000 \cdot 0{,}37074 \approx 51.903{,}58$ €`,
          R`b) $20.000 = 140.000 \cdot 0{,}82^n$ → $n = \frac{\ln(1/7)}{\ln 0{,}82} = \frac{-1{,}9459}{-0{,}19845} \approx 9{,}81$ → im 10. Jahr`,
          R`c) $30.000 = 140.000 \cdot q^5$ → $q = \sqrt[5]{0{,}214286} \approx 0{,}73485$`,
          R`c) $p = (1 - 0{,}73485) \cdot 100 \approx 26{,}52\,\%$`
        ],
        a: R`a) ≈ 51.903,58 € · b) $n \approx 9{,}81$ → 10. Jahr · c) $p \approx 26{,}52\,\%$`
      },
      {
        id: "km02", important: true,
        q: R`Für die Ersatzinvestition legt der Spediteur heute $25.000$ € an. Bank A bietet $3\,\%$ p. a. jährlich, Bank B $2{,}95\,\%$ p. a. bei monatlicher Verzinsung.
a) Welche Bank ist besser? Begründen Sie mit dem effektiven Jahreszins. (4 P.)
b) Welches Endkapital ergibt sich bei der besseren Bank nach 6 Jahren? (2 P.)`,
        hint: R`$p^* = \left[\left(1+\frac{p}{100m}\right)^m - 1\right] \cdot 100$`,
        steps: [
          R`a) Bank A: $p^* = 3\,\%$ (jährlich = effektiv)`,
          R`a) Bank B: $p^* = \left[\left(1+\frac{2{,}95}{1200}\right)^{12} - 1\right] \cdot 100 \approx 2{,}99\,\%$`,
          R`a) $3\,\% > 2{,}99\,\%$ → Bank A ist (knapp) besser`,
          R`b) $K_6 = 25.000 \cdot 1{,}03^6 = 25.000 \cdot 1{,}19405 \approx 29.851{,}31$ €`
        ],
        a: R`Bank A (3 % vs. 2,99 % effektiv) · $K_6 \approx 29.851{,}31$ €`
      },
      {
        id: "km03",
        q: R`Ein Kapital von $40.000$ € wird zunächst 3 Jahre mit $2\,\%$ (jährlich), danach 4 Jahre mit $3\,\%$ bei vierteljährlicher Verzinsung angelegt.
a) Endkapital nach 7 Jahren? (3 P.)
b) Welcher konstante effektive Jahreszins entspricht der gesamten Anlage? (3 P.)`,
        hint: R`Phasenfaktoren multiplizieren; für b) $p^* = \left(\sqrt[7]{K_7/K_0} - 1\right) \cdot 100$`,
        steps: [
          R`a) Phase 1: $1{,}02^3 = 1{,}061208$`,
          R`a) Phase 2: $\left(1+\frac{3}{400}\right)^{16} = 1{,}0075^{16} \approx 1{,}126992$`,
          R`a) $K_7 = 40.000 \cdot 1{,}061208 \cdot 1{,}126992 \approx 47.838{,}92$ €`,
          R`b) $p^* = \left(\sqrt[7]{47.838{,}92 / 40.000} - 1\right) \cdot 100 = \left(\sqrt[7]{1{,}195973} - 1\right) \cdot 100 \approx 2{,}59\,\%$`
        ],
        a: R`$K_7 \approx 47.838{,}92$ € · effektiv ≈ 2,59 % p. a.`
      },
      {
        id: "km04",
        q: R`Leiten Sie allgemein her: Nach wie vielen Jahren $n$ ist der Restwert bei degressiver Abschreibung mit $p_1$ genau halb so groß wie bei degressiver Abschreibung mit $p_2$ ($p_1 > p_2$, gleiches $A$)? Berechnen Sie $n$ für $p_1 = 25\,\%$, $p_2 = 15\,\%$. (6 P.)`,
        hint: R`Ansatz: $A \cdot q_1^n = \frac{1}{2} \cdot A \cdot q_2^n$`,
        steps: [
          R`$A$ kürzen: $q_1^n = 0{,}5 \cdot q_2^n$ $\quad | \ln$`,
          R`$n \ln q_1 = \ln 0{,}5 + n \ln q_2$`,
          R`$n (\ln q_1 - \ln q_2) = \ln 0{,}5$ → $n = \frac{\ln 0{,}5}{\ln q_1 - \ln q_2}$`,
          R`Zahlen: $q_1 = 0{,}75$, $q_2 = 0{,}85$ → $n = \frac{-0{,}6931}{-0{,}28768 + 0{,}16252} = \frac{-0{,}6931}{-0{,}12516} \approx 5{,}54$`
        ],
        a: R`$n = \dfrac{\ln 0{,}5}{\ln q_1 - \ln q_2} \approx 5{,}54$ Jahre`
      },
      {
        id: "km05",
        q: R`Ein Kapital von $8.000$ € wird stetig verzinst und ist nach 9 Jahren auf $12.000$ € gewachsen.
a) Berechnen Sie den stetigen Zinssatz $p$. (3 P.)
b) Welcher effektive Jahreszins entspricht dem? (2 P.)
c) Nach wie vielen Jahren hätte sich das Kapital verdoppelt? (2 P.)`,
        hint: R`$K_n = K_0 \cdot e^{\frac{np}{100}}$; $p^* = (e^{p/100} - 1) \cdot 100$`,
        steps: [
          R`a) $1{,}5 = e^{0{,}09p}$ → $\ln 1{,}5 = 0{,}09p$ → $p = \frac{0{,}405465}{0{,}09} \approx 4{,}505\,\%$`,
          R`b) $p^* = (e^{0{,}04505} - 1) \cdot 100 \approx 4{,}61\,\%$`,
          R`c) $2 = e^{0{,}04505 n}$ → $n = \frac{\ln 2}{0{,}04505} \approx 15{,}39$ Jahre`
        ],
        a: R`$p \approx 4{,}51\,\%$ · $p^* \approx 4{,}61\,\%$ · Verdopplung nach ≈ 15,39 Jahren`
      }
    ],
    quiz: []
  });
})();
