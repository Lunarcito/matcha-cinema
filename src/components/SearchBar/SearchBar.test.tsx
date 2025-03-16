import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

const mockLog = jest.spyOn(console, 'log').mockImplementation();

describe('SearchBar Component', () => {
  test('should render the search input field', () => {
    render(<SearchBar />);

    const inputField = screen.getByPlaceholderText(/search a movie/i);
    expect(inputField).toBeInTheDocument();
  });

  test('should update the search term when typing', () => {
    render(<SearchBar />);

    const inputField = screen.getByPlaceholderText(/search a movie/i);

    userEvent.type(inputField, 'Inception');

    expect(inputField).toHaveValue('Inception');
  });

  test('should call handleSearch when clicking the search icon', () => {
    render(<SearchBar />);

    const inputField = screen.getByPlaceholderText(/search a movie/i);
    const searchButton = screen.getByRole('button');

    userEvent.type(inputField, 'Inception');

    fireEvent.click(searchButton);

    expect(mockLog).toHaveBeenCalledWith('Searching for:', 'Inception');
  });
});
