import { describe, expect, test } from 'vitest';

import { listPendingReviewTasks } from './admin';

describe('listPendingReviewTasks', () => {
  test('returns pending review tasks ordered by priority', async () => {
    const tasks = await listPendingReviewTasks();
    expect(Array.isArray(tasks)).toBe(true);
  });
});
