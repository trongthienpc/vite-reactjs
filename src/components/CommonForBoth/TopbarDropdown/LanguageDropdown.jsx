import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import languages from "../../Common/data/languages";
import { map } from "lodash";

const LanguageDropdown = () => {
  const [menu, setMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item" tag="button">
          <img
            src={languages[selectedLang].flag}
            alt="Skote"
            height="16"
            className="me-1"
          />
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {map(Object.keys(languages), (key) => (
            <DropdownItem
              key={key}
              onClick={() => this.changeLanguageAction(key)}
              className={`notify-item ${
                selectedLang === key ? "active" : "none"
              }`}
            >
              <img
                src={languages[key].flag}
                alt="Skote"
                className="me-1"
                height="12"
              />

              <span className="align-middle">{languages[key].label}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default LanguageDropdown;
