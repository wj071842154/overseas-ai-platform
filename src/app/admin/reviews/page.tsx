import React from 'react';

import {
  approveReviewTask,
  rejectAdminReviewTask,
  requestReviewEvidence,
  requestReviewRecrawl
} from '@/app/admin/actions';
import { AdminTable } from '@/components/admin/admin-table';
import { ReviewActionBar } from '@/components/admin/review-action-bar';
import { ReviewTaskDetail } from '@/components/admin/review-task-detail';
import { getReviewTaskDetail, listOpenReviewTasks } from '@/lib/queries/admin';

export default async function AdminReviewsPage() {
  const tasks = await listOpenReviewTasks();
  const primaryTask = tasks[0] ?? null;
  const detail = primaryTask ? await getReviewTaskDetail(primaryTask.id) : null;

  async function handleApprove(formData: FormData) {
    'use server';
    const reviewTaskId = String(formData.get('reviewTaskId') ?? '');
    if (reviewTaskId) {
      await approveReviewTask(reviewTaskId);
    }
  }

  async function handleReject(formData: FormData) {
    'use server';
    const reviewTaskId = String(formData.get('reviewTaskId') ?? '');
    const notes = String(formData.get('reviewNotes') ?? '');
    if (reviewTaskId) {
      await rejectAdminReviewTask(reviewTaskId, notes || 'Rejected from admin review form.');
    }
  }

  async function handleNeedEvidence(formData: FormData) {
    'use server';
    const reviewTaskId = String(formData.get('reviewTaskId') ?? '');
    const notes = String(formData.get('reviewNotes') ?? '');
    if (reviewTaskId) {
      await requestReviewEvidence(reviewTaskId, notes || 'Need additional evidence.');
    }
  }

  async function handleRecrawl(formData: FormData) {
    'use server';
    const reviewTaskId = String(formData.get('reviewTaskId') ?? '');
    const notes = String(formData.get('reviewNotes') ?? '');
    if (reviewTaskId) {
      await requestReviewRecrawl(reviewTaskId, notes || 'Please re-crawl this task.');
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">审核任务</h1>
        {primaryTask && detail ? (
          <>
            <ReviewTaskDetail
              title={detail.service?.name ?? '未命名服务'}
              status={detail.reviewTask?.status ?? 'pending'}
              priority={detail.reviewTask?.priority ?? 0}
              taskType={detail.reviewTask?.taskType ?? 'content_update'}
              sourceCount={detail.sourceRecords.length}
              changeCount={detail.changeLogs.length}
              actionCount={detail.actionLogs.length}
            />
            <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <label htmlFor="reviewNotes" className="mb-2 block text-sm font-medium text-slate-700">
                  审核备注
                </label>
                <textarea
                  id="reviewNotes"
                  name="reviewNotes"
                  rows={4}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-800"
                  placeholder="记录通过、驳回、补证据或重新抓取的原因。"
                  defaultValue={detail.reviewTask?.reviewNotes ?? ''}
                />
              </div>
              <ReviewActionBar
                reviewTaskId={primaryTask.id}
                onApprove={handleApprove}
                onReject={handleReject}
                onNeedEvidence={handleNeedEvidence}
                onRecrawl={handleRecrawl}
              />
            </form>
          </>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
            当前暂无可处理的审核任务。
          </div>
        )}
        <AdminTable
          columns={['服务', '任务类型', '优先级', '状态']}
          rows={tasks.map((task) => [task.service.name, task.taskType, String(task.priority), task.status])}
          emptyText="当前暂无待处理审核任务。"
        />
      </div>
    </main>
  );
}
