import React from 'react';
import './Users.css';

const Users = ({ darkMode, users }) => {
  // Filter users into disabled and non-disabled arrays
  const disabledUsers = users.filter(user => user.disabled);
  const activeUsers = users.filter(user => !user.disabled);

  return (
    <div className={`users-container ${darkMode ? 'dark' : 'light'}`}>
      <h1>User List</h1>

      <div className="users-section">
        <h2>Disabled Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {disabledUsers.slice(0, 5).map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Disabled</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="users-section">
        <h2>Active Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.slice(0, 5).map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
