import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let isLoggedIn = localStorage.getItem("token") !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
