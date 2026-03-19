import React from 'react';

import { ServiceCard } from '@/components/service-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { launchServices } from '@/data/seed/services';

const accountServices = launchServices.filter((service) => service.typeCode === 'overseas_account');
const highRiskAccounts = accountServices.filter((service) => service.riskLevel === 'high');
const mediumRiskAccounts = accountServices.filter((service) => service.riskLevel === 'medium');

export default function AccountsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 space-y-3">
          <h1 className="text-4xl font-semibold">海外账号库</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            集中查看海外账号的注册门槛、使用限制和常见风险，帮助你先看规则再做决定。
          </p>
        </div>
        <section className="mb-8 space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">按风险等级筛选</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#account-all" className="text-sky-700">查看全部</a>
            <a href="#account-high" className="text-sky-700">仅看高风险</a>
            <a href="#account-medium" className="text-sky-700">仅看中风险</a>
          </div>
        </section>
        <section id="account-all" className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">全部账号</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {accountServices.map((service) => (
              <ServiceCard
                key={service.slug}
                href={`/accounts/${service.slug}`}
                name={service.name}
                summary={service.summary}
                riskLevel={service.riskLevel}
              />
            ))}
          </div>
        </section>
        <section id="account-high" className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">高风险账号</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highRiskAccounts.map((service) => (
              <ServiceCard key={`high-${service.slug}`} href={`/accounts/${service.slug}`} name={service.name} summary={service.summary} riskLevel={service.riskLevel} />
            ))}
          </div>
        </section>
        <section id="account-medium" className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">中风险账号</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mediumRiskAccounts.map((service) => (
              <ServiceCard key={`medium-${service.slug}`} href={`/accounts/${service.slug}`} name={service.name} summary={service.summary} riskLevel={service.riskLevel} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
