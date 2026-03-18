import { prisma } from '@/lib/db';

export async function listPendingReviewTasks() {
  return prisma.reviewTask.findMany({
    where: { status: 'pending' },
    include: { service: true, changeLogs: true },
    orderBy: [{ priority: 'asc' }, { submittedAt: 'asc' }]
  });
}

export async function listOpenReviewTasks() {
  return prisma.reviewTask.findMany({
    where: { status: { in: ['pending', 'in_review'] } },
    include: { service: true, changeLogs: true, actionLogs: true },
    orderBy: [{ priority: 'asc' }, { submittedAt: 'asc' }]
  });
}

export async function getReviewTaskDetail(reviewTaskId: string) {
  const reviewTask = await prisma.reviewTask.findUnique({
    where: { id: reviewTaskId },
    include: {
      service: {
        include: {
          sourceRecords: {
            orderBy: { capturedAt: 'desc' }
          }
        }
      },
      changeLogs: {
        include: {
          sourceRecord: true
        },
        orderBy: { detectedAt: 'desc' }
      },
      actionLogs: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!reviewTask) {
    return {
      reviewTask: null,
      service: null,
      changeLogs: [],
      sourceRecords: [],
      actionLogs: []
    };
  }

  return {
    reviewTask,
    service: reviewTask.service,
    changeLogs: reviewTask.changeLogs,
    sourceRecords: reviewTask.service.sourceRecords,
    actionLogs: reviewTask.actionLogs
  };
}

export async function listServicesForAdmin() {
  return prisma.service.findMany({
    include: { serviceType: true },
    orderBy: { updatedAt: 'desc' }
  });
}

export async function listSourceRecords() {
  return prisma.sourceRecord.findMany({
    include: { service: true },
    orderBy: { capturedAt: 'desc' }
  });
}

export async function listChangeLogs() {
  return prisma.changeLog.findMany({
    include: { service: true, sourceRecord: true },
    orderBy: { detectedAt: 'desc' }
  });
}

export async function listSnapshots() {
  return prisma.serviceSnapshot.findMany({
    include: { service: true },
    orderBy: { publishedAt: 'desc' }
  });
}
