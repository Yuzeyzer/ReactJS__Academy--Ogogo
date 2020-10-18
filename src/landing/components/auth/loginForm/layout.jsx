import React from 'react';
import background from '';

function Layout() {
  return (
    <section className='login'>
      <div className='login__row row'>
        <div className='login__column'>
          <form action=''>
            <label htmlFor=''>
              <input type='text' />
            </label>
            <label htmlFor=''>
              <input type='text' />
            </label>
          </form>
        </div>
        <div className='login__column'>
          <img src='' alt='' className='login__background' />
        </div>
      </div>
    </section>
  );
}

export default Layout;
