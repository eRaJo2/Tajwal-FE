import { render, screen } from '@testing-library/react';
import SearchHotels from '../pages/SearchHotels';

test('renders search hotels button link', () => {
  render(<SearchHotels />);
  const linkElement = screen.getByText(/Search Hotels/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search hotels date pickers', () => {
  render(<SearchHotels />);
  const linkElement = screen.getByText(/From/i);
  expect(linkElement).toBeInTheDocument();
});

