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

const Details = (props: {
  loading: Boolean;
  orders: any;
  currentTab: string;
  currentButton: string;
}) => {
  const [formatValues, setFormatValues] = useState<any>([]);
  const [asc, setAsc] = useState(true);

  const { orders, currentTab, currentButton } = props;
  useEffect(() => {
    if (orders) {
      let format: any;
      const orderTab = orders[currentTab];
      if (currentButton in orderTab) {
        format = formatArr(orderTab[currentButton]);
        setFormatValues(format);
      } else {
        setFormatValues([]);
      }
    }
  }, [orders, currentButton, currentTab]);

  const handleTabClick = (e: any): void => {
    if (props.loading) return;
    const copy: any[] = sortArr(formatValues, e);
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
            formatValues.map((val: any, index: number) => {
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

function mapStateToProps(state: any) {
  return {
    loading: state.statusReducer.loading,
    currentTab: state.statusReducer.currentTab,
    orders: state.ordersReducer.order,
    currentButton: state.ordersReducer.button,
  };
}

export default connect(mapStateToProps)(Details);
