# Johaan Tomy Kallany — Academic Research Website

A complete, self-contained, responsive, five-page academic website designed for GitHub Pages. No npm, build tools, backend, database, web fonts, or third-party JavaScript libraries are required.

## Pages

- `index.html` — home page with research introduction and an interactive **conceptual** particle-flow model (Play/Pause/Reset).
- `research.html` — research themes, computational approach, scientific insights, and future directions.
- `thesis.html` — original MSc thesis overview, methods, key findings, limitations, and a gallery of **actual figures** extracted from the thesis.
- `resources.html` — PDF downloads and computational project summaries.
- `contact.html` — contact information and professional profiles.

## Included, real documents

- `documents/Johaan_Tomy_Kallany_MSc_Thesis.pdf` — the 136-page thesis provided by the user, **not** a placeholder.
- `documents/Johaan_Tomy_Kallany_CV.pdf` — the supplied two-page CV, **not** a placeholder.

All research images in `assets/images/` except `social-card.png` and the favicon were extracted from the original thesis PDF. Image file names refer to their subject, and the thesis page captions retain their original thesis figure numbers.

**Scientific accuracy:** The animated homepage panel is explicitly an educational illustration generated from an analytic incompressible field with simplified inertial-particle contact handling. It is **not** data from the thesis, and is not presented as a DNS or fully coupled fluid–particle computation. The real thesis uses a reduced, one-way-coupled wall-parallel model in its near-wall chapter.

## Publish on GitHub Pages

For the GitHub repository `kallanyJohaan/kallanyJohaan.github.io`:

1. **Download and unzip** the website archive.
2. Open your website repository on GitHub. Upload **all contents of the unzipped folder directly into the repository root**. Make sure `index.html` is in the root, not hidden inside another folder. The `assets/` and `documents/` folders must remain intact.
3. Commit the files to your default branch (`main`, if that is what your repository uses).
4. Under **Settings → Pages**, select **Deploy from a branch**, choose the correct branch and `/ (root)`, and save (if not already configured).
5. Once GitHub Pages has built the site, visit your configured website URL. Check the thesis PDF and CV buttons, then verify the mobile navigation and homepage animation.

If the repository already contains website files, back them up or create a branch before replacing anything. Publishing is not performed by this package.

For a project repository rather than an account-level Pages repository, relative internal links/assets also work, but **canonical URLs, `robots.txt`, `sitemap.xml`, and the `og:image` URL** should be updated from `kallanyjohaan.github.io` to the actual published URL.

## Editing

| To change | File |
| --- | --- |
| Homepage and scientific narrative | `index.html` |
| Research summaries | `research.html` |
| Thesis details, findings, figure captions | `thesis.html` |
| Resource links | `resources.html` |
| Contact information | `contact.html` |
| Colours, typography and layout | `assets/css/site.css` |
| Scientific conceptual animation, mobile menu, copy-email button | `assets/js/site.js` |
| Original thesis figures | `assets/images/*.webp` |
| PDFs | `documents/*.pdf` |

**Important: public CV review.** The included CV was supplied in October 2026 and contains personal contact details, including a phone number. Publishing this repository makes the document publicly accessible. Review the PDF and replace it if you prefer a public-facing version with fewer contact details. The site itself displays only the academic email and professional links.

**Thesis figure rights.** The figures are taken from the user's thesis. Confirm any institutional/publication permissions applicable to public distribution before publishing.

## Accessibility and performance

- Responsive layout with a mobile navigation toggle.
- Keyboard-visible focus states and a skip link.
- Alt text on original scientific figures.
- Animation controls with accessible names and reduced-motion support.
- Responsive scientific images encoded as WebP; no external runtime dependencies.
- CSS system-font fallbacks (no bundled font files).

## Limits and recommended final checks

The design includes the selected scientific results from the submitted thesis, not fabricated sample datasets or plots. **Defence slides are not bundled because no original slide deck was provided.** Contact links should be reviewed before publication if they change. The academic degree is written as **Joint European MSc MathMods (Mathematical Modelling in Engineering)**.

No publication or GitHub push has been performed; this is an upload-ready source archive.
