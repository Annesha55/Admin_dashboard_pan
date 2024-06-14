// Navbar.js
import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, toggleDarkMode, sidebarOpen, toggleSidebar }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      {sidebarOpen ? (
        <button className="sidebar-close-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : (
        <button className="sidebar-open-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div className="logo">
        <h1>Farmer's App</h1>
      </div>
      <div className="right-section">
        <div className="dark-mode-toggle">
          <input type="checkbox" id="darkModeToggle" checked={darkMode} onChange={toggleDarkMode} />
          <label htmlFor="darkModeToggle">Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
