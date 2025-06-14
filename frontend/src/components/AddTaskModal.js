import React, { useState } from 'react';
import './AddTaskModal.css';

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('Extreme');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="addtask-modal-backdrop">
      <div className="addtask-modal">
        <div className="addtask-modal-header">
          <span>Add New Task</span>
          <button className="addtask-modal-close" onClick={onClose}>Go Back</button>
        </div>
        <form className="addtask-form">
          <div className="addtask-form-row">
            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
          </div>
          <div className="addtask-form-row">
            <label>Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="addtask-form-row">
            <label>Priority</label>
            <div className="addtask-priority-group">
              <label><input type="radio" name="priority" value="Extreme" checked={priority==='Extreme'} onChange={e => setPriority(e.target.value)} /> Extreme</label>
              <label><input type="radio" name="priority" value="Moderate" checked={priority==='Moderate'} onChange={e => setPriority(e.target.value)} /> Moderate</label>
              <label><input type="radio" name="priority" value="Low" checked={priority==='Low'} onChange={e => setPriority(e.target.value)} /> Low</label>
            </div>
          </div>
          <div className="addtask-form-row addtask-form-row-flex">
            <div className="addtask-desc-group">
              <label>Task Description</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Start writing here..." />
            </div>
            <div className="addtask-upload-group">
              <label>Upload Image</label>
              <div className="addtask-upload-box">
                {image ? (
                  <img src={image} alt="Preview" className="addtask-upload-preview" />
                ) : (
                  <div className="addtask-upload-placeholder">
                    <span role="img" aria-label="upload">📷</span>
                    <div>Drag&Drop files here<br/>or</div>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="button" onClick={() => document.querySelector('.addtask-upload-group input[type=file]').click()}>Browse</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button type="button" className="addtask-done-btn" onClick={onClose}>Done</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal; 