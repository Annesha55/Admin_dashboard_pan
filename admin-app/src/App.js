import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendence';
import Projects from './components/Projects'; // Import Projects component
import Sites from './components/Sites'; // Import Sites component

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard'); // Default to 'dashboard' page

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} />
      <div className="content">
        {/* Conditional rendering based on currentPage */}
        {currentPage === 'dashboard' && <Dashboard darkMode={darkMode} />}
        {currentPage === 'attendance' && <Attendance darkMode={darkMode} />}
        {currentPage === 'projects' && <Projects darkMode={darkMode} />}
        {currentPage === 'sites' && <Sites darkMode={darkMode} />}
        {currentPage === 'settings' && <Settings darkMode={darkMode} />}
        {/* Add more pages as needed */}
      </div>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navigateTo={navigateTo}
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
