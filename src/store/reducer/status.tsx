import { Reducer } from "redux";
import { LOADING, DONE, SET_TAB } from "../actions";

const initialState = { loading: false, currentTab: "orders_AAA" };

interface statusState {
  loading: Boolean;
  currentTab: string;
}

interface ACTION_TYPE {
  type: string;
  payload: string;
}

const statusReducer: Reducer<statusState, ACTION_TYPE> = (
  state: statusState = initialState,
  action: ACTION_TYPE
): statusState => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case DONE:
      return { ...state, loading: false };
    case SET_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};

export default statusReducer;
