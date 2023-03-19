import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

export const InputToggle = ({name, className}) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ToggleBoxContainer className={className}>
      <Input type="checkbox" name={name} value={isToggled ? 'check':'unchecked'}/>
      <ToggleBox
        className={`${isToggled && "toggled"}`}
        onClick={() => setIsToggled(!isToggled)}
      />
    </ToggleBoxContainer>
  );
};
const ToggleBoxContainer = styled.div`
display: inline-flex;
  ${Input} {
    width: 1px;
  }
`;
const ToggleBox = styled.div`
  width: 30px;
  height: 15px;
  background-color: var(--color-primary-darkgrey-2);
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transition: 100ms background-color;

  &:after {
    position: absolute;
    display: block;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--color-light-1);
    transition: 100ms right;
  }

  &.toggled {
    background-color: var(--color-primary-red);
  }
  &.toggled:after {
    right: 0px;
  }
`;
