
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserCheck, faUsers, faBuilding, faProjectDiagram, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ darkMode, isOpen, toggleSidebar, navigateTo }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <button className="sidebar-close-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="sidebar-header">
        <h2>Farmers App</h2>
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => navigateTo('dashboard')}>
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Dashboard</span>
        </li>
        <li onClick={() => navigateTo('attendance')}>
          <FontAwesomeIcon icon={faUserCheck} />
          <span>Attendance</span>
        </li>
        <li onClick={() => navigateTo('projects')}>
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span>Projects</span>
        </li>
        <li onClick={() => navigateTo('sites')}>
          <FontAwesomeIcon icon={faBuilding} />
          <span>Sites</span>
        </li>
        <li onClick={() => navigateTo('users')}>
          <FontAwesomeIcon icon={faUsers} />
          <span>Users</span>
        </li>
        <li onClick={() => navigateTo('settings')}>
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </li>
      </ul>
      <button className="logout" onClick={() => navigateTo('login')}>Logout</button>
    </aside>
  );
}

export default Sidebar;
