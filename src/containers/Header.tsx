import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  GenderDetails,
  CarrierDetails,
  ContactDetails,
  CommunicationDetails,
} from "../components/header/sections";
import { User } from "../store/types/stateTypes";
import { fetchUserInfo } from "../store/actions";

import {
  Gender,
  Communication,
  Carrier,
} from "../components/header/sections/styles/HeaderStyles";
import { RootState } from "../store";

const Header = (props: {
  fetchUserInfo: () => void;
  userInfo: User;
}): JSX.Element => {
  const { userInfo, fetchUserInfo } = props;

  useEffect(() => {
    if (!Object.keys(userInfo).length) fetchUserInfo();
  }, [userInfo, fetchUserInfo]);

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        height: "125px",
        boxSizing: "border-box",
        marginBottom: "8px",
      }}
    >
      <Gender>
        <GenderDetails
          gender={userInfo.gender}
          birthday={userInfo.birth_date}
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

const mapStateToProps = (state: RootState) => ({
  userInfo: state.userReducer,
});

export default connect(mapStateToProps, { fetchUserInfo })(Header);
