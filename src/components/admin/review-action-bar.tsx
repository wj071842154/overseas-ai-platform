import React from 'react';

type ReviewActionBarProps = {
  reviewTaskId: string;
  notesFieldName?: string;
  onApprove: (formData: FormData) => Promise<void>;
  onReject: (formData: FormData) => Promise<void>;
  onNeedEvidence: (formData: FormData) => Promise<void>;
  onRecrawl: (formData: FormData) => Promise<void>;
};

export function ReviewActionBar({
  reviewTaskId,
  notesFieldName = 'reviewNotes',
  onApprove,
  onReject,
  onNeedEvidence,
  onRecrawl
}: ReviewActionBarProps) {
  return (
    <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <input type="hidden" name="reviewTaskId" value={reviewTaskId} />
      <input type="hidden" name="notesFieldName" value={notesFieldName} />
      <button formAction={onApprove} className="rounded-full bg-sky-600 px-4 py-2 text-sm text-white">
        通过
      </button>
      <button type="button" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
        修改后通过
      </button>
      <button formAction={onReject} className="rounded-full border border-rose-300 px-4 py-2 text-sm text-rose-700">
        驳回
      </button>
      <button formAction={onNeedEvidence} className="rounded-full border border-amber-300 px-4 py-2 text-sm text-amber-700">
        补充证据
      </button>
      <button formAction={onRecrawl} className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
        重新抓取
      </button>
    </div>
  );
}
