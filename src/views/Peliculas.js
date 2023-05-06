import React from 'react';
import Content from '../components/Content';

function Peliculas() {
  return (
    <div>
      <Content 
        title="Las últimas tendencias en series y peliculas según tus preferencias."
        description="Todas las plataformas en un solo lugar"
        imageURL={process.env.PUBLIC_URL + '/img/movies.jpg'}
      />
    </div>
  );
}

export default Peliculas;
