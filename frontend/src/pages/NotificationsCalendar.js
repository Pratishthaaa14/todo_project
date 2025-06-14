import React from 'react';
import './NotificationsCalendar.css';

const notifications = [
  {
    id: 1,
    title: 'Complete the UI design of Landing Page for FoodVentures.',
    time: '2h',
    priority: 'High',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=100',
  },
  {
    id: 2,
    title: 'Complete the UI design of Landing Page for Travel Days.',
    time: '2h',
    priority: 'High',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=100&h=100',
  },
  {
    id: 3,
    title: 'Complete the Mobile app design for Pet Warden.',
    time: '2h',
    priority: 'Extremely High',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=100',
  },
  {
    id: 4,
    title: 'Complete the entire design for Juice Slider.',
    time: '2h',
    priority: 'High',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=100&h=100',
  },
];

const NotificationsCalendar = () => {
  return (
    <div className="notifcal-bg">
      <div className="notifcal-container">
        <div className="notif-card">
          <div className="notif-card-header">
            <span>Notifications</span>
            <span className="notif-icon">🔔</span>
          </div>
          <div className="notif-list">
            {notifications.map(n => (
              <div className="notif-item" key={n.id}>
                <img src={n.image} alt="notif" className="notif-img" />
                <div className="notif-info">
                  <div className="notif-title">{n.title}</div>
                  <div className="notif-meta">
                    <span className={`notif-priority ${n.priority.replace(' ', '-').toLowerCase()}`}>Priority: {n.priority}</span>
                    <span className="notif-time">{n.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-card">
          <div className="calendar-card-header">
            <span>Calendar</span>
            <span className="notif-icon">📅</span>
          </div>
          <div className="calendar-content">
            {/* Simple calendar placeholder */}
            <div className="calendar-month">June 2023</div>
            <div className="calendar-grid">
              <div className="calendar-row calendar-days">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
              <div className="calendar-row">
                <span></span><span></span><span></span><span></span><span>1</span><span>2</span><span>3</span>
              </div>
              <div className="calendar-row">
                <span>4</span><span>5</span><span className="calendar-active">6</span><span>7</span><span>8</span><span>9</span><span>10</span>
              </div>
              <div className="calendar-row">
                <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
              </div>
              <div className="calendar-row">
                <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
              </div>
              <div className="calendar-row">
                <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCalendar; 