import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold">隐私政策</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">当前 MVP 仅说明基础访问与反馈数据的使用边界，后续接入账号系统后再扩展条款。</p>
      </main>
      <SiteFooter />
    </div>
  );
}
