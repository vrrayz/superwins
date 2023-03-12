import React from "react";

import { MainContainer } from "../MainContainer";
import { Avatar, HeadingContainer, UserDetails, Name, Address, DateJoined } from "./styles";
import profilePic from "../../assets/img/avatars/avatar.png"
import { Icon } from "../general_components/Icon";

export const User = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <Avatar src={profilePic} alt="avatar" />
        <UserDetails>
            <Name>Edgard</Name>
            <Address>0xa8aad55c115a9213d790e11ad90a60f3540fee72</Address>
            <DateJoined>Joined Sep 2022</DateJoined>
            <Icon className="fa-solid fa-share-nodes my-auto me-2 text-light"></Icon>
        </UserDetails>
      </HeadingContainer>
    </MainContainer>
  );
};
