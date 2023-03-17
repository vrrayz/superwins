import React from "react";

import { MainContainer } from "../MainContainer";
import { Avatar, HeadingContainer, UserDetails } from "./styles";
import profilePic from "../../assets/img/avatars/avatar.png";
import shareIcon from "../../assets/img/icons/icons8-share-light.svg";
import { ImgIcon } from "../general_components/Icon";
import { TextLarge, TextMedium } from "../general_components/typography";
import { InnerTab } from "../Home/InnerTab";
import { useState } from "react";
import { userComponentTabItems } from "../../data/tabData";
import { Divider } from "../general_components/Divider";
import { UserTabItems } from "./UserTabItems";
import { SectionWrapper } from "../general_components/SectionWrapper";

export const User = () => {
  const [tabItems, setTabItems] = useState(userComponentTabItems);
  return (
    <MainContainer>
      <SectionWrapper>
        <HeadingContainer>
          <Avatar src={profilePic} alt="avatar" width={92} height={92} />
          <UserDetails>
            <TextLarge className="mb-0">Edgard</TextLarge>
            <TextMedium className="mb-0">
              0xa8aad55c115a9213d790e11ad90a60f3540fee72
            </TextMedium>
            <TextMedium className="text__grey-2 mb-2">
              Joined Sep 2022
            </TextMedium>
            {/* More functionality is needed here... (dropdown and twitter/facebook share option) */}
            <ImgIcon src={shareIcon} /> 
          </UserDetails>
        </HeadingContainer>
        <InnerTab setTabItems={setTabItems} items={tabItems} />
        <Divider />
        {tabItems.map((item, index) => (
          <UserTabItems tabItem={item} key={index} profilePic={profilePic} />
        ))}
      </SectionWrapper>
    </MainContainer>
  );
};
