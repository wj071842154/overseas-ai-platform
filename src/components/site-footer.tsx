import React from 'react';
import Link from 'next/link';

const footerLinks = [
  { href: '/disclaimer', label: '免责声明页' },
  { href: '/privacy', label: '隐私政策' },
  { href: '/terms', label: '用户协议' },
  { href: '/disclosure', label: '利益披露页' },
  { href: '/feedback', label: '纠错反馈' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6 py-6 text-sm text-slate-600">
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
