import React from 'react';
import HeroContent from './HeroContent';
import HeroSlider from './Slider';

function Hero() {
  return (
    <section className='hero'>
      <div className='container flex-space-between'>
        <HeroContent />
        <HeroSlider />
      </div>
    </section>
  );
}

export default Hero;
