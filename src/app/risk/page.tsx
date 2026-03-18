import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-4 text-4xl font-semibold">风险与声明</h1>
        <div className="space-y-4 text-base leading-7 text-slate-600">
          <p>本站内容用于公开信息整理与风险提示，不构成成功承诺、服务保证或法律意见。</p>
          <p>所有价格、规则、门槛和可用性均应结合最近审核时间与来源说明查看。</p>
          <p>第三方平台与官方服务会明确分开展示，高风险对象不会因合作关系获得默认优先推荐。</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
