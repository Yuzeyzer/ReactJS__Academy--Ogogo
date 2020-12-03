import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/jpg/logo.jpg';
function Modal({ heroModal, btn, bool }) {
  const [activeModal, setActiveModal] = useState(heroModal);
  const modalForm = React.useRef();
  const modalContainer = React.useRef();
  const handleOutSideClick = (e) => {
    // console.log(e.path[0]);
    if (e.path.includes(modalContainer.current) && !e.path.includes(modalForm.current)) {
      // console.log(e.path);
      setActiveModal(false);
    } else if (
      e.path[0].className == 'btn btn-light-blue hero__btn' ||
      e.path[0].className == 'btn btn-dark-blue'
    ) {
      setActiveModal(heroModal);
      // console.log(btn);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutSideClick);
  }, []);
  return activeModal ? (
    <div ref={modalContainer} className='modal modal__container'>
      <form className='modal__form' ref={modalForm}>
        <Link to='/' className='modal__logo-wrapper'>
          <img className='modal__logo' src={logo} alt='logo' />
          <span className='modal__name'>OGOGO Academy</span>
        </Link>
        <label className='modal__label' htmlFor=''>
          <input className='modal__name modal__input' type='text' placeholder='Ваше имя' />
        </label>
        <label className='modal__label' htmlFor=''>
          <input className='modal__surname modal__input' type='text' placeholder='Ваше фамилия' />
        </label>
        <label className='modal__label modal__select' htmlFor=''>
          <select className='modal__input' name='' id=''>
            <option value='Frontend'>Frontend</option>
            <option value='Backend'>Backend</option>
            <option value='UX/UI'>UX/UI</option>
          </select>
        </label>
        <button className='btn btn-light-blue'>Отправить</button>
      </form>
    </div>
  ) : null;
}

export default Modal;
