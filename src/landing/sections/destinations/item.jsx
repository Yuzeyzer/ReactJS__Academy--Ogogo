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
                <p className='destinations__item-text'>{item.format}</p>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Item;
