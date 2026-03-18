import { describe, expect, test } from 'vitest';

import { getServiceBySlug } from './services';

describe('getServiceBySlug', () => {
  test('returns seeded launch service data', async () => {
    const service = await getServiceBySlug('chatgpt');
    expect(service?.slug).toBe('chatgpt');
  });
});
