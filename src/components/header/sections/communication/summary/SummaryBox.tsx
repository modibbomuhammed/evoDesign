import React from "react";
import {
  Box,
  BoxVal,
  BoxType,
  SpanValue,
  SpanType,
} from "../../styles/SummaryBoxStyles";

interface props {
  value: number;
  type: string;
}

export const SummaryBox = (props: props) => {
  return (
    <Box className="summary-box-wrapper">
      <BoxVal>
        <SpanValue>{props.value}</SpanValue>
      </BoxVal>
      <BoxType>
        <SpanType>{props.type}</SpanType>
      </BoxType>
    </Box>
  );
};
