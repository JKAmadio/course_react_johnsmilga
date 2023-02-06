import { useState } from 'react';

const ToggleChallenge = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <div>{isOn ? 'true' : 'false'}</div>
      <button onClick={() => setIsOn(!isOn)}>click me</button>
    </div>
  );
};

export default ToggleChallenge;
