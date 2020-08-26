import React from 'react';
import Slider from 'react-slick';

import sliderIMG from '../../assets/jpg/bg1.jpg';

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='slider__container'>
      <Slider {...settings} className='hero__slider slider'>
        <div className='slider__item'>
          <img src={sliderIMG} alt='a' />
        </div>
        <div className='slider__item'>
          <img src={sliderIMG} alt='s' />
          <span className='hidden'>s</span>
        </div>
        <div className='slider__item'>
          <img src={sliderIMG} alt='s' />
        </div>
      </Slider>
      <ul className='slider__timeline'>
        <li className='slider__timeline-item'></li>
      </ul>
    </div>
  );
}

export default HeroSlider;
