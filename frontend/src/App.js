import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
import Dashboard from './pages/Dashboard';
import MyTask from './pages/MyTask';
import NotificationsCalendar from './pages/NotificationsCalendar';
import ChangePassword from './pages/ChangePassword';
import AccountInfo from './pages/AccountInfo';
import TaskCategories from './pages/TaskCategories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/notifications-calendar" element={<NotificationsCalendar />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/account-info" element={<AccountInfo />} />
          <Route path="/task-categories" element={<TaskCategories />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
