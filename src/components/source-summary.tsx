import React from 'react';

type SourceItem = {
  id: string;
  sourceTitle: string | null;
  sourceUrl: string;
  capturedAt: Date;
};

export function SourceSummary({ items }: { items: SourceItem[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-semibold text-slate-900">信息来源与声明</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        展示最近审核参考的公开来源，用于帮助用户判断信息时效性和可信度。
      </p>
      <div className="mt-4 space-y-3">
        {items.length === 0 ? (
          <p className="text-sm text-slate-600">当前暂无来源摘要，后续会补充。</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-medium text-slate-900">{item.sourceTitle ?? item.sourceUrl}</div>
              <div className="mt-1">{item.sourceUrl}</div>
              <div className="mt-1 text-slate-500">抓取时间：{item.capturedAt.toLocaleString('zh-CN')}</div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
