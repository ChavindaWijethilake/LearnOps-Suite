# Education Ecosystem Design System

A unified, institutional-grade UI design system and app shell for the Education Ecosystem consisting of 4 integrated portals.

## Overview

This design system provides a complete, reusable foundation for building consistent, professional user interfaces across all education ecosystem portals:

1. **Identity & Access Portal** (Main authentication hub)
2. **LMS Portal** (Learning Management System)
3. **Fees & Scholarship Portal** (Financial management)
4. **Academic Analytics Portal** (Performance tracking)

All portals use the same components, design tokens, and layout patterns, ensuring a unified product experience.

## Key Features

- **Institutional Design** - Professional, minimal, government/university-grade aesthetic
- **Role-Based UI** - Built-in support for 4 user roles with automatic UI gating
- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Accessibility First** - WCAG 2.1 AA compliant
- **Zero Dependencies** - Uses only Next.js, TypeScript, and Tailwind CSS
- **Copy & Paste** - Entire system can be copied into any portal folder
- **Type Safe** - Full TypeScript support with comprehensive types

## Directory Structure

```
shared-design-system/
├── components/
│   ├── layout/              # App shell, sidebars, topbars
│   │   ├── AppShell.tsx     # Main layout wrapper
│   │   ├── Sidebar.tsx      # Desktop sidebar navigation
│   │   ├── Topbar.tsx       # Header with user menu
│   │   └── MobileNavDrawer.tsx
│   │
│   ├── ui/                  # Core UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Table.tsx
│   │   └── Alert.tsx
│   │
│   ├── auth/                # Authentication/role components
│   │   ├── RoleGate.tsx     # UI-only role gating
│   │   └── ProtectedLayout.tsx
│   │
│   ├── errors/              # Error pages
│   │   ├── SessionExpired.tsx
│   │   └── AccessDenied.tsx
│   │
│   ├── empty/               # Empty states
│   │   └── EmptyState.tsx
│   │
│   └── loading/             # Loading states
│       └── Skeleton.tsx
│
├── lib/
│   └── types.ts             # TypeScript types & interfaces
│
├── config/
│   └── navigation.ts        # Role-based navigation configs
│
├── styles/
│   └── globals.css          # Design tokens & global styles
│
├── DESIGN_TOKENS.md         # Design token documentation
└── README.md                # This file
```

## Installation

### Copy to Your Portal

1. Copy the entire `shared-design-system` folder to your portal project:

```bash
cp -r shared-design-system/ ./auth-portal/src/shared/
cp -r shared-design-system/ ./lms-portal/src/shared/
cp -r shared-design-system/ ./fees-portal/src/shared/
cp -r shared-design-system/ ./analytics-portal/src/shared/
```

2. Update your portal's `globals.css` to import the design system styles:

```css
@import '@/shared/styles/globals.css';
```

3. Create or update your `tsconfig.json` to include the alias:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

## Quick Start

### 1. Basic App Layout

Wrap your app with `AppShell` to get sidebar + topbar + responsive layout:

```tsx
import AppShell from '@/shared/components/layout/AppShell';
import { identityPortalNav } from '@/shared/config/navigation';

export default function RootLayout({ children }) {
  const user = {
    name: 'John Doe',
    role: 'student' as const,
  };

  return (
    <AppShell
      navigationItems={identityPortalNav}
      userRole={user.role}
      userName={user.name}
      portalName="Identity Portal"
      isAuthenticated={true}
    >
      {children}
    </AppShell>
  );
}
```

### 2. Using Components

```tsx
import Button from '@/shared/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/Card';
import Badge from '@/shared/components/ui/Badge';

export default function Dashboard() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="approved">Active Student</Badge>
          <Button variant="primary" size="lg">
            Continue Learning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### 3. Role-Based Navigation

Navigation automatically hides items not allowed for a user's role:

```tsx
import { lmsPortalNav } from '@/shared/config/navigation';

// Only items with allowedRoles that match the user role will display
<AppShell
  navigationItems={lmsPortalNav}
  userRole="student"  // Will show only student-accessible items
  {...props}
/>
```

### 4. Conditional UI with RoleGate

```tsx
import RoleGate from '@/shared/components/auth/RoleGate';

<RoleGate
  userRole={user.role}
  allowedRoles={['institution_admin', 'super_admin']}
>
  <AdminPanel />  {/* Only visible to admins */}
</RoleGate>
```

## Component Reference

### Layout Components

- **AppShell** - Main layout container with sidebar + topbar
- **Sidebar** - Vertical navigation with role-based filtering
- **Topbar** - Header with user dropdown and notifications
- **MobileNavDrawer** - Mobile navigation drawer

### UI Components

- **Button** - Variants: primary, secondary, ghost, destructive, outline
- **Input** - Text inputs with labels, error states, and icons
- **Card** - Container with header, title, content, footer sections
- **Badge** - Status indicators (paid, unpaid, active, pending, etc.)
- **Table** - Sortable, searchable tables with custom columns
- **Alert** - Info, success, warning, error notifications

### Auth Components

- **RoleGate** - Show/hide content based on user role
- **ProtectedLayout** - Wrapper that shows error UI if not authenticated
- **SessionExpired** - Error page for expired sessions
- **AccessDenied** - Error page for insufficient permissions

### Loading States

- **Skeleton** - Generic skeleton loader
- **SkeletonCard** - Card-shaped loading placeholder
- **SkeletonTable** - Table-shaped loading placeholder

### Empty States

- **EmptyState** - Customizable empty state with icon, title, action

## Design Tokens

All colors, spacing, typography, and sizing follow a consistent scale. See `DESIGN_TOKENS.md` for complete reference.

### Color Palette

- **Primary Blue**: `#1F40AF` - Links, primary buttons
- **Dark Blue**: `#0F2452` - Sidebars, dark backgrounds
- **Success**: `#059669` - Approved, active, paid
- **Warning**: `#F59E0B` - Pending, in progress
- **Error**: `#DC2626` - Rejected, unpaid, failed
- **Info**: `#0284C7` - Information

### Spacing Scale

All spacing uses 4px base unit:
- `xs` = 4px
- `sm` = 8px
- `md` = 12px
- `lg` = 16px
- `xl` = 24px
- `2xl` = 32px

### Typography

- **Font Family**: Inter + system fallbacks
- **Display (H1)**: 32px, weight 700
- **Heading (H2)**: 24px, weight 700
- **Subheading (H3)**: 18px, weight 600
- **Body**: 14px, weight 400

## Navigation Configuration

Each portal has a pre-configured navigation. Customize by editing `config/navigation.ts`:

```tsx
export const customNav: NavigationItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    allowedRoles: ['student', 'teacher'],  // Control who sees this
  },
  {
    label: 'Admin Only',
    href: '/admin',
    allowedRoles: ['institution_admin', 'super_admin'],
  },
];
```

## Responsive Behavior

### Desktop (≥1024px)
- Sidebar always visible
- Topbar sticky
- Multi-column layouts

### Tablet (640px - 1023px)
- Collapsed sidebar (icons only)
- Topbar sticky
- 2-column layouts

### Mobile (<640px)
- Drawer navigation (opened via menu button)
- Stacked, single-column layouts
- Full-width cards and forms

## Accessibility

- All components use semantic HTML
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus indicators on all interactive elements
- Minimum 4.5:1 contrast ratio for text
- Touch targets minimum 44px × 44px

## Customization

### Change Colors

Edit `/styles/globals.css`:

```css
@theme inline {
  --color-primary: #1f40af;  /* Change this */
}
```

### Add Custom Component

Create in `/components/custom/`:

```tsx
// components/custom/MyComponent.tsx
export default function MyComponent() {
  return <div>Custom component</div>;
}
```

### Override Spacing

Use Tailwind utilities in your components:

```tsx
<div className="p-8 md:p-4 sm:p-2">  {/* Responsive padding */}
```

## Best Practices

1. **Use the design tokens** - Don't hardcode colors or sizes
2. **Maintain role-based access** - Always filter nav items by role
3. **Keep it accessible** - Use proper labels and ARIA attributes
4. **Test responsiveness** - Check mobile, tablet, and desktop views
5. **Consistent spacing** - Use the spacing scale, not arbitrary values
6. **Meaningful loading states** - Show skeletons for content
7. **Clear error messaging** - Help users understand what went wrong

## Contributing

When adding new components or updating the design system:

1. Keep the institutional, minimal aesthetic
2. Ensure full TypeScript support
3. Add proper accessibility attributes
4. Test on mobile, tablet, and desktop
5. Update documentation
6. Use design tokens consistently

## Local Development

```bash
# Install dependencies (in each portal)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Support

For issues, questions, or contributions:
- Check the design tokens documentation
- Review component examples
- Ensure proper role-based access is configured
- Verify import paths use `@/shared/` aliases

---

**Version**: 1.0  
**Last Updated**: January 26, 2026  
**Status**: Production-ready  
**Free & Open Source**: MIT License
