import { ILogin, IRegister, IUser } from "@src/common/interface";

export interface IInitialState {
  user: IUser;
  isLoading: boolean;
}
export enum UserActions {
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
  SET_ASYNC_USER = "SET_ASYNC_USER",
  LOGOUT = "LOGOUT",
  SIGH_UP_ASYNC = "SIGN_UP_ASYCN",
  SET_USER_REJECTED = "SET_USER_REJECTED",
}

export interface ISetUser {
  type: UserActions.SET_USER;
  payload: IUser;
}

export interface ISetLoading {
  type: UserActions.SET_LOADING;
}

export interface ISetAsyncUser {
  type: UserActions.SET_ASYNC_USER;
}

export interface ILogout {
  type: UserActions.LOGOUT;
}

export interface ISighUpAsync {
  type: UserActions.SIGH_UP_ASYNC;
}

export interface ISetUserRejected {
  type: UserActions.SET_USER_REJECTED;
}

export type UserAction =
  | ISetUser
  | ISetLoading
  | ISetAsyncUser
  | ILogout
  | ISighUpAsync
  | ISetUserRejected;

export type AsyncGetUser = {
  type: UserActions.SET_ASYNC_USER;
  payload: ILogin;
};

export type AsyncSighUp = {
  type: UserActions.SIGH_UP_ASYNC;
  payload: IRegister;
};
