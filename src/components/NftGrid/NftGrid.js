import React from "react";
import styled from "styled-components";
import { useTemplateColumn } from "../../hooks/useTemplateColumn";

import { NftGridItem } from "./NftGridItem";

export const NftGrid = ({ nftCompetitionData, isCarouselView }) => {
  const {gridTemplateColumn} = useTemplateColumn(isCarouselView,nftCompetitionData)
 
  return (
    <CustomNftGrid
      templateColumn={gridTemplateColumn}
      className="pb-3"
    >
      {nftCompetitionData.map((competition) => {
        return <NftGridItem key={competition.id} {...competition} />;
      })}
    </CustomNftGrid>
  );
};
export const CustomNftGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumn(49)};
  column-gap:6px;
  row-gap:8px;
  overflow-x: scroll;
  @media (min-width: 768px) {
    grid-template-columns: ${(props) => props.templateColumn(32)};
    column-gap: 8px;
    margin-left: 8px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) => props.templateColumn(19.5)};
  }
`;
