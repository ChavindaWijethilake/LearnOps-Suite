'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { AppLayout } from '@/components/layout/app-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Mail, Eye, Globe, AlertCircle } from 'lucide-react'

function SettingsContent() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    weeklyReport: true,
    marketingEmails: false,
    privateProfile: false,
    allowSearch: true,
  })

  if (!user) {
    return null
  }

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <AppLayout userName={`${user.firstName} ${user.lastName}`} userRole={user.role}>
      <div className="space-y-8 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Customize your account preferences and notifications</p>
        </div>

        {/* Notification Preferences */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>Manage how you receive updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive important updates via email</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => toggleSetting('emailNotifications')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Push Notifications</p>
                  <p className="text-xs text-muted-foreground">Real-time updates on your device</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={() => toggleSetting('pushNotifications')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">SMS Notifications</p>
                  <p className="text-xs text-muted-foreground">Critical alerts via text message</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.smsNotifications}
                  onChange={() => toggleSetting('smsNotifications')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Weekly Report */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Weekly Summary Report</p>
                  <p className="text-xs text-muted-foreground">Get a summary every Sunday</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.weeklyReport}
                  onChange={() => toggleSetting('weeklyReport')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Marketing Emails */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Marketing Emails</p>
                  <p className="text-xs text-muted-foreground">News, updates, and special offers</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={() => toggleSetting('marketingEmails')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Privacy
            </CardTitle>
            <CardDescription>Control how your information is shared and discovered</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Private Profile */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Private Profile</p>
                  <p className="text-xs text-muted-foreground">Only visible to your institution</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privateProfile}
                  onChange={() => toggleSetting('privateProfile')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Allow Search */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Allow Search Engines</p>
                  <p className="text-xs text-muted-foreground">Index your profile in search results</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.allowSearch}
                  onChange={() => toggleSetting('allowSearch')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language & Region
            </CardTitle>
            <CardDescription>Customize language and regional settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Language</label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Time Zone</label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Save Notice */}
        <div className="flex gap-3 p-4 rounded-lg bg-muted border border-border">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-foreground font-medium">Changes saved automatically</p>
            <p className="text-xs text-muted-foreground">Your preferences are updated in real-time</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <SettingsContent />
    </ProtectedRoute>
  )
}
