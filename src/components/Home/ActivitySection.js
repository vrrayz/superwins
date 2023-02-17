import React from "react";
import styled from "styled-components";

import rewardImg from "../../assets/img/rewards/eth-1.png";
import avatarImg from "../../assets/img/avatars/default.png";
import { competitionActivityData } from "../../data/competitionActivityData";
import { competitionGameActivityData } from "../../data/competitionGameActivityData";
import { Link } from "react-router-dom";
import { InnerTab } from "./InnerTab";
import { useState } from "react";

export const ActivitySection = () => {
  const [isActivity, setIsActivity] = useState(true);
  return (
    <>
      <InnerTab
        isFirstItem={isActivity}
        setIsFirstItem={setIsActivity}
        items={["Activity", "Games"]}
      />
      <ListGroupItem className={`list-header ${isActivity && 'activity-list'}`} isActivity={isActivity}>
        {isActivity ? (
          <>
            <span>Competition</span>
            <span>Username</span>
            <span>Entries Purchased</span>
            <span>Time</span>
          </>
        ) : (
          <>
            <span>Game</span>
            <span>User</span>
            <span>Action</span>
            <span>Amount</span>
            <span>Time</span>
          </>
        )}
      </ListGroupItem>
      {isActivity &&
        competitionActivityData.map((comp) => (
          <ListGroupItem key={comp.id} className={`${isActivity && 'activity-list'}`} isActivity={isActivity}>
            <ListData>
              <CompetitionRewardSection>
                <img src={rewardImg} alt="reward" />
                <span>
                  1 Eth
                  <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
                </span>
              </CompetitionRewardSection>
              <CompetitionEntries>Entries <span className="entries">20</span></CompetitionEntries>
            </ListData>
            <ListData>
              <UserAvatarSection>
                <img src={avatarImg} alt="avatar" />
                <span>SuperRyan</span>
              </UserAvatarSection>
              <div className="text-center">
                <Link to={"/"} className="timestamp">
                  30 minutes ago{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </div>
            </ListData>
            <ListData className="my-auto display-md-block">
              <span className="entries">20</span>
            </ListData>
            <ListData className="my-auto display-md-block">
              <Link to={"/"} className="timestamp">
                30 minutes ago{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </ListData>
          </ListGroupItem>
        ))}
      {!isActivity &&
        competitionGameActivityData.map((comp) => (
          <ListGroupItem key={comp.id} isActivity={isActivity}>
            <ListData>
              <GameSection>
                <img src={rewardImg} alt="reward" />
                <span>
                  Game Name
                  <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
                </span>
              </GameSection>
            </ListData>
            <ListData>
              <UserSection>
                <img src={avatarImg} alt="avatar" />
                <span>SuperRyan</span>
              </UserSection>
            </ListData>
            <ListData>
              <span className="entries">BET</span>
            </ListData>
            <ListData>
              <span>0.001</span>
            </ListData>
            <ListData>
            <Link to={"/"} className="timestamp">
                30 minutes ago{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </ListData>
          </ListGroupItem>
        ))}
    </>
  );
};
const ListGroupItem = styled.div`
  display: grid;
  color: var(--color-light-1);
  font-size: 14px;
  margin: 8px 16px;
  padding: 12px 0px;
  grid-template-columns: ${({ isActivity }) =>
    isActivity ? `50% 50%` : `1fr 2fr 1fr 1fr 1fr`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &.activity-list span:nth-child(n + 3), &.activity-list div:nth-child(n + 3) {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr ${({ isActivity }) =>
        isActivity ? `` : `1fr`};
    text-align: center;

    &.activity-list span:nth-child(n + 2) {
      display: block;
    }
  }

  &.list-header {
    font-weight: bold;
  }
  .timestamp {
    font-size: 12px;
  }
`;
const CompetitionRewardSection = styled.div`
  display: flex;
  column-gap: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  img {
    width: 54px;
    border-radius: 8px;
  }

  span {
    margin: auto 0px;
  }
`;
const CompetitionEntries = styled.span`
  color: #aaa;
  .entries {
    font-weight: bold;
    color: var(--color-light-1);
  }
  @media (min-width: 768px) {
    display: none !important;
  }
`;
const UserAvatarSection = styled.div`
  display: flex;
  column-gap: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  img {
    width: 50px;
    border-radius: 50%;
  }
  span {
    margin: auto 0px;
  }
`;
const ListData = styled.div`
color: var(--color-light-1);
  @media (min-width: 768px) {
    & > span:nth-child(2),
    & > div:nth-child(2) {
      display: none;
    }
  }
`;
const GameSection = styled.div`
img {
  width: 20px;
  border-radius: 8px;
}
span {
  display: none;
}
@media (min-width: 768px) {
  span {
    display: inline;
    font-size: 12px;
    margin-left: 8px;
  }
}
`
const UserSection = styled.div`
display:flex;
img {
  width: 20px;
  border-radius: 8px;
}
span{
  text-overflow: ellipsis;
}
`