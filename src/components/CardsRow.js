import React from 'react';
import Card from './Card';

function CardsRow(props) {
  return (
    <div className='cards-row'>
      <h5 className='cards-row-title'>{props.title}</h5>
      <div className='cards-row-content'>
        {props.cards.map((card) => (
          <Card key={card.id} imageURL={card.imageURL} />
        ))}
      </div>
    </div>
  );
}

export default CardsRow;
