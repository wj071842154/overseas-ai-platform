'use server';

import { publishServiceReview } from '@/lib/review/publish-service';

export async function approveReviewTask(reviewTaskId: string) {
  return publishServiceReview(reviewTaskId);
}
