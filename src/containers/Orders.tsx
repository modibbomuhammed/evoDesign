import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { OrderTabs } from "../components/orders/OrderTabs";
import { Section } from "../components/orders/OrderStyles";
import { setCurrentTab, setButton } from "../store/actions";
import { RootState } from "../store";
import { Orders } from "../store/types/stateTypes";

const Order = (props: {
  orders: Orders;
  setCurrentTab: (t: string) => void;
  setButton: (b: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("");
  const { setButton, setCurrentTab, orders } = props;
  const handleChange = (name: string) => {
    setActiveTab(name);
    setCurrentTab(name);
    setButton("sent");
  };

  useEffect(() => {
    if (!activeTab) {
      const [, , tab] = Object.keys(orders || {});
      setActiveTab(tab);
      if (tab) setCurrentTab(tab);
    }
  }, [orders, setCurrentTab, activeTab]);

  return (
    <Section>
      <OrderTabs
        tabs={Object.keys(props.orders || {})}
        active={activeTab}
        handleChange={handleChange}
      />
    </Section>
  );
};

function mapStateToProps(state: RootState) {
  return { orders: state.ordersReducer?.order };
}

export default connect(mapStateToProps, { setCurrentTab, setButton })(Order);
