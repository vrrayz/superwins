import React from "react";
import { Link } from "react-router-dom";

export const NftGridItem = ({id,imgSrc,mintNumber,timeLeft,name,value,totalParticipants,closeDate}) => {
  return (
    <div className="grid-item">
      <div className="card nft-card border-0">
        <img
          src={imgSrc}
          className="card-image-top nft-card-image"
          alt="nft_image"
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
          <Link to={`/competition/${id}`} className="btn btn-primary d-block mb-3">
            Enter Now
          </Link>
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
