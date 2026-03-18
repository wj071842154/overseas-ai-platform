import React from 'react';

import { AdminTable } from '@/components/admin/admin-table';
import { listSourceRecords } from '@/lib/queries/admin';

export default async function AdminSourcesPage() {
  const sources = await listSourceRecords();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">来源记录</h1>
        <AdminTable
          columns={['服务', '来源类型', '来源地址']}
          rows={sources.map((source) => [source.service.name, source.sourceType, source.sourceUrl])}
          emptyText="当前暂无来源记录。"
        />
      </div>
    </main>
  );
}
