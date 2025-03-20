import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Homepage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignupPage/SignupPage';
import AddMovie from './pages/AddMovies.tsx/AddMovies';
import './App.css';
import { createTheme,ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A8C686',
    },
    secondary: {
      main: '#8A9A5B',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addMovies" element={<AddMovie />} />
      </Routes>
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
