import { PrismaClient } from '@prisma/client';
import { coreArticles } from '../src/data/seed/articles';
import { coreComparisons } from '../src/data/seed/comparisons';
import { launchServices } from '../src/data/seed/services';

const prisma = new PrismaClient();

async function main() {
  const serviceTypes = {
    ai_official: await prisma.serviceType.upsert({
      where: { code: 'ai_official' },
      update: { name: 'AI 官方服务' },
      create: { code: 'ai_official', name: 'AI 官方服务' }
    }),
    overseas_account: await prisma.serviceType.upsert({
      where: { code: 'overseas_account' },
      update: { name: '海外账号' },
      create: { code: 'overseas_account', name: '海外账号' }
    }),
    ai_relay: await prisma.serviceType.upsert({
      where: { code: 'ai_relay' },
      update: { name: 'AI 中转服务' },
      create: { code: 'ai_relay', name: 'AI 中转服务' }
    })
  } as const;

  for (const service of launchServices) {
    const record = await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: service.name,
        summary: service.summary,
        riskLevel: service.riskLevel,
        serviceTypeId: serviceTypes[service.typeCode].id,
        reviewStatus: 'published'
      },
      create: {
        name: service.name,
        slug: service.slug,
        summary: service.summary,
        riskLevel: service.riskLevel,
        status: 'active',
        reviewStatus: 'published',
        serviceTypeId: serviceTypes[service.typeCode].id
      }
    });

    await prisma.plan.deleteMany({ where: { serviceId: record.id } });
    await prisma.registrationRequirement.deleteMany({ where: { serviceId: record.id } });
    await prisma.regionRequirement.deleteMany({ where: { serviceId: record.id } });
    await prisma.sourceRecord.deleteMany({ where: { serviceId: record.id } });

    for (const plan of service.plans) {
      await prisma.plan.create({
        data: {
          serviceId: record.id,
          name: plan.name,
          billingType: plan.billingType,
          currency: plan.currency,
          price: plan.price,
          priceUnit: plan.priceUnit,
          paymentMethodsText: plan.paymentMethodsText,
          isActive: true
        }
      });
    }

    await prisma.registrationRequirement.create({
      data: {
        serviceId: record.id,
        requiresEmail: service.registration.requiresEmail,
        requiresPhone: service.registration.requiresPhone,
        requiresPaymentMethod: service.registration.requiresPaymentMethod,
        requiresSpecificRegion: service.registration.requiresSpecificRegion,
        regionNotes: service.registration.regionNotes,
        deviceRequirements: service.registration.deviceRequirements,
        otherRequirements: `${service.registration.otherRequirements} 适合人群：${service.audience} 主要门槛：${service.keyRequirement}`
      }
    });

    for (const region of service.regions) {
      await prisma.regionRequirement.create({
        data: {
          serviceId: record.id,
          regionCode: region.regionCode,
          availabilityType: region.availabilityType,
          notes: region.notes
        }
      });
    }

    for (const sourceUrl of service.sourceUrls) {
      await prisma.sourceRecord.create({
        data: {
          serviceId: record.id,
          sourceType: 'editor_manual',
          sourceUrl,
          sourceTitle: `${service.name} 信息来源`,
          rawExcerpt: service.summary,
          capturedAt: new Date()
        }
      });
    }
  }

  for (const article of [...coreArticles, ...coreComparisons]) {
    const created = await prisma.guideArticle.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        category: article.category,
        summary: article.summary,
        content: article.content,
        status: 'published',
        publishedAt: new Date()
      },
      create: {
        title: article.title,
        slug: article.slug,
        category: article.category,
        summary: article.summary,
        content: article.content,
        status: 'published',
        publishedAt: new Date()
      }
    });

    for (const relatedSlug of article.relatedServiceSlugs) {
      const service = await prisma.service.findUnique({ where: { slug: relatedSlug } });
      if (!service) continue;
      await prisma.articleServiceRelation.upsert({
        where: {
          articleId_serviceId_relationType: {
            articleId: created.id,
            serviceId: service.id,
            relationType: article.category === 'comparison' ? 'compares' : 'mentions'
          }
        },
        update: {},
        create: {
          articleId: created.id,
          serviceId: service.id,
          relationType: article.category === 'comparison' ? 'compares' : 'mentions'
        }
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
