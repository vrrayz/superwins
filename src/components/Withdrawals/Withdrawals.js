import React from "react";
import { Icon, ImgIcon } from "../general_components/Icon";
import {
  AppendButton,
  Input,
  InputGroupAppend,
} from "../general_components/Input";
import {
  CenteredSectionWrapper,
  SectionWrapper,
} from "../general_components/SectionWrapper";
import {
  TextExtraSmall,
  TextInlineLarge,
  TextInlineMedium,
  TextLarge,
  TextMedium,
  TextSmall,
} from "../general_components/typography";
import styled from "styled-components";
import { Button } from "../general_components/Button";
import checkmark from "../../assets/img/icons/icons8-checkmark-green.svg";
import { Divider } from "../general_components/Divider";

export const Withdrawals = () => {
  return (
    <CenteredSectionWrapper style={{gridTemplateRows: "80px 2fr"}}>
      <SectionWrapper></SectionWrapper>
      <SectionWrapper className="text__light-1 text-uppercase text-center px-0">
        <TextLarge>
          <Icon className="fa-brands fa-ethereum glow" font={20}></Icon>{" "}
          withdraw{" "}
          <TextInlineLarge className="text__primary-red">your</TextInlineLarge>{" "}
          funds
        </TextLarge>
        <TextMedium>Balance: 0 eth</TextMedium>
        <InputGroupAppend className="mb-3">
          <Input placeholder="Enter amount" />
          <AppendButton>
            <i className="fa-solid fa-xmark"></i>
          </AppendButton>
        </InputGroupAppend>
        <ButtonGrid className="mb-3">
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
          <Button className="btn-primary-transparent">0.1</Button>
        </ButtonGrid>
        <Button className="btn-primary d-block w-100 mb-3" disabled>
          Instant Withdraw
        </Button>
        <TextExtraSmall className="text__grey-2">
          eth address: 0x997f64a8db6c58877432cfc3b8577ddf9b3a9cb9
        </TextExtraSmall>
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
        <TextSmall>
          0.005 ETH Gas Fee applies. Min withdrwawal 0.025 ETH. Max withdrawal 3
          ETH in a 24 hour period.
        </TextSmall>
        <Divider />
        <TextMedium className="text__grey-2 my-3" style={{textTransform: 'none'}}>You haven't made any withdrawals yet</TextMedium>
      </SectionWrapper>
    </CenteredSectionWrapper>
  );
};
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2px;

  ${Button} {
    border-radius: 12px;
    padding: 4px 12px;
    margin: auto;
    background-color: var(--color-primary-darkgrey-1);
    border-width: 2px;
  }
  ${Button}:disabled {
    border-radius: 12px;
    padding: 4px 12px;
    margin: auto;
    background-color: var(--color-primary-darkgrey-2) !important;
    border-color: var(--color-primary-darkgrey-2) !important;
  }
`;
