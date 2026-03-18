'use server';

import { publishServiceReview } from '@/lib/review/publish-service';
import { requestEvidence } from '@/lib/review/request-evidence';
import { requestRecrawl } from '@/lib/review/request-recrawl';
import { rejectReviewTask } from '@/lib/review/reject-review';

export async function approveReviewTask(reviewTaskId: string) {
  return publishServiceReview(reviewTaskId);
}

export async function rejectAdminReviewTask(reviewTaskId: string, notes: string) {
  return rejectReviewTask(reviewTaskId, notes);
}

export async function requestReviewEvidence(reviewTaskId: string, notes: string) {
  return requestEvidence(reviewTaskId, notes);
}

export async function requestReviewRecrawl(reviewTaskId: string, notes: string) {
  return requestRecrawl(reviewTaskId, notes);
}
