import React from 'react';
import './Register.css';

const Register = ({ navigateTo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here if needed
  };

  const handleLoginClick = () => {
    navigateTo('login'); // Call navigateTo function passed as prop
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <span className="login-link" onClick={handleLoginClick}>Login here</span></p>
    </div>
  );
}

export default Register;
