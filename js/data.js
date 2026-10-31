/*
 * Eingebaute Lerninhalte.
 *
 * Hier landen die Karteikarten, die Claude aus deinen Lernzetteln / Folien baut.
 * Struktur:  Ordner (Fach)  ->  Stapel (Thema / Vorlesung)  ->  Karten + Quizfragen
 *
 * Karte:      { q: "Frage", a: "Antwort", hint: "optionaler Tipp" }
 * Quizfrage:  { q: "Frage", options: ["A", "B", "C", "D"], correct: 0, explain: "Warum" }
 *
 * IDs müssen eindeutig und stabil bleiben, sonst geht dein Lernfortschritt verloren.
 */
window.BUILTIN_FOLDERS = [
  {
    id: "lernen-lernen",
    name: "Lernen lernen",
    emoji: "🧠",
    color: "#7c5cff",
    decks: [
      {
        id: "lernmethoden",
        name: "Lernmethoden (Beispiel)",
        description: "Ein Beispielstapel, damit du die Website direkt ausprobieren kannst.",
        cards: [
          { id: "lm1", q: "Was ist Active Recall?", a: "Aktives Abrufen von Wissen aus dem Gedächtnis (z. B. Karteikarten, Fragen beantworten), statt Stoff nur passiv zu lesen.", hint: "Abrufen statt Anschauen" },
          { id: "lm2", q: "Was bedeutet Spaced Repetition?", a: "Wiederholen in wachsenden Zeitabständen – kurz bevor man etwas vergisst. So wandert Wissen ins Langzeitgedächtnis." },
          { id: "lm3", q: "Wie funktioniert das Leitner-System?", a: "Karten liegen in Fächern (Boxen). Gewusst → ein Fach weiter (seltener wiederholen). Nicht gewusst → zurück in Fach 1 (bald wiederholen)." },
          { id: "lm4", q: "Was ist die Pomodoro-Technik?", a: "25 Minuten fokussiert arbeiten, 5 Minuten Pause. Nach 4 Runden eine längere Pause (15–30 Min.)." },
          { id: "lm5", q: "Was ist die Feynman-Technik?", a: "Ein Thema so einfach erklären, als würdest du es einem Kind erklären. Lücken in der Erklärung zeigen, was du noch nicht verstanden hast." },
          { id: "lm6", q: "Warum ist Schlaf wichtig fürs Lernen?", a: "Im Schlaf (v. a. Tiefschlaf) wird Gelerntes konsolidiert – also vom Kurzzeit- ins Langzeitgedächtnis übertragen." },
          { id: "lm7", q: "Was ist Interleaving?", a: "Verschiedene Themen/Aufgabentypen abwechselnd statt blockweise üben. Fühlt sich schwerer an, führt aber zu besserem Transfer." },
          { id: "lm8", q: "Wie viel sollte man ungefähr am Tag trinken?", a: "Als Faustregel ca. 1,5–2,5 Liter, bei Sport entsprechend mehr. Schon leichter Flüssigkeitsmangel senkt die Konzentration." }
        ],
        quiz: [
          { q: "Welche Methode nutzt wachsende Abstände zwischen Wiederholungen?", options: ["Interleaving", "Spaced Repetition", "Pomodoro", "Mind-Mapping"], correct: 1, explain: "Spaced Repetition = verteiltes Wiederholen in wachsenden Abständen." },
          { q: "Was passiert im Leitner-System mit einer Karte, die du NICHT wusstest?", options: ["Sie wird gelöscht", "Sie wandert ein Fach weiter", "Sie geht zurück in Fach 1", "Nichts"], correct: 2, explain: "Nicht gewusste Karten kommen zurück ins erste Fach und werden bald wiederholt." },
          { q: "Wie lang ist ein klassischer Pomodoro?", options: ["10 Minuten", "25 Minuten", "45 Minuten", "60 Minuten"], correct: 1, explain: "25 Minuten Fokus, dann 5 Minuten Pause." }
        ]
      }
    ]
  }
];
