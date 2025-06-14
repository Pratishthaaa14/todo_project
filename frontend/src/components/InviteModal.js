import React, { useState } from 'react';
import './InviteModal.css';

const members = [
  {
    name: 'Upasana Gurung',
    email: 'upasangr99@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    canEdit: true,
  },
  {
    name: 'Jeremy Lee',
    email: 'jeremy55@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    canEdit: false,
  },
  {
    name: 'Thomas Park',
    email: 'parkth10@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    canEdit: false,
  },
  {
    name: 'Rachel Takahasi',
    email: 'takahasirach20@gmail.com',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    canEdit: true,
  },
];

const InviteModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [projectLink] = useState('https://tasklinkhereandthere.com/3456u6y23');

  return (
    <div className="invite-modal-backdrop">
      <div className="invite-modal">
        <div className="invite-modal-header">
          <span>Send an invite to a new member</span>
          <button className="invite-modal-close" onClick={onClose}>Go Back</button>
        </div>
        <div className="invite-modal-body">
          <div className="invite-email-row">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="send-invite-btn">Send Invite</button>
          </div>
          <div className="invite-members-list">
            {members.map((member, idx) => (
              <div className="invite-member" key={idx}>
                <img src={member.avatar} alt={member.name} className="invite-member-avatar" />
                <div className="invite-member-info">
                  <div className="invite-member-name">{member.name}</div>
                  <div className="invite-member-email">{member.email}</div>
                </div>
                <select className="invite-member-permission" defaultValue={member.canEdit ? 'edit' : 'view'}>
                  <option value="edit">Can edit</option>
                  <option value="view">Can view</option>
                </select>
              </div>
            ))}
          </div>
          <div className="invite-project-link-row">
            <input type="text" value={projectLink} readOnly />
            <button className="copy-link-btn" onClick={() => navigator.clipboard.writeText(projectLink)}>Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteModal; 