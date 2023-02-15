import React from "react";
import styled from "styled-components";

import rewardImg from "../../assets/img/rewards/eth-1.png";
import avatarImg from "../../assets/img/avatars/default.png";
import { Link } from "react-router-dom";

export const ActivitySection = () => {
  return (
    <>
      <ListGroupItem className="list-header">
        <span>Competition</span>
        <span>Username</span>
        <span>Entries Purchased</span>
        <span>Time</span>
      </ListGroupItem>
      <ListGroupItem>
        <ListData>
          <CompetitionRewardSection>
            <img src={rewardImg} alt="reward" />
            <span>
              1 Eth
              <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
            </span>
          </CompetitionRewardSection>
          <CompetitionEnteries>
            Entries <span className="entries">20</span>
          </CompetitionEnteries>
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
        <ListData className="my-auto">
          <span className="entries">20</span>
        </ListData>
        <ListData className="my-auto">
          <Link to={"/"} className="timestamp">
            30 minutes ago{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </ListData>
      </ListGroupItem>
    </>
  );
};
const ListGroupItem = styled.div`
  display: grid;
  color: var(--color-light-1);
  font-size: 14px;
  margin: 8px 16px;
  padding: 12px 0px;
  grid-template-columns: 50% 50%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  span:nth-child(n + 3),
  div:nth-child(nt + 3) {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;

    span:nth-child(n + 2) {
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
const CompetitionEnteries = styled.span`
  color: #aaa;
  .entries {
    font-weight: bold;
    color: var(--color-light-1);
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
  @media (min-width: 768px) {
    & > span:nth-child(2),
    & > div:nth-child(2) {
      display: none;
    }
  }
`;
