import styled, { keyframes } from "styled-components";
import { ReactComponent as ReactLogo } from "./spiner.svg";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(7px);
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 30px;
  width: 22px;
  height: 35px;
  left: 1113px;
  text-align: left;
  letter-spacing: 0px;
  color: #eeeeee;
  z-index: 1000;

  & .size {
    font-size: 35px;
    font-weigth: 300;
    line-height: 42px;
  }
`;

export const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const LoadingText = styled.p`
  position: absolute;
  top: 731px;
  left: 503px;
  width: 160px;
  height: 43px;
  text-align: left;
  font: normal normal normal 32px/43px Open Sans;
  letter-spacing: 0px;
  color: #eeeeee;
  opacity: 1;
  z-index: 1000;
  color: #eeeeee;
`;

export const RotatingIcon = styled(ReactLogo)`
  position: absolute;
  top: 626px;
  left: 545px;
  width: 75px;
  height: 75px;
  text-align: left;
  font: normal normal 300 75px/90px Font Awesome 5 Pro;
  letter-spacing: 0px;
  color: #eeeeee;
  opacity: 1;
  z-index: 1000;
  animation: ${rotate} 2s linear infinite;
`;
