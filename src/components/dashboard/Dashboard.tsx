import React from "react";

import Buttons from "../../containers/Buttons";
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
