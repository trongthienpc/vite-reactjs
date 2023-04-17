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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerticalLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
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
