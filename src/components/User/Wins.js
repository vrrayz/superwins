import React from "react";
import { useTemplateColumn } from "../../hooks/useTemplateColumn";
import { nftCompetitionData } from "../../data/nftCompetitionData";
import { CustomNftGrid } from "../NftGrid/NftGrid";
import { CardBody, CustomCard } from "../general_components/CustomCard";
import {
  CardImageSection,
  NftCardImage,
} from "../general_components/NftCardImage";
import { redirect } from "react-router-dom";
import { TextInlineSmall, TextSmall } from "../general_components/typography";
import ethIco from "../../assets/img/icons/ico-eth-opacity-blue2.svg";
import { Avatar } from "./styles";
import { SectionWrapper } from "../general_components/SectionWrapper";
import {ImgIcon} from "../general_components/Icon"

export const Wins = ({profilePic}) => {
  const { gridTemplateColumn } = useTemplateColumn(false, nftCompetitionData);
  return (
    <CustomNftGrid templateColumn={gridTemplateColumn} className="py-3">
      {nftCompetitionData.map(({ imgSrc, id, mintNumber, name }) => (
        <CustomCard className="p-0 card-light border-0">
          <CardImageSection>
            <NftCardImage
              src={imgSrc}
              className="card-image-top"
              alt="nft_image"
              onClick={() => redirect(`/competition/${id}`)}
            />
          </CardImageSection>
          <CardBody className="py-1">
            <TextSmall className="mt-1 mb-0 fw-bold">
              <span>{name}</span>
              <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
            </TextSmall>
            <SectionWrapper className="d-flex justify-content-between px-0 fw-bold">
              <TextSmall className="mb-1 text__dark-4">
                #{mintNumber}
              </TextSmall>
              <TextInlineSmall className="text__blue-1">
                ~ <ImgIcon src={ethIco} alt="icon" width={8.56} height={12} />0.8
              </TextInlineSmall>
            </SectionWrapper>
            <div className="nft-card-footer text-center mb-2">
              <TextInlineSmall className="text-uppercase fw-bold mb-1">Won by <Avatar src={profilePic} alt="avatar" width={28} height={28} /> <TextInlineSmall className="text__blue-1 text-capitalize">Username</TextInlineSmall> </TextInlineSmall>
              <TextInlineSmall className="text-uppercase fw-bold mb-1">92 Participants</TextInlineSmall>
          </div>
          </CardBody>
        </CustomCard>
      ))}
    </CustomNftGrid>
  );
};
