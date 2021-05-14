import React from "react";
import { TableHeader, TableHeaderRow } from "./DetailsStyles";

interface props {
  handleClick: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}
export const TableHead: React.FC<props> = ({ handleClick }) => {
  return (
    <TableHeader>
      <TableHeaderRow
        style={{ flexBasis: "10%" }}
        id="date"
        onClick={handleClick}
      >
        <td>DATE & TIME</td>
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "40%" }}
        id="subject"
        onClick={handleClick}
      >
        <td>SUBJECT</td>
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "21%" }}
        id="type"
        onClick={handleClick}
      >
        <td>COMMUNICATION TYPE</td>
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "15%" }}
        id="order_id"
        onClick={handleClick}
      >
        <td>ORDERS#</td>
      </TableHeaderRow>
    </TableHeader>
  );
};
