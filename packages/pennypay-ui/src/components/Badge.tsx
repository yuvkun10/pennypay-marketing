import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

export type BadgeTone = 'neutral' | 'primary' | 'outline' | 'success' | 'warning' | 'info' | 'danger' | 'violet' | 'teal' | 'pink'
export type BadgeVariant = 'soft' | 'solid'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
  variant?: BadgeVariant
  mono?: boolean
  dot?: boolean
  children: ReactNode
}

const softToneClass: Record<BadgeTone, string> = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  outline: 'badge-outline',
  success: 'badge-success',
  warning: 'badge-warning',
  info: 'badge-info',
  danger: 'badge-danger',
  violet: 'badge-violet',
  teal: 'badge-teal',
  pink: 'badge-pink',
}

const solidToneClass: Partial<Record<BadgeTone, string>> = {
  success: 'badge-solid-success',
  warning: 'badge-solid-warning',
  info: 'badge-solid-info',
  danger: 'badge-solid-danger',
}

export function Badge({ tone = 'neutral', variant = 'soft', mono = false, dot = false, className, children, ...props }: BadgeProps) {
  const toneClass = variant === 'solid' ? (solidToneClass[tone] ?? softToneClass[tone]) : softToneClass[tone]
  return (
    <span className={cn('badge', toneClass, mono && 'badge-mono', className)} {...props}>
      {dot ? <span className="dot" aria-hidden /> : null}
      {children}
    </span>
  )
}
