import React from "react";
import { NewOrderWrapper, NewOrder } from "./Styles";

const NewOrderButton: React.FC = (): JSX.Element => {
  return (
    <NewOrderWrapper>
      <NewOrder>New Order</NewOrder>
    </NewOrderWrapper>
  );
};

export default NewOrderButton;
