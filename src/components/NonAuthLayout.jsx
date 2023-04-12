import React from "react";

const NonAuthLayout = ({ children }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  return <React.Fragment>{children}</React.Fragment>;
};

export default NonAuthLayout;
