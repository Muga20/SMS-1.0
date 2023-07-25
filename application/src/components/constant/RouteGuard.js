import { Navigate, useLocation } from "react-router-dom";
import { getUserRole } from '../constant/getRole';

function RouteGuard({ element, requiredRole }) {
  const userRole = getUserRole();
  const location = useLocation();

  if (userRole === requiredRole) {
    return element;
  } else {
    // Redirect to an "Unauthorized" page or show a restricted access message
    return <Navigate to={`/Unauthorized?from=${location.pathname}`} />;
  }
}

export default RouteGuard;