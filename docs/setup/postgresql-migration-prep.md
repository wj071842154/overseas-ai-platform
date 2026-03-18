# PostgreSQL Migration Prep

This repository currently runs local development with SQLite so the MVP can be executed in a lightweight environment.

## Current State

- Active local datasource in `prisma/schema.prisma`: `sqlite`
- Active local sample env file: `.env.example`
- Working local command chain:
  - `npm run db:migrate`
  - `npm run db:seed`
  - `npm test`
  - `npm run build`

## Goal State

Switch local and deployment environments to PostgreSQL after a runnable PostgreSQL instance is available.

## Prepared Files

- `.env.postgres.example`
- `docker-compose.postgres.yml`

## Intended Switch Steps

1. Start PostgreSQL locally.
2. Copy `.env.postgres.example` to `.env`.
3. Update `prisma/schema.prisma` datasource provider from `sqlite` to `postgresql`.
4. Recreate a clean PostgreSQL migration baseline if needed.
5. Run:
   - `npx prisma generate`
   - `npx prisma migrate dev`
   - `npx prisma db seed`
6. Re-run:
   - `npm test`
   - `npx playwright test`
   - `npm run build`

## Important Notes

- This prep step does **not** change the active Prisma datasource yet.
- The actual datasource switch should happen only when PostgreSQL is available for verification.
- Avoid mixing datasource-provider changes with unrelated product changes.
