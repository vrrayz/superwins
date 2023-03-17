import React, { useState } from "react";
import { GridSection } from "../NftGrid/GridSection";
import { InnerTab } from "./InnerTab";
import { completedSectionTabItems } from "../../data/tabData";
import { SectionWrapper } from "../general_components/SectionWrapper";

export const CompletedSection = ({ nftCompetitionData }) => {
  const [tabItems, setTabItems] = useState(completedSectionTabItems)
  return (
    <>
      <InnerTab
        setTabItems={setTabItems}
        items={tabItems}
      />
      <SectionWrapper>
      {tabItems[0].active ? (
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
      </SectionWrapper>
    </>
  );
};
