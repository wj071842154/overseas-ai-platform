import React from 'react';

type ReviewTaskDetailProps = {
  title: string;
  status: string;
  priority: number;
  taskType: string;
  sourceCount: number;
  changeCount: number;
  actionCount: number;
};

export function ReviewTaskDetail({
  title,
  status,
  priority,
  taskType,
  sourceCount,
  changeCount,
  actionCount
}: ReviewTaskDetailProps) {
  return (
    <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
      <div>
        <div className="text-sm text-slate-500">服务</div>
        <div className="mt-1 text-lg font-semibold text-slate-900">{title}</div>
        <div className="mt-2 text-sm text-slate-600">任务类型：{taskType}</div>
      </div>
      <div>
        <div className="text-sm text-slate-500">状态</div>
        <div className="mt-1 text-lg font-semibold text-slate-900">{status}</div>
        <div className="mt-2 text-sm text-slate-600">优先级：{priority}</div>
      </div>
      <div>
        <div className="text-sm text-slate-500">关联信息</div>
        <div className="mt-1 text-sm text-slate-600">来源：{sourceCount}</div>
        <div className="mt-1 text-sm text-slate-600">变更：{changeCount}</div>
        <div className="mt-1 text-sm text-slate-600">动作日志：{actionCount}</div>
      </div>
    </section>
  );
}
