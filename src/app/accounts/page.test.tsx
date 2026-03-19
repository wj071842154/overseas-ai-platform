import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import AccountsPage from './page';

test('renders overseas account library heading', () => {
  render(<AccountsPage />);
  expect(screen.getByText('海外账号库')).toBeInTheDocument();
  expect(screen.getByText('按风险等级筛选')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '仅看高风险' })).toBeInTheDocument();
});
