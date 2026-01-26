'use client'

import { useAuth } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { AppLayout } from '@/components/layout/app-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Smartphone, LogOut, Shield, Key, Clock } from 'lucide-react'

function SecurityContent() {
  const { user, logout } = useAuth()

  if (!user) {
    return null
  }

  return (
    <AppLayout userName={`${user.firstName} ${user.lastName}`} userRole={user.role}>
      <div className="space-y-8 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Security & Sessions</h1>
          <p className="text-muted-foreground">Manage your account security and active sessions</p>
        </div>

        {/* Security Alert */}
        <Card className="border-green-200/30 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20">
          <CardContent className="pt-6 flex gap-4">
            <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-green-900 dark:text-green-200">Security Status</p>
              <p className="text-sm text-green-800/70 dark:text-green-300/70">
                Your account is secure. All security features are enabled.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Two-Factor Authentication
            </CardTitle>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Authenticator App</p>
                <p className="text-xs text-muted-foreground">Google Authenticator, Microsoft Authenticator, etc.</p>
              </div>
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-semibold">
                Enabled
              </div>
            </div>
            <Button variant="outline" size="sm">
              Manage 2FA
            </Button>
          </CardContent>
        </Card>

        {/* Password Security */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Password
            </CardTitle>
            <CardDescription>Update and manage your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Password Status</p>
                <p className="text-xs text-muted-foreground">Last changed 45 days ago</p>
              </div>
              <div className="inline-flex px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm font-semibold">
                Change Recommended
              </div>
            </div>
            <Button variant="outline" size="sm">
              Change Password
            </Button>
            <p className="text-xs text-muted-foreground">
              We recommend changing your password every 60 days for optimal security.
            </p>
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Active Sessions
            </CardTitle>
            <CardDescription>Manage devices and browser sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Session */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Chrome on macOS</p>
                  <p className="text-xs text-muted-foreground">Last active: Just now</p>
                </div>
                <div className="inline-flex px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold">
                  Current
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                IP Address: 192.168.1.100 | Location: New York, USA
              </p>
              <p className="text-xs text-muted-foreground">
                Session started: Today at 8:30 AM
              </p>
            </div>

            {/* Other Session 1 */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Safari on iPhone</p>
                  <p className="text-xs text-muted-foreground">Last active: 2 hours ago</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                IP Address: 45.33.32.156 | Location: New York, USA
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Session started: Yesterday at 3:45 PM
              </p>
              <Button variant="outline" size="sm">
                Sign Out This Device
              </Button>
            </div>

            {/* Other Session 2 */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Firefox on Windows</p>
                  <p className="text-xs text-muted-foreground">Last active: 4 days ago</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                IP Address: 78.154.32.198 | Location: Boston, USA
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Session started: January 20, 2026 at 10:15 AM
              </p>
              <Button variant="outline" size="sm">
                Sign Out This Device
              </Button>
            </div>

            <div className="border-t border-border pt-4">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out All Other Devices
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Log */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Security Log</CardTitle>
            <CardDescription>Recent security-related activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 text-sm">
              <Shield className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Login from Chrome on macOS</p>
                <p className="text-xs text-muted-foreground">Today at 8:30 AM</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">2FA verification successful</p>
                <p className="text-xs text-muted-foreground">Today at 8:29 AM</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <Shield className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Login from Safari on iPhone</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <Shield className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Password updated</p>
                <p className="text-xs text-muted-foreground">45 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">Sign Out</CardTitle>
            <CardDescription>End your current session</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={() => {
                logout()
                window.location.href = '/login'
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default function SecurityPage() {
  return (
    <ProtectedRoute>
      <SecurityContent />
    </ProtectedRoute>
  )
}
