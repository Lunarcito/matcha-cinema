import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './SignupPage';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('SignUp Component', () => {
  test('calls handleSignUp on button click', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const handleSignUp = jest.fn();
    screen.getByRole('button', { name: /Sign Up/i }).onclick = handleSignUp;

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(handleSignUp).toHaveBeenCalledTimes(1);
  });
});
