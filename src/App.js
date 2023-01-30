import React, { useContext, useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  },[])
  return (
    <>
    <LoadingScreen />
    </>
  );
}

export default App;
