import React from "react";
import { Link, useParams } from "react-router-dom";
import { InfoSection } from "../InfoSection";
import { MainContainer } from "../MainContainer";

import { nftCompetitionData } from "../../data/nftCompetitionData";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { SectionWrapper } from "../general_components/SectionWrapper";

export const Competition = () => {
  const { id } = useParams();
  const [competitionInfo, setCompetitionInfo] = useState({});
  useEffect(() => {
    setCompetitionInfo(
      nftCompetitionData.find((comp) => comp.id === parseInt(id))
    );
  }, []);
  return (
    <MainContainer>
      <div>
        <InfoSection />
        <SectionWrapper id="competitionDetails">
          <CompetitionImage
            src={competitionInfo.imgSrc}
            alt={competitionInfo.name}
          />
          <CompetitionHeading>
            {competitionInfo.name}
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </CompetitionHeading>
          <FlexBetweenContainer className="mb-2">
            <Link to={""}>#{competitionInfo.mintNumber}</Link>
            <NftValue>
              Value: <span>${competitionInfo.value}</span>
            </NftValue>
          </FlexBetweenContainer>
          <Divider />
          <FlexStartContainer className="my-2">
            <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
            <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
          </FlexStartContainer>
          <Divider />
          <CompetitionDescription>
            {competitionInfo.description}
          </CompetitionDescription>
        </SectionWrapper>
        <SectionWrapper>
            
        </SectionWrapper>
      </div>
    </MainContainer>
  );
};

const CompetitionImage = styled.img`
  width: 100%;
  max-width: 340px;
  height: 320px;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;
const CompetitionHeading = styled.h5`
  font-weight: bold;
  color: var(--color-light-1);
  margin: 8px 0px;
  margin-bottom: 4px;
  i.fa-solid {
    font-size: 14px;
  }
`;
const FlexBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlexStartContainer = styled.div`
  display: flex;
  justify-content: start;
`;
const NftValue = styled.span`
  color: var(--color-light-1);
  font-size: 12px;
  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
const Divider = styled.hr`
  color: var(--color-grey-1);
  margin: 0;
  opacity: 1;
`;
const Icon = styled.i`
  color: var(--color-blue-1);
  font-size: 18px;
`;
const CloseDate = styled.span`
  font-size: 12px;
  color: var(--color-light-1);
  text-transform: uppercase;
`;
const CompetitionDescription = styled.p`
color: var(--color-grey-2);
padding: 8px 0px;
font-size: 14px;
`
