import React from 'react';

function HeroContent() {
  return (
    <div className='hero__content'>
      <h1 className='hero__title'>
        <span className='gray'>ОНЛАЙН IT - КУРСЫ </span>
        <br />
        ОТ <span className='light-blue'>OGOGO</span> ACADEMY
      </h1>
      <h5 className='hero__subtitle'>Мы поможем тебе построить успешую IT - карьеру</h5>
      <p className='hero__description'>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout
      </p>
      <div className='hero__btns flex'>
        <button className='btn btn-dark-blue'>Подробнее</button>
        <button className='btn btn-light-blue hero__btn'>Занять место</button>
      </div>
    </div>
  );
}

export default HeroContent;
