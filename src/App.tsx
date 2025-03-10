import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignupPage/SignupPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
