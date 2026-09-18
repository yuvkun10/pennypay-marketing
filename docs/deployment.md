# Deployment

Vercel builds the site using `vercel.json`: `pnpm install --frozen-lockfile`, `pnpm build`, output directory `dist`. All paths rewrite to `index.html`, and responses carry `X-Content-Type-Options` and `Referrer-Policy` headers.

`pnpm build` type checks, runs the Vite build, then `scripts/copy-spa-routes.mjs` copies `index.html` into `dist/login`, `dist/security` and `dist/contact` so direct links work on static hosting.

Only `dist` is published. The `docs` folder is not part of the deployed site.
