# Architecture Overview - Education Ecosystem Design System

## System Design

The Education Ecosystem uses a **distributed portal architecture** with a **unified design system** at its core.

```
┌─────────────────────────────────────────────────────────────┐
│                   Backend API (Local PostgreSQL)             │
│        (Handles auth, data, business logic - Separate)       │
└─────────────────────────────────────────────────────────────┘
         ↑                    ↑                    ↑
         │                    │                    │
┌────────┴──────┬──────────────┼──────────────┬────┴─────────────┐
│               │              │              │                  │
│               ↓              ↓              ↓                  ↓
│     ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│     │  Identity Portal │  │   LMS Portal     │  │  Fees Portal     │
│     │  (Main + Auth)   │  │                  │  │                  │
│     └──────────────────┘  └──────────────────┘  └──────────────────┘
│
│     ┌──────────────────┐
│     │Analytics Portal  │
│     │                  │
│     └──────────────────┘
│
└────────────────────────────────────────────────────────────────
                  ALL PORTALS USE SHARED DESIGN SYSTEM
            (Components, Navigation, Layouts, Design Tokens)
```

## Frontend Architecture

### Portals (Separate Next.js Apps)

Each portal is an independent Next.js application:

```
auth-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx      (Root layout with AppShell)
│   │   ├── page.tsx        (Portal-specific pages)
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── security/
│   │   └── settings/
│   ├── components/
│   │   └── (Portal-specific custom components)
│   ├── lib/
│   │   ├── auth.ts         (Auth logic - uses local session/JWT)
│   │   └── api-client.ts   (Calls backend API)
│   └── shared/             (Copy of design system)
│       ├── components/
│       ├── config/
│       ├── lib/
│       └── styles/
└── package.json

(Similar structure for lms-portal, fees-portal, analytics-portal)
```

### Design System Structure

```
shared-design-system/
├── components/
│   ├── layout/              ← App shell infrastructure
│   │   ├── AppShell         ← Main wrapper with sidebar + topbar
│   │   ├── Sidebar          ← Desktop navigation (role-filtered)
│   │   ├── Topbar           ← Header with user menu
│   │   └── MobileNavDrawer   ← Mobile navigation
│   │
│   ├── ui/                  ← Reusable UI components
│   │   ├── Button           ← Multiple variants
│   │   ├── Input            ← Form inputs
│   │   ├── Card             ← Container component
│   │   ├── Badge            ← Status indicators
│   │   ├── Table            ← Data tables
│   │   └── Alert            ← Notifications
│   │
│   ├── auth/                ← Authentication UI
│   │   ├── RoleGate         ← Show/hide by role
│   │   └── ProtectedLayout  ← Check auth status
│   │
│   ├── errors/              ← Error pages
│   │   ├── SessionExpired   ← Auth timeout
│   │   └── AccessDenied     ← Permission denied
│   │
│   ├── empty/               ← Empty state
│   │   └── EmptyState       ← No data screen
│   │
│   └── loading/             ← Loading placeholders
│       └── Skeleton         ← Animated loaders
│
├── lib/
│   └── types.ts             ← TypeScript definitions
│
├── config/
│   └── navigation.ts        ← Nav configs per portal
│
├── styles/
│   └── globals.css          ← Design tokens + utilities
│
├── README.md                ← Quick start
├── DESIGN_TOKENS.md         ← Token reference
├── IMPLEMENTATION_GUIDE.md  ← Setup instructions
└── ARCHITECTURE.md          ← This file
```

## Component Hierarchy

### Layout Layers

```
App (Root layout.tsx)
│
├── AppShell (Design system)
│   │
│   ├── Sidebar (Desktop nav)
│   │   └── RoleGate (Filter by role)
│   │
│   ├── MobileNavDrawer (Mobile nav)
│   │   └── RoleGate (Filter by role)
│   │
│   ├── Topbar (Header)
│   │   └── User Dropdown
│   │
│   └── Page Content
│       ├── PageHeader (Breadcrumbs, title)
│       │
│       ├── ContentCards
│       │   ├── Card
│       │   │   ├── CardHeader
│       │   │   ├── CardTitle
│       │   │   ├── CardContent
│       │   │   └── CardFooter
│       │   │
│       │   └── UI Components
│       │       ├── Button
│       │       ├── Input
│       │       ├── Badge
│       │       ├── Table
│       │       └── Alert
```

## Data Flow

### Authentication Flow

```
1. User visits portal
   ↓
2. Portal checks session/JWT (from cookies/localStorage)
   ↓
3. If authenticated:
   - Load user role
   - Render AppShell with role-filtered navigation
   - Show authorized content only (via RoleGate)
   ↓
4. If not authenticated:
   - Redirect to Identity Portal login
   - Or show SessionExpired component
```

### Role-Based Access

```
User Role: 'student'
   ↓
Navigation Item: { allowedRoles: ['student', 'teacher'] }
   ↓
RoleGate comparison:
   if (userRole in allowedRoles) → SHOW
   else → HIDE
```

### Component Props Flow

```
AppShell
├── navigationItems: NavigationItem[]    (from config/navigation.ts)
├── userRole: UserRole                   (from auth/session)
├── userName: string                     (from user object)
├── portalName: string                   (portal-specific)
└── isAuthenticated: boolean             (from auth check)

Sidebar (inside AppShell)
├── navigationItems (filtered by role)
└── RoleGate checks each item's allowedRoles

Page Component
├── Uses UI components (Button, Card, Table, etc.)
├── Uses RoleGate for conditional sections
└── Uses Skeleton for loading states
```

## Type System

### Core Types

```typescript
// User roles - Consistent across all portals
type UserRole = 'student' | 'teacher' | 'institution_admin' | 'super_admin';

// Navigation configuration
interface NavigationItem {
  label: string;
  href: string;
  icon?: ReactNode;
  allowedRoles?: UserRole[];    // Controls visibility
  children?: NavigationItem[];    // For nested menus
}

// Component props
interface AppShellProps {
  children: ReactNode;
  navigationItems: NavigationItem[];
  userRole: UserRole;
  isAuthenticated: boolean;
}
```

## Design Token System

### Layered Approach

```
Tailwind CSS (Base)
        ↓
Design Tokens (@theme inline in globals.css)
        ↓
Utility Classes (Custom classes like .card, .badge-success)
        ↓
Component Classes (Tailwind in JSX)
```

### Token Hierarchy

```
Color Tokens
├── Primary: #1F40AF (Links, primary buttons)
├── Dark: #0F2452 (Sidebar, dark mode)
├── Semantic:
│   ├── Success: #059669
│   ├── Warning: #F59E0B
│   ├── Error: #DC2626
│   └── Info: #0284C7
└── Neutral: Grays (text, borders, backgrounds)

Spacing Tokens
├── xs: 4px (0.25rem)
├── sm: 8px (0.5rem)
├── md: 12px (0.75rem)
├── lg: 16px (1rem)
├── xl: 24px (1.5rem)
├── 2xl: 32px (2rem)
├── 3xl: 48px (3rem)
└── 4xl: 64px (4rem)

Typography Tokens
├── Font Family: Inter + fallbacks
├── Display: 32px, 700 weight
├── Heading: 24px, 700 weight
├── Body: 14px, 400 weight
└── Small: 12px, 400 weight

Sizing Tokens
├── Button: sm (32px), md (40px), lg (48px)
├── Input: 40px standard, 32px compact
├── Sidebar: 260px desktop, 80px collapsed
└── Topbar: 64px height
```

## Responsive Design Strategy

### Breakpoints

```
Mobile:   < 640px   (Full-width, stacked layout)
Tablet:   640px - 1023px  (Collapsed sidebar, 2-column)
Desktop:  ≥ 1024px  (Full sidebar, 3+ columns)
```

### Responsive Patterns

```
AppShell
├── Mobile (< md):
│   ├── Hide sidebar
│   ├── Show drawer nav
│   └── Single-column content
│
├── Tablet (md - lg):
│   ├── Collapsed sidebar
│   ├── 2-column layout
│   └── Compact spacing
│
└── Desktop (≥ lg):
    ├── Full sidebar (260px)
    ├── Multi-column layout
    └── Full spacing
```

## Navigation Strategy

### Per-Portal Navigation

Each portal imports its own config:

```typescript
// auth-portal
import { identityPortalNav } from '@/shared/config/navigation';

// lms-portal
import { lmsPortalNav } from '@/shared/config/navigation';

// fees-portal
import { feesPortalNav } from '@/shared/config/navigation';

// analytics-portal
import { analyticsPortalNav } from '@/shared/config/navigation';
```

### Dynamic Filtering

Navigation items are filtered by role at render time:

```
All Items: [Dashboard, Courses, Admin Panel, Reports]
           ↓
User Role: 'student'
           ↓
Sidebar Renders: [Dashboard, Courses]
           (Admin Panel, Reports hidden)
```

## State Management

### Authentication State

Stored as:
- **Cookies** (HTTP-only for security)
- **Session** (Backend verified)
- **JWT** (If using token-based auth)

Used by:
- `AppShell` - Show/hide entire layout
- `ProtectedLayout` - Protect pages
- `RoleGate` - Show/hide components

### UI State

Stored as:
- **React State** (Local component state)
- **URL Params** (For pagination, filters)
- **localStorage** (For user preferences - sidebar collapsed, etc.)

## Performance Considerations

### Code Splitting

```
Each portal is a separate Next.js app
├── Own bundle (no shared JS)
├── Own CSS (only imported styles)
└── Own layout (no extra wrappers)
```

### Asset Optimization

```
Icons: Lucide React (tree-shakeable SVG)
Fonts: System fonts + Inter (minimal impact)
Images: Optimized via Next.js Image component
CSS: Tailwind (PurgeCSS removes unused)
```

### Loading Performance

```
Lazy Components:
├── Modal dialogs (code split)
├── Dropdowns (rendered on demand)
└── Complex tables (virtual scrolling capable)

Skeleton Loaders:
├── SkeletonCard (while loading)
├── SkeletonTable (while fetching)
└── Custom skeletons (per use case)
```

## Security Considerations

### No Client-Side Auth Logic

```
❌ Don't:
- Store sensitive tokens in localStorage
- Validate permissions on client only
- Implement auth logic in components

✓ Do:
- Store JWT in HTTP-only cookies
- Verify permissions on backend
- Use RoleGate only for UI, not security
```

### Role-Based UI Only

```
RoleGate prevents accidents (hiding UI),
NOT preventing malicious access.

Always validate:
- Authentication on server
- Permissions on backend
- API endpoints with role checks
```

## Testing Strategy

### Component Testing

```
test('Button renders with variant')
test('Card shows title and content')
test('Badge displays correct status color')
test('Table renders headers and rows')
test('RoleGate shows/hides content by role')
```

### Integration Testing

```
test('AppShell renders sidebar + topbar')
test('Navigation filters items by role')
test('ProtectedLayout shows SessionExpired when auth false')
test('Mobile drawer opens on menu click')
```

### E2E Testing

```
test('User can navigate between pages')
test('Role-based access prevents unauthorized viewing')
test('Mobile layout is responsive')
test('Dropdown menus work correctly')
```

## Accessibility

### Semantic HTML

- `<button>` for buttons (not `<div>` styled as button)
- `<nav>` for navigation
- `<main>` for content
- `<label>` for form inputs
- Proper heading hierarchy (H1 > H2 > H3)

### ARIA

- `aria-label` for icon-only buttons
- `aria-expanded` for dropdowns
- `aria-current="page"` for active nav items
- `aria-hidden` for decorative elements

### Keyboard Navigation

- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape to close modals/dropdowns
- Arrow keys in complex widgets

### Screen Readers

- Descriptive alt text for images
- Form labels associated with inputs
- Skip navigation links
- Landmark regions identified

## Future Extensibility

### Adding New Components

```
shared-design-system/
└── components/
    └── custom/
        └── NewComponent.tsx
```

### Overriding Design Tokens

```css
@theme inline {
  --color-primary: #YOUR_COLOR;  /* Override here */
}
```

### Custom Navigation

```typescript
// In your portal
const customNav: NavigationItem[] = [
  ...existingNav,
  {
    label: 'Custom Item',
    href: '/custom',
    allowedRoles: ['admin'],
  },
];
```

---

**Version**: 1.0  
**Status**: Production-ready  
**Last Updated**: January 26, 2026
