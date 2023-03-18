import styled from "styled-components"

export const Input = styled.input`
margin-right: 0px;
width: 100%;
border-radius:6px;
border: none;
background-color: var(--color-primary-darkgrey-1);
color: var(--color-light-1);
padding: 12px 4px;
padding-left: 16px;
font-size: 14px;

&:focus-visible {
  border: none;
  outline: none;
}
`
export const AppendButton = styled.button`
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
border: none;
background-color: var(--color-primary-darkgrey-1);
padding-right: 16px;
color: var(--color-light-1);
`;
export const InputGroupAppend = styled.div`
display: flex;
justify-content: center;

${Input} {
  border-radius: 0px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
`
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
background-color: var(--color-grey-1);
color: var(--color-grey-1);
`