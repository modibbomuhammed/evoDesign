import React from "react";
import moment from "moment";

import { Itag, Text } from "./styles/GenderStyles";

interface Props {
  gender: string;
  birthday: string;
}

export const GenderDetails: React.FC<Props> = ({ gender, birthday }) => {
  const age = (birthday && moment().diff(birthday, "years")) || "";
  const genderDisplay = gender || "";

  return (
    <>
      <Itag className="fal fa-user"></Itag>
      {birthday && <Text>{`${genderDisplay.toUpperCase()} - ${age}`}</Text>}
    </>
  );
};
