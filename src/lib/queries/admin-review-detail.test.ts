import { describe, expect, test } from 'vitest';

import { getReviewTaskDetail } from './admin';

describe('getReviewTaskDetail', () => {
  test('returns service, change logs, sources, and action logs', async () => {
    const detail = await getReviewTaskDetail('review-task-id');
    expect(detail).not.toBeNull();
  });
});
