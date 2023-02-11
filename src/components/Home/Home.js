import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { tabData } from "../../data/tabData";
import { nftCompetitionData } from "../../data/nftCompetitionData";

import { Tabs } from "../Tabs/Tabs";
import { LiveSection } from "./LiveSection";
import { CompletedSection } from "./CompletedSection";
import { ActivitySection } from "./ActivitySection";

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
      {tabs.live && <LiveSection nftCompetitionData={nftCompetitionData} />}
      {tabs.completed && <CompletedSection nftCompetitionData={nftCompetitionData} />}
      {tabs.activity && <ActivitySection />}
    </>
  );
};