import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import RightSidebar from "../CommonForBoth/RightSidebar";

const Layout = ({ children }) => {
  const isPreloader = false;
  const [isMobile, setIsMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const layoutState = useSelector((state) => state.Layout);
  const {
    leftSideBarTheme,
    leftSideBarThemeImage,
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    showRightSidebar,
  } = layoutState;

  const capitalizeFirstLetter = useCallback((string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }, []);

  const toggleMenuCallback = useCallback(() => {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }, []);

  //hides right sidebar on body click
  const hideRightbar = useCallback(
    (event) => {
      var rightbar = document.getElementById("right-bar");
      //if clicked in inside right bar, then do nothing
      if (rightbar && rightbar.contains(event.target)) {
        return;
      } else {
        if (document.body.classList.contains("right-bar-enabled")) {
          dispatch(toggleRightSidebar(false));
        }
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }

    // Scroll Top to 0
    window.scrollTo(0, 0);
    // let currentage = capitalizeFirstLetter(pathname)

    // document.title =
    //   currentage + " | Skote - React Admin & Dashboard Template"
    if (leftSideBarTheme) {
      dispatch(changeSidebarTheme(leftSideBarTheme));
    }

    if (leftSideBarThemeImage) {
      dispatch(changeSidebarThemeImage(leftSideBarThemeImage));
    }

    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }

    if (leftSideBarType) {
      dispatch(changeSidebarType(leftSideBarType));
    }
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }

    return () => {
      document.body.removeEventListener("click", hideRightbar, true);
    };
  }, [
    isPreloader,
    leftSideBarTheme,
    leftSideBarThemeImage,
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    pathname,
    dispatch,
    capitalizeFirstLetter,
    hideRightbar,
  ]);

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        />
        <div className="main-content">{children}</div>
        <Footer />
      </div>
      {showRightSidebar ? <RightSidebar /> : null}
    </React.Fragment>
  );
};

export default Layout();
