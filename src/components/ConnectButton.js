import React from "react";
import { Button } from "./general_components/Button";

export const ConnectButton = ({setConnectWalletModal}) => {
  return (
    <Button className="menubar-item btn btn-primary-transparent" onClick={() => setConnectWalletModal(true)}>Connect wallet</Button>
  );
};
