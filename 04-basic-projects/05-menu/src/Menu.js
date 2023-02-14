import React from 'react';

const Menu = ({ items, chooseCategory }) => {
  return <div> 
    {items.map((item, index) => {
      return <button key={index} onClick={() => chooseCategory(item)}>{item}</button>
    })}
  </div>;
};

export default Menu;
