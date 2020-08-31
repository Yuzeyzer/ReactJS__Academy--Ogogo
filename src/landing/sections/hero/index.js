import React from 'react';
import HeroContent from './HeroContent';
import rightBg from '../../assets/png/right-img.png';

function Hero() {
  return (
    <section className='hero'>
      <div className='container flex-space-between'>
        <HeroContent />
        <div className='hero__block-img'>
          <img className='hero__img' src={rightBg} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
