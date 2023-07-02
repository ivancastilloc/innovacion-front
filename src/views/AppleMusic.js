import React from 'react';
import CardsRow from '../components/CardsRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function AppleMusic() {

  const cards = [
    { id: 1, imageURL: '/img/apple-logo.png' },
    { id: 2, imageURL: '/img/apple-logo.png' },
    { id: 3, imageURL: '/img/apple-logo.png' },
    { id: 4, imageURL: '/img/apple-logo.png' },
    { id: 5, imageURL: '/img/apple-logo.png' },
    { id: 6, imageURL: '/img/apple-logo.png' },
    { id: 7, imageURL: '/img/apple-logo.png' },
  ];

  return (
    <div className='pageContainer'>
       <div className='sideBar'>
        <Link to="/musica/youtube">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faYoutube} />
        </Link>
        <Link to="/musica/spotify">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faSpotify} />
        </Link>
        <Link to="/musica/apple">
          <FontAwesomeIcon className='platform-icon sidebar-icon sidebar-icon-active' icon={faApple} />
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

export default AppleMusic;
