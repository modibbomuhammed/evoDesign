import styled from "styled-components";

interface prop {
    status: Boolean;
}

export const Section = styled.section`
  position: absolute;
  top: 295px;
  left: 15px;
  width: 1135px;
  height: 41px;
  background: #7d869a 0% 0% no-repeat padding-box;
`;
export const Container = styled.div`
  position: absolute;
  top: 9px;
  left: 10px;
  width: 170px;
  height: 23px;
  display: flex;
  justify-content: space-around;
`;

export const StatusMessage = styled.div`
  white-space: nowrap;
  width: 126px;
  height: 100%;
  font: normal normal 600 16px/22px "Open Sans";
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  display: flex;
  letter-spacing: 0px;
  align-items: center;
`;

 export const ActiveButton = styled.button<prop>`
    width: ${(props) => (props.status ? "67px;" : "83px;")}
    height: 23px;
    border-radius: 11px;
    background: ${(props) =>
      props.status ? "#ffffff" : "#7d869a"} 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
    opacity: 1;
  `;
 export const DisabledButton = styled.button<prop>`
    width: ${(props) => (!props.status ? "67px;" : "83px;")}
    height: 23px;
    border-radius: 11px;
    background: ${(props) =>
      !props.status ? "#ffffff" : "#7d869a"} 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
    opacity: 1;
  `;
 export const ActiveText = styled.a<prop>`
    display: inline-block;
    width: 27px;
    height: 11px;
    text-align: left;
    font: normal normal normal 10px/11px Arial;
    letter-spacing: 0px;
    color: ${(props) => (props.status ? "#3a3a3a;" : "#ffffff;")}
    text-decoration: none;
    opacity: 1;
  `;
 export const DisabledText = styled.a<prop>`
    width: 43px;
    height: 11px;
    text-align: left;
    font: normal normal normal 10px/11px Arial;
    letter-spacing: 0px;
    color: ${(props) => (!props.status ? "#3a3a3a;" : "#ffffff;")}
    text-decoration: none;
    opacity: 1;
  `;
