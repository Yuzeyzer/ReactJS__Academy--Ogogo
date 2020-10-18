import React from 'react';
import background from '../../../assets/png/auth.png';
import { Link } from 'react-router-dom';
import logo from '../../../assets/jpg/logo.jpg';
import bubbles from '../../../assets/png/bubbles.png';
import './styles.scss';

function Layout() {
  return (
    <section className='register'>
      <div className='register__row row'>
        <div className='register__column col-5 register__form-wrapper'>
          <img src={bubbles} alt="" className="bubbles"/>
          <Link to='/' className='register__logo-wrapper'>
            <img className='register__logo' src={logo} alt='logo' />
            <span className='register__name'>OGOGO Academy</span>
          </Link>
          <form action='' className='register__form'>
            <h3 className='register__title'>Пожалуйста, укажите Ваши данные</h3>
            <label className='register__label' htmlFor=''>
              <span className='register__type'>Логин</span>
              <input className='register__input' type='text' placeholder='Введите ваш логин' />
            </label>
            <label className='register__label' htmlFor=''>
              <span className='register__type'>Пароль</span>
              <input className='register__input' type='password' placeholder='Введите ваш пароль' />
            </label>
            <button className='register__in'>РЕГИСТРАЦИЯ</button>
          </form>
          <div className='row'>
            <span className='register__no-accaunt'>Есть аккаунт?</span>
            <Link className='register__register' to='/login'>Войти</Link>
          </div>
        </div>
        <div className='register__column col-7'>
          <img src={background} alt='background' className='register__background' />
        </div>
      </div>
    </section>
  );
}

export default Layout;
