import React from "react";
import styled from "styled-components";

interface props {
  id: number;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  email: string;
}

const Contact = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 117px;
  width: 239px;
  height: 125px;
  background: #edf5ff 0% 0% no-repeat padding-box;
  justify-content: space-around;
`;

const ContactType = styled.span`
  width: 12px;
  height: 14px;
  font-size: 14px;
`;
const ContactValue = styled.span`
  margin-left: 12px;
  width: 63px;
  height: 17px;
  text-align: left;
  font: normal normal normal 12px/17px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;
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
        <ContactValue>{props.workPhone}</ContactValue>
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
