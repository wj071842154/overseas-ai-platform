import { prisma } from '@/lib/db';

export async function searchContent(query: string) {
  if (!query.trim()) {
    return { services: [], articles: [], comparisons: [] };
  }

  const q = query.trim();

  const [services, articles] = await Promise.all([
    prisma.service.findMany({
      where: {
        OR: [{ name: { contains: q } }, { summary: { contains: q } }]
      },
      orderBy: { name: 'asc' },
      take: 10
    }),
    prisma.guideArticle.findMany({
      where: {
        OR: [{ title: { contains: q } }, { summary: { contains: q } }, { content: { contains: q } }]
      },
      orderBy: { publishedAt: 'desc' },
      take: 10
    })
  ]);

  return {
    services,
    articles: articles.filter((item) => item.category !== 'comparison'),
    comparisons: articles.filter((item) => item.category === 'comparison')
  };
}
