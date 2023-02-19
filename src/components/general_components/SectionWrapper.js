import React from 'react'
import styled from 'styled-components'

export const SectionWrapper = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 0px 16px;
`;
