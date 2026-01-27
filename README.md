# LearnOps Suite

A unified learning and service management platform built with Next.js, TypeScript, and Tailwind CSS.

## Overview

LearnOps Suite is a modern enterprise-style digital services suite consisting of:

### Core Modules
- **Portal** (Port 3000) - Main dashboard and navigation hub
- **Billing** (Port 3001) - Invoice and payment management
- **Service Management** (Port 3002) - Service request tracking and workflow
- **Analytics** (Port 3003) - Reports and dashboards

### Support Tools
- **Learning Hub** (Port 3004) - Course catalog and progress tracking
- **Resource Center** (Port 3005) - Articles and documentation
- **Project Tracker** (Port 3006) - Project and task management

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Or use the PowerShell script (Windows)
./scripts/dev.ps1
```

### Access the Apps

- Portal: http://localhost:3000
- Billing: http://localhost:3001
- Service Management: http://localhost:3002
- Analytics: http://localhost:3003
- Learning Hub: http://localhost:3004
- Resource Center: http://localhost:3005
- Project Tracker: http://localhost:3006

## Project Structure

```
learnops-suite/
├── apps/
│   ├── core/
│   │   ├── portal/           # Main suite portal
│   │   ├── billing/          # Billing module
│   │   ├── service-management/  # Service requests
│   │   └── analytics/        # Analytics and reports
│   └── support/
│       ├── learning-hub/     # Learning platform
│       ├── resource-center/  # Resources and docs
│       └── project-tracker/  # Project management
├── packages/
│   ├── ui/                   # Shared UI components
│   ├── theme/                # Design tokens and theme
│   ├── shared/               # Auth, store, utilities
│   └── config/               # Shared configuration
└── scripts/
    └── dev.ps1               # Development helper script
```

## Features

### Authentication
- Local OTP-based authentication (simulated)
- No external services required
- Role-based access control (Admin, Staff, Viewer)

### Data Storage
- In-memory mock database
- LocalStorage persistence
- Pre-seeded with realistic demo data

### Design System
- Light mode only
- Per-app accent colors
- Consistent component library
- Smooth transitions and animations

### Activity Tracking
- Cross-app activity feed
- Event logging
- Recent actions display

## Development

### Scripts

```bash
# Start all apps
pnpm dev

# Build all apps
pnpm build

# Run linting
pnpm lint

# Clean build artifacts
pnpm clean
```

### Adding a New App

1. Create the app directory in `apps/core/` or `apps/support/`
2. Add `package.json` with appropriate port
3. Configure dependencies on shared packages
4. Add app-specific accent color in `packages/theme/theme.css`
5. Update workspace configuration

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: lucide-react
- **Validation**: zod
- **Package Manager**: pnpm with workspaces

## Design Philosophy

- **Enterprise-grade UI**: Clean, professional, modern
- **Light Mode**: Optimized for productivity and readability
- **Consistent Experience**: Shared components and patterns
- **Local-First**: No external dependencies for core functionality
- **Responsive**: Works across all screen sizes

## Mock Data

The suite uses a mock in-memory store that persists to localStorage. On first load, realistic demo data is automatically seeded including:

- Invoices and customers
- Service requests
- Courses and progress
- Articles and files
- Projects and tasks

Reset data by clearing localStorage or using the dev tools.

## License

Private - Internal Use Only

## Support

For questions or issues, refer to the documentation in the Resource Center app.
