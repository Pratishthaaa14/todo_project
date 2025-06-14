import React, { useState } from 'react';
import './MyTask.css';
import AddTaskModal from '../components/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal';

const tasks = [
  {
    id: 1,
    title: 'Submit Documents',
    priority: 'Extreme',
    status: 'Not Started',
    created: '20/06/2023',
    date: '2023-06-20',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=200',
    description: `Task Title: Document Submission.\nObjective: To submit required documents for something important\nTask Description: Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.\nAdditional Notes:\n- Ensure that the documents are authentic and up-to-date.\n- Maintain confidentiality and security of sensitive information during the submission process.\n- If there are specific guidelines or deadlines for submission, adhere to them diligently.\nDeadline for Submission: End of Day`,
  },
  {
    id: 2,
    title: 'Complete assignments',
    priority: 'Moderate',
    status: 'In Progress',
    created: '20/06/2023',
    date: '2023-06-20',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200',
    description: `Task Title: Complete assignments.\nObjective: Pass final year.\nTask Description: The assignments must be completed to pass final year...`,
  },
];

const MyTask = () => {
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleEdit = (task) => {
    setEditTask(task);
    setShowEditModal(true);
  };

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
          <a className="active" href="#">My Task</a>
          <a href="#">Task Categories</a>
          <a href="#">Settings</a>
          <a href="#">Help</a>
        </nav>
        <button className="sidebar-logout">Logout</button>
      </aside>
      <main className="mytask-main">
        <header className="mytask-header">
          <h2><span style={{ color: '#f76c6c' }}>To-</span>Do</h2>
          <div className="dashboard-search">
            <input type="text" placeholder="Search your task here..." />
          </div>
        </header>
        <section className="mytask-content">
          <div className="mytask-list">
            <div className="mytask-list-title-row">
              <div className="mytask-list-title">My Tasks</div>
              <button className="add-task-btn" onClick={() => setShowAddModal(true)}>+ Add Task</button>
            </div>
            {tasks.map(task => (
              <div
                key={task.id}
                className={`mytask-card${selectedTask.id === task.id ? ' selected' : ''}`}
                onClick={() => setSelectedTask(task)}
              >
                <div className="mytask-card-row">
                  <img src={task.image} alt={task.title} className="mytask-card-img" />
                  <div>
                    <div className="mytask-card-title">{task.title}</div>
                    <div className="mytask-card-meta">
                      <span className={`priority ${task.priority.toLowerCase()}`}>Priority: {task.priority}</span>
                      <span className={`status ${task.status.replace(' ', '-').toLowerCase()}`}>Status: {task.status}</span>
                      <span className="created">Created on: {task.created}</span>
                    </div>
                  </div>
                  <button className="edit-task-btn" onClick={e => { e.stopPropagation(); handleEdit(task); }}>Edit</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mytask-details">
            {selectedTask && (
              <div className="mytask-details-card">
                <img src={selectedTask.image} alt={selectedTask.title} className="mytask-details-img" />
                <div className="mytask-details-title">{selectedTask.title}</div>
                <div className="mytask-details-desc">
                  {selectedTask.description.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        {showAddModal && <AddTaskModal onClose={() => setShowAddModal(false)} />}
        {showEditModal && <EditTaskModal onClose={() => setShowEditModal(false)} initialTask={editTask} />}
      </main>
    </div>
  );
};

export default MyTask; 