import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user, isAdmin } = useSelector(
    (state) => state.user
  );
  if (loading === false)
    if (!isAuthenticated) {
      return <Navigate to="/Login" replace />;
    }

  /*if (adminRoute && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }*/

  if (isAdmin === true && user.role === "user" ? true : false) {
    return <Navigate to="/account" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
