# Maxim Betin — Modern Website

This repository contains two generations of the site:

- `src/`, `public/`, and the root `package.json` hold the legacy Vue 2 + Vue CLI application kept for reference.
- `modern-client/` houses the modern Vue 3 + Vite rebuild using Vuetify 3, Pinia, and Axios.

## Modern client development

```bash
cd modern-client
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for production

```bash
cd modern-client
npm run build
```

Artifacts are emitted to `modern-client/dist/`.

### Linting & tests

Linting/test tooling is being introduced alongside the modernization. See `MODERNIZATION_PLAN.md` for current status and backlog.

## Deployment (Google App Engine)

Update `app.yaml` to target Node 20 and point handlers to the Vite build directory (see Phase 4 tasks in `MODERNIZATION_PLAN.md`). Once configured:

```bash
gcloud app deploy app.yaml
```
