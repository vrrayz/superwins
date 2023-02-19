import React from 'react'
import styled from 'styled-components';

export const CustomCardText = ({children, className}) => {
  return (
    <CardText className={className}>{children}</CardText>
  )
}
const CardText = styled.p`
   {
    font-size: 0.82rem;
    padding: 0px;
    margin: 0;
  }
`;