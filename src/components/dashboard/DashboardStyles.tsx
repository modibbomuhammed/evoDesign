import styled from "styled-components";

interface prop {
  status: Boolean;
}

export const Section = styled.section`
  height: 41px;
  background: #7d869a 0% 0% no-repeat padding-box;
  display: flex;
  padding-left: 10px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

export const StatusMessage = styled.div`
  height: 100%;
  font: normal normal 600 16px/22px "Open Sans";
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 73%;
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
