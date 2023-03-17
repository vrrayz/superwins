import React from 'react'
import { useTemplateColumn } from '../../hooks/useTemplateColumn'
import { nftCompetitionData } from '../../data/nftCompetitionData'
import { CustomNftGrid } from '../NftGrid/NftGrid'
import { NftGridItem } from '../NftGrid/NftGridItem'

export const NftsOwned = () => {
  const {gridTemplateColumn} = useTemplateColumn(false,nftCompetitionData)
  return (
    <CustomNftGrid
    templateColumn={gridTemplateColumn}
    className="pb-3"
  >
    {nftCompetitionData.map((competition) => {
    //   return <NftGridItem key={competition.id} {...competition} />; 
    // ***************** CODE HERE ********************/
    })}
  </CustomNftGrid>
  )
}
