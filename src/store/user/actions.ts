import { ILogin, IRegister, IUser } from "@src/common/interface";

import { ILogout, ISetUser, UserActions } from "./common";

export const setLoading = () => ({ type: UserActions.SET_LOADING });

export const getAsyncUserAction = ({ email, password }: ILogin) => ({
  type: UserActions.SET_ASYNC_USER,
  payload: { email, password },
});

export const setUserActions = (user: IUser): ISetUser => ({
  type: UserActions.SET_USER,
  payload: user,
});

export const signUpAsyncActions = ({ email, password, name }: IRegister) => ({
  type: UserActions.SIGH_UP_ASYNC,
  payload: {
    email,
    name,
    password,
  },
});

export const setUserRejected = () => ({ type: UserActions.SET_USER_REJECTED });

export const logoutAction = (): ILogout => ({ type: UserActions.LOGOUT });
