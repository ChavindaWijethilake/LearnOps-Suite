'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { AppLayout } from '@/components/layout/app-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RoleBadge } from '@/components/common/role-badge'
import { User, Mail, Building, Edit2, Save, X } from 'lucide-react'

function ProfileContent() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    institution: user?.institution || '',
  })

  if (!user) {
    return null
  }

  const handleSave = () => {
    // In a real app, this would update the user data
    setIsEditing(false)
  }

  return (
    <AppLayout userName={`${user.firstName} ${user.lastName}`} userRole={user.role}>
      <div className="space-y-8 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile Management</h1>
          <p className="text-muted-foreground">Manage your account information and settings</p>
        </div>

        {/* Personal Information */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your basic account details</CardDescription>
            </div>
            <Button
              variant={isEditing ? 'default' : 'outline'}
              size="sm"
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            >
              {isEditing ? (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </>
              )}
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  First Name
                </label>
                {isEditing ? (
                  <Input
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{formData.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Last Name
                </label>
                {isEditing ? (
                  <Input
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{formData.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </label>
              {isEditing ? (
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              ) : (
                <p className="text-muted-foreground">{formData.email}</p>
              )}
              <p className="text-xs text-muted-foreground">Verified on Jan 20, 2026</p>
            </div>

            {/* Institution */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Building className="h-4 w-4" />
                Institution
              </label>
              {isEditing ? (
                <Input
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                />
              ) : (
                <p className="text-muted-foreground">{formData.institution}</p>
              )}
            </div>

            {isEditing && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(false)}
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Account Role */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Account Role</CardTitle>
            <CardDescription>Your role in the education system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Current Role</p>
                <RoleBadge role={user.role} />
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>Role granted on Jan 15, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Status */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
            <CardDescription>Overview of your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Account Status</p>
                <p className="text-xs text-muted-foreground">Current status</p>
              </div>
              <div className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-semibold">
                Active
              </div>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Account Created</p>
                <p className="text-xs text-muted-foreground">Date joined</p>
              </div>
              <p className="text-sm text-muted-foreground">January 15, 2026</p>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Last Login</p>
                <p className="text-xs text-muted-foreground">Previous access</p>
              </div>
              <p className="text-sm text-muted-foreground">Today at 9:42 AM</p>
            </div>
          </CardContent>
        </Card>

        {/* Password Change */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your account password</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm">
              Set New Password
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Password last changed on January 15, 2026
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  )
}
