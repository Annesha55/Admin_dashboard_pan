import React from 'react';
import './Login.css';

const Login = ({ navigateTo, darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  const handleRegisterClick = () => {
    navigateTo('register');
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : 'light'}`}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <p>Don't have an account? <span className="register-link" onClick={handleRegisterClick}>Register here</span></p>
      </form>
    </div>
  );
}

export default Login;
