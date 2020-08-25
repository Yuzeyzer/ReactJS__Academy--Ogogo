import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/jpg/logo.jpg';
import UserIcon from '../../assets/svg/user-icon.svg';
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
          <div className='header__auth-btns auth-btns'>
            <button className='auth-btns__log-in'>
              <img src={UserIcon} alt='' />
              log in
            </button>
            <button className='auth-btns__sign-up'>
              <img src={UserIcon} alt='' />
              sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
