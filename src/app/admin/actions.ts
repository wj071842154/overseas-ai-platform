'use server';

import { publishServiceReview } from '@/lib/review/publish-service';
import { rejectReviewTask } from '@/lib/review/reject-review';

export async function approveReviewTask(reviewTaskId: string) {
  return publishServiceReview(reviewTaskId);
}

export async function rejectAdminReviewTask(reviewTaskId: string, notes: string) {
  return rejectReviewTask(reviewTaskId, notes);
}
