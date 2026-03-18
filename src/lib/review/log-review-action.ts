import { prisma } from '@/lib/db';
import type { ReviewDecisionType } from '@prisma/client';

type LogReviewActionInput = {
  reviewTaskId: string;
  actionType: ReviewDecisionType;
  notes?: string;
  operator?: string;
  seed?: {
    serviceTypeId: string;
    serviceId: string;
    taskId: string;
  };
};

export async function logReviewAction(input: LogReviewActionInput) {
  if (input.seed) {
    const existingType = await prisma.serviceType.findUnique({
      where: { code: 'ai_official' }
    });

    const serviceType =
      existingType ??
      (await prisma.serviceType.create({
        data: { id: input.seed.serviceTypeId, code: 'ai_official', name: 'AI 官方服务' }
      }));

    await prisma.service.upsert({
      where: { id: input.seed.serviceId },
      update: {
        name: 'Seed Service',
        slug: `seed-${input.seed.serviceId}`,
        serviceTypeId: serviceType.id
      },
      create: {
        id: input.seed.serviceId,
        name: 'Seed Service',
        slug: `seed-${input.seed.serviceId}`,
        serviceTypeId: serviceType.id
      }
    });

    await prisma.reviewTask.upsert({
      where: { id: input.seed.taskId },
      update: {
        serviceId: input.seed.serviceId,
        taskType: 'content_update'
      },
      create: {
        id: input.seed.taskId,
        serviceId: input.seed.serviceId,
        taskType: 'content_update'
      }
    });
  }

  return prisma.reviewActionLog.create({
    data: {
      reviewTaskId: input.reviewTaskId,
      actionType: input.actionType,
      notes: input.notes,
      operator: input.operator
    }
  });
}
