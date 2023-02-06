import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'john' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h4>{user ? `hello there, ${user.name}` : 'please login'}</h4>
      <button onClick={user ? logout : login} className="btn">
        {user ? 'logout' : 'login'}
      </button>
    </div>
  );
};

export default UserChallenge;
