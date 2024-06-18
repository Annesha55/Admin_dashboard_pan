import React from 'react';
import './Dashboard.css'; 

const Dashboard = ({ darkMode }) => {
  return (
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
      <div className="card">
        <h3>Data from Users</h3>
        <p>This card will display data collected from users.</p>
      </div>
      <div className="card">
        <h3>Data from Admin</h3>
        <p>This card will display data managed by admins.</p>
      </div>
    </div>
  );
}

export default Dashboard;
