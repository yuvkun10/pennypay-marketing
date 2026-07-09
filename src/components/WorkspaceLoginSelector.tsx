import { BrandLockup, Button, WorkspaceSwitcher, type Workspace } from '@pennypay/ui'
import { useMemo, useState } from 'react'
import { getStoredWorkspaceId, LAST_WORKSPACE_KEY, WORKSPACES } from '../config/workspaces'

function rememberWorkspace(workspace: Workspace) {
  window.localStorage.setItem(LAST_WORKSPACE_KEY, workspace.id)
  window.location.assign(workspace.loginUrl)
}

export function WorkspaceLoginSelector() {
  const firstEnabledWorkspace = useMemo(() => WORKSPACES.find((workspace) => workspace.enabled) ?? WORKSPACES[0], [])
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(getStoredWorkspaceId(window.localStorage) ?? firstEnabledWorkspace?.id)
  const selectedWorkspace = WORKSPACES.find((workspace) => workspace.id === selectedWorkspaceId)

  return (
    <section className="workspace-selector" aria-labelledby="workspace-selector-title">
      <div className="workspace-selector__header">
        <BrandLockup name="PennyPay" subtitle="" src="/logo.png" alt="PennyPay" className="workspace-selector__brand" />
        <h1 id="workspace-selector-title">Choose workspace</h1>
        <p>Select your organisation to continue to its native portal login.</p>
      </div>

      <WorkspaceSwitcher
        workspaces={WORKSPACES}
        selectedWorkspaceId={selectedWorkspaceId}
        onWorkspaceChange={(workspace) => setSelectedWorkspaceId(workspace.id)}
        className="workspace-selector__cards"
      />

      <div className="workspace-selector__actions">
        <Button
          size="lg"
          fullWidth
          disabled={!selectedWorkspace}
          onClick={() => {
            if (selectedWorkspace) rememberWorkspace(selectedWorkspace)
          }}
        >
          {selectedWorkspace ? `Continue to ${selectedWorkspace.shortLabel}` : 'Continue'}
        </Button>
        <p>The selected portal owns authentication, access, and role checks.</p>
      </div>
    </section>
  )
}
