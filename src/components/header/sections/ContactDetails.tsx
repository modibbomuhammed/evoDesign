import React from "react";
import { Contact, ContactType, ContactValue } from "./styles/ContactStyles";

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
      <div>
        <ContactType>
          <i className="fal fa-user user-pic"></i>
        </ContactType>
        {props.id && <ContactValue>#{props.id}</ContactValue>}
      </div>
      <div>
        <ContactType>
          <i className="fal fa-address-book"></i>
        </ContactType>
        <ContactValue>{props.homePhone}</ContactValue>
      </div>
      <div>
        <ContactType>
          <i className="fal fa-fax"></i>
        </ContactType>
        <ContactValue>{props.mobilePhone}</ContactValue>
      </div>
      <div>
        <ContactType>
          <i className="fal fa-home"></i>
        </ContactType>
        {/* <ContactValue>{props.workPhone}</ContactValue> */}
        <ContactValue>
          248-555-300-888888888888888888888888888888888888
        </ContactValue>
      </div>
      <div>
        <ContactType>
          <i className="far fa-at"></i>
        </ContactType>
        <ContactValue>{props.email}</ContactValue>
      </div>
    </Contact>
  );
};
