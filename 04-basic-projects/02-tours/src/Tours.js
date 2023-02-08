import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (<div className="tours">
    {tours.map(tour => {
      return <Tour key={tour.id} {...tour} handleClick={(id) => removeTour(id)} />
    })}
  </div>);
};

export default Tours;
