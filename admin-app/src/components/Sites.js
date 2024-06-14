import React from 'react';
import './Sites.css';

const Sites = ({ darkMode }) => {
  return (
    <div className={`sites-container ${darkMode ? 'dark' : 'light'}`}>
      <h1>Sites Page</h1>
      <p>Launching soon...</p>
    </div>
  );
}

export default Sites;
