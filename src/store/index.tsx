import { default as reducers } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>

export { default as rootSaga } from "./sagas";
