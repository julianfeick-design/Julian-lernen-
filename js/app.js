/* =========================================================
 *  Julian lernt – Tages-Check-in, Karteikarten, Quiz, Claude
 * ========================================================= */
(function () {
  "use strict";

  // ---------- Hilfsfunktionen ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dayKey = (d = new Date()) => d.toLocaleDateString("sv-SE");
  const addDays = (key, n) => { const d = new Date(key + "T12:00:00"); d.setDate(d.getDate() + n); return dayKey(d); };
  const fmtDay = (key) => new Date(key + "T12:00:00").toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uid = () => Math.random().toString(36).slice(2, 9);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmtNum = (n, d = 1) => Number(n).toLocaleString("de-DE", { maximumFractionDigits: d });

  // ---------- Speicher ----------
  const STORE_KEY = "julian-lernen-v1";
  const DEFAULT_STATE = {
    version: 1,
    profile: { name: "Julian" },
    settings: { apiKey: "", model: "claude-opus-5-5", sessionSize: 20, waterGoal: 2.5, sleepGoal: 8, theme: "auto" },
    checkins: {},
    userFolders: [],
    progress: {},
    points: 0,
    log: {},
    achievements: {},
    chat: []
  };
  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return structuredClone(DEFAULT_STATE);
      const s = JSON.parse(raw);
      return { ...structuredClone(DEFAULT_STATE), ...s, settings: { ...DEFAULT_STATE.settings, ...(s.settings || {}) }, profile: { ...DEFAULT_STATE.profile, ...(s.profile || {}) } };
    } catch { return structuredClone(DEFAULT_STATE); }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
    catch { toast("⚠️ Speichern fehlgeschlagen (Browser-Speicher voll oder blockiert)"); }
  }
  function todayLog() {
    const k = dayKey();
    if (!state.log[k]) state.log[k] = { points: 0, reviewed: 0, good: 0, quizCorrect: 0, quizTotal: 0, minutes: 0 };
    return state.log[k];
  }

  // ---------- Theme ----------
  function applyTheme() {
    const t = state.settings.theme;
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }

  // ---------- Punkte, Level, Streak, Erfolge ----------
  const LEVEL_TITLES = ["Ersti", "Lernanfänger", "Fleißbiene", "Wissenssammler", "Bücherwurm", "Prüfungsprofi", "Streber-Legende", "Professor", "Genie", "Nobelpreis-Anwärter"];
  const levelMin = (n) => 50 * n * (n - 1);
  function levelInfo(points = state.points) {
    let n = 1; while (points >= levelMin(n + 1)) n++;
    const cur = levelMin(n), next = levelMin(n + 1);
    return { level: n, title: LEVEL_TITLES[Math.min(n - 1, LEVEL_TITLES.length - 1)], pct: Math.round((points - cur) / (next - cur) * 100), toNext: next - points };
  }
  function addPoints(n, evt) {
    if (!n) return;
    const before = levelInfo().level;
    state.points += n;
    todayLog().points += n;
    save();
    if (evt) floatPoints("+" + n, evt);
    const after = levelInfo();
    if (after.level > before) { toast(`🎉 Level ${after.level}: ${after.title}!`); confetti(); }
    renderTopStats();
  }
  function isActiveDay(k) { return !!state.checkins[k] || (state.log[k] && state.log[k].reviewed > 0); }
  function streak() {
    let k = dayKey(), n = 0;
    if (!isActiveDay(k)) k = addDays(k, -1);
    while (isActiveDay(k)) { n++; k = addDays(k, -1); }
    return n;
  }

  const ACHIEVEMENTS = [
    { id: "first_checkin", e: "🌅", n: "Erster Check-in", d: "Den ersten Tages-Check gemacht" },
    { id: "first_session", e: "📚", n: "Los geht's", d: "Erste Lernsession beendet" },
    { id: "streak_3", e: "🔥", n: "3 Tage am Stück", d: "3-Tage-Streak" },
    { id: "streak_7", e: "🚀", n: "Wochen-Held", d: "7-Tage-Streak" },
    { id: "streak_30", e: "👑", n: "Monats-Maschine", d: "30-Tage-Streak" },
    { id: "cards_100", e: "💯", n: "100 Karten", d: "100 Karten wiederholt" },
    { id: "cards_1000", e: "🏔️", n: "1000 Karten", d: "1000 Karten wiederholt" },
    { id: "mastered_10", e: "🎓", n: "Gemeistert", d: "10 Karten im höchsten Fach" },
    { id: "perfect_quiz", e: "🎯", n: "Volltreffer", d: "Ein Quiz ohne Fehler" },
    { id: "water_goal", e: "💧", n: "Hydriert", d: "Tagesziel Wasser erreicht" },
    { id: "sleep_goal", e: "😴", n: "Ausgeschlafen", d: "Schlafziel erreicht" },
    { id: "athlete", e: "🏋️", n: "Sportskanone", d: "Mind. 45 Min trainiert" },
    { id: "creator", e: "✍️", n: "Kartenbauer", d: "Eigenen Stapel erstellt" },
    { id: "level_5", e: "⭐", n: "Level 5", d: "Level 5 erreicht" }
  ];
  function unlock(id) {
    if (state.achievements[id]) return;
    const a = ACHIEVEMENTS.find(x => x.id === id); if (!a) return;
    state.achievements[id] = dayKey(); save();
    toast(`${a.e} Erfolg freigeschaltet: ${a.n} (+25)`);
    addPoints(25);
    confetti(40);
  }
  function checkAchievements() {
    const s = streak();
    if (s >= 3) unlock("streak_3");
    if (s >= 7) unlock("streak_7");
    if (s >= 30) unlock("streak_30");
    const total = Object.values(state.log).reduce((t, l) => t + (l.reviewed || 0), 0);
    if (total >= 100) unlock("cards_100");
    if (total >= 1000) unlock("cards_1000");
    if (Object.values(state.progress).filter(p => p.box >= 5).length >= 10) unlock("mastered_10");
    if (levelInfo().level >= 5) unlock("level_5");
    const c = state.checkins[dayKey()];
    if (c) {
      if (c.water >= state.settings.waterGoal) unlock("water_goal");
      if (c.sleepHours >= state.settings.sleepGoal) unlock("sleep_goal");
      if (c.trainingType !== "none" && c.trainingMin >= 45) unlock("athlete");
    }
  }

  // ---------- Inhalte (Ordner / Stapel / Karten) ----------
  function getFolders() {
    const map = new Map();
    for (const f of (window.BUILTIN_FOLDERS || [])) map.set(f.id, { ...f, builtin: true, decks: f.decks.map(d => ({ ...d, builtin: true })) });
    for (const f of state.userFolders) {
      if (map.has(f.id)) map.get(f.id).decks.push(...f.decks.map(d => ({ ...d, builtin: false })));
      else map.set(f.id, { ...f, builtin: false, decks: f.decks.map(d => ({ ...d, builtin: false })) });
    }
    return Array.from(map.values());
  }
  const cardKey = (fid, did, cid) => `${fid}/${did}/${cid}`;
  function cardsInScope(scope) {
    const [type, fid, did] = scope.split(":");
    const out = [];
    for (const f of getFolders()) {
      if ((type === "folder" || type === "deck") && f.id !== fid) continue;
      if ((type === "all" || type === "due") && f.type === "math") continue;
      if (type === "math" && f.type !== "math") continue;
      for (const d of f.decks) {
        if (type === "deck" && d.id !== did) continue;
        for (const c of d.cards || []) out.push({ ...c, key: cardKey(f.id, d.id, c.id), folder: f, deck: d });
      }
    }
    return out;
  }
  function quizInScope(scope) {
    const [type, fid, did] = scope.split(":");
    const out = [];
    for (const f of getFolders()) {
      if ((type === "folder" || type === "deck") && f.id !== fid) continue;
      if ((type === "all" || type === "due") && f.type === "math") continue;
      for (const d of f.decks) {
        if (type === "deck" && d.id !== did) continue;
        for (const q of d.quiz || []) out.push({ ...q, deck: d });
      }
    }
    return out;
  }
  function scopeName(scope) {
    const [type, fid, did] = scope.split(":");
    if (type === "due" || type === "all") return "Alle Ordner";
    if (type === "math") return "🧮 Mathe-Training";
    const f = getFolders().find(x => x.id === fid);
    if (!f) return "?";
    if (type === "folder") return `${f.emoji || "📁"} ${f.name}`;
    const d = f.decks.find(x => x.id === did);
    return `${f.emoji || "📁"} ${d ? d.name : "?"}`;
  }
  const isDue = (key) => { const p = state.progress[key]; return !p || p.due <= dayKey(); };
  const isNew = (key) => !state.progress[key];
  function stats(cards) {
    const due = cards.filter(c => isDue(c.key)).length;
    const fresh = cards.filter(c => isNew(c.key)).length;
    const mastered = cards.filter(c => (state.progress[c.key]?.box || 0) >= 4).length;
    const seen = cards.length - fresh;
    return { total: cards.length, due, fresh, mastered, seen, pct: cards.length ? Math.round(seen ? (cards.reduce((t, c) => t + (state.progress[c.key]?.box || 0), 0) / (cards.length * 5)) * 100 : 0) : 0 };
  }

  // Leitner-Intervalle in Tagen je Fach
  const INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 8, 5: 16 };

  // ---------- Check-in Auswertung ----------
  const TRAININGS = [
    ["none", "🛋️ Kein Training"], ["kraft", "🏋️ Kraft"], ["laufen", "🏃 Laufen"], ["rad", "🚴 Rad"],
    ["schwimmen", "🏊 Schwimmen"], ["team", "⚽ Teamsport"], ["yoga", "🧘 Yoga/Mobility"], ["anderes", "✨ Anderes"]
  ];
  // Schlafqualität als Prozent-Spanne (z. B. Schlaf-Score der Uhr/App)
  const SLEEP_RANGES = ["", "0–30 %", "30–50 %", "50–70 %", "70–80 %", "80–100 %"];
  const SLEEP_MID = [0, 15, 40, 60, 75, 90];
  const trainingLabel = (t) => (TRAININGS.find(x => x[0] === t) || ["", "–"])[1];

  function evaluate(c) {
    const fb = [];
    // Schlaf
    const h = c.sleepHours;
    let hs = h >= 7 && h <= 9 ? 100 : h >= 6 ? 70 : h >= 5 ? 45 : h > 9 ? 80 : 20;
    const sleep = hs * 0.6 + (SLEEP_MID[c.sleepQuality] || 50) * 0.4;
    if (h < 6) fb.push(["bad", `😴 Nur ${fmtNum(h)} h Schlaf – heute lieber kürzere Lerneinheiten mit mehr Pausen und heute Abend früher ins Bett.`]);
    else if (h < 7) fb.push(["warn", `😴 ${fmtNum(h)} h Schlaf ist etwas knapp. Ein Powernap (max. 20 Min) kann helfen.`]);
    else fb.push(["good", `😴 ${fmtNum(h)} h Schlaf – super Basis fürs Gedächtnis!`]);
    if (c.sleepQuality <= 2) fb.push(["warn", `🌙 Schlafqualität nur ${SLEEP_RANGES[c.sleepQuality]} – du bist evtl. weniger erholt, als die Stunden vermuten lassen. Plane mehr Pausen ein.`]);
    else if (c.sleepQuality >= 5) fb.push(["good", `🌙 Schlafqualität ${SLEEP_RANGES[c.sleepQuality]} – top erholt!`]);
    // Training
    const tr = c.trainingType === "none" ? 45 : c.trainingMin >= 30 ? 100 : 70;
    if (c.trainingType === "none") fb.push(["warn", "🏃 Noch kein Sport heute – schon 10 Min Spaziergang in der Lernpause pusht die Konzentration."]);
    else fb.push(["good", `🏃 ${c.trainingMin} Min ${trainingLabel(c.trainingType).replace(/^\S+\s/, "")} – stark!`]);
    // Essen
    const ate = [c.breakfast, c.lunch, c.dinner, c.snacks].some(x => x && x.trim());
    const food = ate ? ((c.foodHealth - 1) / 4) * 100 : 30;
    if (!ate) fb.push(["warn", "🍽️ Noch nichts gegessen? Ohne Energie lernt es sich schlecht – iss etwas Vernünftiges."]);
    else if (c.foodHealth <= 2) fb.push(["warn", "🍽️ Essen war eher ungesund – vielleicht Obst, Nüsse oder Gemüse als Lernsnack?"]);
    else fb.push(["good", "🍽️ Ernährung sieht gut aus!"]);
    // Wasser (erwartete Menge abhängig von der Uhrzeit)
    const hour = new Date(c.time || Date.now()).getHours();
    const expected = state.settings.waterGoal * clamp((hour - 7) / 14, 0.25, 1);
    const water = clamp(c.water / expected, 0, 1) * 100;
    if (c.water < expected * 0.6) fb.push(["bad", `💧 Erst ${fmtNum(c.water, 2)} L getrunken – stell dir jetzt ein Glas Wasser hin!`]);
    else if (c.water < expected) fb.push(["warn", `💧 ${fmtNum(c.water, 2)} L – fast im Plan, trink zwischendurch weiter.`]);
    else fb.push(["good", `💧 ${fmtNum(c.water, 2)} L – gut hydriert!`]);
    // Kopf
    const mind = (((c.mood - 1) / 4) + ((c.energy - 1) / 4) + ((5 - c.stress) / 4)) / 3 * 100;
    if (c.stress >= 4) fb.push(["warn", "🧘 Viel Stress gerade. Plan dir kleine, machbare Ziele – und hak sie ab. 3× tief durchatmen hilft wirklich."]);
    if (c.mood <= 2) fb.push(["warn", "💛 Nicht so dein Tag? Völlig okay. Schreib Claude, wenn du reden willst – oder fang mit 5 leichten Karten an."]);
    if (c.mood >= 4 && c.energy >= 4) fb.push(["good", "⚡ Gute Laune und Energie – perfekter Moment für schwierige Themen!"]);

    const score = Math.round(sleep * 0.3 + tr * 0.15 + food * 0.15 + water * 0.15 + mind * 0.25);
    let plan;
    if (score >= 75) plan = "🚀 Top-Voraussetzungen! Nimm dir neue, schwere Themen vor: 2–3 Pomodoros (je 25 Min + 5 Min Pause).";
    else if (score >= 50) plan = "👍 Solider Tag. Starte mit fälligen Wiederholungen, dann ein neuer Stapel. 1–2 Pomodoros.";
    else plan = "🌱 Heute eher ein ruhiger Tag. 15 Minuten Wiederholung reichen – Hauptsache dranbleiben. Und gut auf dich achten!";
    return { score, parts: { sleep: Math.round(sleep), training: tr, food: Math.round(food), water: Math.round(water), mind: Math.round(mind) }, feedback: fb, plan };
  }

  // ---------- UI-Helfer ----------
  function toast(msg, ms = 2600) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    $("#toasts").appendChild(t); setTimeout(() => t.remove(), ms);
  }
  function floatPoints(text, evt) {
    const el = document.createElement("div"); el.className = "float-points"; el.textContent = text;
    const x = evt?.clientX ?? window.innerWidth / 2, y = evt?.clientY ?? window.innerHeight / 2;
    el.style.left = (x - 20) + "px"; el.style.top = (y - 30) + "px";
    document.body.appendChild(el); setTimeout(() => el.remove(), 1000);
  }
  function confetti(n = 80) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#6d4dff", "#ff5c8a", "#ffb648", "#4cd192", "#3fb6ff"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("div"); c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % colors.length];
      c.style.animationDuration = (1.5 + Math.random() * 1.8) + "s";
      c.style.animationDelay = (Math.random() * .4) + "s";
      c.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
      document.body.appendChild(c); setTimeout(() => c.remove(), 4000);
    }
  }
  function renderTopStats() {
    const li = levelInfo();
    $("#topstats").innerHTML = `
      <span class="pill" title="Streak">🔥 ${streak()}</span>
      <span class="pill" title="Punkte">⭐ ${state.points}</span>
      <span class="pill" title="${esc(li.title)}">Lv ${li.level}</span>`;
  }
  function setTab(name) { $$("#tabbar a").forEach(a => a.classList.toggle("active", a.dataset.tab === name)); }
  const app = () => $("#app");
  function renderMath(el) {
    if (!el || typeof window.renderMathInElement !== "function") return;
    try {
      window.renderMathInElement(el, {
        delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
        throwOnError: false
      });
    } catch { /* KaTeX nicht verfügbar – Rohtext bleibt sichtbar */ }
  }
  window.addEventListener("load", () => renderMath(app()));

  // ---------- Router ----------
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [page, ...rest] = hash.split("/").map(decodeURIComponent);
    window.chatContext = null;
    const hasCheckin = !!state.checkins[dayKey()];
    const free = ["checkin", "einstellungen"];
    if (!hasCheckin && !free.includes(page)) { location.replace("#/checkin"); return; }
    $("#tabbar").classList.toggle("hidden", page === "checkin");
    window.scrollTo(0, 0);
    switch (page) {
      case "checkin": setTab(""); return viewCheckin(rest[0] === "edit");
      case "ordner": setTab("ordner"); return rest[0] ? viewFolder(rest[0]) : viewFolders();
      case "lernen": setTab("ordner"); return viewLearn(rest.join("/"));
      case "quiz": setTab("ordner"); return viewQuiz(rest.join("/"));
      case "neu": setTab("neu"); return viewNew(rest[0]);
      case "verlauf": setTab("verlauf"); return viewHistory();
      case "einstellungen": setTab("einstellungen"); return viewSettings();
      default: setTab("home"); return viewHome();
    }
  }

  // =========================================================
  //  Tages-Check-in
  // =========================================================
  function viewCheckin(editing) {
    const existing = state.checkins[dayKey()];
    const d = existing ? { ...existing } : {
      sleepQuality: 0, sleepHours: 7, trainingType: "", trainingMin: 45, trainingIntensity: "mittel",
      breakfast: "", lunch: "", dinner: "", snacks: "", foodHealth: 0, water: 0.5,
      mood: 0, energy: 0, stress: 0, goal: "", studyMin: 60
    };
    const scale = (field, items, variant = "") => `<div class="scale ${variant}" data-field="${field}">${items.map((it, i) =>
      `<button type="button" data-v="${i + 1}" class="${d[field] === i + 1 ? "active" : ""}"><span class="e">${it[0]}</span><span class="t">${it[1]}</span></button>`).join("")}</div>`;

    const steps = [
      { emoji: "🌙", title: "Wie gut hast du geschlafen?", valid: () => d.sleepQuality > 0,
        html: () => `<p class="center muted small" style="margin-top:-6px">Schlafqualität in Prozent – z. B. dein Schlaf-Score von Uhr oder App</p>` +
          scale("sleepQuality", [["0–30", "%"], ["30–50", "%"], ["50–70", "%"], ["70–80", "%"], ["80–100", "%"]], "pct") },
      { emoji: "⏰", title: "Wie viele Stunden hast du geschlafen?", valid: () => true,
        html: () => `<div class="big-number" id="sleepOut">${fmtNum(d.sleepHours)} h</div>
          <input type="range" min="0" max="12" step="0.5" value="${d.sleepHours}" data-range="sleepHours">
          <div class="row between muted small"><span>0 h</span><span>Ziel: ${state.settings.sleepGoal} h</span><span>12 h</span></div>` },
      { emoji: "🏋️", title: "Hast du heute schon trainiert?", valid: () => !!d.trainingType,
        html: () => `<div class="chips" data-chips="trainingType">${TRAININGS.map(t => `<button type="button" class="chip ${d.trainingType === t[0] ? "active" : ""}" data-v="${t[0]}">${t[1]}</button>`).join("")}</div>
          <div id="trainingMore" class="${d.trainingType && d.trainingType !== "none" ? "" : "hidden"}" style="margin-top:18px">
            <label class="field"><span>Wie lange? <b id="trainOut">${d.trainingMin} Min</b></span>
              <input type="range" min="5" max="180" step="5" value="${d.trainingMin}" data-range="trainingMin"></label>
            <span class="muted small">Intensität</span>
            <div class="chips" data-chips="trainingIntensity" style="margin-top:6px">${["leicht", "mittel", "hart"].map(x => `<button type="button" class="chip ${d.trainingIntensity === x ? "active" : ""}" data-v="${x}">${x}</button>`).join("")}</div>
          </div>` },
      { emoji: "🍽️", title: "Was hast du heute gegessen?", valid: () => d.foodHealth > 0,
        html: () => `
          <label class="field"><span>🥐 Frühstück</span><input type="text" data-text="breakfast" value="${esc(d.breakfast)}" placeholder="z. B. Haferflocken mit Banane"></label>
          <label class="field"><span>🍝 Mittag</span><input type="text" data-text="lunch" value="${esc(d.lunch)}" placeholder="noch nichts? einfach leer lassen"></label>
          <label class="field"><span>🍲 Abend</span><input type="text" data-text="dinner" value="${esc(d.dinner)}"></label>
          <label class="field"><span>🍫 Snacks</span><input type="text" data-text="snacks" value="${esc(d.snacks)}"></label>
          <p class="small muted" style="margin-top:8px">Wie gesund war's bisher?</p>
          ${scale("foodHealth", [["🍟", "Fastfood"], ["🍕", "Eher nicht"], ["🥪", "Okay"], ["🍛", "Gut"], ["🥗", "Top"]])}` },
      { emoji: "💧", title: "Wie viel hast du bisher getrunken?", valid: () => true,
        html: () => `<div class="big-number" id="waterOut">${fmtNum(d.water, 2)} L</div>
          <div class="water-glasses" id="glasses"></div>
          <input type="range" min="0" max="5" step="0.25" value="${d.water}" data-range="water">
          <div class="row" style="justify-content:center;margin-top:10px">
            <button type="button" class="btn secondary small" data-water="-0.25">− Glas</button>
            <button type="button" class="btn secondary small" data-water="0.25">+ Glas (250 ml)</button>
            <button type="button" class="btn secondary small" data-water="0.5">+ Flasche (500 ml)</button>
          </div>
          <p class="center muted small" style="margin-top:8px">Ohne Kaffee, Energy & Alkohol 😉 · Ziel: ${fmtNum(state.settings.waterGoal)} L</p>` },
      { emoji: "🧠", title: "Wie geht's dir gerade?", valid: () => d.mood > 0 && d.energy > 0 && d.stress > 0,
        html: () => `<p class="muted small">Stimmung</p>${scale("mood", [["😞", "Mies"], ["🙁", "Meh"], ["😐", "Neutral"], ["🙂", "Gut"], ["😄", "Super"]])}
          <p class="muted small" style="margin-top:14px">Energie</p>${scale("energy", [["🪫", "Leer"], ["😮‍💨", "Müde"], ["🙂", "Okay"], ["💪", "Fit"], ["⚡", "Voll da"]])}
          <p class="muted small" style="margin-top:14px">Stress</p>${scale("stress", [["😌", "Entspannt"], ["🙂", "Wenig"], ["😐", "Mittel"], ["😬", "Viel"], ["🤯", "Extrem"]])}` },
      { emoji: "🎯", title: "Was ist heute dein Ziel?", valid: () => true,
        html: () => `<label class="field"><span>Mein Lernziel für heute</span><textarea data-text="goal" placeholder="z. B. Kapitel 3 Biochemie durcharbeiten">${esc(d.goal)}</textarea></label>
          <p class="small muted">Wie lange willst du heute lernen?</p>
          <div class="chips" data-chips="studyMin">${[15, 30, 60, 90, 120, 180].map(m => `<button type="button" class="chip ${d.studyMin === m ? "active" : ""}" data-v="${m}">${m >= 60 ? (m / 60).toString().replace(".", ",") + " h" : m + " Min"}</button>`).join("")}</div>` }
    ];

    let step = 0;
    const greet = () => { const h = new Date().getHours(); return h < 11 ? "Guten Morgen" : h < 18 ? "Hallo" : "Guten Abend"; };

    function renderStep() {
      const s = steps[step];
      app().innerHTML = `<div class="wizard">
        ${step === 0 ? `<h1 class="center">${greet()}, ${esc(state.profile.name)}! 👋</h1><p class="center muted">Bevor's ans Lernen geht: kurzer Check, wie's dir heute geht.</p>` : ""}
        <div class="progress"><div style="width:${(step + 1) / (steps.length + 1) * 100}%"></div></div>
        <div class="card">
          <div class="q-emoji">${s.emoji}</div>
          <h2>${s.title}</h2>
          <div id="stepBody">${s.html()}</div>
          <div class="actions">
            ${step > 0 ? `<button class="btn secondary" id="back">← Zurück</button>` : (editing ? `<a class="btn secondary" href="#/">Abbrechen</a>` : "")}
            <button class="btn" id="next">${step === steps.length - 1 ? "Auswerten ✨" : "Weiter →"}</button>
          </div>
        </div>
        <p class="center muted small">Schritt ${step + 1} von ${steps.length}</p>
      </div>`;
      bind(s);
    }

    function updateGlasses() {
      const g = $("#glasses"); if (!g) return;
      const total = Math.max(Math.ceil(state.settings.waterGoal / 0.25), Math.ceil(d.water / 0.25));
      g.innerHTML = Array.from({ length: total }, (_, i) => `<span class="${i < Math.round(d.water / 0.25) ? "full" : ""}">🥛</span>`).join("");
    }

    function bind(s) {
      const next = $("#next");
      const refresh = () => { next.disabled = !s.valid(); };
      $$(".scale").forEach(sc => sc.addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        d[sc.dataset.field] = Number(b.dataset.v);
        $$("button", sc).forEach(x => x.classList.toggle("active", x === b)); refresh();
      }));
      $$("[data-chips]").forEach(ch => ch.addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        const f = ch.dataset.chips; const v = b.dataset.v;
        d[f] = f === "studyMin" ? Number(v) : v;
        $$("button", ch).forEach(x => x.classList.toggle("active", x === b));
        if (f === "trainingType") $("#trainingMore").classList.toggle("hidden", v === "none");
        refresh();
      }));
      $$("[data-range]").forEach(r => r.addEventListener("input", () => {
        const f = r.dataset.range; d[f] = Number(r.value);
        if (f === "sleepHours") $("#sleepOut").textContent = fmtNum(d.sleepHours) + " h";
        if (f === "trainingMin") $("#trainOut").textContent = d.trainingMin + " Min";
        if (f === "water") { $("#waterOut").textContent = fmtNum(d.water, 2) + " L"; updateGlasses(); }
      }));
      $$("[data-water]").forEach(b => b.addEventListener("click", () => {
        d.water = clamp(Math.round((d.water + Number(b.dataset.water)) * 100) / 100, 0, 8);
        $("#waterOut").textContent = fmtNum(d.water, 2) + " L";
        const r = $("[data-range=water]"); r.value = d.water; updateGlasses();
      }));
      $$("[data-text]").forEach(t => t.addEventListener("input", () => { d[t.dataset.text] = t.value; }));
      updateGlasses();
      $("#back")?.addEventListener("click", () => { step--; renderStep(); });
      next.addEventListener("click", () => {
        if (!s.valid()) return;
        if (step < steps.length - 1) { step++; renderStep(); } else finish();
      });
      refresh();
    }

    function finish() {
      const first = !existing;
      d.time = Date.now();
      state.checkins[dayKey()] = d;
      save();
      if (first) addPoints(20);
      if (Object.keys(state.checkins).length === 1) unlock("first_checkin");
      checkAchievements();
      renderSummary(first);
    }

    function renderSummary(first) {
      const ev = evaluate(d);
      const ring = ev.score >= 75 ? "var(--good)" : ev.score >= 50 ? "var(--warn)" : "var(--bad)";
      const verdict = ev.score >= 75 ? "Dir geht's richtig gut! 💪" : ev.score >= 50 ? "Ganz okay – da geht noch was." : "Heute ist nicht dein stärkster Tag – sei nett zu dir.";
      app().innerHTML = `<div class="wizard">
        <div class="card center">
          <h2>Dein Tages-Check</h2>
          <div class="score" style="--p:${ev.score};--ring:${ring}"><div>${ev.score}</div></div>
          <p><b>${verdict}</b></p>
          ${first ? `<p class="muted small">+20 Punkte fürs Einchecken ⭐</p>` : ""}
        </div>
        <div class="card"><h3>So sieht's aus</h3><ul class="feedback">${ev.feedback.map(f => `<li class="${f[0]}">${esc(f[1])}</li>`).join("")}</ul></div>
        <div class="card"><h3>Empfehlung fürs Lernen</h3><p>${esc(ev.plan)}</p>${d.goal ? `<p class="muted small">🎯 Dein Ziel: ${esc(d.goal)}</p>` : ""}</div>
        <a class="btn block" href="#/">Los geht's – zum Lernen 🚀</a>
      </div>`;
      if (first) confetti(50);
      renderTopStats();
    }

    renderStep();
  }

  // =========================================================
  //  Startseite
  // =========================================================
  function viewHome() {
    const c = state.checkins[dayKey()];
    const ev = evaluate(c);
    const li = levelInfo();
    const all = cardsInScope("all");
    const st = stats(all);
    const tl = todayLog();
    const folders = getFolders();
    const waterPct = clamp(c.water / state.settings.waterGoal * 100, 0, 100);

    app().innerHTML = `
      <div class="card hero">
        <div class="row between">
          <div><h1 style="margin:0">Hey ${esc(state.profile.name)}! ${ev.score >= 75 ? "💪" : ev.score >= 50 ? "🙂" : "🌱"}</h1>
          <p class="muted" style="margin:4px 0 0">${esc(ev.plan)}</p></div>
        </div>
        <div class="grid grid-4" style="margin-top:14px">
          <div class="stat"><div class="label">Level ${li.level}</div><div class="value">${esc(li.title)}</div><div class="sub">noch ${li.toNext} ⭐ bis Lv ${li.level + 1}</div></div>
          <div class="stat"><div class="label">Streak</div><div class="value">🔥 ${streak()}</div><div class="sub">Tage am Stück</div></div>
          <div class="stat"><div class="label">Heute</div><div class="value">⭐ ${tl.points}</div><div class="sub">${tl.reviewed} Karten gelernt</div></div>
          <div class="stat"><div class="label">Fällig</div><div class="value">📬 ${st.due}</div><div class="sub">${st.fresh} davon neu</div></div>
        </div>
        <div class="bar" style="background:rgba(255,255,255,.2);margin-top:14px"><div style="width:${li.pct}%;background:#fff"></div></div>
      </div>

      <div class="grid grid-2">
        <div class="card">
          <div class="row between"><h3 style="margin:0">Tages-Check</h3><a href="#/checkin/edit" class="small">bearbeiten</a></div>
          <div class="row" style="margin-top:10px;gap:16px;align-items:center">
            <div class="score" style="--p:${ev.score};--ring:${ev.score >= 75 ? "var(--good)" : ev.score >= 50 ? "var(--warn)" : "var(--bad)"};width:84px;height:84px;margin:0">
              <div style="width:66px;height:66px;font-size:1.3rem">${ev.score}</div></div>
            <div class="small" style="flex:1;min-width:150px">
              😴 ${fmtNum(c.sleepHours)} h Schlaf · ${SLEEP_RANGES[c.sleepQuality]}<br>
              🏋️ ${c.trainingType === "none" ? "Kein Training" : `${c.trainingMin} Min ${esc(trainingLabel(c.trainingType).replace(/^\S+\s/, ""))}`}<br>
              🍽️ ${["", "🍟", "🍕", "🥪", "🍛", "🥗"][c.foodHealth]} · 🧠 ${["", "😞", "🙁", "😐", "🙂", "😄"][c.mood]} · Stress ${c.stress}/5
            </div>
          </div>
        </div>
        <div class="card">
          <h3>💧 Wasser: ${fmtNum(c.water, 2)} / ${fmtNum(state.settings.waterGoal)} L</h3>
          <div class="bar" style="height:12px"><div style="width:${waterPct}%;background:#3fb6ff"></div></div>
          <div class="row" style="margin-top:12px">
            <button class="btn secondary small" data-water="0.25">+ Glas</button>
            <button class="btn secondary small" data-water="0.5">+ Flasche</button>
            <button class="btn-ghost small" data-water="-0.25">−</button>
          </div>
          ${c.goal ? `<p class="small muted" style="margin:10px 0 0">🎯 ${esc(c.goal)}</p>` : ""}
        </div>
      </div>

      <div class="card">
        <div class="row between"><h2 style="margin:0">Jetzt lernen</h2></div>
        <p class="muted small">Fällige Karten aus allen Ordnern – danach ein kurzes Abschlussquiz.</p>
        <div class="row">
          <a class="btn" href="#/lernen/due">📚 ${st.due ? `${Math.min(st.due, state.settings.sessionSize)} Karten lernen` : "Alles wiederholt – frei üben"}</a>
          <a class="btn secondary" href="#/quiz/all">🎯 Quiz über alles</a>
          <button class="btn secondary" id="askClaude">💬 Claude fragt mich ab</button>
        </div>
      </div>

      <div class="row between"><h2 style="margin:8px 0 12px">Deine Ordner</h2><a href="#/ordner" class="small">alle anzeigen</a></div>
      ${folders.filter(f => f.type !== "math").length ? `<div class="grid grid-3">${folders.filter(f => f.type !== "math").map(folderTile).join("")}</div>` : emptyFolders()}
      ${mathSection(folders)}
    `;
    $$("[data-water]").forEach(b => b.addEventListener("click", () => {
      c.water = clamp(Math.round((c.water + Number(b.dataset.water)) * 100) / 100, 0, 8);
      save(); checkAchievements(); viewHome();
    }));
    $("#askClaude").addEventListener("click", () => claudeQuiz(all));
  }

  function mathSection(folders) {
    const mf = folders.filter(f => f.type === "math");
    if (!mf.length) return "";
    const st = stats(cardsInScope("math"));
    return `<div class="card math-card" style="margin-top:16px">
      <div class="row between">
        <div><h2 style="margin:0">🧮 Mathe-Training</h2>
        <p class="muted small" style="margin:4px 0 0">Aufgaben selbst rechnen, dann den kompletten Lösungsweg aufdecken.</p></div>
        <a class="btn" href="#/lernen/math">✏️ ${st.due ? Math.min(st.due, state.settings.sessionSize) + " Aufgaben rechnen" : "Aufgaben üben"}</a>
      </div>
      <div class="grid grid-3" style="margin-top:14px">${mf.map(folderTile).join("")}</div>
    </div>`;
  }

  function folderTile(f) {
    const cards = cardsInScope("folder:" + f.id);
    const st = stats(cards);
    return `<a class="folder" href="#/ordner/${encodeURIComponent(f.id)}" style="--fc:${esc(f.color || "#6d4dff")}">
      <div class="emoji">${esc(f.emoji || "📁")}</div>
      <div class="name">${esc(f.name)}</div>
      <div class="meta">${f.decks.length} ${f.type === "math" ? "Themen" : "Stapel"} · ${st.total} ${f.type === "math" ? "Aufgaben" : "Karten"}</div>
      <div class="row" style="margin-top:6px;gap:6px">${st.due ? `<span class="badge due">${st.due} fällig</span>` : `<span class="badge">✓ erledigt</span>`}</div>
      <div class="bar"><div style="width:${st.pct}%"></div></div>
    </a>`;
  }
  const emptyFolders = () => `<div class="card empty"><div class="e">🗂️</div><p>Noch keine Ordner.</p><a class="btn" href="#/neu">Ersten Stapel erstellen</a></div>`;

  // =========================================================
  //  Ordner
  // =========================================================
  function viewFolders() {
    const folders = getFolders();
    app().innerHTML = `
      <div class="row between"><h1>🗂️ Ordner</h1><a class="btn small" href="#/neu">➕ Neu</a></div>
      ${folders.filter(f => f.type !== "math").length ? `<div class="grid grid-3">${folders.filter(f => f.type !== "math").map(folderTile).join("")}</div>` : emptyFolders()}
      ${mathSection(folders)}`;
  }

  function viewFolder(fid) {
    const f = getFolders().find(x => x.id === fid);
    if (!f) { app().innerHTML = `<div class="card empty"><p>Ordner nicht gefunden.</p><a href="#/ordner">Zurück</a></div>`; return; }
    const fst = stats(cardsInScope("folder:" + fid));
    const userFolder = state.userFolders.find(x => x.id === fid);
    app().innerHTML = `
      <a href="#/ordner" class="small">← Alle Ordner</a>
      <div class="card" style="margin-top:10px;border-left:6px solid ${esc(f.color || "#6d4dff")}">
        <div class="row between">
          <div><h1 style="margin:0">${esc(f.emoji || "📁")} ${esc(f.name)}</h1>
          <p class="muted small" style="margin:4px 0 0">${f.decks.length} Stapel · ${fst.total} Karten · ${fst.mastered} sicher · ${fst.due} fällig</p></div>
          <div class="row">
            <a class="btn small" href="#/lernen/folder:${encodeURIComponent(fid)}">${f.type === "math" ? "✏️ Alle Aufgaben rechnen" : "📚 Ganzen Ordner lernen"}</a>
            ${f.type === "math" ? "" : `<a class="btn secondary small" href="#/quiz/folder:${encodeURIComponent(fid)}">🎯 Quiz</a>`}
          </div>
        </div>
      </div>
      <div class="card">
        ${f.decks.length ? f.decks.map(d => {
          const st = stats(cardsInScope(`deck:${fid}:${d.id}`));
          return `<div class="deck">
            <div class="info">
              <h3 style="margin:0">${esc(d.name)}</h3>
              ${d.description ? `<p class="small muted" style="margin:2px 0 4px">${esc(d.description)}</p>` : ""}
              <div class="row" style="gap:6px">
                <span class="badge">${st.total} ${f.type === "math" ? "Aufgaben" : "Karten"}</span>
                ${st.fresh ? `<span class="badge new">${st.fresh} neu</span>` : ""}
                ${st.due ? `<span class="badge due">${st.due} fällig</span>` : ""}
                <span class="badge">${st.pct}% Fortschritt</span>
              </div>
              <div class="bar"><div style="width:${st.pct}%"></div></div>
            </div>
            <div class="actions">
              <a class="btn small" href="#/lernen/deck:${encodeURIComponent(fid)}:${encodeURIComponent(d.id)}">${f.type === "math" ? "Rechnen" : "Lernen"}</a>
              ${f.type === "math" ? "" : `<a class="btn secondary small" href="#/quiz/deck:${encodeURIComponent(fid)}:${encodeURIComponent(d.id)}">Quiz</a>`}
              ${!d.builtin ? `<button class="btn-ghost small" data-del-deck="${esc(d.id)}" title="Stapel löschen">🗑️</button>` : ""}
            </div>
          </div>`;
        }).join("") : `<div class="empty"><p>Dieser Ordner ist leer.</p></div>`}
      </div>
      <div class="row">
        <a class="btn secondary" href="#/neu/${encodeURIComponent(fid)}">➕ Stapel hinzufügen</a>
        ${userFolder && !f.builtin ? `<button class="btn-ghost" id="delFolder">🗑️ Ordner löschen</button>` : ""}
      </div>`;
    renderMath(app());
    $$("[data-del-deck]").forEach(b => b.addEventListener("click", () => {
      if (!confirm("Stapel wirklich löschen?")) return;
      const uf = state.userFolders.find(x => x.id === fid);
      if (uf) uf.decks = uf.decks.filter(d => d.id !== b.dataset.delDeck);
      save(); viewFolder(fid);
    }));
    $("#delFolder")?.addEventListener("click", () => {
      if (!confirm("Ganzen Ordner mit allen eigenen Stapeln löschen?")) return;
      state.userFolders = state.userFolders.filter(x => x.id !== fid); save(); location.hash = "#/ordner";
    });
  }

  // =========================================================
  //  Lernen (Karteikarten mit Leitner-System)
  // =========================================================
  function viewLearn(scope) {
    const all = cardsInScope(scope === "due" ? "all" : scope);
    if (!all.length) {
      app().innerHTML = `<div class="card empty"><div class="e">📭</div><p>Hier gibt es noch keine Karten.</p><a class="btn" href="#/neu">Karten erstellen</a></div>`;
      return;
    }
    const size = state.settings.sessionSize;
    let due = all.filter(c => isDue(c.key));
    // Erst überfällige/bekannte, dann neue Karten
    due = shuffle(due).sort((a, b) => (isNew(a.key) - isNew(b.key)));
    let practice = false;
    let queue = due.slice(0, size);
    if (!queue.length) { practice = true; queue = shuffle(all).slice(0, size); }

    const session = { done: [], good: 0, hard: 0, again: 0, points: 0, combo: 0, bestCombo: 0, start: Date.now(), requeued: new Set() };
    let idx = 0, flipped = false;

    function render() {
      if (idx >= queue.length) return finish();
      const c = queue[idx];
      if (Array.isArray(c.steps)) return renderTask(c);
      const p = state.progress[c.key];
      window.chatContext = `Ich lerne gerade die Karteikarte aus "${c.deck.name}":\nFrage: ${c.q}\nAntwort: ${c.a}`;
      app().innerHTML = `
        <div class="row between">
          <a href="${scope.startsWith("deck") || scope.startsWith("folder") ? "#/ordner/" + encodeURIComponent(c.folder.id) : "#/"}" class="small">← Beenden</a>
          <span class="small muted">${esc(scopeName(scope))}${practice ? " · Freies Üben" : ""}</span>
        </div>
        <div class="progress" style="margin-top:10px"><div style="width:${idx / queue.length * 100}%"></div></div>
        <div class="row between small muted"><span>Karte ${idx + 1} / ${queue.length}</span><span>${p ? `Fach ${p.box} von 5` : "🆕 Neue Karte"} · ⭐ ${session.points}</span></div>
        <div class="combo">${session.combo >= 3 ? `🔥 ${session.combo}er Combo!` : ""}</div>
        <div class="flash-wrap">
          <div class="flash" id="flash">
            <div class="side front"><span class="tag">Frage · ${esc(c.deck.name)}</span>${c.important ? `<span class="imp">⭐ Prüfungsrelevant</span>` : ""}<div class="content">${esc(c.q)}</div>
              ${c.hint ? `<button class="btn-ghost small" id="hintBtn" style="margin-top:14px">💡 Tipp anzeigen</button><div id="hint" class="hidden muted" style="margin-top:6px">${esc(c.hint)}</div>` : ""}
              <span class="tap">Tippen zum Umdrehen</span></div>
            <div class="side back"><span class="tag">Antwort</span><div class="content">${esc(c.a)}</div></div>
          </div>
        </div>
        <div id="controls">
          <button class="btn block" id="flipBtn">Antwort zeigen</button>
        </div>
        <div class="row" style="justify-content:center;margin-top:12px">
          <button class="btn-ghost small" id="explain">💬 Claude erklärt mir das</button>
        </div>`;
      flipped = false;
      const flash = $("#flash");
      const flip = () => {
        if (flipped) return; flipped = true; flash.classList.add("flipped");
        $("#controls").innerHTML = `<p class="center small muted" style="margin:0 0 8px">Wie gut wusstest du es?</p>
          <div class="rate">
            <button class="btn bad" data-r="again">😵 Nochmal<small>+2 ⭐</small></button>
            <button class="btn warn" data-r="hard">🤔 Schwer<small>+5 ⭐</small></button>
            <button class="btn good" data-r="good">😎 Gewusst<small>+10 ⭐</small></button>
          </div>`;
        $$("[data-r]").forEach(b => b.addEventListener("click", e => rate(c, b.dataset.r, e)));
      };
      flash.addEventListener("click", e => { if (e.target.closest("#hintBtn")) return; flip(); });
      $("#flipBtn").addEventListener("click", flip);
      $("#hintBtn")?.addEventListener("click", e => { e.stopPropagation(); $("#hint").classList.remove("hidden"); e.target.remove(); });
      $("#explain").addEventListener("click", () => openChat(`Erklär mir bitte diese Karteikarte ausführlicher, mit einem Beispiel und einer Eselsbrücke:\nFrage: ${c.q}\nAntwort: ${c.a}`));
    }

    function renderTask(c) {
      const p = state.progress[c.key];
      window.chatContext = `Ich rechne gerade diese Mathe-Aufgabe aus "${c.deck.name}":\n${c.q}\nLösungsweg:\n${c.steps.join("\n")}\nErgebnis: ${c.a}`;
      app().innerHTML = `
        <div class="row between">
          <a href="${scope.startsWith("deck") || scope.startsWith("folder") ? "#/ordner/" + encodeURIComponent(c.folder.id) : "#/"}" class="small">← Beenden</a>
          <span class="small muted">${esc(scopeName(scope))}${practice ? " · Freies Üben" : ""}</span>
        </div>
        <div class="progress" style="margin-top:10px"><div style="width:${idx / queue.length * 100}%"></div></div>
        <div class="row between small muted"><span>Aufgabe ${idx + 1} / ${queue.length}</span><span>${p ? `Fach ${p.box} von 5` : "🆕 Neue Aufgabe"} · ⭐ ${session.points}</span></div>
        <div class="combo">${session.combo >= 3 ? `🔥 ${session.combo}er Serie!` : ""}</div>
        <div class="card task">
          <div class="row between"><span class="tag">✏️ Aufgabe · ${esc(c.deck.name)}</span>${c.important ? `<span class="badge due">⭐ Klausurrelevant</span>` : ""}</div>
          <div class="task-q">${esc(c.q)}</div>
          ${c.hint ? `<button class="btn-ghost small" id="hintBtn">💡 Tipp / Formel anzeigen</button><div id="hint" class="hidden explain">${esc(c.hint)}</div>` : ""}
          <p class="small muted" style="margin:14px 0 0">📝 Rechne die Aufgabe auf Papier – dann deck den Lösungsweg auf.</p>
        </div>
        <div id="solution" class="card task-solution hidden">
          <span class="tag">✅ Lösungsweg</span>
          <ol class="steps">${c.steps.map(st => `<li>${esc(st)}</li>`).join("")}</ol>
          <div class="result"><b>Ergebnis:</b> ${esc(c.a)}</div>
        </div>
        <div id="controls"><button class="btn block" id="flipBtn">Lösungsweg zeigen 👀</button></div>
        <div class="row" style="justify-content:center;margin-top:12px">
          <button class="btn-ghost small" id="explain">💬 Claude erklärt mir den Weg</button>
          <button class="btn-ghost small" id="similar">🔁 Ähnliche Aufgabe von Claude</button>
        </div>`;
      renderMath(app());
      $("#hintBtn")?.addEventListener("click", e => { $("#hint").classList.remove("hidden"); e.target.remove(); });
      $("#flipBtn").addEventListener("click", () => {
        $("#solution").classList.remove("hidden");
        $("#solution").scrollIntoView({ behavior: "smooth", block: "start" });
        $("#controls").innerHTML = `<p class="center small muted" style="margin:0 0 8px">Wie lief's?</p>
          <div class="rate">
            <button class="btn bad" data-r="again">😵 Falsch<small>+2 ⭐</small></button>
            <button class="btn warn" data-r="hard">🤔 Teilweise<small>+5 ⭐</small></button>
            <button class="btn good" data-r="good">😎 Richtig<small>+10 ⭐</small></button>
          </div>`;
        $$("[data-r]").forEach(b => b.addEventListener("click", e => rate(c, b.dataset.r, e)));
      });
      $("#explain").addEventListener("click", () => openChat(`Erklär mir bitte den Lösungsweg dieser Aufgabe Schritt für Schritt und so, dass ich ihn verstehe (nicht nur vorrechnen):\n${c.q}\nLösungsweg:\n${c.steps.join("\n")}\nErgebnis: ${c.a}`));
      $("#similar").addEventListener("click", () => openChat(`Gib mir bitte eine ähnliche Übungsaufgabe mit anderen Zahlen zu dieser Aufgabe. Zeig die Lösung erst, wenn ich dir mein Ergebnis schicke:\n${c.q}`));
    }

    function rate(c, r, evt) {
      const today = dayKey();
      const p = state.progress[c.key] || { box: 0, reviews: 0, correct: 0 };
      p.reviews++; p.last = today;
      let pts = 0;
      if (r === "good") {
        p.box = clamp((p.box || 0) + 1, 1, 5); p.correct++;
        session.combo++; session.bestCombo = Math.max(session.bestCombo, session.combo);
        pts = 10 + Math.min(session.combo - 1, 5) * 2;
        session.good++;
      } else if (r === "hard") {
        p.box = Math.max(1, p.box || 1); session.combo = 0; pts = 5; session.hard++;
      } else {
        p.box = 1; session.combo = 0; pts = 2; session.again++;
        if (!session.requeued.has(c.key)) { session.requeued.add(c.key); queue.push(c); }
      }
      p.due = r === "again" ? today : addDays(today, r === "hard" ? 1 : INTERVALS[p.box]);
      if (practice && r !== "again") p.due = state.progress[c.key]?.due && state.progress[c.key].due > p.due ? state.progress[c.key].due : p.due;
      state.progress[c.key] = p;
      const tl = todayLog(); tl.reviewed++; if (r === "good") tl.good++;
      if (!session.done.find(x => x.key === c.key)) session.done.push(c);
      session.points += pts;
      addPoints(pts, evt);
      idx++; render();
    }

    function finish() {
      const mins = Math.max(1, Math.round((Date.now() - session.start) / 60000));
      todayLog().minutes += mins;
      unlock("first_session");
      const bonus = session.done.length >= 10 ? 20 : 0;
      if (bonus) addPoints(bonus);
      save(); checkAchievements();
      window.chatContext = null;
      const total = session.good + session.hard + session.again;
      const rate = total ? Math.round(session.good / total * 100) : 0;
      app().innerHTML = `
        <div class="card center">
          <div style="font-size:3rem">${rate >= 80 ? "🏆" : rate >= 50 ? "💪" : "🌱"}</div>
          <h1>Session geschafft!</h1>
          <p class="muted">${session.done.length} Karten in ${mins} Min · ${rate}% gewusst${session.bestCombo >= 3 ? ` · beste Combo: ${session.bestCombo} 🔥` : ""}</p>
          <div class="grid grid-4" style="margin:14px 0">
            <div class="stat"><div class="label">Gewusst</div><div class="value" style="color:var(--good)">${session.good}</div></div>
            <div class="stat"><div class="label">Schwer</div><div class="value" style="color:var(--warn)">${session.hard}</div></div>
            <div class="stat"><div class="label">Nochmal</div><div class="value" style="color:var(--bad)">${session.again}</div></div>
            <div class="stat"><div class="label">Punkte</div><div class="value">⭐ ${session.points + bonus}</div></div>
          </div>
          ${bonus ? `<p class="small muted">+${bonus} Bonus für eine lange Session!</p>` : ""}
        </div>
        <div class="card">
          <h2>🎯 Zum Abschluss: ein paar Fragen</h2>
          <p class="muted">Teste, ob das Wissen sitzt – Quizfragen zu genau diesen Karten (+15 ⭐ pro richtige Antwort).</p>
          <div class="row">
            <button class="btn" id="startQuiz">Abschlussquiz starten</button>
            <button class="btn secondary" id="claudeQ">💬 Claude stellt mir offene Fragen</button>
          </div>
        </div>
        <div class="row"><a class="btn secondary" href="#/lernen/${encodeURIComponent(scope)}">🔁 Weiterlernen</a><a class="btn-ghost" href="#/">Zur Startseite</a></div>`;
      confetti(rate >= 80 ? 100 : 40);
      if (session.done.every(c => Array.isArray(c.steps))) {
        $("#startQuiz").textContent = "🔁 Noch eine Runde rechnen";
        $("#startQuiz").addEventListener("click", () => viewLearn(scope));
        $("#claudeQ").textContent = "💬 Claude gibt mir neue Aufgaben";
        $("#claudeQ").addEventListener("click", () => openChat(`Gib mir bitte 3 neue Übungsaufgaben (eine nach der anderen) zu diesen Themen und kontrolliere meine Ergebnisse:\n${session.done.slice(0, 8).map(c => "- " + c.q).join("\n")}`));
        return;
      }
      $("#startQuiz").addEventListener("click", () => runQuiz(buildQuiz(scope, session.done), scope));
      $("#claudeQ").addEventListener("click", () => claudeQuiz(session.done));
    }

    render();
  }

  // =========================================================
  //  Quiz
  // =========================================================
  function buildQuiz(scope, focusCards) {
    const scopeCards = cardsInScope(scope === "due" ? "all" : scope);
    const pool = (scopeCards.length >= 4 ? scopeCards : cardsInScope("all")).filter(c => !Array.isArray(c.steps));
    const focusDecks = focusCards ? new Set(focusCards.map(c => c.deck.id)) : null;
    let explicit = quizInScope(scope === "due" ? "all" : scope);
    if (focusDecks) explicit = explicit.filter(q => focusDecks.has(q.deck.id));
    const qs = shuffle(explicit).slice(0, 4).map(q => ({ q: q.q, options: q.options, correct: q.correct, explain: q.explain }));
    const src = shuffle(focusCards && focusCards.length ? focusCards : scopeCards);
    for (const c of src) {
      if (qs.length >= 8) break;
      if (Array.isArray(c.steps)) continue;
      const others = shuffle(pool.filter(o => o.a !== c.a)).slice(0, 3).map(o => o.a);
      if (others.length < 2) continue;
      const opts = shuffle([c.a, ...others]);
      qs.push({ q: c.q, options: opts, correct: opts.indexOf(c.a), explain: c.hint ? "💡 " + c.hint : "" });
    }
    return shuffle(qs);
  }

  function viewQuiz(scope) {
    const qs = buildQuiz(scope);
    runQuiz(qs, scope);
  }

  function runQuiz(qs, scope) {
    if (!qs.length) {
      app().innerHTML = `<div class="card empty"><div class="e">🤷</div><p>Für ein Quiz brauchst du mindestens 3–4 Karten in diesem Bereich.</p><a class="btn" href="#/neu">Karten erstellen</a></div>`;
      return;
    }
    let i = 0, correct = 0, pts = 0;
    const wrong = [];
    function render() {
      if (i >= qs.length) return finish();
      const q = qs[i];
      window.chatContext = `Ich mache gerade ein Quiz. Frage: ${q.q}\nOptionen: ${q.options.join(" | ")}`;
      app().innerHTML = `
        <div class="row between"><a href="#/" class="small">← Abbrechen</a><span class="small muted">🎯 Quiz · ${esc(scopeName(scope))}</span></div>
        <div class="progress" style="margin-top:10px"><div style="width:${i / qs.length * 100}%"></div></div>
        <div class="row between small muted"><span>Frage ${i + 1} / ${qs.length}</span><span>✅ ${correct} · ⭐ ${pts}</span></div>
        <div class="card" style="margin-top:10px">
          <h2>${esc(q.q)}</h2>
          <div class="options">${q.options.map((o, k) => `<button class="option" data-k="${k}">${String.fromCharCode(65 + k)}) ${esc(o)}</button>`).join("")}</div>
          <div id="after"></div>
        </div>`;
      $$(".option").forEach(b => b.addEventListener("click", e => {
        const k = Number(b.dataset.k);
        const ok = k === q.correct;
        $$(".option").forEach((x, j) => { x.disabled = true; if (j === q.correct) x.classList.add("correct"); });
        if (!ok) { b.classList.add("wrong"); wrong.push(q); }
        else { correct++; pts += 15; addPoints(15, e); }
        todayLog().quizTotal++; if (ok) todayLog().quizCorrect++;
        save();
        $("#after").innerHTML = `
          <div class="explain">${ok ? "✅ <b>Richtig!</b>" : `❌ <b>Leider falsch.</b> Richtig ist: ${esc(q.options[q.correct])}`}${q.explain ? `<br><span class="small">${esc(q.explain)}</span>` : ""}</div>
          <div class="row" style="margin-top:12px">
            <button class="btn" id="nextQ">${i === qs.length - 1 ? "Ergebnis ansehen" : "Nächste Frage →"}</button>
            ${!ok ? `<button class="btn-ghost small" id="why">💬 Warum? Claude erklärt</button>` : ""}
          </div>`;
        $("#nextQ").addEventListener("click", () => { i++; render(); });
        $("#why")?.addEventListener("click", () => openChat(`Ich hatte im Quiz die Frage "${q.q}" falsch. Ich habe "${q.options[k]}" gewählt, richtig ist "${q.options[q.correct]}". Erklär mir kurz, warum, und wie ich mir das merken kann.`));
      }));
    }
    function finish() {
      window.chatContext = null;
      const perfect = correct === qs.length;
      if (perfect && qs.length >= 3) { addPoints(30); unlock("perfect_quiz"); }
      checkAchievements();
      const pct = Math.round(correct / qs.length * 100);
      app().innerHTML = `
        <div class="card center">
          <div style="font-size:3rem">${perfect ? "🎯" : pct >= 60 ? "👏" : "📖"}</div>
          <h1>${correct} von ${qs.length} richtig</h1>
          <div class="score" style="--p:${pct};--ring:${pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)"}"><div>${pct}%</div></div>
          <p class="muted">⭐ ${pts + (perfect && qs.length >= 3 ? 30 : 0)} Punkte${perfect && qs.length >= 3 ? " (inkl. 30 Perfekt-Bonus)" : ""}</p>
        </div>
        ${wrong.length ? `<div class="card"><h3>Das solltest du nochmal anschauen</h3><ul class="feedback">${wrong.map(q => `<li class="warn"><b>${esc(q.q)}</b><br>${esc(q.options[q.correct])}</li>`).join("")}</ul></div>` : ""}
        <div class="row">
          <button class="btn" id="again">🔁 Neues Quiz</button>
          <a class="btn secondary" href="#/">Zur Startseite</a>
        </div>`;
      if (pct >= 80) confetti();
      $("#again").addEventListener("click", () => runQuiz(buildQuiz(scope), scope));
    }
    render();
  }

  function claudeQuiz(cards) {
    const sample = shuffle(cards).slice(0, 25).map(c => `- ${c.q} → ${c.a}`).join("\n");
    openChat(`Frag mich bitte ab! Stell mir nacheinander 5 offene Verständnisfragen (eine nach der anderen, warte jeweils auf meine Antwort und gib mir dann Feedback). Grundlage sind diese Karteikarten:\n${sample || "(noch keine Karten – stell mir allgemeine Fragen zum Lernen)"}`);
  }

  // =========================================================
  //  Neu: Karten erstellen (mit Claude oder manuell)
  // =========================================================
  function folderSelect(preselect) {
    const folders = getFolders();
    return `<label class="field"><span>Ordner (Fach)</span>
      <select data-folder>
        ${folders.map(f => `<option value="${esc(f.id)}" ${f.id === preselect ? "selected" : ""}>${esc(f.emoji || "📁")} ${esc(f.name)}</option>`).join("")}
        <option value="__new" ${!folders.length || !preselect ? "selected" : ""}>➕ Neuer Ordner…</option>
      </select></label>
      <div class="grid grid-3 newFolder" style="grid-template-columns:70px 1fr 70px">
        <label class="field"><span>Emoji</span><input type="text" data-nf-emoji value="📘" maxlength="4"></label>
        <label class="field"><span>Name des Ordners</span><input type="text" data-nf-name placeholder="z. B. Anatomie"></label>
        <label class="field"><span>Farbe</span><input type="color" data-nf-color value="#6d4dff" style="width:100%;height:44px;border:0;background:none"></label>
      </div>`;
  }
  function bindFolderSelect(root) {
    const sel = $("[data-folder]", root), nf = $(".newFolder", root);
    const upd = () => nf.classList.toggle("hidden", sel.value !== "__new");
    sel.addEventListener("change", upd); upd();
  }
  function resolveFolder(root) {
    const sel = $("[data-folder]", root).value;
    if (sel !== "__new") {
      let uf = state.userFolders.find(x => x.id === sel);
      if (!uf) {
        const bf = getFolders().find(x => x.id === sel);
        uf = { id: sel, name: bf.name, emoji: bf.emoji, color: bf.color, decks: [] };
        state.userFolders.push(uf);
      }
      return uf;
    }
    const name = $("[data-nf-name]", root).value.trim();
    if (!name) throw new Error("Bitte gib dem neuen Ordner einen Namen.");
    const uf = { id: "f-" + uid(), name, emoji: $("[data-nf-emoji]", root).value.trim() || "📁", color: $("[data-nf-color]", root).value, decks: [] };
    state.userFolders.push(uf);
    return uf;
  }
  function saveDeck(root, name, cards, quiz, description) {
    const f = resolveFolder(root);
    const deck = { id: "d-" + uid(), name: name || "Neuer Stapel", description: description || "", cards: cards.map(c => ({ id: uid(), q: c.q, a: c.a, hint: c.hint || "" })), quiz: quiz || [] };
    f.decks.push(deck);
    save();
    unlock("creator");
    toast(`✅ ${cards.length} Karten in „${f.name}“ gespeichert`);
    location.hash = "#/ordner/" + encodeURIComponent(f.id);
  }

  function viewNew(preFolder) {
    const hasKey = !!state.settings.apiKey;
    app().innerHTML = `
      <h1>➕ Neue Karteikarten</h1>
      <div class="card" id="aiBox">
        <h2>✨ Mit Claude aus Lernzettel / Folien</h2>
        <p class="muted small">Lade PDFs, Fotos von Lernzetteln oder Textdateien hoch – oder füg den Text ein. Claude baut daraus Karteikarten und Quizfragen.</p>
        ${hasKey ? "" : `<div class="explain small" style="margin-bottom:12px">🔑 Dafür brauchst du einen Claude-API-Key → <a href="#/einstellungen">Einstellungen</a>.<br>Alternativ: Schick die Folien einfach Claude im Chat (Claude Code) – dann werden sie fest in die Website eingebaut.</div>`}
        ${folderSelect(preFolder)}
        <label class="field"><span>Name des Stapels (Thema / Vorlesung)</span><input type="text" id="aiDeck" placeholder="z. B. VL 3 – Zellbiologie"></label>
        <div class="drop" id="drop"><div style="font-size:2rem">📄</div><b>Dateien hierher ziehen</b> oder tippen zum Auswählen<div class="small muted">PDF, JPG/PNG, TXT, MD</div>
          <input type="file" id="files" multiple accept=".pdf,image/*,.txt,.md,.csv" class="hidden"></div>
        <div class="file-list" id="fileList"></div>
        <label class="field" style="margin-top:12px"><span>…oder Text einfügen</span><textarea id="aiText" rows="5" placeholder="Lernzettel hier reinkopieren"></textarea></label>
        <label class="field"><span>Wie viele Karten ungefähr?</span>
          <select id="aiCount"><option>10</option><option selected>20</option><option>30</option><option>50</option></select></label>
        <button class="btn" id="aiGo" ${hasKey ? "" : "disabled"}>✨ Karten erstellen lassen</button>
        <div id="aiResult"></div>
      </div>

      <div class="card" id="manBox">
        <h2>✍️ Selbst schreiben</h2>
        ${folderSelect(preFolder)}
        <label class="field"><span>Name des Stapels</span><input type="text" id="manDeck" placeholder="z. B. Vokabeln Woche 2"></label>
        <div id="rows"></div>
        <div class="row"><button class="btn secondary small" id="addRow">+ Karte</button></div>
        <details style="margin-top:14px"><summary class="small"><b>Schnell-Import</b> (eine Karte pro Zeile: <code>Frage ; Antwort</code>)</summary>
          <textarea id="bulk" rows="5" placeholder="Was ist ATP? ; Der Energieträger der Zelle"></textarea>
          <button class="btn secondary small" id="bulkGo" style="margin-top:8px">Zeilen übernehmen</button>
        </details>
        <button class="btn" id="manSave" style="margin-top:14px">💾 Stapel speichern</button>
      </div>`;

    // KI-Bereich
    const aiBox = $("#aiBox"); bindFolderSelect(aiBox);
    let files = [];
    const drop = $("#drop"), input = $("#files");
    const showFiles = () => { $("#fileList").innerHTML = files.map((f, i) => `📎 ${esc(f.name)} <button class="btn-ghost small" data-rm="${i}">✕</button>`).join("<br>"); $$("[data-rm]").forEach(b => b.addEventListener("click", () => { files.splice(Number(b.dataset.rm), 1); showFiles(); })); };
    drop.addEventListener("click", () => input.click());
    input.addEventListener("change", () => { files.push(...input.files); input.value = ""; showFiles(); });
    drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("over"); });
    drop.addEventListener("dragleave", () => drop.classList.remove("over"));
    drop.addEventListener("drop", e => { e.preventDefault(); drop.classList.remove("over"); files.push(...e.dataTransfer.files); showFiles(); });

    $("#aiGo").addEventListener("click", async () => {
      const text = $("#aiText").value;
      if (!files.length && !text.trim()) { toast("Bitte Datei hochladen oder Text einfügen"); return; }
      const btn = $("#aiGo"); btn.disabled = true; btn.textContent = "⏳ Claude liest deine Unterlagen…";
      $("#aiResult").innerHTML = "";
      try {
        const res = await Claude.generateCards({ apiKey: state.settings.apiKey, model: state.settings.model, text, files, topic: $("#aiDeck").value.trim(), count: Number($("#aiCount").value) });
        showPreview(res);
      } catch (err) {
        $("#aiResult").innerHTML = `<div class="explain" style="margin-top:12px">⚠️ ${esc(err.message)}</div>`;
      } finally { btn.disabled = false; btn.textContent = "✨ Karten erstellen lassen"; }
    });

    function showPreview(res) {
      let cards = res.cards || [];
      const quiz = (res.quiz || []).filter(q => Array.isArray(q.options) && q.options.length >= 2 && q.correct >= 0 && q.correct < q.options.length);
      if (!$("#aiDeck").value.trim() && res.deckName) $("#aiDeck").value = res.deckName;
      const draw = () => {
        $("#aiResult").innerHTML = `<h3 style="margin-top:18px">Vorschau: ${cards.length} Karten, ${quiz.length} Quizfragen</h3>
          <p class="small muted">Unpassende Karten mit ✕ entfernen, dann speichern.</p>
          <div style="max-height:420px;overflow:auto">${cards.map((c, i) => `<div class="explain" style="margin-top:8px"><div class="row between"><b>${esc(c.q)}</b><button class="btn-ghost small" data-x="${i}">✕</button></div>${esc(c.a)}</div>`).join("")}</div>
          <button class="btn good" id="aiSave" style="margin-top:12px">💾 ${cards.length} Karten speichern</button>`;
        $$("[data-x]").forEach(b => b.addEventListener("click", () => { cards.splice(Number(b.dataset.x), 1); draw(); }));
        $("#aiSave").addEventListener("click", () => {
          try { saveDeck(aiBox, $("#aiDeck").value.trim() || res.deckName, cards, quiz, "Von Claude erstellt am " + fmtDay(dayKey())); }
          catch (err) { toast(err.message); }
        });
      };
      draw();
    }

    // Manuell
    const manBox = $("#manBox"); bindFolderSelect(manBox);
    const rows = $("#rows");
    const addRow = (q = "", a = "") => {
      const div = document.createElement("div"); div.className = "card-edit";
      div.innerHTML = `<input type="text" placeholder="Frage" value="${esc(q)}" data-q><input type="text" placeholder="Antwort" value="${esc(a)}" data-a><button class="btn-ghost" title="Entfernen">✕</button>`;
      $("button", div).addEventListener("click", () => div.remove());
      rows.appendChild(div);
    };
    addRow(); addRow(); addRow();
    $("#addRow").addEventListener("click", () => addRow());
    $("#bulkGo").addEventListener("click", () => {
      const lines = $("#bulk").value.split("\n").map(l => l.split(/\s*[;\t]\s*/)).filter(p => p.length >= 2 && p[0].trim());
      $$(".card-edit", rows).forEach(r => { if (!$("[data-q]", r).value && !$("[data-a]", r).value) r.remove(); });
      lines.forEach(p => addRow(p[0].trim(), p.slice(1).join("; ").trim()));
      $("#bulk").value = ""; toast(`${lines.length} Karten übernommen`);
    });
    $("#manSave").addEventListener("click", () => {
      const cards = $$(".card-edit", rows).map(r => ({ q: $("[data-q]", r).value.trim(), a: $("[data-a]", r).value.trim() })).filter(c => c.q && c.a);
      if (!cards.length) { toast("Mindestens eine Karte mit Frage und Antwort eintragen"); return; }
      try { saveDeck(manBox, $("#manDeck").value.trim(), cards, []); } catch (err) { toast(err.message); }
    });
  }

  // =========================================================
  //  Verlauf
  // =========================================================
  function viewHistory() {
    const days = Array.from({ length: 14 }, (_, i) => addDays(dayKey(), -i));
    const li = levelInfo();
    const totalReviewed = Object.values(state.log).reduce((t, l) => t + (l.reviewed || 0), 0);
    const totalMin = Object.values(state.log).reduce((t, l) => t + (l.minutes || 0), 0);
    const cis = Object.values(state.checkins);
    const avg = (f) => cis.length ? cis.reduce((t, c) => t + (Number(c[f]) || 0), 0) / cis.length : 0;
    app().innerHTML = `
      <h1>📈 Verlauf</h1>
      <div class="grid grid-4">
        <div class="stat"><div class="label">Level</div><div class="value">${li.level}</div><div class="sub">${esc(li.title)}</div></div>
        <div class="stat"><div class="label">Punkte gesamt</div><div class="value">⭐ ${state.points}</div></div>
        <div class="stat"><div class="label">Karten gelernt</div><div class="value">${totalReviewed}</div><div class="sub">${totalMin} Min Lernzeit</div></div>
        <div class="stat"><div class="label">Ø Schlaf</div><div class="value">${fmtNum(avg("sleepHours"))} h</div><div class="sub">Ø ${fmtNum(avg("water"), 2)} L Wasser</div></div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>Letzte 14 Tage</h2>
        <div class="table-scroll"><table>
          <thead><tr><th>Tag</th><th>Check</th><th>Schlaf</th><th>Training</th><th>Wasser</th><th>Stimmung</th><th>Karten</th><th>⭐</th></tr></thead>
          <tbody>${days.map(k => {
            const c = state.checkins[k], l = state.log[k];
            if (!c && !l) return `<tr class="muted"><td>${fmtDay(k)}</td><td colspan="7">–</td></tr>`;
            const ev = c ? evaluate(c) : null;
            return `<tr><td>${fmtDay(k)}</td>
              <td>${ev ? `<b style="color:${ev.score >= 75 ? "var(--good)" : ev.score >= 50 ? "var(--warn)" : "var(--bad)"}">${ev.score}</b>` : "–"}</td>
              <td>${c ? fmtNum(c.sleepHours) + " h · " + SLEEP_RANGES[c.sleepQuality] : "–"}</td>
              <td>${c ? (c.trainingType === "none" ? "–" : c.trainingMin + " Min") : "–"}</td>
              <td>${c ? fmtNum(c.water, 2) + " L" : "–"}</td>
              <td>${c ? ["", "😞", "🙁", "😐", "🙂", "😄"][c.mood] : "–"}</td>
              <td>${l ? l.reviewed : 0}</td><td>${l ? l.points : 0}</td></tr>`;
          }).join("")}</tbody>
        </table></div>
      </div>
      <div class="card">
        <h2>🏅 Erfolge (${Object.keys(state.achievements).length}/${ACHIEVEMENTS.length})</h2>
        <div class="achievements">${ACHIEVEMENTS.map(a => `<div class="ach ${state.achievements[a.id] ? "on" : ""}"><div class="e">${a.e}</div><div class="n">${esc(a.n)}</div><div class="d">${esc(a.d)}</div></div>`).join("")}</div>
      </div>`;
  }

  // =========================================================
  //  Einstellungen
  // =========================================================
  function viewSettings() {
    const s = state.settings;
    app().innerHTML = `
      <h1>⚙️ Einstellungen</h1>
      <div class="card">
        <label class="field"><span>Dein Name</span><input type="text" id="sName" value="${esc(state.profile.name)}"></label>
        <div class="grid grid-3">
          <label class="field"><span>Karten pro Session</span><input type="number" id="sSize" min="5" max="100" value="${s.sessionSize}"></label>
          <label class="field"><span>Wasserziel (L)</span><input type="number" id="sWater" min="0.5" max="6" step="0.25" value="${s.waterGoal}"></label>
          <label class="field"><span>Schlafziel (h)</span><input type="number" id="sSleep" min="4" max="12" step="0.5" value="${s.sleepGoal}"></label>
        </div>
        <label class="field"><span>Design</span><select id="sTheme">
          <option value="auto" ${s.theme === "auto" ? "selected" : ""}>Automatisch</option>
          <option value="light" ${s.theme === "light" ? "selected" : ""}>Hell</option>
          <option value="dark" ${s.theme === "dark" ? "selected" : ""}>Dunkel</option></select></label>
      </div>
      <div class="card">
        <h2>🤖 Claude-Verbindung</h2>
        <p class="small muted">Damit du auf der Website jederzeit mit Claude chatten und Karten aus Folien erstellen kannst, brauchst du einen API-Key von <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com</a>. Der Key bleibt nur hier in deinem Browser gespeichert. Die Nutzung kostet ein paar Cent pro Anfrage.</p>
        <label class="field"><span>API-Key</span><input type="password" id="sKey" value="${esc(s.apiKey)}" placeholder="sk-ant-…" autocomplete="off"></label>
        <label class="field"><span>Modell</span><select id="sModel">
          <option value="claude-opus-5-5" ${s.model === "claude-opus-5-5" ? "selected" : ""}>Claude Opus 5.5 – am klügsten (Standard)</option>
          <option value="claude-sonnet-5-5" ${s.model === "claude-sonnet-5-5" ? "selected" : ""}>Claude Sonnet 5.5 – schnell & günstiger</option>
          <option value="claude-haiku-5-5" ${s.model === "claude-haiku-5-5" ? "selected" : ""}>Claude Haiku 5.5 – am günstigsten</option></select></label>
        <button class="btn secondary small" id="testKey">Verbindung testen</button>
      </div>
      <button class="btn block" id="sSave">💾 Speichern</button>
      <div class="card" style="margin-top:16px">
        <h2>💾 Backup</h2>
        <p class="small muted">Alles (Check-ins, Fortschritt, eigene Karten) wird in diesem Browser gespeichert. Mach ab und zu ein Backup – oder um es auf ein anderes Gerät zu übertragen.</p>
        <div class="row">
          <button class="btn secondary small" id="exp">⬇️ Backup herunterladen</button>
          <button class="btn secondary small" id="imp">⬆️ Backup laden</button>
          <input type="file" id="impFile" accept=".json" class="hidden">
          <button class="btn-ghost small" id="reset" style="color:var(--bad)">Alles zurücksetzen</button>
        </div>
      </div>`;
    const collect = () => {
      state.profile.name = $("#sName").value.trim() || "Julian";
      s.sessionSize = clamp(Number($("#sSize").value) || 20, 5, 100);
      s.waterGoal = clamp(Number($("#sWater").value) || 2.5, 0.5, 6);
      s.sleepGoal = clamp(Number($("#sSleep").value) || 8, 4, 12);
      s.theme = $("#sTheme").value;
      s.apiKey = $("#sKey").value.trim();
      s.model = $("#sModel").value;
    };
    $("#sSave").addEventListener("click", () => { collect(); save(); applyTheme(); renderTopStats(); toast("✅ Gespeichert"); });
    $("#testKey").addEventListener("click", async (e) => {
      collect(); save();
      const b = e.target; b.disabled = true; b.textContent = "⏳ Teste…";
      try { const r = await Claude.send({ apiKey: s.apiKey, model: s.model, maxTokens: 200, messages: [{ role: "user", content: "Sag in einem kurzen Satz Hallo zu Julian." }] }); toast("✅ " + r.text, 4000); }
      catch (err) { toast("⚠️ " + err.message, 5000); }
      finally { b.disabled = false; b.textContent = "Verbindung testen"; }
    });
    $("#exp").addEventListener("click", () => {
      const copy = { ...state, settings: { ...state.settings, apiKey: "" } };
      const blob = new Blob([JSON.stringify(copy, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `julian-lernen-backup-${dayKey()}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $("#imp").addEventListener("click", () => $("#impFile").click());
    $("#impFile").addEventListener("change", async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (!data || typeof data !== "object" || !("checkins" in data)) throw new Error();
        const key = state.settings.apiKey;
        state = { ...structuredClone(DEFAULT_STATE), ...data, settings: { ...DEFAULT_STATE.settings, ...data.settings, apiKey: data.settings?.apiKey || key } };
        save(); toast("✅ Backup geladen"); route();
      } catch { toast("⚠️ Datei ist kein gültiges Backup"); }
    });
    $("#reset").addEventListener("click", () => {
      if (!confirm("Wirklich ALLES löschen (Check-ins, Punkte, Fortschritt, eigene Karten)?")) return;
      state = structuredClone(DEFAULT_STATE); save(); location.hash = "#/checkin"; route();
    });
  }

  // =========================================================
  //  Claude-Chat (immer verfügbar)
  // =========================================================
  const chat = $("#chat"), chatBody = $("#chatBody");
  let chatBusy = false;

  function systemPrompt() {
    const c = state.checkins[dayKey()];
    const li = levelInfo();
    let s = `Du bist Claude, der persönliche Lern-Coach von ${state.profile.name}, der studiert. ` +
      `Du hilfst beim Verstehen von Studieninhalten, fragst ab, erklärst mit Beispielen und Eselsbrücken und motivierst. ` +
      `Antworte auf Deutsch, locker und freundlich, eher kurz (außer es wird eine ausführliche Erklärung gewünscht). ` +
      `Wenn du abfragst, stell immer nur eine Frage auf einmal und warte auf die Antwort.\n\n` +
      `Heute ist ${new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}. ` +
      `Stand: Level ${li.level} (${li.title}), ${state.points} Punkte, Streak ${streak()} Tage.`;
    if (c) {
      const ev = evaluate(c);
      s += `\n\nTages-Check-in von heute (Score ${ev.score}/100): Schlaf ${c.sleepHours} h (Schlafqualität ${SLEEP_RANGES[c.sleepQuality]}), ` +
        `Training: ${c.trainingType === "none" ? "keins" : c.trainingMin + " Min " + trainingLabel(c.trainingType) + " (" + c.trainingIntensity + ")"}, ` +
        `Essen: ${[c.breakfast, c.lunch, c.dinner, c.snacks].filter(Boolean).join(", ") || "noch nichts angegeben"} (Gesundheit ${c.foodHealth}/5), ` +
        `Wasser ${c.water} L von ${state.settings.waterGoal} L Ziel, Stimmung ${c.mood}/5, Energie ${c.energy}/5, Stress ${c.stress}/5` +
        (c.goal ? `, Tagesziel: "${c.goal}"` : "") + `. Berücksichtige das, wenn es passt (z. B. bei wenig Schlaf kürzere Einheiten vorschlagen), aber erwähne es nicht ständig.`;
    }
    const folders = getFolders();
    if (folders.length) s += `\n\nVorhandene Lernordner: ${folders.map(f => f.name + " (" + f.decks.map(d => d.name).join(", ") + ")").join("; ")}.`;
    return s;
  }

  function renderChat() {
    if (!state.chat.length) {
      chatBody.innerHTML = `<div class="msg system">Hi ${esc(state.profile.name)}! 👋 Ich bin immer für dich da – frag mich zu deinem Stoff, lass dich abfragen oder erzähl mir, wie's läuft.
${state.settings.apiKey ? "" : "\n🔑 Hinterlege zuerst deinen API-Key unter ⚙️ Mehr."}</div>`;
    } else {
      chatBody.innerHTML = state.chat.map(m => `<div class="msg ${m.role}">${esc(m.content)}</div>`).join("");
    }
    if (chatBusy) chatBody.insertAdjacentHTML("beforeend", `<div class="msg assistant typing">Claude denkt nach</div>`);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function toggleChat(open) {
    const o = open ?? !chat.classList.contains("open");
    chat.classList.toggle("open", o); chat.setAttribute("aria-hidden", String(!o));
    $("#chatFab").classList.toggle("hidden", o);
    if (o) { renderChat(); setTimeout(() => $("#chatText").focus(), 50); }
  }

  async function sendChat(text) {
    text = text.trim(); if (!text || chatBusy) return;
    if (!state.settings.apiKey) { toast("🔑 Bitte zuerst API-Key in den Einstellungen eintragen"); location.hash = "#/einstellungen"; return; }
    state.chat.push({ role: "user", content: text });
    chatBusy = true; renderChat();
    try {
      let sys = systemPrompt();
      if (window.chatContext) sys += `\n\nAktueller Kontext auf der Website:\n${window.chatContext}`;
      const history = state.chat.slice(-30);
      while (history.length && history[0].role !== "user") history.shift();
      const { text: reply } = await Claude.send({ apiKey: state.settings.apiKey, model: state.settings.model, system: sys, messages: history.map(m => ({ role: m.role, content: m.content })) });
      state.chat.push({ role: "assistant", content: reply || "(keine Antwort)" });
    } catch (err) {
      state.chat.pop();
      chatBody.insertAdjacentHTML("beforeend", `<div class="msg system">⚠️ ${esc(err.message)}</div>`);
      $("#chatText").value = text;
      chatBusy = false; save();
      return;
    }
    chatBusy = false;
    state.chat = state.chat.slice(-60);
    save(); renderChat();
  }

  function openChat(prefill) {
    toggleChat(true);
    if (prefill) sendChat(prefill);
  }

  $("#chatFab").addEventListener("click", () => toggleChat(true));
  $("#chatClose").addEventListener("click", () => toggleChat(false));
  $("#chatClear").addEventListener("click", () => { if (confirm("Chatverlauf leeren?")) { state.chat = []; save(); renderChat(); } });
  $("#chatForm").addEventListener("submit", e => { e.preventDefault(); const t = $("#chatText"); const v = t.value; t.value = ""; t.style.height = ""; sendChat(v); });
  $("#chatText").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#chatForm").requestSubmit(); } });
  $("#chatText").addEventListener("input", e => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px"; });

  // ---------- Start ----------
  applyTheme();
  renderTopStats();
  window.addEventListener("hashchange", route);
  route();
})();
