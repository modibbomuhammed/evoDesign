import React from "react";
import styled from "styled-components";

interface props {
  name: string;
  boxclass: string;
}

interface prop {
  checker: Boolean;
}

const OrderOptions = styled.div<prop>`
  width: 165px;
  height: 40px;
  background: ${(props) => (props.checker ? "#d2d2d2" : "#3a3a3a")} 0% 0%
    no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderParagraph = styled.p<prop>`
      width: ${(props) => (props.checker ? "62px;" : "80px;")}
      height: 14px;
      white-space: nowrap;
      font: normal normal bold 12px/14px Arial;
      letter-spacing: 0px;
      color: ${(props) => (props.checker ? "#3a3a3a;" : "#ffffff")}
    `;

export const OrderBox = (props: props) => {
  return (
    <OrderOptions checker={props.boxclass === "options"}>
      <OrderParagraph checker={props.boxclass === "options"}>
        {props.name}
      </OrderParagraph>
    </OrderOptions>
  );
};
