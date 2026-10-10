# KINLU unified enterprise website

Live site: https://sarim-syed.github.io/Kinlu-Docs/landing/

The React 19 + TypeScript + Tailwind 4 source for the unified KINLU concept is in this directory. The published static build is in the repository's `/landing/` directory. The old `/landing` link redirects to it. Other existing repository pages are unchanged; the previous landing page remains available in Git history.

## Run locally

Requirements: Node.js 22+ and pnpm.

```bash
cd site-source
pnpm install
pnpm run dev
```

## Check and publish

```bash
pnpm run check
pnpm run build:pages
cd ..
git add site-source landing landing.html .nojekyll
git commit -m "Update KINLU website"
git push origin main
```

GitHub Pages publishes from `main` at the repository root. `build:pages` uses `/Kinlu-Docs/landing/` as the asset and router base. It creates an HTML entry point for every route so direct links and page refreshes work without a custom server. For another host use `pnpm run build` and configure SPA fallback, or adapt the exporter and base path.

## Pages

- Homepage
- Product: platform overview, KINLU CHAT, KINLU PREDICT, how it works, data integrations, enterprise readiness
- Solutions: customer churn, customer lifetime value, customer segmentation
- Outcomes index
- Demo request page

Conversion prediction and revenue forecasting are labelled **Coming soon**, not presented as available solutions.

## Primary edit locations

- `client/src/pages/Home.tsx`: homepage narrative and sections
- `client/src/pages/ProductPages.tsx`: Product pages
- `client/src/pages/SolutionPages.tsx`: Solutions pages and demo page
- `client/src/components/KinluSite.tsx`: navigation, footer, buttons, illustrative product UI
- `client/src/index.css`: design system and responsive styling
- `client/src/App.tsx`: routes and base-path support

## Prototype boundaries

This is the marketing website concept, not the actual KINLU application. Visual predictions and metrics are illustrative, not customer results. Model controls in illustrations do not train or deploy a real model. Sign-in is an onboarding information page, not an authentication flow.

The demo request uses an email handoff to `sarim@kinlu.ai`, not a CRM/backend. Before production, connect the form to a real submission endpoint, preserve all entered field values, connect sign-in to the real product, verify capability wording with engineering, and replace illustrative UI with verified product screens where appropriate.

No credentials, platform management configuration, or customer datasets are included.
