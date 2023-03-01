import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SectionWrapper } from '../general_components/SectionWrapper'
import { CloseDate, CompetitionDescription, CompetitionHeading, CompetitionImage, Divider, FlexBetweenContainer, FlexStartContainer, Icon, NftValue } from './styles'

export const CompetitionDetails = ({competitionInfo}) => {
  return (
    <SectionWrapper id="competitionDetails">
          <CompetitionImage
            src={competitionInfo.imgSrc}
            alt={competitionInfo.name}
          />
          <CompetitionHeading className='display-md-none'>
            {competitionInfo.name}
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </CompetitionHeading>
          <FlexBetweenContainer className="mb-2 display-md-none">
            <Link to={""}>#{competitionInfo.mintNumber}</Link>
            <NftValue>
              Value: <span>${competitionInfo.value}</span>
            </NftValue>
          </FlexBetweenContainer>
          <Divider className='display-md-none' />
          <FlexStartContainer className="my-2 display-md-none">
            <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
            <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
          </FlexStartContainer>
          <FlexStartContainer className="my-2 display-sm-none display-md-block">
            <Desc>Description</Desc>
          </FlexStartContainer>
          <Divider />
          <CompetitionDescription>
            {competitionInfo.description}
          </CompetitionDescription>
        </SectionWrapper>
  )
}
const Desc = styled.h5`
color: var(--color-light-1);
`