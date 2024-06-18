// Sites.js
import React from 'react';
import './Sites.css';

const Sites = ({ darkMode }) => {
  return (
    <div className={`sites ${darkMode ? 'dark' : 'light'}`}>
      <h2>Sites</h2>
      <table className="sites-table">
        <thead>
          <tr>
            <th>Site Name</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site A</td>
            <td>Location A</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Site B</td>
            <td>Location B</td>
            <td>Inactive</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Sites;
