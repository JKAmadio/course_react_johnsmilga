import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price }) => {
  const [showAll, setShowAll] = useState(false)

  return <article className="single-tour">
    <img src={image} alt=""/>
    <footer className="tour-info">
      <span className="tour-price">{price}</span>
      <h4>{name}</h4>
        {showAll ?
          <p>{info}
            <button onClick={() => setShowAll(false)}>Show less</button>
          </p> :
          <p>{info.slice(0, 170)}...
            <button onClick={() => setShowAll(true)}>Read more</button>
          </p>
        }
    </footer>
  </article>;
};

export default Tour;
