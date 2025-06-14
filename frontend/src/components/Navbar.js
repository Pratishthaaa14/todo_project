import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // This will be replaced with actual auth state

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/tasks">TodoFlow</Link>
      </div>
      <div className="navbar-menu">
        {isLoggedIn ? (
          <>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <img 
                src="https://via.placeholder.com/32" 
                alt="Profile" 
                className="profile-pic"
              />
            </div>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 