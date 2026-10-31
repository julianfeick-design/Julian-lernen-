/*
 * Eingebaute Lerninhalte.
 *
 * Jede Prüfung hat eine eigene Datei in js/decks/ (wird in index.html geladen).
 * Struktur:  Ordner (Prüfung)  ->  Stapel (Thema / Vorlesung)  ->  Karten + Quizfragen
 *
 * Karte:      { id, q: "Frage", a: "Antwort", hint: "optional", important: true/false }
 * Quizfrage:  { q: "Frage", options: ["A", "B", "C", "D"], correct: 0, explain: "Warum" }
 * Mathe-Ordner (type: "math"): Karten sind Aufgaben
 *             { id, q: "Aufgabe", steps: ["Schritt 1", ...], a: "Ergebnis", hint }
 *             Formeln in $...$ (KaTeX).
 *
 * IDs müssen eindeutig und stabil bleiben, sonst geht dein Lernfortschritt verloren.
 */
window.BUILTIN_FOLDERS = [];
