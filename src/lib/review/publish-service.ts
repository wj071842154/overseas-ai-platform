import { prisma } from '@/lib/db';

import { applyApprovedChangeLogs } from './apply-change-log';
import { createSnapshot } from './create-snapshot';

export async function publishServiceReview(reviewTaskId: string) {
  const task = await prisma.reviewTask.findUnique({
    where: { id: reviewTaskId }
  });

  if (!task) {
    return { snapshotCreated: true, updatedChangeLogs: 0, skipped: true };
  }

  const updatedChangeLogs = await applyApprovedChangeLogs(reviewTaskId);

  await prisma.reviewTask.update({
    where: { id: reviewTaskId },
    data: {
      status: 'approved',
      reviewedAt: new Date(),
      reviewNotes: task.reviewNotes ?? 'Auto-approved by MVP publish workflow.'
    }
  });

  await prisma.service.update({
    where: { id: task.serviceId },
    data: {
      reviewStatus: 'published',
      lastReviewedAt: new Date(),
      lastPublishedAt: new Date()
    }
  });

  await createSnapshot(task.serviceId);

  return {
    snapshotCreated: true,
    updatedChangeLogs: updatedChangeLogs.length,
    skipped: false
  };
}
