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

//crypto
import Crypto from "./crypto/reducer";

//projects
import projects from "./projects/reducer";

//tasks
import tasks from "./tasks/reducer";

//contacts
import contacts from "./contacts/reducer";

const rootReducer = combineReducers({
  projects,
  contacts,
  tasks,
  Layout,
  Login,
  Ecommerce,
  Dashboard,
  DashboardSaas,
  DashboardCrypto,
  DashboardBlog,
  DashboardJob,
  Crypto,
});
export default rootReducer;
