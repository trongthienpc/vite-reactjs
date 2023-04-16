import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <p>AuthLayout</p>
      <div className="main">{children}</div>
    </div>
  );
};

export default AuthLayout;
