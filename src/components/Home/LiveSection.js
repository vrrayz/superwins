import React from 'react'
import { SectionWrapper } from '../general_components/SectionWrapper';
import { GridSection } from '../NftGrid/GridSection';

export const LiveSection = ({nftCompetitionData}) => {
    return (
        <SectionWrapper>
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="featured"
            sectionHeading={"featured"}
          />
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="hourly-schedule"
            sectionHeading={"hourly schedule"}
          />
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="daily-killer-bears"
            sectionHeading={"daily killer bears"}
          />
        </SectionWrapper>
      );
}
