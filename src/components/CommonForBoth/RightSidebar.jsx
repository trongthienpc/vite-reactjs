/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "./rightbar.scss";

//constants
import {
  layoutTypes,
  layoutModeTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftBarThemeImageTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
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
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

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

  const [isPreloader, setIsPreloader] = useState(layout?.isPreloader);

  const handlePreloader = () => {
    setIsPreloader(!isPreloader);
    // dispatch(changePreloaderAction(!isPreloader));
  };

  const handleLayout = (value) => {
    console.log("value :>> ", value);
    dispatch(changeLayout(value));
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
              {/* Layouts */}
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
              <br />

              {/* Layouts Mode */}
              <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts Mode</span>
                <input
                  type="radio"
                  id="radioLight"
                  name="radioLight"
                  value={layoutModeTypes.LIGHT}
                  checked={layout?.layoutModeType === layoutModeTypes.LIGHT}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayoutMode(e.target.value));
                    }
                  }}
                />
                <label className="me-1" htmlFor="radioLight">
                  Light
                </label>
                <input
                  type="radio"
                  id="radioDark"
                  name="radioDark"
                  value={layoutModeTypes.DARK}
                  checked={layout?.layoutModeType === layoutModeTypes.DARK}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(changeLayoutMode(e.target.value));
                    }
                  }}
                />
                <label htmlFor="radioDark">Dark</label>
              </div>

              {/* Layout Width */}
              <br />
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
                  onChange={(e) => dispatch(changeLayoutWidth(e.target.value))}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value={layoutWidthTypes.BOXED}
                  checked={layout.layoutWidth === layoutWidthTypes.BOXED}
                  onChange={(e) => dispatch(changeLayoutWidth(e.target.value))}
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
                  onChange={(e) => dispatch(changeLayoutWidth(e.target.value))}
                />
                <label htmlFor="radioscrollable">Scrollable</label>
              </div>

              {/* Topbar Theme */}
              <br />
              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value={topBarThemeTypes.LIGHT}
                  checked={layout.topbarTheme === topBarThemeTypes.LIGHT}
                  onChange={(e) => dispatch(changeTopbarTheme(e.target.value))}
                />

                <label htmlFor="radioThemeLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value={topBarThemeTypes.DARK}
                  checked={layout.topbarTheme === topBarThemeTypes.DARK}
                  onChange={(e) => dispatch(changeTopbarTheme(e.target.value))}
                />
                <label htmlFor="radioThemeDark">Dark</label>
                {layout?.layoutType === "vertical" ? null : (
                  <>
                    {" "}
                    <input
                      type="radio"
                      id="radioThemeColored"
                      name="radioTheme"
                      value={topBarThemeTypes.COLORED}
                      checked={layout.topbarTheme === topBarThemeTypes.COLORED}
                      onChange={(e) =>
                        dispatch(changeTopbarTheme(e.target.value))
                      }
                    />
                    <label htmlFor="radioThemeColored">Colored</label>{" "}
                  </>
                )}
              </div>

              <br />
              {layout?.layoutType === "vertical" ? (
                <React.Fragment>
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
                      onChange={(e) =>
                        dispatch(changeSidebarType(e.target.value))
                      }
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
                      onChange={(e) =>
                        dispatch(changeSidebarType(e.target.value))
                      }
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value={leftSidebarTypes.ICON}
                      checked={layout.leftSideBarType === leftSidebarTypes.ICON}
                      onChange={(e) =>
                        dispatch(changeSidebarType(e.target.value))
                      }
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <br />
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
                        />

                        <label
                          htmlFor="leftsidebarThemelight"
                          className={
                            layout?.layoutModeType === "dark"
                              ? "bg-dark rounded-circle wh-30 me-1"
                              : "bg-light rounded-circle wh-30 me-1"
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
                        />
                        <label
                          htmlFor="leftsidebarThemedark"
                          className={
                            layout?.layoutModeType === "light"
                              ? "bg-dark rounded-circle wh-30 me-1"
                              : "bg-light rounded-circle wh-30 me-1"
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
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
                          onChange={(e) =>
                            dispatch(changeSidebarTheme(e.target.value))
                          }
                        />
                        <label
                          htmlFor="leftsidebarThemesgreatwhale"
                          className="gradient-strong-great-whale rounded-circle wh-30"
                        ></label>
                      </Col>
                    </Row>
                  </div>

                  {/* images */}
                  <br />
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
                        onChange={(e) => {
                          dispatch(changeSidebarThemeImage(e.target.value));
                        }}
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
                        onChange={(e) =>
                          dispatch(changeSidebarThemeImage(e.target.value))
                        }
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
                        onChange={(e) =>
                          dispatch(changeSidebarThemeImage(e.target.value))
                        }
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
                        onChange={(e) =>
                          dispatch(changeSidebarThemeImage(e.target.value))
                        }
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
                        onChange={(e) =>
                          dispatch(changeSidebarThemeImage(e.target.value))
                        }
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
      <div className="rightbar-overlay"></div>
    </React.Fragment>
  );
};
export default RightSidebar;
