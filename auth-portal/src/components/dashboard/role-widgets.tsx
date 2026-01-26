import { DashboardCard } from './dashboard-card'
import { BookOpen, Users, BarChart3, Trophy, Clock, AlertCircle } from 'lucide-react'
import { UserRole } from '@/lib/auth-context'

interface RoleWidgetsProps {
  role: UserRole
}

export function RoleWidgets({ role }: RoleWidgetsProps) {
  if (role === 'Student') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">My Learning Journey</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <DashboardCard
              title="Active Courses"
              stats="5"
              description="You are enrolled in 5 courses this semester"
              icon={<BookOpen className="h-6 w-6" />}
              href="/portals/lms"
            />
            <DashboardCard
              title="Overall GPA"
              stats="3.8"
              description="Excellent academic standing"
              icon={<Trophy className="h-6 w-6" />}
              variant="accent"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Deadlines</h3>
          <DashboardCard
            title="Next Assignment Due"
            description="Mathematics 101 - Problem Set 5"
            icon={<Clock className="h-6 w-6" />}
            stats="2d"
            variant="muted"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Access</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <DashboardCard
              title="Learning Management"
              description="View courses and materials"
              icon={<BookOpen className="h-6 w-6" />}
              href="/portals/lms"
            />
            <DashboardCard
              title="Fee Payments"
              description="Manage your fees and scholarships"
              icon={<AlertCircle className="h-6 w-6" />}
              href="/portals/fees"
            />
            <DashboardCard
              title="Performance Analytics"
              description="Track your academic progress"
              icon={<BarChart3 className="h-6 w-6" />}
              href="/portals/analytics"
            />
          </div>
        </div>
      </div>
    )
  }

  if (role === 'Teacher') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">My Classes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <DashboardCard
              title="Teaching Classes"
              stats="4"
              description="You are teaching 4 classes this semester"
              icon={<BookOpen className="h-6 w-6" />}
              href="/portals/lms"
            />
            <DashboardCard
              title="Total Students"
              stats="142"
              description="Across all your classes"
              icon={<Users className="h-6 w-6" />}
              variant="accent"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <DashboardCard
            title="Pending Assignments"
            description="23 student submissions awaiting grading"
            icon={<Clock className="h-6 w-6" />}
            stats="23"
            variant="muted"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Access</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <DashboardCard
              title="Learning Management"
              description="Manage courses and assignments"
              icon={<BookOpen className="h-6 w-6" />}
              href="/portals/lms"
            />
            <DashboardCard
              title="Class Analytics"
              description="View student performance metrics"
              icon={<BarChart3 className="h-6 w-6" />}
              href="/portals/analytics"
            />
            <DashboardCard
              title="Fee Information"
              description="View fee-related information"
              icon={<AlertCircle className="h-6 w-6" />}
              href="/portals/fees"
            />
          </div>
        </div>
      </div>
    )
  }

  if (role === 'Institution Admin') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Institution Overview</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <DashboardCard
              title="Active Users"
              stats="2,543"
              description="Students, teachers, and staff"
              icon={<Users className="h-6 w-6" />}
            />
            <DashboardCard
              title="Active Courses"
              stats="87"
              description="Currently running classes"
              icon={<BookOpen className="h-6 w-6" />}
              variant="accent"
            />
            <DashboardCard
              title="System Health"
              stats="100%"
              description="All services operational"
              icon={<BarChart3 className="h-6 w-6" />}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h3>
          <DashboardCard
            title="Pending Approvals"
            description="8 new registration requests awaiting review"
            icon={<AlertCircle className="h-6 w-6" />}
            stats="8"
            variant="muted"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Management</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <DashboardCard
              title="Learning Management"
              description="Manage all courses and curriculum"
              icon={<BookOpen className="h-6 w-6" />}
              href="/portals/lms"
            />
            <DashboardCard
              title="User Management"
              description="Manage all institution users"
              icon={<Users className="h-6 w-6" />}
              href="/portals/analytics"
            />
            <DashboardCard
              title="Financial Overview"
              description="View fees and financial data"
              icon={<AlertCircle className="h-6 w-6" />}
              href="/portals/fees"
            />
          </div>
        </div>
      </div>
    )
  }

  // Super Admin
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">System Overview</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <DashboardCard
            title="Total Institutions"
            stats="156"
            description="Connected education institutions"
            icon={<Users className="h-6 w-6" />}
          />
          <DashboardCard
            title="Total Users"
            stats="1.2M"
            description="Across all institutions"
            icon={<Users className="h-6 w-6" />}
            variant="accent"
          />
          <DashboardCard
            title="System Uptime"
            stats="99.9%"
            description="Last 30 days"
            icon={<BarChart3 className="h-6 w-6" />}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Critical Alerts</h3>
        <DashboardCard
          title="System Status"
          description="All systems operational - last incident 5 days ago"
          icon={<AlertCircle className="h-6 w-6" />}
          variant="muted"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Administration</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <DashboardCard
            title="Institution Management"
            description="Manage all connected institutions"
            icon={<Users className="h-6 w-6" />}
            href="/portals/analytics"
          />
          <DashboardCard
            title="Global Analytics"
            description="System-wide analytics and reports"
            icon={<BarChart3 className="h-6 w-6" />}
            href="/portals/analytics"
          />
          <DashboardCard
            title="Security Monitoring"
            description="Monitor system security and access"
            icon={<AlertCircle className="h-6 w-6" />}
            href="/security"
          />
        </div>
      </div>
    </div>
  )
}
