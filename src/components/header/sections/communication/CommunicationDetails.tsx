import React from "react";
import styled from "styled-components";

import { SummaryDetails } from "./summary/SummaryDetails";

export interface Activity {
  email: number;
  sms: number;
  orders: number; 
}

const Summary = styled.div`
  width: 559px;
  height: 30px;
  background: #edf5ff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const SummaryText = styled.span`
  position: absolute;
  white-space: nowrap;
  top: 7px;
  left: 181px;
  width: 197px;
  height: 17px;
  text-align: left;
  font: normal normal normal 12px/17px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;
export const CommunicationDetails = (props:{ activity: Activity}) => {
  return (
    <>
      <Summary>
        <SummaryText>90-DAY COMMUNICATION ACTIVITY</SummaryText>
      </Summary>

      <SummaryDetails activity={props.activity} />
    </>
  );
};
