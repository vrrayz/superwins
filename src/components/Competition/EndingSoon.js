import React from 'react'
import styled from 'styled-components'
import { CustomCard } from '../general_components/CustomCard'
import { SectionWrapper } from '../general_components/SectionWrapper'
import { EntryGrid } from './styles'

export const EndingSoon = () => {
  return (
    <SectionWrapper id="endingSoon">
      <CustomCard className="py-3 px-1">
        <CardHead>Ending Soon</CardHead>
        <EntryGrid>
          <CompetitionCard>
            <CardImage src='https://i.seadn.io/gae/ZxISqq2miZ2sg6J3b7Pq5pBGUjKrkFNgBIC6jXDFnEoi9S7D72m6F37dP7WoCEWDVAsAdtIH2HUmSsaKFetySd9_0bUlxy4BrB7rtIM?fit=max&w=350&auto=format' />
          </CompetitionCard>
          <CompetitionCard>
            <CardImage src='https://i.seadn.io/gae/ZxISqq2miZ2sg6J3b7Pq5pBGUjKrkFNgBIC6jXDFnEoi9S7D72m6F37dP7WoCEWDVAsAdtIH2HUmSsaKFetySd9_0bUlxy4BrB7rtIM?fit=max&w=350&auto=format' />
          </CompetitionCard>
        </EntryGrid>
      </CustomCard>
    </SectionWrapper>
  )
}
const CardHead = styled.div`
padding-bottom: 16px;
padding-left: 16px;
border-bottom: 1px solid var(--color-grey-2);
margin-bottom: 16px;
font-size: 1.2rem;
text-transform:uppercase;
`
const CompetitionCard = styled.div`
background-color: var(--color-primary-darkgrey-1);
// padding: 8px 16px;
text-align: center;
border-radius: 12px;
`;
const CardImage = styled.img`
object-fit: cover;
  height: 175px;
  width: 100%;
  border-radius: 6px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
`