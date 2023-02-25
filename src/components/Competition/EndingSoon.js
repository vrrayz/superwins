import React from 'react'
import { CustomCard } from '../general_components/CustomCard'
import { SectionWrapper } from '../general_components/SectionWrapper'

export const EndingSoon = () => {
  return (
    <SectionWrapper id="endingSoon">
      <CustomCard className="py-3 px-1">
        Ending soon
        {/* <InfoHead>Share This Competition</InfoHead>
        <ShareCompetition>
          <Icon style={{margin: "auto 8px"}} className="fa-brands fa-twitter text-light" />
          <Link to={"/"} style={{margin: "auto 8px", color: "var(--color-light-1)"}}>More</Link>
        </ShareCompetition> */}
      </CustomCard>
    </SectionWrapper>
  )
}
