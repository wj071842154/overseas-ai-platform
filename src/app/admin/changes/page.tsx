import React from 'react';

import { AdminTable } from '@/components/admin/admin-table';
import { listChangeLogs } from '@/lib/queries/admin';

export default async function AdminChangesPage() {
  const changeLogs = await listChangeLogs();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">变更队列</h1>
        <AdminTable
          columns={['服务', '字段组', '状态']}
          rows={changeLogs.map((changeLog) => [changeLog.service.name, changeLog.fieldGroup, changeLog.status])}
          emptyText="当前暂无变更记录。"
        />
      </div>
    </main>
  );
}
