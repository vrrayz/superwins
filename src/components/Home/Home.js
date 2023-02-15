import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { tabData } from "../../data/tabData";
import { nftCompetitionData } from "../../data/nftCompetitionData";

import { Tabs } from "../Tabs/Tabs";
import { LiveSection } from "./LiveSection";
import { CompletedSection } from "./CompletedSection";
import { ActivitySection } from "./ActivitySection";
import styled from "styled-components";
import { LiveChat } from "./LiveChat";

export const Home = () => {
  const [urlParams, setUrlParams] = useState(new URLSearchParams(""));
  const [tabs, setTabs] = useState(tabData);
  const [isChatToggled, setIsChatToggled] = useState(false);

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
      <LiveChat isChatToggled={isChatToggled} />
      <ToggleChatButton onClick={() => setIsChatToggled(!isChatToggled)} isChatToggled={isChatToggled}>
        {isChatToggled ? <i className="fa-solid fa-xmark"></i>:<i className="fa-regular fa-comment-dots"></i>}
      </ToggleChatButton>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 320px;
  }
`;
const ToggleChatButton = styled.button`
  position: fixed;
  bottom: 12px;
  right: 12px;
  font-size: ${({isChatToggled}) => isChatToggled ? `18px`:`28px`};
  width: ${({isChatToggled}) => isChatToggled ? `45px`:`70px`};
  height: ${({isChatToggled}) => isChatToggled ? `45px`:`70px`};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 3px 12px #000;
  background-color: ${({isChatToggled}) => isChatToggled ? `var(--color-dark-2)`:`var(--color-primary-red)`};
  color: var(--color-light-1);
  z-index: 10000;
  @media (min-width: 1200px) {
    display: none;
  }
`;
