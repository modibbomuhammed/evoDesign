import React, { useEffect } from "react";
import { connect } from "react-redux";

import { GenderDetails, CarrierDetails, ContactDetails, CommunicationDetails} from '../components/header/sections';
import { User } from "../store/types/stateTypes";
import { fetchUserInfo } from "../store/actions";

import { Gender, Communication, Carrier } from "../components/header/sections/styles/HeaderStyles";

const Header = (props: { load: () => void; userInfo: User }): JSX.Element => {
  const { userInfo } = props;

  useEffect(() => {
    if (!Object.keys(userInfo).length) props.load();
  }, [userInfo]);

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
