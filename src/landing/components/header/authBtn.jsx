import React from 'react';
import UserIcon from '../../assets/svg/user-icon.svg';

function AuthBtns() {
  return (
    <div className='header__auth-btns auth-btns'>
      <button className='btn auth-btns__log-in btn-light-blue'>
        <img src={UserIcon} alt='' />
        Войти
      </button>
      <button className='btn auth-btns__sign-up btn-white'>
        <img src={UserIcon} alt='' />
        Регистрация
      </button>
    </div>
  );
}

export default AuthBtns;
