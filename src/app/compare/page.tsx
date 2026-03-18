import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coreComparisons } from '@/data/seed/comparisons';

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-4 text-4xl font-semibold">对比中心</h1>
        <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600">
          先看热门组合的价格、门槛和风险差异，帮助用户快速建立判断。
        </p>
        <div className="space-y-4">
          {coreComparisons.map((comparison) => (
            <article key={comparison.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{comparison.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{comparison.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
