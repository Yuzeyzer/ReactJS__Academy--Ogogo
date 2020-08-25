import React from 'react';

function Hero() {
  return (
    <section className='hero'>
      <div className='container flex'>
        <div className='hero__content'>
          <h1 className='hero__title'>
            <span className='gray'>ОНЛАЙН IT - КУРСЫ </span>
            <br />
            ОТ <span className='light-blue'>OGOGO</span> ACADEMY
          </h1>
          <h5 className='hero__subtitle'>Мы поможем тебе построить успешую IT - карьеру</h5>
          <p className='hero__description'>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its layout
          </p>
          <div className='hero__btns flex'>
            <button className='btn btn-dark-blue'>Подробнее</button>
            <button className='btn btn-light-blue hero__btn'>Занять место</button>
          </div>
        </div>
        <div className="hero__slider slider">
          <div className="slider__item">
            <img src="" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
