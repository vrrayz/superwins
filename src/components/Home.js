import React, { useState } from 'react'
import { ConnectWalletModal } from './ConnectWalletModal';
import { Navbar } from './Navbar'

export const Home = () => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  return (
    <>
        <Navbar setConnectWalletModal={setConnectWalletModal}/>
        {connectWalletModal && <ConnectWalletModal setConnectWalletModal={setConnectWalletModal} />}
    </>
  )
}
