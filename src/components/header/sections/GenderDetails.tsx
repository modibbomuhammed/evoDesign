import React from "react";
import moment from "moment";

import { Itag, Text } from "./styles/GenderStyles";

interface Props {
  gender: string;
  birthdate: string;
}

export const GenderDetails: React.FC<Props> = ({ gender, birthdate}) => {
  const age =
    (birthdate && moment().diff(birthdate, "years")) || "";
  const genderDisplay = gender || "";

  return (
    <>
      <Itag className="fal fa-user"></Itag>
      {birthdate && <Text>{`${genderDisplay.toUpperCase()} - ${age}`}</Text>}
    </>
  );
};
