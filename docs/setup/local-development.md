# Local Development

1. Copy `.env.example` to `.env`.
2. Run `npm install`.
3. Run `npx prisma migrate dev`.
4. Run `npx prisma db seed`.
5. Run `npm run dev`.

## Review Workflow Notes

- Open `/admin/reviews` to inspect the admin review workflow.
- Seed data is required for the admin pages to show reviewable content.
- Current review workflow stage includes:
  - approval logging
  - rejection flow
  - request evidence flow
  - request re-crawl flow
