import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../general_components/Button";

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
  const navigate = useNavigate();

  const redirect = () => navigate(`/competition/${id}`);

  return (
    <div className="grid-item">
      <div className="card nft-card border-0">
        <NftCardImage
          src={imgSrc}
          className="card-image-top"
          alt="nft_image"
          onClick={redirect}
        />
        <div className="card-body py-1">
          <div className="nft-info">
            <span className="badge mint_serial">#{mintNumber}</span>
            <span className="badge time_left">{timeLeft}</span>
          </div>
          <h5 className="nft_heading my-1">
            <span>{name}</span>
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </h5>
          <div className="nft-value my-1 mb-2">
            <small>Value:</small>
            <span className="amount">${value}</span>
          </div>
          <Button
            as={Link}
            to={`/competition/${id}`}
            className="btn-primary d-block mx-auto w-100 py-2 mb-3"
          >
            Enter Now
          </Button>
          <div className="nft-card-footer text-center mb-2">
            <span className="text-uppercase fw-bold mb-1">
              Join {totalParticipants} Superwallers
            </span>
            <span>Closes: {closeDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NftCardImage = styled.img`
  object-fit: cover;
  height: 175px;
  border-radius: 6px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
`;
