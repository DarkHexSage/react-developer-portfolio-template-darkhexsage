# Copilot / AI agent instructions — React portfolio (DarkHexSage)

Quick orientation
- This is a small React SPA (Create React App) using Tailwind CSS. Main entry: `src/index.js` → `src/App.js` (routes).
- Pages live in `src/Pages/` (e.g., `Home.js`, `Projects.js`, `Technologies.js`). Reusable UI lives in `src/Components/` (e.g., `Project.js`, `Header.js`, `Footer.js`).
- Content/data is centralized in `src/Details.js` — update this file for personal details, `projectDetails`, `techStackDetails`, and asset imports.

Build / run / test
- Start dev server: `npm start` (runs `react-scripts start`, opens at http://localhost:3000).
- Build for production: `npm run build` → output in `build/` folder (already present in repo for a built site).
- Run tests: `npm test` (CRA test runner).
- Additional dev deps: Tailwind + PostCSS configured via `tailwind.config.js` and `postcss.config.js`.

Important patterns & conventions (do this project-specific way)
- Single-source content: prefer editing `src/Details.js` for text, images and project metadata rather than editing components.
  - Example: to add a new project, import the image at top of `src/Details.js` and add an object to `projectDetails`. `src/Pages/Projects.js` maps `projectDetails` into `Project` components.
- Props contract: `src/Components/Project.js` expects `{ title, image, description, techstack, previewLink, githubLink }` — keep these keys when adding projects.
- Routing: `src/App.js` uses `react-router-dom` v6 style (`<Routes>` + `<Route path="/" element={<Home/>} />`). Use `element={...}` not `component`.
- Styling: Tailwind utility classes (including `dark:` variants) are used throughout. Avoid adding global CSS unless necessary — prefer Tailwind utilities.
- Images/assets: imported from `src/assets/...` in `src/Details.js`. Do not reference large absolute URLs for local assets; import them so the bundler handles them.

Files to inspect for context
- App routes: `src/App.js`
- Central content: `src/Details.js` (projects, tech stack, personal data, images)
- One-off UI: `src/Components/Project.js` (example of how project objects are rendered)
- Pages: `src/Pages/Projects.js`, `src/Pages/Technologies.js`
- Styles & config: `src/index.css`, `tailwind.config.js`, `postcss.config.js`
- CI / deploy: built site appears under `build/` and `public/` contains static HTML used at deploy-time.

Working with changes
- Content edits (copy, project list, images): update `src/Details.js` and add the image under `src/assets/` then import it in `Details.js`.
- Layout or component changes: modify the appropriate file in `src/Components/` or `src/Pages/` and respect Tailwind patterns.
- When adding tests, follow Create React App conventions and keep tests near the component (e.g., `Component.test.js`).

Debugging hints
- If images don't load in dev, ensure the import paths in `src/Details.js` are correct and that the image exists under `src/assets/`.
- For routing issues, check `src/App.js` and remember to use `BrowserRouter` (already used) and correct `<Route>` `path` values.
- CSS/tailwind build issues: verify `postcss.config.js` and `tailwind.config.js`, and restart dev server after changing Tailwind config.

Do not assume
- There is no backend — all data is local to the frontend via `src/Details.js` and static assets. Do not attempt to call non-existent APIs.
- This repo uses plain JavaScript (no TypeScript), CRA tooling, and Tailwind. New tools should be added only when necessary.

If you are an AI writing code changes
- Keep edits minimal and focused. When changing content, prefer adjusting `src/Details.js` instead of editing multiple components.
- Preserve existing CSS classes and Tailwind usage unless the change is specifically a styling refactor.
- When adding new pages or components, register routes in `src/App.js` and ensure imported assets are declared in `src/Details.js` if they are content-related.

Examples (copy/paste snippets you may use)
- Add project object (append in `projectDetails` in `src/Details.js`):

```js
{
  title: "New Project",
  image: projectImageX, // import at top of Details.js
  description: "Short description",
  techstack: "React, Tailwind",
  previewLink: "https://example.com",
  githubLink: "https://github.com/username/repo"
}
```

Questions or missing info
- Tell me if you want CI/deploy conventions added (Netlify/Netlify _redirects is present in repo but not documented here).

---
If you'd like, I can expand this file with CI/deploy steps or add a short contributor checklist. Reply with what to add or any corrections.
