import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './views/Index';
import Videojuegos from './views/Videojuegos';
import Peliculas from './views/Peliculas';
import Musica from './views/Musica';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/videojuegos" element={<Videojuegos />} />
          <Route exact path="/peliculas" element={<Peliculas />} />
          <Route exact path="/musica" element={<Musica />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
