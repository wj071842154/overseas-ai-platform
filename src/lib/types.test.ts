import { describe, expect, test } from 'vitest';
import { serviceStatusValues } from './types';

describe('schema constants', () => {
  test('exposes supported service statuses', () => {
    expect(serviceStatusValues).toContain('active');
    expect(serviceStatusValues).toContain('watchlist');
  });
});
