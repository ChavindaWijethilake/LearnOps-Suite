# Configuration Reference

## Root package.json

```json
{
  "name": "education-portal",
  "version": "1.0.0",
  "private": true,
  "description": "Modern education portal with service requests, projects, learning, and resources",
  "scripts": {
    "dev": "pnpm -r dev",
    "build": "pnpm -r build",
    "start": "pnpm -r start",
    "clean": "pnpm -r clean",
    "db:migrate": "pnpm -r --filter=./packages/db migrate",
    "db:seed": "pnpm -r --filter=./packages/db seed",
    "db:push": "pnpm -r --filter=./packages/db db:push",
    "db:studio": "pnpm -r --filter=./packages/db studio"
  },
  "dependencies": {},
  "devDependencies": {},
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

## pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## Service Request Portal - package.json

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
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5"
  }
}
```

## Project Tracker - package.json

```json
{
  "name": "project-tracker-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3002",
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
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5"
  }
}
```

## Learning Hub - package.json

```json
{
  "name": "learning-hub-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3003",
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
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5"
  }
}
```

## Resource Center - package.json

```json
{
  "name": "resource-center-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3004",
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
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8.5"
  }
}
```

## Database Package - package.json

```json
{
  "name": "@edu/db",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    },
    "./prisma": "./prisma/schema.prisma"
  },
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

## UI Package - package.json

```json
{
  "name": "@edu/ui",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    },
    "./styles": "./src/styles/globals.css"
  },
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
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}
```

## Types Package - package.json

```json
{
  "name": "@edu/types",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5"
  }
}
```

## Environment Variables

### packages/db/.env.local
```
DATABASE_URL="file:./dev.db"
```

### apps/service-request/.env.local
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key-change-in-production"
NODE_ENV="development"
```

### apps/project-tracker/.env.local
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key-change-in-production"
NODE_ENV="development"
```

### apps/learning-hub/.env.local
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key-change-in-production"
NODE_ENV="development"
```

### apps/resource-center/.env.local
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key-change-in-production"
NODE_ENV="development"
```

## TypeScript Configuration (All Apps)

```json
{
  "compilerOptions": {
    "lib": ["es2020", "dom", "dom.iterable"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "es2020",
    "useDefineForClassFields": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@edu/*": ["../../packages/*/src"],
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "next-env.d.ts"],
  "exclude": ["node_modules"]
}
```

## Tailwind Config (Service Request - Blue)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
```

## PostCSS Config (All Apps)

```javascript
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
};
```

## Next.js Config (All Apps)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

## Port Assignments

| App | Port | Theme | Color |
|-----|------|-------|-------|
| Service Request Portal | 3001 | Blue | #0284c7 |
| Project Tracker | 3002 | Purple | #9333ea |
| Learning Hub | 3003 | Emerald | #16a34a |
| Resource Center | 3004 | Amber | #d97706 |

## Demo Credentials

```
Email: student@example.com
Password: password123
```

These credentials work for all four applications.

---

All configuration files are already created and ready to use!
