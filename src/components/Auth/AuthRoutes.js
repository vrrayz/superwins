import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CustomCard, CardBody } from "../general_components/CustomCard";
import { CenteredSectionWrapper } from "../general_components/SectionWrapper";
import { Signup } from "./Signup";
import { Verification } from "./Verification";

export const AuthRoutes = ({ logo }) => {
  return (
    <CenteredSectionWrapper>
      <Logo src={logo} />
      <CustomCard className="mt-4 p-4">
        <CardBody>
          <Routes>
            <Route path="register" element={<Signup />} />
            <Route path="verification" element={<Verification />} />
          </Routes>
        </CardBody>
      </CustomCard>
    </CenteredSectionWrapper>
  );
};
const Logo = styled.img`
  margin: auto;
  margin-top: 48px;
`;
