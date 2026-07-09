import type { HTMLAttributes, ImgHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export interface BrandMarkProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  src?: string
  alt?: string
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>
}

export function BrandMark({ src = '/logo.png', alt = 'PennyPay', className, imgProps, ...props }: BrandMarkProps) {
  return (
    <span className={cn('brand-mark', className)} {...props}>
      <img src={src} alt={alt} {...imgProps} />
    </span>
  )
}

export interface BrandLockupProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  name?: string
  subtitle?: string
  markClassName?: string
}

export function BrandLockup({ src, alt, name = 'PennyPay', subtitle = 'Invoicing Portal', className, markClassName, ...props }: BrandLockupProps) {
  return (
    <span className={cn('flex min-w-0 items-center gap-2.5', className)} {...props}>
      <BrandMark src={src} alt={alt ?? name} className={markClassName} />
      <span className="brand-name min-w-0 truncate">
        {name}
        {subtitle ? <small>{subtitle}</small> : null}
      </span>
    </span>
  )
}
