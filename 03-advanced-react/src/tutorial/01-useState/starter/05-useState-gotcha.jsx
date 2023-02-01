import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    /*
    in this example the "count" variable will be changed only once
    setTimeout(() => {
      console.log('clicked button');
      setCount(count + 1);
    }, 3000);
    */

    // in this example it will change as many times as we click
    setTimeout(() => {
      console.log('clicked button');
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h2>{count}</h2>
      <button onClick={increase}>click me</button>
    </div>
  );
};

export default UseStateGotcha;
