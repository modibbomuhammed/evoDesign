import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  Section,
  TableWrapper,
  TableBody,
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
import { TableBodyItems } from "../components/details/TableBodyItems";

interface Catch {
  [key: string]: Boolean;
}

const Details = (props: {
  loading: Boolean;
  orders: Orders;
  currentTab: string;
  currentButton: string;
}) => {
  const [formatValues, setFormatValues] = useState<[] | FormatOrders[]>([]);
  const [listOrder, setListOrder] = useState<Catch>({
    date: false,
    subject: false,
    type: false,
    orderId: false,
  });

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

  const handleTabClick = (
    e: React.MouseEvent<HTMLTableHeaderCellElement>
  ): void => {
    const { id: key } = e.target as Element;
    if (props.loading) return;
    const copy: FormatOrders[] = sortArr(formatValues, key);
    setFormatValues(listOrder[key] ? copy.reverse() : copy);
    setListOrder({ ...listOrder, [key]: !listOrder[key] });
  };
  return (
    <Section>
      {props.loading ? (
        <LoadingBox>
          <div></div>
        </LoadingBox>
      ) : !formatValues.length ? (
        <NoItemsBox>
          <NoItemsBoxText>No Items</NoItemsBoxText>
        </NoItemsBox>
      ) : (
        <TableWrapper>
          <TableHead
            tableHeaders={Object.keys(formatValues[0])}
            handleClick={handleTabClick}
          />
          <TableBody>
            <TableBodyItems values={formatValues} />
          </TableBody>
        </TableWrapper>
      )}
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
