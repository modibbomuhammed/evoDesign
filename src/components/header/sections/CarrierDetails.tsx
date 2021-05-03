import React from "react";
import moment from "moment";

import { Text, Status, Date, Paragraph } from "./styles/CarrierStyles";

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
