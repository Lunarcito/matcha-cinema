import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);

  expect(screen.getByText(/Matcha Cinema/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
});

test('opens menu on account icon click', () => {
  render(<Navbar />);

  const accountIcon = screen.getByTestId('account-circle-icon');
  fireEvent.click(accountIcon);

  expect(screen.getByRole('menu')).toBeInTheDocument();
});

test('closes menu when menu item is clicked', () => {
  render(<Navbar />);

  const accountIcon = screen.getByTestId('account-circle-icon');
  fireEvent.click(accountIcon);

  const profileMenuItem = screen.getByText(/Profile/i);
  fireEvent.click(profileMenuItem);

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});
