import React from 'react';
import UserIcon from '../../assets/svg/user-icon.svg';

function AuthBtns() {
  return (
    <div className='header__auth-btns auth-btns'>
      <button className='btn auth-btns__log-in btn-light-blue'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16.476'
          height='14.416'
          viewBox='0 0 16.476 14.416'>
          <path
            id='Icon_open-account-login'
            dataName='Icon open-account-login'
            d='M6.178,0V2.059h8.238v10.3H6.178v2.059h10.3V0ZM8.238,4.119V6.178H0V8.238H8.238V10.3l4.119-3.089Z'
            fill='#fff'
          />
        </svg>
        <span>Войти</span>
      </button>
      <button className='btn auth-btns__sign-up btn-white btn-circle'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='23.217'
          height='18.574'
          viewBox='0 0 23.217 18.574'>
          <path
            id='Icon_awesome-user-plus'
            dataName='Icon awesome-user-plus'
            d='M22.637,7.546H20.315V5.224a.582.582,0,0,0-.58-.58H18.574a.582.582,0,0,0-.58.58V7.546H15.672a.582.582,0,0,0-.58.58V9.287a.582.582,0,0,0,.58.58h2.322v2.322a.582.582,0,0,0,.58.58h1.161a.582.582,0,0,0,.58-.58V9.867h2.322a.582.582,0,0,0,.58-.58V8.126A.582.582,0,0,0,22.637,7.546ZM8.126,9.287A4.643,4.643,0,1,0,3.483,4.643,4.643,4.643,0,0,0,8.126,9.287Zm3.25,1.161h-.606a6.315,6.315,0,0,1-5.289,0H4.876A4.877,4.877,0,0,0,0,15.323v1.509a1.742,1.742,0,0,0,1.741,1.741H14.511a1.742,1.742,0,0,0,1.741-1.741V15.323A4.877,4.877,0,0,0,11.376,10.448Z'
            fill='#000745'
          />
        </svg>
      </button>
    </div>
  );
}

export default AuthBtns;
