import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import MovieCard from '../MovieCard/MovieCard';
import mockMovies from '../../assets/mockMovies.json';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMovies(mockMovies);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
    >
      <Typography textAlign="center" variant="h5" gutterBottom>
        Movie List
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id} sx={{ margin: 1 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
