import React from 'react';

function Courses() {
  return (
    <section className='courses'>
      <div className='container'>
        <div className='courses__header'>
          <h3 className='courses__title'>Наши курсы</h3>
          <p className='courses__description'>
            У нас так же имеются курсы для начинающих, доступ к ним вы получите после оплаты
            соотвествующего курса, после оплаты вы увидите его в своем личном кабинете после
            регистрации
          </p>
        </div>
        <div className='courses__row row'>
          <div className='courses__column col-3'>
            <div className='courses__item'>
              <div className='courses__info'>
                <img src='' alt='' className='courses__logo' />
                <img src='' alt='' className='courses__img' />
                <p className='courses__biography'>
                  Front - End Разработка, это очень творческая но в то же время требуюящая логику
                  профессия
                </p>
                <span className='courses__update'>21.08.2020</span>
              </div>
              <h5 className='courses__author author'>
                <span className='author__name'>Курбанов Атабек (Frontend Mentor)</span>
              </h5>
              <span className='courses__price'>2590 сом</span>
              <button className='courses__buy'>Приобрести</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
