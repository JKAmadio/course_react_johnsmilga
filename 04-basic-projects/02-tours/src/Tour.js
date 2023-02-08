import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price }) => {
  return <article className="single-tour">
    <img src={image} alt=""/>
    <footer className="tour-info">
      <span className="tour-price">{price}</span>
      <h4>{name}</h4>
      <p>{info}</p>
    </footer>
  </article>;
};

export default Tour;
