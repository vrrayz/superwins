import React from "react";
import { nftCompetitionData } from "../../data/nftCompetitionData";
import { GridSection } from "../NftGrid/GridSection";
import { NftsOwned } from "./NftsOwned";

export const UserTabItems = ({ tabItem }) => {
  return (
    <>
      {tabItem.active && (
        <>
          {tabItem.name === "Competitions Entered" && (
            <GridSection
              nftCompetitionData={nftCompetitionData}
              className=""
              sectionHeading={""}
              hasCarouselOption={false}
            />
          )}

          {tabItem.name === "Nfts owned" && (
            <NftsOwned></NftsOwned>
          )}
        </>
      )}
    </>
  );
};
