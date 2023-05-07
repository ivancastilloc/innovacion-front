import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Modal(props) {
  return (
    <div onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <button className="modal-close" onClick={props.onClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <div className="modal-text">
            <h1> Titulo </h1>
            <hr></hr>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribu  </p>
            <div className='modal-platforms'>
              <h5> Plataformas </h5>
              <hr></hr>
              <div className='modal-platforms-icons'>
                <FontAwesomeIcon className='platform-icon spotify-icon' icon={faSpotify} />
                <FontAwesomeIcon className='platform-icon spotify-icon' icon={faSpotify} />
                <FontAwesomeIcon className='platform-icon youtube-icon' icon={faYoutube} />
              </div>
            </div>
          </div>
          <div className="modal-image-wrapper">
            <img className="modal-image" src={props.imageURL} alt={props.imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
