import React from "react";
import styled from "styled-components";
import { Button } from "../general_components/Button";
import { CustomCard } from "../general_components/CustomCard";
import { SectionWrapper } from "../general_components/SectionWrapper";

export const EndingSoon = () => {
  return (
    <SectionWrapper id="endingSoon">
      <CustomCard className="py-3 px-1">
        <CardHead>Ending Soon</CardHead>
        <CustomGrid>
          <CompetitionCard>
            <CardImage
              alt="cardInfo"
              src="https://i.seadn.io/gae/ZxISqq2miZ2sg6J3b7Pq5pBGUjKrkFNgBIC6jXDFnEoi9S7D72m6F37dP7WoCEWDVAsAdtIH2HUmSsaKFetySd9_0bUlxy4BrB7rtIM?fit=max&w=350&auto=format"
            />
            <CardBody>
              <CompetitionHeading>
                a KID called BEAST{" "}
                <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
              </CompetitionHeading>
              <Value>$3,247</Value>
              <CustomButton className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                Enter now
              </CustomButton>
              <SubText>
                Join <span>203</span> superwallers
              </SubText>
            </CardBody>
          </CompetitionCard>
          <CompetitionCard>
            <CardImage
              alt="cardInfo"
              src="https://i.seadn.io/gae/ZxISqq2miZ2sg6J3b7Pq5pBGUjKrkFNgBIC6jXDFnEoi9S7D72m6F37dP7WoCEWDVAsAdtIH2HUmSsaKFetySd9_0bUlxy4BrB7rtIM?fit=max&w=350&auto=format"
            />
            <CardBody>
              <CompetitionHeading>
                a KID called BEAST{" "}
                <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
              </CompetitionHeading>
              <Value>$3,247</Value>
              <CustomButton className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                Enter now
              </CustomButton>
              <SubText>
                Join <span>203</span> superwallers
              </SubText>
            </CardBody>
          </CompetitionCard>
          <CompetitionCard>
            <CardImage
              alt="cardInfo"
              src="https://i.seadn.io/gae/ZxISqq2miZ2sg6J3b7Pq5pBGUjKrkFNgBIC6jXDFnEoi9S7D72m6F37dP7WoCEWDVAsAdtIH2HUmSsaKFetySd9_0bUlxy4BrB7rtIM?fit=max&w=350&auto=format"
            />
            <CardBody>
              <CompetitionHeading>
                a KID called BEAST{" "}
                <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
              </CompetitionHeading>
              <Value>$3,247</Value>
              <CustomButton className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                Enter now
              </CustomButton>
              <SubText>
                Join <span>203</span> superwallers
              </SubText>
            </CardBody>
          </CompetitionCard>
        </CustomGrid>
      </CustomCard>
    </SectionWrapper>
  );
};
const CardHead = styled.div`
  padding-bottom: 16px;
  padding-left: 16px;
  border-bottom: 1px solid var(--color-grey-2);
  margin-bottom: 16px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;
const CompetitionCard = styled.div`
  background-color: var(--color-primary-darkgrey-1);
  // padding: 8px 16px;
  text-align: center;
  border-radius: 12px;
  margin: 0px 4px;
  &:nth-child(3) {
    display: none;
  }
  @media (min-width: 1024px) {
    &:nth-child(3) {
      display: block;
    }
  }
`;
const CardImage = styled.img`
  object-fit: cover;
  height: 150px;
  width: 100%;
  border-radius: 6px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  // margin-bottom: 16px;
`;
const CardBody = styled.div`
  padding: 8px;
`;
const CompetitionHeading = styled.h6`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;
const Value = styled.h5`
  font-weight: bolder;
`;
const SubText = styled.span`
  font-size: 0.75rem;
`;
const CustomButton = styled(Button)`
  margin-bottom: 0px !important;
`;
const CustomGrid = styled.div`
  display: grid;
  padding: 0 0.4rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.7rem;
  row-gap: 0.7rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
