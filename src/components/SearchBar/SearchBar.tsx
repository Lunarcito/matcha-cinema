import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [searchMovie, setSearchMovie] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchMovie);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '16px',
      }}
    >
      <TextField
        value={searchMovie}
        onChange={handleChange}
        variant="outlined"
        placeholder="Search a movie"
        size="small"
        sx={{
          borderRadius: '10px',
          backgroundColor: 'white',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            '& fieldset': {
              borderColor: '#A8C686',
            },
            '&:hover fieldset': {
              borderColor: '#8A9A5B',
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearch}
                sx={{
                  color: '#A8C686',
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
