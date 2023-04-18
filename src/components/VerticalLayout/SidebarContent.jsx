import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import MetisMenu from "metismenujs";

const SidebarContent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const refDiv = useRef();

  const initMenu = () => {
    new MetisMenu("#side-menu");
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.removeEventListener("click", handleClick);
      item.addEventListener("click", handleClick);
    }
  };

  const handleClick = (event) => {
    console.log("Menu item clicked!");
    activateParentDropdown(event.currentTarget);
    // Add your logic here...
  };

  const activateParentDropdown = (item) => {
    // If the clicked item already has the active class, remove it and its parent elements' active class
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      let parent = item.parentElement;
      while (parent) {
        if (parent.classList.contains("mm-active")) {
          parent.classList.remove("mm-active");
        }
        if (parent.classList.contains("mm-show")) {
          parent.classList.remove("mm-show");
        }
        parent = parent.parentElement;
      }
      return;
    }

    // Otherwise, add the active class to the clicked item and its parent elements
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      // activateParentDropdown(parent);
      const parent2 = parent.parentElement;
      if (parent2) {
        parent2.classList.add("mm-show");
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("mm-active");
          parent3.childNodes[0].classList.add("mm-active");
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-show");
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show");
              parent5.childNodes[0].classList.add("mm-active");
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }

    scrollElement(item);
    return false;
  };

  // const initMenu = () => {
  //   new MetisMenu("#side-menu");
  //   let matchingMenuItem = null;
  //   const ul = document.getElementById("side-menu");
  //   const items = ul.getElementsByTagName("a");
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].addEventListener("click", (event) => {
  //       console.log("object :>> ");
  //     });

  //     // console.log("item[i] :>> ", items[i].pathname);
  //     // console.log("length :>> ", items.length);
  //     // if (location.pathname === items[i].pathname) {
  //     //   matchingMenuItem = items[i];
  //     //   break;
  //     // }
  //   }

  //   // if (matchingMenuItem) {
  //   //   activateParentDropdown(matchingMenuItem);
  //   // }
  // };

  useEffect(() => {
    initMenu();
  }, []);

  // const activateParentDropdown = (item) => {
  //   item.classList.add("active");
  //   const parent = item.parentElement;
  //   const parent2El = parent.childNodes[1];
  //   if (parent2El && parent2El.id !== "side-menu") {
  //     parent2El.classList.add("mm-show");
  //   }

  //   if (parent) {
  //     parent.classList.add("mm-active");
  //     // activateParentDropdown(parent);
  //     const parent2 = parent.parentElement;
  //     if (parent2) {
  //       parent2.classList.add("mm-show");
  //       const parent3 = parent2.parentElement;
  //       if (parent3) {
  //         parent3.classList.add("mm-active");
  //         parent3.childNodes[0].classList.add("mm-active");
  //         const parent4 = parent3.parentElement;
  //         if (parent4) {
  //           parent4.classList.add("mm-show");
  //           const parent5 = parent4.parentElement;
  //           if (parent5) {
  //             parent5.classList.add("mm-show");
  //             parent5.childNodes[0].classList.add("mm-active");
  //           }
  //         }
  //       }
  //     }
  //     scrollElement(item);
  //     return false;
  //   }

  //   scrollElement(item);
  //   return false;
  // };

  const scrollElement = (item) => {
    setTimeout(() => {
      if (refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop;
          if (currentPosition > window.innerHeight) {
            if (refDiv.current)
              refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300;
          }
        }
      }
    }, 300);
  };

  return (
    <>
      <SimpleBar className="h-100" ref={refDiv}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{t("Menu")}</li>
            <li>
              <Link to="/#">
                <i className="bx bx-home-circle" />
                <span className="badge rounded-pill bg-info float-end">04</span>
                <span>{t("Dashboards")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/dashboard">{t("Default")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Saas")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Crypto")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Blog")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{t("Apps")}</li>

            <li>
              <Link to="/calendar" className="">
                <i className="bx bx-calendar" />
                <span>{t("Calendar")}</span>
              </Link>
            </li>

            <li>
              <Link to="/chat" className="">
                <i className="bx bx-chat" />
                <span>{t("Chat")}</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <i className="bx bx-file" />
                <span className="badge rounded-pill bg-success float-end">
                  {t("New")}
                </span>
                <span>{t("File Manager")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-store" />
                <span>{t("Ecommerce")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Products")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Product Details")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Orders")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-bitcoin" />
                <span>{t("TEST 1")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Wallet")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Buy/Sell")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-bitcoin" />
                <span>{t("TEST")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Wallet")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Buy/Sell")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Exchange")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Lending")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Orders")}</Link>
                </li>
                <li>
                  <Link to="#">{t("KYC Application")}</Link>
                </li>
                <li>
                  <Link to="#">{t("ICO Landing")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-bitcoin" />
                <span>{t("Crypto")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Wallet")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Buy/Sell")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Exchange")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Lending")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Orders")}</Link>
                </li>
                <li>
                  <Link to="#">{t("KYC Application")}</Link>
                </li>
                <li>
                  <Link to="#">{t("ICO Landing")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </>
  );
};

export default SidebarContent;
