import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/register" />; // Redirect to the register page if not authenticated
  }
  
  return children; // Render children if authenticated
};

export default ProtectedRoute;
