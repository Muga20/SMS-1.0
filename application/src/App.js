import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { getUserRole } from './components/constant/getRole';
import roleRoutes from './components/constant/RouteConfiguration';
import RouteGuard from './components/constant/RouteGuard';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get the user role from local storage when the component mounts
    const role = getUserRole();
    setUserRole(role);
  }, []); 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Auth" element={<Login />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          {userRole && roleRoutes[userRole]?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<RouteGuard element={route.element} requiredRole={userRole} />}
            />
          ))}

          <Route path="/*" element={<Navigate to="/Auth" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
