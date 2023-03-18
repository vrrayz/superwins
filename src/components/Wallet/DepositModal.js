import React from "react";

import checkmark from "../../assets/img/icons/icons8-checkmark-green.svg";

import {
  TextInlineMedium,
  TextLarge,
  TextMedium,
  TextSmall,
} from "../general_components/typography";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHead,
  ModalOverlay,
} from "../general_components/Modal";
import { Icon, ImgIcon } from "../general_components/Icon";
import { Button, ButtonGrid } from "../general_components/Button";
import { Input } from "../general_components/Input";
import { SectionWrapper } from "../general_components/SectionWrapper";

export const DepositModal = ({ toggleDepositModal }) => {
  return (
    <ModalOverlay style={{backgroundColor: 'rgba(20, 7, 7, 0.9)'}}>
      <Modal style={{ maxWidth: "400px" }}>
        <ModalHead className="text-uppercase">
          <TextLarge className="mb-0 mx-auto"></TextLarge>
          <ModalCloseButton
            className="bg__grey-2 text-light"
            onClick={() => toggleDepositModal(false)}
          >
            <Icon className="fa-solid fa-xmark text-light p-0" font={14}></Icon>
          </ModalCloseButton>
        </ModalHead>
        <ModalBody className="text-uppercase text-center">
          <TextLarge className="mb-1">
            <Icon className="fa-brands fa-ethereum glow" font={20}></Icon>Make a
            deposit
          </TextLarge>
          <TextMedium className="text__primary-red">
            Add eth to your superwall balance
          </TextMedium>
          <Input placeholder="Enter amount" className="mb-3" />
          <ButtonGrid className="mb-3" repeat={5}>
            <Button className="btn-primary-transparent" disabled>
              0.1
            </Button>
            <Button className="btn-primary-transparent" disabled>
              0.1
            </Button>
            <Button className="btn-primary-transparent" disabled>
              0.1
            </Button>
            <Button className="btn-primary-transparent">0.1</Button>
            <Button className="btn-primary-transparent">0.1</Button>
          </ButtonGrid>
          <Button className="btn-primary d-block w-100 mb-3" disabled>
            Instant Withdraw
          </Button>
          <ImgIcon src={checkmark} width={36} height={36} />
        <SectionWrapper style={{ color: "#bf66c2" }}>
          <TextMedium className="fw-bold mb-0">
            Zero Friction Guarantee
          </TextMedium>
          <TextMedium className="mb-3">
            {" "}
            Your withdrawals are{" "}
            <TextInlineMedium className="fw-bold">instant</TextInlineMedium> up
            to 3 ETH in 24H
          </TextMedium>
        </SectionWrapper>
        <TextSmall className="mb-0">
          Withdrawals must return funds to the same wallet as deposit
        </TextSmall>
        </ModalBody>
      </Modal>
    </ModalOverlay>
  );
};
