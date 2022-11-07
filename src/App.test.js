import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact us to get the best offers!/i);
  expect(linkElement).toBeInTheDocument();
});
