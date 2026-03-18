import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold">免责声明</h1>
        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
          <p>本站内容仅用于公开信息整理、风险提示和决策参考，不构成服务保证、成功承诺或法律意见。</p>
          <p>所有价格、规则、门槛与可用性均可能变化，请结合更新时间和公开来源说明判断。</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
