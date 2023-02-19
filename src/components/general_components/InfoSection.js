import React from "react";
import { CustomCard } from "./CustomCard";
import { CustomCardText } from "./CustomCardText";

export const InfoSection = () => {
  return (
    <section className="info-section px-3 mb-2">
      <CustomCard>
        <CustomCardText className="text-center">NEW Earn 2.5% on all user purchase from referrals</CustomCardText>
      </CustomCard>
    </section>
  );
};
