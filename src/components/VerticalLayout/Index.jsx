import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Index = () => {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
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
