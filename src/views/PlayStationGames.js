import React from 'react';
import CardsRow from '../components/CardsRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function PlayStationGames() {

  const cards = [
    { id: 1, imageURL: '/img/ps-logo.jpg' },
    { id: 2, imageURL: '/img/ps-logo.jpg' },
    { id: 3, imageURL: '/img/ps-logo.jpg' },
    { id: 4, imageURL: '/img/ps-logo.jpg' },
    { id: 5, imageURL: '/img/ps-logo.jpg' },
    { id: 6, imageURL: '/img/ps-logo.jpg' },
    { id: 7, imageURL: '/img/ps-logo.jpg' },
  ];

  return (
    <div className='pageContainer'>
      <div className='sideBar'>
        <Link to="/videojuegos/steam">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faSteam} />
        </Link>
        <Link to="/videojuegos/playStation">
          <FontAwesomeIcon className='platform-icon sidebar-icon sidebar-icon-active' icon={faPlaystation} />
        </Link>
        <Link to="/videojuegos/xbox">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faXbox} />
        </Link>
      </div>
      <div className='pageHeader'>
        <CardsRow title='Últimos lanzamientos' cards={cards} />
        <CardsRow title='Videojuegos Recomendados' cards={cards} />
        <CardsRow title='Mejores ofertas' cards={cards} />
      </div>
    </div>
  );
}

export default PlayStationGames;
