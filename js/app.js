/* IB Physics SL Revision Checklist
   - Checklist items come from data/topics.js (window.TOPICS)
   - Questions and links come from data/content/theme*.js (window.CONTENT)
   - Progress is stored in localStorage on the student's device */
(function () {
  "use strict";

  const STORE_KEY = "ibphys-sl-revision-v1";
  const TOPICS = window.TOPICS || [];
  const CONTENT = window.CONTENT || {};
  const TYPE_LABEL = { notes: "Notes", video: "Video", simulation: "Simulation", questions: "Questions", flashcards: "Flashcards" };

  // ---------- Saved progress ----------
  // state.done[itemId] = true when the student has ticked it
  // state.qc[itemId] = { s: score, t: total } for the latest quick check
  let state = { done: {}, qc: {} };
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) state = Object.assign({ done: {}, qc: {} }, JSON.parse(raw));
    } catch (e) { /* private browsing etc. – just run without saving */ }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---------- Small helpers ----------
  // el("div", {class: "x"}, child, child...) builds DOM safely (text is never parsed as HTML)
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) if (kid != null && kid !== false && kid !== 0) n.append(kid);
    return n;
  }
  const allItems = () => TOPICS.flatMap(t => t.subtopics.flatMap(s => s.items));
  const subById = id => TOPICS.flatMap(t => t.subtopics).find(s => s.id === id);
  const needsWork = id => state.qc[id] && state.qc[id].s < state.qc[id].t;
  const isNumeric = opts => opts.every(o => /^[\s\-−+]?[\d.]/.test(o));
  function shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
    return b;
  }

  // ---------- Checklist ----------
  let filter = "all", search = "";
  const openSubs = new Set();
  const app = document.getElementById("app");

  function itemVisible(item) {
    if (search && !item.text.toLowerCase().includes(search)) return false;
    if (filter === "todo") return !state.done[item.id];
    if (filter === "done") return !!state.done[item.id];
    if (filter === "unsure") return needsWork(item.id);
    return true;
  }

  function render() {
    app.replaceChildren();
    let shown = 0;
    for (const theme of TOPICS) {
      const subsEls = [];
      for (const sub of theme.subtopics) {
        const vis = sub.items.filter(itemVisible);
        const titleMatch = search && sub.title.toLowerCase().includes(search);
        const items = titleMatch && filter === "all" ? sub.items : vis;
        if (!items.length) continue;
        shown += items.length;
        subsEls.push(renderSub(sub, items));
      }
      if (!subsEls.length) continue;
      const done = theme.subtopics.flatMap(s => s.items).filter(i => state.done[i.id]).length;
      const total = theme.subtopics.reduce((n, s) => n + s.items.length, 0);
      app.append(el("section", { class: "theme" },
        el("h2", {}, `${theme.id}. ${theme.title}`, el("small", {}, `${done}/${total} revised`)),
        subsEls));
    }
    if (!shown) app.append(el("p", { class: "empty" }, "Nothing matches. Try another search or filter."));
    updateOverall();
  }

  function renderSub(sub, items) {
    const done = sub.items.filter(i => state.done[i.id]).length;
    const pct = Math.round(100 * done / sub.items.length);
    const autoOpen = openSubs.has(sub.id) || !!search || filter !== "all";
    const det = el("details", { class: "sub", open: autoOpen },
      el("summary", {},
        el("span", { class: "chev", "aria-hidden": "true" }, "▸"),
        el("span", { class: "stitle" }, `${sub.id} ${sub.title}`, el("span", { class: "code" }, sub.code)),
        el("div", { class: "mini", "aria-hidden": "true" }, el("div", { style: `width:${pct}%` })),
        el("span", { class: "count" }, `${done}/${sub.items.length}`)),
      el("div", { class: "sub-actions" },
        el("button", { class: "btn", onclick: () => openRevise(sub, "links") }, "📚 Revision links"),
        el("button", { class: "btn", onclick: () => openRevise(sub, "exam") }, "📝 Exam-style questions")),
      el("ul", { class: "items" }, items.map(renderItem)));
    det.addEventListener("toggle", () => det.open ? openSubs.add(sub.id) : openSubs.delete(sub.id));
    return det;
  }

  function renderItem(item) {
    const cb = el("input", { type: "checkbox", id: "cb-" + item.id, checked: !!state.done[item.id],
      onchange: e => { if (e.target.checked) state.done[item.id] = true; else delete state.done[item.id]; save(); render(); } });
    const qc = state.qc[item.id];
    const badge = qc ? el("span", { class: "badge " + (qc.s === qc.t ? "good" : "warn") },
      qc.s === qc.t ? `Quick check ${qc.s}/${qc.t} ✓` : `Quick check ${qc.s}/${qc.t}`) : null;
    const hasQs = ((CONTENT[subOf(item)] || {}).quickCheck || []).some(q => q.item === item.id);
    return el("li", { class: "item" + (state.done[item.id] ? " done" : "") },
      el("label", { for: "cb-" + item.id }, cb, el("span", { class: "txt" }, item.text)),
      el("div", { class: "item-actions" },
        hasQs && el("button", { class: "btn", onclick: () => openQuickCheck(item) }, "Quick check"),
        el("button", { class: "btn", onclick: () => openRevise(subById(subOf(item)), "links") }, "Revise more"),
        badge));
  }
  const subOf = item => item.id.split(".").slice(0, 2).join(".");

  function updateOverall() {
    const items = allItems();
    const done = items.filter(i => state.done[i.id]).length;
    const pct = items.length ? Math.round(100 * done / items.length) : 0;
    document.getElementById("overallFill").style.width = pct + "%";
    document.getElementById("overallText").textContent = `${done} of ${items.length} revised (${pct}%)`;
  }

  // ---------- Modal ----------
  const modal = document.getElementById("modal");
  const mTitle = document.getElementById("modalTitle");
  const mBody = document.getElementById("modalBody");
  function showModal(title, ...content) {
    mTitle.textContent = title;
    mBody.replaceChildren(...content.flat(Infinity).filter(x => x != null && x !== false && x !== 0));
    if (!modal.open) modal.showModal();
    mBody.parentElement.scrollTop = 0;
    modal.scrollTop = 0;
  }
  document.getElementById("modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); }); // click backdrop to close
  modal.addEventListener("close", render);

  // An interactive multiple-choice question. onAnswer(correct) is called once.
  function mcq(q, num, onAnswer) {
    const order = isNumeric(q.options) ? q.options.map((_, i) => i) : shuffle(q.options.map((_, i) => i));
    const box = el("div", { class: "q" });
    const explain = el("div", { class: "explain", hidden: true });
    const btns = order.map((orig, pos) => el("button", { class: "opt", onclick: () => choose(orig) },
      el("span", { class: "l" }, "ABCD"[pos]), el("span", {}, q.options[orig])));
    function choose(orig) {
      const right = orig === q.answer;
      btns.forEach((b, pos) => {
        b.disabled = true;
        if (order[pos] === q.answer) b.classList.add("right");
        else if (order[pos] === orig) b.classList.add("wrong");
      });
      explain.hidden = false;
      explain.textContent = (right ? "✓ Correct. " : "✗ Not quite. ") + (q.explain || "");
      onAnswer && onAnswer(right);
    }
    box.append(el("p", { class: "qtext" }, el("span", { class: "qnum" }, num), q.q), el("div", { class: "opts" }, btns), explain);
    return box;
  }

  // ---------- Quick check ----------
  function openQuickCheck(item) {
    const qs = CONTENT[subOf(item)].quickCheck.filter(q => q.item === item.id);
    let answered = 0, score = 0;
    const result = el("div");
    const list = qs.map((q, i) => mcq(q, `Question ${i + 1} of ${qs.length}`, right => {
      answered++; if (right) score++;
      if (answered === qs.length) finish();
    }));
    function finish() {
      state.qc[item.id] = { s: score, t: qs.length };
      const perfect = score === qs.length;
      if (perfect && !state.done[item.id]) state.done[item.id] = true; // full marks: tick it for them
      save();
      result.replaceChildren(el("div", { class: "result " + (perfect ? "good" : "warn") },
        el("p", {}, el("strong", {}, `You scored ${score}/${qs.length}`)),
        el("p", {}, perfect ? "Great, you've got this one. It has been ticked off your list."
          : "Worth another look. Read the explanations above, then try some revision resources."),
        el("div", { class: "row" },
          el("button", { class: "btn", onclick: () => openQuickCheck(item) }, "Try again"),
          !perfect && el("button", { class: "btn solid", onclick: () => openRevise(subById(subOf(item)), "links") }, "Revise more"),
          el("button", { class: "btn", onclick: () => modal.close() }, "Back to checklist"))));
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    showModal("Quick check", el("p", { class: "context" }, item.text), list, result);
  }

  // ---------- Revise more: links + exam-style questions ----------
  function openRevise(sub, tab) {
    const c = CONTENT[sub.id] || {};
    const tabs = el("div", { class: "tabs", role: "tablist" },
      el("button", { class: tab === "links" ? "active" : "", onclick: () => openRevise(sub, "links") }, "📚 Revision links"),
      el("button", { class: tab === "exam" ? "active" : "", onclick: () => openRevise(sub, "exam") }, "📝 Exam-style questions"));
    const body = tab === "links" ? renderLinks(c.resources || []) : renderExam(c.exam || []);
    showModal(`${sub.id} ${sub.title}`, tabs, body);
  }

  function renderLinks(res) {
    if (!res.length) return el("p", { class: "empty" }, "No links yet for this topic.");
    return el("div", {},
      el("p", { class: "hint" }, "Hand-picked resources for this topic. They open in a new tab."),
      res.map(r => el("a", { class: "res", href: r.url, target: "_blank", rel: "noopener" },
        el("div", { class: "rt" }, r.title, r.type && el("span", { class: "type" }, TYPE_LABEL[r.type] || r.type)),
        el("div", { class: "rs" }, r.source))));
  }

  function renderExam(exam) {
    if (!exam.length) return el("p", { class: "empty" }, "No questions yet for this topic.");
    const mcqs = exam.filter(q => q.type === "mcq");
    const structured = exam.filter(q => q.type === "structured");
    let mScore = 0, mDone = 0;
    const mResult = el("p", { class: "selfscore" });
    return el("div", {},
      el("p", { class: "hint" }, "Original IB-style practice questions. Have a go on paper first, then check against the markscheme."),
      mcqs.length && el("h3", {}, "Paper 1A-style (multiple choice)"),
      mcqs.map((q, i) => mcq(q, `Question ${i + 1}  [1 mark]`, right => {
        mDone++; if (right) mScore++;
        mResult.textContent = `Multiple choice: ${mScore}/${mDone}`;
      })),
      mResult,
      structured.length && el("h3", {}, "Paper 1B / Paper 2-style (structured)"),
      structured.map((q, i) => renderStructured(q, mcqs.length + i + 1)));
  }

  function renderStructured(q, num) {
    const total = q.parts.reduce((n, p) => n + (p.marks || 0), 0);
    const score = el("p", { class: "selfscore" });
    const checks = [];
    const updateScore = () => {
      const got = checks.filter(c => c.checked).length;
      score.textContent = `Self-marked: ${got}/${total}`;
    };
    const parts = q.parts.map((p, i) => {
      const ms = el("div", { class: "ms", hidden: true },
        el("h4", {}, "Markscheme: tick each point you made"),
        p.markscheme.map(line => {
          const c = el("input", { type: "checkbox", onchange: updateScore });
          checks.push(c);
          return el("label", {}, c, el("span", {}, line));
        }));
      const btn = el("button", { class: "btn", onclick: () => { ms.hidden = !ms.hidden; btn.textContent = ms.hidden ? "Show markscheme" : "Hide markscheme"; updateScore(); } }, "Show markscheme");
      return el("div", { class: "part" },
        el("div", { class: "ph" }, el("span", {}, `(${String.fromCharCode(97 + i)}) ${p.q}`), el("span", { class: "marks" }, `[${p.marks}]`)),
        el("div", { style: "margin-top:6px" }, btn), ms);
    });
    return el("div", { class: "q" },
      el("p", { class: "qtext" }, el("span", { class: "qnum" }, `Question ${num}  [${total} marks]`), q.q),
      parts, score);
  }

  // ---------- Save / move progress between devices ----------
  function openProgress() {
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(state))));
    const out = el("textarea", { readonly: true }); out.value = code;
    const inp = el("textarea", { placeholder: "Paste a progress code here" });
    const msg = el("p", { class: "hint", "aria-live": "polite" });
    showModal("Save / move progress",
      el("p", { class: "hint" }, "Progress is stored in this browser only. To move it to another device (or keep a backup), copy this code, e.g. into an email to yourself or your notes."),
      out,
      el("div", { class: "row" },
        el("button", { class: "btn solid", onclick: async () => {
          try { await navigator.clipboard.writeText(code); msg.textContent = "Copied."; }
          catch (e) { out.select(); msg.textContent = "Select the code and copy it."; }
        } }, "Copy code")),
      el("h3", {}, "Load progress from another device"),
      inp,
      el("div", { class: "row" },
        el("button", { class: "btn", onclick: () => {
          try {
            const s = JSON.parse(decodeURIComponent(escape(atob(inp.value.trim()))));
            if (!s || typeof s.done !== "object") throw 0;
            state = Object.assign({ done: {}, qc: {} }, s); save(); msg.textContent = "Progress loaded."; render();
          } catch (e) { msg.textContent = "That code doesn't look right. Check that you copied all of it."; }
        } }, "Load code"),
        el("button", { class: "btn", onclick: () => {
          if (confirm("Clear all your ticks and quick-check scores on this device?")) { state = { done: {}, qc: {} }; save(); msg.textContent = "Progress cleared."; render(); }
        } }, "Reset all")),
      msg);
  }
  document.getElementById("progressBtn").addEventListener("click", openProgress);

  // ---------- Toolbar ----------
  document.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === b));
    filter = b.dataset.filter; render();
  }));
  document.getElementById("search").addEventListener("input", e => { search = e.target.value.trim().toLowerCase(); render(); });

  load();
  render();
})();
