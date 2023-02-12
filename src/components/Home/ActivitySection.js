import React from "react";
import styled from "styled-components";

import rewardImg from "../../assets/img/rewards/eth-1.png";

export const ActivitySection = () => {
  return (
    <>
      <ListGroupItem className="list-header">
        <span>Competition</span> <span>Username</span>
      </ListGroupItem>
      <ListGroupItem>
        <div>
          <CompetitionRewardSection>
            <img src={rewardImg} alt="reward" />
            <span>
              1 Eth
              <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
            </span>
          </CompetitionRewardSection>
          <CompetitionEnteries>Entries <span className="entries">20</span></CompetitionEnteries>
        </div>
        <div>Username</div>
      </ListGroupItem>
    </>
  );
};
const ListGroupItem = styled.div`
  display: grid;
  color: #fff;
  font-size: 14px;
  margin: 8px 16px;
  padding: 12px 0px;
  grid-template-columns: 50% 50%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &.list-header {
    font-weight: bold;
  }
  
`;
const CompetitionRewardSection = styled.div`
display:flex;
column-gap: 12px;
text-transform: uppercase;
margin-bottom: 8px;
  img {
    width: 54px;
    border-radius: 8px;
  }

  span{
    margin: auto 0px;
  }
`;
const CompetitionEnteries = styled.span`
color: #aaa;
.entries{
    font-weight:bold;
    color: #fff;
}
`
