import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import DisclaimerPage from './page';

test('renders disclaimer heading', () => {
  render(<DisclaimerPage />);
  expect(screen.getByText('免责声明')).toBeInTheDocument();
});
