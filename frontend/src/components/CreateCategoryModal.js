import React, { useState } from 'react';
import './CreateCategoryModal.css';

const CreateCategoryModal = ({ onClose }) => {
  const [category, setCategory] = useState('');

  return (
    <div className="createcat-modal-backdrop">
      <div className="createcat-modal">
        <div className="createcat-modal-header">
          <span>Create Categories</span>
          <button className="createcat-modal-close" onClick={onClose}>Go Back</button>
        </div>
        <form className="createcat-form">
          <label>Category Name</label>
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category Name" />
          <div className="createcat-btn-row">
            <button type="submit" className="createcat-create">Create</button>
            <button type="button" className="createcat-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal; 