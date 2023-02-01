import React from 'react';

const List = ({ birthdays }) => {
  return (
    <>
      <ul>
        {birthdays.map((person) => {
          const { id, name, age, image } = person;
          return (
            <li key={id} className="person">
              <img src={image} alt="la" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
