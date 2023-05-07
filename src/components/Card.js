import React, { useState } from 'react';
import Modal from './Modal';

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <div className='cards-row-item' onClick={handleClick}>
        <div className="card-image">
          <img src={props.imageURL} alt={props.imageAlt} />
        </div>
      </div>
      {showModal && (
        <Modal imageURL={props.imageURL} imageAlt={props.imageAlt} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Card;
