# PennyPay Marketing

Public marketing and workspace entry site for `dulciepay.com.au`. It is a static React site built with Vite and deployed on Vercel. Visitors read the public pages and use `/login` to pick a workspace, which redirects them to that workspace's own login screen. The site is live and handles no credentials itself.

## Installation

Prerequisites: Node 22 or newer and pnpm 10 (`packageManager` pins `pnpm@10.33.2`).

```sh
pnpm install
```

No environment variables are read. See [docs/configuration.md](docs/configuration.md).

## Usage

```sh
pnpm dev      # Vite dev server
pnpm test     # Vitest, single run
pnpm build    # type check, Vite build, copy index.html into each route folder
```

Vercel builds and hosts the site from `vercel.json`. See [docs/deployment.md](docs/deployment.md).

## Project structure

```text
├── docs
│   ├── architecture.md
│   ├── configuration.md
│   ├── deployment.md
│   └── archive
├── packages
│   └── pennypay-ui
│       ├── src
│       └── package.json
├── public
├── scripts
│   └── copy-spa-routes.mjs
├── src
│   ├── components
│   ├── config
│   ├── pages
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── vercel.json
└── vite.config.ts
```

More detail is in [docs/architecture.md](docs/architecture.md).

## Coding style

TypeScript runs in `strict` mode (`tsconfig.json`, and `tsconfig.base.json` adds `noUncheckedIndexedAccess`). `pnpm build` runs `tsc --noEmit` before the Vite build, so type errors fail the build. No linter, formatter or commit convention is configured.

## Test

```sh
pnpm test
```

Vitest runs `src/config/workspaces.test.ts`. It checks that each workspace resolves to its own login screen, that unknown workspaces do not resolve, and that only a workspace id is stored in the browser. There are no component or end to end tests.

## Documentation

- [Docs index](docs/README.md)
- [Architecture](docs/architecture.md)
- [Configuration](docs/configuration.md)
- [Deployment](docs/deployment.md)
- [Design system package notes](packages/pennypay-ui/README.md)
- [Previous README (full detail)](docs/archive/README-2026-09-18.md)

## License

Proprietary and confidential. Copyright Western HomeCare. No license is granted to use, copy or distribute this code.
