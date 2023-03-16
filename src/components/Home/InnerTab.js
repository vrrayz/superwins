import React from "react";
import styled from "styled-components";

export const InnerTab = ({setTabItems, items }) => {
  const toggleActive = (index) => {
    const newTabItems = items.map((item, i) => {
      index === i ? item.active = true : item.active = false
      return item
    })
    setTabItems(newTabItems)
  }
  return (
    <InnerTabContainer>
      {items.map((item, index) => (
        <InnerTabItem
          key={index}
          className={item.active ? "active" : ""}
          onClick={() => toggleActive(index)}
        >
          {item.name}
        </InnerTabItem>
      ))}
      {/* <InnerTabItem
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
      </InnerTabItem> */}
    </InnerTabContainer>
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
  color: var(--color-light-1);
  font-size: 14px;
  cursor: pointer;

  &.active {
    color: var(--color-primary-red);
  }
`;
