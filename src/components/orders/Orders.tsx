import React, { useState } from "react";

import { OrderBox } from "./OrderBox";
import { OrderTabs } from "./OrderTabs";
import { Section } from "./OrderStyles";

const ORDERS = {
  orders_A: [],
  orders_AA: [],
  orders_AAA: {
    sent: [
      {
        id: 1,
        order_id: 12345546,
        sent_dt: "2018-04-14",
        sent_tm: "16:19:00",
        subject: {
          title: "Thank You Bonus",
          email: "joe.smith@testemail.com",
        },
        type: "Promotion Email",
      },
      {
        id: 2,
        order_id: 12345546,
        sent_dt: "2018-04-14",
        sent_tm: "16:19:00",
        subject: {
          title: "Receipt #12345546",
          email: "joe.smith@testemail.com",
        },
        type: "Order Receipt Email",
      },
    ],
  },
  orders_B: [],
  orders_C: [],
};

export const Orders = () => {
  return (
    <Section>
      <OrderTabs tabs={Object.keys(ORDERS)} />
    </Section>
  );
};
