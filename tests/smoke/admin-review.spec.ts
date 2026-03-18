import { expect, test } from '@playwright/test';

test('admin review page shows notes and action buttons', async ({ page }) => {
  await page.goto('/admin/reviews');
  await expect(page.getByRole('heading', { name: '审核任务' })).toBeVisible();
  await expect(page.getByLabel('审核备注')).toBeVisible();
  await expect(page.getByRole('button', { name: '通过', exact: true })).toBeVisible();
});
