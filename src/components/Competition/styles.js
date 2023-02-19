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
