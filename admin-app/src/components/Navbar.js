import React from 'react';
import './Navbar.css';

const Navbar = ({ navigateTo, darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <ul>
        <li onClick={() => navigateTo('home')}>Home</li>
        <li onClick={() => navigateTo('login')}>Login</li>
        <li onClick={() => navigateTo('register')}>Register</li>
      </ul>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </nav>
  );
}

export default Navbar;
