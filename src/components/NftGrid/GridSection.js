import React, { useState } from "react";
import styled from "styled-components";

import { NftGrid } from "./NftGrid";

export const GridSection = ({
  nftCompetitionData,
  className,
  sectionHeading,
}) => {
  const [isCarouselView, setIsCarouselView] = useState(false);
  const GridSectionHeading = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ToggleViewButton = styled.button`
    font-size: 12px;
    border: none;
    outline: none;
    color: #fff;
    background-color: transparent;
  `;
  return (
    <section className={`${className} px-2 mb-3`}>
      <GridSectionHeading className="section-heading px-1">
        <span>{sectionHeading}</span>
        <ToggleViewButton onClick={() => setIsCarouselView(!isCarouselView)}>
            {isCarouselView ? <i className="fa-solid fa-table-cells-large me-1"></i>:<i className="fa-solid fa-pause me-1"></i>}
            Switch to{isCarouselView ? "grid view" : "carousel"}
        </ToggleViewButton>
      </GridSectionHeading>
      <NftGrid
        nftCompetitionData={nftCompetitionData}
        isCarouselView={isCarouselView}
      />
    </section>
  );
};
