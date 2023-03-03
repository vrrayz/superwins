import React from "react";
import { Link, useParams } from "react-router-dom";
import { InfoSection } from "../general_components/InfoSection";
import { MainContainer } from "../MainContainer";

import { nftCompetitionData } from "../../data/nftCompetitionData";
import { useEffect } from "react";
import { useState } from "react";

import { CompetitionDetails } from "./CompetitionDetails";
import { EntrySection } from "./EntrySection";
import { ParticipantsActivity } from "./ParticipantsActivity";
import { ShareCompetitionSection } from "./ShareCompetitionSection";
import { EndingSoon } from "./EndingSoon";
import {
  CloseDate,
  CompetitionHeading,
  Divider,
  EntryGrid,
  FlexBetweenContainer,
  FlexStartContainer,
  Icon,
  NftValue,
} from "./styles";
import styled from "styled-components";

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
      <div className="px-lg-4 px-xl-5">
        <InfoSection />
        <CompetitionGrid>
          <section>
            <CompetitionDetails competitionInfo={competitionInfo} />
            <ParticipantsActivity
              className="display-sm-none display-md-block"
              competitionInfo={competitionInfo}
            />
          </section>
          <section>
            <CompetitionHeading className="display-sm-none display-md-block mx-md-3">
              {competitionInfo.name}
              <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
            </CompetitionHeading>
            <FlexBetweenContainer className="mb-2 display-sm-none display-md-flex mx-md-3">
              <Link to={""}>#{competitionInfo.mintNumber}</Link>
              <NftValue>
                Value: <span>${competitionInfo.value}</span>
              </NftValue>
            </FlexBetweenContainer>
            <Divider className="display-sm-none display-md-block mx-md-3" />
            <FlexStartContainer className="my-2 display-sm-none display-md-flex mx-md-3 mb-4">
              <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
              <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
            </FlexStartContainer>
            <EntrySection />
            <ParticipantsActivity
              className="display-md-none"
              competitionInfo={competitionInfo}
            />
            <ShareCompetitionSection />
            <EndingSoon />
          </section>
        </CompetitionGrid>
      </div>
    </MainContainer>
  );
};

const CompetitionGrid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1.5fr 2fr;
  }
`;
