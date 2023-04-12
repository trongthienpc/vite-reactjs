import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import MetisMenu from "metismenujs";

const SidebarContent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const refDiv = useRef(null);

  const initMenu = () => {
    new MetisMenu("#side-menu");
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    for (let i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  };

  useEffect(() => {
    initMenu();
  }, []);

  const activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
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
              <Link to="#" className="">
                <i className="bx bx-calendar" />
                <span>{t("Calendar")}</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="">
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
                <li>
                  <Link to="#">{t("Customers")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Cart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Checkout")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Shops")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Add Product")}</Link>
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

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-envelope"></i>
                <span>{t("Email")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Inbox")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Read Email")} </Link>
                </li>
                <li>
                  <Link to="/#">
                    <span
                      className="badge rounded-pill badge-soft-success float-end"
                      key="t-new"
                    >
                      {t("New")}
                    </span>
                    <span key="t-email-templates">{t("Templates")}</span>
                  </Link>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <Link to="#">{t("Basic Action")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("Alert Email")} </Link>
                    </li>
                    <li>
                      <Link to="#">{t("Billing Email")} </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-receipt" />
                <span>{t("Invoices")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Invoice List")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Invoice Detail")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-briefcase-alt-2" />
                <span>{t("Projects")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Projects Grid")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Projects List")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Project Overview")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Create New")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-task" />
                <span>{t("Tasks")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Task List")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Kanban Board")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Create Task")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bxs-user-detail" />
                <span>{t("Contacts")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("User Grid")}</Link>
                </li>
                <li>
                  <Link to="#">{t("User List")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Profile")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#">
                <span className="badge rounded-pill bg-success float-end">
                  {t("New")}
                </span>
                <i className="bx bxs-detail" />

                <span>{t("Blog")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Blog List")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Blog Grid")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Blog Details")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Pages</li>
            <li>
              <Link to="/#">
                <i className="bx bx-user-circle" />
                <span className="badge rounded-pill bg-success float-end">
                  {t("New")}
                </span>
                <span>{t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{t("Login")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Login 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Register")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Register 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Recover Password")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Recover Password 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Lock Screen")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Lock Screen 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Confirm Mail")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Confirm Mail 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Email Verification")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Email Verification 2")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Two Step Verification")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Two Step Verification 2")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-file" />
                <span>{t("Utility")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="#">{t("FAQs")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Error 500")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{t("Components")}</li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-tone" />
                <span>{t("UI Elements")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Alerts")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Buttons")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Cards")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Carousel")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Dropdowns")}</Link>
                </li>
                <li>
                  <Link to="#">{t("OffCanvas")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Drawer")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Grid")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Images")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Lightbox")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Modals")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Range Slider")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Session Timeout")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Progress Bars")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Placeholders")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Sweet-Alert")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Tabs & Accordions")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Typography")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Toasts")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Video")}</Link>
                </li>
                <li>
                  <Link to="#">{t("General")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Colors")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Rating")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Notifications")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Breadcrumb")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#">
                <i className="bx bxs-eraser" />
                <span className="badge rounded-pill bg-danger float-end">
                  10
                </span>
                <span>{t("Forms")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Form Elements")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Layouts")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Validation")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Advanced")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Editors")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form File Upload")} </Link>
                </li>
                <li>
                  <Link to="#">{t("Form Xeditable")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Repeater")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Wizard")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Form Mask")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Transfer List")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-list-ul" />
                <span>{t("Tables")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Basic Tables")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Data Tables")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Responsive Table")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Editable Table")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Drag & Drop Table")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bxs-bar-chart-alt-2" />
                <span>{t("Charts")}</span>
              </Link>

              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Apex charts")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Chartist Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Chartjs Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("E Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Sparkline Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Knob Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Re Chart")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-aperture" />
                <span>{t("Icons")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Boxicons")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Material Design")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Dripicons")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Font awesome")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-map" />
                <span>{t("Maps")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{t("Google Maps")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Vector Maps")}</Link>
                </li>
                <li>
                  <Link to="#">{t("Leaflet Maps")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-share-alt" />
                <span>{t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to="#">{t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="#" className="has-arrow">
                    {t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to="#">{t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("Level 2.2")}</Link>
                    </li>
                  </ul>
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
