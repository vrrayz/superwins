import React, { useState } from "react";
import styled from "styled-components";
import { GridSection } from "../NftGrid/GridSection";

export const CompletedSection = ({nftCompetitionData}) => {
    const [isHourlySchedule, setIsHourlySchedule] = useState(true);
  
    return (
      <>
        <InnerTabContainer>
          <InnerTabItem
            className={isHourlySchedule ? "active" : ""}
            onClick={() => setIsHourlySchedule(true)}
          >
            Hourly Schedule
          </InnerTabItem>
          <InnerTabItem
            className={isHourlySchedule ? "" : "active"}
            onClick={() => setIsHourlySchedule(false)}
          >
            Head 2 Head
          </InnerTabItem>
        </InnerTabContainer>
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
  