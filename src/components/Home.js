import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { tabData } from "../data/tabData";
import { nftCompetitionData } from "../data/nftCompetitionData";

import { GridSection } from "./NftGrid/GridSection";
import { Tabs } from "./Tabs/Tabs";
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
    <>
      <Tabs tabs={tabs} updateParams={updateParams} />
      <section className="info-section px-3">
        <div className="info">
          <p className="info-text">
            NEW Earn 2.5% on all user purchase from referrals
          </p>
        </div>
      </section>
      {tabs.live && (
        <>
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="featured"
            sectionHeading={"featured"}
          />
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="hourly-schedule"
            sectionHeading={"hourly schedule"}
          />
          <GridSection
            nftCompetitionData={nftCompetitionData}
            className="daily-killer-bears"
            sectionHeading={"daily killer bears"}
          />
        </>
      )}
      {tabs.completed && (
        <>
          <CompletedSection />
        </>
      )}
    </>
  );
};
const CompletedSection = () => {
  const [isHourlySchedule, setIsHourlySchedule] = useState(true);

  return (
    <>
      <InnerTabContainer>
        <InnerTabItem
          className={isHourlySchedule ? "active" : ""}
          onClick={() => setIsHourlySchedule(true)}
        >
          Hourly Schedule
        </InnerTabItem>
        <InnerTabItem
          className={isHourlySchedule ? "" : "active"}
          onClick={() => setIsHourlySchedule(false)}
        >
          Head 2 Head
        </InnerTabItem>
      </InnerTabContainer>
      {isHourlySchedule ? (
        <GridSection
          nftCompetitionData={nftCompetitionData}
          className=""
          sectionHeading={""}
        />
      ) : (
        <GridSection
          nftCompetitionData={nftCompetitionData}
          className=""
          sectionHeading={""}
        />
      )}
    </>
  );
};
const InnerTabContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`;
const InnerTabItem = styled.div`
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;

  &.active {
    color: #e70707;
  }
`;
