import React from 'react';

const Categories = ({ showList }) => {
  return <div className="section-center">
    {showList.map(item => {
      return <article className="menu-item" key={item.id}>
        <img className="photo" src={item.img}/>
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </header>
          <p>{item.desc}</p>
        </div>
      </article>
    })}
  </div>
};

export default Categories;
