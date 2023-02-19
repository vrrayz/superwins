import React, { useEffect, useState } from "react";

import { tabData } from "../../data/tabData";
import { nftCompetitionData } from "../../data/nftCompetitionData";

import { Tabs } from "../Tabs/Tabs";
import { LiveSection } from "./LiveSection";
import { CompletedSection } from "./CompletedSection";
import { ActivitySection } from "./ActivitySection";
import { InfoSection } from "../general_components/InfoSection";
import { MainContainer } from "../MainContainer";

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
    <MainContainer>
      <div>
        <Tabs tabs={tabs} updateParams={updateParams} />
        <InfoSection />
        {tabs.live && <LiveSection nftCompetitionData={nftCompetitionData} />}
        {tabs.completed && (
          <CompletedSection nftCompetitionData={nftCompetitionData} />
        )}
        {tabs.activity && <ActivitySection />}
      </div>
    </MainContainer>
  );
};
