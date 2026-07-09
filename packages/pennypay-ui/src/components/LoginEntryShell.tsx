import { useMemo, useState, type FormEvent, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'
import { BrandLockup } from './BrandMark'
import { Button } from './Button'
import { WorkspaceSwitcher, type Workspace } from './WorkspaceSwitcher'

export interface LoginEntryShellProps extends HTMLAttributes<HTMLDivElement> {
  workspaces: Workspace[]
  defaultWorkspaceId?: string
  title?: string
  subtitle?: string
  continueLabel?: string
  brandName?: string
  brandSubtitle?: string
  brandLogoSrc?: string
  brandLogoAlt?: string
  legalText?: string
  onNavigate?: (workspace: Workspace) => void
}

function isWorkspaceDisabled(workspace: Workspace | undefined): boolean {
  return !workspace || workspace.disabled === true || workspace.enabled === false
}

export function LoginEntryShell({
  workspaces,
  defaultWorkspaceId,
  title = 'Choose your workspace',
  subtitle = 'Select your organisation to continue to its own secure portal login.',
  continueLabel = 'Continue',
  brandName = 'PennyPay',
  brandSubtitle = 'Workspace selector',
  brandLogoSrc = '/logo.png',
  brandLogoAlt,
  legalText = 'Each workspace handles its own sign-in, permissions, and role verification.',
  onNavigate,
  className,
  ...props
}: LoginEntryShellProps) {
  const firstEnabledId = useMemo(() => workspaces.find((workspace) => !isWorkspaceDisabled(workspace))?.id ?? workspaces[0]?.id, [workspaces])
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(defaultWorkspaceId ?? firstEnabledId)
  const selectedWorkspace = workspaces.find((workspace) => workspace.id === selectedWorkspaceId)
  const cannotContinue = isWorkspaceDisabled(selectedWorkspace)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selectedWorkspace || cannotContinue) return
    if (onNavigate) {
      onNavigate(selectedWorkspace)
      return
    }
    if (typeof window !== 'undefined') window.location.assign(selectedWorkspace.loginUrl)
  }

  return (
    <div className={cn('pp-login-entry', className)} {...props}>
      <section className="pp-login-brand-panel" aria-label={`${brandName} login entry`}>
        <BrandLockup
          src={brandLogoSrc}
          alt={brandLogoAlt ?? brandName}
          name={brandName}
          subtitle={brandSubtitle}
          className="pp-login-brand-kicker"
          markClassName="shadow-none"
        />
        <div className="pp-login-brand-copy">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <p className="pp-login-brand-foot">{legalText}</p>
      </section>

      <main className="pp-login-form-panel">
        <form className="pp-login-form-shell" onSubmit={handleSubmit}>
          <BrandLockup
            src={brandLogoSrc}
            alt={brandLogoAlt ?? brandName}
            name={brandName}
            subtitle={brandSubtitle}
            className="pp-login-mobile-brand"
          />
          <div className="mb-6">
            <h2 className="t-h1">{title}</h2>
            <p className="t-sm text-muted mt-2">{subtitle}</p>
          </div>
          <WorkspaceSwitcher workspaces={workspaces} selectedWorkspaceId={selectedWorkspaceId} onWorkspaceChange={(workspace) => setSelectedWorkspaceId(workspace.id)} />
          <div className="pp-login-actions">
            <Button type="submit" size="lg" fullWidth disabled={cannotContinue}>
              {selectedWorkspace ? `${continueLabel} to ${selectedWorkspace.shortLabel}` : continueLabel}
            </Button>
            {selectedWorkspace?.googleWorkspaceHint ? <p className="hint">{selectedWorkspace.googleWorkspaceHint}</p> : null}
          </div>
        </form>
      </main>
    </div>
  )
}
