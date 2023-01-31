import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBarToggle } from "./MenuBarToggle";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  const [isMenuBarToggled, setIsMenuBarToggled] = useState(false);

  return (
    <header className={`menu-container ${isMenuBarToggled && `open-menu`}`}>
      <nav className="navbar navbar-expand-lg bg-dark py-0">
        <div className="container-fluid">
          <i className="fa-brands fa-discord text-light"></i>
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="collapse navbar-collapse custom">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
            </ul>
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
const MenuBar = () => {
  return (
    <section className="menubar">
      <div></div>
      <div className="menu-list">
        <Link to={"/"} className="menubar-item">
          Corporate
        </Link>
        <Link to={"/"} className="menubar-item">
          About
        </Link>
        <Link to={"/"} className="menubar-item">
          Privacy
        </Link>
        <Link to={"/"} className="menubar-item">
          Terms
        </Link>
      </div>
      <div></div>
    </section>
  );
};
