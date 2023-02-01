import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { tabData } from "../data/tabData";

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
      <section className="tabs">
        <Link
          to={"/"}
          className={`tab-item ${tabs.live && "active"}`}
          onClick={() => updateParams()}
        >
          live now (67)
        </Link>
        <Link
          to={"/?tab=completed"}
          className={`tab-item ${tabs.completed && "active"}`}
          onClick={() => updateParams("?tab=completed")}
        >
          completed (2399)
        </Link>
        <Link
          to={"/?tab=activity"}
          className={`tab-item ${tabs.activity && "active"}`}
          onClick={() => updateParams("?tab=activity")}
        >
          activity <span className="badge badge-primary">11</span>
        </Link>
      </section>
      <section className="info-section px-3">
        <div className="info">
          <p className="info-text">
            NEW Earn 2.5% on all user purchase from referrals
          </p>
        </div>
      </section>
      <section className="featured px-3">
        <div className="section-heading">
          <span>Featured</span>
        </div>
        <div className="nft-grid">
          <div className="grid-item">
            <div className="card nft-card border-0">
              <img
                src="https://i.seadn.io/gae/JSABuWLdFZdOW6pyaNXRfT8MBhVmw18xMoTAF9kRNc76-86fTg_rsVD5H9z3tsID1c8kaeieZNk7fqZU3Fntkdg7EL5EB67PtV6dog?fit=max&w=350&auto=format"
                className="card-image-top nft-card-image"
                alt="nft_image"
              />
              <div className="card-body py-1">
                <div className="nft-info">
                  <span className="badge mint_serial">#22747</span>
                  <span className="badge time_left">5 hours left!</span>
                </div>
                <h5 className="nft_heading my-1">
                  <span>Mutant Ape Yacht</span>
                  <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
                </h5>
                <div className="nft-value my-1 mb-2">
                  <small>Value:</small>
                  <span className="amount">$42,427</span>
                </div>
                <Link to={"/"} className="btn btn-primary d-block mb-3">Enter Now</Link>
                <div className="nft-card-footer text-center mb-2">
                  <span className="text-uppercase fw-bold mb-1">Join 218 Superwallers</span>
                  <span>Closes: 3 Feb 2013</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card nft-card border-0">
              <img
                src="https://i.seadn.io/gae/JSABuWLdFZdOW6pyaNXRfT8MBhVmw18xMoTAF9kRNc76-86fTg_rsVD5H9z3tsID1c8kaeieZNk7fqZU3Fntkdg7EL5EB67PtV6dog?fit=max&w=350&auto=format"
                className="card-image-top nft-card-image"
                alt="nft_image"
              />
              <div className="card-body py-1">
                <div className="nft-info">
                  <span className="badge mint_serial">#22747</span>
                  <span className="badge time_left">5 hours left!</span>
                </div>
                <h5 className="nft_heading my-1">
                  <span>Mutant Ape Yacht</span>
                  <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
                </h5>
                <div className="nft-value my-1 mb-2">
                  <small>Value:</small>
                  <span className="amount">$42,427</span>
                </div>
                <Link to={"/"} className="btn btn-primary d-block mb-3">Enter Now</Link>
                <div className="nft-card-footer text-center mb-2">
                  <span className="text-uppercase fw-bold mb-1">Join 218 Superwallers</span>
                  <span>Closes: 3 Feb 2013</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
