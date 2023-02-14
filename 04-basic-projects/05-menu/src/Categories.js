import React from 'react';

const Categories = ({ showList }) => {
  return <div>
    {showList.map(item => {
      return <div key={item.id}>{item.title}</div>
    })}
  </div>
};

export default Categories;
