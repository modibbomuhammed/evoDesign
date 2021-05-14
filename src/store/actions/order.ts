import { AxiosError } from 'axios';
import { ORDERACTIONTYPE } from '../reducer/orders';
import { Orders } from '../types/stateTypes';
// action types
export const FETCH_ORDER_INFO = "FETCH_ORDER_INFO";
export const FETCH_ORDER_INFO_INVOKED = "FETCH_ORDER_INFO_INVOKED";
export const FETCH_ORDER_INFO_SUCCESS = "FETCH_ORDER_INFO_SUCCESS";
export const FETCH_ORDER_INFO_FAILED = "FETCH_ORDER_INFO_FAILED";
export const SET_BUTTON = "SET_BUTTON";

//action creators
export const fetchOrderInfo = () => ({ type: FETCH_ORDER_INFO });
export const fetchOrderInfoInvoked = () => ({ type: FETCH_ORDER_INFO_INVOKED });
export const fetchOrderInfoSuccess = (payload: Orders) => ({
  type: FETCH_ORDER_INFO_SUCCESS,
  payload,
});
export const fetchOrderInfoFailed = (payload: AxiosError) : ORDERACTIONTYPE => ({
  type: FETCH_ORDER_INFO_FAILED,
  payload,
});

export const setButton = (payload: string): ORDERACTIONTYPE  => ({ type: SET_BUTTON, payload });
