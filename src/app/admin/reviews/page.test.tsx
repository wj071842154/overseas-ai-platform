import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import AdminReviewsPage from './page';

test('renders review action form with notes field', async () => {
  const ui = await AdminReviewsPage();
  render(ui);
  expect(screen.getByLabelText('审核备注')).toBeInTheDocument();
});
