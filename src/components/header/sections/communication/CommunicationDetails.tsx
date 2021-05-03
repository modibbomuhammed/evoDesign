import React from "react";

import { SummaryDetails } from "./summary/SummaryDetails";
import { Summary, SummaryText } from "../styles/CommunicationStyles";

export interface Activity {
  email: number;
  sms: number;
  orders: number;
}

export const CommunicationDetails = (props: { activity: Activity }) => {
  return (
    <>
      <Summary>
        <SummaryText>90-DAY COMMUNICATION ACTIVITY</SummaryText>
      </Summary>

      <SummaryDetails activity={props.activity} />
    </>
  );
};
