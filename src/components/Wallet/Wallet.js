import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../general_components/Button";
import { Icon } from "../general_components/Icon";
import {
  CenteredSectionWrapper,
  SectionWrapper,
} from "../general_components/SectionWrapper";
import {
  TextInlineMedium,
  TextLarge,
  TextMedium,
} from "../general_components/typography";
import { DepositModal } from "./DepositModal";

export const Wallet = () => {
    const [isDepositModalToggled, setIsDepositModalToggled] = useState(false);
    const navigate = useNavigate();
  return (
    <>
    {isDepositModalToggled && <DepositModal toggleDepositModal={setIsDepositModalToggled} />}
    <CenteredSectionWrapper
      style={{ gridTemplateRows: "80px 2fr", maxWidth: "896px" }}
    >
      <SectionWrapper></SectionWrapper>
      <SectionWrapper className="text__light-1 text-uppercase text-center px-0">
        <TextLarge>wallet</TextLarge>
        <BalanceSection>
          <TextLarge>
            <Icon className="fa-brands fa-ethereum glow" font={20}></Icon> 0 eth
          </TextLarge>
          <SectionWrapper>
            <Button className={`text-center py-2 px-3 me-1 btn-primary`} onClick={() => setIsDepositModalToggled(true)}>
              <TextInlineMedium>Deposit</TextInlineMedium>
            </Button>
            <Button className={`text-center py-2 px-3 ms-1 btn-primary`} onClick={() => navigate(`/withdrawals`)}>
              <TextInlineMedium>Withdraw</TextInlineMedium>
            </Button>
          </SectionWrapper>
        </BalanceSection>
        <TextMedium className="text__grey-2 my-3" style={{textTransform: 'none'}}>You haven't made any withdrawals yet</TextMedium>
      </SectionWrapper>
    </CenteredSectionWrapper>
    </>
    
  );
};
const BalanceSection = styled.div`
  border-top: 1px solid var(--color-grey-1);
  border-bottom: 1px solid var(--color-grey-1);
  padding: 20px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
  }
`;
