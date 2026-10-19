# kallanyjohaan.github.io

Research website of **Johaan Tomy Kallany** — computational modelling of particle-laden flows. Joint European MSc MathMods (Mathematical Modelling in Engineering); MSc thesis at Inria Sophia Antipolis, 2026.
Live at **https://kallanyjohaan.github.io/**

The homepage states the research question (how carrier flow, particle inertia and collisions shape collective transport) and presents the MSc thesis, *Collective Dynamics of Colliding Inertial Particles in Prescribed Carrier Flows* (Inria Sophia Antipolis, 2026), with its three main findings. `research.html` goes deeper: question, findings with the original figures, numerical methods, scope and limitations, directions, documents and a BibTeX entry. Every result on the site links to the thesis page it comes from.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Homepage: who I am, the question in motion, the thesis and its findings, updates, background, documents, contact |
| `research.html` | The thesis study in detail |
| `404.html` | Shown by GitHub Pages for a broken link |
| `style.css` | Typography, layout, responsive and print styles |
| `script.js` | Mobile navigation, copyright year, Copy BibTeX button |
| `animation.js` | The schematic canvas animation on the homepage |
| `assets/` | Public copies of the thesis, defence slides and CV; the social-preview image; the simulation video |
| `assets/figures/` | Figures extracted from the thesis PDF at native resolution (`fig-N-M.webp`, plus `-1100` previews and a few labelled panel crops) |
| `assets/fonts/` | Self-hosted fonts (see Credits) |
| `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Site metadata and Pages configuration |

Static HTML, CSS and JavaScript only. No build step, no dependencies, no analytics and no external requests of any kind. Open `index.html` in a browser for a local preview.

## Documents

Keep these filenames exactly as they are; every link on the site points to them.

| Document | Path | Size |
| --- | --- | ---: |
| Master's thesis | `assets/Johaan_Kallany_Thesis.pdf` | 25.9 MB |
| Defence slides | `assets/Thesis_Defence_Slides.pdf` | 15.7 MB |
| CV | `assets/Johaan_Tomy_Kallany_CV.pdf` | 0.2 MB |

**Privacy.** The public thesis copy has the student ID numbers and both handwritten signatures removed from the cover page (the page is rasterised; everything else is the original). The public CV has the phone-number and address line removed by true redaction, so it cannot be recovered from the file. Never upload the unredacted originals to this repository: once pushed, a file stays in the Git history even after it is deleted. Each file is below GitHub's 25 MiB web-upload limit.

## Figures

All figures are the original thesis figures, extracted from the PDF at native resolution and unedited apart from cropping. Printed page numbers map to PDF pages with an offset of +5.

| File | Source | Used |
| --- | --- | --- |
| `fig-3-1.webp` (+ `fig-3-1ab.webp`, panels a,b) | Fig. 3.1, p. 33 (PDF 38) | thesis page |
| `fig-3-2.webp` | Fig. 3.2, p. 35 (PDF 40) | homepage, thesis page |
| `fig-3-3.webp` | Fig. 3.3, p. 36 (PDF 41) | thesis page gallery |
| `fig-4-3.webp` | Fig. 4.3, p. 60 (PDF 65) | thesis page gallery |
| `fig-4-4.webp` (+ `-700`, `-1100`, `-1400`) | Fig. 4.4, p. 61 (PDF 66) | homepage, social card |
| `fig-4-5.webp` | Fig. 4.5, p. 62 (PDF 67) | thesis page gallery |
| `fig-4-8.webp` (+ `fig-4-8b.webp`, panel b) | Fig. 4.8, p. 66 (PDF 71) | homepage, thesis page |
| `fig-4-11.webp` | Fig. 4.11, p. 70 (PDF 75) | thesis page gallery |
| `fig-4-13.webp` | Fig. 4.13, p. 76 (PDF 81) | thesis page gallery |
| `fig-4-15.webp` (+ `fig-4-15c.webp`, panel c) | Fig. 4.15, p. 81 (PDF 86) | homepage, thesis page |
| `fig-4-16.webp` | Fig. 4.16, p. 85 (PDF 90) | thesis page gallery |
| `near-wall-comparison.mp4` | Simulation animation from defence slide 9 | thesis page |

Every `-1100.webp` file is a 1100 px preview of the same figure for page loading; the links open the full-resolution file.

## The homepage animation

A schematic of the research question, not a simulation result, and labelled as such on the page. Three phases cycle: a carrier flow organises particle paths (light particles follow it, heavy ones lag), particles meet and contacts flash, and the population settles into streamwise bands. A legend names the four marks (carrier flow, light particle, heavy particle, contact). It can be paused; a reduced-motion preference starts it paused; a static SVG stands in without JavaScript; rendering stops when the panel is out of view or the tab is hidden.

## Updating the site

- **News** (a submitted manuscript, a talk, a PhD offer): add a `<li>` at the top of the *Updates* list in `index.html`.
- **A new document**: replace the file in `assets/` under the same name.
- **A publication**: add it under *Documents* on both pages and replace the "manuscript in preparation" line.
- After any change, update the `lastmod` dates in `sitemap.xml` and the "Last updated" line in both footers.

Deploy by committing to `main`; GitHub Pages publishes from `main` / root. After deployment, open the three document links above and the homepage figure to confirm they load.

## Credits

Text, figures and documents © Johaan Tomy Kallany. The near-wall carrier-flow DNS was performed by Jérémie Bec (Institut de Physique de Nice).
Fonts: [Source Serif 4](https://github.com/adobe-fonts/source-serif) (Adobe), [IBM Plex Sans and IBM Plex Mono](https://github.com/IBM/plex) (IBM), all under the SIL Open Font License 1.1, packaged via [Fontsource](https://fontsource.org/).
