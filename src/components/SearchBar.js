import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="d-flex bg-light" style={{borderRadius: '10px'}}>
      <input type="text" className="form-control border-0 search-input" placeholder=" Buscar " />
      <span className="p-2">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
}

export default SearchBar;