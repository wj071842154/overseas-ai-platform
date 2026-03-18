import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';

import DisclosurePage from './page';

test('renders disclosure heading', () => {
  render(<DisclosurePage />);
  expect(screen.getByText('利益披露')).toBeInTheDocument();
});
