import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', completed: false },
    { id: 2, title: 'Review code changes', completed: true },
    { id: 3, title: 'Team meeting at 2 PM', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-list-container">
      <div className="task-header">
        <h1>My Tasks</h1>
        <div className="task-stats">
          <span>{tasks.filter(t => !t.completed).length} tasks left</span>
        </div>
      </div>

      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>

      <div className="tasks-container">
        {tasks.map(task => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <span className="task-title">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList; 