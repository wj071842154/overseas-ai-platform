# Phase 2 Follow-up Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move the project from a runnable MVP into a more complete product phase by improving content depth, detail-page structure, search/discovery, admin review usability, real data flow, and PostgreSQL readiness.

**Architecture:** Keep the current Next.js + Prisma structure, but deepen the data shown on the public side and the state/action richness on the admin side. Continue using the current SQLite-backed local flow until PostgreSQL is available for a verified datasource switch.

**Tech Stack:** Next.js, TypeScript, Prisma, SQLite (current local), PostgreSQL (target), Vitest, Playwright, Tailwind CSS

---

### Task 1: Expand launch content beyond summary-grade copy

**Files:**
- Modify: `src/data/seed/services.ts`
- Modify: `src/data/seed/articles.ts`
- Modify: `src/data/seed/comparisons.ts`
- Test: `src/data/seed/services.test.ts`

**Step 1: Write the failing test**

```ts
test('launch services include audience and key requirement fields', () => {
  expect(launchServices[0].audience.length).toBeGreaterThan(10);
  expect(launchServices[0].keyRequirement.length).toBeGreaterThan(10);
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/data/seed/services.test.ts`
Expected: FAIL because launch entries are still too shallow or missing richer text fields

**Step 3: Write minimal implementation**

Add richer content fields and replace short summary-grade copy with stronger editorial copy for:
- 14 launch services
- 4 core articles
- 4 core comparisons

**Step 4: Run test to verify it passes**

Run: `npm test -- src/data/seed/services.test.ts`
Expected: PASS

**Step 5: Re-seed local data**

Run: `set -a && . ".env.example" && set +a && npx prisma db seed`
Expected: PASS

**Step 6: Commit**

```bash
git add src/data/seed/services.ts src/data/seed/articles.ts src/data/seed/comparisons.ts
git commit -m "content: deepen launch editorial content"
```

### Task 2: Enrich service detail pages with structured sections

**Files:**
- Modify: `src/app/ai/[slug]/page.tsx`
- Modify: `src/app/accounts/[slug]/page.tsx`
- Modify: `src/lib/queries/services.ts`
- Modify: `prisma/seed.ts`
- Test: `src/app/ai/[slug]/page.test.tsx`

**Step 1: Write the failing test**

```tsx
test('renders structured detail sections', async () => {
  const ui = await ServiceDetailPage({ params: Promise.resolve({ slug: 'chatgpt' }) });
  render(ui);
  expect(screen.getByText('价格与套餐')).toBeInTheDocument();
  expect(screen.getByText('注册条件')).toBeInTheDocument();
  expect(screen.getByText('地区与可用性')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app/ai/[slug]/page.test.tsx`
Expected: FAIL because those sections are missing or incomplete

**Step 3: Write minimal implementation**

Update seed data and query includes so detail pages can render:
- plans
- registration requirements
- region requirements
- source summaries

**Step 4: Run test to verify it passes**

Run: `set -a && . ".env.example" && set +a && npx prisma db seed && npm test -- src/app/ai/[slug]/page.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add prisma/seed.ts src/app/ai/[slug]/page.tsx src/app/accounts/[slug]/page.tsx src/lib/queries/services.ts src/app/ai/[slug]/page.test.tsx
git commit -m "feat: enrich detail pages with structured sections"
```

### Task 3: Add search and discovery entry points

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/page.test.tsx`
- Create: `src/app/search/page.tsx`
- Create: `src/app/search/page.test.tsx`
- Create: `src/lib/queries/search.ts`

**Step 1: Write the failing tests**

```tsx
test('homepage shows latest changes section', () => {
  render(<HomePage />);
  expect(screen.getByText('最新变化')).toBeInTheDocument();
});

test('renders search results heading', async () => {
  const ui = await SearchPage({ searchParams: Promise.resolve({ q: 'chatgpt' }) });
  render(ui);
  expect(screen.getByText('搜索结果')).toBeInTheDocument();
});
```

**Step 2: Run tests to verify they fail**

Run: `npm test -- src/app/page.test.tsx src/app/search/page.test.tsx`
Expected: FAIL because homepage discovery section and search page do not exist yet

**Step 3: Write minimal implementation**

Add:
- a simple “latest changes” discovery block on homepage
- a basic search route with categorized results
- a query helper for service/article lookup by keyword

**Step 4: Run tests to verify they pass**

Run: `npm test -- src/app/page.test.tsx src/app/search/page.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add src/app/page.tsx src/app/page.test.tsx src/app/search/page.tsx src/app/search/page.test.tsx src/lib/queries/search.ts
git commit -m "feat: add basic search and discovery entry points"
```

### Task 4: Improve admin review page usability

**Files:**
- Modify: `src/app/admin/reviews/page.tsx`
- Modify: `src/components/admin/review-action-bar.tsx`
- Modify: `src/components/admin/review-task-detail.tsx`
- Test: `src/app/admin/reviews/page.test.tsx`
- Test: `tests/smoke/admin-review.spec.ts`

**Step 1: Write the failing test**

```tsx
test('renders review action form with notes field', async () => {
  const ui = await AdminReviewsPage();
  render(ui);
  expect(screen.getByLabelText('审核备注')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app/admin/reviews/page.test.tsx`
Expected: FAIL because the page still behaves like a static queue

**Step 3: Write minimal implementation**

Add:
- notes textarea
- task summary block
- action buttons bound to current review actions
- a clearer task-detail component

**Step 4: Run test to verify it passes**

Run: `npm test -- src/app/admin/reviews/page.test.tsx`
Expected: PASS

**Step 5: Run smoke verification**

Run: `npx playwright test tests/smoke/admin-review.spec.ts`
Expected: PASS

**Step 6: Commit**

```bash
git add src/app/admin/reviews/page.tsx src/components/admin/review-action-bar.tsx src/components/admin/review-task-detail.tsx src/app/admin/reviews/page.test.tsx tests/smoke/admin-review.spec.ts
git commit -m "feat: improve admin review workflow usability"
```

### Task 5: Make review workflow data more realistic

**Files:**
- Modify: `src/lib/review/*.ts`
- Modify: `src/lib/queries/admin.ts`
- Test: `src/lib/review/*.test.ts`
- Test: `src/lib/queries/admin*.test.ts`

**Step 1: Write one failing test for the next missing workflow edge**

Example:

```ts
test('requestRecrawl creates a queued crawl job and logs action', async () => {
  const result = await requestRecrawl('review-task-id', 'Need fresh crawl');
  expect(result.createdJob).toBe(true);
});
```

**Step 2: Run tests to verify the targeted gap fails**

Run: `npm test -- src/lib/review/*.test.ts src/lib/queries/admin*.test.ts`
Expected: FAIL for the newly added edge if behavior is missing

**Step 3: Write minimal implementation**

Focus only on making change logs, source records, review actions, and snapshots more internally consistent.

**Step 4: Run tests to verify they pass**

Run: `npm test -- src/lib/review/*.test.ts src/lib/queries/admin*.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/review src/lib/queries/admin.ts
git commit -m "feat: tighten review workflow data consistency"
```

### Task 6: Prepare and document PostgreSQL migration path

**Files:**
- Create: `.env.postgres.example`
- Create: `docker-compose.postgres.yml`
- Create: `docs/setup/postgresql-migration-prep.md`
- Modify: `README.md`
- Modify: `docs/setup/local-development.md`

**Step 1: Write docs-first prep changes**

Document:
- current SQLite local setup
- future PostgreSQL target
- exact files to use when PostgreSQL becomes available

**Step 2: Verify docs and prep files are present**

Run: `git diff --stat`
Expected: new prep files and updated docs only

**Step 3: Commit**

```bash
git add .env.postgres.example docker-compose.postgres.yml docs/setup/postgresql-migration-prep.md README.md docs/setup/local-development.md
git commit -m "docs: prepare postgresql migration path"
```

### Task 7: Final phase verification

**Files:**
- Modify: `README.md` if verification notes need updating

**Step 1: Run the full verification suite**

Run: `npm test && npx playwright test && npm run build`
Expected: PASS

**Step 2: Review git status**

Run: `git status`
Expected: clean working tree

**Step 3: Commit doc cleanup if needed**

```bash
git add README.md
git commit -m "docs: update phase 2 verification notes"
```
