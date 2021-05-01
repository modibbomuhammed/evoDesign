import React from "react";
import styled from "styled-components";
import moment from "moment";

const Text = styled.span`
  white-space: nowrap;
  width: 119px;
  height: 17px;
  flex-basis: 10%;
  text-align: left;
  font: normal normal normal 12px/17px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;
const Status = styled.span`
  width: 54px;
  height: 68px;
  font: normal normal 600 50px/68px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
  flex-basis: 80%;
`;
const Date = styled.span`
  flex-basis: 10%;
  width: 225px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1) 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.p`
  white-space: nowrap;
  width: 86px;
  height: 14px;
  text-align: left;
  font: normal normal 600 10px/14px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;

export const CarrierDetails = (props: {
  carrierStatus: { since: string; status: string };
}): JSX.Element => {
  const date =
    (props?.carrierStatus && moment(props.carrierStatus.since).format("LL")) ||
    null;
  return (
    <>
      <Text>SMS CARRIER STATUS</Text>
      <Status>{props?.carrierStatus?.status}</Status>
      <Date>{date && <Paragraph>SINCE {date.toUpperCase()}</Paragraph>}</Date>
    </>
  );
};
