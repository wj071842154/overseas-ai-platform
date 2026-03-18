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
          {result.services.map((service) => (
            <Link key={service.id} href={`/${service.serviceTypeId ? 'ai' : 'accounts'}/${service.slug}`} className="block rounded-2xl bg-white p-4 shadow-sm">
              <div className="font-semibold">{service.name}</div>
              <div className="mt-1 text-sm text-slate-600">{service.summary}</div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
