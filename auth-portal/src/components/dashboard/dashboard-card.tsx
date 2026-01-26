'use client';

import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DashboardCardProps {
  title: string
  description?: string
  icon?: ReactNode
  stats?: string
  href?: string
  onClick?: () => void
  variant?: 'default' | 'accent' | 'muted'
  children?: ReactNode
}

export function DashboardCard({
  title,
  description,
  icon,
  stats,
  href,
  onClick,
  variant = 'default',
  children,
}: DashboardCardProps) {
  const variantStyles = {
    default: 'bg-card border-border',
    accent: 'bg-accent/5 border-accent/20',
    muted: 'bg-muted border-border',
  }

  const content = (
    <div className={cn('rounded-lg border p-6', variantStyles[variant])}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {icon && (
            <div className="mb-3 inline-flex p-2 rounded-lg bg-primary/10">
              <div className="text-primary">{icon}</div>
            </div>
          )}
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {stats && (
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{stats}</p>
          </div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
      {href && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-4 p-0 h-auto text-primary hover:bg-transparent hover:text-primary"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left">
        {content}
      </button>
    )
  }

  return content
}
