import { combineReducers } from "@reduxjs/toolkit";
// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";

// E-commerce
import Ecommerce from "./e-commerce/reducer";

// Dashboard
import Dashboard from "./dashboard/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Ecommerce,
  Dashboard,
});
export default rootReducer;
