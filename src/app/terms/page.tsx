import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold">用户协议</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">访问本站即表示你理解本站属于信息服务平台，不提供代办、交易闭环和高风险操作服务。</p>
      </main>
      <SiteFooter />
    </div>
  );
}
