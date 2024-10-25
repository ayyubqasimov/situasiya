// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  allowedRoles: string[];
  currentUserRole: string;
  element: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, currentUserRole, element }) => {
  if (!allowedRoles.includes(currentUserRole)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return element;
};
