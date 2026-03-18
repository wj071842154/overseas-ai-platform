import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { RiskPanel } from '@/components/risk-panel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SourceSummary } from '@/components/source-summary';
import { getServiceBySlug } from '@/lib/queries/services';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-sky-700">{service.serviceType.name}</p>
              <h1 className="mt-2 text-4xl font-semibold">{service.name}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                {service.summary ?? '首批服务详情占位内容，后续将补充完整字段与编辑结论。'}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
              风险等级：{service.riskLevel}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/compare" className="rounded-full bg-sky-600 px-4 py-2 text-white">
              查看对比
            </Link>
            <Link href="/guides" className="rounded-full border border-slate-300 px-4 py-2 text-slate-700">
              查看相关文章
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">先看结论</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <div className="mb-1 font-semibold text-slate-900">适合谁</div>
              <p>适合希望先从主流高需求服务开始比较的用户。</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <div className="mb-1 font-semibold text-slate-900">主要门槛</div>
              <p>需要结合支付方式、地区条件和规则变化一起判断。</p>
            </div>
          </div>
        </section>

        <RiskPanel
          items={service.riskNotes.map((item) => ({
            id: item.id,
            title: item.title,
            content: item.content,
            severity: item.severity
          }))}
        />

        <SourceSummary
          items={service.sourceRecords.map((item) => ({
            id: item.id,
            sourceTitle: item.sourceTitle,
            sourceUrl: item.sourceUrl,
            capturedAt: item.capturedAt
          }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
