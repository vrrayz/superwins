import React from "react";

import { MainContainer } from "../MainContainer";
import { Avatar, HeadingContainer, UserDetails } from "./styles";
import profilePic from "../../assets/img/avatars/avatar.png"
import shareIcon from "../../assets/img/icons/icons8-share-light.svg";
import { Icon, ImgIcon } from "../general_components/Icon";
import { TextLarge, TextMedium, TextSmall } from "../general_components/typography";

export const User = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <Avatar src={profilePic} alt="avatar" />
        <UserDetails>
            <TextLarge className="mb-0">Edgard</TextLarge>
            <TextMedium className="mb-0">0xa8aad55c115a9213d790e11ad90a60f3540fee72</TextMedium>
            <TextMedium className="text__grey-2 mb-2">Joined Sep 2022</TextMedium>
            <ImgIcon src={shareIcon} />
        </UserDetails>
      </HeadingContainer>
    </MainContainer>
  );
};
