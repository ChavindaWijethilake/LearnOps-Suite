'use client';

import { ReactNode } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AppLayout } from '@/components/layout/app-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Lock } from 'lucide-react'

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
  children,
  features,
}: PortalPageProps) {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <AppLayout userName={`${user.firstName} ${user.lastName}`} userRole={user.role}>
      <div className="space-y-8">
        {/* Portal Header */}
        <div>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{portalName}</h1>
              <p className="text-lg text-muted-foreground">{portalDescription}</p>
            </div>
          </div>
        </div>

        {/* Access Card */}
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <div>
                  <p className="font-medium text-foreground">Authenticated Access</p>
                  <p className="text-sm text-muted-foreground">
                    You are logged in as <span className="font-semibold">{user.email}</span> with role{' '}
                    <span className="font-semibold">{user.role}</span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your authentication credentials are automatically passed through Single Sign-On (SSO). No additional login required.
                </p>
                {portalUrl && (
                  <Button asChild className="mt-4">
                    <a href={portalUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access {portalName}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        {features && features.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Available Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Children Content */}
        {children}
      </div>
    </AppLayout>
  )
}
