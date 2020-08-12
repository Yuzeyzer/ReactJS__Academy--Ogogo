import React from 'react';
import { Link } from 'react-router-dom';
import logIn from '../../assets/svg/login.svg';

function Header() {
  const [activeLink, setActiveLink] = React.useState(0);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };

  const navLinks = [
    { name: 'Главная', link: '/' },
    { name: 'О нас', link: 'about' },
    { name: 'Курсы', link: 'courses' },
  ];

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
              {navLinks &&
                navLinks.map((item, index) => {
                  return (
                    <li key={item.name} className='nav__items'>
                      <Link
                        to={item.link}
                        onClick={() => handleActiveLink(index)}
                        className={activeLink === index ? 'nav__links active' : 'nav__links '}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              <li className='nav__items'>
                <Link to='logIn' className='nav__links'>
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
