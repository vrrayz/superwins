import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CustomCard, CardBody } from "../general_components/CustomCard";
import { SectionWrapper } from "../general_components/SectionWrapper";
import { Signup } from "./Signup";
import { Verification } from "./Verification";

export const AuthRoutes = ({ logo }) => {
  return (
    <CustomSectionWrapper>
      <Logo src={logo} />
      <CustomCard className="mt-4 p-4">
        <CardBody>
          <Routes>
            <Route path="register" element={<Signup />} />
            <Route path="verification" element={<Verification />} />
          </Routes>
        </CardBody>
      </CustomCard>
    </CustomSectionWrapper>
  );
};
const CustomSectionWrapper = styled(SectionWrapper)`
  display: grid;
  grid-template-rows: 150px 2fr;
  max-width: 400px;
  margin:auto;
`;
const Logo = styled.img`
  margin: auto;
  margin-top: 48px;
`;
