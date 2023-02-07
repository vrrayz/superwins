import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  const FooterList = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
  `;
  return (
    <FooterList>
      <div className="footer-socials mt-5">
        <Link to={"/"} className="item">
          <i className="fa-brands fa-instagram glow"></i>
        </Link>
        <Link to={"/"} className="item">
          <i className="fa-brands fa-twitter glow"></i>
        </Link>
        <Link to={"/"} className="item">
          <i className="fa-brands fa-discord glow"></i>
        </Link>
      </div>
      <Link to={"/"} className="text-uppercase mx-auto mb-4 text-light fw-bold">
        Privacy policy
      </Link>
      <Link to={"/"} className="text-uppercase mx-auto mb-4 text-light fw-bold">
        Cookie policy
      </Link>
      <Link to={"/"} className="text-uppercase mx-auto mb-4 text-light fw-bold">
        Terms and conditions
      </Link>
    </FooterList>
  );
};
