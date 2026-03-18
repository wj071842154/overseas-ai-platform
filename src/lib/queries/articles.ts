import { prisma } from '@/lib/db';

export async function getArticleBySlug(slug: string) {
  return prisma.guideArticle.findUnique({
    where: { slug },
    include: {
      articleRelations: {
        include: {
          service: true
        }
      }
    }
  });
}
