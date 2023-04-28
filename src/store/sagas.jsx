import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/login/saga";
import LayoutSaga from "./layout/saga";
import ecommerceSaga from "./e-commerce/saga";
import dashboardSaga from "./dashboard/saga";
import dashboardSaas from "./dashboard-saas/saga";
import dashboardCrypto from "./dashboard-crypto/saga";
import dashboardBlog from "./dashboard-blog/saga";
import dashboardJobs from "./dashboard-jobs/saga";
import crypto from "./crypto/saga";
import project from "./projects/saga";
import tasks from "./tasks/saga";
import contacts from "./contacts/saga";

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    fork(authSaga),
    fork(ecommerceSaga),
    fork(dashboardSaga),
    fork(dashboardSaas),
    fork(dashboardCrypto),
    fork(dashboardBlog),
    fork(dashboardJobs),
    fork(crypto),
    fork(project),
    fork(tasks),
    fork(contacts),
  ]);
}
