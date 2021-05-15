import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  height: 125px;
  background: #edf5ff 0% 0% no-repeat padding-box;
  justify-content: space-around;
  border-left: 5px solid #fff;
  flex-basis: 20%;
`;

export const ContactType = styled.span`
  width: 12px;
  height: 14px;
  font-size: 14px;
  margin: 0 10px;
  opacity: 0.5;
`;
export const ContactValue = styled.span`
  width: 63px;
  height: 17px;
  text-align: left;
  font: normal normal normal 12px/17px "Open Sans";
  letter-spacing: 0px;
  color: #333333;
`;

export const ContactWrapper = styled.div`
  width: 181px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
