import React from 'react'
import styled from 'styled-components';

export const InnerTab = ({isFirstItem, setIsFirstItem,items}) => {
    const [firstItem, secondItem] = items
  return (
    <InnerTabContainer>
          <InnerTabItem
            className={isFirstItem ? "active" : ""}
            onClick={() => setIsFirstItem(true)}
          >
           {firstItem}
          </InnerTabItem>
          <InnerTabItem
            className={isFirstItem ? "" : "active"}
            onClick={() => setIsFirstItem(false)}
          >
            {secondItem}
          </InnerTabItem>
        </InnerTabContainer>
  )
}
const InnerTabContainer = styled.div`
display: flex;
justify-content: center;
column-gap: 16px;
margin-top: 32px;
margin-bottom: 16px;
`;
const InnerTabItem = styled.div`
text-transform: uppercase;
color: var(--color-light-1);
font-size: 14px;
cursor: pointer;

&.active {
  color: var(--color-primary-red);
}
`;

