# PennyPay Marketing

Public marketing and workspace-entry site for `dulciepay.com.au`.

This repo owns the public routes:

- `/`
- `/login`
- `/security`
- `/contact`

The `/login` route is only a workspace selector. It does not collect email or
password fields, start OAuth, run MFA/passkey/reset flows, create Supabase
sessions, implement shared SSO, call private APIs, or authorize users. Selected
workspaces redirect to their native login screens:

- Dulcie Home Care: `https://dulciehomecare.dulciepay.com.au/login`
- Hazel & Coastal Home Care: `https://hazelhomecare.dulciepay.com.au/login`

## Development

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
```

## Design System

The repo includes a local workspace copy of `@pennypay/ui` so the marketing site
uses the same PennyPay / H&C design-system tokens and components while the UI
package remains unpublished.
