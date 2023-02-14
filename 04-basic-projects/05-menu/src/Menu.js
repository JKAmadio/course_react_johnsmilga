import React from 'react';

const Menu = ({ items, chooseCategory }) => {
  return <div className="btn-container"> 
    {items.map((item, index) => {
      return <button className="filter-btn" key={index} onClick={() => chooseCategory(item)}>{item}</button>
    })}
  </div>;
};

export default Menu;
