import { describe, expect, test } from 'vitest';
import { launchServices } from './services';

describe('launch services seed', () => {
  test('contains the 14 formal launch entries', () => {
    expect(launchServices).toHaveLength(14);
    expect(launchServices.map((item) => item.slug)).toContain('chatgpt');
    expect(launchServices.map((item) => item.slug)).toContain('google-account');
  });
});
