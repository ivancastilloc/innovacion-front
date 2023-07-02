import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './views/Index';

import Videojuegos from './views/Videojuegos';
import SteamGames from './views/SteamGames';
import PlayStationGames from './views/PlayStationGames';
import XboxGames from './views/XboxGames';

import Peliculas from './views/Peliculas';
import YoutubeVideos from './views/YoutubeVideos';

import Musica from './views/Musica';
import SpotifyMusic from './views/SpotifyMusic';
import YoutubeMusic from './views/YoutubeMusic';
import AppleMusic from './views/AppleMusic';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Index />} />

          <Route exact path="/videojuegos" element={<Videojuegos />} />
          <Route exact path="/videojuegos/steam" element={<SteamGames />} />
          <Route exact path="/videojuegos/playstation" element={<PlayStationGames />} />
          <Route exact path="/videojuegos/xbox" element={<XboxGames />} />

          <Route exact path="/peliculas" element={<Peliculas />} />
          <Route exact path="/peliculas/youtube" element={<YoutubeVideos />} />

          <Route exact path="/musica" element={<Musica />} />
          <Route exact path="/musica/spotify" element={<SpotifyMusic />} />
          <Route exact path="/musica/youtube" element={<YoutubeMusic />} />
          <Route exact path="/musica/apple" element={<AppleMusic />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
