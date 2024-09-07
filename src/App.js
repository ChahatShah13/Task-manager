// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={
            <ProtectedRoute>
              <TaskForm setTasks={setTasks} />
              <TaskList tasks={tasks} setTasks={setTasks} />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
