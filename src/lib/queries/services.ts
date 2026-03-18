import { prisma } from '@/lib/db';

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({
    where: { slug },
    include: {
      serviceType: true,
      sourceRecords: {
        orderBy: { capturedAt: 'desc' },
        take: 3
      },
      riskNotes: {
        where: { isVisible: true },
        orderBy: { updatedAt: 'desc' }
      },
      articleRelations: {
        include: {
          article: true
        }
      }
    }
  });
}

export async function listServicesByType(typeCode: 'ai_official' | 'overseas_account') {
  return prisma.service.findMany({
    where: {
      serviceType: {
        code: typeCode
      }
    },
    include: { serviceType: true },
    orderBy: { name: 'asc' }
  });
}
