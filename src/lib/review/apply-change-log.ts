import { prisma } from '@/lib/db';

export async function applyApprovedChangeLogs(reviewTaskId: string) {
  const changeLogs = await prisma.changeLog.findMany({
    where: {
      reviewTaskId,
      status: 'pending'
    }
  });

  if (changeLogs.length === 0) {
    return [];
  }

  const updated = [];
  for (const changeLog of changeLogs) {
    const record = await prisma.changeLog.update({
      where: { id: changeLog.id },
      data: { status: 'approved' }
    });
    updated.push(record);
  }

  return updated;
}
