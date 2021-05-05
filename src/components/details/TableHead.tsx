import React from "react";
import { TableHeader, TableHeaderRow } from "./DetailsStyles";

interface props {
  handleClick: (e: any) => any;
}
export const TableHead: React.FC<props> = ({ handleClick }) => {
  return (
    <TableHeader>
      <TableHeaderRow
        style={{ flexBasis: "10%" }}
        id="date"
        onClick={handleClick}
      >
        DATE & TIME
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "40%" }}
        id="subject"
        onClick={handleClick}
      >
        SUBJECT
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "21%" }}
        id="type"
        onClick={handleClick}
      >
        COMMUNICATION TYPE
      </TableHeaderRow>
      <TableHeaderRow
        style={{ flexBasis: "15%" }}
        id="order_id"
        onClick={handleClick}
      >
        ORDERS#
      </TableHeaderRow>
    </TableHeader>
  );
};
