import React from 'react';
import { Link } from 'react-router-dom';
import logIn from '../../assets/svg/login.svg';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <div className='header__logo logo'>
            <Link to='/' className='logo__link'>
              <span>OGOGO ACADEMY</span>
            </Link>
          </div>
          <nav className='header__nav nav'>
            <ul className='nav__menu flex'>
              <li className='nav__items'>
                <Link className='nav__links'>Главная</Link>
              </li>
              <li className='nav__items'>
                <Link className='nav__links'>О нас</Link>
              </li>
              <li className='nav__items'>
                <Link className='nav__links'>Курсы</Link>
              </li>
              <li className='nav__items'>
                <Link className='nav__links'>
                  <img src={logIn} alt='' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
