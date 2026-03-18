import { describe, expect, test } from 'vitest';

import { rejectReviewTask } from './reject-review';

describe('rejectReviewTask', () => {
  test('marks task and change logs as rejected', async () => {
    const result = await rejectReviewTask('review-task-id', 'Rejected in test');
    expect(result.status).toBe('rejected');
  });
});
