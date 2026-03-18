import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import AiPage from './page';

test('renders AI service library heading', () => {
  render(<AiPage />);
  expect(screen.getByText('AI 服务库')).toBeInTheDocument();
});
