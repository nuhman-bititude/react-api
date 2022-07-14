import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth";

function ProtectedRoutes({ children }) {
  const auth = useAuth();
  if (!auth.isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default ProtectedRoutes;
