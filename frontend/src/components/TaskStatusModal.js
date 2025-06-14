import React, { useState } from 'react';
import './TaskStatusModal.css';

const TaskStatusModal = ({ onClose, initialValue = '' }) => {
  const [status, setStatus] = useState(initialValue);

  return (
    <div className="status-modal-backdrop">
      <div className="status-modal">
        <div className="status-modal-header">
          <span>Edit Task Status</span>
          <button className="status-modal-close" onClick={onClose}>Go Back</button>
        </div>
        <form className="status-form">
          <label>Task Status Name</label>
          <input type="text" value={status} onChange={e => setStatus(e.target.value)} placeholder="Task Status Name" />
          <div className="status-btn-row">
            <button type="submit" className="status-update">Update</button>
            <button type="button" className="status-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskStatusModal; 