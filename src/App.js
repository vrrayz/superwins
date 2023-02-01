import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ConnectWalletModal } from "./components/ConnectWalletModal";
import { Home } from "./components/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

import "./App.css";

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
          <Navbar setConnectWalletModal={setConnectWalletModal} />
          {connectWalletModal && (
            <ConnectWalletModal setConnectWalletModal={setConnectWalletModal} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
