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
    <Slider {...settings} className='hero__slider slider'>
      <div className='slider__item'>
        <img src={sliderIMG} alt='a' />
      </div>
      <div className='slider__item'>
        <img src={sliderIMG} alt='s' />
        <span>s</span>
      </div>
      <div className='slider__item'>
        <img src={sliderIMG} alt='s' />
      </div>
    </Slider>
  );
}

export default HeroSlider;
