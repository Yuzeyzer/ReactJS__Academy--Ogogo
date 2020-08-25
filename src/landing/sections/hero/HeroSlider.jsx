import React from 'react';
import Slider from 'react-slick';

import sliderIMG from '../../assets/png/img-1.png';

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
        <img src={sliderIMG} alt='' />
      </div>
      <div className='slider__item'>dasdas</div>
      <div className='slider__item'>
        <img src={sliderIMG} alt='' />
      </div>
    </Slider>
  );
}

export default HeroSlider;
