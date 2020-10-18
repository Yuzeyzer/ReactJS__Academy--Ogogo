import React from 'react';
import Nav from './nav';
import AuthBtns from './authBtn';
import Logo from './logo';
import BurgerMenu from './burgerMenu';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <Logo />
          <Nav />
          <AuthBtns /> 
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
