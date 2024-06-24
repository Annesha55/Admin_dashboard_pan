

import React, { useState, useEffect } from 'react';

const Users = ({ darkMode }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => { 
      const data = await fetch('/api/users'); // Replace with actual API call
      const result = await data.json();
      setUsers(result);
    };
    fetchData();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`users-container ${darkMode ? 'dark' : 'light'}`}>
      <h2>Users Page</h2>
      <p>This page will display user data.</p>
      <ul>
        {users.filter(user => user.active).map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
