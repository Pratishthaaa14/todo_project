import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <form className="register-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <div className="social-login">
          <p>Or sign up with</p>
          <div className="social-buttons">
            <button className="google-button">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Google
            </button>
          </div>
        </div>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 