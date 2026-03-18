import React from 'react';
import Link from 'next/link';

type ServiceCardProps = {
  href: string;
  name: string;
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
};

export function ServiceCard({ href, name, summary, riskLevel }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
          风险：{riskLevel}
        </span>
      </div>
      <p className="mb-4 text-sm leading-6 text-slate-600">{summary}</p>
      <Link href={href} className="text-sm font-medium text-sky-700">
        查看详情
      </Link>
    </article>
  );
}
