# Agent brief - shared by every fan-out page of learn-presenting-to-a-board-with-phoebe

Filled from `~/.claude/skills/course-builder/references/agent-brief.template.md` on 2026-11-08.
Internal build document: never link it from an audience page.

You are writing ONE static HTML session page. No servers, no npm. **If your target file already
exists on disk, do not write it; report that and stop.** Write the file, return its path and one
line of coverage. No HTML in your reply.

## Read first, in this order

1. The template page. Copy its structure, classes, SVG grammar and quiz markup EXACTLY, including
   how many options each question has (4):
   `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-presenting-to-a-board-with-phoebe/courses/01-what-a-board-is-for.html`
2. The source map: every verified fact, its evidence tier and exact wording, per-session coverage,
   the seams, the constructed cast and the bench canon. Use ONLY its facts and numbers; never invent
   a statistic; if a fact is missing, teach the uncertainty.
   `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-presenting-to-a-board-with-phoebe/materials/official-course-map.md`
3. The stylesheet `:root` block (first 32 lines) for the palette tokens:
   `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-presenting-to-a-board-with-phoebe/assets/style.css`
4. For bench numbers only: `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-presenting-to-a-board-with-phoebe/courses/04-the-rag-rule-bench.html`
   (its steps list what the widget prints; quote nothing else from the bench, and quote sparingly:
   sessions 3, 5 and 6 may cite at most two or three bench numbers, each exactly as printed there).

## Page skeleton (keep every component)

toolbar (crumb EXACTLY "learn-presenting-to-a-board-with-phoebe / Session N of 6", #toggle-all,
#zoom-toggle) · masthead (eyebrow "Learn Presenting to a Board with Phoebe · Session N of 6", h1
with one `<span class="accent">`, .sub, .chip-row with the level chip (🟡 Core for sessions 2 and 3,
🟠 Deeper for sessions 5 and 6) + two .chip.audience + .chip.time "45 min", .agenda a1-a4 with flex
weights) · main.wrap · section#intro (Part 0: kicker, .lede, .legend pills as in the template,
.callout.win "★ What you walk out with tonight.") · 3 Parts, each `section.section#part-N` with
section-kicker (klabel "Part N · covers ...", h2, `.tag.concept "N min live"`), a `.lede`, ONE
figure, `details.card` accordions (summary: `.mode.live` or `.mode.self`, title, `.mini`,
`.caret ▶`), at least one `.callout.example` with `span.ex-pill` "Real world" on the page ·
section#demo-1 Build-along (kicker `.tag.demo "★ 22 min · everyone builds"`, .lede, ONE figure,
`.steps > .step`, each with a `<p>` then a `.prompt-box.good` carrying a `span.label`; the worked
content is Sunniva's board item at Fernhollow, and the learner builds their own beside it) ·
section#exercise Homework (ol, 4 items) · section#quiz (3 x `.quiz-q data-answer="0-based"`,
`p.qtext`, four `button.qopt` "A · ..." to "D · ...", `p.qwhy`; one `p.quiz-score` after the last) ·
section#official, h2 EXACTLY "What this session teaches, and where it came from",
`.covered > .covered-row` (pill solid ✓ / light ◐ + name + note), then the `.mono` line EXACTLY
"Every fact on this page, and its verification tier, is recorded in the course's source map." ·
section.cheat#cheatsheet (h3 "Session N cheat sheet <span>· pin this</span>", .grid-2 of six
.cheat-item) · `.callout.next` with `.nx-pill` "Next session" (session 6: no next; use a closing
`.callout.next` with `.nx-pill` "Where next" pointing to Executive Briefings and Public Speaking) ·
footer.pagefoot · `<script src="../assets/app.js?v=3"></script>`.

Head: the template's social meta block with this page's own title/description/url (og:image stays
`https://phoebefu6.github.io/learn-presenting-to-a-board-with-phoebe/assets/og-cover.png`);
`<title>Session N · <title> - learn presenting to a board with phoebe</title>`;
`<link rel="stylesheet" href="../assets/style.css?v=3">`. Nothing else external.

First `details.card` in the FIRST Part is `open`; no other. Sentence case headings. Warm
practitioner voice, concrete, never dry. Inside prompt-boxes escape `&` `<` `>`. 450 to 650 lines
is guidance about depth, never a target: never collapse whitespace, dissolve a list into a
paragraph, or drop a component to fit.

## Hard rules (a violation is rework)

- NEVER an em dash or en dash, anywhere (prose, code, aria-labels, comments). Hyphen only.
- No meta text: never "this course", "in this course", "the course teaches", "banned here". State
  the professional norm directly with its reason. The two exact estate phrases above are the only
  self-references; "session 5" cross-references are fine.
- Attribution "by Phoebe Fu". Never "built with" a tool.
- Every number comes from the map or is labelled constructed. Fernhollow numbers are constructed
  and say so. Never quote a bench number the session 4 page does not print.
- Contested or missing evidence: teach the disagreement; never resolve what the evidence has not.
- Citations in the exact form of the map's appendix; anything marked reported says "reported" and
  names who reported it; opinion is called opinion. At most ONE short quotation per source per page,
  under 15 words, in quotation marks, copied exactly from the map.
- NEVER "lottery" or "lotteries"; say the mechanism.
- Default to the English word. Any non-English term carries its English in brackets.
- No named real employers beyond the sources in the map, no salary or pay figures, no "hire me" advice.
- Running cases are FICTIONAL: the exact phrase "Constructed Fernhollow Freight example" appears on
  every page (in a figure note, a callout or the lede) and wherever Fernhollow facts are given.
  Never Phoebe's own journey, employers or clients.
- "Withhold" means DETAIL that does not help oversight, NEVER a material bad truth. Whenever a page
  talks about leaving things out, say so with the reason (OECD V.A fully informed; FRC Principle N
  fair, balanced and understandable; s174 care duty relies on the paper).
- Famous claims: pack length and reading time are REPORTED with who reported them (map "Famous claims
  tiered"); "never bring a problem without a solution" is opinion; "watermelon" is practitioner slang.
  The NACD 62% effective vs Board Intelligence 62% weak or poor pair is the disagreement to teach.
- The assurance / challenge / strategic question typology (session 5) is a TEACHING typology; say so,
  and anchor it in the FRC "constructive challenge" wording, not in a claimed standard.
- Quiz answer letters must vary across the three questions; use the order given in your outline.
- Titles, widget ids and class names must not collide with siblings. Banned titles: "Why data
  governance is a board issue", "The board ask, on one page", "Rehearsal that works, and the questions
  after", "Slides that support, not compete", "Coalitions and pre-wiring", "A system you keep", "The
  one-page marketing plan", "Is it worth the time?", "Where your week actually goes", and every h1 in
  learn-executive-briefings, learn-public-speaking, learn-data-strategy, learn-data-governance,
  learn-ai-project-management, learn-stakeholder-management, learn-visual-storytelling,
  learn-decision-intelligence, learn-data-literacy.
- Seams: say each relevant one out loud with an absolute link and do not reteach it (map section
  "Seams"). Writing the page: Executive Briefings. Funding model: Data Strategy 05 #part-3. Data
  risk upstairs: Data Governance e4 #board-talk. Pre-wiring: Stakeholder Management 05. Slides and
  rehearsal: Public Speaking 05 and 06. Uncertainty language: Decision Intelligence 04.

## Figure grammar (hand-drawn, every figure)

Palette, ONLY these hexes (no invented greys): ink `#1C2033` · muted `#585D72` · primary (navy)
`#3E4774` · deep `#2A3156` · mid `#4E5888` · soft `#C8CCE2` · tint `#EEF0F7` · faint `#CDD0DB` ·
hairline `#E4E6EE` · brass (the ONE contrast colour) `#7A5C12` · brass ink `#574108` · brass tint
`#F7F0DC` · paper `#FBFAF6` · RAG `#276A43` (green) `#F2C14E` (amber) `#991B1B` (red) · `#FFFFFF` ·
universal reds `#991B1B` `#FEF2F2` `#FCA5A5` only for a wrong-way panel. Text colours that pass AA
on white/tint/brass tint: ink, muted, primary, deep, brass, brass ink. White text only on primary,
deep, mid, brass, RAG green or red fills; ink text only on RAG amber. Never brass ink text on a brass
fill.

- `<figure class="zoomable">` > `<svg viewBox="0 0 880 H" xmlns="http://www.w3.org/2000/svg"
  role="img" aria-label="the data, not the shape">` > `<defs>` + `<style>` + content, then
  `<figcaption>🔍 Click to zoom - takeaway</figcaption>`. Grow H, never W.
- Prefix unique per figure, used for every class and id: `p<session><letter>` (p2a, p2b, p2c, p2d;
  p3a...; p5a...; p6a...). Never reuse p1x or p4x.
- `<defs>` holds with the figure prefix P: a wobble filter `id="PSk"` (`feTurbulence
  type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="<int>"` + `feDisplacementMap
  scale="2.4" xChannelSelector="R" yChannelSelector="G"`, `x="-3%" y="-3%" width="106%"
  height="106%"`), a hachure pattern `id="PHc"` (7x7 userSpaceOnUse, rotate(-38), one `#3E4774`
  line, opacity .5) when used, an open arrowhead `id="PAr"` (path `M1 1 L9 5 L1 9`, fill none, ink
  stroke 1.6) when used. ALL shapes sit inside ONE `<g filter="url(#PSk)" fill="none"
  stroke="#1C2033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`; rects carry a
  tiny rotation (-4 to 4 degrees for hand-placed items, under 1 for panels). Fills: white, tint, the
  hachure for "the pile" or "the detail", and brass tint with a brass stroke ONLY for the one thing
  the figure is about. One doodle anchor per figure, simple strokes, never a mascot. Text classes:
  `.PH` 800 12px ink heading · `.PL` 600 12px ink label · `.PS` 400 11px muted · `.PB` 800 11px
  brass ink · `.PV` 800 16-20px deep value · `.PW` 800 12px white on a fill · `.PA` 700 11px deep
  axis caption · `.PN` 400 12px muted note. Hand-stacked items must not overlap as painted rects.
- ALL `<text>` outside any filtered group, sans stack, never below 10.5px.
- Fit: max chars ≈ (box width - 20) / 7 at 12px, 6.4px/char at 11px; full-width note under 110
  chars; 40px between neighbouring point labels; bottom note 22px below the last row, H clears it
  by 8px. No line, arrow or curve may pass through a label (the gate fails it); a label must sit
  wholly inside its box or wholly outside it, never across an edge; a numbered badge is a filled
  circle with its number inside. Arrow labels go clearly above or below their line, 8px or more,
  never on it. When in doubt, shorten.
- Floor: one figure per Part plus one in the build-along. Draw the MECHANISM (where the decision
  sits on the cover sheet, what moves to the appendix, how a question traces to a duty, what the
  minutes record), never a metaphor literally, never decoration.

## Voice and honesty

Every Part gets a story: the Fernhollow case (constructed) or a source from the map. Health: pressure
here is workload and planning, never medical or clinical advice (already said on the landing page and
session 1; do not give clinical advice anywhere).

## Cast and facts (constructed Fernhollow Freight; use exactly these)

Sunniva Holm, head of data, reports to Kenji Arai (CIO). Marguerite Vance, CEO and executive
director, approved Sunniva's shared customer record (one record for sales, the depots and billing) at
the executive meeting on 14 November: €1.4 million over two years (platform and build €900,000 then
€200,000; depot and sales time €180,000 then €120,000); build starts January; first depot live in Q3.
The spend is above the CEO's delegated limit, so it is reserved to the board; Sunniva has a ten-minute
slot at the December board meeting, item type "for decision". Halvard Lind, CFO and executive director
(checks the numbers); Odile Mercer, COO; Rafe Okoro, commercial director (owns the CRM account lists);
Bram Tully, depot planning. Board: Ingrid Ashdown, independent chair; Tomasz Wexley, non-executive,
chairs the audit and risk committee, a former auditor; Leonie Achterberg, non-executive, ran operations
at a parcel carrier (asks about depots); Delphine Corwen, company secretary (pack timetable, cover-sheet
template, minutes, action log). Pack circulated five working days before the meeting. Memo facts: 2,140
accounts ordered in the last year; the three lists agree on name, address and contact for fewer than
half; about 310 credit notes last quarter for wrong-address deliveries; main risk: the CRM account
lists not opened up early so the platform launches empty; second risk: depot staff time during the
cut-over; rejected options: a one-off clean (drifts back within a year) and making the CRM the master.
Retention on key accounts is plausible but NOT measured. Fernhollow's KPI pack shows on-time delivery
as a RAG status (session 4: Tomasz asked "What rule makes it green?"). Fernhollow is UK-incorporated,
not listed: the Companies Act applies; the Code is followed as good practice. No other Fernhollow
numbers exist: if a page needs one (for example an on-time delivery percentage), invent it ONLY inside
a "Constructed Fernhollow Freight example" label and say "constructed".

## Cross-links (absolute URLs)

- Executive Briefings: https://phoebefu6.github.io/learn-executive-briefings-with-phoebe/courses/01-the-decision-on-top.html ,
  .../02-pick-the-format.html , .../03-the-evidence-behind-it.html , .../05-options-risk-and-confidence.html ,
  .../06-send-land-follow-up.html
- Public Speaking: https://phoebefu6.github.io/learn-public-speaking-with-phoebe/courses/05-slides-that-support.html ,
  .../06-rehearsal-and-the-questions.html
- Data Strategy: https://phoebefu6.github.io/learn-data-strategy-with-phoebe/courses/05-funding-and-value-tracking.html#part-3
- Data Governance: https://phoebefu6.github.io/learn-data-governance-with-phoebe/courses/e1-board-issue.html ,
  https://phoebefu6.github.io/learn-data-governance-with-phoebe/courses/e4-governance-advantage.html#board-talk
- AI Project Management: https://phoebefu6.github.io/learn-ai-project-management-with-phoebe/courses/b6-status-report-simulator.html
- Stakeholder Management: https://phoebefu6.github.io/learn-stakeholder-management-with-phoebe/courses/05-coalitions-and-pre-wiring.html
- Decision Intelligence: https://phoebefu6.github.io/learn-decision-intelligence-with-phoebe/courses/04-uncertainty-you-can-promise.html
- Data Literacy: https://phoebefu6.github.io/learn-data-literacy-with-phoebe/courses/04-metrics-and-kpi-trees.html
- Visual Storytelling: https://phoebefu6.github.io/learn-visual-storytelling-with-phoebe/
- Hub: https://phoebefu6.github.io/learn-with-phoebe/

## Footer chain and session titles

Footer left: "Session N of 6 · learn-presenting-to-a-board-with-phoebe · by Phoebe Fu &nbsp;·&nbsp; 📚 <a href="https://phoebefu6.github.io/learn-with-phoebe/">Learn with Phoebe ↗</a>"
Footer right: "<a href="PREV">← Prev: <title></a> &nbsp;·&nbsp; <a href="NEXT">Next: <title> →</a>" (last page: "← Prev" and "<a href="../index.html">Course home</a>").

Session titles (exact, sentence case, one accent span in h1):
1. What a board is for · `01-what-a-board-is-for.html`
2. The board paper and the pack · `02-the-board-paper-and-the-pack.html`
3. Which numbers belong · `03-which-numbers-belong.html`
4. The RAG rule bench · `04-the-rag-rule-bench.html`
5. The questions you will be asked · `05-the-questions-you-will-be-asked.html`
6. The ten-minute slot, and after · `06-the-ten-minute-slot-and-after.html`
