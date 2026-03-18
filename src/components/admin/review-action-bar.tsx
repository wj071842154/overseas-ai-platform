import React from 'react';

const actions = ['通过', '修改后通过', '驳回', '补充证据', '重新抓取'];

export function ReviewActionBar() {
  return (
    <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
