import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { GenderDetails } from "./sections/GenderDetails";
import { ContactDetails } from "./sections/ContactDetails";
import { CarrierDetails } from "./sections/CarrierDetails";
import { CommunicationDetails } from "./sections/communication/CommunicationDetails";
import { User } from "../../store/types/stateTypes";
import { fetchUserInfo } from "../../store/actions/";

const Gender = styled.section`
  position: absolute;
  top: 80px;
  left: 15px;
  width: 97px;
  height: 125px;
  background: #edf5ff 0% 0% no-repeat padding-box;
`;

const Communication = styled.section`
  display: flex;
  flex-direction: column;
  width: 559px;
  height: 125px;
  position: absolute;
  top: 80px;
  left: 361px;
`;

const Carrier = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  left: 925px;
  width: 225px;
  height: 125px;
  background: #edffed 0% 0% no-repeat padding-box;
`;
const Header = (props: { load: () => void; userInfo: User }): JSX.Element => {
  useEffect(() => {
    if (!Object.keys(props.userInfo).length) props.load();
  }, []);

  const { userInfo } = props;

  
  return (
    <header style={{ display: "flex" }}>
      <Gender>
        <GenderDetails
          gender={userInfo.gender}
          birthdate={userInfo.birth_date}
        />
      </Gender>

      <ContactDetails
        id={userInfo.id}
        homePhone={userInfo.home_phone}
        workPhone={userInfo.work_phone}
        mobilePhone={userInfo.mobile_phone}
        email={userInfo.email}
      />

      <Communication>
        <CommunicationDetails activity={userInfo.activity} />
      </Communication>

      <Carrier>
        <CarrierDetails carrierStatus={userInfo.carrier_status} />
      </Carrier>
    </header>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  load: () => dispatch(fetchUserInfo()),
});

const mapStateToProps = (state: any) => ({
  userInfo: state.userReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
