import React from 'react';

import { AdminTable } from '@/components/admin/admin-table';
import { listSnapshots } from '@/lib/queries/admin';

export default async function AdminSnapshotsPage() {
  const snapshots = await listSnapshots();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">发布快照</h1>
        <AdminTable
          columns={['服务', '版本号', '发布时间']}
          rows={snapshots.map((snapshot) => [snapshot.service.name, String(snapshot.versionNo), snapshot.publishedAt.toISOString()])}
          emptyText="当前暂无发布快照。"
        />
      </div>
    </main>
  );
}
