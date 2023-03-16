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
    <div className="grid-item">
      <div className="card nft-card border-0">
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
        <div className="card-body py-1">
          <h5 className="nft_heading my-1">
            <span>{name}</span>
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </h5>
          <div className="nft-value my-1 mb-2 text-center">
            <span className="amount">${value}</span>
          </div>
          <Button
            onClick={() => redirect(`/competition/${id}`)}
            disabled={hasEnded}
            className={`${
              hasEnded ? "bg__grey-1" : "btn-primary"
            } d-block mx-auto text-center w-100 py-2 mb-3`}
          >
            {hasEnded ? "Ended few days ago" : "Enter Now"}
          </Button>
          <div className="nft-card-footer text-center mb-2">
            {hasEnded ? (
              <span className="text-uppercase fw-bold mb-1">Won by</span>
            ) : (
              <>
                <span className="text-uppercase fw-bold mb-1">
                  Join {totalParticipants} Superwallers
                </span>
                <span>Closes: {date}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
