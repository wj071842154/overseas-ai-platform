import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import ChangesPage from './page';

test('renders latest changes page heading', async () => {
  const ui = await ChangesPage();
  render(ui);
  expect(screen.getByText('最新变更')).toBeInTheDocument();
  expect(screen.getByText('最近更新的服务')).toBeInTheDocument();
});
