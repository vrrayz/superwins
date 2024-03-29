import styled from "styled-components";

export const Icon = styled.i`
  color: var(--color-blue-1);
  font-size: ${props => props.font || '18'}px;
`;
export const ImgIcon = styled.img`
width: ${props => props.width || '24'}px;
height: ${props => props.height || '24'}px;
`