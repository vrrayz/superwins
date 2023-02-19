import React from "react";
import styled from "styled-components";

export const CustomCard = ({ children, className }) => {
  return <Card className={className}>{children}</Card>;
};
const Card = styled.div`
  background-color: var(--color-dark-3);
  padding: 6px 8px;
  border-radius: 12px;
  color: var(--color-light-1);
`;
export const ExtraInfoText = styled.p`
color: var(--color-grey-2);
font-size: .85rem;
margin: 0;
`

