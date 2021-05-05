import React from "react";
import { NewOrderWrapper, NewOrder } from "./Styles";

interface props {
  openModal: () => void;
}

const NewOrderButton: React.FC<props> = ({ openModal }): JSX.Element => {
  return (
    <NewOrderWrapper>
      <NewOrder onClick={() => openModal()}>New Order</NewOrder>
    </NewOrderWrapper>
  );
};

export default NewOrderButton;
