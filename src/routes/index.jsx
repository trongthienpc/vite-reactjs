import React from "react";
import { Navigate, Route } from "react-router-dom";
// User profile
import UserProfile from "../pages/Authentication/UserProfile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },

  //profile
  { path: "/profile", element: <UserProfile /> },

  // this route should be at the end of all other routes
  { path: "/", element: <Navigate to="/dashboard" replace /> },
];

const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgetPwd /> },
  { path: "/register", element: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
