import React from 'react';
import iconUxUi from '../../assets/svg/ux-ui.svg';
import iconPython from '../../assets/svg/python.svg';
import icon3d from '../../assets/svg/3d.svg';
import iconFrontend from '../../assets/svg/frontend.svg';
import iconJava from '../../assets/svg/java.svg';

function Item() {
  const item = [
    {
      icon: `${iconUxUi}`,
      title: 'UX/UI',
      format: 'Длительность - 3 месяца Формат - 5 раз в неделю',
    },
    {
      icon: `${iconPython}`,
      title: 'Python',
      format: 'Длительность - 3 месяца Формат - 5 раз в неделю',
    },
    {
      icon: `${icon3d}`,
      title: '3D',
      format: 'Длительность - 3 месяца Формат - 5 раз в неделю',
    },
    {
      icon: `${iconFrontend}`,
      title: 'Front - End',
      format: 'Длительность - 3 месяца Формат - 5 раз в неделю',
    },
    {
      icon: `${iconJava}`,
      title: 'Java',
      format: 'Длительность - 3 месяца Формат - 5 раз в неделю',
		},
  ];
  return (
    <React.Fragment>
      {item &&
        item.map(item => {
          return (
            <div className='destinations__column' key={item.title}>
              <div className='destinations__item'>
                <img className='destinations__item-img' src={item.icon} alt={item.title} />
                <h5 className='destinations__item-title'>{item.title}</h5>
                <p className='destinations__item-text'>{item.format}</p>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Item;
