/*
 * Verbindung zu Claude (Anthropic Messages API) direkt aus dem Browser.
 * Der API-Key wird nur lokal in deinem Browser gespeichert (localStorage)
 * und nur an api.anthropic.com geschickt.
 */
window.Claude = (function () {
  const API_URL = "https://api.anthropic.com/v1/messages";

  async function send({ apiKey, model, system, messages, maxTokens = 16000, format }) {
    if (!apiKey) throw new Error("Kein API-Key hinterlegt. Trag ihn unter ⚙️ Mehr → Einstellungen ein.");
    const body = {
      model: model || "claude-opus-5-5",
      max_tokens: maxTokens,
      system,
      messages,
      // Falls ein Sicherheitsfilter ablehnt, springt automatisch ein passendes Modell ein.
      fallbacks: "default"
    };
    if (format) body.output_config = { format };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2026-10-21",
        "anthropic-beta": "server-side-fallback-2026-07-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify(body)
    });

    let data;
    try { data = await res.json(); } catch { data = null; }
    if (!res.ok) {
      const msg = data && data.error && data.error.message ? data.error.message : res.statusText;
      if (res.status === 401) throw new Error("API-Key ungültig (401). Bitte in den Einstellungen prüfen.");
      if (res.status === 429) throw new Error("Zu viele Anfragen (429). Kurz warten und nochmal versuchen.");
      if (res.status === 529 || res.status >= 500) throw new Error("Claude ist gerade überlastet (" + res.status + "). Gleich nochmal probieren.");
      throw new Error("Fehler " + res.status + ": " + msg);
    }
    if (data.stop_reason === "refusal") {
      throw new Error("Claude hat diese Anfrage abgelehnt.");
    }
    const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n").trim();
    return { text, stopReason: data.stop_reason };
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result).split(",")[1]);
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }

  const CARD_SCHEMA = {
    type: "object",
    additionalProperties: false,
    required: ["deckName", "cards", "quiz"],
    properties: {
      deckName: { type: "string" },
      cards: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["q", "a", "hint"],
          properties: { q: { type: "string" }, a: { type: "string" }, hint: { type: "string" } }
        }
      },
      quiz: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["q", "options", "correct", "explain"],
          properties: {
            q: { type: "string" },
            options: { type: "array", items: { type: "string" } },
            correct: { type: "integer" },
            explain: { type: "string" }
          }
        }
      }
    }
  };

  /** Erstellt Karteikarten + Quiz aus Text und/oder Dateien (PDF, Bilder). */
  async function generateCards({ apiKey, model, text, files, topic, count }) {
    const content = [];
    for (const f of files || []) {
      const data = await fileToBase64(f);
      if (f.type === "application/pdf") {
        content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data } });
      } else if (f.type.startsWith("image/")) {
        content.push({ type: "image", source: { type: "base64", media_type: f.type, data } });
      } else {
        content.push({ type: "text", text: "Datei " + f.name + ":\n" + (await f.text()) });
      }
    }
    if (text && text.trim()) content.push({ type: "text", text: "Lernzettel:\n" + text.trim() });
    content.push({
      type: "text",
      text:
        "Erstelle aus diesem Lernmaterial Karteikarten zum Lernen für die Uni." +
        (topic ? " Thema/Stapelname: " + topic + "." : "") +
        " Ziel: ca. " + (count || 20) + " Karteikarten (je nach Stoffmenge mehr oder weniger) und 5–8 Multiple-Choice-Quizfragen mit je 4 Antwortmöglichkeiten." +
        " Regeln: Deutsch. Eine Karte = ein Fakt/Konzept. Fragen präzise, Antworten kurz (1–3 Sätze), aber vollständig." +
        " 'hint' ist ein kurzer Merkhinweis oder leer. 'correct' ist der 0-basierte Index der richtigen Option." +
        " Halte dich an den Inhalt des Materials und erfinde nichts dazu."
    });

    const { text: out } = await send({
      apiKey, model,
      system: "Du bist ein Lern-Coach für einen Studenten und erstellst hochwertige Karteikarten.",
      messages: [{ role: "user", content }],
      format: { type: "json_schema", schema: CARD_SCHEMA }
    });
    const match = out.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Antwort von Claude konnte nicht gelesen werden.");
    return JSON.parse(match[0]);
  }

  return { send, generateCards };
})();
