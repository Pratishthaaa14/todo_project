import React, { useState } from 'react';
import './AccountInfo.css';

const AccountInfo = () => {
  const [name, setName] = useState('Sundar Gurung');
  const [email, setEmail] = useState('sundargurung93@gmail.com');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

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
      <main className="accountinfo-main">
        <div className="accountinfo-card">
          <h2>Account Information</h2>
          <form className="accountinfo-form">
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Phone</label>
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
            <label>Address</label>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            <div className="accountinfo-btn-row">
              <button type="submit" className="accountinfo-save">Save</button>
              <button type="button" className="accountinfo-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountInfo; 