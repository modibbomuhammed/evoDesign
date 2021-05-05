import React from "react";

import Buttons from "./Buttons";
import { Section, Container, StatusMessage } from "./DashboardStyles";

export const Dashboard = () => {
  return (
    <Section>
      <Container>
        <Buttons />
      </Container>

      <StatusMessage>RECENT ORDERS</StatusMessage>
    </Section>
  );
};
