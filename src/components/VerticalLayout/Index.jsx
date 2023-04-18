import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Index = () => {
  const toggleMenuCallback = () => {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  };
  return (
    <>
      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
      {/* {showRightSidebar ? <RightSidebar /> : null} */}
    </>
  );
};

export default Index;
