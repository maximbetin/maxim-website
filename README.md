# Maxim Betin — Portfolio Website

This repository contains the Vue 3 + Vite source for [Maxim Betin](https://maximbetin.com)'s personal website. The application lives under `web/` and is deployed to Google App Engine.

## Stack overview

- Vue 3 with `<script setup>` single-file components
- Vite for local development and bundling
- Vuetify 3 for layout and theming
- Pinia for state management (`web/src/stores/github.js`)
- Axios for public GitHub API requests

## Local development

```bash
cd web
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` with hot module replacement.

## Available scripts

```bash
npm run dev      # Start development server
npm run build    # Produce production assets in web/dist
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint on src/**/*.js and src/**/*.vue
```

## Linting & testing

- ESLint 9 with the Vue plugin is configured via `web/eslint.config.js`.
- Prettier, Vitest, and Husky are optional future additions if stricter automation is required.

## Deployment

1. Build the site: `npm run build`
2. Deploy with App Engine: `gcloud app deploy app.yaml`

`app.yaml` targets the Node.js 20 runtime, serves `web/dist/`, and sets CSP, HSTS, referrer, and frame headers. Static assets include `robots.txt` and `sitemap.xml` under `web/public/`.

## Environment notes

- GitHub data is fetched from `https://api.github.com/users/maximbetin/repos` without secrets.
- Requests are limited client-side to 12 repositories and display the top three languages per repo.

## Future enhancements

- Add Prettier formatting, Vitest tests, and/or Husky hooks if automated checks become necessary.
- Configure a lightweight GitHub Actions workflow that runs `npm run lint` and `npm run build`.
- Add Subresource Integrity hashes and refreshed favicons before the next design update.
- Run Lighthouse/axe accessibility checks and document any findings.
- Expand README privacy/analytics notes if tracking is introduced.
