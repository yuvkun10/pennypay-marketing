import type { Workspace } from '@pennypay/ui'

export type WorkspaceId = 'dulcie' | 'hazel-coastal'

export type WorkspaceConfig = Workspace & {
  id: WorkspaceId
  appUrl: string
  enabled: boolean
}

export const LAST_WORKSPACE_KEY = 'pennypay:last-workspace'

export const WORKSPACES: WorkspaceConfig[] = [
  {
    id: 'dulcie',
    label: 'Dulcie Home Care',
    shortLabel: 'Dulcie',
    description: 'Enter the Dulcie invoice workspace.',
    loginUrl: 'https://dulciehomecare.dulciepay.com.au/login',
    appUrl: 'https://dulciehomecare.dulciepay.com.au',
    googleWorkspaceHint: 'Continue to the Dulcie portal login.',
    enabled: true,
  },
  {
    id: 'hazel-coastal',
    label: 'Hazel & Coastal Home Care',
    shortLabel: 'Hazel & Coastal',
    description: 'Enter the Hazel & Coastal invoice workspace.',
    loginUrl: 'https://hazelhomecare.dulciepay.com.au/login',
    appUrl: 'https://hazelhomecare.dulciepay.com.au',
    googleWorkspaceHint: 'Continue to the Hazel & Coastal portal login.',
    enabled: true,
  },
]

export function resolveWorkspaceLoginRedirect(workspaceId: string) {
  const workspace = WORKSPACES.find((item) => item.id === workspaceId && item.enabled)
  return workspace?.loginUrl ?? null
}

export function getStoredWorkspaceId(storage: Pick<Storage, 'getItem'> | undefined) {
  if (!storage) return undefined
  const value = storage.getItem(LAST_WORKSPACE_KEY)
  return typeof value === 'string' && WORKSPACES.some((workspace) => workspace.id === value && workspace.enabled) ? value : undefined
}
