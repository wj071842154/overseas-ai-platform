import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import AiPage from './page';

test('renders AI service library heading', () => {
  render(<AiPage />);
  expect(screen.getByText('AI 服务库')).toBeInTheDocument();
  expect(screen.getByText('按风险等级筛选')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '仅看低风险' })).toBeInTheDocument();
});
