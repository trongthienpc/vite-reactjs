import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";
<<<<<<< HEAD
// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"
=======
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import UserProfile from "./pages/Authentication/UserProfile";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Page404 from "./pages/Utilities/page-404";
import Page500 from "./pages/Utilities/page-500";
import PageComingSoon from "./pages/Utilities/pages-comingsoon";
import PageFaqs from "./pages/Utilities/pages-faqs";
import PageMaintenance from "./pages/Utilities/pages-maintenance";
import PagePricing from "./pages/Utilities/page-pricing";
import Dashboard from "./pages/Dashboard";
import VerticalLayout from "./components/VerticalLayout/Index";
import HorizontalLayout from "./components/HorizontalLayout/index";
import { layoutTypes } from "./constants/layout";
import { useSelector } from "react-redux";
import fakeBackend from "./helpers/AuthType/fakeBackend";

fakeBackend();
>>>>>>> pc-work

// Import fackbackend Configuration file
import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// Activating fake firebase
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_APIKEY,
//   authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
//   databaseURL: import.meta.env.VITE_APP_DATABASEURL,
//   projectId: import.meta.env.VITE_APP_PROJECTID,
//   storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APP_APPID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getLayout = this.getLayout.bind(this);
  }

  /**
   * Returns the layout
   */
  getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (this.props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  render() {
    const Layout = this.getLayout();

    return (
      <React.Fragment>
        <Router>
          <Routes>
            {publicRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={
                  <AppRoute
                    layout={NonAuthLayout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={false}
                  />
                }
                key={idx}
              />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={
                  <AppRoute
                    layout={Layout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={true}
                  />
                }
                key={idx}
              />
            ))}
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

App.propTypes = {
  layout: PropTypes.object,
};

export default connect(mapStateToProps, null)(App);
