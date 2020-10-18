import React from 'react';
import { item } from './const';
function Item() {
  return (
    <React.Fragment>
      {item &&
        item.map((item) => {
          return (
            <div className='destinations__column' key={item.title}>
              <div className='destinations__item'>
                <img className='destinations__item-img' src={item.icon} alt={item.title} />
                <h5 className='destinations__item-title'>{item.title}</h5>
                <ul className='destinations__item-list'>
                  <li>Длительность - {item.duration}</li>
                  <li>Формат - {item.format}</li>
                  <li>Время - {item.time}</li>
                </ul>
                <button className="btn btn-dark-blue">Записаться</button>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Item;
