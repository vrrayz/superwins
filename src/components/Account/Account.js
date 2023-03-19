import React from "react";
import styled from "styled-components";
import {
  AppendButton,
  Input,
  InputGroupAppend,
} from "../general_components/Input";
import { InputToggle } from "../general_components/InputToggle";
import {
  CenteredSectionWrapper,
  SectionWrapper,
} from "../general_components/SectionWrapper";
import profilePic from "../../assets/img/avatars/avatar.png";
import editIcon from "../../assets/img/icons/icons8-edit-light.svg";
import { Avatar } from "../User/styles";
import { Icon, ImgIcon } from "../general_components/Icon";
import { TextInlineMedium, TextLarge, TextMedium } from "../general_components/typography";
import { Button } from "../general_components/Button";

export const Account = () => {
  return (
    <CenteredSectionWrapper style={{ gridTemplateRows: "80px 2fr" }}>
      <SectionWrapper className="px-0"></SectionWrapper>
      <MidSectionWrapper>
        <Avatar src={profilePic} alt="avatar" width={92} height={92} />
        <ImgIcon src={editIcon} className="ms-2" />
        <TextLarge className="text__light-1 mt-5">noobsage</TextLarge>
        <TextMedium
          className="text__grey-2"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          0xa8aad55c115a9213d790e11ad90a60f3540fee72
        </TextMedium>
        <SectionWrapper className="px-0">
          <InputGroupAppend className="mb-4">
            <Input name="username" value="noobsage" disabled />
            <AppendButton disabled>
              <Icon className="fa-solid fa-check text-success"></Icon>
            </AppendButton>
          </InputGroupAppend>
          <InputGroupAppend className="mb-4">
            <Input name="email" value="johndoe@gmail.com" disabled />
            <AppendButton disabled>
              <Icon className="fa-solid fa-check text-success"></Icon>
            </AppendButton>
          </InputGroupAppend>
        </SectionWrapper>
        <SectionWrapper className="px-0 text__light-1 text-uppercase text-start mb-4">
          <TextMedium className="mb-2">Communication settings</TextMedium>
          <SlateSection content={'start'} paddingX={8} className="mb-5">
            <InputToggle name='marketingEmails' className="mt-2 me-3" />
            <TextMedium className="text__grey-2 mb-0">Send me marketing emails from time to time</TextMedium>
          </SlateSection>

          <TextMedium className="mb-2">Connect your social accounts</TextMedium>
          <SlateSection paddingX={18} className="mb-0">
            <SocialMediaFlex>
              <RoundIconWrapper>
                <Icon className="fa-brands fa-discord"></Icon>
              </RoundIconWrapper>
              <TextInlineMedium className="my-auto ms-2">Discord</TextInlineMedium>
            </SocialMediaFlex>
            <Button className={`text-center py-2 px-3 ms-1 btn-primary`}>
              <TextInlineMedium>connect</TextInlineMedium>
            </Button>
          </SlateSection>
          <SlateSection paddingX={18} className="mb-4">
            <SocialMediaFlex>
              <RoundIconWrapper>
                <Icon className="fa-brands fa-twitter"></Icon>
              </RoundIconWrapper>
              <TextInlineMedium className="my-auto ms-2">Twitter</TextInlineMedium>
            </SocialMediaFlex>
            <Button className={`text-center py-2 px-3 ms-1 btn-primary`}>
              <TextInlineMedium>connect</TextInlineMedium>
            </Button>
          </SlateSection>
          <TextMedium className="mb-2">Logs</TextMedium>
          <SlateSection paddingX={8} className="mb-0">
            <TextInlineMedium className="text__grey-2">Games History</TextInlineMedium>
          </SlateSection>
        </SectionWrapper>
        <TextMedium className="mb-0 text__grey-2 text-uppercase">Log out</TextMedium>
      </MidSectionWrapper>
    </CenteredSectionWrapper>
  );
};
const MidSectionWrapper = styled(SectionWrapper)`
  padding: 0px;
  overflow: hidden;
  text-align: center;
`;
const SlateSection = styled.div`
  border-top: 1px solid var(--color-grey-1);
  border-bottom: 1px solid var(--color-grey-1);
  padding: ${props => props.paddingX || '20'}px 0px;
  display: flex;
  flex-direction: row;
  text-transform: none;
  justify-content: ${props => props.content || 'space-between'};
`;
const SocialMediaFlex = styled.div`
display: flex;
text-transform: uppercase;
font-weight: bold;
`
const RoundIconWrapper = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: var(--color-primary-red);
text-align: center;
display:flex;
justify-content:center;
flex-direction:column;
${Icon}{
  color: var(--color-light-1);
}
`
