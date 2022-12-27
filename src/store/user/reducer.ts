import { LanguagesEnum } from "@src/common/enum";

import { IInitialState, UserAction, UserActions } from "./common";

const initialState: IInitialState = {
  user: { name: "", email: "", uid: "" },
  isLoading: false,
  language: LanguagesEnum.ENGLISH,
};

export const userReducer = (
  state = initialState,
  actions: UserAction,
): IInitialState => {
  switch (actions.type) {
    case UserActions.SET_ASYNC_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserActions.SET_USER: {
      return {
        ...state,
        user: actions.payload,
        isLoading: false,
      };
    }
    case UserActions.LOGOUT: {
      return {
        ...state,
        user: { name: "", email: "", uid: "" },
      };
    }
    case UserActions.SIGH_UP_ASYNC: {
      return { ...state, isLoading: true };
    }
    case UserActions.SET_USER_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UserActions.CHANGE_LANGUADE: {
      return { ...state, language: actions.payload };
    }
    default: {
      return state;
    }
  }
};
