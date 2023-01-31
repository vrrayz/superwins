import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  
  return (
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
        <div className="sidebar-toggle d-lg-none" onClick={() => setIsSidebarToggled(!isSidebarToggled)}>
          <div className="d-flex justify-content-center flex-column">
            <div className="toggle-container">
              <span className={isSidebarToggled ? "toggle-lines close":"toggle-lines"}></span>
              <span className={isSidebarToggled ? "toggle-lines close":"toggle-lines"}></span>
              <span className={isSidebarToggled ? "toggle-lines close":"toggle-lines"}></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
