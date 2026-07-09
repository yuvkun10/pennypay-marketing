import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export interface FieldProps {
  id?: string
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
  action?: ReactNode
  required?: boolean
  className?: string
  children: ReactNode
}

export function Field({ id, label, hint, error, action, required = false, className, children }: FieldProps) {
  return (
    <div className={cn('field', className)}>
      <div className="row-between">
        <label htmlFor={id} className="label">
          {label}
          {required ? <span className="req">*</span> : null}
        </label>
        {action}
      </div>
      {children}
      {hint && !error ? <div className="hint">{hint}</div> : null}
      {error ? (
        <div className="hint" role="alert" style={{ color: 'var(--color-error)' }}>
          {error}
        </div>
      ) : null}
    </div>
  )
}
