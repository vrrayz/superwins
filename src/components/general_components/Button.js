import styled from "styled-components";

export const Button = styled.button`
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 14px !important;
  letter-spacing: 1px;
  padding:12px;
  &.btn-primary-transparent {
    background-color: rgba(231, 7, 7, 0.1);
    border: 3px solid var(--color-border-primary-red);
  }
  &.btn-primary {
    background-color: var(--color-primary-red);
    border: var(--color-primary-red);
  }
  &.btn-primary-transparent, &.btn-primary{
    color: var(--color-light-1);
  }
  &.btn-primary-transparent:hover,
  &.btn-primary-transparent:active {
    background-color: rgba(231, 7, 7, 0.6) !important;
    border: 3px solid var(--color-border-primary-red) !important;
  }
  &.btn-primary:disabled{
    background-color: var(--color-light-red);
  }
`;
export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.repeat || 6}, 1fr);
  column-gap: ${props => props.gap || 2}px;

  ${Button} {
    border-radius: 12px;
    padding: 4px 12px;
    margin: auto;
    background-color: var(--color-primary-darkgrey-1);
    border-width: 2px;
  }
  ${Button}:disabled {
    border-radius: 12px;
    padding: 4px 12px;
    margin: auto;
    background-color: var(--color-primary-darkgrey-2) !important;
    border-color: var(--color-primary-darkgrey-2) !important;
  }
`;