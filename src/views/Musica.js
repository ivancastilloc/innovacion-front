import React from 'react';
import Content from '../components/Content';

function Musica() {
  return (
    <div>
      <Content 
        title="Las últimas tendencias en artistas y bandas según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/music.jpg'}
      />
    </div>
  );
}

export default Musica;
