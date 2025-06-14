import React, { useState } from 'react';
import './TaskCategories.css';
import CreateCategoryModal from '../components/CreateCategoryModal';
import TaskPriorityModal from '../components/TaskPriorityModal';
import TaskStatusModal from '../components/TaskStatusModal';

const initialCategories = [
  { id: 1, name: 'Work', author: 'Sundar Gurung', status: 'Active' },
  { id: 2, name: 'Personal', author: 'Sundar Gurung', status: 'Inactive' },
  { id: 3, name: 'Urgent', author: 'Sundar Gurung', status: 'Active' },
];

const TaskCategories = () => {
  const [categories] = useState(initialCategories);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [editStatusValue, setEditStatusValue] = useState('');

  const handleEdit = (cat) => {
    setEditValue(cat.name);
    setShowEditModal(true);
  };
  const handleEditStatus = (cat) => {
    setEditStatusValue(cat.status);
    setShowStatusModal(true);
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
          <a href="#">My Task</a>
          <a className="active" href="#">Task Categories</a>
          <a href="#">Settings</a>
          <a href="#">Help</a>
        </nav>
        <button className="sidebar-logout">Logout</button>
      </aside>
      <main className="taskcategories-main">
        <div className="taskcategories-card">
          <div className="taskcategories-header-row">
            <h2>Task Categories</h2>
            <button className="taskcategories-create-btn" onClick={() => setShowCreateModal(true)}>+ Create Category</button>
          </div>
          <table className="taskcategories-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(cat => (
                <tr key={cat.id}>
                  <td>{cat.name}</td>
                  <td>{cat.author}</td>
                  <td>{cat.status}</td>
                  <td>
                    <button className="taskcategories-edit-btn" onClick={() => handleEdit(cat)}>Edit</button>
                    <button className="taskcategories-edit-btn" onClick={() => handleEditStatus(cat)}>Edit Status</button>
                    <button className="taskcategories-delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showCreateModal && <CreateCategoryModal onClose={() => setShowCreateModal(false)} />}
        {showEditModal && <TaskPriorityModal onClose={() => setShowEditModal(false)} mode="edit" initialValue={editValue} />}
        {showStatusModal && <TaskStatusModal onClose={() => setShowStatusModal(false)} initialValue={editStatusValue} />}
      </main>
    </div>
  );
};

export default TaskCategories; 