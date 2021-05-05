import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { OrderTabs } from "../components/orders/OrderTabs";
import { Section } from "../components/orders/OrderStyles";
import { setCurrentTab, setButton } from "../store/actions";

const Orders = (props: {
  orders: any;
  setCurrentTab: (t: string) => void;
  setButton: (b: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("");
  const handleChange = (name: string) => {
    setActiveTab(name);
    props.setCurrentTab(name);
    props.setButton("sent");
  };

  useEffect(() => {
    if (!activeTab) {
      const [, , tab] = Object.keys(props.orders || {});
      setActiveTab(tab);
      if (tab) props.setCurrentTab(tab);
    }
  }, [props.orders]);

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

function mapStateToProps(state: any) {
  return { orders: state.ordersReducer?.order };
}

export default connect(mapStateToProps, { setCurrentTab, setButton })(Orders);
