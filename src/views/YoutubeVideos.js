import React from 'react';
import CardsRow from '../components/CardsRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function YoutubeVideos() {

  const cards = [
    { id: 1, imageURL: '/img/yt-logo.jpg' },
    { id: 2, imageURL: '/img/yt-logo.jpg' },
    { id: 3, imageURL: '/img/yt-logo.jpg' },
    { id: 4, imageURL: '/img/yt-logo.jpg' },
    { id: 5, imageURL: '/img/yt-logo.jpg' },
    { id: 6, imageURL: '/img/yt-logo.jpg' },
    { id: 7, imageURL: '/img/yt-logo.jpg' },
  ];

  return (
    <div className='pageContainer'>
      <div className='sideBar'>
        <Link to="/peliculas/youtube">
          <FontAwesomeIcon className='platform-icon sidebar-icon sidebar-icon-active' icon={faYoutube} />
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

export default YoutubeVideos;
