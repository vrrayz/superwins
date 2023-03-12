import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoadingScreen } from "./components/LoadingScreen";

import "./App.css";
import logo from "../src/assets/img/logo.png";
import { Footer } from "./components/Footer/Footer";

import { Signup } from "./components/Auth/Signup";
import { MainRoutes } from "./components/MainRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
            <Route path="/*" element={<MainRoutes />} />
            <Route path="/signup/register" element={<Signup />} />
          </Routes>
          <Footer logo={logo} />
        </>
      )}
    </Router>
  );
}

export default App;
