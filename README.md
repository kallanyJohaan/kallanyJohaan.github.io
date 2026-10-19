# Johaan Tomy Kallany: research website

Static, accessible, responsive academic research website for GitHub Pages. It preserves the supplied site architecture, thesis analysis and scholarly content, with a three-part **Research directions** overview and a permission-aware research-code preview.

## Deploy

1. Extract this archive. Upload **the contents** (not the enclosing folder) to the root of `kallanyJohaan/kallanyJohaan.github.io` on the `main` branch.
2. In GitHub Settings → Pages, configure *Deploy from a branch*, `main`, `/ (root)`.
3. Keep the directory structure and exact capitalisation. Confirm the research-overview video, code search, two document downloads and scientific figures work after publishing.
4. If the repository has existing files, this package replaces the site root; review the changes before committing. The package has **not** modified GitHub remotely. It includes redirects for the three older pages that currently exist in the live repository.

### Contents

- `index.html`: homepage, conceptual animation, research directions, thesis highlights, background and PhD enquiry.
- `research.html`: complete accessible MSc-thesis study, results, original figure captions, scope, a detailed proposed-research programme and BibTeX.
- `code.html`: searchable, browser-readable complete source for all 20 research modules, with per-file and expand-all views.
- `style.css`, `script.js`, `animation.js`: dependency-free layout and controls.
- `assets/figures/`: 11 original thesis figures extracted from cited pages with optimised web-sized copies.
- `assets/images/`: six self-contained conceptual SVG assets: two compact homepage illustrations, two detailed research frameworks and two mobile-specific stacked versions.
- `assets/research-overview.mp4`: supplied five-second, 1920×1080 research-overview video used in the homepage thesis section.
- `assets/Johaan_Kallany_Thesis.pdf`: public thesis PDF (25.35 MB).
- `assets/Johaan_Tomy_Kallany_CV.pdf`: public research CV (0.19 MB).
- `assets/social-card.jpg`, `favicon.svg`: Open Graph preview and favicon.
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`: GitHub Pages configuration.
- `thesis.html`, `resources.html`, `contact.html`: lightweight redirects protecting links to legacy pages in the existing repository.

### Scientific and bibliographic integrity

The original thesis figures are cropped directly from the supplied thesis PDF, not AI-generated plots. Captions point to the corresponding thesis pages. The research-overview video is the supplied `Media1.mp4`, renamed and copied without re-encoding. The hero animation and the inverse-design/continuum diagrams are **conceptual illustrations**, not research data or quantitative model solutions. Future PhD directions are explicitly labelled *proposed*. The detailed programme distinguishes the rigid-particle foundation established in the thesis from flexible-particle optimisation and the wall-turbulence continuum closure that remain future work.

The López–Puglisi citation is: C. López and A. Puglisi, *Continuum description of finite-size particles advected by external flows: The effect of collisions*, Physical Review E **69**, 046306 (2004), DOI `10.1103/PhysRevE.69.046306`.

### Research code access

The public site embeds the complete text of all 20 Python modules inside `code.html`. It does **not** contain separate `.py` files, a separate source archive or the DNS dataset, and the page offers no dedicated code-download button. The request buttons open a pre-filled email for reuse, redistribution, adaptation or collaboration permission.

Text visible in a browser can always be copied or saved, including code embedded in HTML. Removing a download button is a presentation choice, not technical access control. If enforceable pre-approval is required, the complete source must be removed from this public site and placed behind authenticated private access instead of GitHub Pages.

### Privacy and document availability

The provided CV's phone-number and city/address line was removed using PDF text redaction. The public thesis retains all three original signatures, as requested. The two student-ID lines beneath the candidate signature are masked on its rasterised cover, and the remaining 135 pages are retained from the original thesis. These public copies should still be visually reviewed before publishing. Never commit unredacted originals; deleting them later would not remove them from git history.

The supplied defence-slide PPTX was used as a source for the detailed micro-to-continuum explanation. It is not bundled as a public download, and the earlier broken defence-slides PDF reference remains removed rather than being replaced with a fabricated file.

The included styles use reliable system font stacks, without bundling proprietary/external font files or relying on font-network requests.

### Testing and changes

See `QA_REPORT.md` for local asset, markup, JavaScript, responsive, link, privacy and full-source-integrity checks. The tests run against the shipped files; external sites, email delivery and GitHub deployment cannot be guaranteed by local checks. No scientific or numerical correctness review of the Python research code was performed.

### Updating

After site changes, update `sitemap.xml` timestamps, the footer's last-updated date and resource file links. Keep all 20 source blocks in `code.html` consistent with the approved source version, and keep this public repository free of private datasets, credentials and confidential documents.
