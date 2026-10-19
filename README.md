# Johaan Tomy Kallany — research website

Static, accessible, responsive academic research website for GitHub Pages. It preserves the supplied site architecture, thesis analysis and scholarly content, with a three-part **Research directions** overview and a permission-aware research-code preview.

## Deploy

1. Extract this archive. Upload **the contents** (not the enclosing folder) to the root of `kallanyJohaan/kallanyJohaan.github.io` on the `main` branch.
2. In GitHub Settings → Pages, configure *Deploy from a branch*, `main`, `/ (root)`.
3. Keep the directory structure and exact capitalisation. Confirm the code search, the two document downloads and the scientific figures work after publishing.
4. If the repository has existing files, this package replaces the site root; review the changes before committing. The package has **not** modified GitHub remotely. It includes redirects for the three older pages that currently exist in the live repository.

### Contents

- `index.html`: homepage, conceptual animation, research directions, thesis highlights, background and PhD enquiry.
- `research.html`: complete accessible MSc-thesis study, results, original figure captions, scope, proposed directions and BibTeX.
- `code.html`: searchable, browser-readable excerpts from all 20 research modules, with a permission-request route for complete source access.
- `style.css`, `script.js`, `animation.js`: dependency-free layout and controls.
- `assets/figures/`: 11 original thesis figures extracted from cited pages with optimised web-sized copies.
- `assets/images/`: two self-contained conceptual SVG research-direction illustrations.
- `assets/Johaan_Kallany_Thesis.pdf`: public thesis PDF (25.35 MB).
- `assets/Johaan_Tomy_Kallany_CV.pdf`: public research CV (0.19 MB).
- `assets/social-card.jpg`, `favicon.svg`: Open Graph preview and favicon.
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`: GitHub Pages configuration.
- `thesis.html`, `resources.html`, `contact.html`: lightweight redirects protecting links to legacy pages in the existing repository.

### Scientific and bibliographic integrity

The original thesis figures are cropped directly from the supplied thesis PDF, not AI-generated plots. Captions point to the corresponding thesis pages. The hero animation and the inverse-design/continuum diagrams are **conceptual illustrations**, not research data or quantitative model solutions. Future PhD directions are explicitly labelled *proposed*.

The López–Puglisi citation is: C. López and A. Puglisi, *Continuum description of finite-size particles advected by external flows: The effect of collisions*, Physical Review E **69**, 046306 (2004), DOI `10.1103/PhysRevE.69.046306`.

### Research code access

The public site contains selected, read-only-in-context excerpts from the 20 Python modules. It does **not** contain the complete `.py` files, a source archive, the DNS dataset or a direct research-code download. The request buttons open a pre-filled email so complete source access can be reviewed and granted manually.

Text visible in a browser can always be copied or saved. The access control therefore comes from publishing only selected excerpts and keeping the complete project in a private repository—not from hiding a download button. Never add the complete source to the public website repository, even at an unlinked URL, because any committed public file can be retrieved without permission.

### Privacy and document availability

The provided CV's phone-number and city/address line was removed using PDF text redaction. The public thesis retains all three original signatures, as requested. The two student-ID lines beneath the candidate signature are masked on its rasterised cover, and the remaining 135 pages are retained from the original thesis. These public copies should still be visually reviewed before publishing. Never commit unredacted originals; deleting them later would not remove them from git history.

A defence-slides PDF and a near-wall video were **not supplied** in this upload and were **not present** in the checked GitHub repository. Their broken download/video references have therefore been removed rather than fabricating replacements. Add those links back only when their actual files are provided.

The included styles use reliable system font stacks, without bundling proprietary/external font files or relying on font-network requests.

### Testing and changes

See `QA_REPORT.md` for local asset, markup, JavaScript, responsive, link, privacy and excerpt-integrity checks. The tests run against the shipped files; external sites, email delivery and GitHub deployment cannot be guaranteed by local checks. No scientific or numerical correctness review of the Python research code was performed.

### Updating

After site changes, update `sitemap.xml` timestamps, the footer's last-updated date and resource file links. Keep excerpts in `code.html` consistent with the approved source version, and keep this public repository free of complete research source, private data and confidential documents.
