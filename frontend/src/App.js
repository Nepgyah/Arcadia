import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/dashboard';
import AnimeHome from './components/anime_miru/anime-home';
import { useState, useEffect } from 'react';

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
    <div className="App">
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/anime' element={ <AnimeHome /> } />
      </Routes>
    </div>
  );
}

export default App;
