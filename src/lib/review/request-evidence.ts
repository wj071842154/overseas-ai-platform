import { prisma } from '@/lib/db';

import { logReviewAction } from './log-review-action';

export async function requestEvidence(reviewTaskId: string, notes: string) {
  const task = await prisma.reviewTask.findUnique({
    where: { id: reviewTaskId }
  });

  if (!task) {
    return {
      id: reviewTaskId,
      status: 'pending' as const,
      skipped: true
    };
  }

  const updatedTask = await prisma.reviewTask.update({
    where: { id: reviewTaskId },
    data: {
      status: 'pending',
      reviewNotes: notes
    }
  });

  await logReviewAction({
    reviewTaskId,
    actionType: 'needs_evidence',
    notes
  });

  return updatedTask;
}
