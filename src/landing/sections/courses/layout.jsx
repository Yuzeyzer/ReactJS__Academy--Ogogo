import React from 'react';
import Item from './components/item';
function Layout() {
  return (
    <section className='courses' id='onlineCourses'>
      <div className='container'>
        <div className='courses__header'>
          <h3 className='courses__title'>Наши онлайн курсы</h3>
          <p className='courses__description'>
            У нас так же имеются курсы для начинающих, доступ к ним вы получите после оплаты
            соотвествующего курса, после оплаты вы увидите его в своем личном кабинете после
            регистрации
          </p>
        </div>
        <div className='courses__row row'>
					<Item />
        </div>
      </div>
    </section>
  );
}

export default Layout;
