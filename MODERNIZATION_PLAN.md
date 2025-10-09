# Legacy Website Modernization Plans

## Repository Snapshot

- **[Stack]** Vue 2.7, Vue CLI 4, Vuetify 2 (`package.json`, `src/plugins/vuetify.js`), bundled with Webpack 4 and Babel preset `@vue/app`.
- **[Hosting]** Google App Engine `app.yaml` targets deprecated `runtime: nodejs10`, with outdated static handlers referencing a non-existent `www/` directory.
- **[Structure]** Single-page layout routed via `src/Router.js` history mode to `src/views/Home.vue`, which aggregates all section components. Global styles in `src/style.css` are required in `src/main.js` and also linked directly from `public/index.html`.
- **[Dependencies]** Numerous stale or vulnerable packages: `axios@0.21.1`, `core-js@2`, `npm@7` (misplaced in dependencies), multiple Vue plugins (AOS beta, `vue-progress`, `vue-radial-progress`, `vue-skill-bar`) with uncertain maintenance.
- **[Tooling]** ESLint 5 with `babel-eslint`, no lockfile, no CI pipeline, no automated tests beyond Vue CLI defaults.

## Key Findings

- **[Aging Platform]** Vue 2 + Vue CLI 4 stack lacks long-term support and modern build optimizations; Vuetify 2 components such as `<v-content>` are deprecated for Vuetify 3.
- **[Dependency Risk]** Outdated packages expose known CVEs (e.g., `axios` SSRF/DoS) and the project lacks version pinning or security scanning. CDN asset `@mdi/font@latest` can introduce breaking changes at runtime.
- **[Routing & Deployment]** `app.yaml` fallback to `www/index.html` yields 404s; history mode requires a rewrite to `index.html`. Node 10 runtime is obsolete.
- **[Store & API]** `src/Store.js` chains up to 101 GitHub API requests sequentially, lacks rate-limit handling, and never clears `loading` in the catch block, leaving the UI stuck. Direct client calls expose the site to rate limiting.
- **[Component Issues]** `src/components/About.vue` uses an undefined `name` variable in its ApexCharts formatter and registers plugins inside the component. `src/components/Projects.vue` uses variable shadowing in `v-for` loops and retains extensive commented blocks. `src/components/Career.vue` contains large swaths of commented history. `src/components/Contact.vue` defines unused methods.
- **[Styling]** Global stylesheet linked from `public/index.html` bypasses bundling; multiple components mix inline styles with scoped CSS, hindering theming.
- **[Security]** No CSP, HSTS, referrer policy, or Subresource Integrity; no automated lint/test pipeline to surface issues.
- **[Operational Assets]** No `robots.txt`, `sitemap.xml`, or documented analytics/privacy stance.

## Modernization Objectives

- **[Framework Upgrade]** Migrate to Vue 3 with Vite (or Vue CLI 5+) and Vuetify 3 or a lighter UI system, adopting Composition API or Pinia for state.
- **[Tooling Refresh]** Move to Node 20+, regenerate `package-lock.json`, configure ESLint 9 + Prettier + Husky, introduce Vitest/Jest for tests, and maintain CI (GitHub Actions) with lint/test/audit stages.
- **[Performance & UX]** Batch GitHub data fetches (serverless proxy or build-time caching), streamline components, improve accessibility, and ensure responsive layouts with modern Vuetify grid.
- **[Content Hygiene]** Trim legacy comments, externalize copy where appropriate, and refresh marketing/SEO assets.

## Remediation roadmap

### Phase 1 · Baseline & Hygiene *(completed Oct 9, 2025)*

- **[Node & Metadata — completed Oct 9, 2025]** Node 20.19.5 installed via `nvm`, `package.json` updated with `engines.node` and stray dependencies removed.
- **[Dependency Snapshot — completed Oct 9, 2025]** Regenerated `package-lock.json` under Node 20, created `legacy-vue2-baseline` tag after commit `chore: lock legacy dependencies on node20`.

### Phase 2 · Tooling & Dependency Upgrades *(in progress)*

- **[Project Scaffold — completed Oct 9, 2025]** Bootstrapped the Vue 3 + Vite app in `web/`, migrated sections into `src/components/sections/`, and wired Vuetify, Pinia, and the router in `src/main.js`.
- **[Dependencies — completed Oct 9, 2025]** Refreshed `web/package.json` with Vue 3.5, Vuetify 3.7, Pinia 3, Axios 1.7, Sass, and `vite-plugin-vuetify`; generated `package-lock.json` under Node 20.
- **[Testing & Linting — in progress]** ESLint 9 with Vue plugin configured (`npm run lint`); still evaluating Prettier, Vitest, and Husky setup.

### Phase 3 · Application Refactor *(in progress)*

- **[Routing — completed Oct 9, 2025]** Implemented Vue Router 4 with lazy-loaded `HomeView.vue` and history mode via `src/router/index.js`, coupled with SPA rewrites in `app.yaml`.
- **[State Management — in progress]** Replaced Vuex with Pinia store `src/stores/github.js`, constrained API calls to 12 repos, and added Promise-based language batching; still need server-side caching and advanced rate-limit handling.
- **[Components — completed Oct 9, 2025]** Split sections into dedicated Vue SFCs under `src/components/sections/`, removed legacy comments, and isolated Vuetify setup in `src/plugins/vuetify.js`.
- **[Styles — in progress]** Removed external CSS link from `index.html` and rely on bundled `style.css`/Vuetify theme tokens; outstanding work includes introducing formal design tokens and SASS module organization.

### Phase 4 · Security & Deployment *(in progress)*

- **[Config — completed Oct 9, 2025]** Updated `app.yaml` to Node.js 20, serving `web/dist/` with history-mode rewrites and secure defaults.
- **[Headers & Assets — in progress]** CSP, HSTS, frame, and referrer policies defined in `app.yaml`; `robots.txt` and `sitemap.xml` added under `web/public/`; still need SRI hashes and refreshed favicons.
- **[Automation — pending]** Stand up CI (GitHub Actions), dependency scanning, and deployment documentation enhancements.

### Phase 5 · Verification & Launch *(pending)*

- **[Quality Gates]** Execute unit/integration tests, run Lighthouse/axe audits, validate GitHub API behavior under constrained networks.
- **[Documentation & Monitoring]** Update `README.md` with new workflows, document privacy/analytics, deploy, and monitor App Engine logs for regressions.

## Immediate Action Items

- **[Decide Stack Direction — completed Oct 9, 2025]** Vue 3 + Vite + Vuetify 3 stack approved and implemented under `web/`.
