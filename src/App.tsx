import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Homepage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignupPage/SignupPage';
import AddMovie from './pages/AddMovies.tsx/AddMovies';
import './App.css';

function App() {
  return (

      <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addMovies" element={<AddMovie />} />
      </Routes>
    </Router>
    
  );
}

export default App;
