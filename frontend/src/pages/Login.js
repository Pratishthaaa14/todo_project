import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <form className="login-form">
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/users/password-reset" className="forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="google-button">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Google
            </button>
          </div>
        </div>
        <p className="register-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 