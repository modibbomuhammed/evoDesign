import React from "react";
import styled from "styled-components";
import moment from "moment";

const Itag = styled.i`
  position: absolute;
  top: 21px;
  left: 17px;
  width: 63px;
  height: 72px;
  text-align: left;
  font-size: 72px;
  font-weight: 300;
  line-height: 86px;
  letter-spacing: 0px;
  color: #ffffff;
`;

const Text = styled.span`
  position: absolute;
  white-space: nowrap;
  top: 105px;
  left: 24.88px;
  width: 47px;
  height: 11px;
  text-align: left;
  font: normal normal normal 10px/11px Arial;
  letter-spacing: 0px;
  color: #333333;
`;

interface Props {
  gender: string;
  birthdate: string;
}

export const GenderDetails = (props: Props) => {
  const age =
    (props.birthdate && moment().diff(props.birthdate, "years")) || "";
  const gender = props.gender || "";

  return (
    <>
      <Itag className="fal fa-user"></Itag>
      {props.birthdate && <Text>{`${gender.toUpperCase()} - ${age}`}</Text>}
    </>
  );
};
