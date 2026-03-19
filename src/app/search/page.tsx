import React from 'react';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { searchContent } from '@/lib/queries/search';

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q ?? '';
  const result = await searchContent(query);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold">搜索结果</h1>
        <p className="mt-3 text-base text-slate-600">关键词：{query || '未提供'}</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">服务</h2>
          {result.services.length === 0 ? (
            <p className="text-sm text-slate-600">暂无匹配服务。</p>
          ) : (
            result.services.map((service) => (
              <Link key={service.id} href={`/${service.serviceTypeId ? 'ai' : 'accounts'}/${service.slug}`} className="block rounded-2xl bg-white p-4 shadow-sm">
                <div className="font-semibold">{service.name}</div>
                <div className="mt-1 text-sm text-slate-600">{service.summary}</div>
              </Link>
            ))
          )}
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">文章</h2>
          {result.articles.length === 0 ? (
            <p className="text-sm text-slate-600">暂无匹配文章。</p>
          ) : (
            result.articles.map((article) => (
              <Link key={article.id} href={`/guides/${article.slug}`} className="block rounded-2xl bg-white p-4 shadow-sm">
                <div className="font-semibold">{article.title}</div>
                <div className="mt-1 text-sm text-slate-600">{article.summary}</div>
              </Link>
            ))
          )}
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">对比</h2>
          {result.comparisons.length === 0 ? (
            <p className="text-sm text-slate-600">暂无匹配对比专题。</p>
          ) : (
            result.comparisons.map((item) => (
              <Link key={item.id} href={`/compare/${item.slug}`} className="block rounded-2xl bg-white p-4 shadow-sm">
                <div className="font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-slate-600">{item.summary}</div>
              </Link>
            ))
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
