import React, { useEffect, useState, Fragment } from 'react';
import HeroContent from './HeroContent';
import Modal from '../../components/modal';
import './styles.scss';

const Hero = ({ Modal }) => {
  const [img, setImg] = useState([]);
  const [heroActiveModal, setHeroActiveModal] = useState(true);
  const btnRef = React.useRef();
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
  const booler = () => {
    setHeroActiveModal(heroActiveModal ? false : true);
  };
  useEffect(() => fetchImages(), []);

  return (
    <Fragment>
      <Modal
        bool={booler}
        btn={btnRef.current}
        heroModal={heroActiveModal}
        setHeroModal={setHeroActiveModal}
      />
      <section className='hero'>
        <div className='container flex-space-between'>
          <div className='hero__content'>
            <h1 className='hero__title'>
              <span className='gray'>IT - КУРСЫ </span>
              <br />
              ОТ <span className='light-blue'>OGOGO</span> ACADEMY
            </h1>
            <p className='hero__description'>
              Не откладывай на завтра то, что можно изучить сегодня Академия Ogogo запускает набор
              на утренние группы по JavaScript и Python
            </p>
            <div className='hero__btns flex'>
              <button className='btn btn-dark-blue'>Подробнее</button>
              <button onClick={(e) => booler()} className='btn btn-light-blue hero__btn'>
                Занять место
              </button>
            </div>
          </div>
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
    </Fragment>
  );
};

export default Hero;
