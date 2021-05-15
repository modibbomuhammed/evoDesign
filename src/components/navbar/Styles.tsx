import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #333333;
  padding-bottom: 20px;
  margin-bottom: 8px;
`;
export const SpanStar = styled.span`
  width: 28px;
  height: 25px;
  font-weight: 300;
  font-size: 25px;
  color: #aaaaaa;
`;
export const NavName = styled.span`
  font: normal normal 600 25px/34px "Open Sans";
  color: #000000;
  margin-left: 20px;
`;

export const NewOrderWrapper = styled.div`
  width: 200px;
  height: 40px;
  background: #404040 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewOrderButton = styled.button`
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
