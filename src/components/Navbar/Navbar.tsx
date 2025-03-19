import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#A8C686',
            fontFamily: '"Roboto", sans-serif',
            fontSize: '1.2rem',
            letterSpacing: '1px',
          }}
        >
          Matcha Cinema
        </Typography>

        <Button
          color="inherit"
          sx={{
            marginRight: 2,
            backgroundColor: '#A8C686',
            borderRadius: 3,
            padding: '6x 12x',
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#8A9A5B',
            },
          }}
        >
          Home
        </Button>

        <Button
          color="inherit"
          sx={{
            marginRight: 2,
            backgroundColor: '#A8C686',
            borderRadius: 3,
            padding: '6px 12px',
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#8A9A5B',
            },
          }}
        >
          Add Movie
        </Button>

        <IconButton
          color="inherit"
          onClick={handleMenuClick}
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          data-testid="account-circle-icon"
        >
          <AccountCircleIcon
            sx={{
              color: '#A8C686',
              fontSize: '2.5rem',
              '&:hover': { color: '#8A9A5B' },
            }}
          />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
