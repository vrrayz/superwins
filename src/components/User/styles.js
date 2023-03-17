import styled from "styled-components"

export const  HeadingContainer = styled.div`
display: grid;
grid-template-columns: 92px 1fr;
column-gap: 16px;
overflow-x: hidden;
margin: 0px 16px;
`
export const Avatar = styled.img`
width: ${props => props.width || '24'}px;
height: ${props => props.height || '24'}px;
border-radius: 50%;
`
export const UserDetails = styled.div`
color: var(--color-light-1);
`