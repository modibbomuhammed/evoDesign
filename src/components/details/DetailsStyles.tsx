import styled from "styled-components";

interface Index {
  index: number;
}

export const Section = styled.section`
  height: 100%;
`;

export const TableWrapper = styled.table`
  text-align: left;
  width: 100%;
  color: #444444;
`;

export const TableHeader = styled.thead`
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  padding: 5px 0;
`;

export const TableHeaderRow = styled.tr`
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
  white-space: nowrap;
  display: flex;
  width: 100%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  tr:nth-of-type(2n) {
    background-color: #f2f4f7;
  }
  .underline:last-child {
    border: none;
  }
`;

export const TableDataWrapper = styled.td<Index>`
  & p {
    margin: 6px 0;
    height: 22px;
    white-space: nowrap;
    text-align: left;
    font: normal normal normal 16px/22px Open Sans;
    color: #333333;
    width: 100%;
  }

  & .ellipsis {
    width: 245px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LoadingBox = styled.div`
  height: 100%;
  width: 100%;
  margin: 100px auto;
  text-align: center;

  & div {
    width: 17px;
    height: 17px;
    border-radius: 17px;
    display: inline-block;
    background-color: #d2d2d2;
  }

  &::before,
  &::after {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 17px;
    display: inline-block;
    background-color: #d2d2d2;
    margin: 0 10px;
  }
`;

export const TableRowWrapper = styled.tr<Index>`
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #95989a;

  & > .date {
    flex-basis: 10%;
  }
  & > .subject {
    flex-basis: 40%;
  }
  & > .type {
    flex-basis: 20%;
    top: 389px;
    left: 626px;
    width: 109px;
    height: 19px;
    text-align: left;
    font: normal normal normal 14px/19px "Open Sans";
    letter-spacing: 0px;
    color: #333333;
    opacity: 1;
  }
  & > .order_id {
    flex-basis: 18%;
    width: 64px;
    height: 19px;
    text-align: left;
    font: normal normal normal 14px/19px "Open Sans";
    letter-spacing: 0px;
    color: #333333;
    opacity: 1;
  }
`;

export const Button = styled.button`
  border: none;
  flex-basis: 10%;
  top: 384px;
  left: 1047px;
  width: 88px;
  height: 28px;
  background: #7d869a 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export const ButtonText = styled.a`
  width: 50px;
  height: 14px;
  text-align: left;
  font: normal normal normal 12px/14px Arial;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
`;

export const NoItemsBox = styled.div`
  height: 200px;
  background: #fafafa 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoItemsBoxText = styled.p`
  width: 89px;
  height: 28px;
  text-align: left;
  font: normal normal normal 21px/28px Open Sans;
  letter-spacing: 0px;
  color: #cccccc;
  opacity: 1;
  white-space: nowrap;
`;
