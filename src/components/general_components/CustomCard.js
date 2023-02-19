import React from "react";
import styled from "styled-components";

export const CustomCard = ({ children }) => {
  return <Card>{children}</Card>;
};
const Card = styled.div`
  background-color: var(--color-dark-3);
  padding: 6px 8px;
  border-radius: 4px;
  color: var(--color-light-1);
`;

