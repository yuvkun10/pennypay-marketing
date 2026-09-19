# AGENTS.md

PennyPay Marketing is the live public marketing and workspace entry site for `dulciepay.com.au`: a static React and Vite app hosted on Vercel.

## Setup

Node 22 or newer and pnpm 10 (`packageManager` pins `pnpm@10.33.2`).

```sh
pnpm install
```

No environment variables are read. Workspace names and login URLs live in `src/config/workspaces.ts`.

## Commands

```sh
pnpm dev    # vite dev
pnpm test   # vitest run
pnpm build  # tsc --noEmit, vite build, scripts/copy-spa-routes.mjs
```

`pnpm build` is also the type check.

## Project structure

- `src/pages/`: `HomePage`, `LoginPage`, `SecurityPage`, `ContactPage`.
- `src/components/`: nav, hero, footer, `WorkspaceLoginSelector`.
- `src/config/workspaces.ts`: workspace list and login redirect targets, tested in `workspaces.test.ts`.
- `packages/pennypay-ui/`: local copy of the unpublished `@pennypay/ui` design system.
- `scripts/copy-spa-routes.mjs`: copies `index.html` into each route folder of `dist`.
- `vercel.json`: build, rewrites and security headers.

The full map is in [docs/architecture.md](docs/architecture.md).

## Conventions

- TypeScript `strict`, with `noUncheckedIndexedAccess` in `tsconfig.base.json`. No linter, formatter or commit convention is configured.
- Do not add attribution trailers to commits.

## Testing

Run `pnpm test` and `pnpm build` before a PR. There is no CI workflow, so run them locally.

## Safety

- The site is live and Vercel builds it from `vercel.json`. Do not change `vercel.json`, headers or deployment settings without an explicit request.
- `/login` is only a workspace selector that redirects to each workspace's own login screen. Do not add credential fields, OAuth, MFA, session creation, SSO or private API calls.
- The only browser storage is the last selected workspace id. Keep it that way.
- Never commit secrets, `.env` files or client data.

## More

- [docs/README.md](docs/README.md): docs index
- [docs/deployment.md](docs/deployment.md): Vercel build and hosting
- [packages/pennypay-ui/README.md](packages/pennypay-ui/README.md): design system package notes
