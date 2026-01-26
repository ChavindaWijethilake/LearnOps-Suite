# SETUP GUIDE - Education Portal

## Windows PowerShell Setup Commands

### Step 1: Clean Install

```powershell
# Navigate to project directory
cd "e:\Projects\Web Application\education-portal-design"

# Remove old installations
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item pnpm-lock.yaml -ErrorAction SilentlyContinue

# Clean pnpm cache
pnpm store prune

# Install all dependencies
pnpm install
```

### Step 2: Database Setup

```powershell
# Navigate to database package
cd packages/db

# Generate Prisma client
pnpm run generate

# Create database and run migrations
pnpm run migrate

# Seed with demo data
pnpm run seed

# Return to root
cd ../..
```

**Expected Output:**
```
Database seeded successfully!
```

### Step 3: Run All Four Apps (Development Mode)

```powershell
# From root directory
pnpm dev

# Wait for all apps to start, then open browsers:
# - Service Request Portal: http://localhost:3001
# - Project Tracker: http://localhost:3002
# - Learning Hub: http://localhost:3003
# - Resource Center: http://localhost:3004
```

### Step 4: Run Individual Apps

```powershell
# Terminal 1: Service Request Portal
cd apps/service-request
pnpm dev   # Starts on http://localhost:3001

# Terminal 2: Project Tracker
cd apps/project-tracker
pnpm dev   # Starts on http://localhost:3002

# Terminal 3: Learning Hub
cd apps/learning-hub
pnpm dev   # Starts on http://localhost:3003

# Terminal 4: Resource Center
cd apps/resource-center
pnpm dev   # Starts on http://localhost:3004
```

### Step 5: Login Credentials

Use the same credentials for all four apps:

```
Email: student@example.com
Password: password123
```

---

## Complete Monorepo File Tree

```
education-portal-design/
├── .gitignore                          # Git ignore rules
├── README.md                           # Main documentation
├── package.json                        # Root workspace config
├── pnpm-workspace.yaml                 # pnpm workspace definition
├── tsconfig.json                       # Root TypeScript config
│
├── apps/
│   │
│   ├── service-request/                # Service Request Portal (Port 3001)
│   │   ├── .env.local                  # Environment variables
│   │   ├── next.config.mjs             # Next.js config
│   │   ├── package.json                # App dependencies
│   │   ├── postcss.config.mjs          # PostCSS config
│   │   ├── tailwind.config.ts          # Tailwind CSS config
│   │   ├── tsconfig.json               # TypeScript config
│   │   └── src/
│   │       └── app/
│   │           ├── layout.tsx          # Root layout
│   │           ├── page.tsx            # Landing page
│   │           ├── globals.css         # Global styles
│   │           ├── login/
│   │           │   └── page.tsx        # Login page
│   │           ├── app/
│   │           │   ├── page.tsx        # Dashboard
│   │           │   ├── new-request/
│   │           │   │   └── page.tsx    # Create request form
│   │           │   └── request/
│   │           │       └── [id]/
│   │           │           └── page.tsx # Request details
│   │           ├── api/
│   │           │   ├── auth/
│   │           │   │   ├── login/
│   │           │   │   │   └── route.ts
│   │           │   │   ├── check/
│   │           │   │   │   └── route.ts
│   │           │   │   └── logout/
│   │           │   │       └── route.ts
│   │           │   └── requests/
│   │           │       ├── route.ts    # List/create requests
│   │           │       └── [id]/
│   │           │           └── route.ts # Get/update request
│   │           ├── about/
│   │           │   └── page.tsx
│   │           ├── contact/
│   │           │   └── page.tsx
│   │           ├── privacy/
│   │           │   └── page.tsx
│   │           ├── terms/
│   │           │   └── page.tsx
│   │           └── status/
│   │               └── page.tsx
│   │
│   ├── project-tracker/                # Project Tracker (Port 3002)
│   │   ├── .env.local
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── app/
│   │           ├── layout.tsx
│   │           ├── page.tsx
│   │           ├── globals.css
│   │           ├── login/
│   │           │   └── page.tsx
│   │           ├── app/
│   │           │   ├── page.tsx        # Projects dashboard
│   │           │   ├── new-project/
│   │           │   ├── projects/
│   │           │   │   └── [id]/       # Project details with tasks
│   │           │   └── tasks/
│   │           ├── api/
│   │           │   ├── auth/*
│   │           │   ├── projects/*
│   │           │   └── tasks/*
│   │           └── (other pages)
│   │
│   ├── learning-hub/                   # Learning Hub (Port 3003)
│   │   ├── .env.local
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── app/
│   │           ├── layout.tsx
│   │           ├── page.tsx
│   │           ├── globals.css
│   │           ├── login/
│   │           │   └── page.tsx
│   │           ├── app/
│   │           │   ├── page.tsx        # Courses dashboard
│   │           │   ├── courses/
│   │           │   │   └── [id]/
│   │           │   │       ├── page.tsx # Course details
│   │           │   │       └── lessons/
│   │           │   │           └── [id]/
│   │           │   │               └── page.tsx
│   │           │   └── my-courses/
│   │           ├── api/
│   │           │   ├── auth/*
│   │           │   ├── courses/*
│   │           │   ├── enrollments/*
│   │           │   ├── lessons/*
│   │           │   └── progress/*
│   │           └── (other pages)
│   │
│   └── resource-center/                # Resource Center (Port 3004)
│       ├── .env.local
│       ├── next.config.mjs
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── src/
│           └── app/
│               ├── layout.tsx
│               ├── page.tsx
│               ├── globals.css
│               ├── login/
│               │   └── page.tsx
│               ├── app/
│               │   ├── page.tsx        # Resources dashboard
│               │   ├── resources/
│               │   │   ├── new/
│               │   │   │   └── page.tsx
│               │   │   └── [id]/
│               │   │       ├── page.tsx # Resource details
│               │   │       └── edit/
│               │   │           └── page.tsx
│               │   └── bookmarks/
│               ├── api/
│               │   ├── auth/*
│               │   ├── resources/*
│               │   ├── tags/*
│               │   └── bookmarks/*
│               └── (other pages)
│
├── packages/
│   │
│   ├── db/                             # Shared Database Package
│   │   ├── .env.example
│   │   ├── .env.local
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.ts               # Prisma client singleton
│   │   ├── prisma/
│   │   │   ├── schema.prisma          # Database schema (all models)
│   │   │   └── seed.js               # Database seeder with demo data
│   │   └── README.md
│   │
│   ├── ui/                             # Shared UI Components Package
│   │   ├── package.json
│   │   └── src/
│   │       ├── index.ts               # Component exports
│   │       ├── components/
│   │       │   ├── glass-button.tsx   # Glass-morphism button
│   │       │   ├── theme-provider.tsx # Theme wrapper
│   │       │   └── layout/
│   │       │       ├── navbar.tsx     # Navigation bar
│   │       │       ├── sidebar.tsx    # Sidebar navigation
│   │       │       ├── footer.tsx     # Footer
│   │       │       └── shell.tsx      # Shell wrapper
│   │       └── utils/
│   │           └── cn.ts             # Class name utility
│   │
│   └── types/                          # Shared Types Package
│       ├── package.json
│       └── src/
│           └── index.ts               # All TypeScript interfaces
│
└── pages/                              # Shared Static Pages
    ├── about.tsx                       # About page
    ├── contact.tsx                     # Contact page
    ├── privacy.tsx                     # Privacy policy
    ├── terms.tsx                       # Terms of service
    └── status.tsx                      # System status
```

---

## Key Package.json Files

### Root package.json

```json
{
  "name": "education-portal",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "pnpm -r dev",
    "build": "pnpm -r build",
    "start": "pnpm -r start",
    "db:migrate": "pnpm -r --filter=./packages/db migrate",
    "db:seed": "pnpm -r --filter=./packages/db seed",
    "db:studio": "pnpm -r --filter=./packages/db studio"
  },
  "workspaces": ["apps/*", "packages/*"]
}
```

### App package.json (Example: Service Request)

```json
{
  "name": "service-request-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19",
    "react-dom": "^19",
    "next": "16.0.10",
    "@edu/ui": "*",
    "@edu/db": "*",
    "@edu/types": "*",
    "jsonwebtoken": "9.0.3",
    "bcryptjs": "2.4.3",
    "lucide-react": "0.454.0",
    "tailwindcss": "^4.1.9",
    "clsx": "2.1.1",
    "class-variance-authority": "0.7.1"
  }
}
```

### Database package.json

```json
{
  "name": "@edu/db",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "seed": "node prisma/seed.js",
    "studio": "prisma studio",
    "generate": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "5.8.0",
    "bcryptjs": "2.4.3"
  },
  "devDependencies": {
    "prisma": "5.8.0"
  }
}
```

### UI package.json

```json
{
  "name": "@edu/ui",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-slot": "1.1.1",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "lucide-react": "0.454.0",
    "next": "16.0.10",
    "react": "^19",
    "react-dom": "^19",
    "tailwind-merge": "2.3.1"
  }
}
```

---

## pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

---

## Database Schema (Prisma)

The shared database includes comprehensive models:

- **User** - Authentication and profiles
- **ServiceRequest** - Support tickets with status tracking
- **Attachment** - Files attached to service requests
- **Comment** - Comments on service requests
- **Project** - Project management
- **Task** - Tasks within projects with status columns
- **Course** - Educational courses
- **Lesson** - Course lessons
- **Enrollment** - User course enrollments
- **Progress** - Lesson completion tracking
- **Resource** - Learning resources
- **ResourceTag** - Resource categorization
- **Bookmark** - Bookmarked resources

---

## Authentication Flow

All apps use the same JWT authentication:

1. **Login Request** → POST `/api/auth/login`
2. **JWT Created** → Stored in httpOnly cookie
3. **Session Check** → GET `/api/auth/check`
4. **Protected Routes** → Redirects to `/login` if not authenticated
5. **Logout** → POST `/api/auth/logout` clears cookie

Demo Credentials:
- Email: student@example.com
- Password: password123

---

## Theme Colors Per App

- **Service Request Portal:** Blue (#0284c7)
- **Project Tracker:** Purple (#9333ea)
- **Learning Hub:** Emerald (#16a34a)
- **Resource Center:** Amber (#d97706)

---

## Environment Variables

### packages/db/.env.local
```
DATABASE_URL="file:./dev.db"
```

### Each app/.env.local
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key-change-in-production"
NODE_ENV="development"
```

---

## Common Issues and Solutions

### Issue: pnpm install fails with version errors
**Solution:**
```powershell
pnpm store prune
Remove-Item -Recurse -Force node_modules, pnpm-lock.yaml
pnpm install
```

### Issue: Database connection fails
**Solution:**
```powershell
cd packages/db
pnpm run generate
pnpm run migrate
pnpm run seed
```

### Issue: Port already in use
**Solution:** Change port in app's package.json:
```json
"dev": "next dev -p 3010"
```

### Issue: Module not found (@edu/*)
**Solution:** Restart dev server (imports need to be re-resolved)

---

## Next Steps for Extension

1. **Add Custom Styling:** Modify Tailwind configs per app
2. **Add Database Models:** Update schema.prisma and migrate
3. **Add New Apps:** Create new folder in /apps with same structure
4. **Change JWT Secret:** Update in app .env.local files
5. **Deploy:** Build with `pnpm build` and deploy each app separately

---

## Support and Documentation

- Main README: See /README.md
- Database Docs: See /packages/db/README.md
- Prisma Docs: https://www.prisma.io/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs

---

**All four apps are fully functional and ready for development!**
