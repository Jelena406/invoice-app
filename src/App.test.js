import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './setupTests';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByTestId('logo');
  expect(linkElement).toBeInTheDocument();
});
