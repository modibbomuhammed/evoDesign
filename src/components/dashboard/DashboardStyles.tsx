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

const Button = styled.button`
  height: 23px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const ActiveButton = styled(Button)<prop>`
  width: ${(props) => (props.status ? "67px;" : "83px;")}
  background: ${(props) =>
    props.status ? "#ffffff" : "#7d869a"} 0% 0% no-repeat padding-box;
`;

export const DisabledButton = styled(Button)<prop>`
    width: ${(props) => (!props.status ? "67px;" : "83px;")}
    background: ${(props) =>
      !props.status ? "#ffffff" : "#7d869a"} 0% 0% no-repeat padding-box;
    `;

const Text = styled.a`
  height: 11px;
  text-align: left;
  font: normal normal normal 10px/11px Arial;
  text-decoration: none;
`;

export const ActiveText = styled(Text)<prop>`
  width: 27px;
  color: ${(props) => (props.status ? "#3a3a3a;" : "#ffffff;")};
`;

export const DisabledText = styled(Text)<prop>`
  width: 43px;
  color: ${(props) => (!props.status ? "#3a3a3a;" : "#ffffff;")};
`;
