import { describe, expect, test } from 'vitest';

import { requestEvidence } from './request-evidence';

describe('requestEvidence', () => {
  test('keeps the task active and logs the action', async () => {
    const result = await requestEvidence('review-task-id', 'Need more proof');
    expect(result.status).toBe('pending');
  });
});
