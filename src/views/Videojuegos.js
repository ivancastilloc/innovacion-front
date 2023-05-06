import React from 'react';
import Content from '../components/Content';

function Videojuegos() {
  return (
    <div>
      <Content 
        title="Las últimas tendencias en videojuegos según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/videogames.jpg'}
      />
    </div>
  );
}

export default Videojuegos;
