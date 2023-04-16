import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import scss
import "./assets/scss/theme.scss";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import UserProfile from "./pages/Authentication/UserProfile";
import ForgetPassword from "./pages/Authentication/ForgetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
