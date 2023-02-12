import React, { useEffect } from "react";
import styled from "styled-components";

import { NftGridItem } from "./NftGridItem";

export const NftGrid = ({ nftCompetitionData, isCarouselView }) => {
  const gridTemplateColumnCondition = (templateColumn) =>
    isCarouselView
      ? nftCompetitionData.map((x) => {
          return `${templateColumn}%`;
        })
      : `${templateColumn}% `.repeat(parseInt(100 / templateColumn));
  return (
    <CustomNftGrid templateColumn={gridTemplateColumnCondition} className="nft-grid pb-3">
      {nftCompetitionData.map((competition) => {
        return <NftGridItem key={competition.id} {...competition} />;
      })}
    </CustomNftGrid>
  );
};
const CustomNftGrid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.templateColumn(49)};
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e70707;
      border-radius: 25px;
    }
    @media (min-width: 768px) {
      grid-template-columns: ${props => props.templateColumn(32)};
      column-gap: 8px;
      margin-left: 8px;
    }

    @media (min-width: 1024px) {
      grid-template-columns: ${props => props.templateColumn(19.5)};
    }
  `;