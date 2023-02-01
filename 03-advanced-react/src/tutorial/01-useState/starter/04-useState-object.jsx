import { useState } from 'react';

const UseStateObject = () => {
  const [person, setperson] = useState({
    name: 'bob',
    age: 26,
    hobby: 'football',
  });

  const changePerson = () => {
    setperson({
      name: 'john',
      age: 29,
      hobby: 'rugby',
    });
  };

  return (
    <div>
      <h2>useState object example</h2>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.hobby}</div>
      <button onClick={changePerson}>Change person</button>
    </div>
  );
};

export default UseStateObject;
