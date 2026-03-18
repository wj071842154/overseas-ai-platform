import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coreArticles } from '@/data/seed/articles';

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-4 text-4xl font-semibold">指南 / 知识库</h1>
        <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600">
          用专题文章解释结构化字段背后的背景、门槛、风险和选择逻辑。
        </p>
        <div className="space-y-4">
          {coreArticles.map((article) => (
            <article key={article.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{article.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{article.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
