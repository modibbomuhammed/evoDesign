import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserInfoInvoked,
  fetchUserInfoSuccess,
  fetchUserInfoFailed,
  FETCH_USER_INFO,
} from "../actions/";
import { getUser } from "../../services/api";
import { User } from "../types/stateTypes";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* fetchUserInfo() {
  try {
    yield put(fetchUserInfoInvoked());
    const payload: User = yield call(getUser);
    yield delay(2000);
    yield put(fetchUserInfoSuccess(payload));
  } catch (e) {
    yield put(fetchUserInfoFailed(e));
  }
}

function* watchUser() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfo);
}

export default watchUser;
