import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import NewOrderButton from "./NewOrderButton";
import { NavBar, SpanStar, NavName } from "./Styles";

export const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavBar>
      <>
        <SpanStar>
          <i className="fal fa-star"></i>
        </SpanStar>
        <NavName>Joseph Smith</NavName>
      </>
      <NewOrderButton openModal={() => setIsOpen(true)} />

      <Modal open={isOpen} closeModal={() => setIsOpen(false)}></Modal>
    </NavBar>
  );
};
