import React from 'react';
import HeroContent from './HeroContent';
import Images from './images';
import './styles.scss';

function Hero() {
  return (
    <section className='hero'>

      <div className='container flex-space-between'>
        <HeroContent />
        <div className='hero__interesting interesting'>
          <h5 className='ineteresting__title'>Это интересно</h5>
          <p className='interesting__description'>
            Попробуй обновить сайт и ты увидишь что при каждом обновлении страницы генерируются
            разные картинки. Это базовый пример работы с API с точки зрения фронтенда.
          </p>
          <p className='interesting__description'>
            А если тебе лень обновлять страницу, то можешь просто нажать на кнопочку которая
            перезапустит функцию. В программировании же это называется повторный вызов функции.
          </p>
          <button className='btn btn-pink'>Вызов функции</button>
          <Images className={'interesting__images'}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
