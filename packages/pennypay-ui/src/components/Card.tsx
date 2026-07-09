import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return <div className={cn('card', className)} {...props} />
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('card-head', className)} {...props} />
}

export function CardTitle({ className, ...props }: CardProps) {
  return <div className={cn('card-title', className)} {...props} />
}

export function CardDescription({ className, ...props }: CardProps) {
  return <div className={cn('card-desc', className)} {...props} />
}

export function CardBody({ className, ...props }: CardProps) {
  return <div className={cn('card-body', className)} {...props} />
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn('card-foot', className)} {...props} />
}
