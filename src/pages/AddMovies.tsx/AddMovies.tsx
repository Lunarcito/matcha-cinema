import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const movieData = {
      title,
      description,
      genre,
      year,
    };

    console.log('Movie added:', movieData);

    navigate('/');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom color="primary" textAlign="center">
        Add a New Movie
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  color="primary"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Genre"
                  variant="outlined"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                  color="primary"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  multiline
                  rows={4}
                  color="primary"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Year"
                  variant="outlined"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  type="number"
                  color="primary"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Add Movie
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddMovie;
