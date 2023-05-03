import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import MetisMenu from "metismenujs";

const SidebarContent = () => {
  const ref = useRef();
  const { t } = useTranslation();

  const menuItems = [
    {
      icon: "bx bx-home-circle",
      title: "Dashboards",
      className: "has-arrow",
      category: "MENU",
      subItems: [
        { title: "Default", link: "/dashboard" },
        { title: "Saas", link: "/dashboard-saas" },
        { title: "Crypto", link: "/dashboard-crypto" },
        { title: "Blog", link: "/blog" },
        {
          title: (
            <>
              <span className="badge rounded-pill text-bg-success float-end">
                New
              </span>
              Job
            </>
          ),
          link: "/dashboard-job",
        },
      ],
    },
    {
      icon: "bx bx-store",
      title: "Ecommerce",
      className: "has-arrow",
      category: "APPS",
      subItems: [
        { title: "Products", link: "/ecommerce-products" },
        { title: "Product Detail", link: "/ecommerce-product-detail/1" },
        { title: "Orders", link: "/ecommerce-orders" },
        { title: "Customers", link: "/ecommerce-customers" },
        { title: "Cart", link: "/ecommerce-cart" },
        { title: "Checkout", link: "/ecommerce-checkout" },
        { title: "Shops", link: "/ecommerce-shops" },
        { title: "Add Product", link: "/ecommerce-add-product" },
      ],
    },

    {
      icon: "bx bx-bitcoin",
      title: "Crypto",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Wallet", link: "/crypto-wallet" },
        { title: "Buy/Sell", link: "/crypto-buy-sell" },
        { title: "Exchange", link: "/crypto-exchange" },
        { title: "Lending", link: "/crypto-lending" },
        { title: "Orders", link: "/crypto-orders" },
        { title: "KYC Application", link: "/crypto-kyc-application" },
        { title: "ICO Landing", link: "/crypto-ico-landing" },
      ],
    },
    {
      icon: "bx bx-briefcase-alt-2",
      title: "Projects",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Project Grid", link: "/project-grid" },
        { title: "Project List", link: "/project-list" },
        { title: "Project Overview", link: "/project-overview" },
        { title: "Create New", link: "/project-create" },
      ],
    },

    {
      icon: "bx bx-receipt",
      title: "Invoices",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Invoices List", link: "/invoices-list" },
        { title: "Invoices Detail", link: "/invoices-detail" },
      ],
    },

    {
      icon: "bx bx-task",
      title: "Tasks",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Task List", link: "/tasks-list" },
        { title: "Create Task", link: "/tasks-create" },
      ],
    },

    {
      icon: "bx bxs-user-detail",
      title: "Contacts",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "User Grid", link: "/contacts-grid" },
        { title: "User List", link: "/contacts-list" },
        { title: "Profile", link: "/contacts-profile" },
      ],
    },

    {
      icon: "bx bx-list-ul",
      title: "Tables",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Datatable", link: "/tables-datatable" },
        { title: "Responsive Table", link: "/tables-responsive" },
        { title: "Drag & Drop Table", link: "/tables-dragndrop" },
      ],
    },
    {
      icon: "bx bx-file",
      title: "Utilities",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Blank Page", link: "/blank-page" },
        { title: "Datatable", link: "/tables-datatable" },
        { title: "Responsive Table", link: "/tables-responsive" },
        { title: "Drag & Drop Table", link: "/tables-dragndrop" },
      ],
    },
    // add more menu items here
  ];

  const categories = [...new Set(menuItems.map((item) => item.category))];

  const [activeMenu, setActiveMenu] = useState(null);
  const handleClick = (title) => {
    if (activeMenu === title) {
      setActiveMenu(null);
    } else {
      setActiveMenu(title);
    }
  };

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {categories.map((category, index) => (
              <React.Fragment key={`category-${index}`}>
                <li className="menu-title">{category}</li>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        activeMenu === item?.title ? "mm-active" : ""
                      } `}
                    >
                      <Link
                        to="/#"
                        className={item?.className}
                        onClick={() => {
                          handleClick(item?.title);
                        }}
                      >
                        <i className={item?.icon}></i>
                        <span>{t(item?.title)}</span>
                      </Link>
                      <ul
                        style={{ transition: "all 0.5s ease" }}
                        className={`${
                          activeMenu === item?.title
                            ? "sub-menu mm-collapse mm-show"
                            : "sub-menu mm-collapse"
                        } `}
                      >
                        {item?.subItems?.map((subItem, index) => (
                          <li key={index}>
                            <Link to={subItem.link}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default SidebarContent;
