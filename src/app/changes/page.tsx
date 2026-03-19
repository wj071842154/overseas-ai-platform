import React from 'react';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { listLatestChanges } from '@/lib/queries/changes';

export default async function ChangesPage() {
  const changes = await listLatestChanges();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold">最新变更</h1>
        <p className="mt-3 text-base text-slate-600">最近更新的服务、规则和审核变化会在这里汇总展示。</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">最近更新的服务</h2>
          {changes.length === 0 ? (
            <p className="text-sm text-slate-600">当前暂无最新变更记录。</p>
          ) : (
            changes.map((change) => (
              <article key={change.id} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="font-semibold text-slate-900">{change.service.name}</div>
                <div className="mt-1 text-sm text-slate-600">字段组：{change.fieldGroup}</div>
                <div className="mt-1 text-sm text-slate-600">状态：{change.status}</div>
                <div className="mt-2 text-sm">
                  <Link href={`/${change.service.serviceTypeId ? 'ai' : 'accounts'}/${change.service.slug}`} className="text-sky-700">
                    查看服务详情
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
