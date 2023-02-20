import React from 'react'
import { Link } from 'react-router-dom'
import { SectionWrapper } from '../general_components/SectionWrapper'
import { CloseDate, CompetitionDescription, CompetitionHeading, CompetitionImage, Divider, FlexBetweenContainer, FlexStartContainer, Icon, NftValue } from './styles'

export const CompetitionDetails = ({competitionInfo}) => {
  return (
    <SectionWrapper id="competitionDetails">
          <CompetitionImage
            src={competitionInfo.imgSrc}
            alt={competitionInfo.name}
          />
          <CompetitionHeading>
            {competitionInfo.name}
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </CompetitionHeading>
          <FlexBetweenContainer className="mb-2">
            <Link to={""}>#{competitionInfo.mintNumber}</Link>
            <NftValue>
              Value: <span>${competitionInfo.value}</span>
            </NftValue>
          </FlexBetweenContainer>
          <Divider />
          <FlexStartContainer className="my-2">
            <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
            <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
          </FlexStartContainer>
          <Divider />
          <CompetitionDescription>
            {competitionInfo.description}
          </CompetitionDescription>
        </SectionWrapper>
  )
}
