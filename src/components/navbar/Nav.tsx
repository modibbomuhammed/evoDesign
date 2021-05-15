import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { NavBar, SpanStar, NavName, NewOrderButton, NewOrderWrapper } from "./Styles";

export const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBar>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SpanStar>
          <i className="fal fa-star"></i>
        </SpanStar>
        <NavName>Joseph Smith</NavName>
      </div>
      <NewOrderWrapper>
        <NewOrderButton onClick={() => setIsOpen(true)}>
          New Order
        </NewOrderButton>
      </NewOrderWrapper>

      <Modal open={isOpen} closeModal={() => setIsOpen(false)}></Modal>
    </NavBar>
  );
};
