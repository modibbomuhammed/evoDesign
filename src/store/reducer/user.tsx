import { User } from "../types/stateTypes";
import { FETCH_USER_INFO_SUCCESS } from "../actions";

const initialState: User | any = {};

interface ACTIONTYPE {
  type: string;
  payload: User | undefined;
}

function userReducer(state: User = initialState, action: ACTIONTYPE): User {
  switch (action.type) {
    case FETCH_USER_INFO_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
