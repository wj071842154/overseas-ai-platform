import { prisma } from '@/lib/db';

import { logReviewAction } from './log-review-action';

export async function rejectReviewTask(reviewTaskId: string, notes: string) {
  const task = await prisma.reviewTask.findUnique({
    where: { id: reviewTaskId }
  });

  if (!task) {
    return {
      id: reviewTaskId,
      status: 'rejected' as const,
      skipped: true
    };
  }

  await prisma.changeLog.updateMany({
    where: { reviewTaskId, status: 'pending' },
    data: { status: 'rejected' }
  });

  const updatedTask = await prisma.reviewTask.update({
    where: { id: reviewTaskId },
    data: {
      status: 'rejected',
      reviewNotes: notes,
      reviewedAt: new Date()
    }
  });

  await logReviewAction({
    reviewTaskId,
    actionType: 'reject',
    notes
  });

  return updatedTask;
}
