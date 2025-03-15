import React, { useState, useEffect } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import MovieCard from './MovieCard';
import mockMovies from '../assets/mockMovies.json';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>(mockMovies);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Typography textAlign="center" variant="h5" gutterBottom>
        Movie List
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id} sx={{ margin: 1 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
