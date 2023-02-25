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
        <CompetitionDetails competitionInfo={competitionInfo} />
        <EntrySection />
        <ParticipantsActivity competitionInfo={competitionInfo} />
        <ShareCompetitionSection />
        <EndingSoon />
      </div>
    </MainContainer>
  );
};
