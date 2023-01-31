import React from 'react'
import metamask_logo from '../assets/img/wallets/metamask.svg'
import walletconnect_logo from '../assets/img/wallets/walletconnect.svg'
import coinbase_logo from '../assets/img/wallets/coinbase.png'
import closeIcon from '../assets/img/icons/close.svg'

export const ConnectWalletModal = () => {
  return (
    <div className='modal-overlay'>
        <div className="custom-modal">
            <div className="modal-head">
                <h1>Connect</h1>
                <button className='btn custom-btn-close text-light'>
                    <img src={closeIcon} alt="close" />
                </button>
            </div>
            <div className="modal-body">
                <p className="modal-desc">
                    Choose a wallet connection method
                </p>
                <div className="wallet-options">
                    <div className="wallet-option">
                        <img src={metamask_logo} alt="metamask" />
                        <span>MetaMask</span>
                    </div>
                    <div className="wallet-option">
                        <img src={coinbase_logo} alt="coinbase" />
                        <span>CoinBase</span>
                    </div>
                    <div className="wallet-option">
                        <img src={walletconnect_logo} alt="walletconnect" />
                        <span>WalletConnect</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
