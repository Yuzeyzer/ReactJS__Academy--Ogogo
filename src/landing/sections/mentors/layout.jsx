import React from 'react';
import logoSmall from '../../assets/png/logo-small.png';
import cart from '../../assets/svg/cart.svg';

function Layout({ item }) {
  return (
    <section className='mentors'>
      <div className='container'>
        <div className='mentors__header'>
          <h3 className='mentors__title title'>Твои будущие менторы</h3>
          <p className='mentors__description'>
            У нас так же имеются курсы для начинающих, доступ к ним вы получите после оплаты
            соотвествующего курса, после оплаты вы увидите его в своем личном кабинете после
            регистрации
          </p>
        </div>
        <div className='mentors__row row'>
          {item.map((items) => {
            return (
              <div className='col-4 mentors__column'>
                <div className='mentors__item'>
                  <div className='row mentors__item-row'>
                    <div className='col-4 mentors__item-column'>
                      <img src={items.avatar} alt='avatar' className='mentors__avatar' />
                    </div>
                    <div className='col-8 mentors__item-column'>
                      <h5 className='mentors__name'>{items.name}</h5>
                      <p className='mentors__skills'>{items.skills}</p>
                    </div>
                  </div>
                  <p className='mentors__story'>{items.description}</p>
                 <div className="row">
                    <button className='btn-buy'>
                      <img className='btn-buy__logo' src={logoSmall} alt='small logo' />
                      <span className='btn-buy__text'>Познакомиться</span>
                      <div className='cart'>
                        <img src={cart} alt='cart' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Layout;
