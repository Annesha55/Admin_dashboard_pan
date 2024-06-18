
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Projects from './components/Projects';
import Sites from './components/Sites';
import Settings from './components/Settings';
import Users from './components/Users'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  let pageContent;
  switch (currentPage) {
    case 'login':
      pageContent = <Login navigateTo={navigateTo} />;
      break;
    case 'register':
      pageContent = <Register navigateTo={navigateTo} />;
      break;
    case 'dashboard':
      pageContent = <Dashboard darkMode={darkMode} />;
      break;
    case 'attendance':
      pageContent = <Attendance darkMode={darkMode} />;
      break;
    case 'projects':
      pageContent = <Projects darkMode={darkMode} />;
      break;
    case 'sites':
      pageContent = <Sites darkMode={darkMode} />;
      break;
    case 'settings':
      pageContent = <Settings darkMode={darkMode} />;
      break;
    case 'users': // Add case for Users page
      pageContent = <Users darkMode={darkMode} />;
      break;
    default:
      pageContent = <Dashboard darkMode={darkMode} />;
  }

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          sidebarOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      <div className="content">
        {pageContent}
      </div>
      {currentPage !== 'login' && currentPage !== 'register' && (
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          navigateTo={navigateTo}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
    </div>
  );
};

export default App;
