import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from './components/navigation/navigation';
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

import Dashboard from './components/dashboard';
import Profile from './components/main/profile';
import AnimeHome from './components/anime_miru/anime-home';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Call the Django backend to check if the user is authenticated using Axios
    const checkAuthStatus = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/account/check-auth/', {
                withCredentials: true,  // Ensures cookies like session cookies are sent with the request
            });
            setIsAuth(response.data.authenticated)
            if (response.data.authenticated === false) {
              // Return a loading state while the authentication status is being checked
              window.location.href = 'http://127.0.0.1:8000/account/login/';
            } else {
              console.log("Authenticated!")
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
            setIsAuth(false);  // Treat errors as unauthenticated
        }
    };

    checkAuthStatus();

  }, []);

  return (
    <RoutesWrapper />
  );
}

export default App;

function RoutesWrapper() {

  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
    
      <Navigation />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: '64px' }} // Space for AppBar and Drawer
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/anime" element={<AnimeHome />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes here */}
        </Routes>
      </Box>
    </Box>
  );
}
