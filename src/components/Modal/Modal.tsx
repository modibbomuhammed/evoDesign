import React from "react";
import styled, { keyframes } from "styled-components";
// import { Rotate } from "../Modal/Spinner";

interface props {
  children: any;
  open: Boolean;
  closeModal: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const ModalCloseButton = styled.div`
  position: relative;
  right: -1135px;
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

const ModalSpinnerPosition = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: FFF;
  padding: 50px;
  z-index: 1000;
  animation: ${rotate} 2s linear infinite;
`;

const LoadingText = styled.p`
  position: fixed;
  top: 65%;
  left: 60%;
  width: 160px;
  height: 43px;
  transform: translate(-50%, -50%);
  text-align: left;
  font: normal normal normal 32px/43px Open Sans;
  letter-spacing: 0px;
  z-index: 1000;
  color: #eeeeee;
`;

export const Modal: React.FC<props> = ({ children, open, closeModal }) => {
  if (!open) return null;
  return (
    <>
      <ModalOverlay></ModalOverlay>
      <ModalCloseButton onClick={closeModal}>
        <i className="fal fa-times"></i>
      </ModalCloseButton>
      <ModalSpinnerPosition>{children}</ModalSpinnerPosition>
      <LoadingText>Loading</LoadingText>
    </>
  );
};
