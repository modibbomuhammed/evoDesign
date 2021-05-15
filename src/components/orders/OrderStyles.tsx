import styled from "styled-components";

interface prop {
  active: Boolean;
}

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 81px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-bottom: 2px solid #333333;
  margin-bottom: 1px;
`;
export const TabsWrapper = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Tab = styled.li<prop>`
list-style-type: none;
height: 40px;
background: ${(props) => (props.active ? "#3A3A3A;" : "#d2d2d2;")}
padding: 0 45px;
margin-left: 2px;
cursor: pointer;

white-space: nowrap;
font: normal normal bold 12px/14px Arial;
letter-spacing: 0px;
color: ${(props) => (props.active ? "#ffffff;" : "#3a3a3a")};
display: flex;
align-items: center;
justify-content: center;
`;
