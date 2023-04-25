import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/login/saga";
import LayoutSaga from "./layout/saga";
import ecommerceSaga from "./e-commerce/saga";
import dashboardSaga from "./dashboard/saga";

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    fork(authSaga),
    fork(ecommerceSaga),
    fork(dashboardSaga),
  ]);
}
