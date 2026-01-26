# @edu/db

Shared database package using Prisma and SQLite.

## Setup

```bash
pnpm db:push
pnpm db:seed
```

## Usage

```typescript
import { prisma } from '@edu/db';

const users = await prisma.user.findMany();
```
