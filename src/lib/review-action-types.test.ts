import { describe, expect, test } from 'vitest';

import { reviewDecisionTypes } from './review-action-types';

describe('review decision types', () => {
  test('includes core review actions', () => {
    expect(reviewDecisionTypes).toContain('approve');
    expect(reviewDecisionTypes).toContain('reject');
    expect(reviewDecisionTypes).toContain('needs_evidence');
    expect(reviewDecisionTypes).toContain('re_crawl_required');
  });
});
