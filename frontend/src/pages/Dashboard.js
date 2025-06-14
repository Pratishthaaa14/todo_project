import React, { useState } from 'react';
import './Dashboard.css';
import InviteModal from '../components/InviteModal';

const Dashboard = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

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
          <a className="active" href="#">Dashboard</a>
          <a href="#">Vital Task</a>
          <a href="#">My Task</a>
          <a href="#">Task Categories</a>
          <a href="#">Settings</a>
          <a href="#">Help</a>
        </nav>
        <button className="sidebar-logout">Logout</button>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h2>Welcome back, Sundar <span role="img" aria-label="wave">👋</span></h2>
          <div className="dashboard-search">
            <input type="text" placeholder="Search your tasks..." />
            <button className="invite-btn" onClick={() => setShowInviteModal(true)}>Invite</button>
          </div>
        </header>
        <section className="dashboard-content">
          <div className="dashboard-tasks">
            <div className="dashboard-tasks-header">
              <span>To-Do</span>
              <button className="add-task-btn">+ Add task</button>
            </div>
            <div className="task-card-list">
              <div className="task-card">
                <div className="task-title">Attend Nischal's Birthday Party</div>
                <div className="task-desc">Buy gifts on the way and pick up cake from the bakery. 6 PM | Fresh Elements...</div>
                <div className="task-meta">Priority: Moderate <span className="task-status not-started">Not Started</span></div>
              </div>
              <div className="task-card">
                <div className="task-title">Landing Page Design for TravelDays</div>
                <div className="task-desc">Get the work done by EOD and discuss with client before leaving. (4 PM Meeting Room)</div>
                <div className="task-meta">Priority: Moderate <span className="task-status in-progress">In Progress</span></div>
              </div>
              <div className="task-card">
                <div className="task-title">Presentation on Final Product</div>
                <div className="task-desc">Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...</div>
                <div className="task-meta">Priority: Moderate <span className="task-status in-progress">In Progress</span></div>
              </div>
            </div>
          </div>
          <div className="dashboard-status">
            <div className="status-chart">
              <div className="status-label completed">84%<br/>Completed</div>
              <div className="status-label in-progress">46%<br/>In Progress</div>
              <div className="status-label not-started">13%<br/>Not Started</div>
            </div>
            <div className="completed-tasks">
              <div className="completed-title">Completed Task</div>
              <div className="completed-card">
                <div className="completed-task-title">Walk the dog</div>
                <div className="completed-task-desc">Take the dog to the park and bring treats as well.</div>
                <div className="completed-task-meta">Completed 4 days ago.</div>
              </div>
              <div className="completed-card">
                <div className="completed-task-title">Conduct meeting</div>
                <div className="completed-task-desc">Meet with the client and finalize requirements.</div>
                <div className="completed-task-meta">Completed 2 days ago.</div>
              </div>
            </div>
          </div>
        </section>
        {showInviteModal && <InviteModal onClose={() => setShowInviteModal(false)} />}
      </main>
    </div>
  );
};

export default Dashboard; 