import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import ServiceDetailPage from './page';

test('renders service detail sections', async () => {
  const ui = await ServiceDetailPage({ params: Promise.resolve({ slug: 'chatgpt' }) });
  render(ui);
  expect(screen.getByText('先看结论')).toBeInTheDocument();
  expect(screen.getByText('风险提示')).toBeInTheDocument();
});
