import React from 'react';
import './Projects.css';

const Projects = ({ darkMode }) => {
  return (
    <div className={`projects-container ${darkMode ? 'dark' : 'light'}`}>
      <h1>Projects Page</h1>
      <p>Projects to be assigned...</p>
    </div>
  );
}

export default Projects;
