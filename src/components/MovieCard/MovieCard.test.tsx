import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard/MovieCard';

describe('MovieCard', () => {
  const mockMovie = {
    id: 1,
    title: 'Inception',
    releaseYear: 2010,
    imageUrl: 'https://example.com/inception.jpg',
  };

  it('renders the movie card with the correct information', () => {
    render(<MovieCard movie={mockMovie} />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();

    expect(
      screen.getByText(mockMovie.releaseYear.toString())
    ).toBeInTheDocument();

    const image = screen.getByAltText(mockMovie.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(mockMovie.imageUrl);
  });

  it('should display the correct alt text for the image', () => {
    render(<MovieCard movie={mockMovie} />);

    const image = screen.getByAltText(mockMovie.title) as HTMLImageElement;
    expect(image).toHaveAttribute('alt', mockMovie.title);
  });
});
