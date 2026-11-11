# 🧠 Julian lernt

Deine persönliche Lern-Website: erst ein kurzer Tages-Check-in, dann lernen in fünf Schritten – **primen, verstehen, erklären, abrufen, anwenden**. Claude ist als Chat immer dabei.

## Was die Website kann

1. **Tages-Check-in** (kommt jeden Tag als Erstes):
   Schlafqualität (in %), Stunden Schlaf, Training, Wasser, Stimmung, Energie, Stress und dein Tagesziel.
   → Du bekommst einen **Tages-Score (0–100)**, Feedback und eine Empfehlung, wie du heute lernen solltest.
2. **📖 Lernen (Lektionen)**: Jedes Thema als Lern-Seite mit Erklärungen, **Schaubildern**, Praxisbeispielen, „Merke“-Kästen und **Kurz-Checks**.
3. **Lernweg pro Thema – 5 Schritte**:
   1. 🧲 **Primen** (5–10 Min, vor dem Lesen): drei **konkrete Einstiegsfragen pro Lektion** aus dem Kopf beantworten (Schätzfragen, kleine Praxisfälle, „Was vermutest du?“ – raten erlaubt), dann nur die Überschriften scannen, neue Begriffe antippen und offene Fragen notieren. In der Lektion sind die neuen Begriffe markiert, und am Ende siehst du die **Auflösung** neben deiner eigenen Antwort (auch handschriftlich).
   2. 📖 **Verstehen**: die Lektion lesen.
   3. 🗣️ **Erklären (Feynman-Methode)** – Unterthema für Unterthema, auf Wunsch **mit dem Apple Pencil** (Schreibfeld mit Stift, Radierer, Farben, Rückgängig; Finger scrollt weiter). Beim Vergleichen hakst du die konkreten Punkte des Unterthemas ab, fehlende werden im Material markiert: Unterthema und Niveau wählen, in eigenen Worten erklären (gern per Diktierfunktion), dann **selbst prüfen** (Material zum Vergleich + Lücken-Check + Analogie) oder **Claude** prüfen lassen, der gezielt nachfragt. Danach wird automatisch eine **Wiederholung in wachsenden Abständen** geplant (1, 3, 7, 14, 30 Tage).
   4. 🧩 **Abrufen**: Multiple Choice und Karteikarten (bei Mathe: Aufgaben rechnen).
   5. 📝 **Anwenden**: Klausuraufgaben.

   Auf der Startseite zeigt **„Dein nächster Schritt“**, was dran ist: zuerst fällige Wiederholungen, dann Thema für Thema durch den Lernweg – passend zur nächsten Prüfung.
4. **Karteikarten in Ordnern**: Ordner (Fach) → Stapel (Thema/Vorlesung) → Karten.
   Lernen nach dem **Leitner-System** (5 Fächer, Wiederholung nach 1/2/4/8/16 Tagen).
5. **Multiple-Choice-Training** mit eigenem Fortschritt (sicher = 2× hintereinander richtig) und einer Erklärung nach jeder Antwort.
6. **🎯 Lernfragen** (Lernen → Lernfragen, auch im Ordner und auf der Startseite): alle **offiziellen Lernfragen und Lernziele der Profs** und dazu **vermutete Prüfungsfragen** für Teile ohne offizielle Liste. Du antwortest aus dem Kopf, mit dem Apple Pencil oder getippt. Danach siehst du die **Musterantwort als Kernpunkte** und hakst ab, was du hattest. Alternativ prüft **Claude** deine Antwort wie ein Prüfer. Was sitzt, kommt nach 3, 7, 14 und 30 Tagen wieder.
7. **📄 Lernzettel** (eigener Reiter): pro Block alles Wichtige auf einen Blick – Kopfband, nummerierte Abschnitte, Tabellen und Merke-Kästen. Zu jeder Lektion entsteht er automatisch, für Blöcke ohne Lektion ist er handgeschrieben (`js/lernzettel.js`). Mit „🖨️ Als PDF“ lässt er sich drucken oder in GoodNotes importieren.
8. **Prüfungsfokus**: ⭐ markiert alles, was laut Lernfragen der Profs, Übungen und Prof-Hinweisen klausurrelevant ist. Im Ordner startest du mit **⭐ Prüfungsfokus** nur diese Fragen (MC oder Karten). Auf der Startseite gibt es jeden Tag eine **⭐ Prüfungsfrage des Tages**. In jeder Karte kannst du selbst markieren:
   - **⭐ Kommt dran**, wenn der Prof sagt, das ist wichtig. Die Karte kommt dann bevorzugt dran.
   - **🚫 Kommt nicht dran**: Die Karte wird nicht mehr abgefragt und lässt sich im Ordner jederzeit wieder einblenden.
9. **Punkte & Motivation**: ⭐ Punkte pro Karte und Lektion, Combo-Bonus, Level, 🔥 Streak, Erfolge, Konfetti.
10. **Essen-Tracker** (🍽️ oben rechts): jederzeit Essen mit Kalorien eintragen – auch mitten in einer Lernsession.
11. **Claude-Chat** unten rechts, auf jeder Seite. Claude kennt deinen Check-in und die Karte oder Lektion, die du gerade lernst.
12. **Karten erstellen**: Unter 🗂️ **Ordner → ➕ Neu** PDFs, Fotos oder Text hochladen → Claude baut Karten + Quizfragen. Oder selbst schreiben bzw. per Schnell-Import (`Frage ; Antwort`).
13. **13 Designs** (⚙️ Mehr → Design): Mint, Aurora, Clean, Ozean, Sunset, Lavendel, Glass, Salbei, Espresso, Bubble, Brutal, Neon, Midnight – jeweils mit eigener Schrift, die meisten hell und dunkel. Wechsel sofort per Antippen (`css/designs.css`).
14. **Verlauf**: die letzten 14 Tage (Schlaf, Training, Wasser, Stimmung, gelernte Karten) und alle Erfolge.

## Aktuelle Inhalte

| Ordner | Prüfung | Lektionen | Inhalt |
|---|---|---|---|
| 📦 Grundlagen & Funktionen der Logistik | 7. Januar | 5 | Nehm (Grundlagen) + **Schröder (Beschaffungslogistik)**: 6 Stapel, 97 Karten, 72 Lernfragen |
| 💼 Grundlagen der BWL | 11. Januar | 4 | BWL + Marketing, 100 Karten (inkl. Rechenaufgaben), 28 Quizfragen |
| 🧮 Mathematik & Statistik | 13. Januar | 3 | **Aufgabenmodus**: 25 neue Übungsaufgaben (eigene Zahlen, gleiche Aufgabentypen wie in der Vorlesung) mit komplettem Lösungsweg |
| 🚚 VBL 1 – Verkehrsbetriebslehre | 15. Januar | 6 | Nehm, Hasselberg, **Bahnverkehr, Kombinierter Verkehr, KEP** (KV/KEP vorläufig aus Notizen): 10 Stapel, 205 Karten, 57 Lernfragen |
| 🎓 Bonus: Praxiswissen | – | – | **kein Klausurstoff:** Fachbegriffe, Incoterms 2020, BWL-Basics (z. B. Rechtsformen), Klausur-Technik (49 Karten) |

Zusätzlich hat jedes Prüfungsfach einen Stapel **📝 Klausuraufgaben** (DHBW-Stil mit Punkten und Musterlösung/Erwartungshorizont, `js/decks/klausur.js`).
Karten mit ⭐ sind laut Vorlesung/Prof-Hinweis prüfungsrelevant.

## Prüfungsrelevanz – so wird ausgewählt

Woran sich die Fragen orientieren, absteigend nach Gewicht:

1. **Lernfragen der Profs** (Folien: Logistik Nehm 20 Lernfragen, Logistik Schröder 48 Lernziele, VBL 1 Einführung in die Spedition 21 Lernfragen). Jede hat im Bereich 🎯 Lernfragen eine Musterantwort mit Kernpunkten und ist durch ⭐-Karten abgedeckt.
2. **Übungen und Hinweise aus der Vorlesung**: Übungsaufgaben auf den Folien (z. B. ökonomisches Prinzip, Produktionsfaktoren, Flittiflotti) und Notizen wie „Klausurfrage“ oder „Folie 21 nochmal angucken“.
3. **Kerninhalte der Folien**: Definitionen, Abgrenzungen, Modelle, Abläufe, Vor- und Nachteile, Rechenwege und Fälle, abgefragt mit den Klausur-Operatoren (nennen, erläutern, abgrenzen, berechnen, beurteilen).

**Nicht abgefragt** werden Zitate und wer etwas gesagt hat, Autoren- und Literaturlisten, Jahreszahlen, Verordnungsnummern ohne Inhalt, Farben von Nachweisen, Anekdoten, Organisatorisches und Zahlen-Trivia. Solches Hintergrundwissen steht höchstens noch zum Verständnis in den Lektionen.
Auch Karten, die Claude auf der Website aus hochgeladenen Folien erstellt, folgen diesen Regeln.

## Lektionen (Lern-Seiten)

Die Lektionen liegen in `js/lessons/<fach>.js`. Jede Lektion gehört zu einem Stapel (Schlüssel `ordner/stapel`) und besteht aus Abschnitten:

- **Erklären:** `intro`, `text`, `ex` (Praxisbeispiel), `merke`
- **Schaubilder:** `svg` (eigene Diagramme, hell & dunkel), `flow` (Ablauf), `table`, `matrix` (z. B. SWOT, BCG), `bal` (Gegenüberstellung), `tree`, `pyr` (Pyramide), `stairs` (Treppe), `cards`
- **Formeln:** `formula` (KaTeX)
- **Üben:** `check` – Kurz-Check mit 4 Antworten (die erste ist die richtige, sie werden beim Anzeigen gemischt) und Erklärung

Punkte: Priming +10 ⭐, Lektion +20 ⭐, erste Erklärung +15 ⭐ (Wiederholungen +5 ⭐).

Die Priming-Fragen mit Auflösung stehen in `js/lessons/priming.js` (Schlüssel `ordner/stapel`, je Frage `q` = Frage, `ph` = Denkanstoß, `a` = Auflösung).

Zu jeder Lektion gibt es außerdem eine **Priming-Seite** (`#/primen/ordner/stapel`) und eine **Erklär-Seite** (`#/erklaeren/ordner/stapel`). Die Begriffe für den Überblick werden automatisch aus den Überschriften und Schaubildern der Lektion gebaut.
Mit Claude laufen Priming und Feynman als eigener **Modus im Chat** (oben im Chat zu sehen, mit ✕ beendbar) – Claude stellt dann Fragen, statt den Stoff vorwegzunehmen.

Die Methoden Priming und Feynman sind angelehnt an die öffentlichen „Lernskills“ von Studyacademy (github.com/study-academy/lernskills) und hier in eigenen Worten umgesetzt.

## Mathe-Aufgabenmodus

Mathe-Ordner (`type: "math"` in `js/decks/mathe.js`) zeigen statt Karteikarten Aufgaben: selbst rechnen → „Lösungsweg zeigen“ → Schritt-für-Schritt-Lösung mit Formeln (KaTeX, lokal in `vendor/katex`) → bewerten (Falsch / Teilweise / Richtig).

## Lernzettel / Folien einbauen

**Variante A: an Claude Code schicken (empfohlen)**
Schick mir deine Lernzettel/Folien hier im Chat und sag mir, in welches Fach sie gehören. Ich schreibe Lektionen, Karten, Multiple-Choice-Fragen und Klausuraufgaben fest in die Website – dann sind sie auf jedem Gerät verfügbar.

**Variante B: direkt auf der Website**
Unter 🗂️ **Ordner → ➕ Neu** Dateien hochladen. Dafür brauchst du einen API-Key (siehe unten). Diese Karten werden in deinem Browser gespeichert.

## Claude auf der Website nutzen

1. Auf <https://console.anthropic.com/settings/keys> einen API-Key erstellen (kostet pro Anfrage ein paar Cent).
2. Auf der Website unter ⚙️ **Mehr** eintragen → „Verbindung testen“.
3. Der Key wird nur lokal in deinem Browser gespeichert und nur an `api.anthropic.com` gesendet.

## Online stellen (GitHub Pages)

Repo auf GitHub → **Settings → Pages** → Source: „Deploy from a branch“ → Branch wählen → `/ (root)` → Save.
Nach ca. 1 Minute ist die Seite unter `https://<dein-name>.github.io/<repo>/` erreichbar. Leg sie dir aufs Handy als App-Icon („Zum Home-Bildschirm“).

Lokal reicht es, `index.html` im Browser zu öffnen.

## Wichtig

- Check-ins, Punkte, Fortschritt und gelesene Lektionen werden **im Browser** gespeichert (localStorage). Unter ⚙️ Mehr → **Backup** kannst du alles sichern oder auf ein anderes Gerät übertragen.
- Dateien:
  - `index.html`, `css/style.css`, `css/designs.css` (Designs)
  - `js/app.js` (Logik), `js/claude.js` (Claude-Anbindung), `js/icons.js` (einfarbige Icons), `js/food.js` (Lebensmittel)
  - `js/decks/` (Karteikarten & Aufgaben), `js/mc/` (Multiple Choice + Erklärungen), `js/lessons/` (Lektionen)
  - `js/lernfragen.js` (Lernfragen mit Kernpunkten), `js/lernzettel.js` (handgeschriebene Lernzettel)
  - `CLAUDE.md`: Gedächtnis für Claude – Fächer, Prof-Hinweise, fehlende Folien und Regeln. Wird in jeder neuen Sitzung automatisch gelesen.
