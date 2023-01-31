import React from 'react'
import { Link } from 'react-router-dom';
import { ConnectButton } from './ConnectButton';

export const MenuBar = ({setConnectWalletModal}) => {
    return (
      <section className="menubar">
        <div className="menu-list top-section">
        <ConnectButton setConnectWalletModal={setConnectWalletModal}/>
          <button className="menubar-item text-secondary btn btn-transparent">
            Why Connect?
          </button>
        </div>
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
        <div className="menu-footer">
          <Link to={"/"} className="item">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to={"/"} className="item">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to={"/"} className="item">
            <i className="fa-brands fa-discord"></i>
          </Link>
        </div>
      </section>
    );
  };
