import React from 'react';
import './Login.css';

const Login = ({ navigateTo }) => { // Destructure navigateTo from props
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here if needed
  };

  const handleRegisterClick = () => {
    // Navigate to register page using navigateTo prop
    navigateTo('register');
  };

  return (
    <div className="login-container">
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
      </form>
      <p>Don't have an account? <span className="register-link" onClick={handleRegisterClick}>Register here</span></p>
    </div>
  );
}

export default Login;
