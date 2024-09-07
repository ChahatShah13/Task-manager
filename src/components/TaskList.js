import React, { useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ tasks, setTasks }) => {
  useEffect(() => {
    axios.get('http://localhost:5000/task/gettasks', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for protected routes
      }
    })
      .then(response => setTasks(response.data)) // Ensure response.data is an array
      .catch(error => {
        console.error('Failed to fetch tasks:', error);
        setTasks([]); // Fallback to empty array on error
      });
  }, [setTasks]);

  if (!tasks || !Array.isArray(tasks)) {
    return <div>No tasks available.</div>;
  }

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
