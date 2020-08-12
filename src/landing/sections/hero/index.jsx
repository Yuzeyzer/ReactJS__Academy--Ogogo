import React from 'react';
import heroImage from '../../assets/png/crazyImage.png';
import symbol from '../../assets/svg/symbol.svg';
function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <h1 className='hero__title'>МЫ ПОМОЖЕМ <span className='red'>ТЕБЕ</span> ПОСТРОИТЬ КАРЬЕРУ В IT</h1>
          <div className='hero__row row'>
            <img src={symbol} alt='' />
            <blockquote className='hero__blockquote'>Успеха достигает только тот, кто прилагает больше всего усилий</blockquote>
          </div>
          <img className='hero__bgImage' src={heroImage} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
