import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

jest.mock('../MovieCard/MovieCard', () => ({
  __esModule: true,
  default: ({ movie }: { movie: any }) => <div>{movie.title}</div>,
}));

describe('MovieList Component', () => {
  it('renders a CircularProgress while loading', async () => {
    render(<MovieList />);

    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
  });
});
