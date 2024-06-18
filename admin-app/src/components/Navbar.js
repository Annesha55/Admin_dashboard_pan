import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, toggleDarkMode, sidebarOpen, toggleSidebar }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-content">
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
        </button>
        <div className="logo">
          <h1>Farmers App</h1>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
