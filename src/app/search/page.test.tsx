import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import SearchPage from './page';

test('renders search results heading', async () => {
  const ui = await SearchPage({ searchParams: Promise.resolve({ q: 'chatgpt' }) });
  render(ui);
  expect(screen.getByText('搜索结果')).toBeInTheDocument();
  expect(screen.getByText('关键词：chatgpt')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '服务' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '文章' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '对比' })).toBeInTheDocument();
});
