import { defaults } from "lodash";
import {
  changeLayoutAction,
  changeLayoutWidthAction,
  changeSidebarThemeAction,
  changeSidebarThemeImageAction,
  changeSidebarTypeAction,
  changeTopbarThemeAction,
  hideRightSidebarAction,
  showRightSidebarAction,
  toggleRightSidebarAction,
} from "../store/layout/_layoutSlice";

/**
 * Changes the body attribute
 */
export const changeBodyAttribute = (attribute, value) => {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
};

/**
 * Toggle the class on body
 * @param {*} cssClass
 */

export const manageBodyClass = (cssClass, action = "toggle") => {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
};

/**
 * Changes the layout type
 * @param {*} param0
 */

export const changeLayout = (payload, dispatch) => {
  try {
    dispatch(changeLayoutAction(payload));
    // console.log(payload);
    if (payload === "horizontal") {
      changeTopbarTheme("dark", dispatch);
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-sidebar-image");
      document.body.removeAttribute("data-sidebar-size");
    } else {
      changeTopbarTheme("light", dispatch);
    }
    changeBodyAttribute("data-layout", payload);
  } catch (errors) {}
};

/**
 * Changes the layout width
 * @param {*} param0
 */
export const changeLayoutWidth = (payload, dispatch) => {
  try {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    dispatch(changeLayoutWidthAction(payload));
    if (payload === "boxed") {
      changeLeftSidebarType("icon", isMobile, dispatch);
      changeBodyAttribute("data-layout-size", payload);
      changeBodyAttribute("data-layout-scrollable", false);
    } else if (payload === "scrollable") {
      changeLeftSidebarType("default", isMobile, dispatch);
      changeBodyAttribute("data-layout-scrollable", true);
    } else {
      changeLeftSidebarType("default", isMobile, dispatch);
      changeBodyAttribute("data-layout-size", payload);
      changeBodyAttribute("data-layout-scrollable", false);
    }
  } catch (error) {}
};

/**
 * Changes the left sidebar type
 * @param {*} param0
 */

export const changeLeftSidebarType = (sidebarType, isMobile, dispatch) => {
  dispatch(changeSidebarTypeAction(sidebarType));
  try {
    // console.log("sidebarType", sidebarType);
    switch (sidebarType) {
      case "compact":
        changeBodyAttribute("data-sidebar-size", "small");
        manageBodyClass("sidebar-enable", "remove");
        manageBodyClass("vertical-collpsed", "remove");
        break;
      case "icon":
        changeBodyAttribute("data-sidebar-size", "");
        manageBodyClass("data-keep-enlarged", "true");
        manageBodyClass("vertical-collpsed", "add");
        break;
      case "condensed":
        manageBodyClass("sidebar-enable", "add");
        if (window.screen.width >= 998) {
          manageBodyClass("vertical-collpsed", "remove");
          manageBodyClass("sidebar-enable", "remove");
          manageBodyClass("vertical-collpsed", "add");
          manageBodyClass("sidebar-enable", "add");
        } else {
          manageBodyClass("sidebar-enable", "add");
          manageBodyClass("vertical-collpsed", "add");
        }
        break;
      default:
        changeBodyAttribute("data-sidebar-size", "");
        manageBodyClass("sidebar-enable", "remove");
        if (!isMobile) manageBodyClass("vertical-collpsed", "remove");
        break;
    }
  } catch (error) {}
};

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
export const changeLeftSidebarTheme = (payload, dispatch) => {
  dispatch(changeSidebarThemeAction(payload));
  changeBodyAttribute("data-sidebar", payload);
};

/**
 * Toggles the rightsidebar
 */
export const toggleRightSidebar = (dispatch) => {
  manageBodyClass("right-bar-enabled");
  dispatch(toggleRightSidebarAction());
};

/**
 * Show the rightsidebar
 */
export const showRightSidebar = (dispatch) => {
  manageBodyClass("right-bar-enabled", "add");
  dispatch(showRightSidebarAction());
};

// hides the right sidebar
export const hideRightSidebar = (dispatch) => {
  manageBodyClass("right-bar-enabled", "remove");
  dispatch(hideRightSidebarAction());
};

/**
 * Changes the topbar theme
 * @param {*} param0
 */
export const changeTopbarTheme = (payload, dispatch) => {
  // console.log(payload);
  changeBodyAttribute("data-topbar", payload);
  dispatch(changeTopbarThemeAction(payload));
};

/**
 * Changes the left sidebar theme Image
 * @param {*} param0
 */

export const changeLeftSidebarThemeImage = (payload, dispatch) => {
  changeBodyAttribute("data-sidebar-image", payload);
  dispatch(changeSidebarThemeImageAction(payload));
};
