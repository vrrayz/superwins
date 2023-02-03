import React, {useState} from 'react'

import { NftGrid } from './NftGrid';

export const GridSection = ({ nftCompetitionData, className, sectionHeading }) => {
    const [isCarouselView, setIsCarouselView] = useState(false)
    return (
      <section className={`${className} px-3`}>
        <div className="section-heading">
          <span>{sectionHeading}</span>
        </div>
        <NftGrid nftCompetitionData={nftCompetitionData} isCarouselView = {isCarouselView} />
      </section>
    );
  };