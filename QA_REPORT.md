# Website QA report: 19 October 2026

**Result: 209 structural, link, privacy and full-source-integrity checks passed, together with responsive browser scenarios, video-playback testing and JavaScript/CSS validation.**

## Completed checks

- Every internal link and local image, PDF, CSS/JS and HTML asset path resolves to a real file in this package; fragment anchors resolve to matching IDs.
- Every HTML page has one primary heading and no duplicate element IDs; images have alternative text.
- CSS parses without top-level syntax errors; all JavaScript passes Node.js syntax verification.
- The code page rendered at 1440, 1024, 390 and 320 pixels; the homepage and MSc-thesis page rendered at 1440, 900, 390 and 320 pixels. No tested page had horizontal overflow.
- The expanded future-research section rendered at 1440×1000 and 390×844 with both conceptual frameworks, two research tracks, working full-size figure links, no duplicate IDs, no missing target anchors and no horizontal overflow.
- The research-overview MP4 loaded as 1898×684 media with a duration of approximately five seconds, decoded and played at desktop and mobile homepage widths, and remained contained within the responsive thesis figure. The embedded black padding was removed without cropping the scientific panels. The complete matched thesis comparison image remained contained within the first research-direction card.
- All homepage and research-page references to a 2027 PhD start were removed; both pages state that the candidate is available to start immediately.
- Desktop and mobile navigation exposes the Code page. The code search filters the 20 modules, reports results, shows a clear empty state and resets with Escape. Individual file panels and the expand-all/collapse-all controls expose the complete code.
- The complete displayed contents of all 20 modules were compared with the corresponding supplied files and match exactly. This is an integrity check only, not a scientific or numerical correctness review.
- No separate `.py` file, source ZIP or dedicated code-download button is present anywhere in the website package. The complete source is embedded in `code.html`, and reuse-permission requests are routed through email.
- No uncaught JavaScript errors or browser console errors observed in the audited preview.
- Every local image was embedded from the actual delivered file, decoded and inspected. Eleven thesis figures, six original schematic SVG assets, including dedicated mobile layouts, and the generated social card are included. The supplied MP4 was cropped only to remove its embedded black padding, then re-encoded at high quality with the original audio track preserved.
- The future-research language was checked against the complete supplied thesis, with particular attention to the Abstract, Chapter 1 and Sections 5.1.3 and 5.1.4. The page explicitly separates completed rigid-particle results from parallel or proposed continuum, flexible-particle and optimisation work.
- Authored website prose, metadata, styles, figure text and documentation contain no em dashes. Em dashes inside the displayed Python source are preserved because the complete code must remain byte-for-byte faithful to the supplied modules.
- The Research output statement matches the wording in Section 5.1.2 of the thesis, including the professional titles of Dr. Christophe Henry and Dr. Laetitia Giraldi.
- Thesis public PDF retains its original handwritten signatures, per owner permission. Two student-ID lines on cover are masked. The CV public PDF has a phone/address line redacted.
- One scientific reference independently checked: Cristóbal López and Andrea Puglisi, *Physical Review E* **69**, 046306 (2004), DOI `10.1103/PhysRevE.69.046306`.
- Legacy `/thesis.html`, `/resources.html` and `/contact.html` are retained as redirects, so old hyperlinks can reach the active content.

## Scope and limits

The website is ready for upload, **not automatically published**. Browser tests used the shipped files through a local HTTP preview in headless Chromium. This does **not** replace testing after GitHub Pages deployment. External websites and actual email delivery were not tested, nor was every accessibility criterion formally certified.

Anything displayed in a browser can be copied or saved. Because the complete research source is now embedded in the public page, the permission notice cannot technically prevent retrieval; it communicates the requested terms only. Enforceable access control would require authenticated private hosting rather than public GitHub Pages.

No fictional thesis-data plots or defence-slides PDF were included. The supplied defence-slide PPTX is not packaged as a public download and does not supply the final future-research wording. That wording follows the thesis itself. References to unavailable downloads were removed, rather than shipping links that would fail. The supplied research-overview video is included unchanged; the hero animation and future-direction SVGs are explicitly conceptual.

## Documents and deployment

- `assets/Johaan_Kallany_Thesis.pdf`: 25,406,942 bytes (24.23 MiB), 136 pages.
- `assets/Johaan_Tomy_Kallany_CV.pdf`: 194,077 bytes.
- `assets/research-overview.mp4`: 12,737,381 bytes (12.15 MiB), approximately five seconds, 1898×684.
- Publish the contents of the ZIP at the repository root. Do not place the containing folder itself at the root.
- After publishing, verify video playback, PDF downloads and figure clicks on the public GitHub Pages URL before sharing the link.
