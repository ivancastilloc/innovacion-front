import React from 'react';
import Content from '../components/Content';
import CardsRow from '../components/CardsRow';

function Videojuegos() {

  const cards = [
    { id: 1, imageURL: '/img/videogames.jpg' },
    { id: 2, imageURL: '/img/videogames.jpg' },
    { id: 3, imageURL: '/img/videogames.jpg' },
    { id: 4, imageURL: '/img/videogames.jpg' },
    { id: 5, imageURL: '/img/index-bg.jpg' },
    { id: 6, imageURL: '/img/index-bg.jpg' },
    { id: 7, imageURL: '/img/index-bg.jpg' },
  ];

  return (
    <div>
      <Content 
        title="Las últimas tendencias en videojuegos según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/videogames.jpg'}
      />
      <CardsRow title='Tendencias' cards={cards} />
      <CardsRow title='Videojuegos Recomendados' cards={cards} />
      <CardsRow title='Nuevos Lanzamiento' cards={cards} />
    </div>
  );
}

export default Videojuegos;
