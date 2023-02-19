import React from "react";
import { Link, useParams } from "react-router-dom";
import { InfoSection } from "../general_components/InfoSection";
import { MainContainer } from "../MainContainer";
import { SectionWrapper } from "../general_components/SectionWrapper";
import { CustomCard, ExtraInfoText } from "../general_components/CustomCard";

import { nftCompetitionData } from "../../data/nftCompetitionData";
import { useEffect } from "react";
import { useState } from "react";
import {
  CompetitionImage,
  CompetitionHeading,
  FlexBetweenContainer,
  FlexStartContainer,
  NftValue,
  Divider,
  Icon,
  CloseDate,
  CompetitionDescription,
  EntryGrid,
  EntryGridItem,
  EntryCount,
  EntryText,
  PromoText,
  SubText,
  DiscountSection,
  SlashedPrice,
  MaxValueLabel,
} from "./styles";
import { CustomCardText } from "../general_components/CustomCardText";
import { Button } from "../general_components/Button";

export const Competition = () => {
  const { id } = useParams();
  const [competitionInfo, setCompetitionInfo] = useState({});
  useEffect(() => {
    setCompetitionInfo(
      nftCompetitionData.find((comp) => comp.id === parseInt(id))
    );
  }, []);
  return (
    <MainContainer>
      <div>
        <InfoSection />
        <SectionWrapper id="competitionDetails">
          <CompetitionImage
            src={competitionInfo.imgSrc}
            alt={competitionInfo.name}
          />
          <CompetitionHeading>
            {competitionInfo.name}
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </CompetitionHeading>
          <FlexBetweenContainer className="mb-2">
            <Link to={""}>#{competitionInfo.mintNumber}</Link>
            <NftValue>
              Value: <span>${competitionInfo.value}</span>
            </NftValue>
          </FlexBetweenContainer>
          <Divider />
          <FlexStartContainer className="my-2">
            <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
            <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
          </FlexStartContainer>
          <Divider />
          <CompetitionDescription>
            {competitionInfo.description}
          </CompetitionDescription>
        </SectionWrapper>
        <SectionWrapper id="entrySection">
          <CustomCard className="mb-3">
            <h3 className="text-center mt-2 text-uppercase">
              Enter Competition
            </h3>
            <CustomCardText className="text-center my-4">
              You have used <span className="text-danger">0</span> of{" "}
              <span className="text-danger">465</span> entries
            </CustomCardText>
            <EntryGrid>
              <EntryGridItem className="pt-5">
                <EntryCount>1</EntryCount>
                <EntryText>ENTRY</EntryText>
                <Button className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                  <Icon className="fa-brands fa-ethereum my-auto me-1 text-light"></Icon>
                  0.001
                </Button>
              </EntryGridItem>
              <EntryGridItem className="recommended">
                <EntryGridItem>
                  <PromoText style={{ color: "var(--color-light-1)" }}>
                    Recommended
                  </PromoText>
                  <DiscountSection>
                    <SlashedPrice>5</SlashedPrice>
                    <EntryCount className="discount-text">15</EntryCount>
                  </DiscountSection>
                  <EntryText>ENTRIES</EntryText>
                  <Button className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                    <Icon className="fa-brands fa-ethereum my-auto me-1 text-light"></Icon>
                    0.001
                  </Button>
                  <PromoText className="discount-text">
                    Includes 10 free entries
                  </PromoText>
                  <SubText>Gas saving = 15x</SubText>
                </EntryGridItem>
              </EntryGridItem>
              <EntryGridItem className="pt-5">
                <DiscountSection>
                  <SlashedPrice>10</SlashedPrice>
                  <EntryCount className="discount-text">35</EntryCount>
                </DiscountSection>
                <EntryText>ENTRIES</EntryText>
                <Button className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                  <Icon className="fa-brands fa-ethereum my-auto me-1 text-light"></Icon>
                  0.24
                </Button>
                <PromoText className="discount-text">
                  Includes 25 free entries
                </PromoText>
                <SubText>Gas saving = 35x</SubText>
              </EntryGridItem>
              <EntryGridItem className="pt-5">
                <DiscountSection>
                  <SlashedPrice>20</SlashedPrice>
                  <EntryCount className="discount-text">75</EntryCount>
                </DiscountSection>
                <EntryText>ENTRIES</EntryText>
                <Button className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                  <Icon className="fa-brands fa-ethereum my-auto me-1 text-light"></Icon>
                  0.48
                </Button>
                <PromoText className="discount-text">
                  Includes 55 free entries
                </PromoText>
                <SubText>Gas saving = 75x</SubText>
              </EntryGridItem>
            </EntryGrid>
            <EntryGridItem className="pt-5 my-2 max">
              <MaxValueLabel>Max Value</MaxValueLabel>
              <DiscountSection>
                <SlashedPrice>40</SlashedPrice>
                <EntryCount className="discount-text">155</EntryCount>
              </DiscountSection>
              <EntryText>ENTRIES</EntryText>
              <Button className="btn-primary d-block mx-auto mb-3 fw-bold w-100">
                <Icon className="fa-brands fa-ethereum my-auto me-1 text-light"></Icon>
                0.24
              </Button>
              <PromoText className="discount-text">
                Includes 25 free entries
              </PromoText>
              <SubText>Gas saving = 35x</SubText>
            </EntryGridItem>
            <ExtraInfoText className="text-center my-3">
              All entries require gas.
            </ExtraInfoText>
            <ExtraInfoText className="text-center mt-3 mb-0">
              Smart Contract v1.2 update
            </ExtraInfoText>
            <ExtraInfoText className="text-light text-center my-0 mb-3">
              Multi Buy Gas Amount = Single Entry Gas Amount
            </ExtraInfoText>
          </CustomCard>

          <CustomCard className='py-2'>
            <FlexBetweenContainer style={{fontSize: '.8rem'}}>
              <span style={{ color: "var(--color-blue-1)" }} className="me-1">Contract</span>
              <Link to={'/'} className="text-light" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                0x4D6283B4198C0039F2ADdc6A8784Bbdef6e259EB
              </Link>
              <Link to={'/'} className="text-light mx-0 mt-1" style={{overflow: 'hidden', textOverflow: 'ellipsis',fontSize: '.5rem'}}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </FlexBetweenContainer>
          </CustomCard>
        </SectionWrapper>
      </div>
    </MainContainer>
  );
};
