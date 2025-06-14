import React, { useState } from 'react';
import './TaskPriorityModal.css';

const TaskPriorityModal = ({ onClose, initialValue = '', mode = 'add' }) => {
  const [priority, setPriority] = useState(initialValue);

  return (
    <div className="priority-modal-backdrop">
      <div className="priority-modal">
        <div className="priority-modal-header">
          <span>{mode === 'edit' ? 'Edit Task Priority' : 'Add Task Priority'}</span>
          <button className="priority-modal-close" onClick={onClose}>Go Back</button>
        </div>
        <form className="priority-form">
          <label>Task Priority Title</label>
          <input type="text" value={priority} onChange={e => setPriority(e.target.value)} placeholder="Task Priority Title" />
          <div className="priority-btn-row">
            <button type="submit" className="priority-create">{mode === 'edit' ? 'Update' : 'Create'}</button>
            <button type="button" className="priority-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskPriorityModal; 