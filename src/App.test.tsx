import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should show title in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Employee Manager/i);
  expect(linkElement).toBeInTheDocument();
});
