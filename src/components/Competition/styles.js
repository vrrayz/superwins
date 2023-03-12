import styled from "styled-components";
import rainbow from "../../assets/img/rainbow.svg";
import microchip from "../../assets/img/microchip.png";

export const CompetitionImage = styled.img`
  width: 100%;
  height: 320px;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  @media (min-width: 1024px) {
    height: 390px;
  }
  @media (min-width: 1200px) {
    max-width: 450px;
    height: 420px;
  }
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
  text-overflow: ellipsis;
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
export const CloseDate = styled.span`
  font-size: 12px;
  color: var(--color-light-1);
  text-transform: uppercase;
`;
export const CompetitionDescription = styled.p`
  color: var(--color-grey-2);
  padding: 8px 0px;
  font-size: 14px;
`;
export const EntryGrid = styled.div`
  display: grid;
  padding: 0 0.4rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.7rem;
  row-gap: 0.7rem;
`;
export const EntryGridItem = styled.div`
  background-color: var(--color-primary-darkgrey-1);
  padding: 8px 16px;
  text-align: center;
  border-radius: 12px;
  &.recommended {
    background-image: url(${rainbow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 4px;
  }
  &.max {
    overflow: hidden;
    background-image: url(${microchip});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
export const EntryCount = styled.h1`
  font-size: 4rem;
  }
`;
export const PromoText = styled.p`
  text-transform: uppercase;
  color: yellow;
  margin: 8px 0;
  font-size: 0.9em;
`;
export const SubText = styled.p`
  margin: 8px 0;
  font-size: 0.75em;
`;
export const EntryText = styled.h3``;

export const DiscountSection = styled.section`
  display: flex;
  justify-content: center;
`;
export const SlashedPrice = styled.h4`
  color: var(--color-light-1);
  text-decoration: line-through;
  text-decoration-color: var(--color-primary-red);
  text-decoration-thickness: 2px;
  transform: rotate(345deg);
  margin-top: 12px;
`;
export const MaxValueLabel = styled.div`
  background: -webkit-linear-gradient(
    var(--eh-gradient-from),
    var(--eh-gradient-to)
  );
  color: var(--color-dark-1);
  transform: rotate(335deg);
  position: relative;
  top: -30px;
  right: 64px;
  text-align: center;
  font-size: 0.75rem;
  width: 200px;
`;
