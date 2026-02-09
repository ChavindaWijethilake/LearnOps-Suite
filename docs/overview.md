# LearnOps Suite: Technical Overview

## Introduction
LearnOps Suite is a unified, enterprise-grade digital services platform designed for modern learning and operational management. It follows a monorepo architecture, hosting 7 specialized applications and a set of shared packages.

## Technology Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Pages Router support)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/) with Workspaces

## Architecture
The project utilizes a **Monorepo** structure to ensure consistency across applications while sharing core logic and UI components.

### Core Modules
- **Portal** (Port 3000): The central navigation and analytics hub.
- **Billing** (Port 3001): Financial operations and invoice tracking.
- **Service Management** (Port 3002): Internal service requests and ticketing.
- **Analytics** (Port 3003): Data visualization and performance reporting.

### Support Modules
- **Learning Hub** (Port 3004): Course catalogs and educational tracking.
- **Resource Center** (Port 3005): Documentation and knowledge base.
- **Project Tracker** (Port 3006): Task management and project workflows.

## Design Philosophy
The suite adheres to a strict **Industrial Command Center** aesthetic:
- **Palette**: Slate and Emerald base for a high-contrast, professional feel.
- **Corners**: Sharp 0px border radius for a structural, technical look.
- **Depth**: Solid offset shadows (`8px_8px_0px_0px`) over subtle blurs.
- **Layout**: Breadth-first, high-density information display.

## Dependency Management
Shared logic is abstracted into internal packages:
- `@learnops/ui`: Standardized layout, navbar, and sidebar components.
- `@learnops/theme`: Design tokens and global CSS variables.
- `@learnops/shared`: Shared types, store, and utility functions.
- `@learnops/db`: Mock data layer and persistence logic.
