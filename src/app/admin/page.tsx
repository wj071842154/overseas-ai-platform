import React from 'react';
import Link from 'next/link';

const cards = [
  { href: '/admin/services', label: '服务管理' },
  { href: '/admin/sources', label: '来源记录' },
  { href: '/admin/changes', label: '变更队列' },
  { href: '/admin/reviews', label: '审核任务' },
  { href: '/admin/snapshots', label: '发布快照' }
];

export default function AdminHomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold">后台管理</h1>
        <p className="mt-3 text-base text-slate-600">进入最小审核工作台，处理服务、来源、变更和发布快照。</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{card.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
