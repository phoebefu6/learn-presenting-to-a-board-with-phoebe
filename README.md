<!-- learn-with-phoebe hub banner -->
> ### 📚 Part of [**Learn with Phoebe**](https://phoebefu6.github.io/learn-with-phoebe/)
> The shelf of 187 free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**
<!-- /learn-with-phoebe hub banner -->

# Learn Presenting to a Board with Phoebe

Numbers in the boardroom: what to show, what to withhold, and the questions you will be asked.

Six 45-minute sessions for data and AI leaders who get a slot at a board or a board committee.
Static HTML, no build step: open `index.html`.

1. What a board is for
2. The board paper and the pack
3. Which numbers belong
4. The RAG rule bench (computed in the browser)
5. The questions you will be asked
6. The ten-minute slot, and after

## The bench

`assets/brd-live.js` gives each of 30 real months a red, amber or green status under a rule the
learner chooses (target, tolerance band, level, trend or both, trend window), counts the months that
are green while the trend is falling, and shows what a board sees when it is shown only the latest
month. The rows in `assets/brd-sample.js` are NHS England's monthly share of A&E attendances seen
within four hours, England, all A&E types, June 2023 to September 2026, from the Monthly A&E Time
Series September 2026 (published 8 October 2026). Contains public sector information licensed under
the Open Government Licence v3.0. `materials/build-brd-sample.py` builds the sample from the published
file; the Python reference `materials/brd_reference.py` reproduces every value and
`materials/compare-ladder.py` checks the two.

The running case, Fernhollow Freight and its board, is constructed for teaching. No number about it
is a measurement.

By Phoebe Fu.
