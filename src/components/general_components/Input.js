import styled from "styled-components"

export const Input = styled.input`
margin-right: 0px;
width: 100%;
border-radius:6px;
border: none;
background-color: var(--color-grey-1);
color: var(--color-light-1);
padding: 12px 4px;
padding-left: 16px;
font-size: 14px;

&:focus-visible {
  border: none;
  outline: none;
}
`
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
background-color: var(--color-grey-1);
color: var(--color-grey-1);
`