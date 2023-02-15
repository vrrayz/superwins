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
const InnerTabContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`;
const InnerTabItem = styled.div`
  text-transform: uppercase;
  color: var(--color-light-1);
  font-size: 14px;

  &.active {
    color: var(--color-primary-red);
  }
`;
