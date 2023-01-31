import React, { useState } from 'react'
import { ConnectWalletModal } from './ConnectWalletModal';
import { Navbar } from './Navbar'

export const Home = () => {
  const [showConnectModal, setShowConnectModal] = useState(true);
  return (
    <>
        <Navbar />
        {showConnectModal && <ConnectWalletModal />}
    </>
  )
}
