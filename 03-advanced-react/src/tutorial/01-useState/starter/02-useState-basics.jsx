import { useState } from 'react';

const UseStateBasics = () => {
  const [counter, setCount] = useState(0);

  const handleClick = () => {
    setCount(counter + 1);
  };

  return (
    <div>
      <h2>you clicked {counter} times</h2>
      <button onClick={handleClick} className="btn">
        Click
      </button>
    </div>
  );
};

export default UseStateBasics;
