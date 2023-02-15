import React, { useState } from "react";
import styled from "styled-components";
import { GridSection } from "../NftGrid/GridSection";
import { InnerTab } from "./InnerTab";

export const CompletedSection = ({ nftCompetitionData }) => {
  const [isHourlySchedule, setIsHourlySchedule] = useState(true);

  return (
    <>
      <InnerTab
        isFirstItem={isHourlySchedule}
        setIsFirstItem={setIsHourlySchedule}
        items={["Hourly schedule", "Head 2 Head"]}
      />
      {isHourlySchedule ? (
        <GridSection
          nftCompetitionData={nftCompetitionData}
          className=""
          sectionHeading={""}
        />
      ) : (
        <GridSection
          nftCompetitionData={nftCompetitionData}
          className=""
          sectionHeading={""}
        />
      )}
    </>
  );
};
