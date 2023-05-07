import React from 'react';
import Content from '../components/Content';
import CardsRow from '../components/CardsRow';

function Musica() {

  const cards = [
    { id: 1, imageURL: '/img/music.jpg' },
    { id: 2, imageURL: '/img/music.jpg' },
    { id: 3, imageURL: '/img/index-bg.jpg' },
    { id: 4, imageURL: '/img/music.jpg' },
    { id: 5, imageURL: '/img/music.jpg' },
    { id: 6, imageURL: '/img/index-bg.jpg' },
    { id: 7, imageURL: '/img/index-bg.jpg' },
  ];

  return (
    <div>
      <Content 
        title="Las últimas tendencias en artistas y bandas según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/music.jpg'}
      />

      <CardsRow title='Tendencias' cards={cards} />
      <CardsRow title='Bandas Recomendadas' cards={cards} />
      <CardsRow title='Lanzamientos Recomendados' cards={cards} />
    </div>
  );
}

export default Musica;
