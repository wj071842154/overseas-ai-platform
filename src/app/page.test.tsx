import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

test('renders homepage hero entry points', () => {
  render(<HomePage />);
  expect(screen.getByText('海外 AI 与账号信息决策平台')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '查看 AI 服务' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '查看海外账号' })).toBeInTheDocument();
});
