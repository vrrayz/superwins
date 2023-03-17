import React from 'react'
import { useTemplateColumn } from '../../hooks/useTemplateColumn'
import { nftCompetitionData } from '../../data/nftCompetitionData'
import { CustomNftGrid } from '../NftGrid/NftGrid'
import { CardBody, CustomCard } from '../general_components/CustomCard'
import { CardImageSection, NftCardImage } from '../general_components/NftCardImage'
import { redirect } from 'react-router-dom'
import { TextSmall } from '../general_components/typography'

export const NftsOwned = () => {
  const {gridTemplateColumn} = useTemplateColumn(false,nftCompetitionData)
  return (
    <CustomNftGrid
    templateColumn={gridTemplateColumn}
    className="py-3"
  >
    {nftCompetitionData.map(({imgSrc,id,mintNumber,name}) => 
    <CustomCard className="p-0 card-light border-0">
        <CardImageSection>
          <NftCardImage
            src={imgSrc}
            className="card-image-top"
            alt="nft_image"
            onClick={() => redirect(`/competition/${id}`)}
          />
        </CardImageSection>
        <CardBody className="py-1">
          <TextSmall className="mt-1 mb-0 fw-bold">
            <span>{name}</span>
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </TextSmall>
          <TextSmall className="mb-1 fw-bold text__dark-4">
            #{mintNumber}
          </TextSmall>
        </CardBody>
      </CustomCard>
    )}
  </CustomNftGrid>
  )
}
