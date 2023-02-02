import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} />
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchData;
