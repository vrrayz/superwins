import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBarToggle } from "./MenuBarToggle";
import { MenuBar } from "./MenuBar";
import { ConnectButton } from "./ConnectButton";
import styled from "styled-components";

export const Navbar = ({ setConnectWalletModal, logo }) => {
  const [isMenuBarToggled, setIsMenuBarToggled] = useState(false);
  return (
    <header className={`menu-container ${isMenuBarToggled && `open-menu`}`}>
      <CustomNav isMenuBarToggled={isMenuBarToggled} className="navbar navbar-expand-lg bg-dark py-0">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand-i d-lg-none">
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
            <ConnectButton setConnectWalletModal={setConnectWalletModal} />
          </div>
          <MenuBarToggle
            setIsMenuBarToggled={setIsMenuBarToggled}
            isMenuBarToggled={isMenuBarToggled}
          />
        </div>
      </CustomNav>
      {isMenuBarToggled && (
        <MenuBar setConnectWalletModal={setConnectWalletModal} />
      )}
    </header>
  );
};
const CustomNav = styled.nav`
    ${props => !props.isMenuBarToggled && `backdrop-filter: blur(6px); background-color: var(--color-transparent-dark) !important;`}
  `;
