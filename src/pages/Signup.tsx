import { LockOutlined } from '@mui/icons-material';
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid2,
  Link,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {};

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xs"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            width: '100%',
            bgcolor: 'white',
            borderRadius: 2,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#A8C686' }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 500, color: '#556B2F' }}>
            Sign Up
          </Typography>
          <Box sx={{ mt: 2, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  '& fieldset': {
                    borderColor: '#A8C686',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#8A9A5B',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8A9A5B',
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  borderColor: '#A8C686',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  '& fieldset': {
                    borderColor: '#A8C686',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#8A9A5B',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8A9A5B',
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  borderColor: '#A8C686',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  '& fieldset': {
                    borderColor: '#A8C686',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#8A9A5B',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8A9A5B',
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  borderColor: '#A8C686',
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                borderRadius: 3,
                backgroundColor: '#A8C686',
                '&:hover': {
                  backgroundColor: '#8A9A5B',
                },
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Grid2 container justifyContent="flex-end">
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ color: '#8A9A5B' }}
              >
                Already have an account? Login
              </Link>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
