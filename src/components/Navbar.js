import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBarToggle } from "./MenuBarToggle";
import { MenuBar } from "./MenuBar";
import { ConnectButton } from "./ConnectButton";

import logo from "../assets/img/logo.png";

export const Navbar = ({setConnectWalletModal}) => {
  const [isMenuBarToggled, setIsMenuBarToggled] = useState(false);

  return (
    <header className={`menu-container ${isMenuBarToggled && `open-menu`}`}>
      <nav className="navbar navbar-expand-lg bg-dark py-0">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand-i d-lg-none">
          <i className="fa-brands fa-discord glow"></i>
          </Link>
          <div className="d-flex">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <Link to={"/"} className="d-none d-lg-block my-auto brand-icon">
              <i className="fa-brands fa-discord glow"></i>
            </Link>
          </div>
          <div className="collapse navbar-collapse custom">
            <ConnectButton setConnectWalletModal={setConnectWalletModal}/>
          </div>
          <MenuBarToggle
            setIsMenuBarToggled={setIsMenuBarToggled}
            isMenuBarToggled={isMenuBarToggled}
          />
        </div>
      </nav>
      {isMenuBarToggled && <MenuBar setConnectWalletModal={setConnectWalletModal} />}
    </header>
  );
};
