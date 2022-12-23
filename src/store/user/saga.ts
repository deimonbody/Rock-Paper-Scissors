import { IUser } from "@src/common/interface";
import { getErrorMessage } from "@src/helper/error.helper";
import { signIn, signUp } from "@src/helper/firebase.helper";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import { setUserActions, setUserRejected } from "./actions";
import { AsyncGetUser, AsyncSighUp, UserActions } from "./common";

export function* getAsyncUser({
  payload,
}: AsyncGetUser): Generator<any, void, IUser> {
  const { email, password } = payload;
  try {
    const user = yield call(signIn, { email, password });
    yield put(setUserActions(user));
  } catch (err) {
    const message = getErrorMessage(err);
    yield put(setUserRejected());
    toast.error(message);
  }
}

export function* getAsyncSighUpUser({
  payload,
}: AsyncSighUp): Generator<any, void, IUser> {
  const { email, name, password } = payload;
  try {
    const user = yield call(signUp, { email, password, name });
    yield put(setUserActions(user));
  } catch (err) {
    const message = getErrorMessage(err);
    toast.error(message);
    yield put(setUserRejected());
  }
}

export function* userSaga() {
  yield takeEvery(UserActions.SET_ASYNC_USER, getAsyncUser);
  yield takeEvery(UserActions.SIGH_UP_ASYNC, getAsyncSighUpUser);
}
