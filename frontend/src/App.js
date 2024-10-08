import './App.css';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import AnimeHome from './components/anime_miru/anime-home';

function App() {
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
