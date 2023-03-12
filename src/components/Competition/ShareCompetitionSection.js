import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CustomCard } from '../general_components/CustomCard'
import { SectionWrapper } from '../general_components/SectionWrapper'
import { Icon } from '../general/Icon'

export const ShareCompetitionSection = () => {
  return (
    <SectionWrapper id="endingSoon">
      <CustomCard className="py-3 px-1 mb-2">
        <InfoHead>Share This Competition</InfoHead>
        <ShareCompetition>
          <Icon style={{margin: "auto 8px"}} className="fa-brands fa-twitter text-light" />
          <Link to={"/"} style={{margin: "auto 8px", color: "var(--color-light-1)"}}>More</Link>
        </ShareCompetition>
      </CustomCard>
    </SectionWrapper>
  )
}
const InfoHead = styled.span`
display: block;
text-align: center;
color: #fff;
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 1px;
`
const ShareCompetition = styled.section`
display: flex;
justify-content: center;
padding: 8px 0px 0px 0px;
text-transform: uppercase;
`