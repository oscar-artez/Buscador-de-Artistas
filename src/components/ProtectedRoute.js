import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const actor = useSelector(state => state.nameActor);

  return !actor ? <Navigate to="/" /> : <>{children}</>;
};

export default ProtectedRoute;