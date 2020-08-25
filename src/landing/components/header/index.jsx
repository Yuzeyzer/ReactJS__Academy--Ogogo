import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/jpg/logo.jpg';
import Nav from './nav';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <div className='header__logo logo'>
            <Link to='/' className='logo__link'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
