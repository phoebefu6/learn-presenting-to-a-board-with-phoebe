/* brd-live.js - the RAG rule bench for learn-presenting-to-a-board-with-phoebe
 *
 * Input: REAL rows. NHS England's monthly share of A&E attendances seen within four hours, England,
 * all A&E types, June 2023 to September 2026, in basis points (brd-sample.js, Open Government
 * Licence v3.0). The months from April 2024 are rated: 30 months.
 * COMPUTED here, for every rated month: a red, amber or green status under the rule you choose.
 *   target   formal = 95% every month; interim = the financial year's NHS England milestone
 *            (78% for 2024/25 and 2025/26, 82% for 2026/27) applied to every month of that year.
 *   level    green if the share >= target - b; amber if >= target - 2b; red otherwise (b = tolerance).
 *   trend    d = share now - share N months earlier; green if d >= +0.5 points, red if d <= -0.5,
 *            amber otherwise. The window N is the model's choice, and labelled so.
 *   combined the worse of level and trend.
 *   "green while declining": green under the rule while d <= -0.5 points.
 *   ANTI-LEVER "green-by-rule": interim target, level rule, a 5-point tolerance (the most greens
 *            any setting here can print).
 *   BREAK BUTTON "latest month only": what a board shown one month sees, against the series.
 * The Python reference (materials/brd_reference.py) runs the same steps on the same integers;
 * materials/compare-ladder.py checks the two by value.
 */
(function (root) {
  "use strict";

  var RULES = ["level", "trend", "combined"];
  var TARGETS = ["formal", "interim"];
  var BANDS = [0, 100, 200, 300, 400, 500];
  var WINDOWS = [3, 6, 9];
  var FLAT = 50;
  var RANK = { G: 0, A: 1, R: 2 };
  var PRESETS = [
    { id: "formal", label: "Formal target, month by month", note: "95% every month, no tolerance.", cfg: { target: "formal", rule: "level", band: 0, window: 6 } },
    { id: "interim", label: "Interim target, month by month", note: "This year's NHS England milestone, no tolerance.", cfg: { target: "interim", rule: "level", band: 0, window: 6 } },
    { id: "tolerance", label: "Interim target, 2-point tolerance", note: "Green within 2 points of the milestone, amber within 4.", cfg: { target: "interim", rule: "level", band: 200, window: 6 } },
    { id: "trend", label: "Trend only, 6 months", note: "Up half a point or more is green, down half a point is red.", cfg: { target: "interim", rule: "trend", band: 0, window: 6 } },
    { id: "combined", label: "Level and trend together", note: "Green only when the level and the trend are both green.", cfg: { target: "interim", rule: "combined", band: 200, window: 6 } },
    { id: "greenbyrule", label: "Green-by-rule", note: "Interim target and a 5-point tolerance: the setting that prints the most greens.", anti: true, cfg: { target: "interim", rule: "level", band: 500, window: 6 } }
  ];

  /* ---------- engine (mirrors the Python reference, step for step) ---------- */
  function level(v, T, b) { return v >= T - b ? "G" : (v >= T - 2 * b ? "A" : "R"); }
  function trend(d) { return d >= FLAT ? "G" : (d <= -FLAT ? "R" : "A"); }

  function evaluate(data, target, rule, band, win) {
    var months = data.months, v = data.pct_bp, start = months.indexOf(data.first_rated), out = [];
    for (var t = start; t < months.length; t++) {
      var T = target === "formal" ? data.formal_bp : data.interim_bp[t];
      var d = v[t] - v[t - win];
      var lv = level(v[t], T, band), tr = trend(d), s;
      if (rule === "level") s = lv;
      else if (rule === "trend") s = tr;
      else s = RANK[lv] >= RANK[tr] ? lv : tr;
      out.push({ month: months[t], v: v[t], T: T, d: d, s: s, declining: d <= -FLAT });
    }
    var counts = { G: 0, A: 0, R: 0 }, wm = 0, dec = 0;
    out.forEach(function (m) { counts[m.s] += 1; if (m.declining) dec += 1; if (m.s === "G" && m.declining) wm += 1; });
    var last = out[out.length - 1];
    return {
      colours: out.map(function (m) { return m.s; }).join(""),
      counts: counts, watermelon: wm, declining: dec,
      latest: { month: last.month, v: last.v, T: last.T, d: last.d, s: last.s },
      months: out
    };
  }

  function strip(r) { var o = {}; Object.keys(r).forEach(function (k) { if (k !== "months") o[k] = r[k]; }); return o; }
  function key(tg, r, b, n) { return tg + "|" + r + "|" + b + "|" + n; }

  function canon(data) {
    var grid = {}, best = null;
    TARGETS.forEach(function (tg) { RULES.forEach(function (r) { BANDS.forEach(function (b) { WINDOWS.forEach(function (n) {
      var k = key(tg, r, b, n), x = strip(evaluate(data, tg, r, b, n));
      grid[k] = x;
      if (best === null || x.counts.G > grid[best].counts.G || (x.counts.G === grid[best].counts.G && x.watermelon > grid[best].watermelon)) best = k;
    }); }); }); });
    var presets = {};
    PRESETS.forEach(function (p) { presets[p.id] = strip(evaluate(data, p.cfg.target, p.cfg.rule, p.cfg.band, p.cfg.window)); });
    return { rated: presets.formal.colours.length, grid: grid, presets: presets, max_green_key: best, max_green: grid[best].counts.G };
  }

  /* ---------- UI ---------- */
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var WORD = { G: "green", A: "amber", R: "red" };
  var rootEl, data, els = {};
  var state = { target: "interim", rule: "level", band: 200, window: 6, latest: false };

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function pct(bp) { return (bp / 100).toFixed(1) + "%"; }
  function pts(bp) { return (bp >= 0 ? "+" : "-") + (Math.abs(bp) / 100).toFixed(2) + " points"; }
  function mlong(ym) { return MONL[+ym.slice(5) - 1] + " " + ym.slice(0, 4); }
  function mshort(ym) { return MON[+ym.slice(5) - 1] + " " + ym.slice(2, 4); }
  function presetId() {
    for (var i = 0; i < PRESETS.length; i++) {
      var c = PRESETS[i].cfg;
      var same = c.target === state.target && c.rule === state.rule && c.window === state.window &&
        (c.rule === "trend" || c.band === state.band);
      if (same) return PRESETS[i].id;
    }
    return null;
  }

  function chartSvg(r) {
    var W = 860, H = 250, x0 = 46, x1 = 846, yTop = 30, yBot = 168, lo = 6800, hi = 8400;
    var n = r.months.length, step = (x1 - x0) / n;
    var sx = function (i) { return x0 + step * (i + 0.5); };
    var sy = function (bp) { return yBot - (yBot - yTop) * (Math.min(hi, Math.max(lo, bp)) - lo) / (hi - lo); };
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Monthly share of A&amp;E attendances within four hours, ' +
      mlong(r.months[0].month) + " to " + mlong(r.months[n - 1].month) + ", with the target line and one coloured cell per month under the chosen rule.\">";
    [6800, 7200, 7600, 8000, 8400].forEach(function (g) {
      s += '<line class="brd-grid" x1="' + x0 + '" y1="' + sy(g) + '" x2="' + x1 + '" y2="' + sy(g) + '"/>' +
        '<text class="brd-ax" x="' + (x0 - 6) + '" y="' + (sy(g) + 4) + '" text-anchor="end">' + (g / 100) + "%</text>";
    });
    if (state.target === "formal") {
      s += '<text class="brd-tl" x="' + (x1 - 4) + '" y="' + (yTop - 12) + '" text-anchor="end">formal target 95% sits far above this chart</text>';
    } else {
      var path = "", bandTop = "", i;
      for (i = 0; i < n; i++) {
        var a = sx(i) - step / 2, b = sx(i) + step / 2, y = sy(r.months[i].T);
        path += (i === 0 ? "M" : "L") + a.toFixed(1) + " " + y.toFixed(1) + " L" + b.toFixed(1) + " " + y.toFixed(1) + " ";
        if (state.rule !== "trend" && state.band > 0) {
          var yb = sy(r.months[i].T - state.band);
          bandTop += '<rect class="brd-band" x="' + a.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + step.toFixed(1) + '" height="' + Math.max(0, yb - y).toFixed(1) + '"/>';
        }
      }
      s += bandTop + '<path class="brd-target" d="' + path + '"/>' +
        '<text class="brd-tl" x="' + (x1 - 4) + '" y="' + (sy(r.months[n - 1].T) - 8) + '" text-anchor="end">interim milestone</text>';
    }
    var line = "";
    r.months.forEach(function (m, i) { line += (i === 0 ? "M" : "L") + sx(i).toFixed(1) + " " + sy(m.v).toFixed(1) + " "; });
    s += '<path class="brd-line' + (state.latest ? " is-hidden" : "") + '" d="' + line + '"/>';
    r.months.forEach(function (m, i) {
      var hide = state.latest && i < n - 1;
      s += '<circle class="brd-pt' + (hide ? " is-hidden" : "") + '" cx="' + sx(i).toFixed(1) + '" cy="' + sy(m.v).toFixed(1) + '" r="2.6"/>';
      s += '<rect class="brd-cell brd-' + m.s + (hide ? " is-hidden" : "") + '" x="' + (sx(i) - step / 2 + 1).toFixed(1) + '" y="182" width="' + (step - 2).toFixed(1) + '" height="20" rx="3"><title>' +
        esc(mlong(m.month) + ": " + pct(m.v) + ", " + WORD[m.s] + ", " + state.window + "-month change " + pts(m.d) + (m.declining ? ", declining" : "")) + "</title></rect>";
      if (!hide) s += '<text class="brd-cl brd-cl' + m.s + '" x="' + sx(i).toFixed(1) + '" y="196" text-anchor="middle">' + m.s + "</text>";
      if (m.s === "G" && m.declining && !hide) s += '<path class="brd-wm" d="M' + (sx(i) - 4).toFixed(1) + " 208 L" + (sx(i) + 4).toFixed(1) + " 208 L" + sx(i).toFixed(1) + ' 215 Z"/>';
      if (i % 3 === 0) s += '<text class="brd-ax" x="' + sx(i).toFixed(1) + '" y="232" text-anchor="middle">' + mshort(m.month) + "</text>";
    });
    return s + "</svg>";
  }

  function render() {
    var pid = presetId();
    Object.keys(els.presetBtns).forEach(function (id) {
      els.presetBtns[id].classList.toggle("is-on", id === pid);
      els.presetBtns[id].querySelector("input").checked = id === pid;
    });
    Object.keys(els.radios).forEach(function (k) { els.radios[k].forEach(function (inp) { inp.checked = String(state[k]) === inp.value; }); });
    els.band.value = state.band / 100;
    els.bandOut.textContent = (state.band / 100) + (state.band === 100 ? " point" : " points");
    els.bandRow.classList.toggle("is-off", state.rule === "trend");
    els.brk.classList.toggle("is-on", state.latest);
    els.brk.querySelector("input").checked = state.latest;

    var r = evaluate(data, state.target, state.rule, state.band, state.window);
    var c = r.counts, L = r.latest, n = r.months.length;
    var v = "Under this rule, " + n + " rated months: " + c.G + " green, " + c.A + " amber, " + c.R + " red. " +
      r.watermelon + " month" + (r.watermelon === 1 ? " is" : "s are") + " green while the " + state.window + "-month trend is down half a point or more.";
    var cls = r.watermelon > 0 ? "is-bad" : "is-ok";
    if (state.latest) {
      v = "Latest month only. A board shown " + mlong(L.month) + " alone sees one " + WORD[L.s].toUpperCase() +
        (state.rule === "trend" ? " on its " + state.window + "-month trend" : "") + ": " + pct(L.v) +
        (state.target === "formal" ? " against the formal 95%." : " against the " + pct(L.T) + " milestone.") +
        " The series it does not see: " + c.G + " green, " + c.A + " amber, " + c.R + " red over " + n + " months, and " +
        pts(L.d) + " over the last " + state.window + " months.";
      cls = "is-bad";
    }
    els.verdict.className = "mb-verdict " + cls;
    els.verdict.textContent = v;

    function metric(label, val, unit, kind) {
      return '<div class="mb-metric"><span class="mb-mkind ' + (kind === "computed" ? "is-measured" : "is-heuristic") + '">' + esc(kind) + "</span>" +
        '<span class="mb-mlabel">' + esc(label) + '</span><span class="mb-mvalue">' + esc(val) + '</span><span class="mb-munit">' + esc(unit) + "</span></div>";
    }
    var m = "";
    m += metric("Green", c.G + " of " + n, "months, under this rule", "computed");
    m += metric("Amber", c.A + " of " + n, "months, under this rule", "computed");
    m += metric("Red", c.R + " of " + n, "months, under this rule", "computed");
    m += metric("Green while declining", String(r.watermelon), "months, " + state.window + "-month window", "computed");
    m += metric("Latest month", pct(L.v), mlong(L.month) + ", " + WORD[L.s], "computed");
    m += metric("Trend window", state.window + " months", "the model's choice", "assumption");
    els.metrics.innerHTML = m;
    els.chart.innerHTML = chartSvg(r);

    var t = '<table class="dt-table brd-cmp"><thead><tr><th>Rule</th><th>Green</th><th>Amber</th><th>Red</th><th>Green while declining</th><th>' + esc(mshort(L.month)) + " alone</th></tr></thead><tbody>";
    PRESETS.forEach(function (p) {
      var x = evaluate(data, p.cfg.target, p.cfg.rule, p.cfg.band, p.cfg.window);
      t += "<tr" + (p.id === pid ? ' class="is-cur"' : "") + "><th>" + esc(p.label) + (p.anti ? " <em>anti-lever</em>" : "") + "</th><td>" + x.counts.G + "</td><td>" + x.counts.A + "</td><td>" + x.counts.R +
        "</td><td>" + x.watermelon + '</td><td><span class="brd-chip brd-' + x.latest.s + '">' + WORD[x.latest.s] + "</span></td></tr>";
    });
    els.cmp.innerHTML = t + "</tbody></table>";
  }

  function radioRow(name, label, opts) {
    var row = document.createElement("div"); row.className = "brd-ctl";
    var h = '<span class="brd-ctl-l">' + esc(label) + "</span>";
    opts.forEach(function (o) {
      h += '<label class="brd-opt"><input type="radio" name="brd-' + name + '" value="' + o[0] + '"> ' + esc(o[1]) + "</label>";
    });
    row.innerHTML = h;
    els.radios[name] = [].slice.call(row.querySelectorAll("input"));
    els.radios[name].forEach(function (inp) {
      inp.addEventListener("change", function () { state[name] = name === "window" ? +inp.value : inp.value; render(); });
    });
    return row;
  }

  function buildUI() {
    rootEl.innerHTML = "";
    els.radios = {};
    var panel = document.createElement("div"); panel.className = "mb-presets";
    els.presetBtns = {};
    PRESETS.forEach(function (p) {
      var l = document.createElement("label"); l.className = "mb-preset" + (p.anti ? " is-anti" : "");
      l.innerHTML = '<input type="radio" name="brd-preset" value="' + p.id + '"><span class="mb-pname">' + esc(p.label) +
        (p.anti ? ' <em class="mb-anti">anti-lever</em>' : "") + '</span><span class="mb-pnote">' + esc(p.note) + "</span>";
      l.querySelector("input").addEventListener("change", function () {
        state.target = p.cfg.target; state.rule = p.cfg.rule; state.band = p.cfg.band; state.window = p.cfg.window; render();
      });
      panel.appendChild(l); els.presetBtns[p.id] = l;
    });
    rootEl.appendChild(panel);

    var ctl = document.createElement("div"); ctl.className = "brd-ctls";
    ctl.appendChild(radioRow("target", "Target", [["formal", "Formal 95%"], ["interim", "Interim milestone"]]));
    ctl.appendChild(radioRow("rule", "Rule", [["level", "Level"], ["trend", "Trend"], ["combined", "Level and trend"]]));
    ctl.appendChild(radioRow("window", "Trend window", [["3", "3 months"], ["6", "6 months"], ["9", "9 months"]]));
    var bRow = document.createElement("div"); bRow.className = "ab-caprow";
    bRow.innerHTML = '<label for="brd-band">Tolerance band below target <span class="mb-mkind is-heuristic">convention</span></label>' +
      '<input type="range" id="brd-band" min="0" max="5" step="1" value="2"><output id="brd-bandout">2 points</output>';
    bRow.querySelector("input").addEventListener("input", function (e) { state.band = Math.round(+e.target.value) * 100; render(); });
    ctl.appendChild(bRow); els.band = bRow.querySelector("input"); els.bandOut = bRow.querySelector("output"); els.bandRow = bRow;
    rootEl.appendChild(ctl);

    var tog = document.createElement("div"); tog.className = "mb-presets";
    var l = document.createElement("label"); l.className = "mb-preset is-anti";
    l.innerHTML = '<input type="checkbox" name="brd-latest"><span class="mb-pname">Latest month only <em class="mb-anti">break</em></span>' +
      '<span class="mb-pnote">Report one month, the way a one-line status does, and compare it with the series behind it.</span>';
    l.querySelector("input").addEventListener("change", function (e) { state.latest = e.target.checked; render(); });
    tog.appendChild(l); els.brk = l;
    rootEl.appendChild(tog);

    els.verdict = document.createElement("p"); rootEl.appendChild(els.verdict);
    els.metrics = document.createElement("div"); els.metrics.className = "mb-metrics"; rootEl.appendChild(els.metrics);

    var c1 = document.createElement("div"); c1.className = "ab-card";
    c1.innerHTML = '<h4>The series, and one status per month <span class="mb-mkind is-measured">real rows</span></h4>' +
      '<p class="mb-hint brd-key"><span class="brd-k brd-G"></span>green <span class="brd-k brd-A"></span>amber <span class="brd-k brd-R"></span>red ' +
      '<span class="brd-k brd-kband"></span>tolerance band · ▼ under a cell: green while declining</p>';
    els.chart = document.createElement("div"); els.chart.className = "brd-stage"; c1.appendChild(els.chart);
    rootEl.appendChild(c1);

    var c2 = document.createElement("div"); c2.className = "ab-card";
    c2.innerHTML = "<h4>Every preset on the same 30 months</h4>";
    els.cmp = document.createElement("div"); els.cmp.className = "dt-tablewrap"; c2.appendChild(els.cmp);
    rootEl.appendChild(c2);

    var src = data.source;
    var hint = document.createElement("p"); hint.className = "mb-hint";
    hint.textContent = "Real rows: " + src.publisher + ", " + src.title + " (published " + src.published + "), " + src.sheet +
      ". England, all A&E types. Contains public sector information licensed under the " + src.licence + ". " +
      "Computed: every status, count and change. Conventions, not standards: the tolerance band, the half-point trend threshold and the trend window are " +
      "choices this bench makes and labels; NHS England sets each interim milestone for March, and applying it to every month of that year is a reporting convention. " +
      "From May 2019 to May 2023 fourteen trusts stopped reporting four-hour data during a field test, so the series starts in June 2023.";
    rootEl.appendChild(hint);
    render();
  }

  function init() {
    rootEl = document.getElementById("brd-bench");
    if (!rootEl || !root.BRD_SAMPLE) return;
    data = root.BRD_SAMPLE;
    buildUI();
    root.BRD_BENCH = {
      set: function (o) {
        o = o || {};
        if (o.preset) PRESETS.forEach(function (p) { if (p.id === o.preset) { state.target = p.cfg.target; state.rule = p.cfg.rule; state.band = p.cfg.band; state.window = p.cfg.window; } });
        ["target", "rule", "band", "window", "latest"].forEach(function (k) { if (o[k] !== undefined && o[k] !== null) state[k] = o[k]; });
        render();
        return els.verdict.textContent;
      },
      state: state,
      evaluate: function (tg, r, b, n) { return evaluate(data, tg, r, b, n); }
    };
  }

  var api = { evaluate: evaluate, canon: canon, PRESETS: PRESETS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
  }
})(typeof window !== "undefined" ? window : this);
