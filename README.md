# Johaan Tomy Kallany — Research website

A light, responsive research portfolio for GitHub Pages. The homepage centres the broader question of how flow, particle inertia and local interactions produce collective transport. The thesis follows as a concrete study; `research.html` explains the individual contribution, findings, methods and model scope. Scientific content is grounded in the MSc thesis, the defence slides and the CV (version 4, 9 October 2026); every result on the site links to the thesis page it comes from.

## Update the GitHub site

1. Extract the ZIP. Open the extracted folder containing `index.html`.
2. In `kallanyJohaan/kallanyJohaan.github.io`, choose **Add file → Upload files**.
3. Drag the extracted contents into the upload area, including the entire `assets` folder. Upload the contents at the repository root, without an extra parent folder and without uploading the ZIP itself.
4. Choose **Commit changes** to update `main`.
5. In **Actions**, wait for the Pages deployment to finish, then refresh https://kallanyjohaan.github.io/.

The `assets` folder must appear at the repository root after uploading. It contains the research figures, three PDF downloads and the simulation video. Check the homepage image and all three **Download PDF** links after deployment; a 404 means the corresponding asset has not reached the repository at the linked path.

### Verify the documents after deployment

The **Outputs** lists on both pages use native, same-origin download links with explicit PDF filenames. The **View CV**, **Read full thesis** and thesis page citations open documents for reading. Downloads work without JavaScript; a browser or device that opens a preview also provides its own save/download action.

| Document | Required file inside the repository | Pages |
| --- | --- | ---: |
| CV | `assets/Johaan_Tomy_Kallany_CV.pdf` | 2 |
| Thesis | `assets/Johaan_Kallany_Thesis.pdf` | 136 |
| Defence slides | `assets/Thesis_Defence_Slides.pdf` | 37 |

After a successful Pages deployment, open each link below and confirm it displays the correct PDF, then use each **Download PDF** link on the site and open the saved file. Keep filenames and capitalisation exactly as packaged.

- https://kallanyjohaan.github.io/assets/Johaan_Tomy_Kallany_CV.pdf
- https://kallanyjohaan.github.io/assets/Johaan_Kallany_Thesis.pdf
- https://kallanyjohaan.github.io/assets/Thesis_Defence_Slides.pdf

GitHub Pages should publish from `main` and `/ (root)`. Each individual file is below GitHub's 25 MiB web-upload limit. The original PowerPoint is not included because it exceeds that limit; a PDF export and a simulation video are included instead.

## Files

- `index.html`: who I am, the research question (with the schematic animation), the thesis with its three findings, updates, background, documents and contact.
- `research.html`: the thesis study in detail — question, findings with the original figures, methods, scope, directions, documents and a BibTeX entry with a copy button.
- `404.html`: the page GitHub Pages shows for a broken link.
- `style.css`: typography (Source Serif 4 for headings, IBM Plex Sans for text, IBM Plex Mono for BibTeX), layout, responsive rules and print styles.
- `script.js`: mobile navigation, copyright year and the Copy BibTeX button.
- `animation.js`: the schematic canvas illustration (flow, contacts, collective structure).
- `assets/`: public document copies, extracted research figures, responsive WebP variants and the simulation video.
- `assets/fonts/`: self-hosted fonts (SIL Open Font License 1.1).
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll`: site metadata and Pages configuration.

There is no build step, dependency installation, analytics or external request of any kind; fonts are served from the repository. Open `index.html` directly in a browser for a local preview.

When news happens (a submitted manuscript, a talk, a PhD offer), add a `<li>` at the top of the **Updates** list in `index.html` and update the `lastmod` dates in `sitemap.xml` and the footer date on both pages.

## Homepage animation

The animation is a schematic of the research question, not a thesis simulation or a quantitative result, and the page says so under it. It cycles through three phases: a carrier flow organising particle paths, contacts between particles, and population-level structure. Visitors can pause it; a reduced-motion preference starts it paused, and a static SVG stands in without JavaScript. Rendering stops when the illustration is out of view or the tab is hidden.

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
