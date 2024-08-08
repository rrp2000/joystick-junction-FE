import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import LoginPage from 'scenes/loginPage/LoginPage';
import HomePage from 'scenes/homePage/HomePage';
import ProfilePage from 'scenes/profilePage/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
