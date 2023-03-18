import React from "react";
import metamask_logo from "../assets/img/wallets/metamask.svg";
import walletconnect_logo from "../assets/img/wallets/walletconnect.svg";
import coinbase_logo from "../assets/img/wallets/coinbase.png";
import {
  TextInlineMedium,
  TextLarge,
  TextSmall,
} from "./general_components/typography";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHead,
  ModalOverlay,
} from "./general_components/Modal";
import { Icon, ImgIcon } from "./general_components/Icon";
import styled from "styled-components";

export const ConnectWalletModal = ({ setConnectWalletModal }) => {
  return (
    <ModalOverlay>
      <Modal style={{maxWidth: '400px'}}>
        <ModalHead className="text-uppercase">
          <TextLarge className="mb-0 mx-auto">Connect</TextLarge>
          <ModalCloseButton
            className="bg__grey-2 text-light"
            onClick={() => setConnectWalletModal(false)}
          >
            <Icon className="fa-solid fa-xmark text-light p-0" font={14}></Icon>
          </ModalCloseButton>
        </ModalHead>
        <ModalBody>
          <TextSmall className="text-center text__grey-4">
            Choose a wallet connection method
          </TextSmall>
          <WalletOptions>
            <WalletOption>
              <ImgIcon
                src={metamask_logo}
                width={32}
                height={32}
                alt="metamask"
              />
              <TextInlineMedium>MetaMask</TextInlineMedium>
            </WalletOption>
            <WalletOption>
              <ImgIcon src={coinbase_logo} alt="coinbase" />
              <TextInlineMedium>CoinBase</TextInlineMedium>
            </WalletOption>
            <WalletOption>
              <ImgIcon src={walletconnect_logo} alt="walletconnect" />
              <TextInlineMedium>WalletConnect</TextInlineMedium>
            </WalletOption>
          </WalletOptions>
        </ModalBody>
      </Modal>
    </ModalOverlay>
  );
};
export const WalletOptions = styled.div`
  background-color: var(--color-grey-1);
  border-radius: 25px;
  margin: 16px 0px;
`;

export const WalletOption = styled.div`
  display: flex;
  padding: 16px 0px;
  border-bottom: 1px solid var(--color-dark-2);

  ${ImgIcon}{
    margin: 0px 16px;
  margin-right: 0px;
  }

  ${TextInlineMedium} {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    flex-grow: 1;
    margin-right: 32px;
    letter-spacing: 1px;
  }
`;
