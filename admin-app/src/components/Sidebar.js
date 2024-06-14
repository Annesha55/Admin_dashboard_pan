// Sidebar.js

import React from 'react';
import './Sidebar.css';

const Sidebar = ({ darkMode, toggleDarkMode, navigateTo, isOpen, toggleSidebar }) => {
  const handleModeToggle = () => {
    toggleDarkMode();
  };

  const handleNavigateTo = (page) => {
    navigateTo(page);
    toggleSidebar(); // Close sidebar after navigation
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="sidebar-header">
        <h3>Sidebar</h3>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <ul className="sidebar-links">
        <li onClick={() => handleNavigateTo('profile')}>Profile</li>
        <li onClick={() => handleNavigateTo('user-management')}>User Management</li>
        <li onClick={() => handleNavigateTo('settings')}>Settings</li>
        <li onClick={() => handleNavigateTo('logout')}>Logout</li>
      </ul>
      <div className="mode-toggle" onClick={handleModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
  );
}

export default Sidebar;
