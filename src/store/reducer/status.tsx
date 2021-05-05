import { Reducer } from "redux";
import { LOADING, DONE, SETTAB } from "../actions";

const initialState = { loading: false, currentTab: "orders_AAA" };

interface statusState {
  loading: Boolean;
  currentTab: string;
}

interface ACTIONTYPE {
  type: string;
  payload: string;
}

const statusReducer: Reducer<statusState, ACTIONTYPE> = (
  state: statusState = initialState,
  action: ACTIONTYPE
): statusState => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case DONE:
      return { ...state, loading: false };
    case SETTAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};

export default statusReducer;
