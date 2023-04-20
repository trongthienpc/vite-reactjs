import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/login/saga";
import LayoutSaga from "./layout/saga";

export default function* rootSaga() {
  yield all([fork(LayoutSaga), fork(authSaga)]);
}
