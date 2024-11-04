import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a list item', () => {
  render(<App />);
  const linkElement = screen.getByText('Authorization required: 4000002500003155');
  expect(linkElement).toBeInTheDocument();
});
