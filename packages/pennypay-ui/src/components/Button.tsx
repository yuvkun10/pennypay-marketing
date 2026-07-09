import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
    as?: 'button'
    disabled?: boolean
  }

type AnchorButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    disabled?: boolean
  }

export type ButtonProps = NativeButtonProps | AnchorButtonProps

const variantClass: Record<ButtonVariant, string> = {
  default: 'btn-primary',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  destructive: 'btn-destructive',
  success: 'btn-success',
  warning: 'btn-warning',
  link: 'btn-link',
}

const sizeClass: Record<ButtonSize, string> = {
  default: '',
  sm: 'btn-sm',
  lg: 'btn-lg',
  icon: 'btn-icon',
  'icon-sm': 'btn-sm btn-icon',
  'icon-lg': 'btn-lg btn-icon',
}

export function Button(props: ButtonProps) {
  const {
    as = 'button',
    variant = 'default',
    size = 'default',
    fullWidth = false,
    loading = false,
    iconLeft,
    iconRight,
    className,
    children,
    disabled,
    ...rest
  } = props
  const classes = cn('btn', variantClass[variant], sizeClass[size], fullWidth && 'w-full', className)

  if (as === 'a') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} aria-disabled={disabled || loading || undefined} data-disabled={disabled || loading || undefined} {...anchorProps}>
        {loading ? <span className="pp-btn-spinner" aria-hidden /> : iconLeft}
        {children}
        {!loading ? iconRight : null}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} disabled={disabled || loading} {...buttonProps}>
      {loading ? <span className="pp-btn-spinner" aria-hidden /> : iconLeft}
      {children}
      {!loading ? iconRight : null}
    </button>
  )
}
