import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { ResendButton } from "../components/details/ResendButton";

import {
  Section,
  TableWrapper,
  TableBody,
  TableDataWrapper,
  TableRowWrapper,
  LoadingBox,
  NoItemsBox,
  NoItemsBoxText,
} from "../components/details/DetailsStyles";
import sortArr from "../helpers/sortArray";
import { TableHead } from "../components/details/TableHead";
import formatArr from "../helpers/formatArray";
import { RootState } from "../store";
import { Orders } from "../store/types/stateTypes";
import { FormatOrders } from "../store/types/stateTypes";

const Details = (props: {
  loading: Boolean;
  orders: Orders;
  currentTab: string;
  currentButton: string;
}) => {
  const [formatValues, setFormatValues] = useState<[] | FormatOrders[]>([]);
  const [asc, setAsc] = useState(true);

  const { orders, currentTab, currentButton } = props;
  useEffect(() => {
    if (orders) {
      let format;
      const orderTab = orders[currentTab];
      if (currentButton in orderTab) {
        format = formatArr(orderTab[currentButton]);
        setFormatValues(format);
      } else {
        setFormatValues([]);
      }
    }
  }, [orders, currentButton, currentTab]);

  const handleTabClick = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    const target = e.target as Element;
    if (props.loading) return;
    const copy: FormatOrders[] = sortArr(formatValues, target.id);
    setFormatValues(asc ? copy : copy.reverse());
    setAsc(!asc);
  };
  return (
    <Section>
      <TableWrapper>
        <TableHead handleClick={handleTabClick} />
        <TableBody>
          {props.loading ? (
            <tr>
              <td>
                <LoadingBox>
                  <div></div>
                </LoadingBox>
              </td>
            </tr>
          ) : !formatValues.length ? (
            <tr>
              <td>
                <NoItemsBox>
                  <NoItemsBoxText>No Items</NoItemsBoxText>
                </NoItemsBox>
              </td>
            </tr>
          ) : (
            formatValues.map((val: FormatOrders, index: number) => {
              const keys = Object.keys(val);
              return (
                <TableRowWrapper
                  key={val.order_id + Math.random() * 100}
                  index={index}
                >
                  {keys.map((key) => {
                    if (typeof val[key] === "object") {
                      if (key === "date") {
                        return (
                          <TableDataWrapper
                            key={key}
                            index={index}
                            className={key}
                          >
                            <p>{val[key].day}</p>
                            <p>{val[key].time}</p>
                          </TableDataWrapper>
                        );
                      } else {
                        return (
                          <TableDataWrapper
                            key={key}
                            index={index}
                            className={key}
                          >
                            <p className="ellipsis">{val[key].title}</p>
                            <p className="ellipsis">{val[key].email}</p>
                          </TableDataWrapper>
                        );
                      }
                    }
                    return (
                      <TableDataWrapper key={key} index={index} className={key}>
                        {val[key]}
                      </TableDataWrapper>
                    );
                  })}
                  <td>
                    <ResendButton />
                  </td>
                </TableRowWrapper>
              );
            })
          )}
        </TableBody>
      </TableWrapper>
    </Section>
  );
};

function mapStateToProps(state: RootState) {
  return {
    loading: state.statusReducer.loading,
    currentTab: state.statusReducer.currentTab,
    orders: state.ordersReducer.order,
    currentButton: state.ordersReducer.button,
  };
}

export default connect(mapStateToProps)(Details);
