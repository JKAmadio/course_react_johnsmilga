import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeSinglePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>People</h2>
      <ul className="users">
        {people.map((person) => {
          return (
            <li className="user-container" key={person.id}>
              <div>{person.name}</div>
              <button
                className="btn"
                onClick={() => removeSinglePerson(person.id)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={removeAll}>
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
