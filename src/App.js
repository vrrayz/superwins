import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ConnectWalletModal } from "./components/ConnectWalletModal";
import { Home } from "./components/Home/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

import "./App.css";
import logo from "../src/assets/img/logo.png";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [connectWalletModal, setConnectWalletModal] = useState(false);

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
          <Navbar setConnectWalletModal={setConnectWalletModal} logo={logo} />
          {connectWalletModal && (
            <ConnectWalletModal setConnectWalletModal={setConnectWalletModal} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer logo={logo} />
        </>
      )}
    </Router>
  );
}

export default App;
