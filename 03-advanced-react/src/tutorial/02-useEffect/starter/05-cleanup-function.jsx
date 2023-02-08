import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>{toggle && <SecondCOmponent />}</div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
    </div>
  );
};

const SecondCOmponent = () => {
  useEffect(() => {
    // will be launched everytime the toggle is On and the component is mounted
    console.log('second component');

    let num = 1;

    // will be launched everytime the toggle is On and the component is mounted
    // and will keep consoling forever, even when the toggle is off
    const intId = setInterval(() => {
      console.log('hello from interval');
      console.log((num += 1));
    }, 1000);

    return () => {
      // will desable the interval funcionality when the component is unmounted
      clearInterval(intId);
    };
  }, []);

  return <h2>ligado</h2>;
};

export default CleanupFunction;
