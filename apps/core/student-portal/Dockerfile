FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Build the project
RUN corepack enable pnpm && pnpm run build --filter=@learnops/student-portal...

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/core/student-portal/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/core/student-portal/.next/static ./apps/core/student-portal/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/core/student-portal/public ./apps/core/student-portal/public

USER nextjs

EXPOSE 3005

ENV PORT 3005
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "apps/core/student-portal/server.js"]
