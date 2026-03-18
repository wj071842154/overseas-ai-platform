import { expect, test } from '@playwright/test';

test('public routes are reachable', async ({ page }) => {
  await page.goto('/ai');
  await expect(page.getByText('AI 服务库')).toBeVisible();
});
