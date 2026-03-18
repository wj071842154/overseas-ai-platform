import { describe, expect, test } from 'vitest';

import { requestRecrawl } from './request-recrawl';

describe('requestRecrawl', () => {
  test('creates a crawl job and logs the action', async () => {
    const result = await requestRecrawl('review-task-id', 'Source was incomplete');
    expect(result.createdJob).toBe(true);
  });
});
