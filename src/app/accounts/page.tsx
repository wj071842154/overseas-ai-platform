import React from 'react';

import { ServiceCard } from '@/components/service-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { launchServices } from '@/data/seed/services';

const accountServices = launchServices.filter((service) => service.typeCode === 'overseas_account');

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
      </main>
      <SiteFooter />
    </div>
  );
}
