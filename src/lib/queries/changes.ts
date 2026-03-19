import { prisma } from '@/lib/db';

export async function listLatestChanges() {
  return prisma.changeLog.findMany({
    include: {
      service: true,
      sourceRecord: true
    },
    orderBy: { detectedAt: 'desc' },
    take: 10
  });
}
