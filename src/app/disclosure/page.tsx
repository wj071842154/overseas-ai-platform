import React from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold">利益披露</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">如未来存在合作推荐、联盟链接或商业展示，会在对应页面和本页进行清晰披露，不以合作关系替代编辑判断。</p>
      </main>
      <SiteFooter />
    </div>
  );
}
