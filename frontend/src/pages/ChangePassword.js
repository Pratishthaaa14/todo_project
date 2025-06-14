import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <div className="dashboard-bg">
      <aside className="dashboard-sidebar">
        <div className="sidebar-profile">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="sidebar-avatar" />
          <div className="sidebar-user">
            <div className="sidebar-name">Sundar Gurung</div>
            <div className="sidebar-email">sundargurung93@gmail.com</div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <a href="#">Dashboard</a>
          <a href="#">Vital Task</a>
          <a href="#">My Task</a>
          <a href="#">Task Categories</a>
          <a href="#">Settings</a>
          <a href="#">Help</a>
        </nav>
        <button className="sidebar-logout">Logout</button>
      </aside>
      <main className="changepass-main">
        <div className="changepass-card">
          <h2>Change Password</h2>
          <form className="changepass-form">
            <label>Current Password</label>
            <input type="password" value={current} onChange={e => setCurrent(e.target.value)} />
            <label>New Password</label>
            <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} />
            <label>Confirm Password</label>
            <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
            <div className="changepass-btn-row">
              <button type="submit" className="changepass-save">Save</button>
              <button type="button" className="changepass-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword; 