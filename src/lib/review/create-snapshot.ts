import { prisma } from '@/lib/db';

export async function createSnapshot(serviceId: string) {
  const [service, latestSnapshot] = await Promise.all([
    prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        serviceType: true,
        riskNotes: true,
        sourceRecords: true,
        articleRelations: {
          include: {
            article: true
          }
        }
      }
    }),
    prisma.serviceSnapshot.findFirst({
      where: { serviceId },
      orderBy: { versionNo: 'desc' }
    })
  ]);

  if (!service) {
    throw new Error(`Service not found for snapshot: ${serviceId}`);
  }

  const nextVersion = (latestSnapshot?.versionNo ?? 0) + 1;

  return prisma.serviceSnapshot.create({
    data: {
      serviceId,
      versionNo: nextVersion,
      snapshotData: service,
      publishedAt: new Date()
    }
  });
}
