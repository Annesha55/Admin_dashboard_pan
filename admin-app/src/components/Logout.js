// Logout.js

import React from 'react';
import './Logout.css'; // Import your CSS file for styling

const Logout = () => {
  // Function to handle logout action (for demonstration)
  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear session, redirect to login, etc.)
    console.log('Logged out'); // For demonstration
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
