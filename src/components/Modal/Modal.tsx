import React from "react";
import {
  ModalOverlay,
  ModalCloseButton,
  RotatingIcon,
  LoadingText,
} from "./ModalStyles";

interface props {
  open: Boolean;
  closeModal: () => void;
}

export const Modal: React.FC<props> = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <>
      <ModalOverlay></ModalOverlay>
      <ModalCloseButton onClick={closeModal}>
        <i className="fal fa-times size"></i>
      </ModalCloseButton>
        <RotatingIcon></RotatingIcon>
        <LoadingText>Processing</LoadingText>
    </>
  );
};
