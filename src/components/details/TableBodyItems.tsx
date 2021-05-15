import React from "react";
import { FormatOrders } from "../../store/types/stateTypes";
import { TableRowWrapper, TableDataWrapper } from "./DetailsStyles";
import { ResendButton } from "./ResendButton";

interface props {
  values: FormatOrders[];
}

export const TableBodyItems: React.FC<props> = ({ values }) => {
  return (
    <>
      {values.map((val: FormatOrders, index: number) => {
        const keys = Object.keys(val);
        return (
          <TableRowWrapper key={index} className="underline">
            {keys.map((key) => {
              if (typeof val[key] === "object") {
                if (key === "Date & Time") {
                  return (
                    <TableDataWrapper key={key} className="date">
                      <p>{val[key].day}</p>
                      <p>{val[key].time}</p>
                    </TableDataWrapper>
                  );
                } else {
                  return (
                    <TableDataWrapper key={key} className="subject">
                      <p className="ellipsis">{val[key].title}</p>
                      <p className="ellipsis">{val[key].email}</p>
                    </TableDataWrapper>
                  );
                }
              }
              return (
                <TableDataWrapper key={key} className="type">
                  {val[key]}
                </TableDataWrapper>
              );
            })}

            <td>
              <ResendButton />
            </td>
          </TableRowWrapper>
        );
      })}
    </>
  );
};
