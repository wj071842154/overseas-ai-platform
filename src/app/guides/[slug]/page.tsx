import React from 'react';
import { notFound } from 'next/navigation';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getArticleBySlug } from '@/lib/queries/articles';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold">{article.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{article.summary}</p>
          <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-slate-700">{article.content}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
