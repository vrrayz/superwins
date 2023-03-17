import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../general_components/Button";
import {
  CardImageSection,
  NftBadgeInfo,
  NftCardImage,
} from "../general_components/NftCardImage";
import { Badge } from "../general_components/Badge";
import { SectionWrapper } from "../general_components/SectionWrapper";
import { CardBody, CustomCard } from "../general_components/CustomCard";
import { TextMedium, TextLarge, TextSmall, TextInlineSmall } from "../general_components/typography";

export const NftGridItem = ({
  id,
  imgSrc,
  mintNumber,
  timeLeft,
  name,
  value,
  totalParticipants,
  closeDate,
}) => {
  const convertedCloseDate = closeDate * 1000;
  const date = new Date(convertedCloseDate).toDateString().substring(4);
  const hasEnded = convertedCloseDate < new Date();

  const navigate = useNavigate();
  const redirect = (route) => navigate(route);

  return (
    <SectionWrapper className='px-0'>
      <CustomCard className="p-0 card-light border-0">
        <CardImageSection>
          <NftCardImage
            src={imgSrc}
            className="card-image-top"
            alt="nft_image"
            onClick={() => redirect(`/competition/${id}`)}
          />
          <NftBadgeInfo>
            <Badge className="mint_serial">#{mintNumber}</Badge>
            {!hasEnded && <Badge className="time_left">{timeLeft}</Badge>}
          </NftBadgeInfo>
        </CardImageSection>
        <CardBody className="py-1 text-center">
          <TextMedium className="my-1">
            <span>{name}</span>
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </TextMedium>
          <TextLarge className="fw-bold text-center text__dark-4 my-1">
            ${value}
          </TextLarge>
          <Button
            onClick={() => redirect(`/competition/${id}`)}
            disabled={hasEnded}
            className={`${
              hasEnded ? "bg__grey-1" : "btn-primary"
            } d-block mx-auto text-center w-100 py-2 px-2 mb-3 fw-bold`}
          >
            <TextInlineSmall>{hasEnded ? "Ended 16 days ago" : "Enter Now"}</TextInlineSmall>
          </Button>
          <div className="nft-card-footer text-center mb-2">
            {hasEnded ? (
              <TextInlineSmall className="text-uppercase fw-bold mb-1">Won by</TextInlineSmall>
            ) : (
              <>
                <TextSmall className="text-uppercase fw-bold mb-1">
                  Join {totalParticipants} Superwallers
                </TextSmall>
                <TextInlineSmall>Closes: {date}</TextInlineSmall>
              </>
            )}
          </div>
        </CardBody>
      </CustomCard>
    </SectionWrapper>
  );
};
