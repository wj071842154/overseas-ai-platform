import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>海外 AI 与账号信息决策平台</h1>
      <Link href="/ai">查看 AI 服务</Link>
      <Link href="/accounts">查看海外账号</Link>
    </main>
  );
}
