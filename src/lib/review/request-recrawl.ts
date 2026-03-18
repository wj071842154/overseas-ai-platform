import { prisma } from '@/lib/db';

import { logReviewAction } from './log-review-action';

export async function requestRecrawl(reviewTaskId: string, notes: string) {
  const task = await prisma.reviewTask.findUnique({
    where: { id: reviewTaskId }
  });

  if (!task) {
    return {
      createdJob: true,
      skipped: true
    };
  }

  await prisma.crawlJob.create({
    data: {
      serviceId: task.serviceId,
      jobType: 'manual',
      status: 'queued',
      errorMessage: notes
    }
  });

  await logReviewAction({
    reviewTaskId,
    actionType: 're_crawl_required',
    notes
  });

  return {
    createdJob: true,
    skipped: false
  };
}
