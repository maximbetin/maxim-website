# Maxim Betin — Modern Website

This repository now focuses exclusively on the Vue 3 + Vite application under `web/`. The legacy Vue 2 codebase has been removed to avoid drift and simplify maintenance.

## Develop locally

```bash
cd web
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default with hot module replacement.

## Build for production

```bash
cd web
npm run build
```

The optimized assets are emitted to `web/dist/`.

## Testing & linting

Linting and automated tests are being introduced as part of the ongoing modernization roadmap (see `MODERNIZATION_PLAN.md`). For now, run the build before publishing to ensure the bundle succeeds.

## Deployment (Google App Engine)

`app.yaml` has been updated to target Node 20 and serve the Vite build output from `web/dist/` with protective headers. Deploy with:

```bash
gcloud app deploy app.yaml
```
