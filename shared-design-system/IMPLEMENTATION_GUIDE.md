# Implementation Guide - Education Ecosystem Design System

Complete step-by-step guide to implement the design system in each portal.

## Prerequisites

Each portal must have:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS v4
- React 18+

## Setup Steps

### 1. Copy Design System

```bash
# From project root
cp -r shared-design-system ./auth-portal/src/shared
cp -r shared-design-system ./lms-portal/src/shared
cp -r shared-design-system ./fees-portal/src/shared
cp -r shared-design-system ./analytics-portal/src/shared
```

### 2. Configure TypeScript Paths

Update each portal's `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/shared/*": ["./src/shared/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### 3. Update globals.css

In each portal's main styles file (e.g., `src/app/globals.css`):

```css
/* Import design system styles */
@import '@/shared/styles/globals.css';

/* Your custom styles below */
```

### 4. Set Up Root Layout

Each portal's `src/app/layout.tsx`:

```tsx
'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AppShell from '@/shared/components/layout/AppShell';
import { identityPortalNav } from '@/shared/config/navigation'; // Import correct nav
import './globals.css';

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Education Portal',
  description: 'Unified education platform',
};

// Mock user - Replace with actual auth state
const mockUser = {
  name: 'John Doe',
  role: 'student' as const,
  email: 'john@institution.edu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Placeholder auth check
  const isAuthenticated = !!mockUser;

  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        <AppShell
          navigationItems={identityPortalNav}
          userRole={mockUser.role}
          userName={mockUser.name}
          portalName="Identity Portal"
          isAuthenticated={isAuthenticated}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
```

### 5. Create Portal Pages

Create page components in each portal. Example dashboard:

```tsx
// src/app/dashboard/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import Badge from '@/shared/components/ui/Badge';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, John</p>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card hover>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Active Status</CardTitle>
              <Badge variant="active">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">You are currently enrolled</p>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle>Pending Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-amber-600">3</p>
            <p className="text-sm text-gray-600">Assignments due</p>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle>Last Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Today at 2:30 PM</p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Button */}
      <Button variant="primary" size="lg">
        Start Learning
      </Button>
    </div>
  );
}
```

## Per-Portal Setup

### Identity & Access Portal (`auth-portal`)

Navigation items to use:
```tsx
import { identityPortalNav } from '@/shared/config/navigation';
```

Key pages:
- `/dashboard` - Role-aware dashboard
- `/profile` - User profile
- `/security` - Security settings
- `/settings` - Account settings
- `/portals` - Portal navigation hub

### LMS Portal (`lms-portal`)

Navigation items to use:
```tsx
import { lmsPortalNav } from '@/shared/config/navigation';
```

Key pages:
- `/dashboard` - Course overview
- `/courses` - Course list and details
- `/assignments` - Assignment management
- `/attendance` - Attendance tracking
- `/exams` - Exam schedules and results

### Fees & Scholarship Portal (`fees-portal`)

Navigation items to use:
```tsx
import { feesPortalNav } from '@/shared/config/navigation';
```

Key pages:
- `/dashboard` - Financial summary
- `/invoices` - Fee invoices
- `/payments` - Payment history
- `/scholarships` - Scholarship applications
- `/disbursements` - Fund disbursements

### Analytics Portal (`analytics-portal`)

Navigation items to use:
```tsx
import { analyticsPortalNav } from '@/shared/config/navigation';
```

Key pages:
- `/dashboard` - Analytics overview
- `/performance` - Academic performance
- `/attendance-insights` - Attendance analysis
- `/dropout-risk` - Risk indicators
- `/reports` - Custom reports

## Authentication Integration

When implementing real authentication:

1. Replace the mock user object with actual auth state:

```tsx
// src/lib/auth.ts
import type { UserRole } from '@/shared/lib/types';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Get from session/cookie/JWT
export async function getCurrentUser(): Promise<AuthUser | null> {
  // Implementation depends on your auth system
  // (NextAuth.js, Auth.js, custom JWT, etc.)
}
```

2. Update layout to use real auth:

```tsx
import { getCurrentUser } from '@/lib/auth';
import ProtectedLayout from '@/shared/components/auth/ProtectedLayout';

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html>
      <body>
        <ProtectedLayout isAuthenticated={!!user} userRole={user?.role}>
          <AppShell
            navigationItems={navigationItems}
            userRole={user?.role || 'student'}
            userName={user?.name || 'Guest'}
            isAuthenticated={!!user}
          >
            {children}
          </AppShell>
        </ProtectedLayout>
      </body>
    </html>
  );
}
```

## Common Patterns

### Protected Pages

```tsx
import ProtectedLayout from '@/shared/components/auth/ProtectedLayout';

export default function AdminPage() {
  return (
    <ProtectedLayout
      isAuthenticated={true}
      userRole="student"
      requiredRoles={['institution_admin', 'super_admin']}
    >
      <div>Admin content</div>
    </ProtectedLayout>
  );
}
```

### Role-Based Visibility

```tsx
import RoleGate from '@/shared/components/auth/RoleGate';

export default function Dashboard() {
  const userRole = 'teacher';

  return (
    <div>
      <RoleGate
        userRole={userRole}
        allowedRoles={['teacher', 'institution_admin']}
      >
        <AdminPanel />
      </RoleGate>

      <RoleGate
        userRole={userRole}
        allowedRoles={['student']}
        fallback={<p>Not available for your role</p>}
      >
        <StudentFeatures />
      </RoleGate>
    </div>
  );
}
```

### Tables with Data

```tsx
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/shared/components/ui/Table';

export default function CoursesTable({ courses }) {
  return (
    <Table>
      <TableHeader>
        <TableHead>Course Name</TableHead>
        <TableHead>Instructor</TableHead>
        <TableHead>Status</TableHead>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.instructor}</TableCell>
            <TableCell>
              <Badge variant={course.status === 'active' ? 'active' : 'inactive'}>
                {course.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Loading States

```tsx
import { SkeletonCard, SkeletonTable } from '@/shared/components/loading/Skeleton';

export default function CoursesPage({ isLoading, courses }) {
  return (
    <div>
      {isLoading ? <SkeletonTable /> : <CoursesList courses={courses} />}
    </div>
  );
}
```

### Empty States

```tsx
import EmptyState from '@/shared/components/empty/EmptyState';
import { BookOpen } from 'lucide-react';

export default function CoursesPage({ courses }) {
  if (courses.length === 0) {
    return (
      <EmptyState
        icon={<BookOpen className="w-8 h-8" />}
        title="No Courses Yet"
        description="You haven't enrolled in any courses yet. Browse available courses to get started."
        action={{
          label: 'Browse Courses',
          href: '/courses/browse',
        }}
      />
    );
  }

  return <CoursesList courses={courses} />;
}
```

## Testing

### Component Testing

```tsx
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/shared/components/ui/Button';

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');
  });
});
```

### Role-Based Testing

```tsx
import RoleGate from '@/shared/components/auth/RoleGate';

describe('RoleGate', () => {
  it('shows content for allowed roles', () => {
    render(
      <RoleGate userRole="teacher" allowedRoles={['teacher']}>
        <div>Teacher content</div>
      </RoleGate>,
    );
    expect(screen.getByText('Teacher content')).toBeInTheDocument();
  });

  it('hides content for disallowed roles', () => {
    render(
      <RoleGate
        userRole="student"
        allowedRoles={['teacher']}
        fallback={<div>Not allowed</div>}
      >
        <div>Teacher content</div>
      </RoleGate>,
    );
    expect(screen.getByText('Not allowed')).toBeInTheDocument();
  });
});
```

## Deployment Checklist

- [ ] All imports use `@/shared/` paths
- [ ] TypeScript compilation passes
- [ ] No console warnings
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Navigation items filtered by role
- [ ] Auth state properly managed
- [ ] Loading states implemented
- [ ] Empty states handled
- [ ] Error pages tested
- [ ] Accessibility verified (keyboard nav, screen readers)

## Support & Troubleshooting

### Import paths not resolving?
- Verify `tsconfig.json` paths are correct
- Restart TypeScript server in your editor
- Clear `.next` build cache

### Styles not applying?
- Ensure `globals.css` is imported in layout
- Check Tailwind CSS is configured correctly
- Verify class names match Tailwind syntax

### Role-based items not hiding?
- Check `allowedRoles` array on navigation items
- Verify user role matches allowed roles exactly
- Use console to debug role values

### Mobile layout broken?
- Check responsive classes (md:, lg:, sm:)
- Test in browser dev tools device emulation
- Verify Tailwind responsive prefixes

---

For more details, see:
- `README.md` - Overview and quick start
- `DESIGN_TOKENS.md` - Color, typography, spacing reference
- Component files - Detailed JSDoc comments
