import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  
  const nextIndex = () => {
    if (people.length === index + 1)
      setIndex(0);
    else
      setIndex(index + 1);
  }

  const previousIndex = () => {
    if (index === 0)
      setIndex(people.length - 1);
    else
      setIndex(index - 1);
  }

  const randomIndex = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  }

  return <div className="review">
    <div className="img-container">
      <img className="person-img" src={people[index].image}/>
    </div>
    <h3 className="author">{people[index].name}</h3>
    <p className="job">{people[index].job}</p>
    <p className="info">{people[index].text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={previousIndex}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextIndex}>
        <FaChevronRight/>
      </button>
    </div>
    <button className="random-btn" onClick={randomIndex}>Suprise Me</button>
  </div>;
};

export default Review;
