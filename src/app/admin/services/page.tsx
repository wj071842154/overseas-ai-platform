import React from 'react';

import { AdminTable } from '@/components/admin/admin-table';
import { listServicesForAdmin } from '@/lib/queries/admin';

export default async function AdminServicesPage() {
  const services = await listServicesForAdmin();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-4xl font-semibold">服务管理</h1>
        <AdminTable
          columns={['服务名', '类型', '状态', '风险等级']}
          rows={services.map((service) => [service.name, service.serviceType.name, service.status, service.riskLevel])}
          emptyText="当前暂无服务记录。"
        />
      </div>
    </main>
  );
}
