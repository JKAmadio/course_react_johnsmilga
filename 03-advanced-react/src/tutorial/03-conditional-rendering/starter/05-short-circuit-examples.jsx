import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* if text does NOT exist -> display a default value */}
      <h4>
        {text || (
          <div>
            <div>whatever return</div>
            <div>{name}</div>
          </div>
        )}
      </h4>
      {/* if the user exist -> display SomeOtherComponent */}
      <h4>{user && <SomeOtherComponent name={user.name} />}</h4>
      <div>
        <h2>Ternary operator</h2>
        <button className="btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'finish editing' : 'start editing'}
        </button>
      </div>
    </div>
  );
};

const SomeOtherComponent = ({ name }) => {
  return (
    <div>
      <h2>returning from some other component</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
