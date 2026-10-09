# Johaan Tomy Kallany — Research website

A light, responsive research portfolio for GitHub Pages. The homepage gives a concise academic overview; `research.html` explains the thesis question, methods, findings and model scope. Scientific content is grounded in the supplied MSc thesis, defence slides and latest CV (version 4), dated 9 October 2026.

## Update the GitHub site

1. Extract the ZIP. Open the extracted folder containing `index.html`.
2. In `kallanyJohaan/kallanyJohaan.github.io`, choose **Add file → Upload files**.
3. Drag the extracted contents into the upload area, including the entire `assets` folder. Upload the contents at the repository root, without an extra parent folder and without uploading the ZIP itself.
4. Choose **Commit changes** to update `main`.
5. In **Actions**, wait for the Pages deployment to finish, then refresh https://kallanyjohaan.github.io/.

The `assets` folder must appear at the repository root after uploading. It contains the research figures, three PDF downloads and the simulation video. Check the homepage image and **View CV** after deployment; a 404 means the corresponding asset has not reached the repository at the linked path.

GitHub Pages should publish from `main` and `/ (root)`. Each individual file is below GitHub's 25 MiB web-upload limit. The original PowerPoint is not included because it exceeds that limit; a PDF export and a simulation video are included instead.

## Files

- `index.html`: profile, thesis overview, selected projects, education and contact.
- `research.html`: detailed research overview with original scientific figures.
- `style.css`: light palette, typography, responsive layout and print styles.
- `script.js`: accessible mobile navigation and copyright year.
- `assets/`: public document copies, extracted research figures, responsive lossless WebP image variants and a simulation video.
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll`: site metadata and Pages configuration.

There is no build step, dependency installation, analytics or external font request. Open `index.html` directly in a browser for a local preview.

## Research sources

The thesis is *Collective Dynamics of Colliding Inertial Particles in Prescribed Carrier Flows*, by Johaan Tomy Kallany, supervised by Christophe Henry with co-advisor Laetitia Giraldi, academic year 2025/2026.

Figure files preserve the actual scientific plots:

| File | Source |
| --- | --- |
| `near-wall-particles.png` | Thesis figure 4.4, printed page 61 (PDF page 66) |
| `density-coherence.png` | Thesis figure 4.8, printed page 66 (PDF page 71) |
| `pair-recurrence.png` | Thesis figure 4.15, printed page 81 (PDF page 86) |
| `shear-regimes.png` | Thesis figure 3.3, printed page 36 (PDF page 41) |
| `cluster-morphology.png` | Defence slide 10 |
| `near-wall-comparison.mp4` | Embedded simulation from defence slide 9 |

The public thesis copy omits student IDs and handwritten signatures from the cover. The public CV copy omits the phone and location line. The supplied originals are unchanged. The defence PDF uses still frames for embedded videos; the near-wall video is also playable on the research page.

The manuscript is labelled **in preparation**. Proposed optimisation, machine learning and control directions are explicitly separate from completed thesis work. No peer-reviewed publication, DOI, public solver repository or reproducibility package is claimed.

## Maintain the content

Edit the text in the two HTML files and update their metadata when research status changes. Replace documents using the same filenames to preserve links. Update the footer date after substantive changes. Add publication and code links only when those resources exist publicly.

The site includes semantic headings, descriptive figure captions, a keyboard skip link, visible focus styles, mobile menu controls, reduced-motion handling and print styles.
