import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Matthew Carmichael heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Matthew Carmichael/i);
  expect(linkElement).toBeInTheDocument();
});
