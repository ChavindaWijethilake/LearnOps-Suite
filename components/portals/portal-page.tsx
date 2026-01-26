'use client'

import { ReactNode } from 'react'

interface PortalPageProps {
  portalName: string
  portalDescription: string
  portalUrl?: string
  icon: ReactNode
  children?: ReactNode
  features?: string[]
}

export function PortalPage({
  portalName,
  portalDescription,
  portalUrl,
  icon,
  features,
}: PortalPageProps) {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{portalName}</h1>
            <p className="text-lg text-muted-foreground">{portalDescription}</p>
          </div>
        </div>

        {portalUrl && (
          <div className="p-4 bg-card border rounded-lg">
            <p className="text-sm mb-3">
              This page demonstrates the portal redirection. In production, you would be redirected to the actual portal at:
            </p>
            <a href={portalUrl} className="text-primary hover:underline font-semibold">
              {portalUrl}
            </a>
          </div>
        )}

        {features && features.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Available Features</h2>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
