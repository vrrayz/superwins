import React, { useState } from "react";
import styled from "styled-components";
import { otpInputs } from "../../data/otpInputs";
import { Input } from "../general_components/Input";
import { TextLarge, TextSmall } from "../general_components/typography";

export const Verification = () => {
  const [inputs, setInputs] = useState(otpInputs);
  const setValue = (e, index) => {
    setInputs(
      inputs.map((input, i) => {
        if (index === i) input.value = e.target.value;
        return input;
      })
    );
  };
  return (
    <>
      <TextLarge className="text-uppercase text-center">
        Verification Code
      </TextLarge>
      <TextSmall
        style={{ fontSize: "14px" }}
        className="text__grey-2 text-center"
      >
        Please check your email for the verification code
      </TextSmall>
      <OtpGrid>
        {inputs.map((input, index) => (
          <Input
            placeholder="0"
            key={index}
            name={index}
            className="mb-3 px-0 text-center"
            autoFocus={input.autoFocus}
            value={input.value}
            maxLength={1}
            // onKeyUp={(e) => setValue(e,index)}
            onChange={(e) => setValue(e, index)}
          />
        ))}
      </OtpGrid>
      <TextSmall
        style={{ fontSize: "14px" }}
        className="text__light-1 text-center my-2"
      >
        Send another code
      </TextSmall>
    </>
  );
};
const OtpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
