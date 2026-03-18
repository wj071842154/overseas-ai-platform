import { describe, expect, test } from 'vitest';

import { publishServiceReview } from './publish-service';

describe('publishServiceReview', () => {
  test('marks review approved and creates a snapshot', async () => {
    const result = await publishServiceReview('review-task-id');
    expect(result.snapshotCreated).toBe(true);
  });
});
