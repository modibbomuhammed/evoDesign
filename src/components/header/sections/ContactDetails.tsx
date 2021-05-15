import React from "react";
import {
  Contact,
  ContactType,
  ContactValue,
  ContactWrapper,
} from "./styles/ContactStyles";

interface props {
  [key: string]: string | number;
  id: number;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  email: string;
}

interface config {
  [key: string]: string;
}

const classNameConfig: config = {
  id: "fal fa-user user-pic",
  homePhone: "far fa-mobile",
  workPhone: "fal fa-home",
  mobilePhone: "fal fa-fax",
  email: "far fa-at",
};

export const ContactDetails = (props: props): JSX.Element => {
  const keys = Object.keys(props);
  return (
    <Contact>
      {keys.map((val, index) => {
        return (
          <ContactWrapper key={index}>
            <ContactType>
              <i className={classNameConfig[val]}></i>
            </ContactType>
            <ContactValue>
              {`${val === "id" ? "#" : ""}` + props[val]}
            </ContactValue>
          </ContactWrapper>
        );
      })}

    </Contact>
  );
};
