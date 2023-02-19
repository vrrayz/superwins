import styled from "styled-components";

export const CompetitionImage = styled.img`
  width: 100%;
  max-width: 340px;
  height: 320px;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;
export const CompetitionHeading = styled.h5`
  font-weight: bold;
  color: var(--color-light-1);
  margin: 8px 0px;
  margin-bottom: 4px;
  i.fa-solid {
    font-size: 14px;
  }
`;
export const FlexBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexStartContainer = styled.div`
  display: flex;
  justify-content: start;
`;
export const NftValue = styled.span`
  color: var(--color-light-1);
  font-size: 12px;
  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
export const Divider = styled.hr`
  color: var(--color-grey-1);
  margin: 0;
  opacity: 1;
`;
export const Icon = styled.i`
  color: var(--color-blue-1);
  font-size: 18px;
`;
export const CloseDate = styled.span`
  font-size: 12px;
  color: var(--color-light-1);
  text-transform: uppercase;
`;
export const CompetitionDescription = styled.p`
color: var(--color-grey-2);
padding: 8px 0px;
font-size: 14px;
`
export const EntryGrid = styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(0,1fr));
column-gap: .5rem;
`
export const EntryGridItem = styled.div`
background-color: var(--color-primary-darkgrey-1);
padding: 8px 16px;
text-align:center;
border-radius: 12px;
`
export const EntryCount = styled.h1`
font-size: 4rem;
`
export const PromoText = styled.p`
text-transform: uppercase;
color: yellow;
margin: 8px 0;
font-size: .9em;
`
export const SubText = styled.p`
margin: 8px 0;
font-size: .75em;
`
export const EntryText = styled.h3``