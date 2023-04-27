import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import scss
import "./assets/scss/theme.scss";
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
import DashboardSaas from "./pages/Dashboard-saas";
import DashboardCrypto from "./pages/Dashboard-crypto";
import DashboardBlog from "./pages/Dashboard-blog";
import DashboardJob from "./pages/Dashboard-jobs";
import EcommerceProducts from "./pages/Ecommerce/EcommerceProducts";

fakeBackend();

const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  }
  return Layout;
};
const App = () => {
  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }));

  const Layout = getLayout(layoutType);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-saas" element={<DashboardSaas />} />
          <Route path="/dashboard-crypto" element={<DashboardCrypto />} />
          <Route path="/dashboard-job" element={<DashboardJob />} />
          <Route path="/blog" element={<DashboardBlog />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ecommerce-products" element={<EcommerceProducts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/page500" element={<Page500 />} />
        <Route path="/coming-soon" element={<PageComingSoon />} />
        <Route path="/faqs" element={<PageFaqs />} />
        <Route path="/maintenance" element={<PageMaintenance />} />
        <Route path="/prices" element={<PagePricing />} />
      </Routes>
    </Router>
  );
};

export default App;
