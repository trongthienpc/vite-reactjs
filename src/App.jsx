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
import EcommerceProductDetail from "./pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceOrders from "./pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "./pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "./pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "./pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "./pages/Ecommerce/EcommerceShops";
import EcommerceAddProduct from "./pages/Ecommerce/EcommerceAddProduct";
import CryptoWallet from "./pages/Crypto/CryptoWallet/crypto-wallet";
import CryptoExchange from "./pages/Crypto/crypto-exchange";
import ProjectsList from "./pages/Projects/projects-list";
import ProjectsGrid from "./pages/Projects/projects-grid";
import ProjectsOverview from "./pages/Projects/ProjectOverview/projects-overview";
import ProjectsCreate from "./pages/Projects/projects-create";
import TasksList from "./pages/Tasks/tasks-list";
import TasksCreate from "./pages/Tasks/tasks-create";
import ContactsList from "./pages/Contacts/ContactList/contacts-list";
import ContactsGrid from "./pages/Contacts/contacts-grid";
import ContactsProfile from "./pages/Contacts/ContactsProfile/contacts-profile";
import DragDropTables from "./pages/Tables/DragDropTables";
import BasicTable from "./pages/Tables/BasicTables";
import DatatableTables from "./pages/Tables/DatatableTables";
import ResponsiveTables from "./pages/Tables/ResponsiveTables";
import PageBlank from "./pages/Utilities/page-starter";
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
          <Route path="/ecommerce-orders" element={<EcommerceOrders />} />
          <Route path="/ecommerce-customers" element={<EcommerceCustomers />} />
          <Route path="/ecommerce-cart" element={<EcommerceCart />} />
          <Route path="/ecommerce-checkout" element={<EcommerceCheckout />} />
          <Route path="/ecommerce-shops" element={<EcommerceShops />} />
          <Route
            path="/ecommerce-add-product"
            element={<EcommerceAddProduct />}
          />
          <Route
            path="/ecommerce-product-detail/:id"
            element={<EcommerceProductDetail />}
          />
          <Route path="/crypto-wallet" element={<CryptoWallet />} />
          <Route path="/crypto-exchange" element={<CryptoExchange />} />
          <Route path="projects-list" element={<ProjectsList />} />
          <Route path="projects-grid" element={<ProjectsGrid />} />
          <Route path="project-overview" element={<ProjectsOverview />} />
          <Route path="project-create" element={<ProjectsCreate />} />
          <Route path="tasks-list" element={<TasksList />} />
          <Route path="tasks-create" element={<TasksCreate />} />
          <Route path="contacts-grid" element={<ContactsGrid />} />
          <Route path="contacts-list" element={<ContactsList />} />
          <Route path="contacts-profile" element={<ContactsProfile />} />
          <Route path="tables-dragndrop" element={<DragDropTables />} />
          <Route path="tables-basic" element={<BasicTable />} />
          <Route path="tables-datatable" element={<DatatableTables />} />
          <Route path="tables-responsive" element={<ResponsiveTables />} />
          <Route path="blank-page" element={<PageBlank />} />
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
