import React from 'react';
import background from '../../../assets/png/auth.png';
import { Link } from 'react-router-dom';
import logo from '../../../assets/jpg/logo.jpg';
import bubbles from '../../../assets/png/bubbles.png';
import './styles.scss';

function Layout() {
  return (
    <section className='login'>
      <div className='login__row row'>
        <div className='login__column col-5 login__form-wrapper'>
          <img src={bubbles} alt="" className="bubbles"/>
          <Link to='/' className='login__logo-wrapper'>
            <img className='login__logo' src={logo} alt='logo' />
            <span className='login__name'>OGOGO Academy</span>
          </Link>
          <form action='' className='login__form'>
            <h3 className='login__title'>Пожалуйста, войдите в свой аккаунт</h3>
            <label className='login__label' htmlFor=''>
              <span className='login__type'>Логин</span>
              <input className='login__input' type='text' placeholder='Введите ваш логин' />
            </label>
            <label className='login__label' htmlFor=''>
              <span className='login__type'>Пароль</span>
              <input className='login__input' type='password' placeholder='Введите ваш пароль' />
            </label>
            <button className='login__in'>Войти</button>
          </form>
          <div className='row'>
            <span className='login__no-accaunt'>Нет аккаунта?</span>
            <Link className='login__register' to='/register'>Создать</Link>
          </div>
        </div>
        <div className='login__column col-7'>
          <img src={background} alt='' className='login__background' />
        </div>
      </div>
    </section>
  );
}

export default Layout;
