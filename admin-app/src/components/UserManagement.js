import React from 'react';
import './Dashboard'; // Import your CSS file for styling

const UserManagement = ({ darkMode }) => {
  // Sample data for Active and Disabled Users
  const activeUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Active' },
  ];

  const disabledUsers = [
    { id: 3, name: 'James Brown', email: 'james.brown@example.com', status: 'Disabled' },
    { id: 4, name: 'Emily White', email: 'emily.white@example.com', status: 'Disabled' },
  ];

  return (
    <div className={`user-management ${darkMode ? 'dark' : 'light'}`}>
      <h2>User Management</h2>
      <div className="user-table">
        <div className="user-section">
          <h3>Active Users</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="user-section">
          <h3>Disabled Users</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {disabledUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
