import React, { useState, useEffect } from "react";
import { fetchOrderInfo, setButton } from "../store/actions/index";
import { connect } from "react-redux";

import {
  ActiveButton,
  ActiveText,
  DisabledButton,
  DisabledText,
} from "../components/dashboard/DashboardStyles";

interface props {
  fetchOrderInfo: () => void;
  setButton: (button: string) => any;
  changeTab: string;
}
const Buttons: React.FC<props> = ({
  fetchOrderInfo,
  setButton,
  changeTab,
}): JSX.Element => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    fetchOrderInfo();
    setButton("sent");
  }, []);

  useEffect(() => {
    setActive(true);
  }, [changeTab]);

  const handleClick = (event: React.MouseEvent) => {
    setActive(!active);
    const currentButton = !active ? "sent" : "errors";
    setButton(currentButton);
    fetchOrderInfo();
  };

  return (
    <>
      <ActiveButton onClick={handleClick} status={active}>
        <ActiveText status={active}>SENT</ActiveText>
      </ActiveButton>
      <DisabledButton onClick={handleClick} status={active}>
        <DisabledText status={active}>ERRORS</DisabledText>
      </DisabledButton>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    changeTab: state.statusReducer.currentTab,
  };
}
export default connect(mapStateToProps, { fetchOrderInfo, setButton })(Buttons);