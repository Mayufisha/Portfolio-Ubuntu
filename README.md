# Samuel Molla — Ubuntu desktop portfolio

Built from the actual React portfolio at `Personal-Portfolio/React-Portfolio`, with its full-stack bio, portrait, learning journey, eleven skills, seven project records, résumé PDF and EmailJS contact integration.

## Run and edit

```sh
npm ci
npm run dev
```

Requires Node.js 20.19+ or 22.12+. `npm run build` builds `dist/`; `npm run preview` serves that build. Deploy `dist/` to a static host. For the included preview without installing packages, run `node preview.mjs` and visit the printed URL. React source files require a build; do not open the source index directly as a file.

## Desktop experience

Ubuntu / GNOME: full-height dock, Activities overview with application search and workspace previews, rounded header bars, warm wallpaper and GNOME-style file navigation.

Windows support drag by title bar, resize from their corner, double-click title bar to maximize, minimize and close. Reopen with a launcher, desktop shortcut, or task button. On mobile, windows fit the viewport. Projects open in a file manager with search, category filtering, grid/list views and project detail pages. Terminal supports `help`, `whoami`, `ls`, `pwd`, `date`, `neofetch`, `clear`, `open projects/about/skills/contact/resume` and arrow-key history. Alt+T opens the terminal; Escape dismisses menus. Right-click the desktop for its context menu. Appearance settings change this page only.

## Contact and content

The original EmailJS service/template configuration is retained in `src/Contact.jsx`. A submission sends a real message; no test messages were sent during validation. Delivery depends on the original EmailJS account and allowed origin settings. Submission failures are shown in the form. Project records and URLs are retained directly from `src/Projects.jsx`; this desktop uses the local project list rather than renaming projects using live GitHub data. Dates and proficiency levels reflect the original source.

Desktop implementation: `src/App.jsx` and `src/desktop.css`. Original content components: `Home.jsx`, `About.jsx`, `Skills.jsx`, `Contact.jsx`, `Projects.jsx`. Distribution identity is a browser interpretation, not an OS installation or an affiliated distribution product.

## Open without a server

Double-click `Open-Portfolio.html` (or `dist/desktop.html`). The packaged desktop includes its compiled JavaScript and CSS and uses the adjacent images and résumé. `npm run build` refreshes both hosted and file-opening builds. Contact delivery may require a hosted origin allowed by EmailJS.
