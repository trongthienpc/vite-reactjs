/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "./rightbar.scss";
import {
  layoutTypes,
  layoutWidthTypes,
  leftBarThemeImageTypes,
  leftSideBarThemeTypes,
  leftSidebarTypes,
  topBarThemeTypes,
} from "../../constants/layout";
/** Import actions */
import {
  changeLayout,
  changeLayoutMode,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions";
//Import images
import bgimg1 from "../../assets/images/sidebar/img1.jpg";
import bgimg2 from "../../assets/images/sidebar/img2.jpg";
import bgimg3 from "../../assets/images/sidebar/img3.jpg";
import bgimg4 from "../../assets/images/sidebar/img4.jpg";

import layout4 from "../../assets/images/layouts/layout-1.jpg";
import layout5 from "../../assets/images/layouts/layout-2.jpg";
import layout6 from "../../assets/images/layouts/layout-3.jpg";

// import { changePreloaderAction } from "../../store/layout/_layoutSlice";

const RightSidebar = () => {
  const layout = useSelector((state) => state.Layout);
  const dispatch = useDispatch();
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [isMobile, setIsMobile] = useState(layout?.isMobile);
  useEffect(() => {
    let device = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(device);
  }, []);
  const [layoutType, setLayoutType] = useState(layout?.layoutType);

  const [layoutWidth, setLayoutWidth] = useState(layout?.layoutWidth);

  const [topBarTheme, setTopbarTheme] = useState(layout?.topBarTheme);

  // props.leftSideBarType
  const [sidebarType, setSidebarType] = useState(layout?.leftSideBarType);

  // props.leftSideBarTheme
  const [sidebarTheme, setSidebarTheme] = useState(layout?.leftSideBarTheme);

  // props.leftSideBarThemeImage,
  const [sidebarThemeImage, setSidebarThemeImage] = useState(
    layout?.leftSideBarThemeImage
  );

  const [isPreloader, setIsPreloader] = useState(layout?.isPreloader);

  const handlePreloader = () => {
    setIsPreloader(!isPreloader);
    // dispatch(changePreloaderAction(!isPreloader));
  };

  const handleLayout = (value) => {
    console.log("value :>> ", value);
    dispatch(changeLayout(value));
  };
  const handleLayoutWidth = (e) => {
    if (e.target.checked) {
      setLayoutWidth(e.target.value);
      changeLayoutWidth(e.target.value, dispatch);
    }
  };
  const handleTopBarTheme = (e) => {
    if (e.target.checked) {
      setTopbarTheme(e.target.value);
      changeTopbarTheme(e.target.value, dispatch);
    }
  };
  const handleSideBarType = (e) => {
    if (e.target.checked) {
      changeLeftSidebarType(e.target.value, isMobile, dispatch);
      setSidebarType(e.target.value);
    }
  };
  const handleSideBarTheme = (e) => {
    if (e.target.checked) {
      setSidebarTheme(e.target.value);
      changeLeftSidebarTheme(e.target.value, dispatch);
    }
  };
  const handleSidebarThemeImage = (e) => {
    if (e.target.checked) {
      setSidebarThemeImage(e.target.value);
      changeLeftSidebarThemeImage(e.target.value, dispatch);
    }
  };

  const handleToggle = () => {
    dispatch(showRightSidebarAction(false));
  };

  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle();
                }}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value={layoutTypes.VERTICAL}
                  checked={layout.layoutType === layoutTypes.VERTICAL}
                  onChange={(e) => {
                    if (e.target.checked) handleLayout(e.target.value);
                  }}
                />
                <label htmlFor="radioVertical">Vertical</label>
                {"   "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value={layoutTypes.HORIZONTAL}
                  checked={layout.layoutType === layoutTypes.HORIZONTAL}
                  onChange={(e) => {
                    if (e.target.checked) handleLayout(e.target.value);
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div>

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value={layoutWidthTypes.FLUID}
                  checked={layout.layoutWidth === layoutWidthTypes.FLUID}
                  onChange={(e) => handleLayoutWidth(e)}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value={layoutWidthTypes.BOXED}
                  checked={layout.layoutWidth === layoutWidthTypes.BOXED}
                  onChange={(e) => handleLayoutWidth(e)}
                />
                <label htmlFor="radioBoxed" className="me-2">
                  Boxed
                </label>
                <input
                  type="radio"
                  id="radioscrollable"
                  name="radioscrollable"
                  value={layoutWidthTypes.SCROLLABLE}
                  checked={layout.layoutWidth === layoutWidthTypes.SCROLLABLE}
                  onChange={(e) => handleLayoutWidth(e)}
                />
                <label htmlFor="radioscrollable">Scrollable</label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value={topBarThemeTypes.LIGHT}
                  checked={layout.topBarTheme === topBarThemeTypes.LIGHT}
                  onChange={(e) => handleTopBarTheme(e)}
                />

                <label htmlFor="radioThemeLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value={topBarThemeTypes.DARK}
                  checked={layout.topBarTheme === topBarThemeTypes.DARK}
                  onChange={(e) => handleTopBarTheme(e)}
                />
                <label htmlFor="radioThemeDark">Dark</label>
                {layoutType === "vertical" ? null : (
                  <>
                    {" "}
                    <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value={topBarThemeTypes.COLORED}
                      checked={layout.topBarTheme === topBarThemeTypes.COLORED}
                      onChange={(e) => handleTopBarTheme(e)}
                    />
                    <label htmlFor="radioThemeColored">Colored</label>{" "}
                  </>
                )}
              </div>
              {layoutType === "vertical" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value={leftSidebarTypes.DEFAULT}
                      checked={
                        layout.leftSideBarType === leftSidebarTypes.DEFAULT
                      }
                      onChange={(e) => handleSideBarType(e)}
                    />

                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value={leftSidebarTypes.COMPACT}
                      checked={
                        layout.leftSideBarType === leftSidebarTypes.COMPACT
                      }
                      onChange={(e) => handleSideBarType(e)}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value={leftSidebarTypes.ICON}
                      checked={layout.leftSideBarType === leftSidebarTypes.ICON}
                      onChange={(e) => handleSideBarType(e)}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar coloropt-radio">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color Options
                    </span>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemelight"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.LIGHT}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.LIGHT
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />

                        <label
                          htmlFor="leftsidebarThemelight"
                          className="bg-light rounded-circle wh-30"
                        ></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemedark"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.DARK}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.DARK
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemedark"
                          className="bg-dark rounded-circle wh-30"
                        ></label>
                        <input
                          type="radio"
                          id="leftsidebarThemecolored"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.COLORED}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.COLORED
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemecolored"
                          className="bg-colored rounded-circle wh-30 me-1"
                        ></label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <input
                          type="radio"
                          id="leftsidebarThemewinter"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.WINTER}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.WINTER
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemewinter"
                          className="gradient-winter rounded-circle wh-30"
                        ></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemeladylip"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.LADYLIP}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.LADYLIP
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemeladylip"
                          className="gradient-lady-lip rounded-circle wh-30"
                        ></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemeplumplate"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.PLUMPLATE}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.PLUMPLATE
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemeplumplate"
                          className="gradient-plum-plate rounded-circle wh-30"
                        ></label>
                        {"   "}
                        <input
                          type="radio"
                          id="leftsidebarThemestrongbliss"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.STRONGBLISS}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.STRONGBLISS
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemestrongbliss"
                          className="gradient-strong-bliss rounded-circle wh-30"
                        ></label>

                        <input
                          type="radio"
                          id="leftsidebarThemesgreatwhale"
                          name="leftsidebarTheme"
                          value={leftSideBarThemeTypes.GREATWHALE}
                          checked={
                            layout.leftSideBarTheme ===
                            leftSideBarThemeTypes.GREATWHALE
                          }
                          onChange={(e) => handleSideBarTheme(e)}
                        />
                        <label
                          htmlFor="leftsidebarThemesgreatwhale"
                          className="gradient-strong-great-whale rounded-circle wh-30"
                        ></label>
                      </Col>
                    </Row>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar imgopt-radio">
                    <span className="mb-2 d-block" id="radio-bgimg">
                      Left Sidebar Bg Image
                    </span>
                    <div className="d-flex gap-2 flex-wrap">
                      <input
                        type="radio"
                        id="leftsidebarThemebgimg1"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG1}
                        checked={
                          layout.leftSideBarThemeImage ===
                          leftBarThemeImageTypes.IMG1
                        }
                        onChange={(e) => handleSidebarThemeImage(e)}
                      />

                      <label htmlFor="leftsidebarThemebgimg1">
                        <img
                          alt="sidebar bg "
                          width="90"
                          className="themesideimage rounded"
                          src={bgimg1}
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg2"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG2}
                        checked={
                          layout.leftSideBarThemeImage ===
                          leftBarThemeImageTypes.IMG2
                        }
                        onChange={(e) => handleSidebarThemeImage(e)}
                      />

                      <label htmlFor="leftsidebarThemebgimg2">
                        <img
                          alt="sidebar bg "
                          width="90"
                          className="themesideimage rounded"
                          src={bgimg2}
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg3"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG3}
                        checked={
                          layout.leftSideBarThemeImage ===
                          leftBarThemeImageTypes.IMG3
                        }
                        onChange={(e) => handleSidebarThemeImage(e)}
                      />

                      <label htmlFor="leftsidebarThemebgimg3">
                        <img
                          alt="sidebar bg "
                          width="90"
                          className="themesideimage rounded"
                          src={bgimg3}
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemebgimg4"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.IMG4}
                        checked={
                          layout.leftSideBarThemeImage ===
                          leftBarThemeImageTypes.IMG4
                        }
                        onChange={(e) => handleSidebarThemeImage(e)}
                      />

                      <label htmlFor="leftsidebarThemebgimg4">
                        <img
                          alt="sidebar bg "
                          width="90"
                          className="themesideimage rounded"
                          src={bgimg4}
                        />
                      </label>
                      {"   "}

                      <input
                        type="radio"
                        id="leftsidebarThemenone"
                        name="leftsidebarThemeImage"
                        value={leftBarThemeImageTypes.NONE}
                        checked={
                          layout.leftSideBarThemeImage ===
                          leftBarThemeImageTypes.NONE
                        }
                        onChange={(e) => handleSidebarThemeImage(e)}
                      />
                      <label htmlFor="leftsidebarThemenone">
                        <div style={{ width: "40px", height: "80px" }}>
                          <div className="bg-light border px-2 h-100 shadow-none">
                            <div className="verticalcontent">None</div>
                          </div>
                        </div>
                      </label>
                      {"   "}
                    </div>
                  </div>

                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}
              <FormGroup>
                <span className="mb-2 d-block" id="radio-title">
                  Preloader
                </span>

                <div className="form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input theme-choice"
                    id="checkbox_1"
                    checked={layout.isPreloader}
                    onChange={handlePreloader}
                  />
                  <label className="form-check-label" htmlFor="checkbox_1">
                    Preloader
                  </label>
                </div>
              </FormGroup>
            </div>
          </div>
        </SimpleBar>
      </div>
    </React.Fragment>
  );
};
export default RightSidebar;
