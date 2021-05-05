import { all } from "redux-saga/effects";
import fetchUserInfo from "./user";
import fetchOrderInfo from "./order";

function* watchAll() {
  yield all([fetchUserInfo(), fetchOrderInfo()]);
}

export default watchAll;
