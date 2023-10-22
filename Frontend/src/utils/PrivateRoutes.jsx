import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  const user = localStorage.getItem("user");
  return user ? <Outlet /> : <Navigate to={'/'} replace />
}

export default PrivateRoutes
