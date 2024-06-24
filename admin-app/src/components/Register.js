import React, { useState } from 'react';
import './Register.css';
import adminImage from '../assets/images/dark.webp'
const Register = ({ navigateTo }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);

    const isSuccess = true;
    if (isSuccess) {
      navigateTo('dashboard');
    }
  };

  return (
    <div className="container">
      <div className="left-half">
      <img src = {adminImage} alt = "Admin" className="adminImage" />
      </div>
      <div className={`right-half ${animate ? 'animate' : ''}`}>
        <div className="register-container">
          <form className="register-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-button">Register</button>
            <p className="login-prompt">
              Already have an account? <span className="login-link" onClick={() => navigateTo('login')}>Login here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
