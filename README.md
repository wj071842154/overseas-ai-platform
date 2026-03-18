# Overseas AI Platform MVP

A responsive Web MVP for structured overseas AI service and account decision support.

## Scripts

- `npm run dev`
- `npm test`
- `npm run build`
- `npm run db:migrate`
- `npm run db:seed`

## Review Workflow Stage

- Admin review entry: `/admin/reviews`
- Current implemented review actions:
  - approve
  - reject
  - needs evidence
  - re-crawl required
- Review actions are logged through `ReviewActionLog`
- Publishing creates service snapshots for traceability
