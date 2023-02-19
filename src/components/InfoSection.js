import React from "react";
import { CustomCard } from "./general_components/CustomCard";
import { CustomCardText } from "./general_components/CustomCardText";

export const InfoSection = () => {
  return (
    <section className="info-section px-3 mb-2">
      <CustomCard>
        <CustomCardText className="text-center">NEW Earn 2.5% on all user purchase from referrals</CustomCardText>
      </CustomCard>
    </section>
  );
};
