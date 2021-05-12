import React from "react";
import {
  Contact,
  ContactType,
  ContactValue,
  ContactWrapper,
} from "./styles/ContactStyles";

interface props {
  id: number;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  email: string;
}

export const ContactDetails = (props: props): JSX.Element => {
  return (
    <Contact>
      <ContactWrapper>
        <ContactType>
          <i className="fal fa-user user-pic"></i>
        </ContactType>
        {props.id && <ContactValue>#{props.id}</ContactValue>}
      </ContactWrapper>

      <ContactWrapper>
        <ContactType>
          <i className="fal fa-address-book"></i>
        </ContactType>
        <ContactValue>{props.homePhone}</ContactValue>
      </ContactWrapper>

      <ContactWrapper>
        <ContactType>
          <i className="fal fa-fax"></i>
        </ContactType>
        <ContactValue>{props.mobilePhone}</ContactValue>
      </ContactWrapper>

      <ContactWrapper>
        <ContactType>
          <i className="fal fa-home"></i>
        </ContactType>
        <ContactValue>{props.workPhone}</ContactValue>
      </ContactWrapper>

      <ContactWrapper>
        <ContactType>
          <i className="far fa-at"></i>
        </ContactType>
        <ContactValue>{props.email}</ContactValue>
      </ContactWrapper>
    </Contact>
  );
};
