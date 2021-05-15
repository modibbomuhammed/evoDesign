import React from "react";
import styled from "styled-components";

import { SummaryBox } from "./SummaryBox";
import { Activity } from "../CommunicationDetails";

const Details = styled.div`
  display: flex;
  height: 95px;
  justify-content: space-between;
  background-color: #edf5ff;
`;

export const SummaryDetails = (props: { activity: Activity }): JSX.Element => {
  const activities = (props.activity && Object.entries(props.activity)) || [];
  const summary = activities.map(([type, value], index) => (
    <SummaryBox key={index} value={value} type={type.toUpperCase()} />
  ));
  return <Details>{summary}</Details>;
};
