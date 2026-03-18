import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
      <section className="space-y-4">
        <h1>海外 AI 与账号信息决策平台</h1>
        <div className="flex gap-4">
          <Link href="/ai">查看 AI 服务</Link>
          <Link href="/accounts">查看海外账号</Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2>最新变化</h2>
        <p>优先关注价格、规则和注册条件变化，后续会在这里展示最新审核更新。</p>
        <Link href="/search?q=chatgpt">查看示例搜索</Link>
      </section>
    </main>
  );
}
