# @pennypay/ui

Shared PennyPay UI primitives for the unified portal migration.

This package is Phase 1 only: it extracts the current Hazel & Coastal Astryx Neutral design vocabulary into a reusable package without changing any consuming app runtime imports.

## Scope

- Astryx Neutral token, component, and shell CSS copied from the current H&C portal.
- Low-risk shared primitives: buttons, badges, cards, fields, inputs, brand mark, workspace switcher, and login entry shell.
- `LoginEntryShell` is a workspace selector only. It redirects to the selected workspace `loginUrl`.

## Boundaries

- No shared SSO.
- No shared OAuth.
- No email/password form.
- No backend, auth, database, RLS, payment, OCR, RAG, Lookout, worker, or deploy behavior.

Each workspace remains responsible for its own authentication, role verification, permissions, and backend authorization.

## Usage

```tsx
import { LoginEntryShell, type Workspace } from '@pennypay/ui'
import '@pennypay/ui/styles.css'

const workspaces: Workspace[] = [
  {
    id: 'dulcie',
    label: 'Dulcie Home Care',
    shortLabel: 'Dulcie',
    description: 'Dulcie invoice operations workspace.',
    loginUrl: 'https://dulcie.dulciepay.com.au/login',
    googleWorkspaceHint: 'Use your Dulcie Google Workspace account if using Google sign-in.',
  },
]

export function LoginPage() {
  return <LoginEntryShell workspaces={workspaces} />
}
```

## Styles

Import the bundled stylesheet:

```ts
import '@pennypay/ui/styles.css'
```

Or import layers individually:

```ts
import '@pennypay/ui/styles/tokens.css'
import '@pennypay/ui/styles/components.css'
import '@pennypay/ui/styles/shell.css'
import '@pennypay/ui/styles/brand-panel.css'
```

The token contract and shadcn aliases are intentionally preserved. Do not rename CSS variables during the first extraction.
