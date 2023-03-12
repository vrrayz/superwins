import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { ConnectWalletModal } from "./ConnectWalletModal";
import { LiveChat } from "./Home/LiveChat";
import logo from "../assets/img/logo.png";
import { Competition } from "./Competition/Competition";
import { Home } from "./Home/Home";
import { User } from "./User/User";

export const MainRoutes = () => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [isChatToggled, setIsChatToggled] = useState(false);
  return (
    <>
      <Navbar setConnectWalletModal={setConnectWalletModal} logo={logo} />
      {connectWalletModal && (
        <ConnectWalletModal setConnectWalletModal={setConnectWalletModal} />
      )}
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="competition/:id" element={<Competition />} />
        <Route path="sw/:username" element={<User />} />
      </Routes>

      <LiveChat isChatToggled={isChatToggled} />
      <ToggleChatButton
        onClick={() => setIsChatToggled(!isChatToggled)}
        isChatToggled={isChatToggled}
      >
        {isChatToggled ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-comment-dots"></i>
        )}
      </ToggleChatButton>
    </>
  );
};
const ToggleChatButton = styled.button`
  position: fixed;
  bottom: 12px;
  right: 12px;
  font-size: ${({ isChatToggled }) => (isChatToggled ? `18px` : `28px`)};
  width: ${({ isChatToggled }) => (isChatToggled ? `45px` : `70px`)};
  height: ${({ isChatToggled }) => (isChatToggled ? `45px` : `70px`)};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 3px 12px #000;
  background-color: ${({ isChatToggled }) =>
    isChatToggled ? `var(--color-dark-2)` : `var(--color-primary-red)`};
  color: var(--color-light-1);
  z-index: 10000;
  transition: 100ms;
  transition-timing-function: ease-in-out;
  @media (min-width: 1200px) {
    display: none;
  }
`;
