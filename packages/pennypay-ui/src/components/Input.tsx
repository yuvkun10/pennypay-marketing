import type { InputHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export function Input({ invalid = false, className, ...props }: InputProps) {
  return <input className={cn('input', invalid && 'is-error', className)} aria-invalid={invalid || props['aria-invalid']} {...props} />
}
