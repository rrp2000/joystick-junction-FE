import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from 'scenes/loginPage/LoginPage';
import HomePage from 'scenes/homePage/HomePage';
import ProfilePage from 'scenes/profilePage/ProfilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';
import { CssBaseline } from '@mui/material';

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
