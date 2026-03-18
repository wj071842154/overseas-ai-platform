import { expect, test } from '@playwright/test';

test('homepage shows core navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('海外 AI 与账号信息决策平台')).toBeVisible();
});
