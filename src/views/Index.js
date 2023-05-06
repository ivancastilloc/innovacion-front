import React from 'react';
import Content from '../components/Content';

function Index() {
  return (
    <div>
      <Content 
        title="Encuentra tu siguiente juego, artista, pelicula o serie favorita"
        description="Las mejores recomendaciones en base a tus gustos"
        buttonText="Regístrate hoy"
        imageURL={process.env.PUBLIC_URL + '/img/index-bg.jpg'}
      />
    </div>
  );
}

export default Index;
