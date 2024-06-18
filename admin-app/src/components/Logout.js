

import React from 'react';
import './Logout.css';

const Logout = () => {

  const handleLogout = () => {
    console.log('Logged out'); 
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <div className="logout-content">
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Logout;
