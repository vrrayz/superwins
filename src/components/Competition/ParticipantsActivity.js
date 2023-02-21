import React, { useState } from "react";
import { SectionWrapper } from "../general_components/SectionWrapper";
import { CustomCard } from "../general_components/CustomCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatars/default.png";

export const ParticipantsActivity = ({ competitionInfo }) => {
  const [isActivityTab, setIsActivityTab] = useState(true);
  return (
    <SectionWrapper id="participantsActivity">
      <CustomCard className="px-1">
        <CardTab>
          <CardTabItem
            className={`${isActivityTab && "active"}`}
            onClick={() => setIsActivityTab(true)}
          >
            Activity
          </CardTabItem>
          <CardTabItem
            className={`${!isActivityTab && "active"}`}
            onClick={() => setIsActivityTab(false)}
          >
            Participants
            <br />
            (134)
          </CardTabItem>
        </CardTab>
        <CardList>
          {isActivityTab
            ? competitionInfo.activity?.map(({entries,timestamp,user}, index) => (
                <CardListItem key={index}>
                  <User>
                    <img src={avatar} alt="Avatar" />
                    <div>
                    <span>{user}</span>
                    <br />
                    <Link to={"/"}>{entries} {entries > 1 ? "Entries": "Entry"}</Link>
                    </div>
                  </User>
                  <Link to={"/"}>{timestamp}</Link>
                </CardListItem>
              ))
            : "No data found"}
        </CardList>
      </CustomCard>
    </SectionWrapper>
  );
};
const CardTab = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-2);
`;
const CardTabItem = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
  color: var(--color-grey-2);
  cursor: pointer;
  &.active {
    border-bottom: 5px solid var(--color-primary-red);
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    color: var(--color-light-1);
  }
`;
const CardList = styled.div`
  height: 280px;
  overflow: scroll;
`;
const CardListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid var(--color-grey-2);
  a {
    margin: auto 0;
  }
`;
const User = styled.div`
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  span {
    margin: auto 0;
  }
  a {
    font-size: 0.8rem;
  }
`;
