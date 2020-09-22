import React from 'react';
import { coursesItem } from './const';
import logo from '../../../assets/jpg/logo.jpg';
import logoSmall from '../../../assets/png/logo-small.png';
import cart from '../../../assets/svg/cart.svg';
function Item() {
  return (
    <React.Fragment>
      {coursesItem &&
        coursesItem.map((item) => {
          return (
            <div className='courses__column col-3'>
              <div className='courses__item'>
                <div className='courses__info'>
                  <img src={logo} alt='' className='courses__logo' />
                  <img src={item.img} alt='' className='courses__img' />
                  <p className='courses__biography'>
                    <b>{item.subject}</b> - {item.biography}
                  </p>
                  <span className='courses__update'>{item.update}</span>
                </div>
                <div className='courses__author author'>
                  <span className='author__course'>Автор курса</span>
                  <h3 className='author__name'>{item.authorName}</h3>
                </div>
                <div className='flex-align-center'>
                  <span className='courses__price'>{item.price} сом</span>
                  <button className='courses__buy btn-buy'>
                    <img className='btn-buy__logo' src={logoSmall} alt='' />
                    <span className='btn-buy__text'>Приобрести</span>
                    <div className='cart'>
                      <img src={cart} alt='' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Item;
