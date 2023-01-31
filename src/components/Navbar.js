import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBarToggle } from "./MenuBarToggle";
import { MenuBar } from "./MenuBar";

import logo from "../assets/img/logo.png";

export const Navbar = () => {
  const [isMenuBarToggled, setIsMenuBarToggled] = useState(false);

  return (
    <header className={`menu-container ${isMenuBarToggled && `open-menu`}`}>
      <nav className="navbar navbar-expand-lg bg-dark py-0">
        <div className="container-fluid">
          <i className="fa-brands fa-discord text-light d-lg-none"></i>
          <div className="d-flex">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <Link to={"/"} className="d-none d-lg-block my-auto brand-icon">
              <i className="fa-brands fa-discord text-light"></i>
            </Link>
          </div>
          <div className="collapse navbar-collapse custom">
          <button className="menubar-item btn btn-primary">Connect wallet</button>
          </div>
          <MenuBarToggle
            setIsMenuBarToggled={setIsMenuBarToggled}
            isMenuBarToggled={isMenuBarToggled}
          />
        </div>
      </nav>
      {isMenuBarToggled && <MenuBar />}
    </header>
  );
};
