import React from 'react';

import { ServiceCard } from '@/components/service-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { launchServices } from '@/data/seed/services';

const aiServices = launchServices.filter((service) => service.typeCode === 'ai_official');
const lowRiskAiServices = aiServices.filter((service) => service.riskLevel === 'low');
const mediumRiskAiServices = aiServices.filter((service) => service.riskLevel === 'medium');

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
        <section className="mb-8 space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">按风险等级筛选</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#ai-all" className="text-sky-700">查看全部</a>
            <a href="#ai-low" className="text-sky-700">仅看低风险</a>
            <a href="#ai-medium" className="text-sky-700">仅看中风险</a>
          </div>
        </section>
        <section id="ai-all" className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">全部服务</h2>
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
        </section>
        <section id="ai-low" className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">低风险服务</h2>
          {lowRiskAiServices.length === 0 ? (
            <p className="text-sm text-slate-600">当前暂无低风险服务。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {lowRiskAiServices.map((service) => (
                <ServiceCard key={`low-${service.slug}`} href={`/ai/${service.slug}`} name={service.name} summary={service.summary} riskLevel={service.riskLevel} />
              ))}
            </div>
          )}
        </section>
        <section id="ai-medium" className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">中风险服务</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mediumRiskAiServices.map((service) => (
              <ServiceCard key={`medium-${service.slug}`} href={`/ai/${service.slug}`} name={service.name} summary={service.summary} riskLevel={service.riskLevel} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
