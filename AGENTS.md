# AGENTS.md

Repository guide for coding agents working in `overseas-ai-platform`.

## Project Overview

- Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS, Prisma, Vitest, Playwright.
- Current local database: SQLite via `DATABASE_URL=file:./prisma/dev.db`.
- The app contains:
  - public marketing / information pages under `src/app/`
  - admin review pages under `src/app/admin/`
  - Prisma schema and migrations under `prisma/`
  - test files colocated in `src/**/*.test.ts(x)` and browser smoke tests in `tests/smoke/`

## Rule Files

- No `.cursor/rules/` directory found.
- No `.cursorrules` file found.
- No `.github/copilot-instructions.md` found.
- No prior repository-root `AGENTS.md` existed when this file was created.

## Install and Setup

- Install dependencies:
  - `npm install`
- Copy env file:
  - `copy .env.example .env` on Windows cmd
  - or `cp .env.example .env` in bash
- Apply database migrations:
  - `npm run db:migrate`
- Seed local data:
  - `npm run db:seed`
- Start dev server:
  - `npm run dev`

## Build / Test Commands

### Core commands

- Dev server: `npm run dev`
- Production build: `npm run build`
- Run unit tests: `npm test`
- Generate Prisma client: `npm run db:generate`
- Run migrations: `npm run db:migrate`
- Seed database: `npm run db:seed`

### Single-test commands

- Run one Vitest file:
  - `npm test -- src/app/page.test.tsx`
- Run multiple Vitest files:
  - `npm test -- src/lib/queries/services.test.ts src/app/ai/[slug]/page.test.tsx`
- Run one Playwright smoke test:
  - `npx playwright test tests/smoke/homepage.spec.ts`
- Run multiple Playwright smoke tests:
  - `npx playwright test tests/smoke/public-navigation.spec.ts tests/smoke/admin-review.spec.ts`

### Full verification commands

- Unit tests + smoke tests:
  - `npm test && npx playwright test`
- Full release verification:
  - `npm test && npx playwright test && npm run build`

## Lint / Typecheck Notes

- There is currently **no dedicated lint script** in `package.json`.
- There is currently **no standalone typecheck script** in `package.json`.
- `npm run build` is the main verification step for production compilation and type validity.
- Do not claim lint is passing unless you add and run a real lint command.

## File and Directory Conventions

- App routes live in `src/app/`.
- Dynamic routes use App Router conventions, e.g. `src/app/ai/[slug]/page.tsx`.
- Shared UI components live in `src/components/`.
- Admin-only UI components live in `src/components/admin/`.
- Query helpers live in `src/lib/queries/`.
- Review workflow logic lives in `src/lib/review/`.
- Seed content lives in `src/data/seed/`.
- Prisma schema, migrations, and seed script live in `prisma/`.

## Import Style

- Prefer absolute imports from `@/` for app code:
  - `import { prisma } from '@/lib/db';`
- Use relative imports only inside tight local modules when appropriate:
  - `import { logReviewAction } from './log-review-action';`
- Keep imports grouped with a blank line between groups when it improves readability:
  1. React / framework imports
  2. app absolute imports (`@/...`)
  3. local relative imports
- Keep type-only imports explicit when useful:
  - `import type { ReviewDecisionType } from '@prisma/client';`

## Formatting Style

- Use TypeScript with semicolons.
- Use single quotes.
- Keep trailing commas off unless the surrounding file style clearly uses them.
- Prefer readable multi-line JSX over dense one-liners.
- Keep object literals expanded when they carry business meaning.
- Match the existing style already present in the file before introducing new formatting patterns.

## Naming Conventions

- React components: `PascalCase`
  - `SiteHeader`, `ReviewActionBar`
- Functions: `camelCase`
  - `getServiceBySlug`, `publishServiceReview`
- Variables and constants: `camelCase`
  - `launchServices`, `accountServices`
- Route page components: descriptive `PascalCase`
  - `AiPage`, `AccountsPage`, `ServiceDetailPage`
- Prisma enums and models: follow Prisma schema naming already established.
- Slugs: lowercase kebab-case strings.

## TypeScript Rules

- Prefer explicit types for public function inputs and outputs when they carry workflow meaning.
- Infer local variables when obvious.
- Do not use `any`.
- Do not use `@ts-ignore` or `@ts-expect-error` as shortcuts.
- Keep literal unions and exported constants aligned, e.g. review decision types.
- Prefer narrow return values for workflow helpers.

## React / Next.js Rules

- Default to Server Components in `src/app/` unless client interactivity is required.
- Only add `'use client'` when needed.
- Keep page files focused on orchestration and rendering.
- Move reusable UI into `src/components/`.
- Move data access into `src/lib/queries/` instead of querying directly in many places.
- For admin actions, keep server actions in `src/app/admin/actions.ts` or similarly scoped server modules.

## Prisma and Data Rules

- Update `prisma/schema.prisma` first, then run a migration.
- Never hand-wave schema changes; always generate an actual migration.
- Keep seed data deterministic and idempotent.
- Prefer `upsert` for seed flows.
- Keep review workflow state changes explicit and auditable.
- Do not commit local SQLite data files unless intentionally required; schema and migrations matter more than local DB artifacts.

## Error Handling Rules

- Fail loudly for truly invalid states.
- Prefer explicit guard clauses:
  - return early when a record is missing
  - throw when required entities must exist for a workflow to be valid
- Do not swallow errors with empty catches.
- For review workflow helpers, update task status and log actions deliberately.
- Preserve auditability: notes, timestamps, and action logs should be recorded when state changes.

## Testing Rules

- Follow TDD when adding new behavior:
  1. write failing test
  2. run it and confirm failure
  3. implement minimal code
  4. rerun tests
- Keep unit tests in `src/**/*.test.ts(x)`.
- Keep Playwright tests in `tests/smoke/`.
- When adding a workflow helper, add a focused unit test first.
- When adding a new route or important UI state, add or update a smoke test if the behavior is user-visible.

## Review Workflow Expectations

- Review-related changes must preserve these principles:
  - crawl results do not directly overwrite published content
  - review actions must be auditable
  - task status transitions must be explicit
  - snapshots should be created on publish paths

## Agent Behavior Expectations

- Before large changes, inspect nearby files and match local conventions.
- Before finishing, run the narrowest relevant test first, then broader verification if needed.
- For user-visible or release-affecting work, prefer:
  - `npm test && npx playwright test && npm run build`
- If you add new commands or tooling, update this file.
- If you discover repository rules later (`.cursor`, Copilot instructions, etc.), merge them into this file instead of duplicating guidance elsewhere.
