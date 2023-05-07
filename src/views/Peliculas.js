import React from 'react';
import Content from '../components/Content';
import CardsRow from '../components/CardsRow';

function Peliculas() {

  const cards = [
    { id: 1, imageURL: '/img/movies.jpg' },
    { id: 2, imageURL: '/img/movies.jpg' },
    { id: 3, imageURL: '/img/movies.jpg' },
    { id: 4, imageURL: '/img/videogames.jpg' },
    { id: 5, imageURL: '/img/movies.jpg' },
    { id: 6, imageURL: '/img/index-bg.jpg' },
    { id: 7, imageURL: '/img/index-bg.jpg' },
  ];

  return (
    <div>
      <Content 
        title="Las últimas tendencias en series y peliculas según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/movies.jpg'}
      />
      <CardsRow title='Tendencias' cards={cards} />
      <CardsRow title='Peliculas Recomendadas' cards={cards} />
      <CardsRow title='Series Recomendadas' cards={cards} />
    </div>
  );
}

export default Peliculas;
