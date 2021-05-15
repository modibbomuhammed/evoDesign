import React from "react";
import { TableHeader, TableHeaderRow } from "./DetailsStyles";

interface props {
  handleClick: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}
export const TableHead: React.FC<props> = ({ handleClick }) => {
  return (
    <TableHeader>
      <TableHeaderRow style={{ flexBasis: "10%" }} onClick={handleClick}>
        <td id="date">DATE & TIME</td>
      </TableHeaderRow>
      <TableHeaderRow style={{ flexBasis: "40%" }} onClick={handleClick}>
        <td id="subject">SUBJECT</td>
      </TableHeaderRow>
      <TableHeaderRow style={{ flexBasis: "21%" }} onClick={handleClick}>
        <td id="type">COMMUNICATION TYPE</td>
      </TableHeaderRow>
      <TableHeaderRow style={{ flexBasis: "15%" }} onClick={handleClick}>
        <td id="order_id">ORDER#</td>
      </TableHeaderRow>
    </TableHeader>
  );
};
