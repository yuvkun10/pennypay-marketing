import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'
import { Badge } from './Badge'

export interface Workspace {
  id: string
  label: string
  shortLabel: string
  description?: string
  loginUrl: string
  googleWorkspaceHint?: string
  disabled?: boolean
  enabled?: boolean
}

export interface WorkspaceSwitcherProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  workspaces: Workspace[]
  selectedWorkspaceId?: string
  onWorkspaceChange?: (workspace: Workspace) => void
}

function isDisabled(workspace: Workspace): boolean {
  return workspace.disabled === true || workspace.enabled === false
}

function initials(value: string): string {
  return value
    .split(/\s|&|\+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

export function WorkspaceSwitcher({ workspaces, selectedWorkspaceId, onWorkspaceChange, className, ...props }: WorkspaceSwitcherProps) {
  return (
    <div className={cn('pp-workspace-switcher', className)} role="radiogroup" aria-label="Choose workspace" {...props}>
      {workspaces.map((workspace) => {
        const disabled = isDisabled(workspace)
        const selected = workspace.id === selectedWorkspaceId
        return (
          <button
            key={workspace.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-pressed={selected}
            disabled={disabled}
            className="pp-workspace-card"
            onClick={() => {
              if (!disabled) onWorkspaceChange?.(workspace)
            }}
          >
            <span className="pp-workspace-card__mark" aria-hidden>
              {initials(workspace.shortLabel || workspace.label)}
            </span>
            <span className="pp-workspace-card__body">
              <span className="pp-workspace-card__title">
                <span>{workspace.label}</span>
                <span className="pp-workspace-card__status">
                  {disabled ? <Badge tone="outline">Unavailable</Badge> : selected ? <Badge tone="primary">Selected</Badge> : null}
                </span>
              </span>
              {workspace.description ? <span className="pp-workspace-card__description">{workspace.description}</span> : null}
              {workspace.googleWorkspaceHint ? <span className="pp-workspace-card__hint">{workspace.googleWorkspaceHint}</span> : null}
            </span>
          </button>
        )
      })}
    </div>
  )
}
