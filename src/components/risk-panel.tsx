import React from 'react';

type RiskItem = {
  id: string;
  title: string;
  content: string;
  severity: string;
};

export function RiskPanel({ items }: { items: RiskItem[] }) {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">风险提示</h2>
      <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
        {items.length === 0 ? (
          <p>当前暂无额外风险记录，仍建议以最新官方规则和审核时间为准。</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white/70 p-4">
              <div className="mb-1 text-xs font-medium uppercase tracking-wide text-amber-700">
                {item.severity}
              </div>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2">{item.content}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
