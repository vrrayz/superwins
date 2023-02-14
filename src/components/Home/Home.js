import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { tabData } from "../../data/tabData";
import { nftCompetitionData } from "../../data/nftCompetitionData";
import avatarImg from "../../assets/img/avatars/default.png";

import { Tabs } from "../Tabs/Tabs";
import { LiveSection } from "./LiveSection";
import { CompletedSection } from "./CompletedSection";
import { ActivitySection } from "./ActivitySection";
import styled from "styled-components";

export const Home = () => {
  const [urlParams, setUrlParams] = useState(new URLSearchParams(""));
  const [tabs, setTabs] = useState(tabData);

  const updateParams = (queryString = "") => {
    setUrlParams(new URLSearchParams(queryString));
  };
  useEffect(() => {
    updateParams(window.location.search);
  }, []);

  useEffect(() => {
    const activeTab =
      urlParams.get("tab") === "activity" ||
      urlParams.get("tab") === "completed"
        ? urlParams.get("tab")
        : "live";
    setTabs({
      live: false,
      completed: false,
      activity: false,
      [activeTab]: true,
    });
  }, [urlParams]);

  return (
    <HomeContainer>
      <div>
        <Tabs tabs={tabs} updateParams={updateParams} />
        <section className="info-section px-3">
          <div className="info">
            <p className="info-text">
              NEW Earn 2.5% on all user purchase from referrals
            </p>
          </div>
        </section>
        {tabs.live && <LiveSection nftCompetitionData={nftCompetitionData} />}
        {tabs.completed && (
          <CompletedSection nftCompetitionData={nftCompetitionData} />
        )}
        {tabs.activity && <ActivitySection />}
      </div>
      <LiveChatContainer>
        <ChatsSection>
          <ChatInfo>
            <img src={avatarImg} alt="user" className="mt-1" />
            <div>
              <User className="mb-1">noobsage</User>
              <Message>This is my message to everyone on this platform</Message>
            </div>
          </ChatInfo>
          <ChatInfo>
            <img src={avatarImg} alt="user" className="mt-1" />
            <div>
              <User className="mb-1">noobsage</User>
              <Message>This is my message to everyone on this platform</Message>
            </div>
          </ChatInfo>
          <ChatInfo>
            <img src={avatarImg} alt="user" className="mt-1" />
            <div>
              <User className="mb-1">noobsage</User>
              <Message>This is my message to everyone on this platform</Message>
            </div>
          </ChatInfo>
          <ChatInfo>
            <img src={avatarImg} alt="user" className="mt-1" />
            <div>
              <User className="mb-1">noobsage</User>
              <Message>This is my message to everyone on this platform</Message>
            </div>
          </ChatInfo>
          <ChatInfo>
            <img src={avatarImg} alt="user" className="mt-1" />
            <div>
              <User className="mb-1">noobsage</User>
              <Message>This is my message to everyone on this platform</Message>
            </div>
          </ChatInfo>
        </ChatsSection>
        <InputSection>
        <ChatInput placeholder="Send a message" />
        <SendMessageButton>
        <i className="fa-regular fa-paper-plane"></i>
        </SendMessageButton>
        </InputSection>
      </LiveChatContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 320px;
  }
`;
const LiveChatContainer = styled.aside`
  display: none;
  @media (min-width: 1200px) {
    display: grid;
    grid-template-rows: 1fr 50px 20px;
    row-gap: 12px;
    background-color: var(--color-dark-3);
    position: fixed;
    right: 0;
    top: 0;
    width: 320px;
    height: 100vh;
  }
`;
const ChatsSection = styled.section`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const InputSection = styled.section`
  padding: 0px 16px;
  display:flex;
  justify-content:center;
`;
const ChatInfo = styled.div`
  display: flex;
  column-gap: 8px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
const Message = styled.p`
font-size: 0.85rem;
line-height: 1.2;
color: var(--color-light-1)
`
const User = styled.h5`
font-size: 1rem;
font-weight:bold;
color: var(--color-primary-red)
`
const ChatInput = styled.input `
margin-right: 0px;
width: 100%;
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
border:none;
background-color: var(--color-grey-1);
color: var(--color-light-1);
padding: 4px;
padding-left: 16px;
font-size: 14px;

&:focus-visible{
  border:none;
  outline:none;
}
`
const SendMessageButton = styled.button`
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
border:none;
background-color: var(--color-grey-1);
padding-right: 16px;
color: var(--color-light-1)
`