import React from "react";
import styled from "styled-components";

export const NftCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 175px;
  border-radius: 6px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
`;

export const CardImageSection = styled.div`
position: relative;
`;

export const NftBadgeInfo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width:100%;
  bottom: 8px;
`;
