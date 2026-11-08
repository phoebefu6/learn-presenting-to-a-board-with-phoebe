# Official course map - learn-presenting-to-a-board-with-phoebe

Presenting Data to a Board. Bucket comm, single-track, 6 sessions of 45 minutes, session 4 = the
computed bench. Audience: data and AI leaders who get a slot at a board or board committee (audit,
risk). Third rung of a ladder: Stakeholder Management (map the people), Executive Briefings (write the
page), this (the board: governance, the paper, the numbers, the questions, the slot). Built 2026-11-08
by Phoebe Fu.

Card blurb: "Numbers in the boardroom: what to show, what to withhold, and the questions you will be
asked."

"Withhold" means DETAIL that does not help oversight, never a material bad truth. Pages state that as
the professional norm with its reason: directors must act on a fully informed basis (OECD V.A), the
board must present a fair, balanced and understandable assessment (FRC Principle N), and a director's
duty of care (CA 2006 s174) assumes the information they are shown can be relied on.

## Evidence tiers

- **read at source**: the primary text was read on 2026-11-08 (the publisher's own page or PDF).
- **reported**: only a secondary source, a vendor summary of its own survey, or a members-only document
  known by its public introduction. Pages say "reported" and name who reported it.
- **opinion**: a saying with no traceable origin. Pages call it opinion.
- **constructed**: invented for teaching (Fernhollow Freight). No number about it is a measurement.
- **computed**: printed by the session-4 bench from real NHS England rows; python == node.

## Running case (constructed, label "Constructed Fernhollow Freight example" every time)

Fernhollow Freight continues from learn-stakeholder-management-with-phoebe and
learn-executive-briefings-with-phoebe: an invented mid-size logistics company, eleven depots. Sunniva
Holm, head of data (reports to Kenji Arai, CIO), proposed one shared customer record across sales, the
depots and billing at EUR 1.4 million over two years. Marguerite Vance (CEO) approved it at the executive
meeting on 14 November (the Executive Briefings memo). The spend is above the CEO's delegated limit, so
it is a matter reserved for the board, and Sunniva gets a ten-minute slot. Halvard Lind (CFO), Odile
Mercer (COO), Rafe Okoro (commercial), Bram Tully (depot planning) as before.

New board members (grepped across every sibling 2026-11-08, no collisions):
- **Ingrid Ashdown**, independent chair. Sets the agenda with Marguerite and the company secretary.
- **Tomasz Wexley**, non-executive director, chairs the audit and risk committee (a former auditor).
- **Leonie Achterberg**, non-executive director, ran operations at a parcel carrier; asks about depots.
- **Delphine Corwen**, company secretary. Owns the pack timetable, the cover-sheet template, the minutes.

Constructed board facts (not measurements): pack circulated five working days before the meeting
(mirrors the CGI charity guidance norm); the item is "for decision"; Fernhollow's board KPI pack
already reports a monthly on-time-delivery figure with RAG status. Fernhollow is UK-incorporated so the
Companies Act 2006 applies; it is NOT listed, so the UK Corporate Governance Code applies only as good
practice it chooses to follow (say so on page 1).

## Seams (verified 2026-11-08 by reading sibling h1s and h2s; say each with an absolute https link, never reteach)

- Executive Briefings, all six; 06 says "board pre-reads and the questions that follow them belong to
  the planned Presenting to a Board course". Writing the one page is theirs: session 2 links
  https://phoebefu6.github.io/learn-executive-briefings-with-phoebe/courses/01-the-decision-on-top.html
  and .../02-pick-the-format.html; session 6 links .../06-send-land-follow-up.html.
- Public Speaking 05 "Slides that support, not compete" and 06 "Rehearsal that works, and the questions
  after": https://phoebefu6.github.io/learn-public-speaking-with-phoebe/courses/05-slides-that-support.html
  and .../06-rehearsal-and-the-questions.html. Link from sessions 5 and 6; our delta is board-specific
  question types and the governance setting.
- Data Strategy 05 "Funding and value tracking", Part 3 h2 "The board ask, on one page":
  https://phoebefu6.github.io/learn-data-strategy-with-phoebe/courses/05-funding-and-value-tracking.html#part-3
  Link from session 2; we teach the slot and the pack, not the funding model.
  (Correction to the brief: "The board ask, on one page" is a Part heading, not the session h1.)
- Data Governance e1 "Why data governance is a board issue":
  https://phoebefu6.github.io/learn-data-governance-with-phoebe/courses/e1-board-issue.html (session 1);
  e4 "Governance as advantage", section #board-talk on talking about data risk upstairs:
  https://phoebefu6.github.io/learn-data-governance-with-phoebe/courses/e4-governance-advantage.html#board-talk
  (session 3). (Correction: e4's h1 is "Governance as advantage"; the upstairs material is a section.)
- AI Project Management b6 "The status report: from fluent and empty to steerco-ready":
  https://phoebefu6.github.io/learn-ai-project-management-with-phoebe/courses/b6-status-report-simulator.html
  Link from session 4; ours is RAG rules on a KPI time series, not project status.
- Stakeholder Management 05 "Coalitions and pre-wiring":
  https://phoebefu6.github.io/learn-stakeholder-management-with-phoebe/courses/05-coalitions-and-pre-wiring.html
  Link from session 5 (pre-wiring the chair).
- Visual Storytelling (deck craft): https://phoebefu6.github.io/learn-visual-storytelling-with-phoebe/
  Decision Intelligence 04 "Uncertainty you can promise" (uncertainty language):
  https://phoebefu6.github.io/learn-decision-intelligence-with-phoebe/courses/04-uncertainty-you-can-promise.html
  Data Literacy 04 "Metrics and KPI trees":
  https://phoebefu6.github.io/learn-data-literacy-with-phoebe/courses/04-metrics-and-kpi-trees.html

## Sessions (titles grepped against 2,042 sibling h1s on 2026-11-08: no collisions)

### 1 What a board is for (`01-what-a-board-is-for.html`)
Oversight, not management. FRC Code Principle A (board's role), Principle H (NEDs: constructive
challenge, hold management to account), Provision 13 (scrutinise and hold to account); CA 2006 s172
(promote success, factors a-f), s173 (independent judgment), s174 (care, skill, diligence, two limbs);
OECD 2023 V.A (fully informed basis), V.D.2 (risk policies), V.F (accurate, relevant, timely
information). Agenda item types: decision / discussion / noting (CGI minute-taking guidance 5.3.2), plus
"assurance" as a fourth (GGI); the labels are convention, neither the Code nor the Act lists them.
Figure: management line vs board line; where the data lead sits (presents, does not vote).
Comply or explain (FRC Introduction); the Code applies to listed companies (commercial companies and
closed-ended investment funds categories); Fernhollow follows it as good practice.
Health note line (once): workload and planning only, never medical advice.

### 2 The board paper and the pack (`02-the-board-paper-and-the-pack.html`)
FRC Guidance 2024 para 78 (four rules for board papers: accurate, clear, comprehensive, up to date;
a summary; what is expected of the director; delivered sufficiently in advance). GGI cover sheet (May
2026): eight elements, the purpose test "why is this in front of the board, now?", two or three
material risks. CGI charity cover sheet note intro: packs usually five working days before; not "so
voluminous"; read all, not only the cover sheet. FRC Guidance para 31 (show how proposals were developed
and challenged). Hodge/ICSA 2018 "Twelve questions" (two quoted). Pack length surveys REPORTED (below).
Build-along: Sunniva's cover sheet. Link Executive Briefings for the writing, Data Strategy 05 Part 3.

### 3 Which numbers belong (`03-which-numbers-belong.html`)
KPI vs operational detail; trend, target and tolerance; materiality; risk appetite (FRC Principle O:
board determines principal risks; Provision 28 robust assessment; Provision 29 material controls,
2024 change, for periods beginning on/after 1 Jan 2026); FRC Principle N fair, balanced, understandable.
Withholding detail vs withholding truth. NHS "Making data count" (2019): RAG limits, the flip between red
and green. Board Intelligence 2024 via Comsure (reported): 42% say management not upfront about bad news.
Link Data Governance e4 #board-talk.

### 4 The RAG rule bench (`04-the-rag-rule-bench.html`) - canon below

### 5 The questions you will be asked (`05-the-questions-you-will-be-asked.html`)
Assurance vs challenge vs strategic questions (a teaching typology, labelled as such; anchored in FRC
Principle H "constructive challenge", Guidance para 75 "welcome constructive challenge", para 30
"Questions for boards" two quoted examples, OECD V.F commentary on NEDs' information gap). Anticipating
from the pack; "I don't know" answered well, followed up in writing (and logged as an action, CGI).
Pre-wiring the chair: link Stakeholder Management 05. Link Public Speaking 06.

### 6 The ten-minute slot, and after (`06-the-ten-minute-slot-and-after.html`)
Speak to the paper, do not read it (practice norm; FRC Guidance Fig 3 "sign-off rather than debate").
Minutes: CGI 2017 (record what was done, not what was said; key challenges; owners and dates; separate
actions schedule under matters arising; board-level actions only). Board Intelligence via Comsure
(reported): meeting 3 h 48 min, 11 items, about 21 min per item. Capstone: Sunniva's slot assembled
(cover sheet + three numbers + five expected questions with answers). Link Public Speaking 05 and 06,
Executive Briefings 06.

## Bench canon (session 4) - computed 2026-11-08, python == node on 1,257 values, 0 mismatches

Data: NHS England, A&E Attendances and Emergency Admissions, "Monthly A&E Time Series September 2026"
(Monthly-AE-Time-Series-September-2026-LS35fw.xls, published 8 October 2026), sheet Performance,
column "Percentage in 4 hours or less (all)", England, all A&E types. Open Government Licence v3.0
(england.nhs.uk terms page, read at source). Window June 2023 to September 2026 (40 months; starts after
the CRS field test, May 2019 to May 2023, when 14 trusts stopped reporting four-hour data). Rated months
April 2024 to September 2026 = 30. Stored as basis points. Cross-check: FY2025-26 attendance-weighted
share from the same file = 74.93%; NAO reports 74.9% (read at source). Targets: formal 95%; interim
78% (2024/25, by March 2025), 78% (2025/26, by March 2026), 82% (2026/27, every trust by March 2027);
applied to every month of the year as a labelled convention.

Rules: level green if v >= T - b, amber if v >= T - 2b, else red; trend d = v - v(N months earlier),
green d >= +0.5 pt, red d <= -0.5 pt, else amber; combined = the worse of the two. Green while declining
= green and d <= -0.5 pt. Default state = "Interim target, 2-point tolerance", window 6.

Presets (window 6; G / A / R of 30; green while declining; latest month status):
- Formal target, month by month: 0 / 0 / 30; 0; red. (Every setting with the formal target: 0 green.)
- Interim target, month by month: 0 / 0 / 30; 0; red.
- Interim target, 2-point tolerance (default): 3 / 13 / 14; 0; red. Colours ARAAGARRRRRAAAAGAAAARRAGRRRRRR.
- Trend only, 6 months: 17 / 2 / 11; 0 (by construction); red.
- Level and trend together (b 2): 3 / 10 / 17; 0; red.
- ANTI-LEVER Green-by-rule (interim, b 5): 21 / 9 / 0; 7; amber. 21 is the most greens of all 108
  settings (max_green_key interim|level|500|6). Green-while-declining months: Oct 2024 (73.1%, -1.41),
  Jan 2025 (73.0%, -2.21), Feb 2025 (73.5%, -2.87), Oct 2025 (74.2%, -0.59), Nov 2025 (74.2%, -1.18),
  Dec 2025 (73.8%, -1.72), Feb 2026 (74.1%, -1.82).
- Anti-lever vs default: MORE greens (21 vs 3) and MORE green-while-declining (7 vs 0). Verified in node.
Tolerance ladder (interim, level, window 6): b0 0/0/30 wm0 · b1 1/2/27 wm0 · b2 3/13/14 wm0 · b3 8/16/6
wm0 · b4 16/14/0 wm3 · b5 21/9/0 wm7. Combined ladder: b3 7/8/15 · b4 11/8/11 · b5 12/7/11, wm 0 always.
Window sensitivity: trend-only N3 13/5/12, N6 17/2/11, N9 18/5/7; green-by-rule wm N3 5, N6 7, N9 5.
Declining months (any rule): N3 12, N6 11, N9 7.
BREAK "latest month only": September 2026 = 74.4% (7436 bp) against the 82.0% milestone; red under the
default (amber under green-by-rule); 6-month change -2.75 points (March 2026 77.1% to September 74.4%);
3-month change -0.66; 9-month change +0.52, so trend-only with a 9-month window calls the latest month
GREEN while the 6-month window calls it red. The verdict prints: "A board shown September 2026 alone
sees one RED: 74.4% against the 82.0% milestone. The series it does not see: 3 green, 13 amber, 14 red
over 30 months, and -2.75 points over the last 6 months."
Highest month in the rated window: March 2026, 77.1% (7711). Lowest: December 2024, 71.1% (7112).

## Not covered (honest list)

- The full CGI "Effective Board Reporting" guidance (2018, updated 2026) and its cover-sheet template:
  members-only; known from public introductions and a vendor summary only.
- Non-UK statute (US Delaware duties, Singapore Companies Act, EU directives): OECD 2023 stands in as the
  international reference; local law differs, say so.
- Charity, public-sector and NHS board specifics beyond the A&E series used as real rows.
- Board evaluation, director appointment, remuneration; investor relations; listed-company disclosure.
- Slide design (Visual Storytelling), delivery and nerves (Public Speaking), writing the page (Executive
  Briefings), the funding model (Data Strategy).
- Statistical process control charts (NHS Making data count teaches them; named as the alternative to RAG,
  not taught).
- Any evidence that one RAG rule improves board decisions: none found; teach the disagreement.

## Famous claims tiered

- "Board packs average N pages": REPORTED. ICSA + Board Intelligence (Dec 2017) via Hodge on Mondaq:
  large organisations about 2,000 pages a year; nearly three-quarters say packs too long; 68% too
  operational. Board Intelligence + CGI 2026 (vendor blog): 220 pages on average, up 27%; 62% rate packs
  weak or poor. Board Intelligence via Comsure (2025): 294 pages for a GBP 500m+ business.
- "Directors spend X hours reading the pack": REPORTED, Board Intelligence via Comsure: 3 to 4 hours,
  about 30 pages an hour. Read at source: Spencer Stuart Director Pulse 2024, 200 hours a year on board
  work (751 US directors), 242 for public-company directors.
- Disagreement pair: NACD 2024 (read at source) 62% call packs very or extremely effective; Board
  Intelligence 2026 (reported) 62% call them weak or poor. Different samples, different questions.
- "Never bring a problem without a solution": OPINION, no traceable origin. Counterweight read at
  source: FRC Guidance Fig 3 names "a tendency to bring matters to the board for sign-off rather than
  debate" as a risk factor for poor decisions.
- "Watermelon reporting": practitioner slang, no governance-body source; pages say "practitioners call it".
- RAG: NHS Making data count (2019, read at source) names its limits; IPA 2023-24 (read at source) calls
  its delivery ratings "a snapshot in time" and cut its scale from five points to three; 72% amber.
- The 95% standard: NHS England MTPF section 3.2 (read at source) "over a decade since" it was delivered;
  NAO (read at source) last met 2013-14 at 95.7%. The NHS Constitution Handbook pledge is "a maximum
  4-hour wait" with no percentage.

## Citation appendix (short forms used on pages)

- FRC (2024) UK Corporate Governance Code. https://media.frc.org.uk/documents/UK_Corporate_Governance_Code_2024_a2hmQmY.pdf (read at source)
- FRC (2024) Corporate Governance Code Guidance. https://www.frc.org.uk/library/standards-codes-policy/corporate-governance/corporate-governance-code-guidance/ (read at source)
- Companies Act 2006 ss172-174. https://www.legislation.gov.uk/ukpga/2006/46/section/172 (and /173, /174) (read at source)
- OECD (2023) G20/OECD Principles of Corporate Governance 2023, Chapter V. https://www.oecd.org/en/publications/g20-oecd-principles-of-corporate-governance-2023_ed750b30-en/full-report/component-8.html (read at source)
- CGI (2023) Specimen report cover sheet for charity board meetings (public intro). https://cgi.org.uk/resources/guidance-notes/charity/specimen-report-cover-sheet-for-charity-board-meetings/ (read at source, intro only)
- ICSA/CGI (2017) Minute taking, guidance note. https://cgi.org.uk/media/mpjeexxj/minute-taking.pdf (read at source)
- Hodge, C. (2018) A Guide to Better Board Reporting, ICSA, via Mondaq. https://www.mondaq.com/uk/corporate-governance/723100/a-guide-to-better-board-reporting (read at source)
- Good Governance Institute (2026) Brilliant basics: the report cover sheet. https://www.good-governance.org.uk/publications/insights/brilliant-basics-the-report-cover-sheet (read at source)
- NHS England and NHS Improvement (2019) Making data count: Strengthening your decisions. https://www.england.nhs.uk/wp-content/uploads/2019/12/making-data-count-strengthening-your-decisions.pdf (read at source)
- IPA (2024) Annual Report 2023-24. https://www.gov.uk/government/publications/infrastructure-and-projects-authority-annual-report-2023-24/infrastructure-and-projects-authority-annual-report-2023-24-html (read at source)
- NHS England, A&E Attendances and Emergency Admissions statistics. https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/ (read at source; file above)
- NHS England (2023) Delivery plan for recovering urgent and emergency care services (76% by March 2024). https://www.england.nhs.uk/publication/delivery-plan-for-recovering-urgent-and-emergency-care-services/ (read at source)
- NHS England (2024) 2024/25 priorities and operational planning guidance (78% in March 2025). https://www.england.nhs.uk/long-read/2024-25-priorities-and-operational-planning-guidance/ (read at source)
- NHS England (2025) 2025/26 priorities and operational planning guidance (78% in March 2026). https://www.england.nhs.uk/long-read/2025-26-priorities-and-operational-planning-guidance/ (read at source)
- NHS England (2025) Medium term planning framework 2026/27 to 2028/29 (82% by March 2027; 85% 2028/29). https://www.england.nhs.uk/long-read/medium-term-planning-framework-delivering-change-together-2026-27-to-2028-29/ (read at source)
- NAO (2026) Managing the flow of patients through hospital from A&E, HC 588. https://www.nao.org.uk/reports/managing-the-flow-of-patients-through-hospital-from-ae/ (read at source, report page)
- Spencer Stuart (2024) Director Pulse Survey: time commitment. https://www.spencerstuart.com/research-and-insight/spencer-stuart-director-pulse-survey-time-commitment-2024 (read at source)
- NACD (2024) Public company board practices and oversight survey, board reporting. https://www.nacdonline.org/all-governance/governance-resources/governance-surveys/surveys-benchmarking/2024-public-company-board-practices-and-oversight-survey/board-reporting/ (read at source)
- Board Intelligence surveys (2017, 2024, 2026): REPORTED via Mondaq (Hodge 2018), Comsure (2025) https://comsuregroup.com/news/the-blockers-of-board-effectiveness-directors-are-drowning-in-information-and-not-being-sufficiently-prepared and the Board Intelligence blog https://www.boardintelligence.com/blog/effective-board-reporting-cgi-board-intelligence-publish-updated-guidance
- HFMA (2020) NHS board reports need major overhaul (one consultant's view). https://hfma.org.uk/articles/hfma-2020-nhs-board-reports-need-major-overhaul (read at source)
- Handbook to the NHS Constitution for England (2025). https://www.gov.uk/government/publications/supplements-to-the-nhs-constitution-for-england/the-handbook-to-the-nhs-constitution-for-england (read at source)
