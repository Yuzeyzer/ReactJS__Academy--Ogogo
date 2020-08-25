import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [activeLink, setActiveLink] = React.useState(0);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };
  const navLinks = [
    { name: 'Главная', link: '/' },
    { name: 'О нас', link: 'about' },
    { name: 'Курсы', link: 'courses' },
    { name: 'Контакты', link: 'contacts' },
  ];
  return (
    <React.Fragment>
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
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
