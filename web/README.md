# Web App (Vue 3 + Vite)

This directory contains the rebuilt version of [Maxim Betin](https://maximbetin.com)'s personal site. It replaces the legacy Vue 2 + Vue CLI app with a modern stack:

- Vue 3 with `<script setup>` single-file components
- Vuetify 3 for layout, theming, and responsive grids
- Pinia for state management (`@/stores/github.js`)
- Axios for outbound API requests
- Vite for fast development server and optimized builds

## Getting started

```bash
cd web
npm install
npm run dev
```

The development server runs at `http://localhost:5173` and supports hot module replacement.

## Project structure

- `src/main.js` bootstraps Vue, Pinia, Vuetify, and the router.
- `src/router/index.js` defines a single-page layout with lazy history routing.
- `src/components/layout/` contains navigation and footer shells.
- `src/components/sections/` hosts the hero, about, skills, career, projects, and contact sections.
- `src/stores/github.js` fetches and caches GitHub repository data via Pinia.
- `public/` contains static assets (`favicon.ico`, `screenshot.png`).

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Produce a production build in dist/
npm run preview  # Preview the production build locally
```

## Testing & linting

Automated linting and testing are being introduced as part of the modernization effort (see repository-level `MODERNIZATION_PLAN.md` for the roadmap). Future work includes configuring ESLint, Prettier, and Vitest.

## Environment configuration

The application uses a GitHub public REST API call (`https://api.github.com/users/maximbetin/repos`). No secrets are required. Rate limiting is mitigated by batching and limiting the number of repositories rendered.

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the generated `dist/` directory via Google App Engine using the repository root `app.yaml`:

   ```bash
   gcloud app deploy app.yaml
   ```

The updated `app.yaml` serves static assets from `web/dist`, enforces Node.js 20 runtime, and applies security headers (HSTS, CSP, referrer policy, frame options, and nosniff).

## Security headers

During deployment the following headers are set by `app.yaml`:

- `Content-Security-Policy`: restricts scripts/styles to first-party sources and allows GitHub API calls.
- `Strict-Transport-Security`: enforces HTTPS with preload and subdomain coverage.
- `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`: harden responses against MIME sniffing, clickjacking, and uncontrolled referrers.

## Further improvements

Upcoming tasks include:

- Enabling automated lint/test pipelines (GitHub Actions or similar).
- Expanding accessibility testing (Lighthouse, axe).
- Adding SRI hashes and analytics/privacy documentation once tooling is finalized.
