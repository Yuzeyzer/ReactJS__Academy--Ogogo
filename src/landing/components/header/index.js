import React from 'react';
import Nav from './nav';
import AuthBtns from './authBtn';
import Logo from './logo';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <Logo />
          <Nav />
          <AuthBtns /> 
        </div>
      </div>
    </header>
  );
}

export default Header;
