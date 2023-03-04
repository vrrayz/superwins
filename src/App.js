import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ConnectWalletModal } from "./components/ConnectWalletModal";
import { Home } from "./components/Home/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

import "./App.css";
import logo from "../src/assets/img/logo.png";
import { Footer } from "./components/Footer/Footer";
import { Competition } from "./components/Competition/Competition";
import { LiveChat } from "./components/Home/LiveChat";
import { Signup } from "./components/Auth/Signup";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [isChatToggled, setIsChatToggled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Routes>
            <Route path="/signup/register" element={<Signup />} />
          </Routes>
          <Navbar setConnectWalletModal={setConnectWalletModal} logo={logo} />
          {connectWalletModal && (
            <ConnectWalletModal setConnectWalletModal={setConnectWalletModal} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competition/:id" element={<Competition />} />
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
          <Footer logo={logo} />
        </>
      )}
    </Router>
  );
}
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
export default App;
