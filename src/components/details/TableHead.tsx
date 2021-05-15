import React from "react";
import { TableHeader, TableHeaderRow } from "./DetailsStyles";

interface props {
  handleClick: (e: any) => void;
  tableHeaders: string[];
}
interface config {
  [key: string]: string;
}
const flexConfig: config = {
  "Date & Time": "10%",
  Subject: "40%",
  "Communication Type": "21%",
  "Order#": "15%",
};

export const TableHead: React.FC<props> = ({ handleClick, tableHeaders }) => {
  return (
    <TableHeader>
      <TableHeaderRow>
        {tableHeaders.map((key) => (
          <th
            key={key}
            style={{ flexBasis: flexConfig[key], color: "#878787" }}
            id={key}
            onClick={handleClick}
          >
            {key.toUpperCase()}
          </th>
        ))}
      </TableHeaderRow>
    </TableHeader>
  );
};
