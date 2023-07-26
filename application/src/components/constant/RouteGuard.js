import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserRole } from '../constant/getRole';

function RouteGuard({ element, requiredRole }) {
  const userRole = getUserRole();
  const location = useLocation();

  if (userRole === requiredRole) {
    return element;
  } else {
    // Redirect to the login page
    return <Navigate to="/Auth" />;
  }
}

export default RouteGuard;
