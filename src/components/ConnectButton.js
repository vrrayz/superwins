import React from "react";

export const ConnectButton = ({setConnectWalletModal}) => {
  return (
    <button className="menubar-item btn btn-primary" onClick={() => setConnectWalletModal(true)}>Connect wallet</button>
  );
};
