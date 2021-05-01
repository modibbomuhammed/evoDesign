import React from "react";
import styled from "styled-components";

interface props {
  value: number;
  type: string;
}

const Box = styled.div`
  width: 185px;
  height: 95px;
  background: #edf5ff 0% 0% no-repeat padding-box;
`;
const BoxVal = styled.div`
  height: 71px;
  width: 100%;
  text-align: center;
`;

const BoxType = styled.div`
  width: 185px;
  height: 24px;
  text-align: center;
  background: #d5dce5 0% 0% no-repeat padding-box;
`;
const SpanValue = styled.span`
  width: 28px;
  height: 68px;
  font-family: "Open Sans", sans-serif;
  font-size: 50px;
  line-height: 68px;
`;

const SpanType = styled.span`
  width: 30px;
  height: 14px;
  text-align: center;
  font: normal normal 600 10px/14px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;
export const SummaryBox = (props: props) => {
  return (
    <Box>
      <BoxVal>
        <SpanValue>{props.value}</SpanValue>
      </BoxVal>
      <BoxType>
        <SpanType>{props.type}</SpanType>
      </BoxType>
    </Box>
  );
};
