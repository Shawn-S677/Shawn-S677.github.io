# Shawn Shen Portfolio

Personal portfolio site for an Angular-first Full Stack Software Engineer.

## Stack

- Angular 21 with standalone components and typed static content
- Nx workspace organization
- SCSS responsive design system
- Jest unit tests and Playwright browser tests
- GitHub Pages deployment through GitHub Actions

## Pages

- `/` - profile, capabilities, featured project, and contact links
- `/projects/document-intelligence-platform` - case study for the in-development Document Intelligence Platform concept build

The featured product visual is a concept mockup and is presented as such in the interface. The site does not claim that planned projects have already been delivered.

## Development

```bash
npx playwright install chromium
npm start
npm run lint
npm test
npm run e2e
npm run build
```

Production output is generated in `dist/apps/portfolio/browser`. The Pages workflow copies `index.html` to `404.html` so Angular client routes load correctly when opened directly on GitHub Pages.

## Deployment

This project is intended for the `Shawn-S677/Shawn-S677.github.io` repository and publishes to:

```text
https://shawn-s677.github.io/
```

GitHub Pages deployment requires the repository to be created or authorized under the `Shawn-S677` account before pushing the `main` branch.
