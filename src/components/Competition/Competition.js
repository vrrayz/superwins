import React from "react";
import { useParams } from "react-router-dom";
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
import { EntryGrid } from "./styles";
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
      <div>
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
@media (min-width: 768px){
  display: grid;
grid-template-columns:1fr 1fr;
}

@media (min-width: 1200px){
grid-template-columns:1fr 2fr;
}
`
