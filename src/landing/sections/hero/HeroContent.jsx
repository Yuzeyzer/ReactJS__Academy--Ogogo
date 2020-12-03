import React from 'react';

function HeroContent({ activeClick }) {

  return (
    <div className='hero__content'>
      <h1 className='hero__title'>
        <span className='gray'>IT - КУРСЫ </span>
        <br />
        ОТ <span className='light-blue'>OGOGO</span> ACADEMY
      </h1>
      <p className='hero__description'>
        Не откладывай на завтра то, что можно изучить сегодня Академия Ogogo запускает набор на
        утренние группы по JavaScript и Python
      </p>
      <div className='hero__btns flex'>
        <button className='btn btn-dark-blue'>Подробнее</button>
        <button onClick={activeClick} className='btn btn-light-blue hero__btn'>
          Занять место
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
