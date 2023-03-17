import React from "react";
import { nftCompetitionData } from "../../data/nftCompetitionData";
import { GridSection } from "../NftGrid/GridSection";
import { NftsOwned } from "./NftsOwned";
import { Wins } from "./Wins";

export const UserTabItems = ({ tabItem, profilePic }) => {
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

          {tabItem.name === "Nfts owned" && <NftsOwned />}

          {tabItem.name === "Wins" && <Wins profilePic={profilePic} />}
        </>
      )}
    </>
  );
};
