import { useState } from 'react';

function BadUserList() {
  const [users, setUsers] = useState([]);

  // ❌ WRONG: fetch is called on *every* render
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  return (
    <div>
      <h2>Bad User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BadUserList;
