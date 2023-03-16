import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = ({logo}) => {
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
      <CopyRightSection>
        copyright &#169; 2023 Superwall<br/> patent pending
      </CopyRightSection>
      <FooterLogo>
      <img src={logo} alt="Logo" className="logo" />
      </FooterLogo>
    </FooterList>
  );
};
const FooterList = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
  `;
  const CopyRightSection = styled.div`
  margin:32px auto;
  text-align:center;
  color: var(--color-light-1);
  text-transform:uppercase;
  line-height:1.3;
  font-size:12px;
  `
  const FooterLogo = styled.div`
  margin:0px auto 32px auto;
  `