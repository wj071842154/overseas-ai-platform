import React from 'react';

import { AdminTable } from '@/components/admin/admin-table';
import { ReviewActionBar } from '@/components/admin/review-action-bar';
import { listPendingReviewTasks } from '@/lib/queries/admin';

export default async function AdminReviewsPage() {
  const tasks = await listPendingReviewTasks();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">审核任务</h1>
        <ReviewActionBar />
        <AdminTable
          columns={['服务', '任务类型', '优先级', '状态']}
          rows={tasks.map((task) => [task.service.name, task.taskType, String(task.priority), task.status])}
          emptyText="当前暂无待处理审核任务。"
        />
      </div>
    </main>
  );
}
