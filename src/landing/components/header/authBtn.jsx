import React from 'react';
import UserIcon from '../../assets/svg/user-icon.svg';

function AuthBtns() {
  return (
    <div className='header__auth-btns auth-btns'>
      <button className='auth-btns__log-in'>
        <img src={UserIcon} alt='' />
        Войти
      </button>
      <button className='auth-btns__sign-up'>
        <img src={UserIcon} alt='' />
        Регистрация
      </button>
    </div>
  );
}

export default AuthBtns;
