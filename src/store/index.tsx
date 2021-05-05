import { default as reducers } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  ...reducers,
});

export { default as rootSaga } from "./sagas";
