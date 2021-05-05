import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

export const ModalCloseButton = styled.div`
  position: relative;
  z-index: 1000;
  top: 30px;
  left: 1113px;
  text-align: left;
  letter-spacing: 0px;
  color: #eeeeee;
  opacity: 1;
  font-size: 35px;
  line-height: 42px;
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const ModalSpinnerPosition = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: FFF;
  padding: 50px;
  z-index: 1000;
  animation: ${rotate} 2s linear infinite;
`;

export const LoadingText = styled.p`
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
