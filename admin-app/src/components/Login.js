import React, { useState } from 'react';
import './Login.css';
import adminImage from '../assets/images/dark.webp'
const Login = ({ navigateTo }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);

    const dummyUsername = 'testuser';
    const dummyPassword = 'password123';

    if (username === dummyUsername && password === dummyPassword) {
      navigateTo('dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="left-half">
      <img src = {adminImage} alt = "Admin" className="adminImage" />


      </div>
      <div className={`right-half ${animate? 'animate' : ''}`}>
        <div className="login-container">
        
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="register-prompt">
              Don't have an account? <span className="register-link" onClick={() => navigateTo('register')}>Register here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;