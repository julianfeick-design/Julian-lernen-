# Gedächtnis für Claude – „Julian lernt“

Diese Datei liest Claude Code zu Beginn jeder Sitzung automatisch. Hier steht, was über Sitzungen hinweg wichtig bleibt. Neue Erkenntnisse (Prof-Hinweise, fehlende Folien, Vorlieben) bitte hier ergänzen.

## Projekt
- Lern-Web-App für Julian (DHBW Mannheim, BWL – Spedition, Transport und Logistik, Kurs WSTL 26, 1. Semester).
- Statische Single-Page-App ohne Build: `index.html`, `css/`, `js/`. Online über GitHub Pages vom Branch `claude/learning-platform-flashcards-0yqok6` – nur dorthin pushen.
- Genutzt als Home-Bildschirm-App auf **iPad (mit Apple Pencil)** und **iPhone**. Alles auf Deutsch, einfache Sprache.
- Zustand im Browser (`localStorage`, Schlüssel `julian-lernen-v1`); der API-Key bleibt nur dort und geht nur an `api.anthropic.com`.

## Dateien
- `js/app.js` – gesamte Logik (Hash-Router, Ansichten). `js/ink.js` – Handschrift. `js/claude.js` – Claude-Anbindung.
- `js/decks/*.js` – Karteikarten je Ordner (`important: true` = prüfungsrelevant), `js/decks/klausur.js` – Klausuraufgaben, `js/mc/*.js` – Multiple-Choice-Antworten (erste = richtig, alle gleich lang und plausibel).
- `js/lessons/*.js` – Lektionen (+ `priming.js`). Zu jeder Lektion entsteht automatisch ein Lernzettel.
- `js/lernfragen.js` – Lernfragen je Ordner: offizielle der Profs (`official: true`) + vermutete; `pts` = Kernpunkte der Musterantwort.
- `js/lernzettel.js` – handgeschriebene Lernzettel für Blöcke ohne Lektion (Stil: Kopfband, nummerierte Abschnitte, Tabellen, gelbe Merke-Kästen – wie Julians VBL-Lernzettel).
- `js/schaubilder.js` – Schaubild-Bausteine (`SB.matrix/tree/chain/bars/conflicts/bell/profile/hub/temple/gantt/plot`, Grundformen in `SB.u`) + fertige Schaubilder `SB.S` (Schröder), `SB.B` (Bahn), `SB.K` (KV), `SB.P` (KEP).
- `js/lz-plus.js` – Zusatz für die Lernzettel aus Lektionen: je Lektion `sum` (30-Sekunden-Zusammenfassung) und `after["Überschrift"]` = Schaubilder `{ fig, t, read }`.
- **Julians Wunsch (Nov. 2026):** Lernzettel mit **vielen Schaubildern + Erklärung** („So liest du das“), damit man die Sachen versteht – gilt für **alle** Lernzettel, auch neue. Jedes Schaubild bekommt einen Titel und eine Lese-Erklärung; Texte dürfen sich nicht mit Linien überschneiden (vorher per Screenshot prüfen, auch dunkel und 390 px).
- Bei **jeder** Änderung an js/css die Cache-Version `?v=…` in `index.html` überall erhöhen.

## Regeln für Inhalte (Julian wünscht sich ausdrücklich nur prüfungsrelevante Fragen)
1. **Lernfragen/Lernziele der Profs haben oberste Priorität** – der Prof sagt: wer sie sicher beantworten kann, ist perfekt vorbereitet. Jede offizielle Lernfrage bekommt eine Musterantwort mit Kernpunkten.
2. Danach Übungen auf den Folien und Julians Notizen („wichtig“, „Klausurfrage“, „Folie X nochmal angucken“).
3. Keine Fragen zu Zitaten, Autoren/Literaturlisten, Jahreszahlen, Verordnungsnummern, Farben, Organisatorischem oder Zahlen-Trivia – außer der Prof hebt es hervor.
4. Fragen konkret und prüfungsnah stellen (Operatoren nennen, erläutern, abgrenzen, berechnen, beurteilen).
5. Julians Handschrift-Notizen in den GoodNotes-PDFs genau lesen (Seiten als Bild rendern) – dort stehen Prof-Hinweise.

## Fächer, Prüfungen, Quellen
| Ordner | Prüfung | Teile / Dozenten | Stand |
|---|---|---|---|
| `logistik` Grundlagen & Funktionen der Logistik | 7. Jan. | Nehm (Grundlagen, 20 Lernfragen Folie 64) · **Schröder** (Teil 1 Beschaffungslogistik, 48 Lernziele) | Schröder Teil 2 Produktions- und Teil 3 Distributionslogistik fehlen noch |
| `bwl` Grundlagen der BWL | 11. Jan. | von Medem (BWL, 80 Min.) · Stenger (Marketing, 40 Min.) | nur BWL-Block 1–2 vorhanden, Blöcke 3–10 fehlen |
| `mathe` Mathematik & Statistik | 13. Jan. | Finanzmathematik | Statistik-Teil fehlt noch |
| `vbl1` VBL 1 | 15. Jan. | Nehm (Spedition, 21 Lernfragen Folie 51) · Hasselberg (Straße/Europa) · Bahnverkehr (Dräger, Hanisch, Hackelberg) · KV · KEP | **KV- und KEP-Foliensätze fehlen** – bisher nur Julians Notizen; Zuordnung Bahn/KV/KEP zu VBL 1 von Julian noch zu bestätigen |

Wichtige Prof-Hinweise aus Notizen: Logistik „Klausurfrage: Umsatz KEP-Bereich“, „Folie 21 nochmal angucken“ · Schröder: ABC-Analyse „verstehen, aber keine Klausurfrage“, Nutzwert-Rechenbeispiel „nicht klausurrelevant“, Folie 78 (z-Wert/Φ) „ganz wichtig“ · Bahn: Trassen, Lastgrenze, Privatgüterwagen „wichtig“, AVV/RIV „sehr wichtig“ · KEP: Quelle BIEK wichtig, Folie 21 Überschrift, Folie 41, Folie 63.

## Arbeitsweise
- Neue Folien: Text mit `pdftotext` holen, Handschrift-Seiten als Bild ansehen, dann einarbeiten: Lernfragen → Lernzettel (mit Schaubildern + „So liest du das“) → Karteikarten + MC → (Lektion + Einträge in `js/lz-plus.js`) → README.
- Vor dem Push mit Playwright prüfen (iPhone 390 px, iPad 1194 px, hell/dunkel, keine JS-Fehler, kein seitliches Scrollen).
- Commit-Nachrichten auf Deutsch; keine Modellnamen in Dateien.
