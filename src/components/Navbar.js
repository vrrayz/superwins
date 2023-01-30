import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid d-flex justify-content-between text-light">
        <i className="fa-brands fa-discord text-light"></i>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
