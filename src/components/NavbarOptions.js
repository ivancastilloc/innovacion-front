import React from 'react';
import { Link } from 'react-router-dom';

function NavbarOptions() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/videojuegos">Videojuegos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/peliculas">Películas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/musica">Música</Link>
      </li>
    </ul>
  );
}

export default NavbarOptions;