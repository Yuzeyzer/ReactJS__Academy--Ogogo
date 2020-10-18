import React from 'react';
import Item from './item';
import './styles.scss';

const Destinations = () => {
  return (
    <section className='destinations'>
      <div className='container'>
        <div className='destinations__top'>
          <h3 className='destinations__title'>Наши курсы</h3>
          <p className='destinations__description'>
            Интересные направления которые вы можете захотеть изучить
          </p>
        </div>
        <div className='destinations__row row'>
          <Item />
        </div>
      </div>
    </section>
  );
}

export default Destinations;
