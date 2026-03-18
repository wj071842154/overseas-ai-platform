import React from 'react';

import { ServiceCard } from '@/components/service-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { launchServices } from '@/data/seed/services';

const aiServices = launchServices.filter((service) => service.typeCode === 'ai_official');

export default function AiPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 space-y-3">
          <h1 className="text-4xl font-semibold">AI 服务库</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            查看官方 AI 服务的价格、门槛、风险和适合场景，先从高认知、高需求的核心服务开始。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aiServices.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/ai/${service.slug}`}
              name={service.name}
              summary={service.summary}
              riskLevel={service.riskLevel}
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
