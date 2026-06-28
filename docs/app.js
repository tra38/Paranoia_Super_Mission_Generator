(function () {
  "use strict";

  const DATA = window.PARANOIA_GRAMMARS;
  const state = {
    mode: "basic",
    view: "edit",
    prompt: "Trust The Computer!",
    overdog: "",
    underdog: "",
    generatedText: "",
  };

  const els = {
    basicPrompt: document.getElementById("basicPrompt"),
    customPrompt: document.getElementById("customPrompt"),
    overdogName: document.getElementById("overdogName"),
    underdogName: document.getElementById("underdogName"),
    searchTerm: document.getElementById("searchTerm"),
    maxAttempts: document.getElementById("maxAttempts"),
    railroadProgress: document.getElementById("railroadProgress"),
    railroadStatus: document.getElementById("railroadStatus"),
    missionText: document.getElementById("missionText"),
    missionPreview: document.getElementById("missionPreview"),
    missionViews: document.querySelector(".mission-views"),
    statusLine: document.getElementById("statusLine"),
    seedLabel: document.getElementById("seedLabel"),
    overdogLabel: document.getElementById("overdogLabel"),
    underdogLabel: document.getElementById("underdogLabel"),
    wordCount: document.getElementById("wordCount"),
  };

  class GrammarEngine {
    constructor(grammar, random, memo = {}) {
      this.grammar = grammar;
      this.random = random;
      this.memo = { ...memo };
      this.unique = new Map();
    }

    generate(ruleName = "start", options = {}) {
      if (options.memoize && Object.prototype.hasOwnProperty.call(this.memo, ruleName)) {
        return this.memo[ruleName];
      }

      if (!this.grammar[ruleName]) {
        return this.memo[ruleName] ?? "";
      }

      const choice = this.pickChoice(ruleName, Boolean(options.unique));
      const output = this.expand(choice.value, 0);
      if (options.memoize) {
        this.memo[ruleName] = output;
      }
      return output;
    }

    pickChoice(ruleName, unique) {
      const choices = this.grammar[ruleName] || [];
      if (!choices.length) {
        return { value: "" };
      }

      let indexes = choices.map((_, index) => index);
      if (unique) {
        const used = this.unique.get(ruleName) || new Set();
        indexes = indexes.filter((index) => !used.has(index));
        if (!indexes.length) {
          used.clear();
          indexes = choices.map((_, index) => index);
        }
      }

      const total = indexes.reduce((sum, index) => sum + choices[index].weight, 0);
      let target = this.random() * total;
      let selectedIndex = indexes[indexes.length - 1];
      for (const index of indexes) {
        target -= choices[index].weight;
        if (target < 0) {
          selectedIndex = index;
          break;
        }
      }

      if (unique) {
        if (!this.unique.has(ruleName)) {
          this.unique.set(ruleName, new Set());
        }
        this.unique.get(ruleName).add(selectedIndex);
      }

      return choices[selectedIndex];
    }

    expand(template, depth) {
      if (depth > 120) {
        return "";
      }

      return String(template).replace(/\{([@$]?[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)\}/g, (_match, expression) => {
        return this.expandExpression(expression, depth + 1);
      });
    }

    expandExpression(expression, depth) {
      const parts = expression.split(".");
      const head = parts.shift();
      const prefix = head[0] === "@" || head[0] === "$" ? head[0] : "";
      const ruleName = prefix ? head.slice(1) : head;

      let output;
      if (prefix === "@") {
        output = this.generate(ruleName, { memoize: true });
      } else if (prefix === "$") {
        output = this.generate(ruleName, { unique: true });
      } else if (Object.prototype.hasOwnProperty.call(this.memo, ruleName) && !this.grammar[ruleName]) {
        output = this.memo[ruleName];
      } else {
        output = this.generate(ruleName);
      }

      for (const filter of parts) {
        output = applyFilter(output, filter);
      }
      return this.expand(output, depth);
    }
  }

  function applyFilter(input, filter) {
    const value = String(input);
    if (filter === "capitalize") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    if (filter === "downcase_first_letter") {
      return value.charAt(0).toLowerCase() + value.slice(1);
    }
    if (filter === "indefinite_article") {
      return `${/^[aeiou]/i.test(value.trim()) ? "an" : "a"} ${value}`;
    }
    return value;
  }

  function generateMission(prompt, customNames) {
    const names = customNames || generateNames(prompt);
    const engine = new GrammarEngine(
      DATA.mission,
      randomFromText(prompt, "mission"),
      {
        mission_name: prompt,
        overdog_name: names.overdog,
        underdog_name: names.underdog,
      }
    );
    const text = normalizeMissionText(engine.generate("start"));
    return { text, names, prompt };
  }

  function generateNames(prompt) {
    const engines = {
      names: new GrammarEngine(DATA.names, randomFromText(prompt, "names")),
      sector: new GrammarEngine(DATA.sector, randomFromText(prompt, "sector")),
      cloneNumber: new GrammarEngine(DATA.cloneNumber, randomFromText(prompt, "clone-number")),
      highClearance: new GrammarEngine(DATA.highClearance, randomFromText(prompt, "high-clearance")),
      lowClearance: new GrammarEngine(DATA.lowClearance, randomFromText(prompt, "low-clearance")),
    };

    const overdog = generateClone(engines, false);
    const underdog = generateClone(engines, true);
    return { overdog, underdog };
  }

  function generateClone(engines, isUnderdog) {
    const name = engines.names.generate("start");
    const clearance = isUnderdog ? engines.lowClearance.generate("start") : engines.highClearance.generate("start");
    const sector = engines.sector.generate("start");
    const number = engines.cloneNumber.generate("start");
    return `${name}-${clearance}-${sector}-${number}`;
  }

  function normalizeMissionText(text) {
    return String(text)
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.replace(/[ \t]+$/g, ""))
      .join("\n")
      .trim();
  }

  function randomFromText(text, salt) {
    const seed = cyrb128(`${salt}:${text}`);
    return sfc32(seed[0], seed[1], seed[2], seed[3]);
  }

  function cyrb128(input) {
    let h1 = 1779033703;
    let h2 = 3144134277;
    let h3 = 1013904242;
    let h4 = 2773480762;
    for (let index = 0; index < input.length; index += 1) {
      const code = input.charCodeAt(index);
      h1 = h2 ^ Math.imul(h1 ^ code, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ code, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ code, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ code, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [(h1 ^ h2 ^ h3 ^ h4) >>> 0, (h2 ^ h1) >>> 0, (h3 ^ h1) >>> 0, (h4 ^ h1) >>> 0];
  }

  function sfc32(a, b, c, d) {
    return function next() {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      const t = (a + b) | 0;
      a = b ^ (b >>> 9);
      b = (c + (c << 3)) | 0;
      c = (c << 21) | (c >>> 11);
      d = (d + 1) | 0;
      const result = (t + d) | 0;
      c = (c + result) | 0;
      return (result >>> 0) / 4294967296;
    };
  }

  function renderMarkdown(markdown) {
    const lines = normalizeMissionText(markdown).split("\n");
    const html = [];
    let paragraph = [];
    let list = null;

    function flushParagraph() {
      if (!paragraph.length) {
        return;
      }
      html.push(`<p>${inlineFormat(paragraph.join(" "))}</p>`);
      paragraph = [];
    }

    function flushList() {
      if (!list) {
        return;
      }
      html.push(`</${list}>`);
      list = null;
    }

    function ensureList(type) {
      flushParagraph();
      if (list && list !== type) {
        flushList();
      }
      if (!list) {
        list = type;
        html.push(`<${type}>`);
      }
    }

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        flushList();
        continue;
      }

      const h1 = /^\*\*(.+)\*\*$/.exec(line);
      if (h1) {
        flushParagraph();
        flushList();
        html.push(`<h1>${inlineFormat(h1[1])}</h1>`);
        continue;
      }

      const h2 = /^\*([^*]+)\*\s*-\s*(.*)$/.exec(line);
      if (h2) {
        flushParagraph();
        flushList();
        html.push(`<h2>${inlineFormat(h2[1])}</h2>`);
        if (h2[2]) {
          paragraph.push(h2[2]);
        }
        continue;
      }

      if (isStandaloneHeading(line)) {
        flushParagraph();
        flushList();
        html.push(`<h3>${inlineFormat(line)}</h3>`);
        continue;
      }

      const ordered = /^(\d+)\.\s+(.+)$/.exec(line);
      if (ordered) {
        ensureList("ol");
        html.push(`<li>${inlineFormat(ordered[2])}</li>`);
        continue;
      }

      const unordered = /^-\s+(.+)$/.exec(line);
      if (unordered) {
        ensureList("ul");
        html.push(`<li>${inlineFormat(unordered[1])}</li>`);
        continue;
      }

      flushList();
      paragraph.push(line);
    }

    flushParagraph();
    flushList();
    return html.join("\n");
  }

  function isStandaloneHeading(line) {
    return /^(Normal Missions|Spy Missions \(.*\)|Alternative Missions \(.*\)|Locations|Bureacracies|Excuses \(Information\)|Equipment Denial|Clerks|Clues|Evidence|Rumors \(.*\))\s*:?$/.test(line);
  }

  function inlineFormat(value) {
    return escapeHtml(value)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setMission(result, sourceMode) {
    state.mode = sourceMode || state.mode;
    state.prompt = result.prompt;
    state.overdog = result.names.overdog;
    state.underdog = result.names.underdog;
    state.generatedText = result.text;
    els.missionText.value = result.text;
    updatePreview();
    updateMeta();
    setStatus(`Generated "${result.prompt}"`);
  }

  function updatePreview() {
    els.missionPreview.innerHTML = renderMarkdown(els.missionText.value || "");
    const words = (els.missionText.value.match(/\S+/g) || []).length;
    els.wordCount.textContent = String(words);
  }

  function updateMeta() {
    els.seedLabel.textContent = state.prompt || "-";
    els.overdogLabel.textContent = state.overdog || "-";
    els.underdogLabel.textContent = state.underdog || "-";
  }

  function setStatus(message) {
    els.statusLine.textContent = message;
  }

  function setMode(mode) {
    state.mode = mode;
    document.querySelectorAll(".mode-tabs button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".control-panel").forEach((panel) => {
      panel.hidden = panel.dataset.panel !== mode;
    });
    if (mode === "custom" && (!els.overdogName.value || !els.underdogName.value)) {
      suggestNames();
    }
  }

  function setView(view) {
    state.view = view;
    document.querySelectorAll(".view-tabs button").forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    els.missionViews.classList.toggle("edit-only", view === "edit");
    els.missionViews.classList.toggle("preview-only", view === "preview");
    els.missionText.hidden = view !== "edit";
    els.missionPreview.hidden = view !== "preview";
  }

  function generateBasic() {
    const prompt = els.basicPrompt.value.trim() || "Untitled Mission";
    els.basicPrompt.value = prompt;
    setMission(generateMission(prompt), "basic");
  }

  function suggestNames() {
    const prompt = els.customPrompt.value.trim() || "Untitled Mission";
    const names = generateNames(prompt);
    els.overdogName.value = names.overdog;
    els.underdogName.value = names.underdog;
    state.overdog = names.overdog;
    state.underdog = names.underdog;
    updateMeta();
    setStatus("Names suggested");
  }

  function generateCustom() {
    const prompt = els.customPrompt.value.trim() || "Untitled Mission";
    els.customPrompt.value = prompt;
    const generatedNames = generateNames(prompt);
    const names = {
      overdog: els.overdogName.value.trim() || generatedNames.overdog,
      underdog: els.underdogName.value.trim() || generatedNames.underdog,
    };
    els.overdogName.value = names.overdog;
    els.underdogName.value = names.underdog;
    setMission(generateMission(prompt, names), "custom");
  }

  async function runRailroadSearch() {
    const term = els.searchTerm.value.trim();
    if (!term) {
      setStatus("Search term required");
      els.railroadStatus.textContent = "Search term required";
      return;
    }

    const maxAttempts = clamp(Number(els.maxAttempts.value) || 1000, 1, 10000);
    els.maxAttempts.value = String(maxAttempts);
    els.railroadProgress.max = maxAttempts;
    els.railroadProgress.value = 0;
    els.railroadStatus.textContent = "Searching";
    setBusy(true);

    const codeEngine = new GrammarEngine(
      DATA.mission,
      randomFromText(`${term}:${Date.now()}:${Math.random()}`, "railroad")
    );
    const needle = term.toLocaleLowerCase();

    try {
      for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        const prompt = codeEngine.generate("codename");
        const result = generateMission(prompt);

        if (result.text.toLocaleLowerCase().includes(needle)) {
          els.railroadProgress.value = attempt;
          els.railroadStatus.textContent = `Found after ${attempt} attempt${attempt === 1 ? "" : "s"}: ${prompt}`;
          els.basicPrompt.value = prompt;
          els.customPrompt.value = prompt;
          els.overdogName.value = result.names.overdog;
          els.underdogName.value = result.names.underdog;
          setMission(result, "railroad");
          return;
        }

        if (attempt % 20 === 0 || attempt === maxAttempts) {
          els.railroadProgress.value = attempt;
          els.railroadStatus.textContent = `Attempt ${attempt} of ${maxAttempts}`;
          await waitForFrame();
        }
      }

      els.railroadStatus.textContent = "No matching mission found";
      setStatus("No matching mission found");
    } finally {
      setBusy(false);
    }
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function waitForFrame() {
    return new Promise((resolve) => window.requestAnimationFrame(resolve));
  }

  function setBusy(isBusy) {
    document.querySelectorAll("button").forEach((button) => {
      if (button.id !== "generateRailroad") {
        button.disabled = isBusy;
      }
    });
    document.getElementById("generateRailroad").disabled = isBusy;
  }

  async function copyText(text, successMessage) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const scratch = document.createElement("textarea");
        scratch.value = text;
        scratch.setAttribute("readonly", "");
        scratch.style.position = "fixed";
        scratch.style.left = "-9999px";
        document.body.appendChild(scratch);
        scratch.select();
        document.execCommand("copy");
        scratch.remove();
      }
      setStatus(successMessage);
    } catch (_error) {
      setStatus("Copy failed");
    }
  }

  function exportHtmlDocument() {
    const title = state.prompt || "Paranoia Mission";
    const body = renderMarkdown(els.missionText.value);
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
body{margin:0;background:#f4f3ef;color:#181512;font:16px/1.55 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
main{max-width:860px;margin:0 auto;padding:40px 22px}
h1{font-size:2.25rem;line-height:1.05;border-bottom:3px solid #bd1220;padding-bottom:12px}
h2{font-size:1.08rem;color:#7f0e17;margin-top:28px}
h3{font-size:1rem;margin-top:24px}
li{margin:5px 0}
</style>
</head>
<body>
<main>
${body}
</main>
</body>
</html>`;
  }

  function downloadHtml() {
    const blob = new Blob([exportHtmlDocument()], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${safeFileName(state.prompt || "paranoia-mission")}.html`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    link.remove();
    setStatus("HTML downloaded");
  }

  function safeFileName(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || "mission";
  }

  function printMission() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      setStatus("Print window blocked");
      return;
    }
    printWindow.document.write(exportHtmlDocument());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    setStatus("Print view opened");
  }

  function buildShareLink() {
    const params = new URLSearchParams();
    params.set("mode", state.mode);
    params.set("prompt", state.prompt || "");
    params.set("overdog", state.overdog || "");
    params.set("underdog", state.underdog || "");
    if (els.missionText.value && els.missionText.value !== state.generatedText) {
      params.set("text", encodeBase64(els.missionText.value));
    }

    const base = window.location.href.split("#")[0];
    return `${base}#${params.toString()}`;
  }

  function loadFromHash() {
    if (!window.location.hash.slice(1)) {
      return false;
    }

    const params = new URLSearchParams(window.location.hash.slice(1));
    const prompt = params.get("prompt") || "Trust The Computer!";
    const mode = params.get("mode") || "basic";
    const overdog = params.get("overdog") || "";
    const underdog = params.get("underdog") || "";
    const text = params.get("text");

    els.basicPrompt.value = prompt;
    els.customPrompt.value = prompt;
    if (overdog) {
      els.overdogName.value = overdog;
    }
    if (underdog) {
      els.underdogName.value = underdog;
    }
    setMode(["basic", "custom", "railroad"].includes(mode) ? mode : "basic");

    if (text) {
      const names = { overdog: overdog || "-", underdog: underdog || "-" };
      state.prompt = prompt;
      state.overdog = names.overdog;
      state.underdog = names.underdog;
      state.generatedText = "";
      els.missionText.value = decodeBase64(text);
      updatePreview();
      updateMeta();
      setStatus("Loaded shared mission");
      return true;
    }

    if (overdog && underdog) {
      setMission(generateMission(prompt, { overdog, underdog }), mode);
    } else {
      setMission(generateMission(prompt), mode);
    }
    return true;
  }

  function encodeBase64(value) {
    const bytes = new TextEncoder().encode(value);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function decodeBase64(value) {
    const binary = atob(value);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function bindEvents() {
    document.querySelectorAll(".mode-tabs button").forEach((button) => {
      button.addEventListener("click", () => setMode(button.dataset.mode));
    });
    document.querySelectorAll(".view-tabs button").forEach((button) => {
      button.addEventListener("click", () => setView(button.dataset.view));
    });

    document.getElementById("generateBasic").addEventListener("click", generateBasic);
    document.getElementById("suggestNames").addEventListener("click", suggestNames);
    document.getElementById("generateCustom").addEventListener("click", generateCustom);
    document.getElementById("generateRailroad").addEventListener("click", runRailroadSearch);

    els.customPrompt.addEventListener("change", suggestNames);
    els.missionText.addEventListener("input", updatePreview);

    document.getElementById("copyMarkdown").addEventListener("click", () => copyText(els.missionText.value, "Markdown copied"));
    document.getElementById("copyHtml").addEventListener("click", () => copyText(exportHtmlDocument(), "HTML copied"));
    document.getElementById("copyLink").addEventListener("click", () => copyText(buildShareLink(), "Link copied"));
    document.getElementById("downloadHtml").addEventListener("click", downloadHtml);
    document.getElementById("printMission").addEventListener("click", printMission);
  }

  function init() {
    if (!DATA) {
      setStatus("Grammar data missing");
      return;
    }
    bindEvents();
    setView("edit");
    if (!loadFromHash()) {
      generateBasic();
    }
  }

  init();
})();
