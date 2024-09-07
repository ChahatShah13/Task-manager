import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/task/createtask', { name: taskName }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setTasks(prevTasks => [...prevTasks, response.data]);
        setTaskName(''); // Clear input field
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
