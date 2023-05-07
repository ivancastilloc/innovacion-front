import React from 'react';
import Content from '../components/Content';
import CardsRow from '../components/CardsRow';

function Index() {

  const cards = [
    { id: 1, imageURL: '/img/index-bg.jpg' },
    { id: 2, imageURL: '/img/movies.jpg' },
    { id: 3, imageURL: '/img/index-bg.jpg' },
    { id: 4, imageURL: '/img/videogames.jpg' },
    { id: 5, imageURL: '/img/index-bg.jpg' },
    { id: 6, imageURL: '/img/index-bg.jpg' },
    { id: 7, imageURL: '/img/index-bg.jpg' },
  ];

  return (
    <div>
      <Content 
        title="Encuentra tu siguiente juego, artista, pelicula o serie favorita"
        description="Las mejores recomendaciones en base a tus gustos"
        buttonText="Regístrate hoy"
        imageURL={process.env.PUBLIC_URL + '/img/index-bg.jpg'}
      />
      <CardsRow title='Tendencias' cards={cards} />
      <CardsRow title='Videojuegos Recomendados' cards={cards} />
      <CardsRow title='Bandas Recomendadas' cards={cards} />


    </div>
  );
}

export default Index;
