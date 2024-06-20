

import React from 'react';
import './Settings.css'; // Import your CSS file for styling

const Settings = ({ darkMode }) => {
  // Sample user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', active: true },
    { id: 3, name: 'James Brown', email: 'james.brown@example.com', active: true },
    { id: 4, name: 'Emily White', email: 'emily.white@example.com', active: false },
  ];

  const handleToggleActive = (userId) => {
    // Update user's active status in the list
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, active: !user.active } : user
    );
    // Replace users with updated list (or update in API/backend)
    // For demo purposes, just logging the updated users
    console.log(updatedUsers);
  };

  return (
    <div className={`settings ${darkMode ? 'dark' : 'light'}`}>
      <h2>User Settings</h2>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.active ? 'Active' : 'Disabled'}</td>
                <td>
                  <button onClick={() => handleToggleActive(user.id)}>
                    {user.active ? 'Disable' : 'Enable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Settings;
