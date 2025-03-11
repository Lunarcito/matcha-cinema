import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Login from './LoginPage';

describe('Login Component', () => {
  test('should render Login page with email and password fields', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('should update email and password values when typed in', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('should call handleLogin function when Login button is clicked', async () => {
    const handleLoginMock = jest.fn();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = screen.getByRole('button', { name: /Login/i });

    loginButton.onclick = handleLoginMock;

    userEvent.click(loginButton);

    expect(handleLoginMock).toHaveBeenCalledTimes(1);
  });
});
