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
        { title: "Orders", link: "/dashboard" },
        { title: "Customers", link: "/dashboard-saas" },
        { title: "Cart", link: "/dashboard-crypto" },
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
      icon: "bx bx-bitcoin",
      title: "Crypto",
      className: "has-arrow",
      category: "PAGES",
      subItems: [
        { title: "Orders", link: "/dashboard" },
        { title: "Customers", link: "/dashboard-saas" },
        { title: "Cart", link: "/dashboard-crypto" },
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
