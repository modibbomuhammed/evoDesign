import React from "react";
import { ModalOverlay, ModalCloseButton, ModalSpinnerPosition, LoadingText} from './ModalStyles';


interface props {
  children: any;
  open: Boolean;
  closeModal: () => void;
}


export const Modal: React.FC<props> = ({ children, open, closeModal }) => {
  if (!open) return null;
  return (
    <>
      <ModalOverlay></ModalOverlay>
      <ModalCloseButton onClick={closeModal}>
        <i className="fal fa-times size"></i>
      </ModalCloseButton>
      <ModalSpinnerPosition>{children}</ModalSpinnerPosition>
      <LoadingText>Loading</LoadingText>
    </>
  );
};
