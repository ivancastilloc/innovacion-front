import React from 'react';
import NavbarOptions from './NavbarOptions'
import SearchBar from './SearchBar'
import UserInfo from './UserInfo';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">ActivityMate</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <NavbarOptions></NavbarOptions>
          <SearchBar></SearchBar>
          <UserInfo></UserInfo>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
