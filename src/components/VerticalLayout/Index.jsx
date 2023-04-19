import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RightSidebar from "../CommonForBoth/RightSidebar";
const Index = () => {
  const dispatch = useDispatch();

  const {
    isPreloader,
    leftSideBarThemeImage,
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    showRightSidebar,
    leftSideBarTheme,
    layoutModeType,
  } = useSelector((state) => ({
    isPreloader: state.Layout.isPreloader,
    layoutModeType: state.Layout.layoutModeType,
    leftSideBarThemeImage: state.Layout.leftSideBarThemeImage,
    leftSideBarType: state.Layout.leftSideBarType,
    layoutWidth: state.Layout.layoutWidth,
    topbarTheme: state.Layout.topbarTheme,
    showRightSidebar: state.Layout.showRightSidebar,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
  }));
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      dispatch(changeSidebarType("condensed", isMobile));
    } else if (leftSideBarType === "condensed") {
      dispatch(changeSidebarType("default", isMobile));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
      {showRightSidebar ? <RightSidebar /> : null}
    </>
  );
};

export default Index;
