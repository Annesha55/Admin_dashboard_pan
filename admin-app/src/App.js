// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home' page

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />
      <div className="content">
        {/* Conditional rendering based on currentPage */}
        {currentPage === 'home' && <h1>Home Page Content</h1>}
        {currentPage === 'profile' && <Profile darkMode={darkMode} />}
        {currentPage === 'user-management' && <UserManagement darkMode={darkMode} />}
        {currentPage === 'settings' && <Settings darkMode={darkMode} />}
        {/* Add more pages as needed */}
      </div>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navigateTo={navigateTo}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        // Add other props as needed
      />
    </div>
  );
}

export default App;
