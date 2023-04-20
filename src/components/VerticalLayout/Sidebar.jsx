import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import SidebarContent from "./SidebarContent";

import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";
import React from "react";

function Sidebar(props) {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <NavLink to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </NavLink>

          <NavLink to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="19" />
            </span>
          </NavLink>
        </div>
        <div data-simplebar className="h-100">
          <SidebarContent />
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
}

Sidebar.propTypes = {
  type: PropTypes.string,
};

export default Sidebar;
