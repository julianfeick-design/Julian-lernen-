# 🧠 Julian lernt

Deine persönliche Lern-Website: erst ein kurzer Tages-Check-in, dann Karteikarten mit Punkten, Levels und Quiz. Claude ist als Chat immer dabei.

## Was die Website kann

1. **Tages-Check-in** (kommt jeden Tag als Erstes):
   Schlafqualität, Stunden Schlaf, Training (Art, Dauer, Intensität), Essen, Wasser, Stimmung, Energie, Stress und dein Tagesziel.
   → Du bekommst einen **Tages-Score (0–100)**, Feedback und eine Empfehlung, wie du heute lernen solltest.
2. **Karteikarten in Ordnern**: Ordner (Fach) → Stapel (Thema/Vorlesung) → Karten.
   Lernen nach dem **Leitner-System** (5 Fächer, Wiederholung nach 1/2/4/8/16 Tagen).
3. **Punkte & Motivation**: ⭐ Punkte pro Karte, Combo-Bonus, Level, 🔥 Streak, Erfolge, Konfetti.
4. **Abschlussquiz** nach jeder Session (Multiple Choice) und auf Wunsch **offene Fragen von Claude**.
5. **Claude-Chat** unten rechts, auf jeder Seite. Claude kennt deinen Check-in und die Karte, die du gerade lernst.
6. **Karten erstellen**: PDFs, Fotos oder Text hochladen → Claude baut Karten + Quizfragen. Oder selbst schreiben bzw. per Schnell-Import (`Frage ; Antwort`).
7. **Verlauf**: die letzten 14 Tage (Schlaf, Training, Wasser, Stimmung, gelernte Karten) und alle Erfolge.

## Lernzettel / Folien einbauen

**Variante A: an Claude Code schicken (empfohlen)**
Schick mir deine Lernzettel/Folien hier im Chat und sag mir, in welches Fach sie gehören. Ich schreibe die Karten und Quizfragen in `js/data.js`. Dann sind sie fest in der Website und auf jedem Gerät verfügbar.

**Variante B: direkt auf der Website**
Unter ➕ **Neu** Dateien hochladen. Dafür brauchst du einen API-Key (siehe unten). Diese Karten werden in deinem Browser gespeichert.

## Claude auf der Website nutzen

1. Auf <https://console.anthropic.com/settings/keys> einen API-Key erstellen (kostet pro Anfrage ein paar Cent).
2. Auf der Website unter ⚙️ **Mehr** eintragen → „Verbindung testen“.
3. Der Key wird nur lokal in deinem Browser gespeichert und nur an `api.anthropic.com` gesendet.

## Online stellen (GitHub Pages)

Repo auf GitHub → **Settings → Pages** → Source: „Deploy from a branch“ → Branch wählen → `/ (root)` → Save.
Nach ca. 1 Minute ist die Seite unter `https://<dein-name>.github.io/<repo>/` erreichbar. Leg sie dir aufs Handy als App-Icon („Zum Home-Bildschirm“).

Lokal reicht es, `index.html` im Browser zu öffnen.

## Wichtig

- Check-ins, Punkte und Fortschritt werden **im Browser** gespeichert (localStorage). Unter ⚙️ Mehr → **Backup** kannst du alles sichern oder auf ein anderes Gerät übertragen.
- Dateien: `index.html`, `css/style.css`, `js/app.js` (Logik), `js/claude.js` (Claude-Anbindung), `js/data.js` (deine Karteikarten).
