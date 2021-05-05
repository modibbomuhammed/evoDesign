import { Reducer } from "redux";
import { Orders } from "../types/stateTypes";
import { FETCH_ORDER_INFO_SUCCESS, SET_BUTTON } from "../actions/order";

interface IAppState {
  order: Orders;
  button: string;
}

interface ACTIONTYPE {
  type: string;
  payload: Orders | any;
}

const initialState: IAppState | any = {};

const orderReducer: Reducer<IAppState, ACTIONTYPE> = (
  state = initialState,
  action: ACTIONTYPE
): IAppState => {
  switch (action.type) {
    case FETCH_ORDER_INFO_SUCCESS:
      return { ...state, order: { ...action.payload } };
    case SET_BUTTON:
      return { ...state, button: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
