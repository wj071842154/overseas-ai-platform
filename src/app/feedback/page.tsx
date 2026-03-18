import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold">纠错反馈</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">如果你发现价格、门槛、风险或来源信息存在错误，请通过后续反馈入口提交，我们会进入审核流程处理。</p>
      </main>
      <SiteFooter />
    </div>
  );
}
