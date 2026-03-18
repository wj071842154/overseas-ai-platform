import React from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/ai', label: 'AI 服务' },
  { href: '/accounts', label: '海外账号' },
  { href: '/compare', label: '对比' },
  { href: '/guides', label: '指南' },
  { href: '/risk', label: '风险与声明' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          海外 AI 平台
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
