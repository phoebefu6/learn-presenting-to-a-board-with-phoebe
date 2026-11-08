"""Python reference for the RAG rule bench (assets/brd-live.js). Same steps, same order, integers only.

    python3 materials/brd_reference.py > py.json
    node materials/brd-node.js > node.json
    python3 materials/compare-ladder.py py.json node.json      (exit 0 = every value agrees)

Data: assets/brd-sample.js (NHS England monthly A&E four-hour share, basis points, real rows).
Rules, for each rated month t (April 2024 onwards), with v = the month's share in basis points:
  target  formal = 9500 every month; interim = that financial year's NHS England milestone.
  level   green if v >= T - b; amber if v >= T - 2b; else red. (b = tolerance band; b = 0 means
          at or above target is green and everything else is red.)
  trend   d = v[t] - v[t - N]; green if d >= +50 (up half a point or more over N months), red if
          d <= -50, else amber. N is the window, the model's choice.
  combined the worse of level and trend (green only if both are green).
  declining  d <= -50. A "green while declining" month is green under the rule while declining.
Break button: the latest month only, under the same rule.
"""
import json
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
RULES = ["level", "trend", "combined"]
TARGETS = ["formal", "interim"]
BANDS = [0, 100, 200, 300, 400, 500]
WINDOWS = [3, 6, 9]
FLAT = 50
RANK = {"G": 0, "A": 1, "R": 2}
PRESETS = [
    ("formal", "Formal target, month by month", {"target": "formal", "rule": "level", "band": 0, "window": 6}),
    ("interim", "Interim target, month by month", {"target": "interim", "rule": "level", "band": 0, "window": 6}),
    ("tolerance", "Interim target, 2-point tolerance", {"target": "interim", "rule": "level", "band": 200, "window": 6}),
    ("trend", "Trend only, 6 months", {"target": "interim", "rule": "trend", "band": 0, "window": 6}),
    ("combined", "Level and trend together", {"target": "interim", "rule": "combined", "band": 200, "window": 6}),
    ("greenbyrule", "Green-by-rule", {"target": "interim", "rule": "level", "band": 500, "window": 6}),
]


def load():
    txt = (REPO / "assets" / "brd-sample.js").read_text()
    return json.loads(re.search(r"window\.BRD_SAMPLE = (\{.*\});", txt, re.S).group(1))


def level(v, T, b):
    if v >= T - b:
        return "G"
    if v >= T - 2 * b:
        return "A"
    return "R"


def trend(d):
    if d >= FLAT:
        return "G"
    if d <= -FLAT:
        return "R"
    return "A"


def evaluate(data, target, rule, band, window):
    months, v = data["months"], data["pct_bp"]
    start = months.index(data["first_rated"])
    out = []
    for t in range(start, len(months)):
        T = data["formal_bp"] if target == "formal" else data["interim_bp"][t]
        d = v[t] - v[t - window]
        lv, tr = level(v[t], T, band), trend(d)
        if rule == "level":
            s = lv
        elif rule == "trend":
            s = tr
        else:
            s = lv if RANK[lv] >= RANK[tr] else tr
        out.append({"month": months[t], "v": v[t], "T": T, "d": d, "s": s, "declining": d <= -FLAT})
    counts = {k: sum(1 for m in out if m["s"] == k) for k in "GAR"}
    wm = sum(1 for m in out if m["s"] == "G" and m["declining"])
    last = out[-1]
    return {
        "colours": "".join(m["s"] for m in out),
        "counts": counts,
        "watermelon": wm,
        "declining": sum(1 for m in out if m["declining"]),
        "latest": {"month": last["month"], "v": last["v"], "T": last["T"], "d": last["d"], "s": last["s"]},
    }


def key(target, rule, band, window):
    return "%s|%s|%d|%d" % (target, rule, band, window)


def canon(data):
    grid = {}
    for tg in TARGETS:
        for r in RULES:
            for b in BANDS:
                for n in WINDOWS:
                    grid[key(tg, r, b, n)] = evaluate(data, tg, r, b, n)
    presets = {pid: evaluate(data, **cfg) for pid, _, cfg in PRESETS}
    best = max(grid, key=lambda k: (grid[k]["counts"]["G"], grid[k]["watermelon"]))
    return {"rated": len(presets["formal"]["colours"]), "grid": grid, "presets": presets, "max_green_key": best,
            "max_green": grid[best]["counts"]["G"]}


if __name__ == "__main__":
    print(json.dumps(canon(load()), sort_keys=True))
