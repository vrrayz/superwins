import React from 'react'
import styled from 'styled-components';

export const MainContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}
const Container = styled.div`
  margin-top: 5rem;
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 320px;
  }
`;
