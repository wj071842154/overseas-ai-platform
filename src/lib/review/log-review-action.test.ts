import { describe, expect, test } from 'vitest';

import { logReviewAction } from './log-review-action';

describe('logReviewAction', () => {
  test('creates a review action log row', async () => {
    const serviceType = 'svc-type-1';
    const serviceId = 'svc-1';
    const taskId = 'task-1';

    const result = await logReviewAction({
      reviewTaskId: taskId,
      actionType: 'approve',
      notes: 'Approved in test',
      seed: {
        serviceTypeId: serviceType,
        serviceId,
        taskId
      }
    });

    expect(result.actionType).toBe('approve');
  });
});
