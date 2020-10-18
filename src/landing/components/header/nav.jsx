import React from 'react';
// import { Link } from 'react-router-dom';

function Nav() {
  const [activeLink, setActiveLink] = React.useState(0);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };
  const navLinks = [
    { name: 'Главная', link: '/' },
    { name: 'Оффлайн курсы', link: '#offlineCourses' },
    { name: 'Онлайн курсы', link: '#onlineCourses' },
    { name: 'Менторы', link: '#mentors' },
  ];
  return (
    <React.Fragment>
      <nav className='header__nav nav'>
        <ul className='nav__menu flex'>
          {navLinks &&
            navLinks.map((item, index) => {
              return (
                <li key={item.name} className='nav__items'>
                  <a
                    href={item.link}
                    onClick={() => handleActiveLink(index)}
                    className={activeLink === index ? 'nav__links active' : 'nav__links '}>
                    {item.name}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
