import React, { useEffect, useRef } from 'react';
import './Dashboard.css';
import Chart from 'chart.js/auto'; // Import chart.js

const Dashboard = ({ darkMode }) => {
  const usersChartRef = useRef(null);
  const adminsChartRef = useRef(null);

  useEffect(() => {
    // Initialize charts
    const initializeCharts = () => {
      // Destroy existing charts if they exist
      if (usersChartRef.current && usersChartRef.current.chart) {
        usersChartRef.current.chart.destroy();
      }
      if (adminsChartRef.current && adminsChartRef.current.chart) {
        adminsChartRef.current.chart.destroy();
      }

      // Create new charts
      const usersChartCtx = usersChartRef.current.getContext('2d');
      usersChartRef.current.chart = new Chart(usersChartCtx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Users Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      const adminsChartCtx = adminsChartRef.current.getContext('2d');
      adminsChartRef.current.chart = new Chart(adminsChartCtx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Admins Data',
            data: [10, 5, 20, 15, 30, 25],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    initializeCharts(); // Initial chart setup

    // Cleanup on component unmount
    return () => {
      // Ensure charts are destroyed to prevent memory leaks
      if (usersChartRef.current && usersChartRef.current.chart) {
        usersChartRef.current.chart.destroy();
      }
      if (adminsChartRef.current && adminsChartRef.current.chart) {
        adminsChartRef.current.chart.destroy();
      }
    };
  }, []); // Only run on component mount and unmount

  return (
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
      <div className="card">
        <h3>Data from Users</h3>
        <canvas ref={usersChartRef}></canvas>
      </div>
      <div className="card">
        <h3>Data from Admin</h3>
        <canvas ref={adminsChartRef}></canvas>
      </div>
    </div>
  );
}

export default Dashboard;
