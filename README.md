# Education Portal - Modern Learning Platform

A comprehensive, glass-morphism designed education platform with four integrated applications: Service Request Portal, Project Tracker, Learning Hub, and Resource Center.

## Features

- **Four Integrated Applications**
  - Service Request Portal (Blue theme)
  - Project Tracker (Purple theme)
  - Learning Hub (Emerald theme)
  - Resource Center (Amber theme)

- **Modern Design**
  - Glass-morphism UI with translucent surfaces and blur effects
  - Consistent design system across all apps
  - Unique accent colors per app
  - Smooth animations and transitions
  - Dark mode support

- **Authentication**
  - JWT-based authentication with httpOnly cookies
  - Secure password hashing with bcryptjs
  - Session management

- **Full-Stack Architecture**
  - Next.js 16 with App Router
  - Prisma ORM with SQLite
  - Monorepo structure with pnpm workspaces
  - Shared UI components and database package

## Project Structure

```
education-portal/
├── apps/
│   ├── service-request/          # Service Request Portal (port 3001)
│   ├── project-tracker/          # Project Tracker (port 3002)
│   ├── learning-hub/             # Learning Hub (port 3003)
│   └── resource-center/          # Resource Center (port 3004)
├── packages/
│   ├── db/                       # Shared Prisma database
│   ├── ui/                       # Shared UI components
│   └── types/                    # Shared TypeScript types
├── pages/                        # Shared information pages
└── package.json                  # Root workspace config
```

## Quick Start

### Prerequisites
- Node.js 18+ (with pnpm)
- Windows PowerShell or compatible terminal

### Installation

```powershell
# Clean install (from project root)
pnpm install

# Navigate to database package
cd packages/db

# Create database and run migrations
pnpm migrate

# Seed with demo data
pnpm seed

# Navigate back to root
cd ../..
```

### Running All Apps

```powershell
# From root directory
pnpm dev

# This will start all 4 apps:
# - Service Request: http://localhost:3001
# - Project Tracker: http://localhost:3002
# - Learning Hub: http://localhost:3003
# - Resource Center: http://localhost:3004
```

### Running Individual Apps

```powershell
# Service Request Portal
cd apps/service-request
pnpm dev      # Runs on http://localhost:3001

# Project Tracker
cd apps/project-tracker
pnpm dev      # Runs on http://localhost:3002

# Learning Hub
cd apps/learning-hub
pnpm dev      # Runs on http://localhost:3003

# Resource Center
cd apps/resource-center
pnpm dev      # Runs on http://localhost:3004
```

## Demo Credentials

All apps use the same authentication system with demo data:

- **Email:** student@example.com
- **Password:** password123

## Application Features

### Service Request Portal (Blue)
- Submit service requests with title, description, category, and priority
- Track request status (Open, In Progress, Resolved, Closed)
- View all requests with filtering
- Update request status and add comments

### Project Tracker (Purple)
- Create and manage projects
- Add tasks to projects with status tracking
- Move tasks between columns (To Do, In Progress, Done)
- Set task priority and due dates
- Track project progress

### Learning Hub (Emerald)
- Browse and enroll in courses
- View course details and syllabus
- Complete lessons with progress tracking
- Track learning progress with percentages
- View course materials and resources

### Resource Center (Amber)
- Create and organize resources
- Add resources with links or file uploads
- Tag resources for easy categorization
- Bookmark favorite resources
- Search and filter resources by category and tags

## Technology Stack

- **Frontend:** React 19, Next.js 16, TypeScript
- **Styling:** Tailwind CSS 4, Glass-morphism design
- **Backend:** Next.js API Routes
- **Database:** Prisma ORM, SQLite
- **Auth:** JWT with httpOnly cookies, bcryptjs
- **Monorepo:** pnpm workspaces

## Database Schema

The shared database includes models for:
- Users (authentication)
- Service Requests (with attachments and comments)
- Projects and Tasks
- Courses, Lessons, Enrollments, and Progress
- Resources (with tags and bookmarks)

All data is stored in a single SQLite database at `packages/db/dev.db`

## Environment Variables

Each app has a `.env.local` file with:
- `DATABASE_URL` - SQLite database path
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## Available Scripts

### Root Level
```powershell
pnpm dev      # Run all apps
pnpm build    # Build all apps
pnpm db:migrate  # Run migrations
pnpm db:seed     # Seed database
pnpm db:studio   # Open Prisma Studio
```

### Per App
```powershell
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Important Notes

### Security
- Never commit `.env.local` files
- Change `JWT_SECRET` in production
- Use HTTPS in production
- Update password hashing in seed if extending for production

### Development
- All apps share the same database
- Demo data is seeded automatically
- Changes to @edu packages require app restart
- Database is reset on seed (clears all data)

### Extending
- Add new apps to `/apps` directory
- Add shared packages to `/packages` directory
- Update `pnpm-workspace.yaml` to include new workspaces
- Create Prisma models in `packages/db/prisma/schema.prisma`

## Styling Guide

### Glass-Morphism Classes
```tailwind
/* Backgrounds */
bg-white/30 dark:bg-slate-800/30
bg-white/40 dark:bg-slate-900/40

/* Borders */
border border-white/20
border border-white/30

/* Blur */
backdrop-blur-md

/* Shadows */
shadow-lg shadow-color-500/20
```

### App Color Schemes
- **Service Request:** Blue (blue-600)
- **Project Tracker:** Purple (purple-600)
- **Learning Hub:** Emerald (emerald-600)
- **Resource Center:** Amber (amber-600)

## Troubleshooting

### pnpm install fails
- Check Node.js version: `node --version`
- Clear pnpm cache: `pnpm store prune`
- Delete node_modules and pnpm-lock.yaml, reinstall

### Database issues
- Check DATABASE_URL in `.env.local`
- Verify `packages/db/dev.db` exists
- Run `pnpm db:migrate` again
- Check Prisma errors: `pnpm db:studio`

### Port conflicts
- Change port in app's `package.json` scripts
- Ensure no other services use ports 3001-3004

## License

This project is provided as-is for educational purposes.

## Support

For issues or questions, contact: support@eduportal.com

---

Built with modern web technologies for a seamless learning experience.

**Pages:**
- Landing page
- Login page
- Registration page
- Dashboard (role-aware)
- Profile management
- Security settings
- Access control

**Getting Started:**
```bash
cd auth-portal
npm install
npm run dev
```

### 3. LMS Portal (`/lms-portal`)
**Learning Management System for educational delivery**

- Course management & enrollment
- Assignment creation & submission
- Attendance tracking
- Exam scheduling
- Grade management
- Course materials & resources

**Pages:**
- Courses (list & details)
- Assignments (view, submit, grade)
- Attendance records
- Exam schedule

**Getting Started:**
```bash
cd lms-portal
npm install
npm run dev
```

### 4. Fees Portal (`/fees-portal`)
**Financial management including fees, payments, and scholarships**

- Invoice & fee management
- Payment processing & history
- Scholarship discovery & applications
- Scholarship disbursement tracking
- Financial reporting

**Pages:**
- Invoices & fee schedules
- Payment history
- Scholarships (browse, apply, track)
- Disbursements tracking

**Getting Started:**
```bash
cd fees-portal
npm install
npm run dev
```

### 5. Analytics Portal (`/analytics-portal`)
**Academic performance & institutional analytics**

- Performance dashboards
- Attendance correlation analysis
- Dropout risk identification
- Institutional insights
- Comprehensive reporting

**Pages:**
- Dashboard (KPI overview)
- Performance analytics
- Attendance insights
- Dropout risk monitoring

**Getting Started:**
```bash
cd analytics-portal
npm install
npm run dev
```

## Tech Stack

### Frontend (All Portals)
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API / SWR

### Backend
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Security**: bcryptjs, CORS, dotenv

## Database Schema

The Prisma schema includes:
- **Users**: Students, Teachers, Admins
- **Institutions**: Educational institutions
- **Courses**: Course management & enrollment
- **Assignments**: Assignment submissions & grading
- **Attendance**: Attendance records
- **Exams**: Exam scheduling
- **Fees**: Fee management & status
- **Payments**: Payment history & receipts
- **Scholarships**: Scholarship applications & approvals
- **Disbursements**: Scholarship fund disbursements

## User Roles & Permissions

1. **Student**
   - View enrolled courses & materials
   - Submit assignments
   - View grades & attendance
   - Apply for scholarships
   - Pay fees
   - Access personal analytics

2. **Teacher**
   - Create & manage courses
   - Create assignments & exams
   - Grade submissions
   - Track attendance
   - View class analytics

3. **Institution Admin**
   - Manage institution data
   - Oversee all courses
   - Approve scholarships
   - View institutional analytics
   - Generate reports

4. **Super Admin**
   - System-wide oversight
   - Multi-institution management
   - Global analytics
   - System configuration

## Setup Instructions

### Prerequisites
- Node.js 16+
- PostgreSQL 12+
- npm or pnpm

### Environment Variables

#### Backend API (`.env`)
```
DATABASE_URL="postgresql://user:password@localhost:5432/education_db"
JWT_SECRET="your-secret-key-change-in-production"
PORT=3000
NODE_ENV="development"
```

#### Each Portal (`.env.local`)
```
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_AUTH_PORTAL_URL="http://localhost:3001"
NEXT_PUBLIC_LMS_PORTAL_URL="http://localhost:3002"
NEXT_PUBLIC_FEES_PORTAL_URL="http://localhost:3003"
NEXT_PUBLIC_ANALYTICS_PORTAL_URL="http://localhost:3004"
```

### Installation & Running

1. **Backend API**
   ```bash
   cd backend-api
   npm install
   npx prisma migrate dev
   npm run dev  # Runs on port 3000
   ```

2. **Each Portal** (in separate terminals)
   ```bash
   cd auth-portal && npm install && npm run dev       # Port 3001
   cd lms-portal && npm install && npm run dev        # Port 3002
   cd fees-portal && npm install && npm run dev       # Port 3003
   cd analytics-portal && npm install && npm run dev  # Port 3004
   ```

## API Routes

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/profile` - Get current user
- `PUT /api/users/profile` - Update profile
- `GET /api/users/:id` - Get user by ID

### LMS
- `GET /api/lms/courses` - List courses
- `GET /api/lms/assignments` - List assignments
- `GET /api/lms/attendance` - Get attendance
- `GET /api/lms/exams` - List exams

### Fees
- `GET /api/fees` - List fees
- `GET /api/fees/payments` - Payment history
- `POST /api/fees/payments` - Process payment

### Scholarships
- `GET /api/scholarships` - List scholarships
- `POST /api/scholarships/apply` - Apply for scholarship
- `GET /api/scholarships/applications` - Manage applications

### Analytics
- `GET /api/analytics/performance` - Performance data
- `GET /api/analytics/attendance` - Attendance analytics
- `GET /api/analytics/dropout-risk` - Dropout risk data
- `GET /api/analytics/dashboard` - Dashboard data

## Development Guidelines

### Code Organization
- **Components**: Reusable UI components
- **Pages**: Route handlers
- **Lib**: Utilities, API clients, context
- **Hooks**: Custom React hooks
- **Styles**: Global and component styles

### Component Patterns
- Functional components with hooks
- TypeScript for type safety
- Separated concerns (UI, logic, state)
- Responsive design (mobile-first)

### State Management
- React Context for global auth state
- SWR for data fetching & caching
- Local state for UI interactions

## Security Considerations

1. **Authentication**: JWT tokens with secure expiration
2. **Authorization**: RBAC on both frontend and backend
3. **API Security**: CORS, input validation, sanitization
4. **Data Protection**: Password hashing (bcrypt), HTTPS in production
5. **Session Management**: Secure HTTP-only cookies

## Deployment

### Backend (Node.js)
- Recommended: Vercel, Railway, Heroku, or AWS
- Ensure PostgreSQL connection
- Set production environment variables

### Frontends (Next.js)
- Recommended: Vercel (seamless Next.js deployment)
- Build: `npm run build`
- Start: `npm run start`

## Testing

Each module can be tested independently:
```bash
# Backend API tests
cd backend-api && npm test

# Portal tests
cd auth-portal && npm test
cd lms-portal && npm test
cd fees-portal && npm test
cd analytics-portal && npm test
```

## Contributing

1. Create a feature branch
2. Make changes following the code guidelines
3. Test locally
4. Submit a pull request with clear descriptions

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or contributions, please open an issue on the project repository.

---

**Version**: 1.0.0  
**Last Updated**: 2026-01-26
