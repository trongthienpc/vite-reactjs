import React from "react";

const NonAuthLayout = ({ children }) => {
  return (
    <div>
      <p>NonAuthLayout</p>
      <div className="main">{children}</div>
    </div>
  );
};

export default NonAuthLayout;
