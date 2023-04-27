import { combineReducers } from "@reduxjs/toolkit";
// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";

// E-commerce
import Ecommerce from "./e-commerce/reducer";

// Dashboard
import Dashboard from "./dashboard/reducer";

// Dashboard saas
import DashboardSaas from "./dashboard-saas/reducer";

// Dashboard crypto
import DashboardCrypto from "./dashboard-crypto/reducer";

// Dashboard blog
import DashboardBlog from "./dashboard-blog/reducer";

// Dashboard jobs
import DashboardJob from "./dashboard-jobs/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Ecommerce,
  Dashboard,
  DashboardSaas,
  DashboardCrypto,
  DashboardBlog,
  DashboardJob,
});
export default rootReducer;
