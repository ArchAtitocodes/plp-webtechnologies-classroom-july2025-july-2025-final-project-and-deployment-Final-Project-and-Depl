# Eng. Stephen Odhiambo – Portfolio

This repository contains a static multi-page portfolio scaffold for Eng. Stephen Odhiambo. It includes basic HTML, CSS and JavaScript to serve as a starting point. Replace the placeholder images and the CV in `images/` with your real assets.

Files added:

- `index.html`, `about.html`, `projects.html`, `contact.html`, `blog.html` — pages
- `css/style.css`, `css/responsive.css` — styles
- `js/main.js`, `js/form-validation.js` — interactions
- `images/` — reference directory for images, notes and CV.

Note: This scaffold now references live images and icons from public CDNs (Unsplash for photos and Simple Icons for language logos). You can keep these links (they hotlink assets from the web) or replace them by adding your own files into the local `images/` directory and updating the image src attributes.

How to use:

1. Open `index.html` in a browser. No build step required.
2. Replace files under `images/` (profile photo `atito.jpg`, social icons `github.jpg`, `Lkn2.jpg`, project screenshots, and `STEPHEN ODHIAMBO CV.pdf`).

Notes / next steps:

- Add real images and the PDF to `images/`.
- Improve accessibility, add ARIA labels to modals and forms as needed.
- Optionally wire the contact form to a server or form service (Netlify Forms, Formspree, etc.).

Changelog (automated fixes applied):

- Fixed multiple HTML issues (typos, duplicate alt attribute on hero image, added explicit input type on contact form).
- Corrected CSS syntax errors and removed a duplicated reset block to avoid conflicting global styles.
- Fixed small layout typos (footer flex), added missing semicolons in CSS.
- Wrapped main JS initialization in DOMContentLoaded to avoid race conditions.

Run locally (recommended):

- Using Python 3 (works on Windows PowerShell):

```powershell
# from the project root
python -m http.server 8000; # then open http://localhost:8000 in your browser
```

- Or use VS Code Live Server extension and open the workspace root then "Open with Live Server".

If you want, I can also:

- Add simple validation UI for the contact form (error messages near inputs).
- Replace external CDN icons with local fallbacks.
- Run a basic accessibility/contrast pass and add aria attributes where helpful.

Vanilla confirmation & validation
---------------------------------

This project uses only vanilla web technologies: static HTML5, plain CSS3, and plain JavaScript (ES6). No bundlers, no frameworks, no preprocessors were used. The following quick checks were run during the last update:

- Searched the repository for `package.json`, TypeScript (`.ts`), SCSS (`.scss`) and tooling keywords (vite, webpack, rollup, parcel, react, vue) — none found.
- Per-file reads of `js/main.js` and `js/form-validation.js` confirmed they use only standard DOM APIs and no external JS libraries.
- CSS files (`css/style.css`, `css/responsive.css`) were validated for syntax errors — none found.

validation steps you can run locally:

1. Start a local static server and visit the site across breakpoints (360, 412, 768, 1024, 1366, 1920, 2560).
2. Use an HTML validator (for example https://validator.w3.org/) and a CSS validator to confirm standards compliance.
3. Optionally run Lighthouse in Chrome to inspect accessibility, performance, and best practices.

[Live link]:(https://archatitocodes.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/)

