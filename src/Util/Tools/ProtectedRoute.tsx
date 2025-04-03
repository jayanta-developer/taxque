// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = localStorage.getItem("user");
  // const { user } = useContext(AuthContext)!;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
