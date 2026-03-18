import { expect, test } from '@playwright/test';

test('admin review route is reachable', async ({ page }) => {
  await page.goto('/admin/reviews');
  await expect(page.getByRole('heading', { name: '审核任务' })).toBeVisible();
});
