import React from 'react';
import Link from 'next/link';

type ComparisonCardProps = {
  href: string;
  title: string;
  summary: string;
};

export function ComparisonCard({ href, title, summary }: ComparisonCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-medium text-sky-700">
        查看对比
      </Link>
    </article>
  );
}
