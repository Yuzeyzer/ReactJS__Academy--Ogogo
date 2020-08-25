import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/jpg/logo.jpg';

function Logo() {
  return (
    <div className='header__logo logo'>
      <Link to='/' className='logo__link'>
        <img src={logo} alt='' />
      </Link>
    </div>
  );
}

export default Logo;
