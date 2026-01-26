'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              EP
            </div>
            <span className="text-lg font-semibold text-foreground">Education Portal</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md text-center">
          <div className="mb-8 inline-flex p-4 rounded-full bg-destructive/10">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3">Access Denied</h1>

          <p className="text-lg text-muted-foreground mb-4">
            You don't have permission to access this resource.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            This might be because:
          </p>

          <ul className="text-left text-sm text-muted-foreground mb-8 space-y-2 bg-muted/50 rounded-lg p-4 border border-border">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Your account doesn't have the required permissions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>The resource is not available for your role</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Your session may have expired</span>
            </li>
          </ul>

          <div className="flex gap-3 justify-center">
            <Link href="/dashboard">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            If you believe this is a mistake, please{' '}
            <a href="#" className="text-primary hover:underline">
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
