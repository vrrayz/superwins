import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './components/Home';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  },[])
  return (
    <Router>
    {isLoading ? <LoadingScreen /> : (
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    )}
    </Router>
  );
}

export default App;
