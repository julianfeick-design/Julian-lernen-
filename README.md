# 🧠 Julian lernt

Deine persönliche Lern-Website: erst ein kurzer Tages-Check-in, dann lernen in vier Schritten – **verstehen, wiedererkennen, erinnern, anwenden**. Claude ist als Chat immer dabei.

## Was die Website kann

1. **Tages-Check-in** (kommt jeden Tag als Erstes):
   Schlafqualität (in %), Stunden Schlaf, Training, Wasser, Stimmung, Energie, Stress und dein Tagesziel.
   → Du bekommst einen **Tages-Score (0–100)**, Feedback und eine Empfehlung, wie du heute lernen solltest.
2. **📖 Lernen (Lektionen)**: Jedes Thema als Lern-Seite mit Erklärungen, **Schaubildern**, Praxisbeispielen, „Merke“-Kästen und **Kurz-Checks**. Danach geht es direkt zum Üben weiter.
3. **Lernweg pro Thema**: 📖 Verstehen (Lektion) → 🧩 Wiedererkennen (Multiple Choice) → 🧠 Erinnern (Karteikarten) → 📝 Anwenden (Klausuraufgaben).
   Auf der Startseite zeigt **„Dein nächster Schritt“**, was als Nächstes dran ist – passend zur nächsten Prüfung.
4. **Karteikarten in Ordnern**: Ordner (Fach) → Stapel (Thema/Vorlesung) → Karten.
   Lernen nach dem **Leitner-System** (5 Fächer, Wiederholung nach 1/2/4/8/16 Tagen).
5. **Multiple-Choice-Training** mit eigenem Fortschritt (sicher = 2× hintereinander richtig) und einer Erklärung nach jeder Antwort.
6. **Punkte & Motivation**: ⭐ Punkte pro Karte und Lektion, Combo-Bonus, Level, 🔥 Streak, Erfolge, Konfetti.
7. **Essen-Tracker** (🍽️ oben rechts): jederzeit Essen mit Kalorien eintragen – auch mitten in einer Lernsession.
8. **Claude-Chat** unten rechts, auf jeder Seite. Claude kennt deinen Check-in und die Karte oder Lektion, die du gerade lernst.
9. **Karten erstellen**: Unter 🗂️ **Ordner → ➕ Neu** PDFs, Fotos oder Text hochladen → Claude baut Karten + Quizfragen. Oder selbst schreiben bzw. per Schnell-Import (`Frage ; Antwort`).
10. **Verlauf**: die letzten 14 Tage (Schlaf, Training, Wasser, Stimmung, gelernte Karten) und alle Erfolge.

## Aktuelle Inhalte

| Ordner | Prüfung | Lektionen | Inhalt |
|---|---|---|---|
| 📦 Grundlagen & Funktionen der Logistik | 7. Januar | 5 | 5 Stapel, 68 Karten, 20 Quizfragen |
| 💼 Grundlagen der BWL | 11. Januar | 4 | BWL + Marketing, 104 Karten (inkl. Rechenaufgaben), 28 Quizfragen |
| 🧮 Mathematik & Statistik | 13. Januar | 3 | **Aufgabenmodus**: 25 neue Übungsaufgaben (eigene Zahlen, gleiche Aufgabentypen wie in der Vorlesung) mit komplettem Lösungsweg |
| 🚚 VBL 1 – Verkehrsbetriebslehre | 15. Januar | 6 | 7 Stapel, 171 Karten, 41 Quizfragen |
| 🎓 Studienwissen BWL-STL | – | – | Fachbegriffe, Incoterms 2020, BWL-Basics, Verkehrsgeografie, Klausur-Technik (61 Karten) |

Zusätzlich hat jedes Prüfungsfach einen Stapel **📝 Klausuraufgaben** (DHBW-Stil mit Punkten und Musterlösung/Erwartungshorizont, `js/decks/klausur.js`).
Karten mit ⭐ sind laut Vorlesung/Prof-Hinweis prüfungsrelevant.

## Lektionen (Lern-Seiten)

Die Lektionen liegen in `js/lessons/<fach>.js`. Jede Lektion gehört zu einem Stapel (Schlüssel `ordner/stapel`) und besteht aus Abschnitten:

- **Erklären:** `intro`, `text`, `ex` (Praxisbeispiel), `merke`
- **Schaubilder:** `svg` (eigene Diagramme, hell & dunkel), `flow` (Ablauf), `table`, `matrix` (z. B. SWOT, BCG), `bal` (Gegenüberstellung), `tree`, `pyr` (Pyramide), `stairs` (Treppe), `cards`
- **Formeln:** `formula` (KaTeX)
- **Üben:** `check` – Kurz-Check mit 4 Antworten (die erste ist die richtige, sie werden beim Anzeigen gemischt) und Erklärung

Wer eine Lektion abschließt, bekommt +20 ⭐ und sieht direkt die nächsten Schritte (Multiple Choice, Karteikarten bzw. Aufgaben).

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
  - `index.html`, `css/style.css`
  - `js/app.js` (Logik), `js/claude.js` (Claude-Anbindung), `js/icons.js` (einfarbige Icons), `js/food.js` (Lebensmittel)
  - `js/decks/` (Karteikarten & Aufgaben), `js/mc/` (Multiple Choice + Erklärungen), `js/lessons/` (Lektionen)
