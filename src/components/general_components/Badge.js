import styled from "styled-components";

export const Badge = styled.span`
  color: #707177;
  background-color: var(--color-light-1);
  font-size: 12px;
  border-radius: 25px;
  padding: 2px 8px;

  &.mint_serial{
    z-index: 1
  }
  &.time_left{
    background-color: var(--color-blue-1);
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-light-1);
  }
`;
