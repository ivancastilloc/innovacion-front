import React from 'react';

function Content(props) {
  return (
    <div className='content'>
      <div className='content-text-container'>
        <h1 className='content-title'>{props.title}</h1>
        <p>{props.description}</p>
        {props.buttonText ? (
          <button className='content-register-button'>{props.buttonText} &gt;</button>
        ) : null}      </div>
      <img className='header-img' src={props.imageURL} alt='bg' />
    </div>
  );
}

export default Content;