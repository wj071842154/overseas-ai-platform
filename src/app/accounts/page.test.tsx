import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import AccountsPage from './page';

test('renders overseas account library heading', () => {
  render(<AccountsPage />);
  expect(screen.getByText('海外账号库')).toBeInTheDocument();
});
