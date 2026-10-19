# Website QA report — 19 October 2026

**Result: 202 structural, link, privacy and excerpt-integrity checks passed, together with 12 responsive browser scenarios and JavaScript/CSS validation.**

## Completed checks

- Every internal link and local image, PDF, CSS/JS and HTML asset path resolves to a real file in this package; fragment anchors resolve to matching IDs.
- Every HTML page has one primary heading and no duplicate element IDs; images have alternative text.
- CSS parses without top-level syntax errors; all JavaScript passes Node.js syntax verification.
- The code page rendered at 1440, 1024, 390 and 320 pixels; the homepage and MSc-thesis page rendered at 1440, 900, 390 and 320 pixels. No tested page had horizontal overflow.
- Desktop and mobile navigation exposes the Code page. The code search filters the 20 modules, reports results, shows a clear empty state and resets with Escape; excerpt panels open from their native disclosure controls.
- All 20 displayed excerpts were compared with the corresponding supplied module and match their source text. This is an integrity check only, not a scientific or numerical correctness review.
- No `.py` file, source ZIP or direct research-code download is present anywhere in the website package. Complete source access is routed through a permission-request email.
- No uncaught JavaScript errors or browser console errors observed in the audited preview.
- Every local image was embedded from the actual delivered file, decoded and inspected; 11 actual thesis figures, two original schematic SVG illustrations and the generated social card are included.
- Thesis public PDF retains its original handwritten signatures, per owner permission. Two student-ID lines on cover are masked. The CV public PDF has a phone/address line redacted.
- One scientific reference independently checked: Cristóbal López and Andrea Puglisi, *Physical Review E* **69**, 046306 (2004), DOI `10.1103/PhysRevE.69.046306`.
- Legacy `/thesis.html`, `/resources.html` and `/contact.html` are retained as redirects, so old hyperlinks can reach the active content.

## Scope and limits

The website is ready for upload, **not automatically published**. Browser tests used the shipped files through a local HTTP preview in headless Microsoft Edge. This does **not** replace testing after GitHub Pages deployment. External websites and actual email delivery were not tested, nor was every accessibility criterion formally certified.

Anything displayed in a browser can be copied or saved. Permission-gating is achieved by excluding the complete research source and publishing selected excerpts only; the site does not claim that visible excerpts are technically impossible to copy.

No fictional thesis-data plots, defence-slides PDF, or simulation video were included. References to unavailable downloads were removed, rather than shipping links that would fail. The hero animation and two future-direction diagrams are explicitly conceptual.

## Documents and deployment

- `assets/Johaan_Kallany_Thesis.pdf`: 25,406,942 bytes (24.23 MiB), 136 pages.
- `assets/Johaan_Tomy_Kallany_CV.pdf`: 194,077 bytes.
- Publish the contents of the ZIP at the repository root. Do not place the containing folder itself at the root.
- After publishing, verify PDF downloads and figure clicks on the public GitHub Pages URL before sharing the link.
