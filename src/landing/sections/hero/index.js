import React, { useEffect, useState } from 'react';
import HeroContent from './HeroContent';
import './styles.scss';

const Hero = () => {
  const [img, setImg] = useState([]);
  const fetchImages = () => {
    let random = Math.random() * 100;
    const url = `https://placeimg.com/125/125/${random}?`;
    let fetchedImages = [];
    for (let i = 1; i <= 4; i++) {
      fetchedImages.push(
        <img className='interesting__images' src={url + i} key={url + i} alt='avatar' />,
      );
    }
    setImg(fetchedImages);
  };
  useEffect(() => fetchImages(), []);
  return (
    <section className='hero'>
      <div className='container flex-space-between'>
        <HeroContent />
        <div className='hero__interesting interesting'>
          <h5 className='interesting__title'>Это интересно</h5>
          <p className='interesting__description'>
            Попробуй обновить сайт и ты увидишь что при каждом обновлении страницы генерируются
            разные картинки. Это базовый пример работы с API с точки зрения фронтенда.
          </p>
          <p className='interesting__description'>
            А если тебе лень обновлять страницу, то можешь просто нажать на кнопочку которая
            перезапустит функцию. В программировании же это называется повторный вызов функции.
          </p>
          <button onClick={() => fetchImages()} className='btn btn-pink interesting__btn'>
            Вызов функции
          </button>
          <div className={`interesting__images-wrapper`}>{img.map((item) => item)}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
