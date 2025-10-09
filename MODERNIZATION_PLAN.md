# Legacy Website Modernization Plan

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
- **[Security Hardening]** Implement security headers, SRI-pinned assets, dependency scanning, and remove direct `latest` CDN pulls.
- **[Performance & UX]** Batch GitHub data fetches (serverless proxy or build-time caching), streamline components, improve accessibility, and ensure responsive layouts with modern Vuetify grid.
- **[Content Hygiene]** Trim legacy comments, externalize copy where appropriate, and refresh marketing/SEO assets.

## Remediation Roadmap

### Phase 1 · Baseline & Hygiene

- **[Node & Metadata]** Install Node 20+, add `engines` field, remove `npm`/unused packages from `package.json`.
- **[Dependency Snapshot]** Run `npm install` to generate a lockfile and capture a legacy tag (`legacy-vue2`).

### Phase 2 · Tooling & Dependency Upgrades

- **[Project Scaffold]** Create a new Vue 3 + Vite project, port assets from `public/`, and reconfigure router/store.
- **[Dependencies]** Reintroduce only required libraries at current versions (`axios` ≥1.6 or alternative). Replace deprecated utilities (`core-js@3`, maintained chart/skill components).
- **[Scripts & Testing]** Replace `vue-cli-service` scripts with Vite equivalents, configure ESLint + Prettier, add Vitest/Jest test suite.

### Phase 3 · Application Refactor

- **[Routing]** Migrate to Vue Router 4, enable lazy routes, and ensure server rewrites.
- **[State Management]** Replace Vuex with Pinia/composables; redesign GitHub fetch to limit requests and handle errors.
- **[Components]** Break monolithic components into focused modules, remove dead code, fix chart formatter bug, relocate plugin registration to dedicated files.
- **[Styles]** Adopt design tokens/SASS modules, remove direct stylesheet link from `public/index.html`, and rely on bundler imports.

### Phase 4 · Security & Deployment

- **[Config]** Update `app.yaml` to `runtime: nodejs20`, correct history-mode handlers, and remove `www/` references.
- **[Headers & Assets]** Add CSP, HSTS, Referrer-Policy, and SRI hashes; include `robots.txt`, `sitemap.xml`, and updated favicons.
- **[Automation]** Configure CI pipeline (lint/test/build/audit), enable Dependabot or Renovate, and document deployment (`gcloud app deploy`).

### Phase 5 · Verification & Launch

- **[Quality Gates]** Execute unit/integration tests, run Lighthouse/axe audits, validate GitHub API behavior under constrained networks.
- **[Documentation & Monitoring]** Update `README.md` with new workflows, document privacy/analytics, deploy, and monitor App Engine logs for regressions.

## Immediate Action Items

- **[Decide Stack Direction]** Confirm target UI library and deployment strategy before migration work begins.
- **[Establish Tracking]** Create issues or project board entries for each phase, prioritizing high-risk dependency and hosting updates.
- **[Communicate Changes]** Share modernization plan with stakeholders, aligning timelines for content refresh and design updates.
