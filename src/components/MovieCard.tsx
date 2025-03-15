import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    releaseYear: number;
    imageUrl: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card  sx={{ width: 250, height: 250}} >
      <CardMedia component="img" height="140" image={movie.imageUrl} alt={movie.title} />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.releaseYear}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
