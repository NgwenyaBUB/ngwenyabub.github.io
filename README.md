# Brandon — Work & Writing

A static personal site with two views: **Safe for work** (engineering) and
**Off the clock** (essays). Inspired by the existing Work & Writing site.

Open `index.html`, or serve this directory with any static HTTP server.
No installation or build is required. GitHub Pages serves the files directly.

- `index.html`: profile, project summaries, essay links and contact details
- `styles.css`: responsive layout and typography
- `script.js`: hash-based view switching and the footer year
- `assets/brandon-headshot.jpg`: existing portrait

Direct links such as `/#off-clock`, `/#essays`, and `/#other-essays` open the writing view.
The browser Back button restores the previous view. With JavaScript disabled,
both views remain readable and the navigation uses normal section links.

The existing résumé PDF is retained in the repository but is not promoted on
the page until its details are reviewed. Career information is historical;
the page does not claim current job availability or an ongoing qualification.

Content is adapted from the previous profile and Work & Writing project.
To extend the ongoing series, append a `<li>` inside `.series-essays` in\n`index.html`, using an existing entry as the template. Update its topic, title,\nsummary, and Medium link. Numbering follows reading order automatically; no\nJavaScript or layout changes are needed. Keep the oldest entry first.\n\nStandalone writing belongs in `.other-essay-list`. Both lists grow naturally\nand remain readable with JavaScript disabled.
