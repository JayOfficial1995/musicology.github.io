import React, { useState } from "react";
import classNames from "classnames";

import { navData } from "../../mockData/navbarData";
import { SearchIcon } from "../../svg/index";

import { MenubarStyle, NavbarStyle } from "./Navbar.style";

export const Menubar = ({ menubarActive }) => {
  console.log(menubarActive);
  return (
    <MenubarStyle menuActive={menubarActive}>
      {navData.map((navItem) => {
        const { path, menuItem } = navItem;
        return (
          <li className="menu-item">
            <a href={path} className="menu-item-link">
              {menuItem}
            </a>
          </li>
        );
      })}
    </MenubarStyle>
  );
};

function Navbar() {
  const siteLogo = "/images/site-logo.png";
  const [isSearchbarToggle, setSearchbarToggle] = useState(true);
  const [isToggleActive, setToggleActive] = useState(false);

  const ToggleSearch = () => {
    setSearchbarToggle(!isSearchbarToggle);
  };

  const ToggleActive = () => {
    setToggleActive(!isToggleActive);
  };

  return (
    <NavbarStyle toggleSearchBar={isSearchbarToggle}>
      <nav className="navbar-container">
        <a href="#" className="site-logo-wrapper">
          <img src={siteLogo} alt="Musicology Logo" className="site-logo" />
        </a>

        <Menubar menubarActive={isToggleActive} />

        <article className="icons-wrapper">
          <article
            className={classNames({
              "menu-icon": true,
              "toggle-icon": isToggleActive,
            })}
            onClick={ToggleActive}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </article>

          <button className="search-icon" onClick={ToggleSearch}>
            <SearchIcon />
          </button>
        </article>
        <input
          type="text"
          placeholder="Search For Products..."
          className="search-bar"
        />
      </nav>
    </NavbarStyle>
  );
}

export default Navbar;
