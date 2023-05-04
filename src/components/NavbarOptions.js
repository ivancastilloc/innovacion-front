import React from 'react';

function NavbarOptions() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/videojuegos">Videojuegos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/pelicula">Película</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/musica">Música</a>
      </li>
    </ul>
  );
}

export default NavbarOptions;