import React, { useState, useEffect } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [activityData, setActivityData] = useState([]);

  
  useEffect(() => {
    
    const fetchData = async () => {
     
      const data = [
        { date: '2024-06-10', users: 15 },
        { date: '2024-06-11', users: 18 },
        { date: '2024-06-12', users: 12 },
        { date: '2024-06-13', users: 20 },
        { date: '2024-06-14', users: 16 },
        { date: '2024-06-15', users: 22 },
        { date: '2024-06-16', users: 19 }
      ];
      setActivityData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="attendance">
      <h2>User Activity for Last 7 Days</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          {activityData.map((activity) => (
            <tr key={activity.date}>
              <td>{activity.date}</td>
              <td>{activity.users}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
