import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SpanStar = styled.span`
  width: 28px;
  height: 25px;
  position: absolute;
  top: 24px;
  left: 15px;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 0px;
  color: #aaaaaa;
`;
export const NavName = styled.span`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 158px;
  height: 34px;
  text-align: left;
  font: normal normal 600 25px/34px "Open Sans";
  letter-spacing: 0px;
  color: #000000;
`;

export const NewOrderWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 950px;
  width: 200px;
  height: 40px;
  background: #404040 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewOrder = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  font: normal normal normal 18px/21px Arial;
  letter-spacing: 0px;
  color: #fcfeff;
  background: transparent;
  white-space: nowrap;
  border: none;
`;
