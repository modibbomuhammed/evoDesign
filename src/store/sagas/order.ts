import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchOrderInfoInvoked,
  fetchOrderInfoSuccess,
  fetchOrderInfoFailed,
  FETCH_ORDER_INFO,
} from "../actions/";
import { getOrders } from "../../services/api";
import { DONE, LOADING } from "../actions";

// used to delay the saga so that the user would observe the loader
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* fetchOrderInfo(): any {
  try {
    yield put({ type: LOADING });
    yield call(delay, 1000);
    yield put(fetchOrderInfoInvoked());
    const payload: any = yield call(getOrders);
    yield put(fetchOrderInfoSuccess(payload));
    yield put({ type: DONE });
  } catch (e) {
    yield put(fetchOrderInfoFailed(e));
  }
}

function* watchOrders() {
  yield takeLatest(FETCH_ORDER_INFO, fetchOrderInfo);
}
export default watchOrders;
